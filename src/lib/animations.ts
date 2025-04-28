
import type { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  exit: { // Optional exit animation
    opacity: 0,
    y: -20,
    transition: {
        duration: 0.3,
        ease: 'easeIn',
    },
  }
};

export const fadeIn: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
   exit: { // Optional exit animation
    opacity: 0,
    transition: {
        duration: 0.3,
        ease: 'easeIn',
    },
  }
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15, // Stagger children animation by 0.15s
      delayChildren: 0.1, // Optional delay before children start animating
    },
  },
};

// Add more reusable animations as needed
export const slideInLeft: Variants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, x: -30, transition: { duration: 0.3, ease: 'easeIn' } },
};

export const slideInRight: Variants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, x: 30, transition: { duration: 0.3, ease: 'easeIn' } },
};
