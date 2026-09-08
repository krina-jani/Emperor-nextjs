'use client';

import React from 'react';
import Link from 'next/link';
import Container from '../ui/Container';
import { ArrowRight } from 'lucide-react';
import styles from './ServiceDetailCTA.module.css';

interface ServiceDetailCTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export const ServiceDetailCTA: React.FC<ServiceDetailCTAProps> = ({
  title = 'Ready to Start Your Project?',
  subtitle = 'Schedule a confidential technical discovery session with our senior solutions architects.',
  buttonText = 'Book a Free Consultation →'
}) => {
  return (
    <section className={styles.section}>
      <div className={styles.ambientGlow} aria-hidden="true" />
      <Container>
        <div className={styles.box}>
          <span className={styles.badge}>NEXT STEPS</span>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
          <Link href="/contact" className={styles.ctaBtn}>
            <span>{buttonText}</span>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default ServiceDetailCTA;
