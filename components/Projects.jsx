import React from "react";
import batataImg from "../public/assets/projects/Captura de pantalla (241).png"
import webPhoto from '../public/assets/projects/web-photo.png'; 
import ProjectItem from "./ProjectItem";
import {HiOutlineChevronDoubleUp} from "react-icons/hi"
import Link from "next/link";

const Projects = () => {
    return (
        <div id='projects' className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">
                    Projects
                </p>
                <h2 className="py-4">lo que he construido</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <ProjectItem 
                        title="Batatabit"
                        backgroundImg={batataImg} 
                        tech="HTML CSS"
                        projectUrl="/batatabit"
                    />

                    <ProjectItem 
                        title="webPhotography"
                        backgroundImg={webPhoto} 
                        tech="JS Next"
                        projectUrl="/webphotography"
                    />
                </div>  
                <div className="flex justify-center py-12">
                    <Link href="/">
                        <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                            <HiOutlineChevronDoubleUp size={30} />
                        </div>
                    </Link>
               </div>
            </div>
        </div>        
    );
}

export default Projects;