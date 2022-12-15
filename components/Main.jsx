import Link from "next/link";
import React from "react"
import { AiOutlineMail } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Main = () => {
    return (
    <div id='home'className="w-full h-screen p-2 py-4 text-center">
        <div className="max-w-[1240px] md:pt-20 w-full h-full mx-auto py-2 flex justify-center items-center ">
            <div>
                {/* <p className="uppercase text-sm tracking-widest text-[18px] text-gray-600">
                    CONSTRUYAMOS ALGO JUNTOS
                </p> */}
                {/* <h1 className="py-2 text-[#000] text-[6.5rem]">
                    Hola soy <span className="text-[#5651e5]">Gonzalo</span> 
                </h1> */}
                <h1 className="py-2 text-[#000]">
                     Desarrollador Web Front-End Developer 
                </h1>
                <p className="py-4 text-[28px] text-gray-600 sm:max-w-[70%] m-auto">
                Experiencia en la creación de sitios web y aplicaciones web. Me especializo en JavaScript y tengo experiencia con React.

                
                </p>
                <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                    <a 
                        href='https://www.linkedin.com/in/gonzalo-ferreyra-167993205/'
                        target='_black'
                        rel='noreferrer'
                    >
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 
                        cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaLinkedinIn />
                        </div>
                    </a>
                    <a
                        href="https://github.com/GonzaFerreyra41"
                        target='_black'
                        rel='noreferrer'
                    >
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 
                        cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaGithub />
                        </div>
                    </a>
                    <Link href='/#contact'>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 
                        cursor-pointer hover:scale-110 ease-in duration-300">
                            <AiOutlineMail />
                        </div>
                    </Link>
                    <a 
                        href="https://www.instagram.com/goon.ferreyra/?hl=es-la"
                        target='_black'
                        rel='noreferrer'
                    >
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 
                        cursor-pointer hover:scale-110 ease-in duration-300">
                            <BsInstagram />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>        
    );
}

export default Main;