'use client';

import React, { useRef } from 'react';
import Icon from '../ui/Icon';
import { technologies } from '../../data/technologies';
import styles from './TechnologyPreview.module.css';

// Category background colors (pastel)
const categoryColors: Record<string, string> = {
  frontend: '#e0e7ff',
  backend:  '#d1fae5',
  database: '#fce7f3',
  cms:      '#fef3c7',
  cloud:    '#dbeafe',
  design:   '#ede9fe',
};

const categoryLabels: Record<string, string> = {
  frontend: 'Frontend',
  backend:  'Backend',
  database: 'Database',
  cms:      'CMS',
  cloud:    'Cloud & DevOps',
  design:   'Design',
};

// Duplicate for seamless infinite loop
const marqueeItems = [...technologies, ...technologies];

export const TechnologyPreview: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  const pauseScroll  = () => { if (trackRef.current) trackRef.current.style.animationPlayState = 'paused'; };
  const resumeScroll = () => { if (trackRef.current) trackRef.current.style.animationPlayState = 'running'; };

  return (
    <section className={styles.section} id="technologies-stack">
      <div className={styles.outerWrap}>

        {/* ── Row: fixed card + scrolling track ── */}
        <div className={styles.row}>

          {/* LEFT — sticky info card */}
          <div className={styles.stickyCard}>
            <span className={styles.eyebrow}>STACK DETAILS</span>
            <h2 className={styles.bigStat}>18+</h2>
            <p className={styles.bigStatLabel}>Technologies We Use</p>
            <p className={styles.desc}>
              We integrate and master optimal frameworks and languages to
              design responsive frontends, secure backends, and cloud&#8209;native systems.
            </p>
            <div className={styles.miniStats}>
              <div className={styles.miniStat}>
                <span className={styles.miniNum}>6</span>
                <span className={styles.miniLabel}>Specializations</span>
              </div>
              <div className={styles.miniDivider} />
              <div className={styles.miniStat}>
                <span className={styles.miniNum}>95%</span>
                <span className={styles.miniLabel}>Avg. Proficiency</span>
              </div>
            </div>
          </div>

          {/* RIGHT — scrolling marquee */}
          <div className={styles.marqueeArea}>
            {/* Fade edge on left */}
            <div className={styles.fadeLeft} />
            {/* Fade edge on right */}
            <div className={styles.fadeRight} />

            <div
              className={styles.marqueeTrack}
              ref={trackRef}
              onMouseEnter={pauseScroll}
              onMouseLeave={resumeScroll}
            >
              {marqueeItems.map((tech, i) => (
                <div
                  key={`${tech.name}-${i}`}
                  className={styles.techCard}
                  style={{ background: Object.values(categoryColors)[i % Object.values(categoryColors).length] }}
                >
                  <div className={styles.cardTop}>
                    <div className={styles.iconWrap}>
                      <Icon name={tech.iconName} size={24} />
                    </div>
                    <span className={styles.catTag}>
                      {categoryLabels[tech.category]}
                    </span>
                  </div>

                  <div className={styles.cardBody}>
                    <h3 className={styles.techName}>{tech.name}</h3>
                    <p className={styles.techDesc}>{tech.description}</p>
                  </div>

                  <div className={styles.cardFoot}>
                    <div className={styles.profBar}>
                      <div className={styles.profFill} style={{ width: `${tech.proficiency}%` }} />
                    </div>
                    <span className={styles.profNum}>{tech.proficiency}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechnologyPreview;
