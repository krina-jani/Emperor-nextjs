'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Reset scroll position to top instantly on page navigation
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
      (window as any).lenis?.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  const handleTransitionComplete = () => {
    if (typeof window !== 'undefined') {
      ScrollTrigger.refresh();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ ease: 'easeInOut', duration: 0.75 }}
      onAnimationComplete={handleTransitionComplete}
    >
      {children}
    </motion.div>
  );
}
