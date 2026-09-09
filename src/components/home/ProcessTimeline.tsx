'use client';

import React, { useEffect, useRef, useState } from 'react';
import Container from '../ui/Container';
import styles from './ProcessTimeline.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ProcessStep {
  num: string;
  title: string;
  desc: string;
  bgImage: string;
  highlightsTitle: string;
  highlights: string[];
}

const steps: ProcessStep[] = [
  {
    num: '01',
    title: 'Requirement Gathering',
    desc: "The conversation starts here. Goals, target audience, technical requirements, and business constraints get laid out clearly. Nothing moves forward until both sides agree on what's being built.",
    bgImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
    highlightsTitle: 'Key Focus Areas:',
    highlights: [
      'Goal Alignment',
      'User Personas',
      'Tech Feasibility',
      'Scope & Roadmap'
    ]
  },
  {
    num: '02',
    title: 'Designs, Wireframes & Mockups',
    desc: 'Ideas turn into visuals. Wireframes show the structure; mockups show the final look. Feedback happens here before any code gets written, which saves time and avoids surprises later.',
    bgImage: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=800&auto=format&fit=crop',
    highlightsTitle: 'Design Deliverables:',
    highlights: [
      'UX Wireframes',
      'UI Mockups',
      'Interactive Prototypes',
      'Design System'
    ]
  },
  {
    num: '03',
    title: 'Development',
    desc: 'The actual build happens. Clean, maintainable code following modern standards. Front-end, back-end, database architecture, and any third-party integrations come together here.',
    bgImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
    highlightsTitle: 'Engineering Standards:',
    highlights: [
      'Clean Code & APIs',
      'Responsive UI',
      'Secure Architecture',
      'CI/CD Pipelines'
    ]
  },
  {
    num: '04',
    title: 'Testing',
    desc: 'Functionality, performance, security, and device compatibility get tested thoroughly. Bugs get found and fixed before any user sees the product.',
    bgImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
    highlightsTitle: 'QA Verification:',
    highlights: [
      'Automated Tests',
      'Speed Benchmarking',
      'Cross-Device QA',
      'Security Auditing'
    ]
  },
  {
    num: '05',
    title: 'Changes & Confirmation',
    desc: 'You review the working product. Any adjustments or tweaks get made and confirmed before final sign-off.',
    bgImage: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop',
    highlightsTitle: 'Client Review:',
    highlights: [
      'Live Staging Demo',
      'Feedback Sprints',
      'UAT Sign-off',
      'Milestone Approval'
    ]
  },
  {
    num: '06',
    title: 'Deployment',
    desc: 'The solution goes live. Domain setup, hosting configuration, SSL certificates, database migration, and live environment checks ensure a smooth launch.',
    bgImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
    highlightsTitle: 'Launch Checklist:',
    highlights: [
      'Cloud Provisioning',
      'Zero-Downtime Launch',
      'SSL & DNS Setup',
      'Production Smoke Tests'
    ]
  },
  {
    num: '07',
    title: 'Support & Maintenance',
    desc: "Launch isn't the finish line. Regular updates, security patches, performance monitoring, and quick bug fixes keep everything running without downtime.",
    bgImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop',
    highlightsTitle: 'Ongoing Support:',
    highlights: [
      '24/7 Monitoring',
      'Security Patches',
      'Automated Backups',
      'Fast SLA Response'
    ]
  },
  {
    num: '08',
    title: 'SEO & Search Visibility',
    desc: 'Every website and web app gets built with SEO in mind from day one. Proper site structure, fast load times, mobile optimization, meta tags, and schema markup give the project the search visibility it needs to attract the right audience.',
    bgImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    highlightsTitle: 'How SEO Works:',
    highlights: [
      'Free SEO Audit',
      'Custom Strategy',
      'Technical Execution',
      'Growth Reporting'
    ]
  }
];

