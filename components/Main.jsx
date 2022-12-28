import React from "react"
import Image from "next/image";
import ImgMain from '../public/assets/about.jpg'

const Main = () => {
    return (
    <div id='home'  className="w-full h-screen text-center">
        <div className="max-w-[1240px] px-2 mx-auto justify-center  items-center ">
            <div className="pt-[9rem] pb-[9rem] ">
                <p className="uppercase tracking-widest text-[18px] pb-2 text-gray-500">
                    CONSTRUYAMOS ALGO JUNTOS
                </p>
                <h1>
                    Hola, soy <span className="text-[#5651e5]">Gonzalo</span> Front-End Developer 
                    </h1>
                <p className="py-4 text-[20px] sm:md:text-[28px]  text-gray-500 sm:max-w-[70%] m-auto">
                    Experiencia en la creación de sitios web y aplicaciones web. Me especializo en JavaScript y tengo experiencia con React.
                </p>
            </div>
            {/* <div className="w-full h-auto m-auto flex items-center justify-center p-4">
                    <Image className="rounded-xl " 
                    src={ImgMain}
                    alt="/"
                    width="550px"
                    height="400px"
                    />
            </div> */}
        </div>
    </div>        
    );
}

export default Main;