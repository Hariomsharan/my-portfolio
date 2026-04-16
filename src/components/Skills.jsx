import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  DiHtml5, DiCss3, DiJavascript1, DiReact, DiNodejsSmall, DiMongodb, DiMysql 
} from 'react-icons/di';
import { 
  SiRedux, SiTailwindcss, SiGreensock, SiExpress, SiFirebase, 
  SiGithub, SiPostman, SiVercel, SiNetlify, SiRender 
} from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

const AdobeIcon = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14.653 14.12l1.623 2.582h-2.126l-1.077-1.747l-1.06 1.747H9.84l1.65-2.61l-1.57-2.525h2.122l1.018 1.688l1.04-1.688h2.126l-1.573 2.525zM24 0v24H0V0h24zm-13.62 17.844l3.125-5.187l3.144 5.187h2.296L13.52 9.1l-3.14 5.21V9.1H8.083v8.744h2.297z"/>
  </svg>
);

const Skills = () => {
  const container = useRef();

  const categories = [
    {
      name: "Frontend",
      list: [
        { n: "HTML", i: <DiHtml5 className="text-[#E34F26]" /> },
        { n: "CSS", i: <DiCss3 className="text-[#1572B6]" /> },
        { n: "JS", i: <DiJavascript1 className="text-[#F7DF1E]" /> },
        { n: "React", i: <DiReact className="text-[#61DAFB]" /> },
        { n: "Redux", i: <SiRedux className="text-[#764ABC]" /> },
        { n: "Tailwind", i: <SiTailwindcss className="text-[#06B6D4]" /> },
        { n: "GSAP", i: <SiGreensock className="text-[#88CE02]" /> },
      ]
    },
    {
      name: "Backend & DB",
      list: [
        { n: "Node.js", i: <DiNodejsSmall className="text-[#339933]" /> },
        { n: "Express", i: <SiExpress className="text-white" /> },
        { n: "MongoDB", i: <DiMongodb className="text-[#47A248]" /> },
        { n: "MySQL", i: <DiMysql className="text-[#4479A1]" /> },
        { n: "Firebase", i: <SiFirebase className="text-[#FFCA28]" /> },
      ]
    },
    {
      name: "Tools & Deploy",
      list: [
        { n: "GitHub", i: <SiGithub className="text-white" /> },
        { n: "Postman", i: <SiPostman className="text-[#FF6C37]" /> },
        { n: "Adobe XD", i: <AdobeIcon className="text-[#FF61F6]" /> },
        { n: "Vercel", i: <SiVercel className="text-white" /> },
        { n: "Netlify", i: <SiNetlify className="text-[#00C7B7]" /> },
        { n: "Render", i: <SiRender className="text-white" /> },
      ]
    }
  ];

  useGSAP(() => {
    gsap.from(".skill-card", {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      }
    });
  }, { scope: container });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(card, {
      x: x * 0.25,
      y: y * 0.25,
      rotateX: -y * 0.1,
      rotateY: x * 0.1,
      duration: 0.4,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.5)"
    });
  };

  return (
    <section ref={container} id="skills" className="py-24 px-6 md:px-12 lg:px-24 bg-dark overflow-hidden">
      <h2 className="text-xs uppercase tracking-[0.5em] text-gold mb-16 font-bold">Expertise</h2>
      <div className="space-y-20">
        {categories.map((cat, idx) => (
          <div key={idx}>
            <h3 className="text-gray-500 text-[10px] uppercase tracking-widest mb-8 border-l border-gold pl-4">
              {cat.name}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6">
              {cat.list.map((skill, sIdx) => (
                <div 
                  key={sIdx} 
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  className="skill-card bg-soft/10 border border-white/5 p-8 flex flex-col items-center justify-center gap-4 hover:border-gold/50 transition-colors duration-500 group relative cursor-pointer"
                >
                  {/* Subtle Glow Background */}
                  <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                  
                  <div className="text-4xl grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110 z-10">
                    {skill.i}
                  </div>
                  <span className="text-[10px] uppercase tracking-tighter text-gray-500 group-hover:text-white z-10">
                    {skill.n}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;