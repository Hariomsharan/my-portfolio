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
      disc: "A React-based finance dashboard that visualizes income and expense data using charts, filters, and state management with dynamic data handling.",
      github: "https://github.com/Hariomsharan/Finance-Dashboard",
      live: "https://flowfinance-1.vercel.app/",
    },
  ];

  useGSAP(
    () => {
      const totalScroll = (projects.length - 1) * 100;

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

      gsap.to(".work-heading", {
        opacity: 0,
        y: -50,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "15% top",
          scrub: true,
        },
      });

      return () => pin.kill();
    },
    { scope: triggerRef },
  );

  return (
    <div
      id="work"
      ref={triggerRef}
      className="overflow-hidden bg-dark relative"
    >
      <div className="work-heading absolute top-20 left-6 md:left-20 z-10 pointer-events-none">
        <p className="text-gold text-[10px] uppercase tracking-[0.6em] mb-4 font-bold">
          Portfolio
        </p>
        <h2 className="text-4xl md:text-6xl font-light tracking-tighter uppercase text-white/20">
          Selected <span className="text-white">Works</span>
        </h2>
      </div>

      <div ref={sectionRef} className="flex h-screen relative">
        {projects.map((project, i) => (
          <section
            key={i}
            className={`h-screen w-screen shrink-0 flex items-center justify-center p-6 md:p-20 ${project.color}`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full max-w-7xl pt-20">
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
                  <FiExternalLink className="text-gold text-3xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500" />
                  <span className="text-[10px] uppercase tracking-[0.4em] text-white font-bold">
                    Visit Live Site
                  </span>
                </div>
              </a>

              <div className="space-y-8">
                <div className="space-y-2">
                  <p className="text-gold text-[10px] md:text-xs uppercase tracking-[0.5em] font-bold">
                    {project.category}
                  </p>
                  <h3 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-400 max-w-screen text-sm md:text-lg leading-relaxed font-light">
                  {project.disc}
                </p>

                <div className="pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 group"
                  >
                    <div className="p-3 rounded-full border border-white/10 bg-white/5 group-hover:border-gold group-hover:bg-gold transition-all duration-500">
                      <SiGithub className="text-xl group-hover:text-black transition-colors" />
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
