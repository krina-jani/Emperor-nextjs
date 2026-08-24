'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './HorizontalScrollCTA.module.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const HorizontalScrollCTA = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  const text = "Ready to Transform Your Business?";

  // Utility to split text into chars wrapped in spans manually since we don't have SplitText
  const splitTextToChars = (str: string) => {
    return str.split('').map((char, index) => {
      if (char === ' ') return <span key={index} style={{ whiteSpace: 'pre' }}> </span>;
      return <span key={index} className="split-char" style={{ display: 'inline-block' }}>{char}</span>;
    });
  };

  useEffect(() => {
    const section = sectionRef.current;
    const textEl = textRef.current;

    if (!section || !textEl) return;

    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        const scrollWidth = textEl.scrollWidth;
        const windowWidth = window.innerWidth;
        // Let it scroll until the end of the text is near the center of the screen
        const maxScroll = scrollWidth - windowWidth * 0.3;

        const scrollTween = gsap.to(textEl, {
          x: -maxScroll,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            pin: true,
            start: 'center center',
            end: `+=${scrollWidth}px`, // Dynamic scroll length based on text size
            scrub: 1,
          },
        });

        const chars = textEl.querySelectorAll('.split-char');

        chars.forEach((char) => {
          gsap.from(char, {
            yPercent: gsap.utils.random(-200, 200),
            rotation: gsap.utils.random(-20, 20),
            opacity: 0, // Adding opacity fade-in for better polish
            ease: 'back.out(1.2)',
            duration: 1.2,
            scrollTrigger: {
              trigger: char,
              containerAnimation: scrollTween,
              start: 'left 100%',
              end: 'left 70%', // Finish animation early so the last char settles completely
              scrub: 1,
            },
          });
        });

      }, section);

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <h3 ref={textRef} className={styles.text}>
          {splitTextToChars(text)}
        </h3>
      </div>
      <div className={styles.btnWrapper}>
        <button className={styles.ctaBtn}>Start a Project &rarr;</button>
      </div>
    </section>
  );
};

export default HorizontalScrollCTA;
