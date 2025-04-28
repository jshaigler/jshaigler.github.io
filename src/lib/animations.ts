
import type { Variants } from 'framer-motion';

// Reduced default durations slightly for perceived speed
const DEFAULT_DURATION = 0.4;
const EXIT_DURATION = 0.25;

export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 25, // Slightly less intense start
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DEFAULT_DURATION, // Faster duration
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: -15, // Slightly less intense exit
    transition: {
        duration: EXIT_DURATION, // Faster exit
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
      duration: DEFAULT_DURATION + 0.1, // Slightly longer for simple fade
      ease: 'easeOut',
    },
  },
   exit: {
    opacity: 0,
    transition: {
        duration: EXIT_DURATION,
        ease: 'easeIn',
    },
  }
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1, // Slightly faster stagger
      delayChildren: 0.05, // Slightly faster delay
    },
  },
};

export const slideInLeft: Variants = {
  initial: { opacity: 0, x: -40 }, // Slightly less intense
  animate: { opacity: 1, x: 0, transition: { duration: DEFAULT_DURATION, ease: 'easeOut' } },
  exit: { opacity: 0, x: -25, transition: { duration: EXIT_DURATION, ease: 'easeIn' } },
};

export const slideInRight: Variants = {
    initial: { opacity: 0, x: 40 }, // Slightly less intense
    animate: { opacity: 1, x: 0, transition: { duration: DEFAULT_DURATION, ease: 'easeOut' } },
    exit: { opacity: 0, x: 25, transition: { duration: EXIT_DURATION, ease: 'easeIn' } },
};
