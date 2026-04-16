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
    gsap.from(".exp-item", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3,
      ease: "power4.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      }
    });
  }, { scope: container });

  return (
    <section ref={container} id="experience" className="py-24 px-6 md:px-12 lg:px-24 bg-dark">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-4">
        <div className="reveal">
          <h2 className="text-xs uppercase tracking-[0.5em] text-gold mb-4 font-bold">History</h2>
          <h3 className="text-4xl md:text-6xl font-light tracking-tighter uppercase">Work Experience</h3>
        </div>
        <p className="text-gray-500 text-[10px] uppercase tracking-widest hidden md:block">
          Evolution of Craft
        </p>
      </div>

      <div className="space-y-20">
        {experiences.map((exp, index) => (
          <div key={index} className="exp-item border-t border-white/10 pt-12 group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              <div className="lg:col-span-4">
                <p className="text-gold font-medium mb-2">{exp.period}</p>
                <h4 className="text-2xl md:text-3xl font-bold uppercase tracking-tight group-hover:text-white transition-colors">
                  {exp.company}
                </h4>
              </div>

              <div className="lg:col-span-8">
                <h5 className="text-xl md:text-2xl font-light text-gray-300 mb-6 uppercase tracking-widest">
                  {exp.role}
                </h5>
                <ul className="space-y-4">
                  {exp.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex gap-4 text-gray-400 leading-relaxed font-light">
                      <span className="text-gold mt-1.5 text-[8px]">◆</span>
                      <span className="max-w-2xl">{detail}</span>
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