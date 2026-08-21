'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '../../lib/utils';
import Navbar from './Navbar';
import MobileMenu from './MobileMenu';
import Button from '../ui/Button';
import MagneticButton from '../animations/MagneticButton';
import styles from './Header.module.css';
import { ArrowRight, Phone } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCtaClick = () => {
    const ctaSection = document.getElementById('consultation-cta');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={cn(styles.header, isScrolled && styles.scrolled)}>
      <div className={cn('container', styles.container)}>
        {/* Crown Logo */}
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>👑</span>
          <div className={styles.logoTextContainer}>
            <span className={styles.logoTextMain}>EMPEROR</span>
            <span className={styles.logoTextSub}>SMART SOLUTION</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <Navbar className={styles.desktopNav} />

        {/* Header Right Actions */}
        <div className={styles.rightActions}>
          <a href="tel:+919737483040" className={styles.phoneLink}>
            <Phone size={14} className={styles.phoneIcon} />
            <span>+91 97374 83040</span>
          </a>

          <MagneticButton>
            <Button
              variant="primary"
              size="sm"
              className={styles.ctaBtn}
              rightIcon={<ArrowRight size={14} />}
              onClick={handleCtaClick}
            >
              Let&apos;s Talk
            </Button>
          </MagneticButton>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            className={cn(styles.menuTrigger, isMobileMenuOpen && styles.active)}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
};

export default Header;
