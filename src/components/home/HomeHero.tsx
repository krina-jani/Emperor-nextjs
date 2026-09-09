'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import styles from './HomeHero.module.css';

export const HomeHero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const waveRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const robotRef = useRef<HTMLDivElement>(null);
  const robotWrapperRef = useRef<HTMLDivElement>(null);
  const shadowOverlayRef = useRef<HTMLDivElement>(null);
  const alphaDataRef = useRef<Uint8ClampedArray | null>(null);
  const targetPosRef = useRef({ x: 0, y: 0 });
  const currentPosRef = useRef({ x: 0, y: 0 });
  const isOverRobotRef = useRef(false);
  const currentOpacityRef = useRef(0);

  useEffect(() => {
    // Extract alpha silhouette data to ensure shadow activates strictly over robot body
    const img = new window.Image();
    img.src = '/images/hero/robot.png';

    const extractAlpha = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = 754;
        canvas.height = 1024;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        if (ctx) {
          ctx.drawImage(img, 0, 0, 754, 1024);
          alphaDataRef.current = ctx.getImageData(0, 0, 754, 1024).data;
        }
      } catch (err) {
        console.warn('Could not read robot alpha map:', err);
      }
    };

    if (img.complete) {
      extractAlpha();
    } else {
      img.onload = extractAlpha;
    }

    const ctx = gsap.context(() => {
      // Background wave subtle entrance without scaling distortion
      if (waveRef.current) {
        gsap.fromTo(
          waveRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1.2, ease: 'power2.out' }
        );
      }

      // Staggered text entrance
      if (contentRef.current) {
        const textElements = contentRef.current.querySelectorAll(
          `.${styles.eyebrow}, .${styles.heroTitle}, .${styles.heroTagline}, .${styles.actionsRow}`
        );
        gsap.fromTo(
          textElements,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            stagger: 0.12,
            ease: 'power3.out',
            delay: 0.2,
          }
        );
      }

      // Clean entrance for robot
      if (robotRef.current) {
        gsap.fromTo(
          robotRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1.0,
            ease: 'power2.out',
            delay: 0.25,
          }
        );
      }
    }, sectionRef);

    // Track cursor position to cast dynamic black shadow ONLY when cursor is on the robot
    const onPointerMove = (e: MouseEvent) => {
      if (!robotWrapperRef.current) return;

      const rect = robotWrapperRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Check if cursor is physically within bounding box of robot
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        let isOver = true;

        // Sample exact pixel alpha to verify the cursor is physically on the robot
        if (alphaDataRef.current) {
          const u = x / rect.width;
          const v = y / rect.height;
          const px = Math.min(753, Math.max(0, Math.floor(u * 754)));
          const py = Math.min(1023, Math.max(0, Math.floor(v * 1024)));
          const alpha = alphaDataRef.current[(py * 754 + px) * 4 + 3];
          isOver = alpha > 25;
        } else {
          // Fallback while alpha data loads
          isOver = x > rect.width * 0.22 && y > rect.height * 0.1;
        }

        if (isOver) {
          if (!isOverRobotRef.current && currentOpacityRef.current < 0.05) {
            // First entry: initialize directly under cursor so it doesn't fly in from afar
            currentPosRef.current.x = x;
            currentPosRef.current.y = y;
          }
          isOverRobotRef.current = true;
          targetPosRef.current.x = x;
          targetPosRef.current.y = y;
          return;
        }
      }

      // Cursor is outside robot or over transparent air
      isOverRobotRef.current = false;
    };

    const onPointerLeave = () => {
      isOverRobotRef.current = false;
    };

    window.addEventListener('mousemove', onPointerMove, { passive: true });
    document.addEventListener('mouseleave', onPointerLeave);

    // Continuous 60fps/120fps animation loop for slow, fluid gliding shadow
    let animId: number;
    const animate = () => {
      if (shadowOverlayRef.current && robotWrapperRef.current) {
        const rect = robotWrapperRef.current.getBoundingClientRect();
        // Dynamic shadow radius proportional to robot height
        const shadowRadius = Math.max(460, Math.round(rect.height * 0.7));

        // Smooth, fluid glide
        const lerp = 0.055;
        currentPosRef.current.x += (targetPosRef.current.x - currentPosRef.current.x) * lerp;
        currentPosRef.current.y += (targetPosRef.current.y - currentPosRef.current.y) * lerp;

        // Smooth fade-in when on robot, fade-out when off
        const targetOpacity = isOverRobotRef.current ? 1 : 0;
        currentOpacityRef.current += (targetOpacity - currentOpacityRef.current) * 0.08;

        if (currentOpacityRef.current < 0.005) {
          currentOpacityRef.current = 0;
          shadowOverlayRef.current.style.opacity = '0';
        } else {
          shadowOverlayRef.current.style.opacity = currentOpacityRef.current.toFixed(3);
          shadowOverlayRef.current.style.background = `radial-gradient(circle ${shadowRadius}px at ${currentPosRef.current.x.toFixed(1)}px ${currentPosRef.current.y.toFixed(1)}px, rgba(0, 0, 0, 0.98) 0%, rgba(0, 0, 0, 0.92) 28%, rgba(0, 0, 0, 0.76) 55%, rgba(0, 0, 0, 0.35) 80%, transparent 100%)`;
        }
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      ctx.revert();
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onPointerMove);
      document.removeEventListener('mouseleave', onPointerLeave);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.heroSection}
      aria-label="Hero Section"
    >
      {/* Dynamic Background Luminous Blue Wave - Stuck & Ultra-Sharp 4K */}
      <div ref={waveRef} className={styles.waveBackground} aria-hidden="true">
        <Image
          src="/images/hero/hero-wave-ultra.png"
          alt=""
          fill
          priority
          unoptimized
          className={styles.waveImage}
        />
        <div className={styles.waveVignette} />
      </div>

      {/* Firmly Stuck Emperor Cybernetic Robot with Localized Cursor Shadow */}
      <div ref={robotRef} className={styles.robotContainer}>
        <div className={styles.robotGlow} />
        <div
          ref={robotWrapperRef}
          className={styles.robotWrapper}
        >
          <Image
            src="/images/hero/robot.png"
            alt="Emperor Cybernetic AI Specialist"
            width={754}
            height={1024}
            priority
            unoptimized
            className={styles.robotImage}
          />
          <div
            ref={shadowOverlayRef}
            className={styles.robotShadowOverlay}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Bottom atmospheric dark gradient overlay for stats clarity */}
      <div className={styles.bottomGradient} aria-hidden="true" />

      <div className={styles.heroContainer}>
        {/* Content Column: Eyebrow, Headline, Tagline, CTAs, Stats */}
        <div ref={contentRef} className={styles.heroContent}>
          <div className={styles.heroTextGroup}>
            {/* Eyebrow */}
            <div className={styles.eyebrow}>
              <span>AI &bull; WEB &bull; SOFTWARE &bull; DIGITAL</span>
            </div>

            {/* Main Headline */}
            <h1 className={styles.heroTitle}>
              <span className={styles.titleLineWhite}>YOUR VISION</span>
              <span className={styles.titleLineBlue}>
                <span className={styles.titleWord}>OUR</span>{' '}
                <span className={styles.titleWord}>TECHNOLOGY</span>
              </span>
              <span className={styles.titleLineWhite}>
                <span className={styles.titleWord}>REAL</span>{' '}
                <span className={styles.titleWord}>RESULTS.</span>
              </span>
            </h1>

            {/* Tagline */}
            <p className={styles.heroTagline}>
              Building Technology. Driving Growth.
            </p>

            {/* Action Button */}
            <div className={styles.actionsRow}>
              <Link href="/contact" className={styles.primaryBtn}>
                <span>START A PROJECT</span>
                <span className={styles.btnArrow} aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;


