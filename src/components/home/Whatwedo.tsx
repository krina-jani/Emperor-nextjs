'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Container from '../ui/Container';
import Button from '../ui/Button';
import Icon from '../ui/Icon';
import FadeIn from '../animations/FadeIn';
import { services } from '../../data/services';
import { getStaggerDelay } from '../../lib/animations';
import styles from './ServicesPreview.module.css';
import { ArrowRight, ChevronRight } from 'lucide-react';

interface HoverCardProps {
  service: typeof services[0];
  index: number;
}

const HoverCard: React.FC<HoverCardProps> = ({ service, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  // Map the colorTheme string from data to the corresponding CSS module class
  const getThemeClass = (themeName?: string) => {
    const themeMap: Record<string, string> = {
      blue: styles.bgBlue,
      pink: styles.bgPink,
      yellow: styles.bgYellow,
      indigo: styles.bgIndigo,
      blueGray: styles.bgBlueGray,
      purple: styles.bgPurple,
      green: styles.bgGreen,
      teal: styles.bgTeal,
      orange: styles.bgOrange
    };
    return themeName && themeMap[themeName] ? themeMap[themeName] : '';
  };

  return (
    <FadeIn
      delay={getStaggerDelay(index, 60)}
      direction="up"
      className={styles.cardWrapper}
    >
      <div
        ref={cardRef}
        className={`${styles.card} ${getThemeClass(service.colorTheme)}`}
        onMouseMove={handleMouseMove}
      >
        {/* Floating cursor glow follower */}
        <div className={styles.cursorFollower} />

        {/* 3D Image placed in top right */}
        {service.image3d && (
          <img src={service.image3d} alt={`${service.title} 3D Asset`} className={styles.image3d} />
        )}

        {/* Pill tag at top left */}
        {service.tag && (
          <span className={styles.cardTag}>{service.tag}</span>
        )}

        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>{service.title}</h3>
        </div>

        <p className={styles.cardSummary}>{service.summary}</p>

        <div className={styles.cardFooter}>
          <Link href={`/services/${service.slug}`} className={styles.cardLink}>
            Explore Service
            <ArrowRight size={14} className={styles.arrow} />
          </Link>
        </div>
      </div>
    </FadeIn>
  );
};

export const ServicesPreview: React.FC = () => {
  return (
    <section className={styles.section} id="services-preview">
      <Container>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>WHAT WE DO</span>
          <h2 className={styles.title}>Digital Solutions Built Around Your Business</h2>
          <p className={styles.subtitle}>
            We engineer high-performance systems and custom templates tailored to elevate brand credibility and optimize product workflows.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <HoverCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <div className={styles.bottomAction}>
          <Link href="/services">
            <Button variant="outline" size="lg" rightIcon={<ChevronRight size={16} />}>
              View Custom Practices Index
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default ServicesPreview;
