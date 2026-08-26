'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import Container from '../ui/Container';
import Breadcrumbs from '../navigation/Breadcrumbs';
import FadeIn from '../animations/FadeIn';
import styles from './AboutHero.module.css';

export const AboutHero: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const ceilingRef = useRef<HTMLDivElement>(null);
  const shieldRef = useRef<HTMLDivElement>(null);
  const node1Ref = useRef<HTMLDivElement>(null);
  const node2Ref = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<SVGLineElement>(null);
  const line2Ref = useRef<SVGLineElement>(null);
  const blindsOverlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    const ceiling = ceilingRef.current;
    const shield = shieldRef.current;
    const node1 = node1Ref.current;
    const node2 = node2Ref.current;
    const line1 = line1Ref.current;
    const line2 = line2Ref.current;
    const blindsOverlay = blindsOverlayRef.current;

    if (!ceiling || !shield) return;

    let swayTween: gsap.core.Tween | null = null;
    let autoSwayTimer: NodeJS.Timeout | null = null;

    // 1. Page reveal transition - Horizontal blinds slide open to the right
    if (blindsOverlay) {
      const bars = blindsOverlay.querySelectorAll('.about-blind-bar');
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

    // 2. Hanging logo wire coordinates tracking loop
    const updateWires = () => {
      if (!ceiling || !node1 || !node2 || !line1 || !line2) return;

      const parentRect = ceiling.getBoundingClientRect();
      const n1Rect = node1.getBoundingClientRect();
      const n2Rect = node2.getBoundingClientRect();

      // Find centers of the marker node circles relative to the parent column
      const x1 = n1Rect.left - parentRect.left + n1Rect.width / 2;
      const y1 = n1Rect.top - parentRect.top + n1Rect.height / 2;

      const x2 = n2Rect.left - parentRect.left + n2Rect.width / 2;
      const y2 = n2Rect.top - parentRect.top + n2Rect.height / 2;

      // Update the endpoint of the SVG lines in real-time
      line1.setAttribute('x2', String(x1));
      line1.setAttribute('y2', String(y1));

      line2.setAttribute('x2', String(x2));
      line2.setAttribute('y2', String(y2));
    };

    // Run wires update loop on ticker
    gsap.ticker.add(updateWires);

    // 3. Auto-sway Pendulum physics loop
    const startAutoSway = () => {
      if (swayTween) swayTween.kill();
      // Gently swing side to side and float up/down
      swayTween = gsap.fromTo(shield,
        { x: -10, y: -4, rotation: -3 },
        {
          x: 10,
          y: 4,
          rotation: 3,
          duration: 3.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          overwrite: 'auto'
        }
      );
    };

    startAutoSway();

    // 4. Mouse movement interaction listeners
    const handleMouseMove = (e: MouseEvent) => {
      if (autoSwayTimer) clearTimeout(autoSwayTimer);
      if (swayTween) {
        swayTween.kill();
        swayTween = null;
      }

      const rect = ceiling.getBoundingClientRect();
      // Get pointer offset from center of column
      const pointerX = e.clientX - rect.left - rect.width / 2;
      const pointerY = e.clientY - rect.top - rect.height / 2;

      // Map offset to movement ranges
      const targetX = (pointerX / rect.width) * 50;
      const targetY = (pointerY / rect.height) * 25;
      const targetRotation = (pointerX / rect.width) * 12;

      gsap.to(shield, {
        x: targetX,
        y: targetY,
        rotation: targetRotation,
        duration: 0.8,
        ease: 'power2.out',
        overwrite: 'auto'
      });
    };

    const handleMouseLeave = () => {
      // Delay auto sway resumption so it settles down smoothly first
      gsap.to(shield, {
        x: 0,
        y: 0,
        rotation: 0,
        duration: 1.5,
        ease: 'power3.out',
        overwrite: 'auto',
        onComplete: () => {
          autoSwayTimer = setTimeout(startAutoSway, 200);
        }
      });
    };

    ceiling.addEventListener('mousemove', handleMouseMove);
    ceiling.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      gsap.ticker.remove(updateWires);
      if (swayTween) swayTween.kill();
      if (autoSwayTimer) clearTimeout(autoSwayTimer);
      ceiling.removeEventListener('mousemove', handleMouseMove);
      ceiling.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Horizontal Blinds Overlay Page Transition */}
      <div ref={blindsOverlayRef} className={styles.blindsOverlay}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="about-blind-bar"
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
                  <span className={styles.badge}>WHO WE ARE</span>
                  <h1 className={styles.title}>
                    Architecting Digital <span className="text-gradient-primary">Supremacy</span>
                  </h1>
                  <p className={styles.desc}>
                    We are a squad of principal developers, database modelers, and machine learning scientists who replace agency overhead with direct value engineering.
                  </p>
                </FadeIn>
              </div>
            </div>

            {/* Right Column: Suspended Swaying Graphic */}
            <div ref={ceilingRef} className={styles.visualCol}>
              {/* Ceiling support lines (Ropes/Wires SVG) */}
              <svg className={styles.ceilingContainer}>
                {/* Wires hang from static x="40%" and x="60%" at y="0" */}
                <line
                  ref={line1Ref}
                  x1="43%"
                  y1="0"
                  x2="43%"
                  y2="150"
                  stroke="rgba(255, 87, 34, 0.25)"
                  strokeWidth="1.5"
                />
                <line
                  ref={line2Ref}
                  x1="57%"
                  y1="0"
                  x2="57%"
                  y2="150"
                  stroke="rgba(255, 87, 34, 0.25)"
                  strokeWidth="1.5"
                />
              </svg>

              {/* The suspended logo badge itself */}
              <div ref={shieldRef} className={styles.suspendedGraphic}>
                {/* Visual rings/nodes where wires connect */}
                <div ref={node1Ref} className={`${styles.node} ${styles.nodeLeft}`} />
                <div ref={node2Ref} className={`${styles.node} ${styles.nodeRight}`} />

                {/* Emperor E Logo Icon inside the shield */}
                <Image
                  src="/images/hero/e-logoicon.png"
                  alt="Emperor Hanging Shield Logo"
                  width={72}
                  height={54}
                  className={styles.logoIcon}
                  style={{ width: 'auto', height: 'auto' }}
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default AboutHero;
