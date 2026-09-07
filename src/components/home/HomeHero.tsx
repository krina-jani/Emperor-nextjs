'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search } from 'lucide-react';
import styles from './HomeHero.module.css';

export const HomeHero: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const targetPos = useRef({ x: -500, y: -500 });
  const currentPos = useRef({ x: -500, y: -500 });
  const animFrameId = useRef<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    targetPos.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleMouseEnter = () => {
    if (wrapperRef.current) {
      wrapperRef.current.style.setProperty('--shadow-opacity', '1');
    }
  };

  const handleMouseLeave = () => {
    if (wrapperRef.current) {
      wrapperRef.current.style.setProperty('--shadow-opacity', '0');
    }
  };

  useEffect(() => {
    const updatePosition = () => {
      // Smooth lerp easing for high-end fluid movement
      const ease = 0.2;
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * ease;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * ease;

      if (wrapperRef.current) {
        wrapperRef.current.style.setProperty('--mouse-x', `${currentPos.current.x.toFixed(1)}px`);
        wrapperRef.current.style.setProperty('--mouse-y', `${currentPos.current.y.toFixed(1)}px`);
      }

      animFrameId.current = requestAnimationFrame(updatePosition);
    };

    animFrameId.current = requestAnimationFrame(updatePosition);
    return () => {
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
    };
  }, []);

  return (
    <section className={styles.heroSection} aria-label="Hero Section">
      <div className={styles.heroContainer}>
        {/* Left Column: Headings & Interactive Actions */}
        <div className={styles.heroContent}>
          {/* Eyebrow / Tag */}
          <div className={styles.eyebrowRow}>
            <span className={styles.eyebrowText}>AI &bull; WEB &bull; SOFTWARE &bull; DIGITAL</span>
            <span className={styles.eyebrowLine} aria-hidden="true" />
          </div>

          {/* Main Display Headline */}
          <h1 className={styles.heroTitle}>
            <span>WE BUILD</span>
            <span>DIGITAL EXPERIENCES</span>
            <span>THAT DRIVE</span>
            <span>GROWTH.</span>
          </h1>

          {/* Subheading Paragraph */}
          <p className={styles.heroDescription}>
            We design and build websites, custom software, AI systems and digital experiences for ambitious businesses.
          </p>

          {/* Action Pills */}
          <div className={styles.actionsWrapper}>
            {/* Row 1 */}
            <div className={styles.actionsRow}>
              <Link href="/contact" className={styles.pitchBtn}>
                <span>Pitch us an idea</span>
                <span className={styles.arrowIcon} aria-hidden="true">&rarr;</span>
              </Link>
              <Link href="/contact" className={styles.outlineBtn}>
                Come work here
              </Link>
              <Link href="/contact" className={styles.outlineBtn}>
                Send a brief hello
              </Link>
            </div>

            {/* Row 2 */}
            <div className={styles.actionsRow}>
              <Link href="/services" className={styles.outlineBtn}>
                See how we operate
              </Link>
              <div className={styles.contactPill}>
                <span>Reach us:</span>
                <a href="mailto:hello@mainframe.co" className={styles.emailLink}>
                  hello@mainframe.co
                </a>
                <Search size={15} className={styles.searchIcon} aria-hidden="true" />
              </div>
            </div>
          </div>

          {/* Bottom Editorial Quote */}
          <div className={styles.bottomEditorial}>
            <div className={styles.editorialDash} aria-hidden="true" />
            <p className={styles.editorialText}>
              HUMAN CREATIVITY<br />
              MACHINE CAPABILITIES<br />
              A BRIGHTER TOMORROW.
            </p>
          </div>
        </div>

        {/* Right Column: Cybernetic Robot Figure */}
        <div className={styles.heroVisual}>
          <div
            ref={wrapperRef}
            className={styles.robotWrapper}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Base Layer: Bright Robot Image */}
            <Image
              src="/images/robot.png"
              alt="Emperor Smart Solution AI & Software Robot"
              width={680}
              height={850}
              priority
              quality={95}
              className={styles.robotImage}
            />

            {/* Top Layer: Dark Robot Image masked to mouse cursor position */}
            <Image
              src="/images/robot.png"
              alt=""
              width={680}
              height={850}
              priority
              quality={95}
              aria-hidden="true"
              className={styles.darkRobotImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;


