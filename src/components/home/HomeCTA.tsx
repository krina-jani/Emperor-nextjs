'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './HomeCTA.module.css';
import Button from '../ui/Button';

gsap.registerPlugin(ScrollTrigger);

export const HomeCTA: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  
  const text = "Ready to Scale Your Enterprise? ";

  useEffect(() => {
    if (!sectionRef.current || !textRef.current) return;
    
    // Select all the character spans
    const chars = textRef.current.querySelectorAll('.char');

    const ctx = gsap.context(() => {
      // Horizontal scroll tween
      const scrollTween = gsap.to(textRef.current, {
        xPercent: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          end: '+=5000px',
          scrub: true,
        },
      });

      // Animate each character using containerAnimation
      chars.forEach((char: any) => {
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
            end: 'left 30%',
            scrub: 1,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
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
          <button className={styles.ctaBtn}>
            Start a Project &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
