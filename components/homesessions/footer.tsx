import React from 'react';  

const Footer = () => {

    return (
        <div className="flex flex-col pt-13 pb-25 mx-20 border-t-2 border-t-darkPink justify-center text-h10
                        md:flex-col md:justify-center md:text-h10 md:pt-13
                        lg:flex-row lg:justify-between lg:text-h9 lg:pt-11"
        >
            <ul className="font-poppins flex flex-row items-center justify-center cursor-pointer mb-5 text-h10
                            md:mb-5 md:text-h10
                            lg:mb-0 lg:text-h9"
            >
                <li className="rounded-[10px] py-1 px-1 md:px-1 lg:px-2 transition-all transition-duration-300 ease-in-out hover:bg-darkPink hover:text-white">
                    <a href="#home">Home</a>
                </li>
                <li className="rounded-[10px] py-1 px-1 md:px-1 lg:px-2 transition-all transition-duration-300 ease-in-out hover:bg-darkPink hover:text-white">
                    <a href="#about">About</a>
                </li>
                <li className="rounded-[10px] py-1 px-1 md:px-1 lg:px-2 transition-all transition-duration-300 ease-in-out hover:bg-darkPink hover:text-white">
                    <a href="#experience">Experience</a>
                </li>
                <li className="rounded-[10px] py-1 px-1 md:px-1 lg:px-2 transition-all transition-duration-300 ease-in-out hover:bg-darkPink hover:text-white">
                    <a href="#projects">Projects</a>
                </li>
                <li className="rounded-[10px] py-1 px-1 md:px-1 lg:px-2 transition-all transition-duration-300 ease-in-out hover:bg-darkPink hover:text-white">
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