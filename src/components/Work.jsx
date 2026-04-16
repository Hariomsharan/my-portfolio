import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const sectionRef = useRef();
  const triggerRef = useRef();

  const projects = [
    { title: "Task Manager", category: "MERN STACK", color: "bg-soft" },
    { title: "Chai Culture", category: "BRANDING", color: "bg-zinc-900" },
    { title: "Digital Risk", category: "WEB DESIGN", color: "bg-zinc-800" },
    { title: "Portfolio V3", category: "GSAP / REACT", color: "bg-soft" },
  ];

  useGSAP(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top", 
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
        },
      }
    );
    return () => pin.kill();
  }, { scope: triggerRef });

  return (
    <div id="work" ref={triggerRef} className="overflow-hidden">
      <div ref={sectionRef} className="flex h-screen w-[400vw] relative">
        {projects.map((project, i) => (
          <section key={i} className={`h-screen w-screen flex items-center justify-center p-10 md:p-20 ${project.color}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full max-w-7xl">
              

              <div className="aspect-video bg-white/5 border border-white/10 relative group overflow-hidden">
                 <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                 <span className="absolute center text-[10px] tracking-widest text-gray-500 uppercase">Project Image {i+1}</span>
              </div>

              <div className="space-y-6">
                <p className="text-gold text-xs uppercase tracking-[0.5em]">{project.category}</p>
                <h3 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">{project.title}</h3>
                <p className="text-gray-400 max-w-sm text-sm md:text-base">
                  A premium digital solution focusing on performance and minimalist architecture.
                </p>
                <button className="text-xs uppercase tracking-widest border-b border-white/20 pb-2 hover:border-gold hover:text-gold transition-all">
                  Case Study
                </button>
              </div>

            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Work;