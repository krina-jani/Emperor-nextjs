'use client';

import React, { useRef, useEffect, useState } from 'react';
import { cn } from '../../lib/utils';
import styles from './Parallax.module.css';

interface ParallaxProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // Speed multiplier (e.g. -0.2 to pull up, 0.2 to pull down)
}

export const Parallax: React.FC<ParallaxProps> = ({
  children,
  className,
  speed = -0.15,
}) => {
  const domRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!domRef.current) return;

      const rect = domRef.current.getBoundingClientRect();
      const topOffset = rect.top;
      
      // Calculate scroll offset within the viewport
      const offsetVal = topOffset * speed;
      setOffset(offsetVal);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run initial alignment
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return (
    <div
      ref={domRef}
      className={cn(styles.parallaxWrapper, className)}
      style={{
        transform: `translate3d(0, ${offset}px, 0)`,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};

export default Parallax;
