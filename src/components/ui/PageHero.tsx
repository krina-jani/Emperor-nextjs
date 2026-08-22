import React from 'react';
import Container from './Container';
import styles from './PageHero.module.css';

interface PageHeroProps {
  title: string;
  description: string;
  badge: string;
  colorTheme?: 'darkBlue' | 'black';
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  description,
  badge,
  colorTheme = 'darkBlue'
}) => {
  return (
    <div className={`${styles.hero} ${styles[colorTheme]}`}>
      <Container>
        <span className={styles.badge}>{badge}</span>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </Container>
    </div>
  );
};

export default PageHero;
