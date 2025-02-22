import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; 
import authImg from '../../assets/img/auth/auth.png';

const Auth = () => {
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
        <div>
            <div>
                <div className="absolute top-0 right-0 z-10">
                    <svg width="322" height="386" viewBox="0 0 322 386" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle opacity="0.2" cx="317" cy="69" r="317" fill="#169C89" />
                    </svg>
                </div>
                <div className="absolute top-0 left-0">
                    <svg width="393" height="358" viewBox="0 0 393 358" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="73.5" cy="-17.5" r="375.5" fill="url(#paint0_radial_7_20)" />
                        <defs>
                            <radialGradient
                                id="paint0_radial_7_20"
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
                    className="relative z-10  w-[332px] mt-[92px] ml-[20px] h-[332px]"
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <img src={authImg} alt="auth" />
                </motion.div>
            </div>
            <motion.div
                className="flex flex-col items-center justify-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="w-[343px] h-[340px] relative">
                    <motion.div className="mb-[30px]" variants={childVariants}>
                        <div className="text-[#169C89] font-medium text-[31px] leading-7">Давайте начнем</div>
                        <div className="text-[#999999] font-medium text-[22px] leading-7">Все начинается здесь</div>
                    </motion.div>
                    <motion.div
                        className="flex flex-col gap-y-[10px] items-center justify-center"
                        variants={childVariants}
                    >
                        <Link to="/auth/login">
                            <motion.button
                                className="w-[343px] h-[58px] bg-[#169C89] text-white rounded-[10px] text-[24px]"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Войти
                            </motion.button>
                        </Link>
                        <Link to="/auth/register">
                            <motion.button
                                className="w-[343px] h-[58px] text-[#169C89] border-[2px] border-[#169C89] rounded-[10px] text-[24px]"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Зарегистрироваться
                            </motion.button>
                        </Link>
                    </motion.div>
                    <motion.div
                        className="absolute bottom-0 flex flex-col items-center justify-center gap-y-[10px]"
                        variants={childVariants}
                    >
                        <div className="text-[#999999] text-[19px]">Или войдите через</div>
                        <motion.button
                            className="w-[343px] h-[50px] bg-[#F8F8F8] border-[2px] border-[#DDDDDD] rounded-[10px] flex items-center justify-center gap-x-[10px]"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_7_47)">
                                    <path d="M19.9895 10.1871C19.9895 9.3677 19.9214 8.76976 19.7742 8.14969H10.1992V11.848H15.8195C15.7062 12.7671 15.0943 14.1512 13.7346 15.0813L13.7155 15.2051L16.7429 17.4969L16.9527 17.5174C18.8789 15.7789 19.9895 13.2211 19.9895 10.1871Z" fill="#4285F4" />
                                    <path d="M10.1992 19.9313C12.9527 19.9313 15.2642 19.0454 16.9526 17.5174L13.7345 15.0813C12.8734 15.6682 11.7175 16.0779 10.1992 16.0779C7.50236 16.0779 5.21346 14.3395 4.39753 11.9366L4.27793 11.9466L1.12997 14.3273L1.08881 14.4391C2.76582 17.6945 6.21054 19.9313 10.1992 19.9313Z" fill="#34A853" />
                                    <path d="M4.39754 11.9366C4.18225 11.3166 4.05765 10.6521 4.05765 9.96565C4.05765 9.27908 4.18225 8.61473 4.38621 7.99466L4.38051 7.8626L1.1931 5.44366L1.08882 5.49214C0.397637 6.84305 0.0010376 8.36008 0.0010376 9.96565C0.0010376 11.5712 0.397637 13.0882 1.08882 14.4391L4.39754 11.9366Z" fill="#FBBC05" />
                                    <path d="M10.1992 3.85336C12.1142 3.85336 13.4059 4.66168 14.1425 5.33717L17.0206 2.59107C15.253 0.985496 12.9527 0 10.1992 0C6.21055 0 2.76582 2.23672 1.08881 5.49214L4.3862 7.99465C5.21346 5.59183 7.50237 3.85336 10.1992 3.85336Z" fill="#EB4335" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_7_47">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </motion.button>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Auth;