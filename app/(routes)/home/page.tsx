"use client";
import React, {useEffect} from "react";

import Home from '@/components/homesessions/home'
import About from '@/components/homesessions/about'
import Contact from '@/components/homesessions/contact'
import Experience from "@/components/homesessions/experience";
import Projects from "@/components/homesessions/projects";
import Footer from "@/components/homesessions/footer";

import 'react-social-icons/linkedin'
import 'react-social-icons/github'
import 'react-social-icons/instagram'

const HomePage = () => {
  useEffect(() => {
    // Trigger animations after a slight delay for a smooth effect
    const elements = document.querySelectorAll("div");
    elements.forEach((el) => {
      el.classList.add('animate-slide-in-fade');
    });
  },[]);

  return (
    <div className="bg-lightYellowGreen py-5">
      <div className = "font-poiret flex-row content-between ml-5 text-xl md:text-xl lg:text-2xl">
        Linh's <span className = "text-darkGreen">cozy corner</span>
      </div>
      <div className="flex flex-col justify-center contents-center">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
    
  );
}

export default HomePage;