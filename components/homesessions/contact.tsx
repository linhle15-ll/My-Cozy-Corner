
import React from "react";
import { EmailIcon, InstagramIcon, LinkedinIcon } from '@/utils/icons'
import Swal from 'sweetalert2';


const ACCESS_KEY = process.env.NEXT_PUBLIC_ACCESS_KEY || "";

const Contact = () => {
    const onSubmit = async (e: any) => { //mark as spam?
        e.preventDefault();
        const formData = new FormData(e.target);

        formData.append("access_key", ACCESS_KEY);

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("SUCCESS")
            Swal.fire({
                title: "Success!",
                text: "Your message has been sent.",
                icon: "success"
            });
        }
    };

    return (
        <div className="flex flex-col justify-center items-center gap-[10px] py-15 pt-20 pl-[3%] pr-[1%] 
                        md:flex-col md:text-center 
                        lg:flex-row lg:text-left lg:items-start lg:pl-[12%]"
            style={{ alignItems: "center" }}
        >
            <div className="flex flex-col w-full lg:w-[50%] gap-1 lg:items-start">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <span className="font-poppins text-h4 font-semibold md:text-h2 lg:text-h1">
                        GET <span className="text-green"> IN TOUCH</span>
                    </span>
                    <span className="font-poppins text-h5 md:text-h3 lg:text-h1">with me</span>
                </div>

                <div className="flex flex-row gap-1.5 mt-15 justify-center lg:justify-start">
                    <span className="flex flex-row gap-1 text-h8
                                    md:flex-col md:text-center 
                                    lg:flex-row lg:text-left lg:items-start">
                        {EmailIcon}
                    </span>
                    <span className="text-h9 text-center lg:text-left">le224l@mtholyoke.edu</span>
                </div>

                <div className="flex flex-row gap-8 mt-5 justify-center lg:justify-start lg:items-start">
                    <button onClick={() => window.open('https://www.linkedin.com/in/ngoclinhle15/', '_blank', 'noopener,noreferrer')}>{LinkedinIcon}</button>
                    <button onClick={() => window.open('https://www.instagram.com/linhlinhlinhne/', '_blank', 'noopener,noreferrer')}>{InstagramIcon}</button>
                </div>

            </div>
            {/* Contact form */}

            <form className="bg-brightGreen w-[90%] flex flex-col gap-[1rem] rounded-low m-5 mb-0 p-9
                            md:w-[80%] md:p-10 lg:w-[60%] lg:p-12"
                onSubmit={onSubmit}
            >
                <input type="hidden" name="from_name" value="Your Website's Message"></input>
                <div className="font-poiret text-h8 mb-5 md:text-h7 lg:text-h7"> Stop by. Say Hi</div>
                
                <input required className="bg-transparent font-poppins text-[13px] md:text-[13px] lg:text-[14px] rounded-lower border-medium border-black p-3 mr-15 placeholder-white focus:bg-white focus:text-black focus:border-black focus:outline-none"
                    type="text" name="name"
                    placeholder="Your Name"
                />
                <input required className="bg-transparent font-poppins text-[13px] md:text-[13px] lg:text-[14px] rounded-lower border-medium border-black p-3 mr-15 placeholder-white focus:bg-white focus:text-black focus:border-black focus:outline-none"
                    type="email" name="email"
                    placeholder="Your Email" />
                <input required className="bg-transparent font-poppins text-[13px] md:text-[13px] lg:text-[14px] rounded-lower border-medium border-black p-3 mr-15 placeholder-white focus:bg-white focus:text-black focus:border-black focus:outline-none"
                    type="text" name="subject"
                    placeholder="Subject" />
                <textarea required className="bg-transparent font-poppins text-[13px] md:text-[13px] lg:text-[14px] rounded-lower border-medium border-black p-3 mr-15 h-40 max-h-40 placeholder-white focus:bg-white focus:text-black focus:border-black focus:outline-none"
                    name="message"
                    placeholder="Your Message" />
                <button className="bg-black text-white text-[13px] w-32 flex-row font-poppins font-bold rounded-lower py-2 px-6 mt-10
                    md:text-[13px] md:py-4 md:px-8 
                    lg:text-h9 lg:py-4 lg:px-[20px]
                    hover:border-lightBlack hover:transition-all transform hover:scale-90"
                    type="submit"
                >
                    Send
                </button>
            </form>

        </div>
    )
}

export default Contact;
