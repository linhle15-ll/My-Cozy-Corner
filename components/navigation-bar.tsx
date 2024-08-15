"use client"
import React, { useState, useEffect } from 'react';
import { Home, About, Experience, Projects, Contact } from "@/utils/icons"
const NavigationBar = () => {

    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'experience', 'projects', 'contact'];
            const scrollY = window.scrollY;

            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
                        setActiveSection(section);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="bg-white/20 rounded-[50px] shadow-[0_4px_30px_rgba(0, 0, 0, 0.1)] backdrop-blur-[10px] border border-[#8BBE1B] 
                        fixed bottom-[40px] left-[30%] w-[40%] z-[1000]
                        md:left-[30%] md:w-[40%]
                        lg:left-[37%] lg:w-[26%]
                        "
        >
        
            <ul className="font-poppins flex flex-row py-2 items-center justify-around font-semibold"
            >
                <li className={`${activeSection === 'home' ? 'bg-darkPink text-white rounded-full p-2' : ''}`} >
                    <a className="flex flex-col items-center content-center rounded-[10px] p-1 cursor-pointer transition-all transition-duration-300 ease-in-out hover:shadow-md" href="#home">{Home} </a>
                </li>
                <li className={`${activeSection === 'about' ? 'bg-darkPink text-white rounded-full p-2' : ''}`} >
                    <a className="flex flex-col items-center content-center rounded-[10px] p-1 cursor-pointer transition-all transition-duration-300 ease-in-out hover:shadow-md" href="#about">{About} </a>
                </li >
                <li className={`${activeSection === 'experience' ? 'bg-darkPink text-white rounded-full p-2' : ''}`}>
                    <a className="flex flex-col items-center content-center rounded-[10px] p-1 cursor-pointer transition-all transition-duration-300 ease-in-out hover:shadow-md" href="#experience">{Experience} </a>
                </li>
                <li className={`${activeSection === 'projects' ? 'bg-darkPink text-white rounded-full p-2' : ''}`}>
                    <a className="flex flex-col items-center content-center rounded-[10px] p-1 cursor-pointer transition-all transition-duration-300 ease-in-out hover:shadow-md" href="#projects">{Projects} </a>
                </li>
                <li className={`${activeSection === 'contact' ? 'bg-darkPink text-white rounded-full p-2' : ''}`}>
                    <a className="flex flex-col items-center content-center rounded-[10px] p-1 cursor-pointer transition-all transition-duration-300 ease-in-out hover:shadow-md" href="#contact">{Contact} </a>
                </li> 
            </ul>
        </div>
    );
}

export default NavigationBar;
