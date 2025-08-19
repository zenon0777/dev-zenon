"use client"

import { useEffect, useState, use } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string | null;
  githubUrl: string;
};

const fadeIn = (direction = "up", delay = 0) => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0,
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay,
        duration: 0.5,
      },
    },
  }
}

export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const foundProject = projects.find((p) => p.id === resolvedParams.id);
    setProject(foundProject || projects[0]);
  }, [resolvedParams.id]);


  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0A1932] text-gray-100">
        <div className="animate-pulse text-[#64ffda]">Loading...</div>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#0A1932] text-gray-100">
      <main className="flex-1 pt-20 max-w-6xl mx-auto w-full px-6">
        <motion.section initial="hidden" animate="visible" variants={fadeIn("up")} className="py-20 max-w-6xl mx-auto">
          <Link href="/" className="inline-flex items-center text-[#64ffda] font-mono mb-12 hover:underline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div variants={fadeIn("right", 0.2)} className="lg:col-span-2 space-y-8">
              <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-[#233554]">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#64ffda]/10 via-transparent to-transparent rounded-lg" />
                <Image width={200} height={200} src={project.image || "/placeholder.svg"} alt={project.title} />
              </div>

              <div>
                <h1 className="text-4xl font-bold text-gray-100 mb-2">{project.title}</h1>
                <p className="text-[#64ffda] font-mono">{project.category}</p>
              </div>

              <div className="prose prose-invert max-w-none prose-headings:text-[#64ffda] prose-headings:font-bold prose-p:text-gray-400 prose-a:text-[#64ffda]">
                <h2>Project Overview</h2>
                <p>{project.description}</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl
                  nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl
                  nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                </p>

                <h2>Challenges and Solutions</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl
                  nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl
                  nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                </p>

                <h2>Key Features</h2>
                <ul>
                  <li>Feature one with detailed explanation</li>
                  <li>Feature two with detailed explanation</li>
                  <li>Feature three with detailed explanation</li>
                  <li>Feature four with detailed explanation</li>
                </ul>

                <h2>Technical Implementation</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl
                  nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl
                  nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeIn("left", 0.4)} className="lg:col-span-1">
              <div className="bg-[#112240] rounded-lg p-6 border border-[#233554] sticky top-24">
                <h3 className="text-xl font-bold text-gray-100 mb-6 pb-4 border-b border-[#233554]">Project Details</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-[#64ffda] font-mono text-sm mb-2">Timeline</h4>
                    <p className="text-gray-400">January 2023 - March 2023</p>
                  </div>

                  <div>
                    <h4 className="text-[#64ffda] font-mono text-sm mb-2">Role</h4>
                    <p className="text-gray-400">Lead Developer & Designer</p>
                  </div>

                  <div>
                    <h4 className="text-[#64ffda] font-mono text-sm mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech: string) => (
                        <span key={tech} className="px-2 py-1 bg-[#233554] text-gray-300 text-xs font-mono rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[#233554] space-y-4">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-[#64ffda]/10 text-[#64ffda] border border-[#64ffda] rounded hover:bg-[#64ffda]/20 transition-colors duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-transparent text-gray-400 border border-[#233554] rounded hover:border-gray-300 hover:text-gray-300 transition-colors duration-300"
                      >
                        <Github className="w-4 h-4" />
                        View Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <footer className="py-8 bg-[#0a192f] text-gray-400 font-mono text-sm border-t border-[#64ffda]/20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="mb-2">
            Crafted with purpose and perseverance by <span className="text-[#64ffda]">Zenon</span>
          </p>
          <p className="italic mb-4">&quot;Amor Fati – Embrace the code and the challenges it brings.&quot;</p>
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
            <a href="mailto:abderrahmane.daifi@protonmail.com" className="hover:text-[#64ffda]">
              Contact
            </a>
          </div>
          <p>© 2024 Zenon. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

const projects = [
  {
    id: "1",
    title: "E-commerce Platform",
    category: "Web Development",
    description:
      "A full-featured e-commerce platform built with Next.js and Stripe integration for payments. Includes product management, cart functionality, and user authentication.",
    image: "/placeholder.svg?height=800&width=1200",
    technologies: ["Next.js", "React", "Tailwind CSS", "Stripe", "Prisma"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/yourusername/ecommerce",
  },
  {
    id: "2",
    title: "Task Management App",
    category: "Web Development",
    description:
      "A productivity application for managing tasks, projects, and deadlines. Features include drag-and-drop organization, reminders, and team collaboration.",
    image: "/placeholder.svg?height=800&width=1200",
    technologies: ["React", "Redux", "Node.js", "MongoDB", "Socket.io"],
    demoUrl: "https://example.com/taskapp",
    githubUrl: "https://github.com/yourusername/taskapp",
  },
  {
    id: "3",
    title: "Fitness Tracker",
    category: "Mobile Apps",
    description:
      "A mobile application that helps users track workouts, nutrition, and progress towards fitness goals. Includes data visualization and personalized recommendations.",
    image: "/placeholder.svg?height=800&width=1200",
    technologies: ["React Native", "Firebase", "Chart.js", "Expo"],
    demoUrl: null,
    githubUrl: "https://github.com/yourusername/fitness-tracker",
  },
  {
    id: "4",
    title: "Portfolio Website",
    category: "UI/UX Design",
    description:
      "A personal portfolio website showcasing my work, skills, and experience. Features a clean, responsive design with dark mode support and animations.",
    image: "/placeholder.svg?height=800&width=1200",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "Three.js"],
    demoUrl: "https://yourportfolio.com",
    githubUrl: "https://github.com/yourusername/portfolio",
  },
  {
    id: "5",
    title: "Weather Dashboard",
    category: "Web Development",
    description:
      "A weather application that provides real-time forecasts, radar maps, and weather alerts. Uses geolocation to show local conditions and historical data.",
    image: "/placeholder.svg?height=800&width=1200",
    technologies: ["JavaScript", "OpenWeather API", "D3.js", "CSS"],
    demoUrl: "https://example.com/weather",
    githubUrl: "https://github.com/yourusername/weather-app",
  },
  {
    id: "6",
    title: "Social Media Dashboard",
    category: "UI/UX Design",
    description:
      "A dashboard for managing and analyzing social media accounts across multiple platforms. Includes analytics, content scheduling, and engagement tracking.",
    image: "/placeholder.svg?height=800&width=1200",
    technologies: ["React", "Node.js", "Express", "Social Media APIs", "Chart.js"],
    demoUrl: "https://example.com/social-dashboard",
    githubUrl: "https://github.com/yourusername/social-dashboard",
  },
]

