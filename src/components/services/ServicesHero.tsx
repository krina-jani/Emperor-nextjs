import React from 'react';
import Container from '../ui/Container';
import Breadcrumbs from '../navigation/Breadcrumbs';
import FadeIn from '../animations/FadeIn';
import styles from './ServicesHero.module.css';

export const ServicesHero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <Container>
        <Breadcrumbs />
        <FadeIn direction="down" delay="100ms">
          <span className={styles.badge}>WHAT WE DO</span>
          <h1 className={styles.title}>
            Services Built For <span className="text-gradient-primary">Your Growth</span>
          </h1>
          <p className={styles.desc}>
            From intelligent AI automation to complete digital transformation — we deliver end-to-end technology solutions that help businesses scale, operate smarter, and lead their markets.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
};

export default ServicesHero;
