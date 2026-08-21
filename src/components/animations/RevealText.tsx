'use client';

import React, { useRef, useEffect, useState } from 'react';
import { cn } from '../../lib/utils';
import styles from './RevealText.module.css';

interface RevealTextProps {
  text: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  delayMs?: number;
}

export const RevealText: React.FC<RevealTextProps> = ({
  text,
  className,
  tag: Tag = 'h2',
  delayMs = 0,
}) => {
  const domRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const words = text.split(' ');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
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
    <Tag ref={domRef as React.Ref<HTMLHeadingElement>} className={cn(styles.textBlock, className)}>
      {words.map((word, index) => (
        <span key={index} className={styles.wordWrapper}>
          <span
            className={cn(styles.word, isVisible && styles.visible)}
            style={{
              transitionDelay: `${delayMs + index * 40}ms`,
            }}
          >
            {word}&nbsp;
          </span>
        </span>
      ))}
    </Tag>
  );
};

export default RevealText;
