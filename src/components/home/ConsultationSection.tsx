'use client';

import React from 'react';
import Link from 'next/link';
import Container from '../ui/Container';
import FadeIn from '../animations/FadeIn';
import { Calendar, ArrowRight, Mail, MapPin, Sparkles, Clock, ShieldCheck } from 'lucide-react';
import styles from './ConsultationSection.module.css';

export const ConsultationSection: React.FC = () => {
  return (
    <section className={styles.section} id="consultation-cta">
      <Container>
        {/* 1. Urgency Banner */}
        <FadeIn direction="up">
          <div className={styles.urgencyBanner}>
            <div className={styles.urgencyGlow} />
            <div className={styles.urgencyLeft}>
              <div className={styles.liveSlotBadge}>
                <span className={styles.pulseDot} />
                <span>LIMITED CAPACITY</span>
              </div>
              <h3 className={styles.urgencyTitle}>
                A Few Free Consultation Slots Are Still Open This Month
              </h3>
              <p className={styles.urgencyDesc}>
                Talk through the project, get a rough plan, no pressure to commit. Only a few slots left this month.
              </p>
            </div>
            <div className={styles.urgencyRight}>
              <Link href="/contact" className={styles.slotBtn}>
                <span>Book Your Free Slot</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </FadeIn>

        {/* 2. Final Main CTA Card */}
        <FadeIn direction="up" delay="150ms">
          <div className={styles.mainCtaCard}>
            <div className={styles.ctaBackgroundAura} />
            
            <div className={styles.ctaContent}>
              <span className={styles.eyebrow}>[10] Let&apos;s Build Together</span>
              <h2 className={styles.mainHeading}>Ready to Start Your Project?</h2>
              <p className={styles.mainBody}>
                A free consultation starts with a conversation, not a sales pitch. Share the requirements, hear a clear opinion on what&apos;s actually needed, and decide the next step from there.
              </p>

              <div className={styles.featuresRow}>
                <div className={styles.featureItem}>
                  <Clock size={16} className={styles.featureIcon} />
                  <span>30-min strategy session</span>
                </div>
                <div className={styles.featureItem}>
                  <Sparkles size={16} className={styles.featureIcon} />
                  <span>Clear architecture blueprint</span>
                </div>
                <div className={styles.featureItem}>
                  <ShieldCheck size={16} className={styles.featureIcon} />
                  <span>100% confidential discussion</span>
                </div>
              </div>

              <div className={styles.actionRow}>
                <Link href="/contact" className={styles.primaryConsultBtn}>
                  <Calendar size={18} />
                  <span>Book a Free Consultation</span>
                  <ArrowRight size={18} className={styles.ctaArrow} />
                </Link>
              </div>

              <div className={styles.directContactBox}>
                <p className={styles.directPrompt}>Prefer to reach out directly?</p>
                <div className={styles.directLinks}>
                  <a href="mailto:emperorsmartsolutions@gmail.com" className={styles.contactItem}>
                    <Mail size={16} className={styles.contactIcon} />
                    <span>emperorsmartsolutions@gmail.com</span>
                  </a>
                  <span className={styles.contactDivider}>•</span>
                  <div className={styles.contactItem}>
                    <MapPin size={16} className={styles.contactIcon} />
                    <span>Ellisbridge, Ahmedabad, Gujarat, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};

export default ConsultationSection;
