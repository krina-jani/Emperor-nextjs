import React from 'react';
import styles from './TrustBar.module.css';

const technologies = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'React',
  'Vue.js',
  'Angular',
  'Node.js',
  'PHP',
  'Laravel',
  'WordPress',
  'MySQL',
  'MongoDB',
  'AWS',
  'Docker',
  'Git',
  'Figma',
  'Adobe XD',
  'Photoshop'
];

export const TrustBar: React.FC = () => {
  // Duplicate list to ensure infinite smooth marquee looping
  const duplicatedTech = [...technologies, ...technologies, ...technologies];

  return (
    <section className={styles.section}>
      <div className={styles.labelWrapper}>
        <p className={styles.label}>CORE SYSTEM TOOLKITS & TECHNOLOGIES</p>
      </div>

      <div className={styles.marquee}>
        <div className={styles.track}>
          <div className={styles.scroll}>
            {duplicatedTech.map((tech, idx) => (
              <span key={idx} className={styles.techItem}>
                <span className={styles.dot}>•</span>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
