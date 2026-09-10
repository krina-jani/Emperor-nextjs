'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './ProjectsCTA.module.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const ProjectsCTA: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  
  const text = "Ready to Scale Your Enterprise? ";

  useEffect(() => {
    if (!sectionRef.current || !textRef.current) return;
    
    const textEl = textRef.current;
    const section = sectionRef.current;
    const chars = textEl.querySelectorAll('.char');

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Mobile / Responsive (< 768px): Giant text size, unpins cleanly when all lines/text finish
      mm.add("(max-width: 767px)", () => {
        const scrollTween = gsap.fromTo(
          textEl,
          {
            x: () => window.innerWidth * 0.95,
          },
          {
            x: () => -(textEl.scrollWidth + 20),
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              pin: true,
              start: 'top top',
              end: () => `+=${Math.max(window.innerHeight * 1.0, textEl.scrollWidth * 0.85)}px`,
              scrub: 0.5,
              invalidateOnRefresh: true,
            },
          }
        );

        chars.forEach((char) => {
          gsap.fromTo(
            char,
            {
              yPercent: gsap.utils.random(-30, 30),
              rotation: gsap.utils.random(-6, 6),
              opacity: 0.6,
            },
            {
              yPercent: 0,
              rotation: 0,
              opacity: 1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: char,
                containerAnimation: scrollTween,
                start: 'left 100%',
                end: 'left 70%',
                scrub: 0.3,
              },
            }
          );
        });
      });

      // Desktop Mode (>= 768px): Slower, smoother scroll pace
      mm.add("(min-width: 768px)", () => {
        const scrollTween = gsap.fromTo(
          textEl,
          {
            x: () => window.innerWidth * 0.9,
          },
          {
            x: () => -(textEl.scrollWidth + window.innerWidth * 0.1),
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              pin: true,
              start: 'top top',
              end: () => `+=${Math.max(window.innerHeight * 2.8, textEl.scrollWidth * 1.35)}px`,
              scrub: 1.5,
              invalidateOnRefresh: true,
            },
          }
        );

        chars.forEach((char) => {
          gsap.fromTo(
            char,
            {
              yPercent: gsap.utils.random(-50, 50),
              rotation: gsap.utils.random(-10, 10),
              opacity: 0.3,
            },
            {
              yPercent: 0,
              rotation: 0,
              opacity: 1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: char,
                containerAnimation: scrollTween,
                start: 'left 100%',
                end: 'left 60%',
                scrub: 0.5,
              },
            }
          );
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div className="projects-cta-wrapper">
      <section ref={sectionRef} className={styles.sectionAnimated}>
        <div className={styles.containerAnimated}>
          <h3 ref={textRef} className={styles.horizontalText}>
            {text.split('').map((char, index) => (
              <span key={index} className="char" style={{ display: 'inline-block' }}>
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h3>
          
          <div className={styles.btnWrapper}>
            <Link href="/contact" className={styles.ctaBtn}>
              Start a Project &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsCTA;
