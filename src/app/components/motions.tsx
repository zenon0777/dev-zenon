import { Variants } from 'framer-motion';

// Fade in animations
export const fadeIn = (direction: 'up' | 'down' | 'left' | 'right', delay: number = 0): Variants => ({
  hidden: {
    opacity: 0,
    y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
    x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
      delay,
    },
  },
});

// Scale animations
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Stagger children animations
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Text reveal animation
export const textReveal: Variants = {
  hidden: {
    y: "100%",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Hover animations
export const hoverScale = {
  scale: 1.05,
  transition: {
    duration: 0.3,
    ease: [0.25, 0.1, 0.25, 1],
  },
};

// Path drawing animation
export const pathDraw: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1, ease: "easeInOut" },
      opacity: { duration: 0.3 },
    },
  },
};

// Scroll progress animation
export const scrollProgressBar: Variants = {
  hidden: { scaleX: 0, transformOrigin: "left" },
  visible: {
    scaleX: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};