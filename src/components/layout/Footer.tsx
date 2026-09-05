'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { cn } from '../../lib/utils';
import styles from './Footer.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textContainer = textRef.current;
    if (!textContainer) return;
    let ctx: gsap.Context | null = null;
    let observer: IntersectionObserver | null = null;

    // Small delay ensures DOM paint, fonts loaded, and accurate dimensions
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined') {
        ScrollTrigger.refresh();
      }
      ctx = gsap.context(() => {
        const letters = textContainer.querySelectorAll('.footer-letter');
        if (!letters.length) return;

        // Set initial state: down below the overflow mask
        gsap.set(letters, { yPercent: 130, opacity: 0 });

        const anim = gsap.to(letters, {
          yPercent: 0,
          opacity: 1,
          duration: 0.95,
          ease: 'power3.out',
          stagger: 0.08, // 1 by 1 showing text from down to up
          paused: true,
        });

        // 1. Primary ScrollTrigger (triggers as soon as footer enters viewport)
        ScrollTrigger.create({
          trigger: footerRef.current || textContainer,
          start: 'top 85%',
          onEnter: () => anim.play(),
          onEnterBack: () => anim.play(),
          onLeaveBack: () => anim.reverse(),
        });

        // 2. IntersectionObserver (failsafe for mobile browsers and Lenis instances)
        if ('IntersectionObserver' in window) {
          observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  anim.play();
                }
              });
            },
            { rootMargin: '0px 0px 40px 0px', threshold: 0.05 }
          );
          observer.observe(textContainer);
        } else {
          anim.play();
        }
      }, footerRef);
    }, 120);

    return () => {
      clearTimeout(timer);
      if (observer) observer.disconnect();
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <footer ref={footerRef} className={styles.footer}>
      <div className={cn('container', styles.container)}>
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
                <Link href="/projects" className={styles.navLink}>WORK</Link>
                <Link href="/about" className={styles.navLink}>ABOUT</Link>
                <Link href="/services" className={styles.navLink}>SERVICES</Link>
                <Link href="/careers" className={styles.navLink}>CAREERS</Link>
                <Link href="/contact" className={styles.navLink}>CONTACT</Link>
                <Link href="/internship" className={styles.navLink}>APPLY FOR INTERNSHIP</Link>
              </div>
              
              <div className={styles.socialLinks}>
                <a href="https://www.instagram.com/emperorsmartsolutions?igsh=aXR5YXhxMjZhYXAx" target="_blank" rel="noopener noreferrer" className={styles.navLink}>INSTAGRAM &#x2197;</a>
                <a href="https://www.linkedin.com/company/emperor-smart-solutions/" target="_blank" rel="noopener noreferrer" className={styles.navLink}>LINKEDIN &#x2197;</a>
                <a href="https://www.facebook.com/people/Vardaan-smart-solutions/61575906045475/" target="_blank" rel="noopener noreferrer" className={styles.navLink}>FACEBOOK &#x2197;</a>
                <a href="mailto:info@emperorsmartsolutions.com" className={styles.navLink}>EMAIL &#x2197;</a>
              </div>
            </div>

            <div className={styles.linksGrid} style={{ marginTop: '2.5rem' }}>
              <div className={styles.location}>
                202, Shitiratna Complex, Panchvati,<br/>
                Navrangpura, Ahmedabad - 380009,<br/>
                Gujarat, India
              </div>
              <div className={styles.legal}>
                <Link href="/terms" className={styles.legalLink}>Terms & Conditions</Link><br/>
                <Link href="/privacy" className={styles.legalLink}>Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Huge Bottom Text - Full Screen Width */}
      <div className={styles.giantTextContainer}>
        <div ref={textRef} className={styles.giantText} aria-label="EMPEROR">
          {"EMPEROR".split("").map((char, index) => (
            <span key={index} className={styles.letterWrapper}>
              <span className="footer-letter">
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
