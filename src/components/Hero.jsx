import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const container = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".hero-glow", {
        opacity: 0,
        duration: 2,
        ease: "power2.out",
      }).from(
        ".hero-reveal",
        {
          y: 100,
          opacity: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "power4.out",
        },
        "-=1.5",
      );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-dark"
    >
      <div className="hero-glow absolute w-125 h-125 bg-gold/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-4xl">
        <p className="hero-reveal text-gold text-[10px] md:text-xs uppercase tracking-[0.6em] mb-6 font-bold">
          Based in India • OPEN TO OPPORTUNITIES
        </p>

        <h1 className="hero-reveal text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.85] uppercase mb-6">
          HARIOM <br />
          <span
            className="text-transparent border-white/20"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}
          >
            SHARAN
          </span>
        </h1>

        <p className="hero-reveal text-gold text-[10px] md:text-xs uppercase tracking-[0.6em] mb-6 font-bold">
          Mern Stack Developer
        </p>

        <p className="hero-reveal max-w-lg mx-auto text-gray-400 text-sm md:text-lg leading-relaxed mb-12 font-light">
          Building full-stack applications with React and Node.js, focused on
          performance, scalability, and real-world impact.
        </p>

        <div className="hero-reveal flex flex-col md:flex-row items-center justify-center gap-6">
          <a
            href="#work"
            className="px-12 py-4 bg-white text-black text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-gold transition-all duration-500"
          >
            View Projects
          </a>
          <a
            href="/Hariom_Sharan_MERN_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] border-b border-white/20 pb-1 hover:border-gold transition-all"
          >
            <span className="group-hover:text-gold transition-colors">
              View Resume
            </span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-500 group-hover:text-gold transition-colors"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>

      <div className="hero-reveal absolute bottom-10 flex flex-col items-center gap-2">
        <span className="text-[8px] uppercase tracking-widest text-gray-500">
          Scroll
        </span>
        <div className="w-px h-12 bg-linear-to-b from-gold/50 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
