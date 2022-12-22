import React from "react";

const Contact = () => {
    return (
        <div id='contact' className="w-full sm:md:lg:p-10 ">
            <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
                    {/* <p className="text-xl tracking-widest uppercase py-4 text-[#5651e5]"> 
                        Contacto
                    </p> */}
                    <h2 className="pb-10">
                        Estemos en contacto 
                    </h2>
                    <div >
                        <div className=" w-[100%] h-auto shadow-xl shadow-gray-400 bg-[#FFF] rounded-xl lg:p-4">
                            <div className="p-4 ">
                            <form 
                                action="https://getform.io/f/7e590cae-6467-41be-a9bb-8a0f49eccf83" 
                                method="POST"
                                enctype="multipart/form-data"
                                >
                                <div>
                                    <div className="flex flex-col"> 
                                        <label className="font-semibold text-sm py-2">Tu Nombre</label>
                                        <input className="border-2 p-2 rounded-lg flex border-gray-300 "
                                        type="text"
                                        name="name"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col py-2">
                                    <label 
                                        className="font-semibold text-sm py-2"
                                        type="email"
                                        name="email"
                                    >
                                        Email
                                    </label>
                                    <input className="border-2 p-2 rounded-lg flex border-gray-300 "  type="text" />
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="font-semibold text-sm py-2">¿En qué estas interesad@?</label>
                                    <input 
                                        className="border-2 p-2 rounded-lg flex border-gray-300"
                                        type="text"
                                        name="subject"
                                    />
                                </div>
                                <button  className=" w-full p-3 text-gray-100 mt-4" >
                                    Enviar
                                </button>
                            </form>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Contact;