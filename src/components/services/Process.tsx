import React from 'react';
import { ProcessStep } from '../../types/service';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import FadeIn from '../animations/FadeIn';
import { getStaggerDelay } from '../../lib/animations';
import styles from './Process.module.css';

interface ProcessProps {
  steps: ProcessStep[];
  title?: string;
  subtitle?: string;
}

export const Process: React.FC<ProcessProps> = ({
  steps,
  title = 'Our Delivery Methodology',
  subtitle = 'We follow a systematic, quality-focused engineering workflow to minimize operational risk and guarantee SLAs.',
}) => {
  return (
    <section className={styles.section}>
      <Container>
        <SectionTitle
          badge="How We Work"
          title={title}
          subtitle={subtitle}
        />

        <div className={styles.timeline}>
          {/* Connection Line */}
          <div className={styles.line} />

          <div className={styles.stepsGrid}>
            {steps.map((step, index) => (
              <FadeIn
                key={step.stepNumber}
                delay={getStaggerDelay(index, 120)}
                direction="up"
                className={styles.stepWrapper}
              >
                <div className={styles.stepCard}>
                  {/* Step Bubble Indicator */}
                  <div className={styles.bubbleCol}>
                    <div className={styles.bubble}>
                      <span className={styles.number}>0{step.stepNumber}</span>
                    </div>
                  </div>

                  {/* Step Text Info */}
                  <div className={styles.textCol}>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDesc}>{step.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Process;
