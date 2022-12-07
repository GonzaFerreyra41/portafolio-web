import React from 'react'
import Link from 'next/link';
import webPhoto from '../public/assets/projects/web-photo.png'; 
import Image from "next/image";
import { RiRadioButtonFill } from 'react-icons/ri';
import { BiArrowToLeft } from 'react-icons/bi';

const webphotography = ()=> {
    return(
        <div className="w-full">
        <div className='w-screen h-[50vh] lg:h-[50vh] relative'>
             <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/50 z-10' />
                 <Image className="absolute z-1"
                 layout="fill"
                 objectFit="cover"
                 src={webPhoto}
                 alt='/'
                 />
                 <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%]
                  right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                     <h2 className="py-2"> Web Photography </h2>
                     <h3> JS / Next</h3>
                 </div>
         </div>


         <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8 ">
                 <div className="col-span-4">
                     <p className="text-gray-500">Project</p>
                     <h2> Visión General </h2>
                     <p> Ahora bien, si usted quiere generar el tradicional texto de Lorem Ipsum para no distraer al lector con el contenido mientras que mira su diseño, escriba =Lorem() y luego presione Intro. Automáticamente Word creará cinco párrafos del texto de Lorem Ipsum, cada uno con tres oraciones.
                     </p>
                     <a 
                         href="https://photography-webside.vercel.app/"
                         target='_black'
                         rel='noreferrer'
                             >
                         <button className="px-8 py-2 mt-4 mr-8">Demo</button>
                     </a>
                     <a
                         href='https://github.com/GonzaFerreyra41/photography-webside'
                         target='_black'
                         rel="noreferrer"
                         >
                         <button className="px-8 py-2 mt-4 ">Code</button>
                     </a>
                 </div>

                 <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
                     <div className="p-2">
                         <p className="text-center font-bold pb-2">Tecnologías</p>
                         <div className="grid grid-cols-3 md:grid-cols-1">
                             <p className="text-gray-600 py-2 flex items-center "><RiRadioButtonFill className="pr-1" /> JavaScript </p>
                         </div>
                         <div>
                             <p className="text-gray-600 py-2 flex items-center">
                                 <RiRadioButtonFill className="pr-1" /> Tailwindui
                             </p>
                             <div>

                             
                             <p className="text-gray-600 py-2 flex items-center">
                             <RiRadioButtonFill className="pr-1" />
                                Next
                             </p>
                             </div>
                         </div>
                     </div>
                </div>
                 <Link href='/#projects'>
                     <p className="cursor-pointer underline hover:scale-110 ease-in duration-300"> <BiArrowToLeft size={25} /> </p>
                 </Link>
         </div>
    </div>
    )
}
export default webphotography;