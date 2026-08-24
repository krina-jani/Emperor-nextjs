'use client';

import React, { useEffect, useRef } from 'react';
import { cn } from '../../lib/utils';
import Container from '../ui/Container';
import Button from '../ui/Button';
import MagneticButton from '../animations/MagneticButton';
import Image from '../ui/Image';
import styles from './Hero.module.css';
import gsap from 'gsap';
import { 
  ArrowRight, 
  MessageCircle, 
  Code2, 
  TrendingUp, 
  Smartphone, 
  Cloud, 
  Award, 
  Users,
  Star
} from 'lucide-react';



export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Entrance sequence
      tl.from('.hero-reveal-line', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      })
      .from('.hero-desc', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power2.out'
      }, '-=0.5')
      .from('.hero-buttons', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power2.out'
      }, '-=0.45')
      .from(rightColRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 1.0,
        ease: 'expo.out'
      }, '-=1.0')
      .from('.hero-trust-strip', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.4');

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleExploreServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services-preview');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/services';
    }
  };

  const handleLetstalkClick = () => {
    const contactSection = document.getElementById('consultation-cta');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={containerRef} className={styles.hero}>
      {/* Background grids */}
      <div className={styles.gridLines} />

      <Container className={styles.container}>
        {/* Left Column: Wording & CTAs */}
        <div className={styles.contentCol}>


          {/* Core Title */}
          <h1 className={styles.title}>
            <div className="hero-reveal-line">We Build</div>
            <div className={cn(styles.titleLineAccent, 'hero-reveal-line')}>
              <span className={styles.highlight}>
                Smart Solutions
                {/* Wavy Underline SVG */}
                <svg className={styles.wavyUnderline} viewBox="0 0 300 12" fill="none" preserveAspectRatio="none">
                  <path 
                    d="M3 9C60 3.5 120 2.5 297 9" 
                    stroke="var(--color-primary)" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              .
            </div>
            <div className="hero-reveal-line">You Grow Faster.</div>
          </h1>

          <p className={cn(styles.desc, 'hero-desc')}>
            Emperor Smart Solution is a leading IT company delivering innovative web, mobile, and software solutions that drive business growth and digital transformation.
          </p>

          {/* Action Buttons */}
          <div className={cn(styles.buttonGroup, 'hero-buttons')}>
            <MagneticButton>
              <Button
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight size={16} />}
                onClick={handleExploreServices}
              >
                Explore Services
              </Button>
            </MagneticButton>

            <Button
              variant="outline"
              size="lg"
              rightIcon={<MessageCircle size={16} />}
              onClick={handleLetstalkClick}
            >
              Let&apos;s Talk
            </Button>
          </div>


        </div>

        {/* Right Column: Visual Group with Image & Trust Strip */}
        <div ref={rightColRef} className={styles.visualCol}>
          {/* Main Image container */}
          <div className={cn(styles.teamPhotoContainer, 'hero-team-photo-container')}>
            <Image
              src="/images/hero/herobanner.png"
              alt="Emperor Smart Solution Team"
              width={700}
              height={700}
              className={styles.teamImg}
            />
          </div>

            {/* Bottom Capsule Trust Strip */}
            <div className={cn(styles.trustStrip, 'hero-trust-strip')}>
              {/* Stat 1 */}
              <div className={styles.trustItem}>
                <div className={styles.trustIconBox}>
                  <Award size={20} className={styles.awardIcon} />
                </div>
                <div className={styles.trustInfo}>
                  <span className={styles.trustVal}>5+ Years</span>
                  <span className={styles.trustLabel}>Of Experience</span>
                </div>
              </div>

              {/* Divider */}
              <div className={styles.stripDivider} />

              {/* Stat 2: Google rating */}
              <div className={styles.trustItem}>
                <div className={styles.trustInfoCol}>
                  <div className={styles.googleBrand}>
                    <span className={styles.gBlue}>G</span>
                    <span className={styles.gRed}>o</span>
                    <span className={styles.gYellow}>o</span>
                    <span className={styles.gBlue}>g</span>
                    <span className={styles.gGreen}>l</span>
                    <span className={styles.gRed}>e</span>
                  </div>
                  <div className={styles.starsRow}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill="#FBBC05" color="#FBBC05" />
                    ))}
                  </div>
                  <span className={styles.googleLabel}><strong>4.9/5</strong> from Clients</span>
                </div>
              </div>

              {/* Divider */}
              <div className={styles.stripDivider} />

              {/* Stat 3: Projects */}
              <div className={styles.trustItem}>
                <div className={styles.trustIconBox}>
                  <Users size={20} className={styles.usersIcon} />
                </div>
                <div className={styles.trustInfo}>
                  <span className={styles.trustVal}>100+</span>
                  <span className={styles.trustLabel}>Projects Delivered</span>
                </div>
              </div>
            </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
