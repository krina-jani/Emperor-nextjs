'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '../../lib/utils';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={cn('container', styles.container)}>
        <div className={styles.topSection}>
          {/* Left Side */}
          <div className={styles.leftCol}>
            <h2 className={styles.tagline}>Design it once. Design it right</h2>
            <Link href="/contact" className={styles.letsTalkBtn}>
              Lets Talk &rarr;
            </Link>
            
            <div className={styles.contactInfo}>
              <span className={styles.contactLabel}>New Business</span>
              <a href="mailto:hello@emperor.com" className={styles.contactEmail}>hello@emperor.com</a>
            </div>
          </div>

          {/* Right Side */}
          <div className={styles.rightCol}>
            <div className={styles.navLinks}>
              <Link href="/projects" className={styles.navLink}>WORK</Link>
              <Link href="/about" className={styles.navLink}>ABOUT</Link>
              <Link href="/services" className={styles.navLink}>SERVICES</Link>
              <Link href="/careers" className={styles.navLink}>CAREERS</Link>
              <Link href="/contact" className={styles.navLink}>CONTACT</Link>
              <Link href="/news" className={styles.navLink}>DESIGN NEWS</Link>
            </div>
            
            <div className={styles.socialLinks}>
              <a href="https://instagram.com" className={styles.navLink}>INSTAGRAM &#x2197;</a>
              <a href="https://linkedin.com" className={styles.navLink}>LINKEDIN &#x2197;</a>
              <a href="https://twitter.com" className={styles.navLink}>X (TWITTER) &#x2197;</a>
              <a href="mailto:hello@emperor.com" className={styles.navLink}>EMAIL &#x2197;</a>
            </div>
          </div>
        </div>

        <div className={styles.midSection}>
          <div className={styles.location}>
            Mumbai<br/>
            India, Asia
          </div>
          <div className={styles.legal}>
            <Link href="/terms" className={styles.legalLink}>Terms & Conditions</Link><br/>
            <Link href="/privacy" className={styles.legalLink}>Privacy Policy</Link>
          </div>
        </div>
      </div>
      
      {/* Huge Bottom Text */}
      <div className={styles.giantTextContainer}>
        <h1 className={styles.giantText}>EMPEROR</h1>
      </div>
    </footer>
  );
};

export default Footer;
