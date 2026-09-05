'use client';

import React, { useEffect, useRef } from 'react';
import Container from '../ui/Container';
import styles from './WhyChooseUs.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const PILLARS = [
  {
    title: 'Skilled Experts',
    desc: 'Each service gets handled by people who work in that field every day. Web development, custom software development, mobile app development, algo trading software, and MLM software development all run through specialists, not generalists learning on the job.'
  },
  {
    title: 'Complete Solutions',
    desc: 'Emperor Smart Solutions is a one-stop company for all things tech. Design, development, testing, deployment, and digital marketing services, all handled under one team for web, mobile, or enterprise projects.'
  },
  {
    title: 'Fair Pricing',
    desc: 'Pricing matches the scope and quality of the work delivered. Costs get explained clearly before any commitment gets made. No hidden charges later.'
  },
  {
    title: 'Client First',
    desc: 'Client satisfaction stays the priority on every project. Quality work gets delivered on time, with updates shared along the way, not just at the start and the end.'
  },
  {
    title: 'Built to Last',
    desc: "Every custom software platform or e-commerce website gets built with future growth in mind. Handling more users or more data later shouldn't mean starting over."
  },
  {
    title: 'Data Security',
    desc: 'Business information and source code stay protected under clear agreements. Security gets built in from day one, not added after launch.'
  }
];

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
    const viewport = viewportRef.current;
    const leftCol = leftColRef.current;
    const rightCol = rightColRef.current;
    const imageWrapper = imageWrapperRef.current;
    const bottomRow = bottomRowRef.current;

    if (!section || !viewport || !leftCol || !rightCol || !imageWrapper || !bottomRow) return;
    let ctx: gsap.Context | null = null;

    const timer = setTimeout(() => {
      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: viewport,
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

      {/* Why Choose Us Pillars Section */}
      <div className={styles.pillarsSection}>
        <div className={styles.pillarsContainer}>
          <div className={styles.pillarsHeader}>
            <span className={styles.pillarsBadge}>WHY US</span>
            <h2 className={styles.pillarsTitle}>Why Choose Emperor Smart Solutions</h2>
            <p className={styles.pillarsIntro}>
              Every project starts with understanding the business first. Then the right service gets built around it, whether that&apos;s web development, custom software development, or something else entirely. The goal isn&apos;t just working code. It&apos;s a solution that actually fixes the problem it was built for.
            </p>
          </div>

          <div className={styles.pillarsGrid}>
            {PILLARS.map((item, idx) => (
              <div key={idx} className={styles.pillarCard}>
                <div className={styles.pillarNumber}>0{idx + 1}</div>
                <h3 className={styles.pillarHeading}>{item.title}</h3>
                <p className={styles.pillarText}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
