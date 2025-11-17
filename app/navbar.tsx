"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white border-b-8 border-white ">
      <div className="container mx-auto flex items-stretch justify-between">
        
        {/* Logo */}
        <div className="text-xl md:text-2xl xl:text-3xl font-black uppercase px-6 py-4 md:py-5 border-r-8 border-white flex items-center tracking-tighter">
           <span className="rotate-6">&lt;Amjad/&gt;</span> 
        </div>
        {/* Desktop Nav Links */}
        <div className="grow hidden md:flex items-center justify-center gap-1">
          <a 
            href="#about" 
            className="px-6 py-4 md:py-5 font-black uppercase text-sm xl:text-base tracking-wider border-x-4 border-white hover:bg-[#e9f294] hover:text-black transition-colors"
          >
            About
          </a>
          <a 
            href="#skills" 
            className="px-6 py-4 md:py-5 font-black uppercase text-sm xl:text-base tracking-wider border-r-4 border-white hover:bg-[#c3a1ff] hover:text-black transition-colors"
          >
            Skills
          </a>
          <a 
            href="#service" 
            className="px-6 py-4 md:py-5 font-black uppercase text-sm xl:text-base tracking-wider border-r-4 border-white hover:bg-[#a2f7a2] hover:text-black transition-colors"
          >
            Service
          </a>
          <a 
            href="#project" 
            className="px-6 py-4 md:py-5 font-black uppercase text-sm xl:text-base tracking-wider border-r-4 border-white hover:bg-white hover:text-black transition-colors"
          >
            Project
          </a>
        </div>
        
        {/* Hire Me Button & Mobile Toggle */}
        <div className="flex items-stretch">
          <a 
            href="#contact" 
            className="hidden md:flex px-8 py-4 md:py-5 border-l-8 border-white items-center font-black uppercase text-sm xl:text-base tracking-wider bg-[#e9f294] text-black hover:bg-[#c3a1ff] transition-colors"
          >
            Hire_Me
          </a>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden px-6 border-l-8 border-white flex items-center justify-center hover:bg-white/10 transition-colors" 
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span className={`block w-6 h-1 bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
              <span className={`block w-6 h-1 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-1 bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden z-50 bg-black border-t-8 border-white transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col">
          <a 
            href="#about" 
            onClick={() => setIsOpen(false)}
            className="px-6 py-5 border-b-4 border-white font-black uppercase text-lg tracking-wider hover:bg-[#e9f294] hover:text-black transition-colors"
          >
            [About]
          </a>
          <a 
            href="#skills" 
            onClick={() => setIsOpen(false)}
            className="px-6 py-5 border-b-4 border-white font-black uppercase text-lg tracking-wider hover:bg-[#c3a1ff] hover:text-black transition-colors"
          >
            [Skills]
          </a>
          <a 
            href="#service" 
            onClick={() => setIsOpen(false)}
            className="px-6 py-5 border-b-4 border-white font-black uppercase text-lg tracking-wider hover:bg-[#a2f7a2] hover:text-black transition-colors"
          >
            [Service]
          </a>
          <a 
            href="#project" 
            onClick={() => setIsOpen(false)}
            className="px-6 py-5 border-b-4 border-white font-black uppercase text-lg tracking-wider hover:bg-white hover:text-black transition-colors"
          >
            [Project]
          </a>
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="px-6 py-5 font-black uppercase text-lg tracking-wider bg-[#e9f294] text-black hover:bg-[#c3a1ff] transition-colors"
          >
            [Hire_Me]
          </a>
        </div>
      </div>
    </nav>
  );
}