import React from 'react';
import Container from '../ui/Container';
import FadeIn from '../animations/FadeIn';
import styles from './CompanyStory.module.css';

const milestones = [
  {
    year: '2022',
    title: 'Founding & Telemetry Focus',
    desc: 'Emperor was launched by principal database engineers and firmware developers to solve real-time signal cleaning and high-load ingestion constraints.'
  },
  {
    year: '2024',
    title: 'AI Lab & Modeling Launch',
    desc: 'We opened our Applied AI division to train reinforcement policy systems and deploy quantized CNN models directly on client hardware.'
  },
  {
    year: '2026',
    title: 'Global Enterprise Scale',
    desc: 'Today, we partner with industry leaders in FinTech, logistics, and medicine, managing pipelines that process billions of daily signals.'
  }
];

export const CompanyStory: React.FC = () => {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        {/* Left Story Column */}
        <div className={styles.storyCol}>
          <FadeIn direction="right">
            <span className={styles.sectionBadge}>OUR JOURNEY</span>
            <h2 className={styles.title}>Bridging the Gap Between Code & Value</h2>
            <p className={styles.desc}>
              Most agencies build code without understanding system parameters. Emperor was created to reverse this standard. We compose senior-level squads that understand VPC routing constraints, model latencies, and thread management, guaranteeing your software runs with optimum efficiency.
            </p>
            <p className={styles.desc}>
              Whether accelerating trade executions or connecting telemetry channels, we deliver quality-assured architectures that translate into verifiable business metrics.
            </p>
          </FadeIn>
        </div>

        {/* Right Milestone Column */}
        <div className={styles.timelineCol}>
          <FadeIn direction="left">
            <div className={styles.timeline}>
              {milestones.map((ms, idx) => (
                <div key={idx} className={styles.timelineItem}>
                  <div className={styles.markerCol}>
                    <div className={styles.marker}>
                      <span className={styles.yearText}>{ms.year}</span>
                    </div>
                    {idx !== milestones.length - 1 && <div className={styles.markerLine} />}
                  </div>
                  <div className={styles.textCol}>
                    <h3 className={styles.msTitle}>{ms.title}</h3>
                    <p className={styles.msDesc}>{ms.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
};

export default CompanyStory;
