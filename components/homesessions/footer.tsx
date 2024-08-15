import React from 'react';  

const Footer = () => {

    return (
        <div className="flex flex-col pt-11 pb-25 mx-20 border-t-2 border-t-darkPink justify-center text-h10
                        md:flex-col md:justify-center md:text-h10
                        lg:flex-row lg:justify-between lg:text-h9"
        >
            <ul className="font-poppins flex flex-row items-center justify-center text-h9 cursor-pointer mb-5
                            md:mb-5 lg:mb-0">
                <li className="rounded-[10px] py-1 px-2 transition-all transition-duration-300 ease-in-out hover:bg-darkPink hover:text-white">
                    <a href="#home">Home</a>
                </li>
                <li className="rounded-[10px] py-1 px-2 transition-all transition-duration-300 ease-in-out hover:bg-darkPink hover:text-white">
                    <a href="#about">About</a>
                </li>
                <li className="rounded-[10px] py-1 px-2 transition-all transition-duration-300 ease-in-out hover:bg-darkPink hover:text-white">
                    <a href="#experience">Experience</a>
                </li>
                <li className="rounded-[10px] py-1 px-2 transition-all transition-duration-300 ease-in-out hover:bg-darkPink hover:text-white">
                    <a href="#projects">Projects</a>
                </li>
                <li className="rounded-[10px] py-1 px-2 transition-all transition-duration-300 ease-in-out hover:bg-darkPink hover:text-white">
                    <a href="#contact">Contact</a>
                </li>
            </ul>

            <div className="font-poppins
                            md:text-center
                            lg:text-right"
            >
            © Copyright 2024, Ngoc Linh Le, All Rights Reserved
            </div>
        </div>
    )
}

export default Footer;