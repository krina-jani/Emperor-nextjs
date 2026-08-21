'use client';

import React, { useState } from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import FadeIn from '../animations/FadeIn';
import { testimonials } from '../../data/testimonials';
import { cn } from '../../lib/utils';
import styles from './Testimonials.module.css';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[activeIndex];

  return (
    <section className={styles.section}>
      <Container>
        <SectionTitle
          badge="Endorsements"
          title="What Our Partners Say"
          subtitle="Real testimonials from engineering leaders who scaled their products with our teams."
        />

        <div className={styles.carouselWrapper}>
          <FadeIn direction="none" duration="400ms" className={styles.cardContainer}>
            <div className={styles.card}>
              {/* Star Rating */}
              <div className={styles.rating}>
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} className={styles.star} size={16} fill="currentColor" />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className={styles.quote}>
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              {/* Author detail */}
              <div className={styles.authorRow}>
                <div className={styles.avatar}>
                  {current.author.charAt(0)}
                </div>
                <div className={styles.info}>
                  <cite className={styles.name}>{current.author}</cite>
                  <span className={styles.role}>
                    {current.role}, <span className={styles.company}>{current.company}</span>
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Navigation Controls */}
          <div className={styles.controls}>
            <button
              onClick={handlePrev}
              className={styles.navBtn}
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className={styles.indicators}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={cn(
                    styles.indicator,
                    i === activeIndex && styles.activeIndicator
                  )}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className={styles.navBtn}
              aria-label="Next Testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
