'use client';

import React, { useRef, ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedCardWrapperProps {
  children: ReactNode;
  delay?: number;
  index?: number;
}

const AnimatedCardWrapper: React.FC<AnimatedCardWrapperProps> = ({ 
  children, 
  delay = 0, 
  index = 0 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  // Using once: false so it animates in/out as you scroll up and down
  const inView = useInView(ref, { amount: 0.2, once: false });
  
  return (
    <motion.div
      ref={ref}
      data-index={index}
      initial={{ scale: 0.85, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.85, opacity: 0 }}
      transition={{ duration: 0.4, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCardWrapper;
