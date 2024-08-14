'use client'
import React from "react";
import ExperienceCards from "@/components/ui/experience-cards"
import WorkExperience from "@/components/work-experience"
const Experience = () => {
    return (
        <div>
            <div className="flex flex-col content-center items-center bg-lightYellowGreen p-11 pb-15 text-center">
                <div className="flex flex-col gap-2">
                    <span className="font-poiret text-h8 md:text-h7 lg:text-h7"> What I have </span>
                    <span className="font-poppins font-600 text-h7 md:text-h6 lg:text-h5 text-darkPink"> My Experience </span>
                </div> 
                
            </div>
            <ExperienceCards />
            <div className = "flex flex-col content-center items-center bg-lightYellowGreen p-11 pb-15 text-center">
                <span className="font-poppins font-600 text-h7 md:text-h6 lg:text-h5 text-green"> Work Experience </span>
                <WorkExperience />
            </div>
            
        </div>
    )
}


export default Experience;
