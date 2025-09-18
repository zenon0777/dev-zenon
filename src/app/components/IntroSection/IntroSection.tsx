import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeIn, textReveal, staggerContainer } from '@/app/components/motions';
import AnimatedBackground from './AnimatedBackground';

export default function EnhancedIntroSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.section
      id="intro"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={staggerContainer}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 max-w-screen-xl mx-auto relative overflow-hidden py-20 md:py-0"
    >
      <AnimatedBackground />
      <div className="space-y-4 md:space-y-8 z-10 w-full">
        <div className="space-y-3 md:space-y-6 relative px-2 sm:px-0">
          <motion.div
            variants={fadeIn('right', 0.2)}
            className="overflow-hidden"
          >
            <motion.p className="text-[#64ffda] font-mono text-base sm:text-lg tracking-wider">
              👋 Hello, I&apos;m
            </motion.p>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h1 
              variants={textReveal} 
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-100 tracking-tight relative"
            >
              Abderrahmane DAIFI
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: '33.333333%' }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                className="absolute -bottom-2 sm:-bottom-3 left-0 h-0.5 sm:h-1 bg-gradient-to-r from-[#64ffda] to-[#00bfa5] rounded-full"
              />
            </motion.h1>
          </div>

          <motion.p
            variants={fadeIn('left', 0.4)}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-300 font-light leading-tight sm:leading-normal"
          >
            Software Developer turning ideas into
            <span className="block sm:inline">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64ffda] to-[#00bfa5] font-medium"> seamless</span>,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64ffda] to-[#00bfa5] font-medium"> scalable</span> solutions
            </span>
          </motion.p>

          <motion.div
            variants={fadeIn('up', 0.6)}
            className="relative text-sm sm:text-base md:text-lg"
          >
            <p className="text-gray-400 max-w-2xl font-mono leading-relaxed mt-4 sm:mt-6 md:mt-8">
              A passionate and dedicated Software Developer with a keen eye for
              crafting efficient and user-focused solutions. I specialize in
              building dynamic web applications and robust backend systems using
              modern technologies like Next.js, NestJS, and TypeScript.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 0.8)}
            className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-8 sm:mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-[#64ffda] text-[#64ffda] rounded-lg hover:bg-[#64ffda]/10 transition-colors duration-300 font-medium tracking-wide text-sm sm:text-base"
              onClick={() => {
                const element = document.getElementById("projects");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Projects
            </motion.button>
            <motion.a
              href="mailto:abderrahmane.daifi@protonmail.com"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#64ffda] to-[#00bfa5] text-[#0A1932] rounded-lg hover:opacity-90 transition-colors duration-300 font-medium tracking-wide shadow-lg shadow-[#64ffda]/20 text-sm sm:text-base"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}