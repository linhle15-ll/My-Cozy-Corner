import React from "react";
import Image from 'next/image';

import { projectsArr } from '@/utils/projects';
import { Link } from '@/utils/icons';

const Projects = () => {
    return (
        <div className="py-5">
        <div className="flex flex-col content-center items-center bg-lightYellowGreen p-[1%] pb-15 text-center">
            <div className="flex flex-col gap-2"> 
                <span className="font-poiret text-h8 md:text-h7 lg:text-h7"> I do Tech for Good! </span>
                <span className="font-poppins font-600 text-h7 md:text-h6 lg:text-h5 text-darkPink"> My Projects</span>
            </div> 
            
        </div>
        <div className="flex flex-wrap gap-9 justify-center w-[90%] mx-auto 
                        md:flex-col md:w-[80%] md:items-center
                        lg:flex-row lg:justify-center lg:w-[80%]"
        >
            
            {projectsArr.map((item, key) => 
            <a key={key} className="mt-5 w-full sm:w-[50%] md:w-[80%] lg:w-[35%] cursor-pointer">
                <article className="relative overflow-hidden rounded-lower h-[400px] md:h-[400px] lg:h-[500px] shadow hover:shadow-lg flex flex-col justify-between
                                    transition-all duration-300 ease-in-out"
                >
                
                    {/* Image */}
                    <Image
                        alt=""
                        src={item.image}
                        className="absolute inset-0 h-full w-full object-cover"
                    />

                    {/* Grey shadow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-gray-900/25 z-10">
                        <div className="absolute bottom-0 p-4 sm:p-6 z-20 group">
                            <time dateTime={item.date} className="font-poppins block text-h10 text-white/90"> {item.date} </time>
                            <h3 className="font-poppins text-h7 text-green mt-0.5 font-semibold">{item.title}</h3>
                            <h3 className="font-poppins block text-h10 font-600 text-white"> {item.role} </h3>
                            <h3 className="font-poppins mt-2 text-h10 font-400 text-white">{item.description}</h3>

                            <div className="hide hidden group-hover:block">
                                {item.details?.map((detail) => (
                                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                                        {detail}
                                    </p>
                                ))}

                                <button onClick={() => window.open(item.link, '_blank', 'noopener,noreferrer')} 
                                        className="flex flex-row gap-2 font-poppins text-white font-semibold items-center justify-center white border-2 border-darkPink rounded-lower py-1 px-5 mt-10
                                                    md:text-[14px] md:py-3 md:px-7
                                                    lg:text-[16px] lg:py-3 lg:px-[18px]
                                                    hover:bg-darkPink hover:transition-all transform hover:scale-90"
                                >
                                    {Link} Learn more
                                </button>
                            </div>
                            
                        </div>
                    </div>
                </article>
                
            </a>
            )}
        </div>
        </div>
    );
};

export default Projects;
