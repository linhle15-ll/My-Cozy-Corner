import { Footprints } from "lucide-react";
import React from "react";

const Contact = () => {
    return (
        <div className = "flex flex-row gap-10 items-center">
            <div className = "flex flex-col gap-2 justify-start">
                <span className="font-poppins text-h3 font-medium text-green">GET IN TOUCH </span>
                <span className="font-poppins text-h3 ">with me</span>
            </div>
            <div>
                <span>Email</span>
                <span>le224l@mtholyoke.edu</span>
            </div>
            {/* Contact form */}
            <form className = "flex flex-row gap-10">
                <div> Stop by. Say Hi!</div>
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <input type="text" placeholder="Subject" />
                <textarea placeholder="Your Message" />
                <button type="submit">Send</button>
            </form>

        </div>
    )
}

export default Contact;