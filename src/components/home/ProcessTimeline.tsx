'use client';

import React, { useEffect, useRef } from 'react';
import Container from '../ui/Container';
import styles from './ProcessTimeline.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: '01',
    title: 'Consultation & Planning',
    desc: 'Understanding your goals and website requirements.'
  },
  {
    num: '02',
    title: 'Website Design',
    desc: 'Creating wireframes and visual designs.'
  },
  {
    num: '03',
    title: 'Website Development',
    desc: 'Building responsive and optimized code using modern frameworks.'
  },
  {
    num: '04',
    title: 'Testing & QA',
    desc: 'Cross-browser, device and performance testing.'
  },
  {
    num: '05',
    title: 'Launch & Support',
    desc: 'Deployment and post-launch support.'
  }
];

export const ProcessTimeline: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const scrollWrapper = scrollRef.current;
    const progressFill = progressLineRef.current;

    if (!section || !scrollWrapper || !progressFill) return;

    const ctx = gsap.context(() => {
      // Apply horizontal scroll only on desktop (screen width > 1024px)
      const mm = gsap.matchMedia();

      mm.add('(min-width: 1025px)', () => {
        const totalScroll = scrollWrapper.scrollWidth - window.innerWidth;

        // Pin section and translate container horizontally
        const scrollTween = gsap.to(scrollWrapper, {
          x: -totalScroll,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            pin: true,
            scrub: 0.5,
            start: 'top top',
            end: () => `+=${totalScroll}`,
            invalidateOnRefresh: true,
          }
        });

        // Animate the progress bar fill horizontally
        gsap.to(progressFill, {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            scrub: 0.5,
            start: 'top top',
            end: () => `+=${totalScroll}`,
            invalidateOnRefresh: true,
          }
        });

        // Sequential fade and scale of steps
        gsap.utils.toArray('.process-step-card').forEach((card: any) => {
          gsap.fromTo(card,
            { opacity: 0.4, scale: 0.95 },
            {
              opacity: 1,
              scale: 1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                containerAnimation: scrollTween,
                start: 'left 80%',
                end: 'left 35%',
                scrub: true,
              }
            }
          );
        });
      });

      // Simple vertical scroll reveal animations on mobile (screen width <= 1024px)
      mm.add('(max-width: 1024px)', () => {
        gsap.utils.toArray('.process-step-card-mobile').forEach((card: any) => {
          gsap.from(card, {
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="process-timeline-wrapper">
      <section ref={sectionRef} className={styles.section} id="development-process">
        {/* Desktop Layout (Horizontal Pinned Scroll) */}
      <div className={styles.desktopTimeline}>
        <Container className={styles.headerContainer}>
          <span className={styles.eyebrow}>WORKFLOW</span>
          <h2 className={styles.title}>From Idea to Launch</h2>
        </Container>

        {/* Outer track wrapper */}
        <div className={styles.track}>
          {/* Progress Indicator line */}
          <div className={styles.progressLine}>
            <div ref={progressLineRef} className={styles.progressLineFill} />
          </div>

          <div ref={scrollRef} className={styles.scrollWrapper}>
            {steps.map((step) => (
              <div key={step.num} className={`${styles.stepCard} process-step-card`}>
                <div className={styles.stepHeader}>
                  <span className={styles.stepNum}>{step.num}</span>
                  <div className={styles.stepCircle} />
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Layout (Vertical List Timeline) */}
      <div className={styles.mobileTimeline}>
        <Container>
          <div className={styles.headerMobile}>
            <span className={styles.eyebrow}>WORKFLOW</span>
            <h2 className={styles.title}>From Idea to Launch</h2>
          </div>

          <div className={styles.verticalTimeline}>
            {/* Visual connecting thread */}
            <div className={styles.verticalThread} />

            {steps.map((step) => (
              <div key={step.num} className={`${styles.stepCardMobile} process-step-card-mobile`}>
                <div className={styles.numMarker}>
                  <span>{step.num}</span>
                </div>
                <div className={styles.mobileCardContent}>
                  <h3 className={styles.stepTitleMobile}>{step.title}</h3>
                  <p className={styles.stepDescMobile}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
      </section>
    </div>
  );
};

export default ProcessTimeline;
