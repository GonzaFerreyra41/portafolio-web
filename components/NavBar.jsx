import React, {useState, useEffect} from "react"
import Link from "next/link"
import Image from "next/image"
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu, } from "react-icons/ai"
import {FaLinkedinIn, FaGithub} from "react-icons/fa"
import {BsInstagram} from "react-icons/bs"
import { useRouter } from "next/router"

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#ecf8f3');
    const [linkColor, setLinkColor] = useState('#1f2937');
    const [position, setPosition] = useState('fixed')
    const router = useRouter();

    useEffect(()=>{
        if(
            router.asPath === '/batatabit' ||
            router.asPath == '/webphotography' ||
            router.asPath === 'crypto'
         ) {
            setNavBg('transparent');
            setLinkColor('#f8f8f8');
        }else {
            setNavBg('#ecf0f3');
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
      },[]);

    return (
        <div
            style={{backgroundColor: `${navBg}` }}
            className={
                shadow
                ? 'fixed w-full h-[3.5rem] shadow-xl z-[100] ease-in-out duration-300'
                : 'fixed w-full h-[3.5rem] z-[100]'
            }
        > 
            <div className="flex justify-between items-center w-full h-full ml-4 px-2 2xl:px-16">
                <Link href='/'>
                    <h3  style={{color: `${linkColor}` }} className="cursor-pointer text-[20px] "> Fg </h3>
                </Link>
                <div>
                    <ul style={{color: `${linkColor}` }} className="hidden md:flex">
                        <li className="ml-10 text-sm uppercase hover:border-b">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="ml-10 text-sm uppercase hover:border-b scroll-smooth">
                            <Link href="/#about">Acerca de mi</Link>
                        </li>
                        <li className="ml-10 text-sm uppercase hover:border-b scroll-smooth">
                            <Link href="/#skills">Skills</Link>
                        </li>
                        <li className="ml-10 text-sm uppercase hover:border-b">
                            <Link href="/#projects">Proyectos</Link>
                        </li>
                        <li className="ml-10 text-sm uppercase hover:border-b">
                            <Link href="/#contact">Contacto</Link>
                        </li>
                    </ul>
                    <div onClick={handleNav} className="md:hidden">
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>
            <div 
                className={
                    nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
                }
            >
            <div 
                className={
                    nav
                    ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                    : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                }
            >
                <div > 
                    <div  className="flex w-full items-center justify-between" >
                        <Link href='/'>
                            <Image 
                            src="/../public/assets/logo_nav.png" 
                            width="60" 
                            height="60" 
                            alt="/" />   
                        </Link>
                        <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className="border-b border-gray-300 my-4">
                        <p className="w-[85%] md:w-[90%] py-4">
                            Let`s build  something legendary together
                        </p>
                    </div>
                </div>
                    <div className="py-4 flex flex-col ">
                        <ul className="uppercase">
                            <Link href="/">
                                <li onClick={()=>setNav(false)}  className="py-4 text-sm">Home</li>
                            </Link>
                            <Link href="/#about">
                                <li onClick={()=>setNav(false)} className="py-4 text-sm">Acerca de mi</li>
                            </Link>
                            <Link href="/#skills">
                                <li onClick={()=>setNav(false)} className="py-4 text-sm">Skills</li>
                            </Link>
                            <Link href="/#projects">
                                <li onClick={()=>setNav(false)} className="py-4 text-sm">Proyectos</li>
                            </Link>
                            <Link href="/#contact">
                                <li onClick={()=>setNav(false)} className="py-4 text-sm">Contacto!</li>
                            </Link>
                        </ul>
                        <div className="pt-20"> 
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