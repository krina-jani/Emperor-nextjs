'use client';

import React from 'react';
import Container from '../ui/Container';
import FadeIn from '../animations/FadeIn';
import styles from './Stats.module.css';

const statsData = [
  { value: '10+', label: 'Years of Experience', desc: 'Over a decade delivering enterprise-grade engineering.' },
  { value: '250+', label: 'Projects Delivered', desc: 'Web apps, algorithmic engines, and custom platforms.' },
  { value: '180+', label: 'Happy Clients', desc: 'Long-term partnerships founded on trust and speed.' },
  { value: '25+', label: 'Industries Served', desc: 'Fintech, e-commerce, healthcare, retail, and manufacturing.' },
];

export const Stats: React.FC = () => {
  return (
    <section className={styles.section}>
      <Container>
        <FadeIn direction="up">
          <div className={styles.header}>
            <span className={styles.eyebrow}>[05] Proven Impact</span>
            <h2 className={styles.title}>A Track Record Built on Real Projects</h2>
            <p className={styles.intro}>Numbers only mean something when they&apos;re real. Here&apos;s where things stand.</p>
          </div>

          <div className={styles.panel}>
            <div className={styles.grid}>
              {statsData.map((stat, idx) => (
                <div key={idx} className={styles.statBox}>
                  <span className={styles.value}>{stat.value}</span>
                  <span className={styles.label}>{stat.label}</span>
                  <p className={styles.desc}>{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};

export default Stats;
