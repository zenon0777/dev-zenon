import React from "react";
import AnimatedDecorations from "./AnimatedObjects";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/components/motions";
const ProjectsSection = ({
  projects,
}: {
  projects: {
    id: number;
    title: string;
    description: string;
    github: string;
    preview: string;
    tech: string[];
    image: string;
  }[];
}) => {
  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn("up")}
      className="min-h-screen flex items-center px-6 py-20 mx-auto relative"
    >
      <AnimatedDecorations />

      <div className="w-full space-y-16 relative z-10">
        <h2 className="text-4xl font-bold flex items-center">
          <span className="text-[#64ffda] font-mono mr-4">02.</span>
          Projects
        </h2>

        <div className="grid gap-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`relative grid md:grid-cols-12 items-center gap-4 ${
                index % 2 === 0 ? "" : "md:text-right"
              }`}
            >
              <div
                className={`md:col-span-7 relative group ${
                  index % 2 === 0 ? "md:col-start-1" : "md:col-start-6"
                }`}
              >
                <div className="relative h-72 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-[#64ffda] mix-blend-multiply opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div
                className={`md:col-span-7 md:absolute text-left ${
                  index % 2 === 0 ? "md:left-1/2" : "md:right-1/2"
                } bg-[#112240] p-6 rounded-lg shadow-xl`}
              >
                <div className="space-y-4">
                  <p className="text-[#64ffda] font-mono text-sm">
                    Featured Project
                  </p>
                  <h3 className="text-2xl font-bold text-gray-100">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{project.description}</p>

                  <ul
                    className={`flex flex-wrap gap-3 text-sm font-mono text-gray-300 text-start ${
                      index % 2 === 0 ? "justify-start" : "md:justify-start"
                    }`}
                  >
                    {project.tech.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>

                  <div
                    className={`flex gap-4 ${
                      index % 2 === 0 ? "" : "md:justify-start"
                    }`}
                  >
                    <a
                      href={project.github}
                      className="text-gray-100 hover:text-[#64ffda] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.168 22 16.42 22 12c0-5.523-4.477-10-10-10z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href={project.preview}
                      className="text-gray-100 hover:text-[#64ffda] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
