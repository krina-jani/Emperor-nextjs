'use client';

import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import FadeIn from '../animations/FadeIn';
import { useRouter } from 'next/navigation';
import styles from './ServicesCTA.module.css';

interface ServicesCTAProps {
  title?: string;
  desc?: string;
  buttonText?: string;
}

export const ServicesCTA: React.FC<ServicesCTAProps> = ({
  title = 'Ready to Architect Your Solution?',
  desc = 'Schedule an e-signed NDA technical brief with our engineering squad leader. Let us solve your latency, throughput, or model limits.',
  buttonText = 'Request Technical Brief',
}) => {
  const router = useRouter();

  const handleScroll = () => {
    const el = document.getElementById('consultation-cta');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push('/#consultation-cta');
    }
  };

  return (
    <section className={styles.section}>
      <Container>
        <FadeIn direction="up">
          <div className={styles.card}>
            <div className={styles.content}>
              <h2 className={styles.title}>{title}</h2>
              <p className={styles.desc}>{desc}</p>
            </div>
            <div className={styles.actions}>
              <Button variant="glow" size="lg" onClick={handleScroll}>
                {buttonText}
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};

export default ServicesCTA;
