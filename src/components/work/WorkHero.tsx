import React from 'react';
import Container from '../ui/Container';
import Breadcrumbs from '../navigation/Breadcrumbs';
import FadeIn from '../animations/FadeIn';
import styles from './WorkHero.module.css';

export const WorkHero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <Container>
        <Breadcrumbs />
        <FadeIn direction="down" delay="100ms">
          <span className={styles.badge}>CASE STUDIES</span>
          <h1 className={styles.title}>
            Systems We <span className="text-gradient-secondary">Perfected</span>
          </h1>
          <p className={styles.desc}>
            Explore our clinical app deployments, sub-millisecond trading architectures, and dynamic route dispatches. Verified metrics highlighting our design impact.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
};

export default WorkHero;
