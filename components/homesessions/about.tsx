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
                    <span>
                    Hi, I’m Ngoc Linh Le — a Computer Science student learning and working on projects about
                    <strong>Software Engineering, Full-stack Development, Microservice Architecture, Cloud Services, and AI-driven solutions</strong>.  
                    I’ve built this experience through internships and leading hands-on coding projects.
                    </span>

                    <span>
                    I love exploring new technologies and experimenting with diverse tech stacks.
                    Besides working on technical projects, I actively participate in community activities that empower students to grow in tech via technical skill development and networking.
                    I am an active member of my college's Girls Who Code organization, and a President of MHC Vietnamese Student Association, where I with my team initiate activities and events 
                    to promote culture diversity and traditional appreciation within the Five-College Consortium!
                    
                    </span>
                    <span> Would love to meet (and have a badminton match)? <a href="#contact" className="font-semibold text-darkPink">LET'S CONNECT!</a></span>
                    <div className="bg-white rounded-low p-5 flex flex-col">
                        <span className="font-poppins text-darkPink font-semibold text-h8">EDUCATION</span>
                        <span className="font-poppins mt-4 text-black leading-7">
                            Majors: Computer Science<br/>
                            Mount Holyoke College <br/>
                            Expected graduation: May 2027
                        </span>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default About;
