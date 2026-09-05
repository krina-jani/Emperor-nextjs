'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import Container from '../ui/Container';
import Breadcrumbs from '../navigation/Breadcrumbs';
import FadeIn from '../animations/FadeIn';
import styles from './SolutionsHero.module.css';

export const SolutionsHero: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const blindsOverlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    const blindsOverlay = blindsOverlayRef.current;

    // Page reveal transition - Horizontal blinds slide open to the right
    if (blindsOverlay) {
      const bars = blindsOverlay.querySelectorAll('.solution-blind-bar');
      gsap.fromTo(bars,
        { scaleX: 1 },
        {
          scaleX: 0,
          stagger: 0.08,
          duration: 0.8,
          ease: 'power2.inOut',
          delay: 0.1,
          onComplete: () => {
            gsap.set(blindsOverlay, { display: 'none' });
          }
        }
      );
    }
  }, []);

  return (
    <>
      {/* Horizontal Blinds Overlay Page Transition */}
      <div ref={blindsOverlayRef} className={styles.blindsOverlay}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="solution-blind-bar"
            style={{
              flexGrow: 1,
              backgroundColor: '#000000',
              width: '100%',
              transform: 'scaleX(1)',
              transformOrigin: 'right center',
              borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
            }}
          />
        ))}
      </div>

      <section className={styles.hero}>
        <Container>
          <div className={styles.gridContainer}>
            {/* Left Column: Copy Content */}
            <div className={styles.copyCol}>
              <Breadcrumbs />
              <div style={{ marginTop: '1.5rem' }}>
                <FadeIn direction="down" delay="100ms">
                  <span className={styles.badge}>SOLUTIONS</span>
                  <h1 className={styles.title}>
                    Solutions For Every <span className="text-gradient-primary">Industry</span>
                  </h1>
                  <p className={styles.desc}>
                    We tailor our core engineering and AI expertise to solve complex challenges across healthcare, finance, manufacturing, and e-commerce.
                  </p>
                </FadeIn>
              </div>
            </div>

            {/* Right Column: Static Graphic */}
            <div className={styles.visualCol}>
              <div className={styles.svgWrapper}>
                <div className={styles.svgScaleContainer}>
                  <Image
                    src="/svg/Man and robot with computers sitting together in workplace.svg"
                    alt="Man and robot with computers sitting together in workplace"
                    width={550}
                    height={380}
                    className={styles.workplaceSvg}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default SolutionsHero;
