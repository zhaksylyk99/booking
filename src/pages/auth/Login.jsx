import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import loginImg from '../../assets/img/auth/login.png';

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <div className="">
      <div>
        <Link to='/auth' className='relative z-10 top-4  left-4  '>
          <button>
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="34" height="34" rx="17" fill="#C4E4E0" />
              <path d="M11.4 24L10 22.6L15.6 17L10 11.4L11.4 10L17 15.6L22.6 10L24 11.4L18.4 17L24 22.6L22.6 24L17 18.4L11.4 24Z" fill="#169C89" />
            </svg>
          </button>
        </Link>
        <div className="absolute top-0 right-0">
          <svg width="252" height="236" viewBox="0 0 252 236" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.2" cx="206" cy="30" r="206" fill="#169C89" />
          </svg>
        </div>
        <div className="absolute top-0 left-0">
          <svg width="393" height="358" viewBox="0 0 393 358" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="73.5" cy="-17.5" r="375.5" fill="url(#paint0_radial_1_196)" />
            <defs>
              <radialGradient
                id="paint0_radial_1_196"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(73.5 -17.5) rotate(90) scale(375.5)"
              >
                <stop stopColor="#C1F6F0" />
                <stop offset="1" stopColor="#DDF6F3" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <motion.div
          className="relative z-10 w-[251px] h-[251px]"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <img src={loginImg} alt="login" />
        </motion.div>
      </div>
      <motion.div
        className="flex flex-col items-center justify-center  top-1/2 -translate-x-1/2 -translate-y-1/2 relative "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="mb-[30px]" variants={childVariants}>
          <div className="text-[#169C89] font-medium text-[31px] leading-6">С возвращением!</div>
          <div className="text-[#999999] text-[22px]">Введите свои данные для входа</div>
        </motion.div>
        <motion.div className="flex flex-col gap-y-[10px]" variants={childVariants}>
          <div className="relative w-[343px]">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#C7C7C7]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z"
                  fill="#B1B1B1"
                />
              </svg>
            </span>
            <motion.input
              type="email"
              placeholder="Электронный адрес"
              className="border-2 border-[#DDDDDD] w-[343px] h-[58px] bg-[#F8F8F8] rounded-[10px] pl-[48px] placeholder:text-[#C7C7C7] placeholder:leading-3"
              whileFocus={{ scale: 1.02 }}
            />
          </div>
          <div className="relative w-[343px]">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C7C7C7]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 17C11.4696 17 10.9609 16.7893 10.5858 16.4142C10.2107 16.0391 10 15.5304 10 15C10 13.89 10.89 13 12 13C12.5304 13 13.0391 13.2107 13.4142 13.5858C13.7893 13.9609 14 14.4696 14 15C14 15.5304 13.7893 16.0391 13.4142 16.4142C13.0391 16.7893 12.5304 17 12 17ZM18 20V10H6V20H18ZM18 8C18.5304 8 19.0391 8.21071 19.4142 8.58579C19.7893 8.96086 20 9.46957 20 10V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V10C4 8.89 4.89 8 6 8H7V6C7 4.67392 7.52678 3.40215 8.46447 2.46447C9.40215 1.52678 10.6739 1 12 1C12.6566 1 13.3068 1.12933 13.9134 1.3806C14.52 1.63188 15.0712 2.00017 15.5355 2.46447C15.9998 2.92876 16.3681 3.47995 16.6194 4.08658C16.8707 4.69321 17 5.34339 17 6V8H18ZM12 3C11.2044 3 10.4413 3.31607 9.87868 3.87868C9.31607 4.44129 9 5.20435 9 6V8H15V6C15 5.20435 14.6839 4.44129 14.1213 3.87868C13.5587 3.31607 12.7956 3 12 3Z"
                  fill="#B1B1B1"
                />
              </svg>
            </span>
            <motion.input
              type={showPassword ? 'text' : 'password'}
              placeholder="Пароль"
              className="border-2 border-[#DDDDDD] w-[343px] h-[58px] bg-[#F8F8F8] rounded-[10px] pl-[48px] pr-[48px] placeholder:text-[#C7C7C7] placeholder:leading-3"
              whileFocus={{ scale: 1.02 }}
            />
            <span
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#C7C7C7] cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
                    stroke="#B1B1B1"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    stroke="#B1B1B1"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2 5.27L3.28 4L20 20.72L18.73 22L15.65 18.92C14.5 19.3 13.28 19.5 12 19.5C7 19.5 2.73 16.39 1 12C1.69 10.24 2.79 8.69 4.19 7.46L2 5.27ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15.0005 12.3406 14.943 12.6787 14.83 13L11 9.17C11.3213 9.05698 11.6594 8.99949 12 9ZM12 4.5C17 4.5 21.27 7.61 23 12C22.1839 14.0732 20.7969 15.8727 19 17.19L17.58 15.76C18.9629 14.8034 20.0782 13.5091 20.82 12C20.0116 10.3499 18.7564 8.95977 17.1973 7.9875C15.6381 7.01524 13.8375 6.49988 12 6.5C10.91 6.5 9.84 6.68 8.84 7L7.3 5.47C8.74 4.85 10.33 4.5 12 4.5ZM3.18 12C3.98844 13.6501 5.24357 15.0402 6.80273 16.0125C8.36189 16.9848 10.1625 17.5001 12 17.5C12.69 17.5 13.37 17.43 14 17.29L11.72 15C11.0242 14.9254 10.3748 14.6149 9.87997 14.12C9.38512 13.6252 9.07458 12.9758 9 12.28L5.6 8.87C4.61 9.72 3.78 10.78 3.18 12Z"
                    fill="#169C89"
                  />
                </svg>
              )}
            </span>
          </div>
          <motion.button
            className="bg-[#169C89] text-white w-[343px] h-[58px] text-[20px] mt-[30px] rounded-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Войти
          </motion.button>
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute bottom-0 bg-[#E8F3F2] w-full h-[80px] flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.8, duration: 0.5 } }}
      >
        <div className="text-[#999999] text-[18px]">Нет аккаунта?</div>
        <Link to="/auth/register" className="text-[#169C89] text-[18px]">
          Зарегистрироваться
        </Link>
      </motion.div>
    </div>
  );
}

export default Login;