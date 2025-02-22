import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";



export const register = async (req, res)=>{
    const { username, email, password } = req.body;

    try{

    
    // HASH THE PASSWORD

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
   
    // CREATE A NEW USER AND TO DB

    const newUser = await prisma.user.create({
        data:{
            username,
            email,
            password:hashedPassword,
        },
    });

    console.log(newUser)
}catch(err){
    console.log(err);
    res.status(500).json({message:"Ощибка при создания пользователя!"});
}

    res.status(201).json({message: "Акаунт успешно создан"});
};

export const login = async (req, res)=>{
    const {username, password} = req.body;

    try{
     
    //CHECK IF THE  USER EXITS

    const user = await prisma.user.findUnique({
        where:{username:username}
    })

    if(!user) return res.status(401).json({message:"Неверные учетные данные"});

    //CHECK IF THE PASSWORD IS CORRECT

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(!isPasswordValid) 
        return res.status(401).json({message:"Неверные учетные данные"});

    //GENERATE COOKIE TOKEN AND SEND  TO THE USER

    //res.setHeader("Set-Cookie", "test=" + "myValye").json("success")
    const age = 1000 * 60 * 60 * 24 * 7;
    
    const token = jwt.sign({
        id:user.id
    }, 
        process.env.JWT_SECRET_KEY,
        {expiresIn: age}
    );

    const {password:userPassword, ...userInfo} = user
    
    res
        .cookie("token", token, {
        httpOnly:true,
        //secure:true,
        maxAge: age,
    })
        .status(200)
        .json(userInfo);
    
    } catch(err){
        console.log(err)
        res.status(500).json({message:"Не удалось авторизоваться"})
    }
};

export const logout = (req, res)=>{
 res.clearCookie("token").status(200).json({message:"Успешный выход из системы"})   
}