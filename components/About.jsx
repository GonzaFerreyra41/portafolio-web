import Image from "next/image";
import React from "react"
import Html from '../public/img/html.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About =()=>{
    
AOS.init();

   return(
    <div id='about'  className="w-full h-[80%] sm:p-10 pb-10 flex items-center">
        <div className="max-w-[1240px] m-auto">
            <div data-aos="fade-up">
                <p className="uppercase text-xl text-[#5651e5] px-4 py-4">About</p>
                <p  className="p-4 text-[26px] text-[#000]"> 
                    Pasionado del desarrollo web, aun siendo de nivel inicial, busco aprender nuevas tecnologías y 
                    <span className="font-bold"> entender que hay más de una forma de realizar una tarea, </span>
                     por esto dedico todo mi tiempo a ser un gran talento en la disciplina. 
                </p>
            </div>
            {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 pt-2 gap-4 divide-x ">
            
                <div className=' items-center text-center ' >
                    <h2 className="mt-2">Excelencia</h2>
                    <p className=" text-gray-500">
                        Sin importar el nivel de conocimiento que tengo busco con siempre estar a la altura 
                    </p>
                </div>

                <div className="items-center text-center">
                    <h2 className="mt-2">Esfuerzo</h2>
                    <p className=" text-gray-500">
                        Siempre que desarrollo mis tareas lo haré lo mejor posible
                    </p>
                </div>

                <div className=" items-center text-center">
                    <h2 className="mt-2">Entrega</h2>
                    <p className="text-gray-500">
                        Valor que llevamos a cabo esforzándonos al máximo para alcanzar nuestras metas, a través de nuestras capacidades y sentimientos
                    </p>
                </div>
                <div className="items-center text-center divide-x-0">
                    <h2 className="mt-2">
                        Organizado
                     </h2>
                     <p className="text-gray-500">
                        Que planifica y desarrolla sus actividades con orden y método.
                     </p>
                </div>
                <div className="items-center text-center">
                    <h2>Puntualidad</h2>
                    <p className="text-gray-500">
                    La impuntualidad se acostumbra a relacionar también con cuestiones éticas y a menudo se califica como falta de respeto
                    </p>
                </div>
            </div> */}
           


        </div>
    </div>
);
}

export default About;