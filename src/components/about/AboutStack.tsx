'use client';

import React from 'react';
import styles from './AboutStack.module.css';

interface AboutStackProps {
  children: React.ReactNode;
}

export const AboutStack: React.FC<AboutStackProps> = ({ children }) => {
  return (
    <div className={styles.stackContainer}>
      {children}
    </div>
  );
};

export default AboutStack;
