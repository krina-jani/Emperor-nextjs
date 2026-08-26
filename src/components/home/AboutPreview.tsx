import React from 'react';
import Link from 'next/link';
import Container from '../ui/Container';
import Button from '../ui/Button';
import FadeIn from '../animations/FadeIn';
import styles from './AboutPreview.module.css';
import { ArrowRight, CheckCircle2, ShieldCheck, Users, Activity, Lock } from 'lucide-react';

const highlights = [
  'Zero-Downtime Infrastructure Pipelines',
  'Fine-Tuned LLMs & Multi-Agent Workflows',
  'Responsive, High-Performance Frontends',
  'SOC2 & HIPAA Compliant Security Standards',
];

export const AboutPreview: React.FC = () => {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        {/* Left Column: Copy */}
        <div className={styles.copyCol}>
          <FadeIn direction="right">
            <span className={styles.sectionBadge}>WHO WE ARE</span>
            <h2 className={styles.title}>
              Engineering Supremacy in the Age of <span className="text-gradient-primary">Intelligence</span>.
            </h2>
            <p className={styles.desc}>
              Emperor Smart Solution is a premium tech consultancy. We don&apos;t just build software — we architect strategic digital systems. Our teams integrate deeply with your operations, delivering edge-computed firmware, predictive algorithms, and elite web solutions that drive business output.
            </p>
            <div className={styles.bullets}>
              {highlights.map((item) => (
                <div key={item} className={styles.bulletItem}>
                  <CheckCircle2 className={styles.bulletIcon} size={18} />
                  <span className={styles.bulletText}>{item}</span>
                </div>
              ))}
            </div>
            <Link href="/about">
              <Button variant="outline" rightIcon={<ArrowRight size={16} />}>
                Read Our Story
              </Button>
            </Link>
          </FadeIn>
        </div>

        {/* Right Column: Key Stats Display */}
        <div className={styles.statsCol}>
          <FadeIn direction="left" className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statIconWrapper}>
                <ShieldCheck className={styles.statIcon} size={28} />
              </div>
              <span className={styles.statVal}>99.99%</span>
              <span className={styles.statLabel}>Uptime SLA Guaranteed</span>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIconWrapper}>
                <Users className={styles.statIcon} size={28} />
              </div>
              <span className={styles.statVal}>15M+</span>
              <span className={styles.statLabel}>End Users Powered</span>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIconWrapper}>
                <Activity className={styles.statIcon} size={28} />
              </div>
              <span className={styles.statVal}>50M+</span>
              <span className={styles.statLabel}>Telemetry Signals Ingested</span>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIconWrapper}>
                <Lock className={styles.statIcon} size={28} />
              </div>
              <span className={styles.statVal}>SOC2</span>
              <span className={styles.statLabel}>Certified Architectures</span>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
};

export default AboutPreview;
