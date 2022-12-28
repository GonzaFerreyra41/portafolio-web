import Image from "next/image";
import React from "react";
import Html from "../public/img/html.png"
import Css from "../public/img/css.png"
import JavaScript from "../public/img/javascript.png"
import NextJS from "../public/img/nextjs.png"
import ReactJS from "../public/img/react.png"
import TailwindCSS from "../public/img/tailwind.png"
import Github from "../public/img/github1.png"
import AOS from 'aos';
import 'aos/dist/aos.css';


const Skills = () => {
    AOS.init();
    
    return (
    <div data-aos="fade-right" id='skills' className="w-full">
        <div  className="max-w-[1240px] pb-10 sm:md:p-10 sm:md:mx-20 flex flex-col justify-center">
            <p className="p-4 text-xl text-[#5651e5] tracking-widest uppercase">
                Mis Recursos
            </p>
            <h2 className="p-4">La repeticion es la madre de toda las Habilidades</h2>  
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                
                <div className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center"> 
                        <div className="m-auto">
                            <Image src={Html} 
                                width="64px"
                                height="64px"
                                alt="Icons" />
                        </div>
                        <div className="flex flex-cols items-center justify-center">
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center"> 
                        <div className="m-auto">
                            <Image src={Css}
                                width="64px"
                                height="64px"
                                alt="Icons" />
                        </div>
                        <div className="flex flex-cols items-center justify-center">
                            <h3>CSS</h3>
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center"> 
                        <div className="m-auto">
                            <Image src={JavaScript} 
                                width="64px"
                                height="64px"
                                alt="Icons" />
                        </div>
                        <div className="flex flex-cols items-center justify-center">
                            <h3>JavaScript</h3>
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center"> 
                        <div className="m-auto">
                            <Image src={NextJS}
                                width="64px"
                                height="64px"
                                alt="Icons" />
                        </div>
                        <div className="flex flex-cols items-center justify-center">
                            <h3>Next.js</h3>
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center"> 
                        <div className="m-auto">
                            <Image src={ReactJS} 
                                width="64px"
                                height="64px"
                                alt="Icons" />
                        </div>
                        <div className="flex flex-cols items-center justify-center">
                            <h3>React.js</h3>
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center"> 
                        <div className="m-auto">
                            <Image src={TailwindCSS}
                                width="64px"
                                height="64px"
                                alt="Icons" />
                        </div>
                        <div className="flex flex-cols items-center justify-center">
                            <h3>TailwindCSS</h3>
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center"> 
                        <div className="m-auto">
                            <Image src={Github} 
                                width="64px"
                                height="64px"
                                alt="Icons" />
                        </div>
                        <div className="flex flex-cols items-center justify-center">
                            <h3>Github</h3>
                        </div>
                    </div>
                </div>

            </div> 
        </div>
    </div>        
 );
};

export default Skills;