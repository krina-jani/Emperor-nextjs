import React from 'react';
import Container from '../ui/Container';
import Breadcrumbs from '../navigation/Breadcrumbs';
import FadeIn from '../animations/FadeIn';
import styles from './IndustriesHero.module.css';

export const IndustriesHero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <Container>
        <Breadcrumbs />
        <FadeIn direction="down" delay="100ms">
          <span className={styles.badge}>OUR TARGET MARKETS</span>
          <h1 className={styles.title}>
            Industries We <span className="text-gradient-primary">Empower</span>
          </h1>
          <p className={styles.desc}>
            We engineer high-performance systems tailored to strict compliance frameworks and high-load transactions. Select a vertical below to view compliance logs and solutions.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
};

export default IndustriesHero;
