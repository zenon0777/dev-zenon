"use client";
import Image from "next/image";
import { useEffect } from "react";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import IntroSection from "./components/IntroSection/IntroSection";
import AnimatedBackground from "./components/IntroSection/AnimatedBackground";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0A1932] text-gray-100">
      {/* Nav bar */}
      <nav className="fixed top-0 z-50 w-full backdrop-blur-md bg-[#0A1932]/90 border-b border-[#64ffda]/10">
        <div className="flex items-center justify-between max-w-6xl mx-auto px-6 h-20">
          <div className="flex items-center space-x-2 hover:scale-105 transition-transform">
            <button
              onClick={() => scrollToSection("intro")}
              className="group flex items-center space-x-1 font-mono text-sm hover:-translate-y-0.5 transition-transform"
            >
              <Image
                src="/logo.svg"
                alt="logo"
                width={40}
                height={40}
                objectFit="cover"
              />
              <p className="text-xl font-mono font-bold group-hover:text-[#00bfa5] transition-colors text-[#C1D8D3]">
                Zenøn
              </p>
            </button>
          </div>
          <div className="flex space-x-8">
            {[
              { id: "about", num: "1" },
              { id: "projects", num: "2" },
              { id: "contact", num: "3" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group flex items-center space-x-1 font-mono text-sm hover:-translate-y-0.5 transition-transform"
              >
                <span className="text-[#64ffda] group-hover:text-[#00bfa5]">
                  {item.num}.
                </span>
                <span className="text-gray-300 group-hover:text-[#64ffda] transition-colors">
                  {item.id.charAt(0).toUpperCase() + item.id.slice(1)}
                </span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-1 pt-20">
        {/* Introduction */}
        <IntroSection />

        <section
          id="about"
          className="min-h-screen flex items-center px-6 py-20 max-w-6xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-4xl font-bold flex items-center text-gray-100">
                <span className="text-[#64ffda] font-mono mr-4">01.</span>
                About Me
              </h2>
              <div className="text-gray-400 space-y-4 leading-relaxed relative">
                <p className="before:block before:w-16 before:h-1 before:bg-[#64ffda] before:mb-4">
                  As a Software Developer, I bring a blend of creativity and
                  technical expertise to every project I undertake. My
                  experience spans full-stack development with a strong
                  foundation in JavaScript frameworks like Next.js and NestJS,
                  coupled with database management using PostgreSQL and MongoDB.
                </p>
                <p>
                  Over time, I have honed my skills in creating scalable,
                  high-performance applications while maintaining a clean and
                  maintainable codebase.
                </p>
                <p>
                  In addition to my development skills, I have a growing passion
                  for DevOps methodologies. I'm adept at containerization using
                  Docker, orchestrating CI/CD pipelines, and leveraging cloud
                  platforms to optimize application deployment and performance.
                </p>
                <p>
                  When I'm not coding, you will find me exploring new tools,
                  deepening my understanding of IT architecture, or sharing
                  knowledge with the developer community. I thrive on challenges
                  that push me to learn, adapt, and grow.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative group w-full max-w-sm">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#64ffda]/30 via-transparent to-[#0A1932] rounded-lg blur-xl group-hover:blur-lg transition duration-500" />
                <img
                  src="/animatedCharacter.svg"
                  alt="Animated Character"
                  className="w-full max-w-sm transform group-hover:scale-105 transition-transform duration-300 rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <ProjectsSection />

        {/* Contact */}
        <section
          id="contact"
          className="min-h-screen flex items-center px-6 py-20 max-w-6xl mx-auto"
        >
          <div className="w-full max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold">
              <span className="text-[#64ffda] font-mono block mb-4">03.</span>
              Get In Touch
            </h2>
            <p className="text-gray-400">
              I'm currently looking for new opportunities. Whether you have a
              question or just want to say hi, I'll try my best to get back to
              you!
            </p>
            <a
              href="mailto:abderrahmane.daifi@protonmail.com"
              className="inline-block px-8 py-4 border-2 border-[#64ffda] text-[#64ffda] rounded-lg hover:bg-[#64ffda]/10 transition-colors duration-300"
            >
              Say Hello
            </a>
          </div>
        </section>
      </main>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideInLeft {
          from {
            transform: translateX(-100px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideInRight {
          from {
            transform: translateX(100px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideInUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes lineGrow {
          from {
            width: 0;
          }
          to {
            width: 33.333333%;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-slideInLeft {
          animation: slideInLeft 1s ease-out forwards;
        }
        .animate-slideInRight {
          animation: slideInRight 1s ease-out forwards;
        }
        .animate-slideInUp {
          animation: slideInUp 1s ease-out forwards;
        }
        .animate-lineGrow {
          animation: lineGrow 1s ease-out forwards;
          animation-delay: 0.5s;
        }
      `}</style>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-400 font-mono text-sm border-t border-[#64ffda]/10">
        <p>Built with Next.js by Zenon</p>
        <p>© 2024 All rights reserved</p>
      </footer>
    </div>
  );
}
