'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './AnimatedServices.module.css';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const SERVICES = [
  {
    title: 'Logo\nDesign',
    desc: 'We make logos that feel right. Not just good-looking but meaningful, memorable and built to last for your brand.',
    icon: (
      <img src="/svg/s01.svg" alt="Logo Design Icon" width={80} height={80} />
    ),
  },
  {
    title: 'Brand Identity Development',
    desc: 'A brand is more than a logo. We help you show up the same way everywhere - Online, offline and everything between.',
    icon: (
      <img src="/svg/s02.svg" alt="Brand Identity Icon" width={80} height={80} />
    ),
  },
  {
    title: 'Packaging\nDesign',
    desc: 'Good packaging tells a story before anyone reads a word. We design packs that stand out, feel great and connect.',
    icon: (
      <img src="/svg/s03.svg" alt="Packaging Design Icon" width={80} height={80} />
    ),
  },
  {
    title: 'Website Design\n& Development',
    desc: 'Your website should work hard and look good. We design sites that are easy to use and built to grow with you.',
    icon: (
      <img src="/svg/s04.svg" alt="Website Design Icon" width={80} height={80} />
    ),
  },
];

const AnimatedServices = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const trigger = triggerRef.current;
    const wrapper = scrollWrapperRef.current;

    if (!section || !trigger || !wrapper) return;

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        const cards = gsap.utils.toArray(wrapper.children);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: trigger,
            start: 'top top',
            end: '+=800%', // Doubled scroll distance to make the animation much slower
            pin: true,
            scrub: 1,
          }
        });

        // 1. Cards slide up and fade in step-by-step
        tl.fromTo(cards,
          { y: 300, opacity: 0 },
          { y: 0, opacity: 1, stagger: 1.5, duration: 1, ease: 'power2.out' } // Increased stagger for distinct steps
        );

        // 2. Long pause so they stay fully visible
        tl.to({}, { duration: 3 }); // Increased pause to account for slower scroll

        // 3. Cards slide up further and fade out step-by-step
        tl.to(cards,
          { y: -300, opacity: 0, stagger: 1.5, duration: 1, ease: 'power2.in' } // Increased stagger for distinct steps
        );

      }, section);

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      {/* Intro Slide (now full width header, scrolls naturally) */}
      <div className={styles.introSlide}>
          <div className={styles.leftCol}>
            <h2 className={styles.title}>Services<br/>We provide</h2>
            <Link href="/services" className={styles.learnMore}>
              Learn More <ArrowRight size={20} />
            </Link>
          </div>
          <div className={styles.rightCol}>
            <div className={styles.summary}>
              <span className={styles.summaryLabel}>[04] Summary:</span>
              <ul className={styles.summaryList}>
                <li>Branding</li>
                <li>UI/UX Design</li>
                <li>Development</li>
                <li>Packaging</li>
              </ul>
            </div>
          </div>
        </div>

      {/* The Cards Section (Pins when it reaches top) */}
      <div ref={triggerRef} className={styles.pinWrapper}>
        <div className={styles.scrollContainer}>
          <div ref={scrollWrapperRef} className={styles.cardsWrapper}>
            {/* Cards */}
            {SERVICES.map((service, idx) => (
              <div key={idx} className={styles.card}>
                <div className={styles.iconWrapper}>
                  {service.icon}
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDesc}>{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedServices;
