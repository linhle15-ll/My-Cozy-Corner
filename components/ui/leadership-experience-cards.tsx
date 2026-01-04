'use client'
import React, { useState } from "react";
import Image from 'next/image'
import { leardershipExperienceArr } from "@/utils/experiences";

const LeadershipExperience = () => {
    const [hoveredKey, setHoveredKey] = useState<string | null>(null);
    return (
        <div className="font-poppins p-5">
            <div className="flex flex-col gap-9 items-center justify-center md:flex md:flex-col lg:flex lg:flex-col lg:justify-start">
                {leardershipExperienceArr.map((item) => (
                    <div
                        key={item.key}
                        className="group relative block w-full max-w-[900px] h-auto shadow-md p-9 rounded-low bg-darkGreen border-2 text-white border-white
                                transition-all duration-500 ease-in-out
                                hover:text-black hover:bg-white hover:border-2 hover:border-green"
                    >
                        <div className="flex flex-col h-full justify-between items-center">
                            {/* Uncomment this if you want to use the icon */}
                            <div className="relative">
                                <button
                                    onClick={() => window.open(item.link, '_blank', 'noopener,noreferrer')}
                                    onMouseEnter={() => setHoveredKey(String(item.key))}
                                    onMouseLeave={() => setHoveredKey(null)}
                                    className="mb-4 h-[100px] w-[100px] rounded-[100%] overflow-hidden bg-white flex items-center justify-center border-2 border-green
                                    transition-transform duration-300 hover:scale-90">
                                    <Image
                                        src={item.icon}
                                        alt="logo"
                                        className="object-contain"
                                        width={198}
                                        height={198}
                                    />
                                </button>

                                {hoveredKey === String(item.key) && (
                                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full
                                        bg-black text-white text-xs px-3 py-1.5 rounded whitespace-nowrap z-10
                                        before:content-[''] before:absolute before:bottom-full before:left-1/2 before:transform before:-translate-x-1/2
                                        before:border-4 before:border-transparent before:border-b-black">
                                        Click to check out
                                    </div>
                                )}
                            </div>

                            <h3 className="text-xl font-medium sm:text-2xl">{item.title}</h3>
                            <div className="mt-2 text-lg font-medium sm:text-xl">{item.organization}</div>
                            <ul className="flex flex-col gap-4 mt-4 text-sm sm:text-base leading-6 text-start">
                                <li>{item.description1}</li>
                                <li>{item.description2}</li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LeadershipExperience;
