'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Colorful Social Brand Favicon SVGs
const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#FFFFFF">
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6C1.13 6 0.02 4.88 0.02 3.5C0.02 2.12 1.13 1 2.5 1C3.87 1 4.98 2.12 4.98 3.5ZM0.5 8H4.5V23H0.5V8ZM8.5 8H12.3V10.05H12.36C12.89 9.05 14.18 8 16.1 8C20.1 8 20.85 10.63 20.85 14.07V23H16.85V14.68C16.85 12.7 16.81 10.15 14.09 10.15C11.33 10.15 10.91 12.3 10.91 14.54V23H6.91V8H8.5Z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#FFFFFF">
    <path d="M14 13.5h2.5l1-4H14v-2c0-1.03.48-1.5 1.7-1.5H17.5V2.3c-.6-.08-1.7-.17-3-.17-3.1 0-5.5 1.88-5.5 5.37v2H6v4h3v10.5h5V13.5z" />
  </svg>
);

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const giantContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textContainer = textRef.current;
    const giantContainer = giantContainerRef.current;
    if (!textContainer) return;

    let ctx: gsap.Context | null = null;
    let observer: IntersectionObserver | null = null;
    const targetElement = giantContainer || textContainer;

    // Small delay ensures DOM paint, fonts loaded, and accurate dimensions
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined') {
        ScrollTrigger.refresh();
      }

      ctx = gsap.context(() => {
        const letters = textContainer.querySelectorAll('.footer-letter');
        if (!letters.length) return;

        let isRevealed = false;

        // Set initial state: shifted down below the overflow mask
        gsap.set(letters, {
          yPercent: 125,
          opacity: 0,
        });

        const playAnimation = () => {
          if (isRevealed) return;
          isRevealed = true;

          gsap.to(letters, {
            yPercent: 0,
            opacity: 1,
            duration: 0.85,
            ease: 'power3.out',
            stagger: 0.1, // 1 by 1 text step by step
            overwrite: 'auto',
          });
        };

        const resetAnimation = () => {
          if (!isRevealed) return;
          isRevealed = false;

          gsap.set(letters, {
            yPercent: 125,
            opacity: 0,
            overwrite: 'auto',
          });
        };

        // ScrollTrigger: target specifically the EMPEROR text container
        ScrollTrigger.create({
          trigger: targetElement,
          start: 'top 92%',
          onEnter: () => playAnimation(),
          onEnterBack: () => playAnimation(),
          onLeaveBack: () => resetAnimation(),
        });

        // IntersectionObserver safety net for Lenis / mobile browsers
        if ('IntersectionObserver' in window) {
          observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  playAnimation();
                } else if (entry.boundingClientRect.top > (window.innerHeight || 800)) {
                  resetAnimation();
                }
              });
            },
            {
              rootMargin: '0px 0px -5% 0px',
              threshold: 0.1,
            }
          );
          observer.observe(targetElement);
        }

        // Check if already in viewport on mount (e.g. reload when at bottom)
        const rect = targetElement.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
          playAnimation();
        }
      }, footerRef);
    }, 150);

    // Secondary refresh after pinned sections have finished layout
    const refreshTimer = setTimeout(() => {
      if (typeof window !== 'undefined') {
        ScrollTrigger.refresh();
      }
    }, 600);

    return () => {
      clearTimeout(timer);
      clearTimeout(refreshTimer);
      if (observer) observer.disconnect();
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <footer ref={footerRef} className={styles.footer}>
      {/* Background Dotted World Map & Ambient Atmosphere */}
      <div className={styles.mapBackground} aria-hidden="true">
        <div className={styles.mapAura} />
        <img
          src="/images/footer/world-map-dots.svg"
          alt=""
          className={styles.mapSvg}
          loading="eager"
          decoding="async"
        />
      </div>

      <div className={styles.footerContainer}>
        <div className={styles.contentSection}>
          {/* Left Side */}
          <div className={styles.leftCol}>
            <h2 className={styles.tagline}>Design it once,<br />Design it right.</h2>
            <Link href="/contact" className={styles.letsTalkBtn}>
              Lets Talk &rarr;
            </Link>
            
            <div className={styles.contactInfo}>
              <span className={styles.contactLabel}>New Business :</span>
              <a href="mailto:info@emperorsmartsolutions.com" className={styles.contactEmail}>info@emperorsmartsolutions.com</a>
            </div>
          </div>

          {/* Right Side */}
          <div className={styles.rightCol}>
            <div className={styles.linksGrid}>
              <div className={styles.navLinks}>
                <Link href="/" className={styles.navLink}>HOME</Link>
                <Link href="/services" className={styles.navLink}>SERVICES</Link>
                <Link href="/about" className={styles.navLink}>ABOUT US</Link>
                <Link href="/how-we-work" className={styles.navLink}>HOW WE WORK</Link>
                <Link href="/solutions" className={styles.navLink}>SOLUTIONS</Link>
                <Link href="/projects" className={styles.navLink}>PROJECTS</Link>
                <Link href="/contact" className={styles.navLink}>CONTACT US</Link>
                <Link href="/internship" className={styles.navLink}>APPLY FOR INTERNSHIP</Link>
              </div>
              
              {/* Desktop-only text links */}
              <div className={styles.socialLinks}>
                <a href="https://www.instagram.com/emperorsmartsolutions?igsh=aXR5YXhxMjZhYXAx" target="_blank" rel="noopener noreferrer" className={styles.navLink}>INSTAGRAM &#x2197;</a>
                <a href="https://www.linkedin.com/company/emperor-smart-solutions/" target="_blank" rel="noopener noreferrer" className={styles.navLink}>LINKEDIN &#x2197;</a>
                <a href="https://www.facebook.com/people/Vardaan-smart-solutions/61575906045475/" target="_blank" rel="noopener noreferrer" className={styles.navLink}>FACEBOOK &#x2197;</a>
                <a href="mailto:info@emperorsmartsolutions.com" className={styles.navLink}>EMAIL &#x2197;</a>
              </div>
            </div>

            {/* Mobile-only colorful favicons / icons */}
            <div className={styles.mobileSocialIcons}>
              <a
                href="https://www.instagram.com/emperorsmartsolutions?igsh=aXR5YXhxMjZhYXAx"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.mobileSocialBtn} ${styles.instagramBtn}`}
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.linkedin.com/company/emperor-smart-solutions/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.mobileSocialBtn} ${styles.linkedinBtn}`}
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://www.facebook.com/people/Vardaan-smart-solutions/61575906045475/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.mobileSocialBtn} ${styles.facebookBtn}`}
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
            </div>

            <div className={`${styles.linksGrid} ${styles.locationGrid}`}>
              <div className={styles.location}>
                202, Shitiratna Complex, Panchvati,<br/>
                Navrangpura, Ahmedabad - 380009,<br/>
                Gujarat, India
              </div>
              <div className={styles.legal}>
                <Link href="/terms" className={styles.legalLink}>Terms & Conditions</Link>
                <Link href="/privacy" className={styles.legalLink}>Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Huge Bottom Text - Full Screen Width */}
      <div ref={giantContainerRef} className={styles.giantTextContainer}>
        <div ref={textRef} className={styles.giantText} aria-label="EMPEROR">
          {"EMPEROR".split("").map((char, index) => (
            <span key={index} className={styles.letterWrapper}>
              <span className={`${styles.letter} footer-letter`}>
                {char}
              </span>
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
