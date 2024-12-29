'use client';
import React from 'react';
import { motion } from 'framer-motion';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/zenon0777/',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/abderrahmane-daifi-2170721b8/',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect x="2" y="9" width="4" height="12"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      )
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@yourusername',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z"/>
        </svg>
      )
    }
  ];

  const sideVariants = {
    hidden: {
      opacity: 0,
      x: -20
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 1,
        duration: 0.5
      }
    }
  };

  const emailVariants = {
    hidden: {
      opacity: 0,
      x: 20
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 1,
        duration: 0.5
      }
    }
  };

  return (
    <>
      {/* Left side social links */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sideVariants}
        className="fixed left-10 bottom-0 hidden lg:flex flex-col items-center space-y-6 after:content-[''] after:w-[1px] after:h-32 after:bg-gray-400"
      >
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#64ffda] hover:-translate-y-1 transition-all duration-300"
          >
            {link.icon}
          </a>
        ))}
      </motion.div>

      {/* Right side email */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={emailVariants}
        className="fixed right-10 bottom-0 hidden lg:flex flex-col items-center space-y-6 after:content-[''] after:w-[1px] after:h-32 after:bg-gray-400"
      >
        <a
          href="mailto:abderrahmane.daifi@protonmail.com"
          className="text-gray-400 hover:text-[#64ffda] transition-colors duration-300 [writing-mode:vertical-rl] tracking-widest text-sm"
        >
          abderrahmane.daifi@protonmail.com
        </a>
      </motion.div>
    </>
  );
};

export default SocialLinks;