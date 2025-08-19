"use client";
import React, { useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import Image from "next/image";

const AnimatedNavbar = () => {
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      const previous = scrollY.getPrevious();
      if (latest > previous! && latest > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    });
  }, [scrollY]);

  const navVariants = {
    visible: { y: 0 },
    hidden: { y: "-100%" },
  };

  const menuVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const menuItemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Close mobile menu after clicking
  };

  const navItems = [
    { id: "about", num: "1" },
    { id: "projects", num: "2" },
    { id: "skills", num: "3" },
    { id: "blog", num: "4" },
    { id: "contact", num: "5" },
  ];

  return (
    <motion.nav
      variants={navVariants}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 z-50 w-full backdrop-blur-md bg-[#0A1932]/90 border-b border-[#64ffda]/10"
    >
      <div className="flex items-center justify-between max-w-6xl mx-auto px-6 h-20">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-2"
        >
          <button
            onClick={() => scrollToSection("intro")}
            className="group flex items-center space-x-1 font-mono text-sm"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/logo.svg"
                alt="logo"
                width={40}
                height={40}
              />
            </motion.div>
            <p className="text-xl font-mono font-bold group-hover:text-[#00bfa5] transition-colors text-[#C1D8D3]">
              Zenøn
            </p>
          </button>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="group flex items-center space-x-1 font-mono text-sm"
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                y: { duration: 0.2 },
              }}
            >
              <span className="text-[#64ffda] group-hover:text-[#00bfa5]">
                {item.num}.
              </span>
              <span className="text-gray-300 group-hover:text-[#64ffda] transition-colors">
                {item.id.charAt(0).toUpperCase() + item.id.slice(1)}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="lg:hidden flex flex-col space-y-1.5 z-50"
          onClick={() => setIsOpen(!isOpen)}
          initial={false}
          animate={isOpen ? "open" : "closed"}
        >
          <motion.span
            className="w-6 h-0.5 bg-[#64ffda] block"
            variants={{
              open: { rotate: 45, y: 6 },
              closed: { rotate: 0, y: 0 },
            }}
          />
          <motion.span
            className="w-6 h-0.5 bg-[#64ffda] block"
            variants={{
              open: { opacity: 0 },
              closed: { opacity: 1 },
            }}
          />
          <motion.span
            className="w-6 h-0.5 bg-[#64ffda] block"
            variants={{
              open: { rotate: -45, y: -6 },
              closed: { rotate: 0, y: 0 },
            }}
          />
        </motion.button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#0A1932] shadow-lg p-6 z-40 lg:hidden"
            >
              <div className="flex flex-col space-y-8 pt-16 bg-[#09162D] p-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    variants={menuItemVariants}
                    onClick={() => scrollToSection(item.id)}
                    className="group flex items-center space-x-4 font-mono text-lg"
                    custom={index}
                  >
                    <span className="text-[#64ffda] group-hover:text-[#00bfa5] w-6">
                      {item.num}.
                    </span>
                    <span className="text-gray-300 group-hover:text-[#64ffda] transition-colors">
                      {item.id.charAt(0).toUpperCase() + item.id.slice(1)}
                    </span>
                    <span className="w-6 h-0.5 bg-[#64ffda] group-hover:bg-[#00bfa5] transition-colors" />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default AnimatedNavbar;
