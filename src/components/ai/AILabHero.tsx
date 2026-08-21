import React from 'react';
import Container from '../ui/Container';
import Breadcrumbs from '../navigation/Breadcrumbs';
import FadeIn from '../animations/FadeIn';
import styles from './AILabHero.module.css';

export const AILabHero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <Container>
        <Breadcrumbs />
        <FadeIn direction="down" delay="100ms">
          <span className={styles.badge}>EMPEROR LABS</span>
          <h1 className={styles.title}>
            Applied Artificial <span className="text-gradient-primary">Intelligence</span>
          </h1>
          <p className={styles.desc}>
            Where mathematics meets systems scale. Explore our proprietary research pipelines, multi-agent reinforcement frameworks, and local on-device neural network models.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
};

export default AILabHero;
