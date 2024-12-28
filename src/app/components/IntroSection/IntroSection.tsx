"use client";
import React from "react";
import AnimatedBackground from "./AnimatedBackground";

export default function IntroSection() {
  return (
    <section
      id="intro"
      className="h-lvh flex items-center justify-center px-6 max-w-screen-xl mx-auto relative overflow-hidden"
    >
      <AnimatedBackground />
      
      <div className="space-y-8 z-10">
        <div className="space-y-6 relative">
          <p className="text-[#64ffda] font-mono text-lg tracking-wider animate-slideInLeft">
            👋 Hello, I'm
          </p>
          <h1 className="text-7xl font-bold text-gray-100 animate-slideInRight relative tracking-tight">
            Abderrahmane DAIFI
            <span className="absolute -bottom-3 left-0 w-1/3 h-1 bg-gradient-to-r from-[#64ffda] to-[#00bfa5] animate-lineGrow rounded-full"></span>
          </h1>
          <p className="text-5xl text-gray-300 font-light animate-slideInLeft leading-relaxed">
            Software Developer turning ideas into
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64ffda] to-[#00bfa5] font-medium"> seamless</span>,
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64ffda] to-[#00bfa5] font-medium"> scalable</span> solutions
          </p>
          <div className="relative">
            <p className="text-gray-400 max-w-2xl font-mono leading-relaxed mt-8 text-lg animate-slideInUp">
              A passionate and dedicated Software Developer with a keen eye for
              crafting efficient and user-focused solutions. I specialize in
              building dynamic web applications and robust backend systems using
              modern technologies like Next.js, NestJS, and TypeScript.
            </p>
          </div>
          <div className="flex gap-6 mt-12 animate-fadeIn">
            <button className="px-8 py-4 border-2 border-[#64ffda] text-[#64ffda] rounded-lg hover:bg-[#64ffda]/10 transition-all duration-300 hover:scale-105 font-medium tracking-wide">
              View Projects
            </button>
            <button className="px-8 py-4 bg-gradient-to-r from-[#64ffda] to-[#00bfa5] text-[#0A1932] rounded-lg hover:opacity-90 transition-all duration-300 hover:scale-105 font-medium tracking-wide shadow-lg shadow-[#64ffda]/20">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}