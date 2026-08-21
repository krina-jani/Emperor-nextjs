import React from 'react';
import { cn } from '../../lib/utils';
import Container from '../ui/Container';
import FadeIn from '../animations/FadeIn';
import styles from './Stats.module.css';

const statsData = [
  { value: '450ms', label: 'Legacy Ingest', highlight: false },
  { value: '18ms', label: 'Emperor Optimized Ingest', highlight: true },
  { value: '96%', label: 'Average Ingest Latency Cut', highlight: true },
];

export const Stats: React.FC = () => {
  return (
    <section className={styles.section}>
      <Container>
        <FadeIn direction="up">
          <div className={styles.panel}>
            <div className={styles.grid}>
              {statsData.map((stat) => (
                <div
                  key={stat.label}
                  className={cn(
                    styles.statBox,
                    stat.highlight && styles.highlightBox
                  )}
                >
                  <span className={cn(
                    styles.value,
                    stat.highlight && styles.highlightValue
                  )}>{stat.value}</span>
                  <span className={styles.label}>{stat.label}</span>
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
