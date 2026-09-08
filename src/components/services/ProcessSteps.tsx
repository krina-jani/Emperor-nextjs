'use client';

import React from 'react';
import Container from '../ui/Container';
import { ProcessStep } from '../../types/service';
import styles from './ProcessSteps.module.css';

interface ProcessStepsProps {
  steps?: ProcessStep[];
}

export const ProcessSteps: React.FC<ProcessStepsProps> = ({ steps }) => {
  if (!steps || steps.length === 0) return null;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.sectionHeader}>
          <span className={styles.badge}>METHODOLOGY</span>
          <h2 className={styles.heading}>Our Delivery Process</h2>
        </div>

        <div className={styles.grid}>
          {steps.map((step) => {
            const formattedNumber = String(step.stepNumber).padStart(2, '0');
            return (
              <div key={step.stepNumber} className={styles.card}>
                <span className={styles.stepNumber}>{formattedNumber}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ProcessSteps;
