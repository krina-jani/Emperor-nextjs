'use client';

import React, { useEffect, useRef } from 'react';
import Container from '../ui/Container';
import styles from './WhyChooseUs.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const WhyChooseUs: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const leftCol = leftColRef.current;
    const rightCol = rightColRef.current;
    const imageWrapper = imageWrapperRef.current;
    const bottomRow = bottomRowRef.current;

    if (!section || !leftCol || !rightCol || !imageWrapper || !bottomRow) return;
    let ctx: gsap.Context | null = null;

    const timer = setTimeout(() => {
      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: '+=150%', // Duration of the pin/zoom effect
            pin: true,
            scrub: 1, // Smooth scrub tracking the scroll wheel
            invalidateOnRefresh: true,
          }
        });

        // 1. Text elements fade out first
        tl.to([leftCol, rightCol, bottomRow], {
          opacity: 0,
          scale: 0.9,
          duration: 0.4,
          ease: 'power2.inOut',
        }, 0);

        // 2. Center image wrapper zooms to fill the entire viewport
        tl.to(imageWrapper, {
          width: '100vw',
          height: '100vh',
          borderRadius: 0,
          borderWidth: 0,
          boxShadow: 'none',
          duration: 1,
          ease: 'power2.inOut',
        }, 0.1);

      }, section);
    }, 100);

    return () => {
      clearTimeout(timer);
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div ref={viewportRef} className={styles.viewport}>
        {/* Main Text Content Wrapper */}
        <div ref={containerRef} className={styles.container}>
          {/* Left Column: SMART TECHNOLOGY */}
          <div ref={leftColRef} className={styles.leftCol}>
            <h2 className={styles.whiteText}>
              <span>SMART</span>
              <span>TECHNOLOGY</span>
            </h2>
          </div>

          {/* Right Column: DIGITAL FUTURE */}
          <div ref={rightColRef} className={styles.rightCol}>
            <h2 className={styles.whiteText}>
              <span>DIGITAL</span>
              <span>FUTURE</span>
            </h2>
          </div>
        </div>

        {/* Center Column: Workstation Image */}
        <div ref={imageWrapperRef} className={styles.imageWrapper}>
          <img
            src="/images/hero/image.png"
            alt="Developer Workstation"
            className={styles.image}
          />
        </div>

        {/* Bottom Row: ENGINEERED TO EVOLVE */}
        <div ref={bottomRowRef} className={styles.bottomRow}>
          <h2 className={styles.orangeText}>
            ENGINEERED TO EVOLVE.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
