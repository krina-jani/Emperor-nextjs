import React from 'react';
import Container from '../ui/Container';
import Breadcrumbs from '../navigation/Breadcrumbs';
import FadeIn from '../animations/FadeIn';
import styles from './AboutHero.module.css';

export const AboutHero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <Container>
        <Breadcrumbs />
        <FadeIn direction="down" delay="100ms">
          <span className={styles.badge}>WHO WE ARE</span>
          <h1 className={styles.title}>
            Architecting Digital <span className="text-gradient-primary">Supremacy</span>
          </h1>
          <p className={styles.desc}>
            We are a squad of principal developers, database modelers, and machine learning scientists who replace agency overhead with direct value engineering.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
};

export default AboutHero;
