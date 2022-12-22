import React from "react"
import Image from "next/image";
import Link from "next/link";
import ImgAbout from './../public/assets/about.jpg' 

const About =()=>{
return(
    <div id='about' className="w-full sm:p-10 pb-10 flex items-center">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
            <div className="col-span-2">
                <p className="uppercase text-xl text-[#5651e5] tracking-widest p-4">About</p>
                {/* <h2 className="p-4 text-[#000]">Palabras que me defienen</h2> */}
                {/* <p className="p-4  text-gray-600">
                    Una frase inspiradora...
                </p> */}
                <p className="p-4 md:text-[20px] text-[#000]"> 
                    {/* Me especializo en la creación de aplicaciones de interfaz de usuario front-end con capacidad de <span className="font-bold"> mobile responsive 
                    que se conectan con API. */}
                    Aun siendo de nivel inicial, busco aprender nuevas tecnologías y <span className="font-bold"> entender que hay
                    más de una forma de realizar una tarea, </span> por esto dedico todo mi tiempo a ser un gran talento en la disciplina. 
                    Yo creo que ser un gran desarrollador es no usar un
                    lenguaje específico, sino saber <span className="font-bold "> elegir la mejor herramienta para el trabajo. </span> 
                </p>
                {/* <p className="p-4 text-gray-600">
                    Empecé el desarrollo web en 2021 ¿como inicié en el mundo de la programacion? estudiando de manera autodidacta a traves de Platzi una plataforma de educacion. En mis tiempos libres ¿que hago?.
                    Compromiso. 
                </p> */}
                <Link 
                    href="/#projects"
                >
                    <p className="p-4 text-[18px] text-gray-800 underline cursor-pointer">
                    Mira algunos de mis últimos proyectos.
                    </p>
                </Link>
            </div>
            <div className="w-full  mx-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-110 ease-in duration-300 ">
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