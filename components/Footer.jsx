import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className='w-full bg-[#141414] m-auto px-10 py-20 h-full'>
        <div className="flex flex-col items-center tracking-widest justify-between text-center">
            <div>
                <h2 className=' text-[#fff]'> Construyamos algo <span className='uppercase text-[#5651e5]'>juntos</span> </h2>
                <p className="uppercase text-sm pt-4 tracking-widest text-[18px] text-gray-500">Front-End Developer</p>
            </div>
            <div className='flex pt-4'>
                <a className='pr-2'
                    href='https://www.linkedin.com/in/gonzalo-ferreyra-167993205/'
                    target='_black'
                    rel='noreferrer'
                >
                    <div className=" rounded-full  text-[#5651e5]  p-6 
                    cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaLinkedinIn size={30} />
                    </div>
                </a>
                <a className='pr-4'
                    href="https://github.com/GonzaFerreyra41"
                    target='_black'
                    rel='noreferrer'
                >
                    <div className="rounded-full text-[#5651e5]  p-6 
                    cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaGithub size={30}/>
                    </div>
                </a>
                <Link className='pr-4' 
                        href='/#contact'>
                    <div className="text-[#5651e5]  rounded-full  p-6 
                    cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlineMail size={30} /> 
                    </div>
                </Link>

                <div className='pl-8'>
                    <a  
                        className='rounded text-[#5651e5] p-6 cursor-pointer hover:scale-110 ease-in duration-300'
                        href="https://www.instagram.com/goon.ferreyra/?hl=es-la"
                        target='_black'
                        rel='noreferrer'
                    >
                            <BsInstagram 
                                size={30}
                            />
                    </a>
                </div>
            </div> 
             {/* <div className="flex justify-center py-12">
                    <Link href="/">
                        <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                            <HiOutlineChevronDoubleUp size={30} />
                        </div>
                    </Link>
               </div> */}      
        </div>
    </div>
  )
}

export default Footer