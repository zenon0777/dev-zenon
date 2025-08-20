"use client";
import { motion } from "framer-motion";
import BlogSection from "./components/BlogSection/BlogSection";
import IntroSection from "./components/IntroSection/IntroSection";
import { fadeIn } from "./components/motions";
import AnimatedNavbar from "./components/NavBar";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import SocialLinks from "./components/SocialLinks";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "MedinaGo",
    description: `Developed a modern web application leveraging AI for cultural exploration. Features include a real-time audio guide, intelligent location-based navigation, and curated content, all accessed via a responsive UI.
     Built using Next.js, React, Radix UI, and FastAPI with OpenAI integration.`,
    github: "https://github.com/1337Impact/MEDNIA-HERITAGE",
    tech: ["Next.js", "React", "Radix UI", "FastAPI", "OpenAI"],
    image: "/madina-go-1.png",
  },
  {
    id: 2,
    title: "Z-tube: Modern Full-Stack Movie Streaming Platform",
    description: "Developed a modern, responsive, full-stack movie streaming platform, HyperTube, \
    enabling users to browse, search, and stream movies directly in their browser via an integrated torrent client. \
    Leveraged Next.js and TypeScript for a dynamic frontend experience, and Django with PostgreSQL for a robust backend. \
    Features include user authentication, watchlists, comments, ratings, and seamless integration with TMDB and YTS APIs. \
    Demonstrated skills in full-stack development, \
    API integration, real-time streaming concepts, and containerized deployment using Docker.",
    github: "https://github.com/zenon0777/HyperTube",
    tech: ["Next.js 15", "TypeScript", "Redux Toolkit", "React Query", "Material-UI", "Tailwind CSS", "Framer Motion",
      "Django 5.1", "Django REST Framework", "PostgreSQL", "JWT Authentication", "Celery", "Docker", "Nginx", "AWS S3"],
    image: "/z-tube-1.png",
  },
  {
    id: 3,
    title:
      "End-to-End DevOps Solution with Kubernetes for a Mid-Sized Enterprise",
    description:
      "Infrastructure Automation Showcase. Built a suite of projects to demonstrate\
      modern DevOps workflows, including setting up K3s Kubernetes clusters, deploying multi-application stacks via Docker and Kubernetes, and managing infrastructure with Vagrant and VirtualBox.\
      Focuses on container orchestration and Infrastructure as Code.",
    github: "https://github.com/zenon0777/inceptionOfThings",
    preview: "/project-2.png",
    tech: [
      "Kubernetes",
      "Vagrant",
      "VirtualBox",
      "Jenkins",
      "ArgoCD",
      "DigitalOcean",
      "K3s",
      "K3D",
    ],
    image: "/project-2.png",
  },
  {
    id: 4,
    title: "Cloud one",
    description:
      "Developed a fully automated cloud infrastructure solution using Terraform on DigitalOcean, \
      implementing Infrastructure as Code principles to orchestrate multiple containerized services. \
      The infrastructure provisions and manages a WordPress CMS, static website hosting, PHPMyAdmin, and MariaDB database, \
      all served through an Nginx reverse proxy with SSL termination.\n\
      The architecture emphasizes security and monitoring, with each service running in isolated Docker containers orchestrated via Docker Compose. \
      The deployment includes a comprehensive monitoring stack using Prometheus for metrics collection and Grafana for visualization dashboards, \
      ensuring real- time performance tracking and system health monitoring.The entire setup features automated deployment, \
      persistent storage for databases and WordPress content, and secure communication between services, demonstrating practical \
      application of DevOps practices and cloud platform management skills.",
    github: "git@github.com:zenon0777/Cloud-1.git",
    preview:
      "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    tech: [
      "Terraform",
      "Docker",
      "Nginx",
      "Prometheus",
      "Grafana",
      "DigitalOcean",
      "WordPress",
      "PHPMyAdmin",
      "MariaDB",
      "DevOps",
    ],
    image: "/cloudOne.png",
  },
];

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen bg-[#0A1932] text-gray-100">
      <AnimatedNavbar />

      <SocialLinks />

      <main className="flex-1 pt-20 max-w-6xl justify-center items-center mx-auto">
        <IntroSection />

        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn("up")}
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
                  for DevOps methodologies. I&apos;m adept at containerization using
                  Docker, orchestrating CI/CD pipelines, and leveraging cloud
                  platforms to optimize application deployment and performance.
                </p>
                <p>
                  When I&apos;m not coding, you will find me exploring new tools,
                  deepening my understanding of IT architecture, or sharing
                  knowledge with the developer community. I thrive on challenges
                  that push me to learn, adapt, and grow.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative group w-full max-w-sm">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#64ffda]/30 via-transparent to-[#0A1932] rounded-lg blur-xl group-hover:blur-lg transition duration-500" />
                <div className="relative w-full max-w-sm h-auto aspect-square">
                  <Image
                    src="/animatedCharacter.svg"
                    alt="Animated Character"
                    width={200}
                    height={200}
                    className="transform group-hover:scale-105 transition-transform duration-300 rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <ProjectsSection projects={projects} />

        <SkillsSection />

        <BlogSection />

        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn("up")}
          className="min-h-screen flex items-center px-6 py-20 max-w-6xl mx-auto"
        >
          <div className="w-full max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold">
              <span className="text-[#64ffda] font-mono block mb-4">03.</span>
              Get In Touch
            </h2>
            <p className="text-gray-400">
              I&apos;m currently looking for new opportunities. Whether you have a
              question or just want to say hi, I&apos;ll try my best to get back to
              you!
            </p>
            <a
              href="mailto:abderrahmane.daifi@protonmail.com"
              className="inline-block px-8 py-4 border-2 border-[#64ffda] text-[#64ffda] rounded-lg hover:bg-[#64ffda]/10 transition-colors duration-300"
            >
              Say Hello
            </a>
          </div>
        </motion.section>
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
      <footer className="py-8 bg-[#0a192f] text-gray-400 font-mono text-sm border-t border-[#64ffda]/20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="mb-2">
            Crafted with purpose and perseverance by{" "}
            <span className="text-[#64ffda]">Zenon</span>
          </p>
          <p className="italic mb-4">
            &quot;Amor Fati – Embrace the code and the challenges it brings.&quot;
          </p>
          <div className="flex justify-center space-x-4 mb-4">
            <a
              href="https://github.com/zenon0777/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#64ffda]"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/abderrahmane-daifi-2170721b8/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#64ffda]"
            >
              LinkedIn
            </a>
            <a
              href="mailto:abderrahmane.daifi@protonmail.com"
              className="hover:text-[#64ffda]"
            >
              Contact
            </a>
          </div>
          <p>© 2024 Zenon. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
