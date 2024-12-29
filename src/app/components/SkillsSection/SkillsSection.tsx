"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeIn, staggerContainer, scaleIn } from "@/app/components/motions";

interface Skill {
  name: string;
  level: number;
  icon: string;
  category: "frontend" | "backend" | "tools" | "soft";
}

const skills: Skill[] = [
  // Frontend
  { name: "React/Next.js", level: 90, icon: "⚛️", category: "frontend" },
  { name: "TypeScript", level: 85, icon: "📘", category: "frontend" },
  { name: "TailwindCSS", level: 88, icon: "🎨", category: "frontend" },
  // Backend
  { name: "Node.js/NestJS", level: 85, icon: "🚀", category: "backend" },
  { name: "PostgreSQL", level: 80, icon: "🐘", category: "backend" },
  { name: "MongoDB", level: 82, icon: "🍃", category: "backend" },
  // Tools
  { name: "Git", level: 88, icon: "📚", category: "tools" },
  { name: "Docker", level: 75, icon: "🐳", category: "tools" },
  { name: "AWS", level: 70, icon: "☁️", category: "tools" },
  // Soft Skills
  { name: "Problem Solving", level: 90, icon: "🧩", category: "soft" },
  { name: "Communication", level: 85, icon: "💬", category: "soft" },
  { name: "Team Work", level: 88, icon: "🤝", category: "soft" },
];

const SkillBar = ({ skill }: { skill: Skill }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div ref={ref} variants={fadeIn("right")} className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{skill.icon}</span>
          <span className="text-gray-200">{skill.name}</span>
        </div>
        <span className="text-[#64ffda]">{skill.level}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-[#64ffda] to-[#00bfa5]"
        />
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.section
      id="skills"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={staggerContainer}
      className="min-h-screen flex items-center px-6 py-20 max-w-6xl mx-auto"
    >
      <div className="w-full space-y-16">
        <motion.div variants={fadeIn("down")} className="text-center space-y-4">
          <h2 className="text-4xl font-bold flex items-center justify-center text-gray-100">
            <span className="text-[#64ffda] font-mono mr-4">02.</span>
            Skills & Expertise
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and professional
            capabilities. Each skill is continuously being refined through
            practical application and learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <motion.div variants={scaleIn} className="space-y-8">
            <h3 className="text-2xl font-semibold text-[#64ffda] mb-6">
              Technical Proficiency
            </h3>
            <div className="space-y-6">
              {skills
                .filter((skill) => skill.category !== "soft")
                .map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div variants={scaleIn} className="space-y-8">
            <h3 className="text-2xl font-semibold text-[#64ffda] mb-6">
              Professional Skills
            </h3>
            <div className="space-y-6">
              {skills
                .filter((skill) => skill.category === "soft")
                .map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;
