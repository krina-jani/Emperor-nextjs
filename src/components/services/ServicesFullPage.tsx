'use client';

import React from 'react';
import Link from 'next/link';
import Container from '../ui/Container';
import FadeIn from '../animations/FadeIn';
import Icon from '../ui/Icon';
import { solutions } from '../../data/solutions';
import { ArrowRight, CheckCircle2, Zap } from 'lucide-react';
import styles from './ServicesFullPage.module.css';

export const ServicesFullPage: React.FC = () => {
  return (
    <section className={styles.section}>
      <Container>
        {solutions.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <FadeIn key={service.id} direction="up" delay={`${index * 50}ms`}>
              <div className={`${styles.serviceRow} ${isEven ? styles.rowNormal : styles.rowReverse}`}>
                
                {/* Visual Side */}
                <div className={styles.visualSide}>
                  <div className={styles.visualCard}>
                    <div className={styles.iconRing}>
                      <Icon name={service.iconName} size={40} />
                    </div>
                    <div className={styles.techGrid}>
                      {service.technologies.map((tech) => (
                        <span key={tech} className={styles.techBadge}>{tech}</span>
                      ))}
                    </div>
                    <div className={styles.bgOrb} />
                  </div>
                </div>

                {/* Content Side */}
                <div className={styles.contentSide}>
                  <span className={styles.indexLabel}>
                    <Zap size={12} /> {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2 className={styles.serviceTitle}>{service.name}</h2>
                  <p className={styles.serviceDesc}>{service.description}</p>

                  <div className={styles.featuresList}>
                    {service.features.map((feat) => (
                      <div key={feat} className={styles.featureItem}>
                        <CheckCircle2 size={16} className={styles.checkIcon} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <Link href={`/solutions/${service.slug}`} className={styles.ctaLink}>
                    Explore {service.name}
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {index < solutions.length - 1 && <div className={styles.divider} />}
            </FadeIn>
          );
        })}
      </Container>
    </section>
  );
};

export default ServicesFullPage;
