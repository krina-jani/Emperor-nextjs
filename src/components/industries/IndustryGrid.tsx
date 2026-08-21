import React from 'react';
import Container from '../ui/Container';
import IndustryCard from './IndustryCard';
import FadeIn from '../animations/FadeIn';
import { solutions } from '../../data/solutions';
import { getStaggerDelay } from '../../lib/animations';
import styles from './IndustryGrid.module.css';

export const IndustryGrid: React.FC = () => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          {solutions.map((ind, index) => (
            <FadeIn
              key={ind.id}
              delay={getStaggerDelay(index, 100)}
              direction="up"
            >
              <IndustryCard industry={ind} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default IndustryGrid;
