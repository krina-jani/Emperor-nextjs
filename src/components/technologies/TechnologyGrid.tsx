import React from 'react';
import Container from '../ui/Container';
import TechnologyCard from './TechnologyCard';
import FadeIn from '../animations/FadeIn';
import { technologies } from '../../data/technologies';
import { getStaggerDelay } from '../../lib/animations';
import styles from './TechnologyGrid.module.css';

export const TechnologyGrid: React.FC = () => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          {technologies.map((tech, index) => (
            <FadeIn
              key={tech.name}
              delay={getStaggerDelay(index, 100)}
              direction="up"
            >
              <TechnologyCard tech={tech} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TechnologyGrid;