export const ProcessTimeline: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  // Navigate to step index (0 to 7)
  const scrollToStep = (index: number) => {
    const st = ScrollTrigger.getById('process-timeline-trigger');

    if (st) {
      const progress = index / (steps.length - 1);
      const targetScroll = st.start + progress * (st.end - st.start);
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
    setActiveStep(index);
  };

  useEffect(() => {
    const section = sectionRef.current;
    const scrollWrapper = scrollRef.current;
    const progressFill = progressLineRef.current;

    if (!section || !scrollWrapper || !progressFill) return;

    let ctx: gsap.Context | null = null;

    const initGSAP = () => {
      ctx = gsap.context(() => {
        const mm = gsap.matchMedia();

        // Desktop Layout (>= 1025px) - Pinned horizontal scroll (unchanged)
        mm.add('(min-width: 1025px)', () => {
          const getScrollAmount = () => {
            return Math.max(0, scrollWrapper.scrollWidth - window.innerWidth);
          };

          const scrollTween = gsap.to(scrollWrapper, {
            x: () => -getScrollAmount(),
            ease: 'none',
            scrollTrigger: {
              id: 'process-timeline-trigger',
              trigger: section,
              pin: true,
              scrub: 0.5,
              start: 'top top',
              end: () => `+=${getScrollAmount()}`,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                const idx = Math.min(
                  steps.length - 1,
                  Math.round(self.progress * (steps.length - 1))
                );
                setActiveStep(idx);
              }
            }
          });

          gsap.to(progressFill, {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              scrub: 0.5,
              start: 'top top',
              end: () => `+=${getScrollAmount()}`,
              invalidateOnRefresh: true,
            }
          });

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          gsap.utils.toArray('.process-step-card').forEach((card: any) => {
            gsap.fromTo(
              card,
              { opacity: 0.75, scale: 0.98 },
              {
                opacity: 1,
                scale: 1,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: card,
                  containerAnimation: scrollTween,
                  start: 'left 90%',
                  end: 'left 30%',
                  scrub: true,
                }
              }
            );
          });
        });

        // Responsive Mode (<= 1024px) - Horizontal cards scrolling with page scrolling
        mm.add('(max-width: 1024px)', () => {
          const getScrollAmount = () => {
            return Math.max(0, scrollWrapper.scrollWidth - window.innerWidth);
          };

          const scrollTween = gsap.to(scrollWrapper, {
            x: () => -getScrollAmount(),
            ease: 'none',
            scrollTrigger: {
              id: 'process-timeline-trigger',
              trigger: section,
              pin: true,
              anticipatePin: 1,
              scrub: 0.5,
              start: 'top top',
              end: () => `+=${getScrollAmount() * 1.15}`,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                const idx = Math.min(
                  steps.length - 1,
                  Math.round(self.progress * (steps.length - 1))
                );
                setActiveStep(idx);
              }
            }
          });

          gsap.to(progressFill, {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              scrub: 0.5,
              start: 'top top',
              end: () => `+=${getScrollAmount() * 1.15}`,
              invalidateOnRefresh: true,
            }
          });
        });
      }, sectionRef);

      ScrollTrigger.refresh();
    };

    const timer = setTimeout(initGSAP, 150);

    return () => {
      clearTimeout(timer);
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <div className="process-timeline-wrapper">
      <section ref={sectionRef} className={styles.section} id="development-process">
        {/* Desktop Layout (Horizontal Pinned Scroll) */}
        <div className={styles.desktopTimeline}>
          <Container className={styles.headerContainer}>
            <div className={styles.headerFlex}>
              <div className={styles.headerLeft}>
                <span className={styles.eyebrow}>Structured Methodology</span>
                <h2 className={styles.title}>Process Followed on Every Project</h2>
                <p className={styles.introDesc}>
                  Every project moves through the same eight stages, whether it&apos;s a website, a mobile app, or an algo trading platform. Each step builds on the one before it.
                </p>
              </div>

              {/* Navigation Controls: Arrows + Step Badges */}
              <div className={styles.navControls}>
                <div className={styles.stepBadges}>
                  {steps.map((step, idx) => (
                    <button
                      key={step.num}
                      type="button"
                      className={`${styles.stepBadgeBtn} ${activeStep === idx ? styles.activeBadge : ''}`}
                      onClick={() => scrollToStep(idx)}
                      aria-label={`Jump to step ${step.num}`}
                    >
                      {step.num}
                    </button>
                  ))}
                </div>
                <div className={styles.arrowBtns}>
                  <button
                    type="button"
                    className={styles.arrowBtn}
                    onClick={() => scrollToStep(Math.max(0, activeStep - 1))}
                    disabled={activeStep === 0}
                    aria-label="Previous Step"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    className={styles.arrowBtn}
                    onClick={() => scrollToStep(Math.min(steps.length - 1, activeStep + 1))}
                    disabled={activeStep === steps.length - 1}
                    aria-label="Next Step"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </Container>

          {/* Outer track wrapper */}
          <div className={styles.track}>
            <div className={styles.progressLine}>
              <div ref={progressLineRef} className={styles.progressLineFill} />
            </div>

            <div ref={scrollRef} className={styles.scrollWrapper}>
              {steps.map((step, idx) => (
                <div key={step.num} className={`${styles.stepCard} process-step-card`}>
                  {/* Background Image & Soft Tint Overlay */}
                  <div className={styles.cardBgWrapper} aria-hidden="true">
                    <img
                      src={step.bgImage}
                      alt=""
                      className={styles.cardBgImage}
                      loading="lazy"
                    />
                    <div className={styles.cardOverlay} />
                  </div>

                  {/* Foreground Content */}
                  <div className={styles.cardContent}>
                    <div>
                      <div className={styles.stepHeader}>
                        <span className={styles.stepNum}>{step.num}</span>
                        {idx < steps.length - 1 && <div className={styles.stepCircle} />}
                      </div>
                      <h3 className={styles.stepTitle}>{step.title}</h3>
                      <p className={styles.stepDesc}>{step.desc}</p>
                    </div>

                    <div className={styles.highlightsBox}>
                      <span className={styles.highlightsTitle}>{step.highlightsTitle}</span>
                      <div className={styles.highlightsGrid}>
                        {step.highlights.map((item, idx) => (
                          <div key={idx} className={styles.highlightItem}>
                            <CheckCircle2 size={13} className={styles.highlightCheck} />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessTimeline;

