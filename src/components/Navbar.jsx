import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  // GSAP Animation for Mobile Menu
  useGSAP(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        clipPath: "circle(141.4% at 100% 0%)",
        duration: 0.8,
        ease: "power4.inOut",
      });
      gsap.from(".mobile-link", {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        delay: 0.3,
        ease: "power3.out",
      });
    } else {
      gsap.to(menuRef.current, {
        clipPath: "circle(0% at 100% 0%)",
        duration: 0.8,
        ease: "power4.inOut",
      });
    }
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 w-full z-100 px-6 md:px-12 py-6 flex justify-between items-center bg-dark/20 backdrop-blur-md border-b border-white/5">
        <div className="text-xl font-bold tracking-tighter text-white">
          H<span className="text-gold">.</span>
        </div>

        <div className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.3em] text-gray-400 hover:text-gold transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>
      </nav>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden z-160 fixed right-6 top-6 flex flex-col gap-1.5 items-end p-3 bg-dark/50 backdrop-blur-sm rounded-full"
      >
        <div className={`h-0.5 bg-white transition-all duration-300 ease-in-out ${
          isOpen ? 'w-7 rotate-45 translate-y-2' : 'w-8'
        }`} />
        <div className={`h-0.5 bg-gold transition-all duration-300 ${
          isOpen ? 'opacity-0' : 'w-5'
        }`} />
        <div className={`h-0.5 bg-white transition-all duration-300 ease-in-out ${
          isOpen ? 'w-7 -rotate-45 -translate-y-2' : 'w-8'
        }`} />
      </button>

      {/* --- MOBILE FULLSCREEN MENU --- */}
      <div 
        ref={menuRef}
        style={{ clipPath: "circle(0% at 100% 0%)" }}
        className="fixed inset-0 bg-black z-150 flex flex-col items-center justify-center md:hidden"
      >
        <div className="flex flex-col items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="mobile-link text-4xl font-bold tracking-tighter text-white hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="absolute bottom-16 mobile-link opacity-0 flex flex-col items-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500 mb-4">Socials</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-gold uppercase tracking-widest">LinkedIn</a>
            <a href="#" className="text-xs text-gold uppercase tracking-widest">GitHub</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;