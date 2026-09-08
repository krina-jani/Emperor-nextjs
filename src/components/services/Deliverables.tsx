'use client';

import React from 'react';
import Container from '../ui/Container';
import { Check } from 'lucide-react';
import styles from './Deliverables.module.css';

interface DeliverablesProps {
  deliverables: string[];
}

export const Deliverables: React.FC<DeliverablesProps> = ({ deliverables }) => {
  if (!deliverables || deliverables.length === 0) return null;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.sectionHeader}>
          <span className={styles.badge}>OUTCOMES</span>
          <h2 className={styles.heading}>Production Deliverables & Artifacts</h2>
        </div>

        <div className={styles.grid}>
          {deliverables.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.checkIconWrapper} aria-hidden="true">
                <Check size={18} strokeWidth={2.5} />
              </div>
              <span className={styles.text}>{item}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Deliverables;
