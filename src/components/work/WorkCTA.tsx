'use client';

import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import FadeIn from '../animations/FadeIn';
import { useRouter } from 'next/navigation';
import styles from './WorkCTA.module.css';

export const WorkCTA: React.FC = () => {
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
              <h2 className={styles.title}>Have a Scale Hurdle in Mind?</h2>
              <p className={styles.desc}>
                Partner with our engineering squads to build a secure, compliance-ready telemetry network, custom LLM workflow, or web application dashboard.
              </p>
            </div>
            <div className={styles.actions}>
              <Button variant="glow" size="lg" onClick={handleScroll}>
                Brief Our squad
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};

export default WorkCTA;
