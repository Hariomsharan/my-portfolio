import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const container = useRef();

  const experiences = [
    {
      role: "React & Node.js Intern",
      company: "DSI Private Ltd.",
      period: "2021 — 2022",
      details: [
        "Developed reusable and responsive React components for an Inventory Management System.",
        "Integrated frontend components with RESTful APIs to manage product and inventory data.",
        "Collaborated on Node.js and Express backend APIs for CRUD operations.",
        "Followed Agile development practices and utilized Git for version control."
      ]
    }
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 70%",
      }
    });

    tl.from(".reveal-text", {
      y: 100,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out"
    })
    
    .from(".exp-line", {
      scaleX: 0,
      transformOrigin: "left",
      duration: 1.5,
      ease: "power3.inOut"
    }, "-=0.5")

    .from(".exp-content", {
      opacity: 0,
      x: -20,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    }, "-=1")

    .from(".detail-item", {
      opacity: 0,
      y: 10,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.5");

  }, { scope: container });

  return (
    <section ref={container} id="experience" className="py-24 px-6 md:px-12 lg:px-24 bg-dark">
      
      <div className="flex flex-col md:flex-row justify-between md:items-end mb-20 gap-4 overflow-hidden">
        <div>
          <div className="overflow-hidden">
            <h2 className="reveal-text text-xs uppercase tracking-[0.5em] text-gold mb-4 font-bold">History</h2>
          </div>
          <div className="overflow-hidden">
            <h3 className="reveal-text text-4xl md:text-6xl font-light tracking-tighter uppercase text-white">Work Experience</h3>
          </div>
        </div>
        <p className="reveal-text text-gray-500 text-[10px] uppercase tracking-widest hidden md:block">
          Evolution of Craft
        </p>
      </div>

      <div className="space-y-20">
        {experiences.map((exp, index) => (
          <div key={index} className="exp-item relative pt-12 group">
            
            <div className="exp-line absolute top-0 left-0 w-full h-px bg-white/10" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              <div className="lg:col-span-4 exp-content">
                <p className="text-gold font-medium mb-2 tracking-widest text-sm">{exp.period}</p>
                <h4 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white/80 group-hover:text-white transition-all duration-500">
                  {exp.company}
                </h4>
              </div>

              <div className="lg:col-span-8 exp-content">
                <h5 className="text-xl md:text-2xl font-light text-gray-300 mb-8 uppercase tracking-widest">
                  {exp.role}
                </h5>
                <ul className="space-y-6">
                  {exp.details.map((detail, dIdx) => (
                    <li key={dIdx} className="detail-item flex gap-4 text-gray-400 leading-relaxed font-light hover:text-gray-200 transition-colors">
                      <span className="text-gold mt-1.5 text-[8px] animate-pulse">◆</span>
                      <span className="max-w-2xl text-sm md:text-base">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;