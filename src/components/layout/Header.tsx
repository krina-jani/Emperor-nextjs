'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '../../lib/utils';
import StaggeredMenu from './StaggeredMenu';
import { mainNavLinks } from '../../data/navigation';
import Button from '../ui/Button';
import MagneticButton from '../animations/MagneticButton';
import styles from './Header.module.css';
import { ArrowRight, Phone } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/hero/e-logoicon.png"
            alt="Emperor Smart Solution Logo"
            width={54}
            height={40}
            className={styles.logoIcon}
            style={{ width: "auto" }}
          />
          <div className={styles.logoTextContainer}>
            <span className={styles.logoTextMain}>EMPEROR</span>
            <span className={styles.logoTextSub}>SMART SOLUTION</span>
          </div>
        </Link>


        {/* Header Right Actions */}
        <div className={styles.rightActions}>

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

          <StaggeredMenu
            position="right"
            items={mainNavLinks.map(l => ({ label: l.label, link: l.href, ariaLabel: `Go to ${l.label}` }))}
            socialItems={[
              { label: 'LinkedIn', link: 'https://linkedin.com' },
              { label: 'Instagram', link: 'https://instagram.com' },
            ]}
            displaySocials={true}
            displayItemNumbering={true}
            menuButtonColor="#142134"
            openMenuButtonColor="#142134"
            changeMenuColorOnOpen={true}
            colors={['#f4f1ea', '#000000']}
            accentColor="#E53E3E"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
