
'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const dotVariants = {
  initial: {
    y: '0%',
  },
  animate: {
    y: '100%', // Move dots down
  },
};

const dotTransition = {
  duration: 0.6, // Slightly slower for smoother feel
  repeat: Infinity,
  repeatType: 'reverse' as const, // Explicitly type as 'reverse'
  ease: 'easeInOut',
};

export function LoadingSpinner() {
  return (
    // Full screen overlay
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm">
      {/* Animation container */}
      <motion.div
        className="flex w-20 h-10 justify-around items-end" // Wider container, align dots at bottom initially
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        {/* Dots with primary color */}
        <motion.span
          className="block h-4 w-4 rounded-full bg-primary"
          variants={dotVariants}
          transition={dotTransition}
        />
        <motion.span
          className="block h-4 w-4 rounded-full bg-primary"
          variants={dotVariants}
          transition={dotTransition}
        />
        <motion.span
          className="block h-4 w-4 rounded-full bg-primary"
          variants={dotVariants}
          transition={dotTransition}
        />
      </motion.div>
    </div>
  );
}
