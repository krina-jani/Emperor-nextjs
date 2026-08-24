'use client';

import React, { useEffect, useState } from 'react';
import styles from './LoadingScreen.module.css';
import gsap from 'gsap';

interface LoadingScreenProps {
  onComplete?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  // Duplicated text to build seamless looping marquees
  const brandText = "EMPEROR SMART SOLUTION • ";
  const repeatedText = Array(10).fill(brandText).join("");

  useEffect(() => {
    // 1. Lock scrolling on body while loading screen is active
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    // 2. Scoped GSAP context using class selectors for maximum stability during Hot Reloads
    const ctx = gsap.context(() => {
      const topBandSelector = `.${styles.topBand}`;
      const bottomBandSelector = `.${styles.bottomBand}`;
      const topTrackSelector = `.${styles.topBand} .${styles.track}`;
      const bottomTrackSelector = `.${styles.bottomBand} .${styles.track}`;

      // Set initial off-screen states
      gsap.set(topBandSelector, { x: '-110%', rotation: -2 });
      gsap.set(bottomBandSelector, { x: '110%', rotation: 1.5 });
      gsap.set(topTrackSelector, { xPercent: 0 });
      gsap.set(bottomTrackSelector, { xPercent: -50 });

      // Start infinite marquees immediately in the background (crawls slightly faster: 22s instead of 32s)
      gsap.to(topTrackSelector, {
        xPercent: -50,
        ease: 'none',
        duration: 22,
        repeat: -1
      });

      gsap.to(bottomTrackSelector, {
        xPercent: 0,
        ease: 'none',
        duration: 22,
        repeat: -1
      });

      // Create the Master GSAP Timeline
      const masterTimeline = gsap.timeline({
        onComplete: () => {
          setIsVisible(false);
          document.body.style.overflow = '';
          document.documentElement.style.overflow = '';
          if (onComplete) onComplete();
        }
      });

      // Phase 1: Empty cream screen for 0.5 seconds
      masterTimeline.to({}, { duration: 0.5 });

      // Phase 2: Top band enters (duration: 0.8s)
      masterTimeline.to(topBandSelector, {
        x: '0%',
        duration: 0.8,
        ease: 'power3.out'
      });

      // Phase 3: Bottom band enters (duration: 0.8s)
      masterTimeline.to(bottomBandSelector, {
        x: '0%',
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.35');

      // Phase 4 & 5: Let marquee run and hold composition (duration: 1.8s)
      masterTimeline.to({}, { duration: 1.8 });

      // Phase 6: Exit animation (duration: 0.8s)
      masterTimeline.to(topBandSelector, {
        x: '-110%',
        duration: 0.8,
        ease: 'power4.inOut'
      });
      masterTimeline.to(bottomBandSelector, {
        x: '110%',
        duration: 0.8,
        ease: 'power4.inOut'
      }, '-=0.8');

    });

    return () => {
      ctx.revert();
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className={styles.screen}>
      {/* Top Slanted Band */}
      <div className={cn(styles.band, styles.topBand)}>
        <div className={styles.track}>
          <span className={styles.text}>{repeatedText}</span>
          <span className={styles.text}>{repeatedText}</span>
        </div>
      </div>

      {/* Bottom Slanted Band */}
      <div ref={null} className={cn(styles.band, styles.bottomBand)}>
        <div className={styles.track}>
          <span className={styles.text}>{repeatedText}</span>
          <span className={styles.text}>{repeatedText}</span>
        </div>
      </div>
    </div>
  );
};

// Helper for conditional class rendering
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

export default LoadingScreen;
