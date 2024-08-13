"use client";

import React from "react";
import '@/tailwind.config'; // Ensure Tailwind config is imported
import { Poppins, Poiret_One } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });
const poiretOne = Poiret_One({ subsets: ["latin"], weight: ["400"] });

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-lighYellowGreen p-[2%] min-h-screen relative">
      
      <div className="flex-row w-[100%] content-between items-center"> 
        {/* Top Right Corner Elements */}
        <div className="absolute top-0 right-0 flex-col gap-10 p-4">
          <div className="bg-darkGreen w-25 h-25 rounded-bl-full rounded-tr-full"></div>
          <div className="bg-lightYellow w-25 h-25 rounded-br-full rounded-tl-full mt-2"></div>
        </div>

        {/* Top Left Corner Elements */}
        <div className="absolute top-0 left-0 flex-col gap-10 p-4">
          <div className="flex flex-row items-start gap-2">
            <div className="bg-darkGreen w-20 h-20 rounded-br-full"></div>
            <div className="bg-white w-20 h-15 rounded-bl-full border border-darkGreen"></div>
          </div>
          <div className="bg-lightYellow w-30 h-30 rounded-br-full rounded-tl-full ml-20 mt-4"></div>
        </div>
      </div>

      {/* Center Content */}
      <div className="text-center mt-20">
        <div className="font-poiret text-[45px]">Welcome</div>
        <div className="font-poiret text-[45px] mt-4">to</div>
        <div className="font-poiret text-darkGreen text-[55px] mt-4">my cozy corner</div>
      </div>

      {/* Explore Button */}
      <button className="bg-darkGreen text-white font-poppins font-bold rounded-full py-2 px-6 mt-10 hover:bg-lightGreen transition-all">
        Explore
      </button>

      <div className="flex-row w-[100%] content-between items-center">
        {/* Bottom Right Corner Elements */}
        <div className="absolute bottom-0 right-0 flex-col gap-10 p-4">
          <div className="bg-darkGreen w-20 h-20 rounded-bl-full rounded-tr-full"></div>
          <div className="bg-lightYellow w-30 h-30 rounded-br-full rounded-tl-full mt-2"></div>
        </div>
        {/* Bottom Left Corner Elements */}
        <div className="bg-lightGreen w-30 h-30 rounded-bl-full rounded-tr-full"></div>
      </div>
      
    </div>
  );
}

export default Page;
