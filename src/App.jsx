import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Work from './components/Work';


gsap.registerPlugin(ScrollTrigger);

function App() {
  const main = useRef();

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  useGSAP(() => {
    const reveals = gsap.utils.toArray(".reveal");
    reveals.forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });
    });
  }, { scope: main });

  return (
    <div ref={main}>
      <Navbar />
      <Hero />
      <AboutMe />
      <Work />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;