'use client';

import React, { useEffect, useRef } from 'react';
import { cn } from '../../lib/utils';
import NavLinks from '../navigation/NavLinks';
import Button from '../ui/Button';
import styles from './MobileMenu.module.css';
import gsap from 'gsap';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const linksContainerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = panelRef.current?.querySelectorAll('li') || [];
      const action = containerRef.current?.querySelector('.mobile-menu-action');

      // Create a timeline that handles the menu transition sequence
      const tl = gsap.timeline({ paused: true })
        .to(overlayRef.current, {
          opacity: 1,
          duration: 0.4,
          ease: 'power2.out',
        })
        .to(panelRef.current, {
          x: '0%',
          duration: 0.5,
          ease: 'power3.out',
        }, '-=0.35')
        .from(
          items,
          {
            y: 20,
            opacity: 0,
            duration: 0.4,
            stagger: 0.06,
            ease: 'power2.out',
          },
          '-=0.25'
        );

      if (action) {
        tl.from(
          action,
          {
            y: 20,
            opacity: 0,
            duration: 0.4,
            ease: 'power2.out',
          },
          '-=0.15'
        );
      }

      timelineRef.current = tl;
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (timelineRef.current) {
      if (isOpen) {
        timelineRef.current.play();
      } else {
        timelineRef.current.reverse();
      }
    }
  }, [isOpen]);

  const handleConsultationClick = () => {
    onClose();
    const ctaSection = document.getElementById('consultation-cta');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(styles.drawer, isOpen && styles.open)}
    >
      <div ref={overlayRef} className={styles.overlay} onClick={onClose} />
      <div ref={panelRef} className={styles.panel}>
        <div className={styles.content}>
          <div ref={linksContainerRef} className={styles.links}>
            <NavLinks 
              horizontal={false} 
              onItemClick={onClose} 
              className="mobile-nav-links" 
            />
          </div>
          
          <div className={cn(styles.actions, 'mobile-menu-action')}>
            <Button
              variant="primary"
              className={styles.actionBtn}
              onClick={handleConsultationClick}
            >
              Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
