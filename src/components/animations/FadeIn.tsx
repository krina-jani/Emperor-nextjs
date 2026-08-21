'use client';

import React, { useRef, useEffect, useState } from 'react';
import { cn } from '../../lib/utils';
import styles from './FadeIn.module.css';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  className,
  delay = '0ms',
  direction = 'up',
  duration = '600ms',
}) => {
  const domRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const currentDom = domRef.current;
    if (currentDom) {
      observer.observe(currentDom);
    }

    return () => {
      if (currentDom) {
        observer.unobserve(currentDom);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={cn(
        styles.wrapper,
        styles[direction],
        isVisible && styles.visible,
        className
      )}
      style={{
        animationDelay: delay,
        animationDuration: duration,
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
