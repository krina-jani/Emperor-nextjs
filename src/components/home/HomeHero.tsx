'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search } from 'lucide-react';
import styles from './HomeHero.module.css';

export const HomeHero: React.FC = () => {
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
          <div className={styles.robotWrapper}>
            <Image
              src="/images/robot.png"
              alt="Emperor Smart Solution AI & Software Robot"
              width={680}
              height={850}
              priority
              quality={95}
              className={styles.robotImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
