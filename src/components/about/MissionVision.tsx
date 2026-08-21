import React from 'react';
import Container from '../ui/Container';
import FadeIn from '../animations/FadeIn';
import styles from './MissionVision.module.css';
import { Target, Compass } from 'lucide-react';

export const MissionVision: React.FC = () => {
  return (
    <section className={styles.section}>
      <Container className={styles.grid}>
        {/* Mission Box */}
        <FadeIn direction="right" delay="100ms" className={styles.cardWrapper}>
          <div className={styles.card}>
            <div className={styles.iconBox}>
              <Target size={28} />
            </div>
            <h2 className={styles.heading}>Our Mission</h2>
            <p className={styles.text}>
              To replace legacy agency overhead with elite, specialized engineering squads that integrate deeply into client systems, delivering optimized algorithms and robust serverless configurations that scale without manual operations.
            </p>
          </div>
        </FadeIn>

        {/* Vision Box */}
        <FadeIn direction="left" delay="200ms" className={styles.cardWrapper}>
          <div className={styles.card}>
            <div className={styles.iconBox}>
              <Compass size={28} />
            </div>
            <h2 className={styles.heading}>Our Vision</h2>
            <p className={styles.text}>
              To become the global standard for high-performance software engineering, setting the benchmark for sub-millisecond latencies, compliant system privacy boundaries, and elite machine learning integrations.
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};

export default MissionVision;
