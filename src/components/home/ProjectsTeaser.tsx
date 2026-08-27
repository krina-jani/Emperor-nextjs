'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Container from '../ui/Container';
import styles from './ProjectsTeaser.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ProjectsTeaser: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const title = containerRef.current?.querySelector(`.${styles.title}`);
      const subtitle = containerRef.current?.querySelector(`.${styles.subtitle}`);

      if (title) {
        gsap.fromTo(title,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

      if (subtitle) {
        gsap.fromTo(subtitle,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div ref={containerRef}>
          <h2 className={styles.title}>Projects</h2>
          
          <p className={styles.subtitle}>
            These are not just projects, they are stories of our clients, our work, and the impact we made.{' '}
            <Link href="/projects" className={styles.link}>
              See More <ArrowUpRight className={styles.icon} size={24} />
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
};

export default ProjectsTeaser;
