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

const horizontalPoints = [
  {
    num: '01',
    category: 'ALIGNMENT',
    title: 'Discover',
    desc: 'Deep architectural discovery, technical requirement mapping, entity modeling, and feasibility analysis.'
  },
  {
    num: '02',
    category: 'ROADMAP',
    title: 'Strategize',
    desc: 'Defining MVP boundaries, technical milestones, system architecture, and tech stack selection.'
  },
  {
    num: '03',
    category: 'EXPERIENCE',
    title: 'Design',
    desc: 'Interactive high-fidelity Figma prototypes, design tokens, and user journey optimization.'
  },
  {
    num: '04',
    category: 'CONNECTIVITY',
    title: 'Integrate',
    desc: 'Connecting third-party APIs, payment gateways, ERP webhooks, and AI pipelines.'
  },
  {
    num: '05',
    category: 'VALIDATION',
    title: 'Test',
    desc: 'Automated regression suites, concurrency load testing, and penetration security scans.'
  },
  {
    num: '06',
    category: 'RELEASE',
    title: 'Deploy',
    desc: 'Zero-downtime blue/green deployment, Docker container orchestration, and edge caching.'
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
          <div className={styles.qualityHeader}>
            <div className={styles.qualityBadge}>QUALITY GUARDRAILS</div>
            <h2 className={styles.qualityTitle}>Non-Negotiable Quality Standards</h2>
            <p className={styles.qualitySubtitle}>The fundamental guardrails applied across all Emperor production codebases.</p>
          </div>

          <div className={styles.qualityGrid}>
            {standards.map((std, i) => (
              <div key={i} className={styles.qualityCardWhite}>
                <div className={styles.qualityCardNumWhite}>{std.num}</div>
                <h3 className={styles.qualityCardTitleWhite}>{std.title}</h3>
                <p className={styles.qualityCardDescWhite}>{std.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Horizontal Cards */}
        <div className={styles.horizontalSection}>
          <div className={styles.sixStepsTitleWrapper}>
            <h2 className={styles.sixStepsTitle}>6 Steps: Predictable, tested, and disciplined .</h2>
          </div>
          <div className={styles.horizontalList}>
            {horizontalPoints.map((pt, i) => (
              <div key={i} className={styles.wideCard}>
                <div className={styles.wideCardLeft}>
                  <div className={styles.wideCardNumber}>{pt.num}</div>
                  <div>
                    <div className={styles.wideCardCategory}>{pt.category}</div>
                    <div className={styles.wideCardTitle}>{pt.title}</div>
                  </div>
                </div>
                <div className={styles.wideCardMiddle}>
                  <p className={styles.wideCardDesc}>{pt.desc}</p>
                </div>
                <div className={styles.wideCardRight}>
                  <div className={styles.milestoneBadge}>
                    <span>Milestone Gate Approved</span>
                    <CheckCircle2 size={18} className={styles.milestoneIcon} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
    </>
  );
};

export default HowWeWork;
