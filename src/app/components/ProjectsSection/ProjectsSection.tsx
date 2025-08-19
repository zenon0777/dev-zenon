import React, { useState } from "react";
import AnimatedDecorations from "./AnimatedObjects";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/components/motions";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  github?: string;
  preview?: string;
  tech: string[];
  image: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

const cardVariant = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08 } }),
};

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 240;
  const needsTruncation = project.description.length > maxLength;
  const displayText = isExpanded ? project.description : `${project.description.substring(0, maxLength)}${needsTruncation ? "..." : ""}`;
  const isEven = index % 2 === 0;

  return (
    <motion.article
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={cardVariant}
      whileHover={{ scale: 1.01 }}
      className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
    >
      <div
        className={`lg:col-span-7 order-1 lg:order-${isEven ? "1" : "2"} relative group`}
      >
        <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-gradient-to-br from-[#071126] to-[#0f2338] shadow-lg">
          <div className="absolute inset-0 bg-[#64ffda] mix-blend-multiply opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
          <div className="relative w-full h-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={index < 2}
            />
          </div>
        </div>
      </div>

      <div
        className={`lg:col-span-5 order-2 lg:order-${isEven ? "2" : "1"} lg:relative z-10`}
      >
        <div
          className={`bg-[#0b1a2b]/95 border border-[#153045]/40 p-6 rounded-xl shadow-2xl lg:mr-8 lg:text-left
          `}
        >
          <div className={`space-y-3 sm:space-y-4 text-left`}>
            <p className="text-[#64ffda] font-mono text-xs sm:text-sm">Featured Project</p>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-100">{project.title}</h3>

            <div>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed bg-transparent p-3 rounded">
                {displayText}
              </p>

              {needsTruncation && (
                <div className={`mt-2`}>
                  <button
                    onClick={() => setIsExpanded((s) => !s)}
                    className="inline-flex items-center gap-2 text-[#64ffda] text-xs font-mono hover:underline focus:outline-none focus:ring-2 focus:ring-[#64ffda] focus:ring-opacity-40 rounded px-2 py-1 transition"
                    aria-expanded={isExpanded}
                  >
                    {isExpanded ? "Show less" : "Read more"}
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isExpanded ? "M18 15l-6-6-6 6" : "M6 9l6 6 6-6"} />
                    </svg>
                  </button>
                </div>
              )}
            </div>

            <ul
              className={`flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm font-mono text-gray-300 justify-start`}
            >
              {project.tech.map((tech) => (
                <li key={tech} className="px-2 py-1 bg-[#112b44]/60 rounded text-xs">
                  {tech}
                </li>
              ))}
            </ul>

            <div className={`flex gap-3 pt-3 justify-start`}>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} GitHub`}
                  className="inline-flex items-center gap-2 text-gray-300 hover:text-[#0ef1b6] transition-colors p-2 rounded-md hover:bg-[#0ef1b6]/6 focus:outline-none focus:ring-2 focus:ring-[#0ef1b6]/40"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 .297a12 12 0 00-3.793 23.405c.6.111.793-.26.793-.577 0-.285-.01-1.04-.015-2.04-3.225.7-3.905-1.56-3.905-1.56-.53-1.354-1.295-1.716-1.295-1.716-1.057-.722.08-.707.08-.707 1.17.082 1.786 1.203 1.786 1.203 1.04 1.778 2.727 1.264 3.395.967.105-.752.406-1.264.74-1.556-2.574-.294-5.283-1.287-5.283-5.73 0-1.266.45-2.302 1.186-3.113-.12-.294-.513-1.48.112-3.084 0 0 .967-.31 3.167 1.19a11 11 0 015.766 0c2.198-1.5 3.165-1.19 3.165-1.19.627 1.604.234 2.79.114 3.084.738.811 1.186 1.847 1.186 3.113 0 4.454-2.712 5.432-5.296 5.72.417.36.79 1.088.79 2.194 0 1.585-.015 2.865-.015 3.254 0 .32.19.694.8.576A12 12 0 0012 .297" />
                  </svg>
                </a>
              )}

              {project.preview && (
                <a
                  href={project.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} Live Preview`}
                  className="inline-flex items-center gap-2 text-gray-300 hover:text-[#0ef1b6] transition-colors p-2 rounded-md hover:bg-[#0ef1b6]/6 focus:outline-none focus:ring-2 focus:ring-[#0ef1b6]/40"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3h7v7m0 0L10 14" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21H3V3" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn("up")}
      className="min-h-screen flex items-center px-4 sm:px-6 py-16 sm:py-20 mx-auto relative max-w-7xl"
    >
      <AnimatedDecorations />

      <div className="w-full space-y-12 sm:space-y-16 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold flex items-center gap-4">
          <span className="text-[#64ffda] font-mono text-sm sm:text-base">02.</span>
          Projects
        </h2>

        <div className="flex flex-col gap-12">
          {projects.length === 0 && (
            <div className="text-center text-gray-400">No projects to show yet — come back soon.</div>
          )}

          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
