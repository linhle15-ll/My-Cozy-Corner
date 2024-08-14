'use client';
import React from 'react';
import { experienceArr }  from '@/utils/experiences'; // Adjust path as necessary

const ExperienceCards: React.FC = () => {
    return (
        <div className="font-poppins flex flex-col gap-9 p-5 items-center justify-center md:flex md:flex-col lg:flex lg:flex-row">
‌            {experienceArr.map((item: any) => (
                <div key={item.key} className="group relative block w-[400px] sm:h-80 sm:w-[400px] lg:h-90">
                    <span className="absolute inset-0 border-2 border-dashed border-darkGreen rounded-low"></span>
                    
                    <div
                        className="relative flex h-full transform items-end border-2 border-green rounded-low bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
                    >
                        <div
                        className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
                        >
                        <div> {item.icon} </div>
                        <h3 className="mt-4 text-xl font-medium sm:text-2xl">{item.title}</h3>

                        <p className="mt-4 text-sm sm:text-base">
                            {item.description}
                        </p>
                    </div>
                </div>
            </div>
            ))}
        </div>
    );
}

export default ExperienceCards;
