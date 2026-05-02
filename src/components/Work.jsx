import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

import DishDiscover from "../assets/dishDiscover.webp";
import Uber from "../assets/uberClone.webp";
import FlowFinance from "../assets/FlowFinance.webp";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const sectionRef = useRef();
  const triggerRef = useRef();

  const projects = [
    {
      title: "Recipe Management Platform",
      category: "MERN STACK",
      color: "bg-dark",
      img: DishDiscover,
      disc: "A full-stack recipe management platform where users can create, update, and manage recipes with authentication and image uploads.",
      github: "https://github.com/Hariomsharan/DishDiscover",
      live: "https://dish-discover-lyart.vercel.app/",
    },
    {
      title: "Ride Booking App",
      category: "MERN STACK",
      color: "bg-zinc-900",
      img: Uber,
      disc: "A full-stack ride booking application with real-time location tracking and seamless user experience.",
      github: "https://github.com/Hariomsharan/UBER",
      live: "https://uber-tau-ten.vercel.app/",
    },
    {
      title: "Finance Dashboard",
      category: "REACT",
      color: "bg-dark",
      img: FlowFinance,
      disc: "A React-based finance dashboard that visualizes income and expense data using charts, filters, and state management.",
      github: "https://github.com/Hariomsharan/Finance-Dashboard",
      live: "https://flowfinance-1.vercel.app/",
    },
  ];

  useGSAP(
    () => {
      const totalSlides = projects.length; 
      const totalScroll = totalSlides * 100;

      const pin = gsap.to(sectionRef.current, {
        x: `-${totalScroll}vw`,
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: () => `+=${sectionRef.current.offsetWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => pin.kill();
    },
    { scope: triggerRef }
  );

  return (
    <div id="work" ref={triggerRef} className="overflow-hidden bg-dark relative">
      <div ref={sectionRef} className="flex h-screen relative w-fit">
        
        <section className="h-screen w-screen shrink-0 flex items-center justify-center p-6 bg-dark border-r border-white/5">
          <div className="text-center">
            <p className="text-gold text-[10px] md:text-xs uppercase tracking-[0.8em] mb-6 font-bold">
              Portfolio
            </p>
            <h2 className="text-6xl md:text-9xl font-bold tracking-tighter uppercase text-white leading-none">
              Selected <br /> <span className="text-white/20">Works</span>
            </h2>
            <div className="mt-10 flex items-center justify-center gap-4">
              <div className="w-12 h-px bg-gold/50"></div>
              <span className="text-[8px] uppercase tracking-widest text-gray-500">Scroll</span>
              <div className="w-12 h-px bg-gold/50"></div>
            </div>
          </div>
        </section>

        {projects.map((project, i) => (
          <section
            key={i}
            className={`h-screen w-screen shrink-0 flex items-center justify-center p-6 md:p-20 ${project.color}`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center w-full max-w-7xl pt-10 md:pt-0">
              
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-video bg-white/5 border border-white/10 relative group overflow-hidden order-1 lg:order-0 cursor-pointer"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center gap-2">
                  <FiExternalLink className="text-gold text-2xl" />
                  <span className="text-[10px] uppercase tracking-[0.4em] text-white font-bold">
                    Visit Live Site
                  </span>
                </div>
              </a>

              <div className="space-y-6 md:space-y-8">
                <div className="space-y-2">
                  <p className="text-gold text-[10px] md:text-xs uppercase tracking-[0.5em] font-bold">
                    {project.category}
                  </p>
                  <h3 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase leading-tight md:leading-none text-white">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-400 max-w-lg text-sm md:text-lg leading-relaxed font-light">
                  {project.disc}
                </p>

                <div className="pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 group"
                  >
                    <div className="p-3 rounded-full border border-white/10 bg-white/5 group-hover:border-gold group-hover:bg-gold transition-all duration-500">
                      <SiGithub className="text-xl group-hover:text-black transition-colors text-white" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 group-hover:text-white transition-colors border-b border-transparent group-hover:border-gold pb-1">
                      View Source
                    </span>
                  </a>
                </div>
              </div>

            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Work;