'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '../../lib/utils';
import StaggeredMenu from './StaggeredMenu';
import { mainNavLinks } from '../../data/navigation';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkHeaderTheme = () => {
      setIsScrolled(window.scrollY > 20);

      // 0. If at the top of page and body is not dark-mode, always light
      if (window.scrollY < 40 && !document.body.classList.contains('dark-mode')) {
        setIsDark(false);
        return;
      }

      // 1. Check if body has dark-mode
      if (document.body.classList.contains('dark-mode')) {
        setIsDark(true);
        return;
      }

      // 2. Temporarily hide header visibility to find the element physically underneath it
      const headerEl = document.querySelector('header');
      let underlyingEl: Element | null = null;
      if (headerEl) {
        const oldVisibility = headerEl.style.visibility;
        const oldPointerEvents = headerEl.style.pointerEvents;
        try {
          headerEl.style.visibility = 'hidden';
          headerEl.style.pointerEvents = 'none';
          const sampleX = Math.min(Math.max(window.innerWidth / 2, 150), 500);
          underlyingEl = document.elementFromPoint(sampleX, 40);
        } catch (e) {
          console.error('[Header] Error sampling underlying element:', e);
        } finally {
          headerEl.style.visibility = oldVisibility;
          headerEl.style.pointerEvents = oldPointerEvents;
        }
      }

      let isThemeDark = false;

      // 3. Traverse up the DOM tree from the sampled element to detect theme or background colors
      if (underlyingEl && (!headerEl || !headerEl.contains(underlyingEl))) {
        let curr: HTMLElement | null = underlyingEl as HTMLElement;
        while (curr && curr !== document.documentElement && curr !== document.body) {
          if (curr.dataset.theme === 'dark' || curr.classList.contains('dark-section') || curr.classList.contains('dark-mode')) {
            isThemeDark = true;
            break;
          }

          const bg = window.getComputedStyle(curr).backgroundColor;
          if (bg && bg !== 'transparent' && bg !== 'rgba(0, 0, 0, 0)') {
            const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
            if (match) {
              const r = parseInt(match[1], 10);
              const g = parseInt(match[2], 10);
              const b = parseInt(match[3], 10);
              const alpha = match[4] !== undefined ? parseFloat(match[4]) : 1;
              if (alpha > 0.4) {
                const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
                if (luminance < 130) {
                  isThemeDark = true;
                  break;
                } else {
                  isThemeDark = false;
                  break;
                }
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
          if (luminance < 130) {
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
      className={cn(
        styles.header, 
        isScrolled && styles.scrolled, 
        (isDark && !isMenuOpen) && styles.darkTheme,
        isMenuOpen && styles.menuOpen
      )}
      data-theme={isMenuOpen ? 'light' : (isDark ? 'dark' : 'light')}
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

        {/* Center Desktop Navigation matching mockup */}
        <nav className={styles.centerNav} aria-label="Main Navigation">
          {[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Work', href: '/work' },
            { label: 'About', href: '/about' },
            { label: 'Contact', href: '/contact' },
          ].map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(styles.centerNavLink, isActive && styles.centerNavActive)}
              >
                <span>{item.label}</span>
                {isActive && <span className={styles.activeDot} aria-hidden="true" />}
              </Link>
            );
          })}
        </nav>

        {/* Right: Let's Talk + Menu Trigger */}
        <div className={styles.rightActions}>
          {/* Let's Talk Pill Button */}
          <button
            type="button"
            className={styles.ctaBtn}
            onClick={handleCtaClick}
          >
            LET&apos;S TALK &rarr;
          </button>

          {/* Staggered Menu Trigger */}
          <StaggeredMenu
            position="right"
            items={mainNavLinks.map(l => ({
              label: l.label,
              link: l.href,
              ariaLabel: `Go to ${l.label.replace(/\n/g, ' ')}`,
              isActive: pathname === l.href
            }))}
            socialItems={[
              { label: 'Instagram', link: 'https://instagram.com' },
              { label: 'LinkedIn', link: 'https://linkedin.com' },
            ]}
            displaySocials={true}
            displayItemNumbering={false}
            menuButtonColor={isDark ? '#ffffff' : '#000000'}
            openMenuButtonColor="#000000"
            changeMenuColorOnOpen={true}
            colors={['#f4f4f4', '#ffffff']}
            accentColor="#000000"
            onMenuOpen={() => setIsMenuOpen(true)}
            onMenuClose={() => setIsMenuOpen(false)}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
