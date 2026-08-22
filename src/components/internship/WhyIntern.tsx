import React from 'react';
import { Target, Users, TrendingUp } from 'lucide-react';
import styles from './WhyIntern.module.css';

const WhyIntern = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Why Intern With Us?</h2>
        </div>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Target size={24} />
            </div>
            <h3 className={styles.cardTitle}>Real Project Experience</h3>
            <p className={styles.cardText}>Work on live projects that impact real clients and businesses. No coffee runs, just real code.</p>
          </div>
          
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Users size={24} />
            </div>
            <h3 className={styles.cardTitle}>Mentorship</h3>
            <p className={styles.cardText}>Learn directly from senior developers and industry experts through 1-on-1 guidance and code reviews.</p>
          </div>
          
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <TrendingUp size={24} />
            </div>
            <h3 className={styles.cardTitle}>Career Growth</h3>
            <p className={styles.cardText}>Potential for full-time employment based on performance. We prefer to hire from our intern pool.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyIntern;
