'use client'
import React from "react";
import Image from "next/image";
import myphoto from '@/public/myphoto.jpg'
const About = () => {
    
    return (
        <div className="flex flex-col content-center items-center bg-green p-11 pb-15 text-center">
            <div className="flex flex-col gap-2">
                <span className="font-poiret text-h8 md:text-h7 lg:text-h7"> Get to know </span>
                <span className="font-poppins font-600 text-h7 md:text-h6 lg:text-h5 text-white"> About me </span>
            </div> 
            <div className="flex flex-col w-[80%] gap-11 mt-15 items-center content-center
                            md:flex md:flex-col lg:flex lg:flex-row"
            >
                <div className="w-30%">
                    <Image src={myphoto} alt="my photo" className="object-cover h-60 w-60 rounded-[100%] overflow-hidden" />
                </div>
                <div className="font-poppins font-400  text-white flex flex-col text-center w-[90%] gap-5 texts-start
                                md:w-[90%] md:text-center 
                                lg:w-[75%] lg:text-start"
                >
                    <span> Hello, I am Linh/Ngoc Linh Le, a passionate
                        Computer Science and Mathematics/ Statistics student with hands-on experience in 
                        Full-stack Web Application Development.
                        I gained my experience via my Internship and Coding Projects. 
                    </span>

                    <span>
                        I am interested in reading about and practicing new tech stacks.
                        I also join organizations that promote Tech acquisition.
                    </span>
                    <span> Come and <a href="#contact" className="font-bold">connect with me</a>! </span>
                    <div className="bg-white rounded-low p-5 flex flex-col">
                        <span className="font-poppins text-darkPink font-semibold text-h8">EDUCATION</span>
                        <span className="font-poppins mt-4 text-black leading-7">
                            Double majors: Computer Science & Statistics <br/>
                            Mount Holyoke College <br/>
                            GPA: 4.0/4.0
                        </span>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default About;
