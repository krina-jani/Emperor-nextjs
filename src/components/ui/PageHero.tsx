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
  const formatTitle = (titleStr: string) => {
    const words = titleStr.split(' ');
    if (words.length <= 1) return titleStr;
    const lastWord = words.pop();
    const remaining = words.join(' ');
    return (
      <>
        {remaining} <span className={styles.highlight}>{lastWord}</span>
      </>
    );
  };

  return (
    <div className={`${styles.hero} ${styles[colorTheme]}`}>
      <Container>
        <span className={styles.badge}>{badge}</span>
        <h1 className={styles.title}>{formatTitle(title)}</h1>
        <p className={styles.description}>{description}</p>
      </Container>
    </div>
  );
};

export default PageHero;
