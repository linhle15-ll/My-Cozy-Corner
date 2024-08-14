import React from 'react';  

const Footer = () => {
    return (
        <div className="flex flex-row py-11 mx-20 border-t-2 border-t-darkPink justify-between">
            <ul className="font-poppins flex flex-row items-center justify-center text-h9 font-semibold cursor-pointer">
                <li>
                    <a href="#" className="rounded-[10px] p-2 transition-all transition-duration-300 ease-in-out hover:bg-darkPink hover:text-white">Home</a>
                </li>
                <li>
                    <a href="#" className="rounded-[10px] p-2 transition-all transition-duration-300 ease-in-out hover:bg-darkPink hover:text-white">About</a>
                </li>
                <li>
                    <a href="#" className="rounded-[10px] p-2 transition-all transition-duration-300 ease-in-out hover:bg-darkPink hover:text-white">Experience</a>
                </li>
                <li>
                    <a href="#" className="rounded-[10px] p-2 transition-all transition-duration-300 ease-in-out hover:bg-darkPink hover:text-white">Projects</a>
                </li>
                <li>
                    <a href="#" className="rounded-[10px] p-2 transition-all transition-duration-300 ease-in-out hover:bg-darkPink hover:text-white">Contact</a>
                </li>
            </ul>

            <div className="font-poppins text-h9">
            © Copyright 2024, Ngoc Linh Le, All Rights Reserved
            </div>
        </div>
    )
}

export default Footer;