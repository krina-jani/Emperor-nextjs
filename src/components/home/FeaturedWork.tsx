'use client';

import React from 'react';
import Link from 'next/link';
import Container from '../ui/Container';
import FadeIn from '../animations/FadeIn';
import { ArrowRight, TrendingUp, Zap, Users, CheckCircle2 } from 'lucide-react';
import styles from './FeaturedWork.module.css';

const caseStudies = [
  {
    id: 'algo-trading-engine',
    type: 'Algo Trading Software',
    title: 'High-Frequency Broker Execution Engine',
    problem: 'Client experienced severe execution lag and slippage during peak market volatility using off-the-shelf trading tools.',
    solution: 'Built a custom algorithmic trading engine directly connected to broker REST and WebSocket APIs with automated risk parameters and failsafes.',
    metric: '96% Latency Reduction',
    metricDesc: 'Execution dropped from 450ms down to 18ms with 0 manual intervention.',
    icon: <Zap size={22} className={styles.metricIcon} />,
    technologies: ['Python', 'FastAPI', 'WebSockets', 'Redis', 'Docker'],
    accentColor: '#ff5722',
  },
  {
    id: 'headless-ecommerce-erp',
    type: 'Web & E-commerce',
    title: 'Omnichannel E-commerce & Inventory System',
    problem: 'Slow page loads, checkout drop-offs, and disjointed inventory tracking across retail stores and digital channels.',
    solution: 'Engineered a lightning-fast headless e-commerce store with unified inventory management, instant payment gateways, and SEO architecture.',
    metric: '+40% Traffic & 3.4x Checkout',
    metricDesc: 'Search rankings climbed immediately, resulting in 40% more organic buyers.',
    icon: <TrendingUp size={22} className={styles.metricIcon} />,
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
    accentColor: '#3b82f6',
  },
  {
    id: 'enterprise-mlm-platform',
    type: 'MLM & Software',
    title: 'Real-Time MLM Genealogy & Commission Engine',
    problem: 'Legacy system crashed under high distributor volume, leading to payout calculation errors and distributor frustration.',
    solution: 'Architected a resilient multi-tier MLM management portal supporting binary and matrix plans, instant wallet payouts, and visual tree tracking.',
    metric: '5,000+ Active Distributors',
    metricDesc: 'Handled 5,000+ concurrent network nodes with 100% calculation accuracy.',
    icon: <Users size={22} className={styles.metricIcon} />,
    technologies: ['React', 'Node.js', 'MongoDB', 'Redis', 'GCP'],
    accentColor: '#10b981',
  },
];

export const FeaturedWork: React.FC = () => {
  return (
    <section className={styles.section} id="our-projects">
      <Container>
        {/* Section Header */}
        <FadeIn direction="up">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>[06] Case Studies</span>
            <h2 className={styles.title}>A Glimpse of the Work Done So Far</h2>
            <p className={styles.introDesc}>
              Real projects, real challenges, across web development, software, and other services.
            </p>
          </div>
        </FadeIn>

        {/* Case Studies Grid */}
        <div className={styles.projectGrid}>
          {caseStudies.map((study, index) => (
            <FadeIn key={study.id} direction="up" delay={`${index * 100}ms`}>
              <div className={styles.caseCard}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardType}>{study.type}</span>
                  <div className={styles.metricPill}>
                    {study.icon}
                    <span className={styles.metricHighlight}>{study.metric}</span>
                  </div>
                </div>

                <h3 className={styles.caseTitle}>{study.title}</h3>

                <div className={styles.caseDetails}>
                  <div className={styles.detailBlock}>
                    <span className={styles.detailLabel}>The Problem:</span>
                    <p className={styles.detailText}>{study.problem}</p>
                  </div>

                  <div className={styles.detailBlock}>
                    <span className={styles.detailLabel}>What Was Built:</span>
                    <p className={styles.detailText}>{study.solution}</p>
                  </div>

                  <div className={styles.resultBlock}>
                    <div className={styles.resultHeader}>
                      <CheckCircle2 size={16} className={styles.checkIcon} />
                      <span className={styles.resultLabel}>The Result:</span>
                    </div>
                    <p className={styles.resultText}>{study.metricDesc}</p>
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  <div className={styles.techRow}>
                    {study.technologies.map((tech) => (
                      <span key={tech} className={styles.techBadge}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* View All Case Studies CTA */}
        <FadeIn direction="up" delay="200ms">
          <div className={styles.bottomCtaRow}>
            <Link href="/projects" className={styles.viewAllBtn}>
              <span>View All Case Studies</span>
              <ArrowRight size={18} className={styles.arrowIcon} />
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};

export default FeaturedWork;
