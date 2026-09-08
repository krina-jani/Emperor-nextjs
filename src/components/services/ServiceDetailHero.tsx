'use client';

import React from 'react';
import Link from 'next/link';
import Container from '../ui/Container';
import Breadcrumbs from '../navigation/Breadcrumbs';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import styles from './ServiceDetailHero.module.css';

interface ServiceDetailHeroProps {
  title: string;
  eyebrow?: string;
  category?: string;
  description: string;
}

export const ServiceDetailHero: React.FC<ServiceDetailHeroProps> = ({
  title,
  eyebrow,
  category = 'ENTERPRISE SERVICE',
  description,
}) => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.ambientGlow} aria-hidden="true" />
      <Container>
        {/* Navigation Row: Breadcrumb + Back Button */}
        <div className={styles.navRow}>
          <Breadcrumbs />
          <Link href="/services" className={styles.backButton}>
            <ArrowLeft size={15} />
            <span>Back to Services</span>
          </Link>
        </div>

        {/* Content Wrapper */}
        <div className={styles.contentWrapper}>
          <div className={styles.categoryPill}>
            <span className={styles.dot} />
            <span>{category}</span>
          </div>

          {eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}

          <h1 className={styles.title}>{title}</h1>

          <p className={styles.description}>{description}</p>

          <div className={styles.buttonRow}>
            <Link href="/contact" className={styles.primaryBtn}>
              <span>Start a Project</span>
              <ArrowRight size={16} />
            </Link>

            <Link href="/services" className={styles.secondaryBtn}>
              <span>Back to Services</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServiceDetailHero;
