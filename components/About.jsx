import React from "react"
import Image from "next/image";
import Link from "next/link";
import ImgAbout from './../public/assets/about.jpg' 

const About =()=>{
return(
    <div id='about' className="w-full h-[80%] sm:p-10 pb-10 flex items-center">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
            <div className="col-span-2">
                <p className="uppercase text-xl text-[#5651e5] tracking-widest p-4">About</p>
                <p className="p-4 text-[35px] text-[#000]"> 
                    Pasionado del desarrollo web, aun siendo de nivel inicial, busco aprender nuevas tecnologías y 
                    <span className="font-bold"> entender que hay más de una forma de realizar una tarea, </span>
                     por esto dedico todo mi tiempo a ser un gran talento en la disciplina. 
                </p>
            </div>
            <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-110 ease-in duration-300 ">
                <Image className="rounded-xl " 
                src={ImgAbout}
                alt="/"
                width="300px"
                height="450px"
                 />
            </div>
        </div>
    </div>
);
}

export default About;