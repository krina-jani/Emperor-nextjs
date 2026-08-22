import React from 'react';
import styles from './InternshipHero.module.css';

const InternshipHero = () => {
  return (
    <section className={styles.heroSection}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.badge}>Career Opportunities</div>
          <h1 className={styles.title}>
            Join Our<br />
            <span className={styles.highlight}>Internship Program</span>
          </h1>
          <p className={styles.subtitle}>
            Launch your career with hands-on experience in cutting-edge technologies. Work on real projects, learn from industry experts, and grow with us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InternshipHero;
