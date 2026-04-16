import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const container = useRef();

  useGSAP(() => {
    gsap.from(".reveal-text", {
      opacity: 0,
      y: 30,
      duration: 1.5,
      stagger: 0.3,
      ease: "power4.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 70%",
      }
    });

    gsap.to(".geo-shape", {
      rotate: 360,
      duration: 20,
      repeat: -1,
      ease: "none"
    });
  }, { scope: container });

  return (
    <section id="about" ref={container} className="relative min-h-screen flex items-center px-6 md:px-12 mb-6 lg:px-24 bg-dark overflow-hidden">
      
      <div className="geo-shape absolute -right-20 top-1/2 -translate-y-1/2 w-75 h-75 md:w-150 md:h-150 border border-gold/10 rounded-full hidden md:block" />
      
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start z-10">
        
        <div className="reveal-text">
          <h2 className="text-xs uppercase tracking-[0.5em] text-gold mb-6 font-bold">The Story</h2>
          <h3 className="text-4xl md:text-6xl font-light leading-tight">
            I AM A DEVELOPER WHO <span className="italic font-serif">OBSESSES</span> OVER THE DETAILS.
          </h3>
        </div>

        <div className="reveal-text space-y-8 mt-4 md:mt-20">
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
            Based in India, I specialize in the **MERN Stack** and high-end animations. 
            I don’t just build websites; I craft digital artifacts that resonate with 
            quality and minimalist aesthetics.
          </p>
          
          <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
            <div>
              <p className="text-white font-bold text-2xl">25+</p>
              <p className="text-gray-500 text-xs uppercase tracking-widest mt-2">Projects Finished</p>
            </div>
            <div>
              <p className="text-white font-bold text-2xl">100%</p>
              <p className="text-gray-500 text-xs uppercase tracking-widest mt-2">Bug-Free Guarantee</p>
            </div>
          </div>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Whether it's a collaborative task manager or a royal branding experience for a 
            tea startup, my focus is always on **clean code** and **smooth performance**. 
            I bridge the gap between complex backend logic and pixel-perfect frontend design.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;