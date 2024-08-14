
import React from "react";
import { EmailIcon, InstagramIcon, LinkedinIcon } from '@/utils/icons'

const Contact = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-[5px] py-[2%] pl-[8%] pr-[1%] 
                        md:flex-col md:text-center 
                        lg:flex-row lg:text-left lg:items-start lg:pl-[12%]">
            <div className = "flex flex-col w-full lg:w-[50%] gap-1 lg:items-start">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <span className="font-poppins text-h5 font-semibold md:text-h3 lg:text-h1">
                        GET <span className="text-green"> IN TOUCH</span> 
                    </span>
                    <span className="font-poppins text-h5 md:text-h3 lg:text-h1">with me</span>
                </div>

                <div className="flex flex-row gap-1.5 mt-20 justify-center lg:justify-start">
                    <span className="flex flex-row gap-1 text-h8
                                    md:flex-col md:text-center 
                                    lg:flex-row lg:text-left lg:items-start"> 
                        {EmailIcon}
                    </span>
                    <span className="text-h9 text-center lg:text-left">le224l@mtholyoke.edu</span>
                </div>

                <div className="flex flex-row gap-5 mt-9 justify-center lg:justify-start lg:items-start">
                    <a href="https://www.linkedin.com/in/ngoclinhle15/">{LinkedinIcon}</a>
                    <a href="https://www.instagram.com/linhlinhlinhne/">{InstagramIcon}</a>
                </div>

            </div>
             {/* Contact form */}

            <form className="bg-brightGreen w-[90%] flex flex-col gap-[1rem] rounded-low m-5 mb-0 p-12
                            md:w-[80%] lg:w-[60%]">
                <div className="font-poiret text-h8 mb-5 md:text-h7 lg:text-h7"> Stop by. Say Hi</div>
                <input className="bg-transparent font-poppins text-[13px] md:text-[13px] lg:text-[14px] rounded-lower border-medium border-black p-3 mr-15 placeholder-white focus:bg-white focus:text-black" type="text" placeholder="Your Name" />
                <input className="bg-transparent font-poppins text-[13px] md:text-[13px] lg:text-[14px] rounded-lower border-medium border-black p-3 mr-15 placeholder-white focus:bg-white focus:text-black" type="email" placeholder="Your Email" />
                <input className="bg-transparent font-poppins text-[13px] md:text-[13px] lg:text-[14px] rounded-lower border-medium border-black p-3 mr-15 placeholder-white focus:bg-white focus:text-black" type="text" placeholder="Subject" />
                <textarea className="bg-transparent font-poppins text-[13px] md:text-[13px] lg:text-[14px] rounded-lower border-medium border-black p-3 mr-15 h-40 max-h-40 placeholder-white focus:bg-white focus:text-black" placeholder="Your Message" />
                <button className="bg-black text-white text-[13px] w-32 flex-row font-poppins font-bold rounded-lower py-2 px-6 mt-12
                    md:text-[13px] md:py-4 md:px-8 
                    lg:text-h9 lg:py-4 lg:px-[20px]
                    hover:border-lightBlack hover:transition-all transform hover:scale-90" type="submit">
                    Send
                </button>
            </form>

        </div>
    )
}

export default Contact;