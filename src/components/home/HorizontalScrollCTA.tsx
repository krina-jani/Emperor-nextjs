'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './HorizontalScrollCTA.module.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface HorizontalScrollCTAProps {
  text?: string;
}

const HorizontalScrollCTA: React.FC<HorizontalScrollCTAProps> = ({
  text = "Ready to Transform Your Business?"
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

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
    let ctx: gsap.Context | null = null;

    const timer = setTimeout(() => {
      ctx = gsap.context(() => {
        const mm = gsap.matchMedia();

        // Responsive / Mobile (< 768px)
        mm.add("(max-width: 767px)", () => {
          const scrollTween = gsap.to(textEl, {
            x: () => -(textEl.scrollWidth - window.innerWidth * 0.3),
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              pin: true,
              start: 'center center',
              end: () => `+=${textEl.scrollWidth}px`,
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });

          const chars = textEl.querySelectorAll('.split-char');

          chars.forEach((char) => {
            gsap.from(char, {
              yPercent: gsap.utils.random(-200, 200),
              rotation: gsap.utils.random(-20, 20),
              opacity: 0,
              ease: 'back.out(1.2)',
              duration: 1.2,
              scrollTrigger: {
                trigger: char,
                containerAnimation: scrollTween,
                start: 'left 100%',
                end: 'left 70%',
                scrub: 1,
              },
            });
          });
        });

        // Desktop (>= 768px): Slower, smoother scroll pace
        mm.add("(min-width: 768px)", () => {
          const scrollTween = gsap.to(textEl, {
            x: () => -(textEl.scrollWidth - window.innerWidth * 0.3),
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              pin: true,
              start: 'center center',
              end: () => `+=${Math.max(window.innerHeight * 2.8, textEl.scrollWidth * 1.5)}px`,
              scrub: 1.5,
              invalidateOnRefresh: true,
            },
          });

          const chars = textEl.querySelectorAll('.split-char');

          chars.forEach((char) => {
            gsap.from(char, {
              yPercent: gsap.utils.random(-120, 120),
              rotation: gsap.utils.random(-15, 15),
              opacity: 0,
              ease: 'back.out(1.2)',
              duration: 1.2,
              scrollTrigger: {
                trigger: char,
                containerAnimation: scrollTween,
                start: 'left 100%',
                end: 'left 60%',
                scrub: 1.2,
              },
            });
          });
        });

        ScrollTrigger.refresh();
      }, section);
    }, 150);

    return () => {
      clearTimeout(timer);
      if (ctx) ctx.revert();
    };
  }, [text]);

  return (
    <div className="horizontal-scroll-cta-wrapper">
      <section ref={sectionRef} className={styles.section}>
        <div className={styles.container}>
          <h3 ref={textRef} className={styles.text}>
            {splitTextToChars(text)}
          </h3>
        </div>
        <div className={styles.btnWrapper}>
          <Link href="/contact" className={styles.ctaBtn}>
            Start a Project &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HorizontalScrollCTA;
