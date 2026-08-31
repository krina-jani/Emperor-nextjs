'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './HomeStack.module.css';

gsap.registerPlugin(ScrollTrigger);

interface HomeStackProps {
  children: React.ReactNode;
}

export const HomeStack: React.FC<HomeStackProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      // Find all sections that have the class stackSection inside the container
      const sections = gsap.utils.toArray<HTMLElement>(`.${styles.stackSection}`);
      if (sections.length < 2) return;

      const firstSection = sections[0];

      /*
       * ============================================
       * FIRST SECTION PIN (ProjectsTeaser)
       * ============================================
       *
       * The first section stays in place while the following
       * sections scroll upward over it.
       */
      ScrollTrigger.create({
        trigger: firstSection,
        start: 'top top',
        end: () => `+=${window.innerHeight * (sections.length - 1)}`,
        pin: true,
        pinSpacing: false,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      });

      /*
       * ============================================
       * SECTION STACKING
       * ============================================
       *
       * Each section receives a higher z-index,
       * allowing it to move over the previous section.
       */
      sections.forEach((section, index) => {
        if (index === 0) return;

        gsap.set(section, {
          zIndex: index + 2,
        });

        ScrollTrigger.create({
          trigger: section,
          start: 'top bottom',
          end: 'top top',
          scrub: true,
          invalidateOnRefresh: true,
        });
      });

      /*
       * Refresh ScrollTrigger after everything has been initialized.
       */
      ScrollTrigger.refresh();
    }, container);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.stackContainer}>
      {React.Children.map(children, (child) => {
        if (!child) return null;
        const isAutoHeight = React.isValidElement(child) && (child as React.ReactElement<any>).props.id === 'about';
        return (
          <div className={`${styles.stackSection} ${isAutoHeight ? styles.autoHeight : ''}`}>
            {child}
          </div>
        );
      })}
    </div>
  );
};

export default HomeStack;
