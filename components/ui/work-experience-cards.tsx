'use client'
import React from "react";
import Image from 'next/image'
import { workExperienceArr } from "@/utils/experiences";


const WorkExperience = () => {
    
    return (
        <div className="font-poppins p-5">
            <div className="flex flex-col gap-9 items-center justify-center md:flex md:flex-col lg:flex lg:flex-col lg:justify-start">
                {workExperienceArr.map((item) => (
                    <div
                        key={item.key}
                        className="group relative block w-full max-w-[900px] h-auto shadow-md p-9 rounded-low bg-darkPink border-2 text-white border-white
                                    transition-all duration-500 ease-in-out
                                    hover:text-black hover:bg-white hover:border-2 hover:border-green"
                    >
                        <div className="flex flex-col h-full justify-between items-center">
                            {/* Uncomment this if you want to use the icon */}
                            <button onClick = {() => window.open(item.link, '_blank', 'noopener,noreferrer')} // CANNOT NAVIGATE TO VIB
                                
                                className="mb-4 h-[100px] w-[100px] rounded-[100%] overflow-hidden bg-white flex items-center justify-center border-2 border-green
                                           transition-transform duration-300 hover:scale-90"
                                >
                                <Image
                                    src={item.icon}
                                    alt="logo"
                                    className="object-contain"
                                    width={198}
                                    height={198}
                                />
                            </button>
                            
                            <h3 className="text-xl font-medium sm:text-2xl">{item.title}</h3>
                            <div className="mt-2 text-lg font-medium sm:text-xl">{item.organization}</div>
                            <div className="flex flex-col gap-4 mt-4 text-sm sm:text-base leading-6 text-start">
                                <div>{item.description1}</div>
                                <div>{item.description2}</div>
                                <div>{item.description3}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WorkExperience;
