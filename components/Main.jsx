import React from "react"


const Main = () => {
    return (
    <div id='home' className="w-full h-[85%] text-center">
        <div className="max-w-[1240px] px-2 mx-auto flex justify-center items-center ">
            <div className="pt-[9rem] pb-[7rem] ">
                <p className="uppercase text-sm tracking-widest text-[18px] text-gray-500">
                    CONSTRUYAMOS ALGO JUNTOS
                </p>
                <h1 className=" text-[#000]">
                    Hola, soy <span className="text-[#5651e5]">Gonzalo</span>  Desarrollador Web Front-End Developer 
                </h1>
                <p className="py-4 md:text-[28px]  text-gray-500 sm:max-w-[70%] m-auto">
                    Experiencia en la creación de sitios web y aplicaciones web. Me especializo en JavaScript y tengo experiencia con React.
                </p>
            </div>
        </div>
    </div>        
    );
}

export default Main;