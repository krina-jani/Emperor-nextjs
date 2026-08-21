import React from 'react';
import Container from '../ui/Container';
import ServiceCard from './ServiceCard';
import FadeIn from '../animations/FadeIn';
import { services } from '../../data/services';
import { getStaggerDelay } from '../../lib/animations';
import styles from './ServicesGrid.module.css';

export const ServicesGrid: React.FC = () => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <FadeIn
              key={service.id}
              delay={getStaggerDelay(index, 120)}
              direction="up"
            >
              <ServiceCard service={service} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesGrid;
