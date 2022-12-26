import React, {useState, useEffect} from "react"
import Link from "next/link"
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu, } from "react-icons/ai"
import {FaLinkedinIn, FaGithub} from "react-icons/fa"
import {BsInstagram} from "react-icons/bs"
import  {useRouter}  from "next/router"

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#f5f5f5');
    const [linkColor, setLinkColor] = useState('#1f2937');
    const [position, setPosition] = useState('fixed')
    const router = useRouter();

    useEffect(()=>{
        if(
            router.asPath === '/batatabit' ||
            router.asPath == '/webphotography' ||
            router.asPath === 'crypto'
         ) {
            setNavBg('#000');
            setLinkColor('#F5F5F5');
        }else {
            setNavBg('trasparent');
            setLinkColor('#1f2937');
        }
    }, [router]);

    const handleNav = () => {
        setNav(!nav) 
    }

    useEffect(() => {
        const handleShadow = () => {
          if (window.scrollY >= 90) {
            setShadow(true);
          } else {
            setShadow(false);
          }
        };
        window.addEventListener('scroll', handleShadow);
      }, []);

    return (
        <div
            style={{backgroundColor: `${navBg}` }}
            className={
                shadow
                ? 'w-full h-[5.5rem] shadow-xl ease-in-out duration-300 text-[#5651e5] '
                : 'w-full h-[5.5rem] z-[100] text-[#5651e5]'
            }
        > 
            <div className=" flex justify-between items-center w-full h-full sm:md:px-10">
                <Link href='/'>
                    <h3 style={{color: `${linkColor}` }} className=" cursor-pointer ml-[1rem] sm:md:ml-10 text-[25px] "> Fg </h3>
                </Link>
                <div>
                    <ul style={{color: `${linkColor}` }} className="hidden md:flex mr-8">
                        <li className="ml-10 pr-4">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="ml-10 pr-4 ">
                            <Link href="/#about">Acerca de mi</Link>
                        </li>
                        <li className="ml-10 pr-4 ">
                            <Link href="/#contact">
                                <a
                                className="transition px-4 text-[#fff] rounded-xl py-2 ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."
                                >
                                Contactame 
                                </a>
                            </Link>
                        </li>
                    </ul>
                    <div onClick={handleNav} className="md:hidden mr-4 ">
                        <AiOutlineMenu size={30} />
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            {/* Overlay */}
            <div 
                className={
                    nav ? 'md:hidden z-[100] fixed left-0 top-0 w-full h-screen bg-black/70' : ''
                }
            >
            {/* Side Drawer Menu */}
            <div 
                className={
                    nav
                    ? 'fixed left-0 top-0 z-[100] w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                    : 'fixed left-[-200%] z-[100] top-0 p-10 ease-in duration-500'
                }
            >
                <div> 
                    <div  className="flex w-full items-center justify-between" >
                        <Link href='/'>
                          <h3 className="text-[#000] cursor-pointer text-[25px]"> Fg </h3>  
                        </Link>
                        <div onClick={handleNav} 
                             className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className="border-b border-gray-300 my-4">
                        <p className="w-[85%] text[20px] md:w-[90%] py-4">
                            Construyamos algo juntos
                        </p>
                    </div>
                </div>
                    <div className="py-4 flex flex-col ">
                        <ul className="uppercase">
                            <Link href="/">
                                <li onClick={()=>setNav(false)}  className="py-4 text-[1rem]">Home</li>
                            </Link>
                            <Link href="/#about">
                                <li onClick={()=>setNav(false)} className="py-4 text-[1rem]">Acerca de mi</li>
                            </Link>
                            <Link href="/#skills">
                                <li onClick={()=>setNav(false)} className="py-4 text-[1rem]">Skills</li>
                            </Link>
                            <Link href="/#projects">
                                <li onClick={()=>setNav(false)} className="py-4 text-[1rem]">Proyectos</li>
                            </Link>
                            <Link href="/#contact">
                                <li onClick={()=>setNav(false)} className="py-4 text-[1rem]">Contacto!</li>
                            </Link>
                        </ul>
                        <div className="pt-8"> 
                            <p className="uppercase tracking-widest text-[#5651e5]">
                                Let`s Connect
                            </p>
                            <div className="flex items-center justify-between my-4 w-full sm:w-[80%] "> 
                                <a
                                    href='https://www.linkedin.com/in/gonzalo-ferreyra-167993205/'
                                    target='_black'
                                    rel='noreferrer'                            
                                >
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <Link  href='/'>
                                            <FaLinkedinIn  />
                                        </Link>
                                    </div>
                                </a>
                                <a 
                                    href="https://github.com/GonzaFerreyra41"
                                    target='_black'
                                    rel='noreferrer'
                                >
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-2010">
                                        <FaGithub />
                                    </div>
                                </a>
                                <Link href='/#contact'>
                                    <div 
                                    onClick={() => setNav(!nav)}
                                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <AiOutlineMail />
                                    </div>
                                </Link>
                                <a 
                                    href="https://www.instagram.com/goon.ferreyra/?hl=es-la"
                                    target='_black'
                                    rel='noreferrer'
                                >
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <BsInstagram />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    );
};

export default NavBar;