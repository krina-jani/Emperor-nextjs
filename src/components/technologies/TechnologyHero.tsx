import React from 'react';
import Container from '../ui/Container';
import Breadcrumbs from '../navigation/Breadcrumbs';
import FadeIn from '../animations/FadeIn';
import styles from './TechnologyHero.module.css';

export const TechnologyHero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <Container>
        <Breadcrumbs />
        <FadeIn direction="down" delay="100ms">
          <span className={styles.badge}>OUR TECH INDEX</span>
          <h1 className={styles.title}>
            The Emperor <span className="text-gradient-primary">Stack</span>
          </h1>
          <p className={styles.desc}>
            Analyze the frameworks, compilers, databases, and microcontrollers we deploy. Engineered for modular code, secure sandboxes, and minimal operational overhead.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
};

export default TechnologyHero;
