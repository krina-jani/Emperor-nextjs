'use client';

import React from 'react';
import Link from 'next/link';
import { Service } from '../../types/service';
import Icon from '../ui/Icon';
import { ArrowUpRight } from 'lucide-react';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const displayNumber = service.serviceNumber || (index !== undefined ? String(index + 1).padStart(2, '0') : '01');
  const ctaLabel = service.ctaText || `Explore ${service.title} →`;

  return (
    <Link
      href={`/services/${service.slug}`}
      className={styles.card}
      aria-label={`${service.title} - ${ctaLabel}`}
    >
      {/* Header with Number Badge, Icon, and Arrow */}
      <div className={styles.cardHeader}>
        <div className={styles.headerLeft}>
          <span className={styles.numberBadge}>{displayNumber}</span>
          <div className={styles.iconBox}>
            <Icon name={service.iconName || 'Code2'} size={24} />
          </div>
        </div>
        <div className={styles.arrowCircle} aria-hidden="true">
          <ArrowUpRight size={16} />
        </div>
      </div>

      {/* Content */}
      <div className={styles.cardContent}>
        <h3 className={styles.title}>{service.title}</h3>
        <p className={styles.description}>{service.summary || service.description}</p>
      </div>

      {/* Footer CTA */}
      <div className={styles.cardFooter}>
        <span className={styles.ctaButton}>
          {ctaLabel}
        </span>
      </div>
    </Link>
  );
};

export default ServiceCard;
