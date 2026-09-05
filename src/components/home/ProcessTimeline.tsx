'use client';

import React, { useEffect, useRef } from 'react';
import Container from '../ui/Container';
import styles from './ProcessTimeline.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2 } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    num: '01',
    title: 'Requirement Gathering',
    desc: "The conversation starts here. Goals, target audience, technical requirements, and business constraints get laid out clearly. Nothing moves forward until both sides agree on what's being built."
  },
  {
    num: '02',
    title: 'Designs, Wireframes & Mockups',
    desc: 'Ideas turn into visuals. Wireframes show the structure; mockups show the final look. Feedback happens here before any code gets written, which saves time and avoids surprises later.'
  },
  {
    num: '03',
    title: 'Development',
    desc: 'The actual build happens. Clean, maintainable code following modern standards. Front-end, back-end, database architecture, and any third-party integrations come together here.'
  },
  {
    num: '04',
    title: 'Testing',
    desc: 'Functionality, performance, security, and device compatibility get tested thoroughly. Bugs get found and fixed before any user sees the product.'
  },
  {
    num: '05',
    title: 'Changes & Confirmation',
    desc: 'You review the working product. Any adjustments or tweaks get made and confirmed before final sign-off.'
  },
  {
    num: '06',
    title: 'Deployment',
    desc: 'The solution goes live. Domain setup, hosting configuration, SSL certificates, database migration, and live environment checks ensure a smooth launch.'
  },
  {
    num: '07',
    title: 'Support & Maintenance',
    desc: "Launch isn't the finish line. Regular updates, security patches, performance monitoring, and quick bug fixes keep everything running without downtime."
  },
  {
    num: '08',
    title: 'SEO & Search Visibility',
    desc: 'Every website and web app gets built with SEO in mind from day one. Proper site structure, fast load times, mobile optimization, meta tags, and schema markup give the project the search visibility it needs to attract the right audience.',
    seoSteps: [
      'Free SEO Audit',
      'Custom SEO Strategy',
      'Execution',
      'Reporting & Growth'
    ]
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
      const mm = gsap.matchMedia();

      mm.add('(min-width: 1025px)', () => {
        const totalScroll = scrollWrapper.scrollWidth - window.innerWidth;

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

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        gsap.utils.toArray('.process-step-card').forEach((card: any) => {
          gsap.fromTo(card,
            { opacity: 0.35, scale: 0.96 },
            {
              opacity: 1,
              scale: 1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                containerAnimation: scrollTween,
                start: 'left 85%',
                end: 'left 35%',
                scrub: true,
              }
            }
          );
        });
      });

      mm.add('(max-width: 1024px)', () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
            <div className={styles.headerLeft}>
              <span className={styles.eyebrow}>[04] Structured Methodology</span>
              <h2 className={styles.title}>Process Followed on Every Project</h2>
              <p className={styles.introDesc}>
                Every project moves through the same eight stages, whether it&apos;s a website, a mobile app, or an algo trading platform. Each step builds on the one before it.
              </p>
            </div>
          </Container>

          {/* Outer track wrapper */}
          <div className={styles.track}>
            <div className={styles.progressLine}>
              <div ref={progressLineRef} className={styles.progressLineFill} />
            </div>

            <div ref={scrollRef} className={styles.scrollWrapper}>
              {steps.map((step) => (
                <div key={step.num} className={`${styles.stepCard} process-step-card ${step.seoSteps ? styles.seoCard : ''}`}>
                  <div className={styles.stepHeader}>
                    <span className={styles.stepNum}>{step.num}</span>
                    <div className={styles.stepCircle} />
                  </div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                  {step.seoSteps && (
                    <div className={styles.seoBox}>
                      <span className={styles.seoBoxTitle}>How the SEO Process Works:</span>
                      <div className={styles.seoGrid}>
                        {step.seoSteps.map((seoItem, idx) => (
                          <div key={idx} className={styles.seoItem}>
                            <CheckCircle2 size={14} className={styles.seoCheck} />
                            <span>{seoItem}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout (Vertical List Timeline) */}
        <div className={styles.mobileTimeline}>
          <Container>
            <div className={styles.headerMobile}>
              <span className={styles.eyebrow}>[04] Structured Methodology</span>
              <h2 className={styles.title}>Process Followed on Every Project</h2>
              <p className={styles.introDescMobile}>
                Every project moves through the same eight stages, whether it&apos;s a website, a mobile app, or an algo trading platform. Each step builds on the one before it.
              </p>
            </div>

            <div className={styles.verticalTimeline}>
              <div className={styles.verticalThread} />

              {steps.map((step) => (
                <div key={step.num} className={`${styles.stepCardMobile} process-step-card-mobile`}>
                  <div className={styles.numMarker}>
                    <span>{step.num}</span>
                  </div>
                  <div className={styles.mobileCardContent}>
                    <h3 className={styles.stepTitleMobile}>{step.title}</h3>
                    <p className={styles.stepDescMobile}>{step.desc}</p>
                    {step.seoSteps && (
                      <div className={styles.seoBoxMobile}>
                        <span className={styles.seoBoxTitle}>How the SEO Process Works:</span>
                        <div className={styles.seoGridMobile}>
                          {step.seoSteps.map((seoItem, idx) => (
                            <div key={idx} className={styles.seoItem}>
                              <CheckCircle2 size={13} className={styles.seoCheck} />
                              <span>{seoItem}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
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
