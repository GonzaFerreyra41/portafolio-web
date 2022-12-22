import React from "react";
import batataImg from "../public/assets/projects/Captura de pantalla (241).png"
import webPhoto from '../public/assets/projects/web-photo.png'; 
import ProjectItem from "./ProjectItem";

const Projects = () => {
    return (
        <div id='projects' className="w-full sm:p-10">
            <div className="max-w-[1240px] mx-auto px-2 py-10">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">
                    Projects
                </p>
                <h2 className="py-4">Lo que he construido</h2>
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
            </div>
        </div>        
    );
}

export default Projects;