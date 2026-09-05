'use client';

import React from 'react';
import styles from './TrustBar.module.css';

const clients = [
  'Vardhman Logistics',
  'AlphaFin Capital',
  'Organica Living',
  'Apex Trade Group',
  'Surya Healthcare',
  'NexGen FinTech',
  'Bharat Retail Network',
  'Kuber Wealth',
  'Elite Matrix Systems',
  'Global Transit Solutions',
];

export const TrustBar: React.FC = () => {
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section className={styles.section} id="clients">
      <div className={styles.header}>
        <span className={styles.eyebrow}>[08] Industry Reach</span>
        <h2 className={styles.title}>Our Trusted Clients</h2>
        <p className={styles.intro}>
          Businesses across multiple industries have relied on Emperor Smart Solutions for their technology needs.
        </p>
      </div>

      <div className={styles.marquee}>
        <div className={styles.track}>
          <div className={styles.scroll}>
            {duplicatedClients.map((client, idx) => (
              <span key={idx} className={styles.clientItem}>
                <span className={styles.dot}>✦</span>
                <span className={styles.clientName}>{client}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
