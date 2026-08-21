'use client';

import React, { useEffect, useRef } from 'react';
import { CheckCircle2, ShieldCheck, Zap, Database, Key } from 'lucide-react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './HowWeWork.module.css';

gsap.registerPlugin(ScrollTrigger);

const stages = [
  {
    num: '01',
    category: 'Discovery & Strategy',
    title: 'Understand',
    desc: 'We dive deep into your requirements, goals, audience, and business needs to create a clear strategy and roadmap.',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400&auto=format&fit=crop'
  },
  {
    num: '02',
    category: 'UI/UX Design',
    title: 'Design',
    desc: 'We create intuitive user experiences and high-fidelity interfaces that combine modern aesthetics with effortless usability.',
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=400&auto=format&fit=crop'
  },
  {
    num: '03',
    category: 'Development',
    title: 'Build',
    desc: 'Our engineers transform designs into scalable, secure, and high-performance digital products using modern technologies.',
    img: 'https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=400&auto=format&fit=crop'
  },
  {
    num: '04',
    category: 'Testing & Launch',
    title: 'Deliver',
    desc: 'We rigorously test every feature, fix potential issues, and ensure your product is stable, secure, and ready for production.',
    img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=400&auto=format&fit=crop'
  },
  {
    num: '05',
    category: 'Support & Scale',
    title: 'Grow',
    desc: 'We provide continuous maintenance, performance optimization, and proactive monitoring to scale your product seamlessly.',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=400&auto=format&fit=crop'
  }
];

const standards = [
  {
    num: '01. STRICT TYPE SAFETY',
    title: '100% TypeScript',
    desc: "Zero 'any' types in core business logic. Strict schema validation on all API payloads via Zod or Pydantic.",
    icon: <ShieldCheck size={24} />
  },
  {
    num: '02. AUTOMATED CI/CD',
    title: 'Zero-Downtime Releases',
    desc: 'Every pull request triggers automated linting, unit tests, and ephemeral staging previews before merging.',
    icon: <Zap size={24} />
  },
  {
    num: '03. DETERMINISTIC AI',
    title: 'Grounded RAG Guardrails',
    desc: 'Strict vector cosine similarity thresholds and JSON schema enforcement preventing hallucinated outputs.',
    icon: <Database size={24} />
  },
  {
    num: '04. 100% IP OWNERSHIP',
    title: 'Direct Git Repository',
    desc: 'You own 100% of all intellectual property, source code repositories, and container configurations from day one.',
    icon: <Key size={24} />
  }
];

export const HowWeWork = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!timelineRef.current) return;
    
    const stageElements = gsap.utils.toArray('.stage-anim');
    
    stageElements.forEach((stage: any) => {
      gsap.fromTo(stage, 
        { opacity: 0, y: 50 },
        {
          opacity: 1, 
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: stage,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <>
      {/* Light Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroBadge}>Live • Free • Online</div>
          <h1 className={styles.heroTitle}>
            The 10-Stage <span className={styles.heroTitleHighlight}>Delivery Machine.</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Predictable, tested, and disciplined. We eliminate chaos from software development.<br/>
            Every project follows our structured 10-stage execution pipeline with clear milestone gates, test coverage, and transparent Git access.
          </p>
        </div>
      </section>

      {/* Dark Timeline Section */}
      <section className={styles.section} id="delivery-machine">
        <div className={styles.container}>
          
          {/* 10 Stages Timeline */}
          <div className={styles.timelineWrapper}>
            <div className={styles.timelineLeft}>
              <h2 className={styles.timelineTitle}>ABOUT THE PROCESS</h2>
              <p className={styles.timelineIntro}>
                Our process is designed to eliminate chaos from software development. We follow a strict, disciplined pipeline with clear milestone gates, test coverage, and transparent Git access. 
              </p>
            </div>
            
            <div className={styles.timelineRight}>
              <div className={styles.timeline} ref={timelineRef}>
                {stages.slice(0, 5).map((stage) => (
                  <div key={stage.num} className={`${styles.stage} stage-anim`}>
                    <div className={styles.stageContent}>
                      <div className={styles.stageHeader}>
                        <span className={styles.stageNumber}>{stage.num}</span>
                        <span className={styles.stageCategory}>{stage.category}</span>
                      </div>
                      <div className={styles.stageTitle}>{stage.title}</div>
                      <div className={styles.stageDesc}>
                        {stage.desc}
                      </div>
                      
                      {/* Floating Image */}
                      <img src={stage.img} alt={stage.title} className={styles.stageImage} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        {/* Quality Standards */}
        <div className={styles.qualitySection}>
          <div className={styles.timelineSectionTitle}>
            WHAT'S INCLUDED
          </div>

          <div className={styles.qualityGrid}>
            {standards.map((std, i) => (
              <div key={i} className={styles.qualityCard}>
                <div className={styles.qualityIconWrap}>
                  <div className={styles.qualityIcon}>{std.icon}</div>
                  <h3 className={styles.qualityCardTitle}>{std.title}</h3>
                </div>
                <div className={styles.qualityCardNum}>{std.num}</div>
                <p className={styles.qualityCardDesc}>{std.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Glass Form */}
        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Want to join us,<br/>but still have questions?</h2>
          <p className={styles.ctaDesc}>
            Leave a request for a deep architectural discovery session.
          </p>
          
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.formGroup}>
              <input type="text" placeholder="Your name" className={styles.formInput} />
            </div>
            <div className={styles.formGroup}>
              <input type="tel" placeholder="Phone number" className={styles.formInput} />
            </div>
            <div className={styles.formGroup}>
              <input type="text" placeholder="Comment" className={styles.formInput} />
            </div>
            <button type="submit" className={styles.submitBtn}>
              Send Request
            </button>
          </form>
        </div>

      </div>
    </section>
    </>
  );
};

export default HowWeWork;
