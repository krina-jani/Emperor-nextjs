'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './CustomCursor.module.css';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if the user is on mobile/tablet (touch device)
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    // Center cursor coordinates
    const cursorCoords = { x: 0, y: 0 };
    const mouseCoords = { x: 0, y: 0 };

    // Move cursor with quickTo for maximum fluid performance
    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.15, ease: 'power3.out' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.15, ease: 'power3.out' });

    const handleMouseMove = (e: MouseEvent) => {
      const isLoading = document.querySelector('[class*="LoadingScreen_screen"]');
      if (isLoading) {
        gsap.set(cursor, { opacity: 0 });
        return;
      }

      gsap.set(cursor, { opacity: 1 });
      mouseCoords.x = e.clientX;
      mouseCoords.y = e.clientY;
      
      // Move helper using coordinates centered around cursor size
      xTo(mouseCoords.x - 6);
      yTo(mouseCoords.y - 6);
    };

    // Expand cursor on hover elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if target is a button, anchor, input, card, or has cursor-expand className
      const isInteractive = 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('[role="button"]') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('.interactive-hover') ||
        target.closest('[class*="card"]'); // matches glass-card, ServiceCard, ProjectCard etc.

      if (isInteractive) {
        gsap.to(cursor, {
          scale: 3.5,
          backgroundColor: 'rgba(20, 33, 52, 0.08)',
          borderColor: 'var(--color-primary)',
          borderWidth: 1.5,
          duration: 0.2,
        });
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if leaving an interactive area
      const isInteractive = 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('[role="button"]') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('.interactive-hover') ||
        target.closest('[class*="card"]');

      if (isInteractive) {
        gsap.to(cursor, {
          scale: 1,
          backgroundColor: 'var(--color-primary)',
          borderColor: 'transparent',
          borderWidth: 0,
          duration: 0.2,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return <div ref={cursorRef} className={styles.cursor} />;
};

export default CustomCursor;
