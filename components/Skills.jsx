import Image from "next/image";
import React from "react";

const Skills = () => {
    return (
    <div  id='skills' className="w-full">
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center">
            <p className="p-4 text-xl text-[#5651e5] tracking-widest uppercase">
                Mis Recursos
            </p>
            <h2 className="p-4">La repeticion es la madre de toda las Habilidades</h2>  
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                

            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center"> 
                    <div className="m-auto">
                        <Image src="/../public/assets/img/html.png" 
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
                        <Image src="/../public/assets/skills/css.png" 
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
                        <Image src="/../public/assets/skills/javascript.png" 
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
                        <Image src="/../public/assets/skills/nextjs.png" 
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
                        <Image src="/../public/assets/skills/react.png" 
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
                        <Image src="/../public/assets/skills/tailwind.png" 
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
                        <Image src="/../public/assets/skills/github1.png" 
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
}

export default Skills;