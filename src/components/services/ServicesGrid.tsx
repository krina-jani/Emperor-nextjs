'use client';

import React from 'react';
import Container from '../ui/Container';
import ServiceCard from './ServiceCard';
import { services } from '../../data/services';
import styles from './ServicesGrid.module.css';

export const ServicesGrid: React.FC = () => {
  // Present all 13 services requested by the user
  const coreServices = services.slice(0, 13);

  return (
    <section className={styles.section} id="our-services">
      <div className={styles.ambientGlow} aria-hidden="true" />
      <Container>
        <div className={styles.grid}>
          {coreServices.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesGrid;
