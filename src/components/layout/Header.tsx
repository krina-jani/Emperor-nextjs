'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '../../lib/utils';
import StaggeredMenu from './StaggeredMenu';
import { mainNavLinks } from '../../data/navigation';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkHeaderTheme = () => {
      setIsScrolled(window.scrollY > 20);

      // 1. Check if body has dark-mode
      if (document.body.classList.contains('dark-mode')) {
        setIsDark(true);
        return;
      }

      // 2. Temporarily hide the header to find the element physically underneath it
      const headerEl = document.querySelector('header');
      let underlyingEl: Element | null = null;
      if (headerEl) {
        const oldDisplay = headerEl.style.display;
        try {
          headerEl.style.display = 'none';
          underlyingEl = document.elementFromPoint(100, 50);
        } catch (e) {
          console.error('[Header] Error sampling underlying element:', e);
        } finally {
          headerEl.style.display = oldDisplay;
        }
      }

      let isThemeDark = false;

      // 3. Traverse up the DOM tree from the sampled element to detect theme or background colors
      if (underlyingEl) {
        let curr: HTMLElement | null = underlyingEl as HTMLElement;
        while (curr && curr !== document.documentElement && curr !== document.body) {
          if (curr.dataset.theme === 'dark' || curr.classList.contains('dark-section') || curr.classList.contains('dark-mode')) {
            isThemeDark = true;
            break;
          }

          const className = typeof curr.className === 'string'
            ? curr.className
            : (curr.className && typeof curr.className === 'object' && 'baseVal' in curr.className
              ? String((curr.className as any).baseVal)
              : '');
          const id = curr.id || '';
          
          if (
            className.includes('darkBlue') || 
            className.includes('black') || 
            className.includes('bg-dark') ||
            className.includes('dark-section') ||
            id.includes('dark')
          ) {
            isThemeDark = true;
            break;
          }

          const bg = window.getComputedStyle(curr).backgroundColor;
          if (bg && bg !== 'transparent' && bg !== 'rgba(0, 0, 0, 0)') {
            const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
            if (match) {
              const r = parseInt(match[1], 10);
              const g = parseInt(match[2], 10);
              const b = parseInt(match[3], 10);
              const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
              if (luminance < 140) {
                isThemeDark = true;
                break;
              }
            }
          }
          curr = curr.parentElement;
        }
      }

      // 4. Fallback to body background check if no specific underlying section background was found
      if (!isThemeDark) {
        const bodyBg = window.getComputedStyle(document.body).backgroundColor;
        const bodyMatch = bodyBg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        if (bodyMatch) {
          const r = parseInt(bodyMatch[1], 10);
          const g = parseInt(bodyMatch[2], 10);
          const b = parseInt(bodyMatch[3], 10);
          const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
          if (luminance < 140) {
            isThemeDark = true;
          }
        }
      }

      setIsDark(isThemeDark);
    };

    checkHeaderTheme();
    window.addEventListener('scroll', checkHeaderTheme, { passive: true });
    window.addEventListener('resize', checkHeaderTheme, { passive: true });

    // Observe body class/style mutations (e.g. GSAP dynamically adding dark-mode)
    const observer = new MutationObserver(() => {
      checkHeaderTheme();
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class', 'style', 'data-theme'] });

    return () => {
      window.removeEventListener('scroll', checkHeaderTheme);
      window.removeEventListener('resize', checkHeaderTheme);
      observer.disconnect();
    };
  }, []);

  const handleCtaClick = () => {
    const ctaSection = document.getElementById('consultation-cta');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <header 
      className={cn(styles.header, isScrolled && styles.scrolled, isDark && styles.darkTheme)}
      data-theme={isDark ? 'dark' : 'light'}
    >
      <div className={styles.container}>
        {/* Left: Emperor Brand Logo */}
        <Link href="/" className={styles.logo} aria-label="Emperor Home">
          <Image
            src="/images/hero/e-logoicon.png"
            alt="Emperor Logo"
            width={42}
            height={32}
            className={styles.logoIcon}
            style={{ width: "auto" }}
          />
          <div className={styles.logoTextContainer}>
            <span className={styles.logoTextMain}>EMPEROR</span>
            <span className={styles.logoTextSub}>SMART SOLUTION</span>
          </div>
        </Link>

        {/* Right: Let's Talk + Menu Trigger */}
        <div className={styles.rightActions}>
          {/* Let's Talk Pill Button */}
          <button
            type="button"
            className={styles.ctaBtn}
            onClick={handleCtaClick}
          >
            LET&apos;S TALK
          </button>

          {/* Staggered Menu Trigger */}
          <StaggeredMenu
            position="right"
            items={mainNavLinks.map(l => ({ label: l.label, link: l.href, ariaLabel: `Go to ${l.label}` }))}
            socialItems={[
              { label: 'LinkedIn', link: 'https://linkedin.com' },
              { label: 'Instagram', link: 'https://instagram.com' },
            ]}
            displaySocials={true}
            displayItemNumbering={true}
            menuButtonColor={isDark ? '#ffffff' : '#000000'}
            openMenuButtonColor={isDark ? '#ffffff' : '#000000'}
            changeMenuColorOnOpen={true}
            colors={['#f4f1ea', '#000000']}
            accentColor="#ff5722"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
