"use client";
import React, {useEffect} from "react";
import { DownloadIcon } from '@/utils/icons'
import { SocialIcon } from 'react-social-icons'
import { saveAs } from 'file-saver';
import 'react-social-icons/linkedin'
import 'react-social-icons/github'
import 'react-social-icons/instagram'

const Home = () => {
  useEffect(() => {
    // Trigger animations after a slight delay for a smooth effect
    const elements = document.querySelectorAll("div");
    elements.forEach((el) => {
      el.classList.add('animate-slide-in-fade');
    });
  },[]);

  const saveFile = () => {
    saveAs(
      "http://localhost:3000/linhle_resume.pdf",
      "NgocLinhLe_resume.pdf"
    );
  };

  return (
    
    <div className="flex flex-col items-center content-center">
        <div className = " flex flex-col gap-3 text-center items-center content-center mt-[10%]">
        <div className="font-poiret text-h9 md:text-h9 lg:text-h8 ">
        Hello, I am
        </div>
        <div className="font-poppins font-600 text-h7 md:text-h6 lg:text-h5 text-green">
        LINH/ NGOC LINH LE
        </div>
        <div className="font-poppins font-extralight text-h9 md:text-h9 lg:text-h8">
        An aspiring software engineer
        </div>
    </div>
    <div className = "flex flex-row gap-5 text-center">
        <button  onClick={saveFile} className=" flex flex-row gap-1 bg-green text-white font-poppins font-bold rounded-lower py-2 px-6 mt-16 text-[12px]
        md:text-[14px] md:py-4 md:px-8
        lg:text-[16px] lg:py-4 lg:px-[20px]
        hover:bg-darkerGreen transition-all transform hover:scale-90"
        >
        {DownloadIcon}
        Resume
        </button >
        <button className=" flex-row g-2 white border border-green font-poppins font-bold rounded-lower py-2 px-6 mt-16 text-[12px]
        md:text-[14px] md:py-4 md:px-8
        lg:text-[16px] lg:py-4 lg:px-[20px]
        hover:border-darkerGreen hover:transition-all transform hover:scale-90">
        Connect!
        </button>
    </div>
    <div className="flex flex-row gap-5 mt-16 mb-[10%]">
        <SocialIcon url="https://www.linkedin.com/in/ngoclinhle15/" className="hover:transition-all transform hover:scale-90" />
        <SocialIcon url="https://github.com/linhle15-ll" className="hover:transition-all transform hover:scale-90" />
        <SocialIcon url="https://www.instagram.com/linhlinhlinhne/" className="hover:transition-all transform hover:scale-90"/>
    </div>

    </div>
    
  );
}

export default Home;