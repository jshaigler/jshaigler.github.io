
'use client'; // Required for Framer Motion and useEffect

import React, { useEffect } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

// Define a simple fade-in variant if not already defined globally
const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
};

interface AnimatedStatProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  decimals?: number;
}

export const AnimatedStat: React.FC<AnimatedStatProps> = ({
  value,
  suffix = '',
  prefix = '',
  duration = 2,
  className = '',
  decimals = 0,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
  }, [controls, inView]);

  return (
    <motion.span
      ref={ref}
      initial="initial"
      animate={controls}
      variants={fadeIn} // Use a simple fade-in animation
      className={className}
    >
      {/* Use CountUp only when in view to start the animation */}
      {inView ? (
        <CountUp
          end={value}
          duration={duration}
          prefix={prefix}
          suffix={suffix}
          decimals={decimals}
          separator=","
        />
      ) : (
        // Display initial value (or prefix/suffix) before animation starts
        `${prefix}0${suffix}`
      )}
    </motion.span>
  );
};
