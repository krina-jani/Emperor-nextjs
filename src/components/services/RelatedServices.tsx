'use client';

import React from 'react';
import Container from '../ui/Container';
import ServiceCard from './ServiceCard';
import { Service } from '../../types/service';
import styles from './RelatedServices.module.css';

interface RelatedServicesProps {
  currentSlug: string;
  allServices: Service[];
}

export const RelatedServices: React.FC<RelatedServicesProps> = ({
  currentSlug,
  allServices
}) => {
  // Select 3 companion services from the primary 8 services (excluding current)
  const related = allServices
    .filter((s) => s.slug !== currentSlug)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.sectionHeader}>
          <span className={styles.badge}>EXPLORE MORE</span>
          <h2 className={styles.heading}>Related Services</h2>
        </div>

        <div className={styles.grid}>
          {related.map((service, index) => (
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

export default RelatedServices;
