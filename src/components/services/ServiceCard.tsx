import React from 'react';
import Link from 'next/link';
import { Service } from '../../types/service';
import Icon from '../ui/Icon';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import styles from './ServiceCard.module.css';
import { ArrowRight, Check } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.iconWrapper}>
          <Icon name={service.iconName} size={26} />
        </div>
        <h2 className={styles.title}>{service.title}</h2>
      </div>

      <p className={styles.summary}>{service.summary}</p>

      {/* Checklist of features */}
      <div className={styles.features}>
        <h4 className={styles.featureTitle}>Practice Focus Areas</h4>
        <ul className={styles.list}>
          {service.features.map((feat) => (
            <li key={feat} className={styles.item}>
              <div className={styles.checkWrapper}>
                <Check size={10} />
              </div>
              <span className={styles.itemText}>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tech badges */}
      <div className={styles.techRow}>
        {service.technologies.slice(0, 4).map((tech) => (
          <Badge key={tech} variant="outline" className={styles.badge}>
            {tech}
          </Badge>
        ))}
      </div>

      <div className={styles.footer}>
        <Link href={`/services/${service.slug}`}>
          <Button variant="outline" rightIcon={<ArrowRight size={14} />} className={styles.btn}>
            Launch Practice
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
