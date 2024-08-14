"use client";

import React, { useEffect } from "react";
import '@/tailwind.config'; // Ensure Tailwind config is imported
import { useRouter } from 'next/navigation'


const Page = () => {
  useEffect(() => {
    // Trigger animations after a slight delay for a smooth effect
    const elements = document.querySelectorAll("div");
    elements.forEach((el) => {
      el.classList.add('animate-slide-in-fade');
    });
  },[]);

  const router = useRouter();
  const handleRedirectHome = (e:any) => {
    e.preventDefault();
    router.push('/home')
  }

  return (
    <div className="flex flex-col items-center justify-center bg-lightYellowGreen p-[2%] min-h-screen relative">
      
      <div className="flex-row w-[100%] content-between items-center"> 
        {/* Top Right Corner Elements */}
        <div className="absolute top-0 right-0 flex-col gap-10 p-4 corner-element">
          <div className="bg-green w-14 h-14 rounded-bl-low rounded-tr-low 
            md:w-20 md:h-20 md:rounded-bl-medium md:rounded-tr-medium
            lg:w-25 lg:h-25 lg:rounded-bl-full lg:rounded-tr-full">
          </div>
          <div className="bg-lightYellow w-14 h-14 rounded-tl-low rounded-br-low mt-2
            md:w-20 md:h-20 md:rounded-tl-medium md:rounded-br-medium
            lg:w-25 lg:h-25 lg:rounded-tl-full lg:rounded-br-full">
          </div>
        </div>

        {/* Top Left Corner Elements */}
        <div className="absolute top-0 left-0 flex-row gap-10 p-4 corner-element justify-end">
          <div className="flex flex-row items-start gap-2">
            <div className="bg-green w-14 h-14 rounded-br-low
              md:w-20 md:h-20 md:rounded-br-medium 
              lg:w-25 lg:h-25 lg:rounded-br-full"
            > </div>
            <div className="bg-white w-15 h-11 rounded-bl-low border border-green
              md:w-20 md:h-15 md:rounded-bl-medium
              lg:w-25 lg:h-15 lg:rounded-bl-full"></div>
          </div>
          <div className="bg-lightYellow w-15 h-15 rounded-br-low rounded-tl-low mt-4
              md:w-25 md:h-25 md:rounded-br-medium md:rounded-tl-medium
              lg:w-30 lg:h-30 lg:rounded-br-full lg:rounded-tl-full"></div>
        </div>
      </div>

      {/* Center Content */}
      <div className="text-center mt-20">
        <div className="font-poiret text-h7
          md:text-h5 lg:text-h3">Welcome</div>
        <div className="font-poiret text-h6 mt-4
          md:text-h5 lg:text-h3">to</div>
        <div className="font-poiret text-green text-h6 mt-4
          md:text-h3 lg:text-h1">my cozy corner</div>
      </div>

      {/* Explore Button */}
      <div>
        <button className="bg-green text-white font-poppins font-bold rounded-full py-2 px-6 mt-16 text-h9
          md:text-h8 md:py-4 md:px-8
          lg:text-h7 lg:py-4 lg:px-12
          hover:bg-darkerGreen transition-all transform hover:scale-90"
          onClick = {handleRedirectHome}>
          Explore
        </button>
      </div>

      <div className="flex-row w-[100%] content-between">
        {/* Bottom Right Corner Elements */}
        <div className="absolute bottom-0 right-0 flex-col gap-10 p-4">
          <div className="bg-white w-15 h-15 border border-green rounded-bl-low rounded-tr-low
            md:w-20 md:h-20 md:rounded-bl-medium md:rounded-tr-medium
            lg:w-25 lg:h-25 lg:rounded-bl-full lg:rounded-tr-full"></div>
          <div className="bg-lightYellow w-20 h-20 rounded-br-low rounded-tl-low mt-2
            md:w-22 md:h-22  md:rounded-br-medium md:rounded-tl-medium
            sm:w-30 sm:h-30 sm:rounded-br-full sm:rounded-tl-full"></div>
        </div>
        {/* Bottom Left Corner Elements */}
        <div className="bg-lightGreen w-20 h-20 rounded-bl-low rounded-tr-low mt-[5em]
          sm:w-25 sm:h-25 sm:rounded-bl-medium sm:rounded-tr-medium
          lg:w-30 lg:h-30 lg:rounded-bl-full lg:rounded-tr-full"></div>
      </div>
      
    </div>
  );
}

export default Page;
