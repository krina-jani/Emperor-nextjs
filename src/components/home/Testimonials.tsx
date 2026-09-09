'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '../ui/Container';
import { testimonials } from '../../data/testimonials';
import styles from './Testimonials.module.css';
import { Star, Target, ChevronLeft, ChevronRight } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 3;
  const totalCards = testimonials.length;

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? Math.max(0, totalCards - cardsPerPage) : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev >= totalCards - cardsPerPage ? 0 : prev + 1));
  };

  const visibleCards = testimonials.slice(startIndex, startIndex + cardsPerPage);

  return (
    <section className={styles.section} id="testimonials">
      <Container>
        {/* Top Header Split: Left Studio Image, Right Header Text & Buttons */}
        <div className={styles.topHeaderGrid}>
          <div className={styles.imageCol}>
            <div className={styles.officeImageWrapper}>
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop&sat=-100"
                alt="Emperor Smart Solution Studio & Design Team"
                width={640}
                height={480}
                quality={90}
                className={styles.officeImage}
                priority
              />
            </div>
          </div>

          <div className={styles.contentCol}>
            <div className={styles.badgePill}>
              <Target size={14} className={styles.badgeIcon} />
              <span>Client Reviews & Feedback</span>
            </div>

            <h2 className={styles.mainTitle}>Client Reviews</h2>

            <p className={styles.description}>
              Real feedback from clients who trusted our design expertise to elevate their brands.
            </p>

            <div className={styles.btnRow}>
              <Link href="/contact" className={styles.primaryBtn}>
                Book a Free Call
              </Link>
              <Link href="/services" className={styles.secondaryBtn}>
                See Services
              </Link>
            </div>
          </div>
        </div>

        {/* Reviews Navigation Bar (< > Arrow Controls) */}
        <div className={styles.reviewsHeaderRow}>
          <div className={styles.reviewsCounter}>
            <span className={styles.reviewsCounterText}>
              Showing <strong>{startIndex + 1} &ndash; {Math.min(startIndex + cardsPerPage, totalCards)}</strong> of {totalCards} Client Reviews
            </span>
          </div>

          <div className={styles.carouselNavBtns}>
            <button
              type="button"
              onClick={handlePrev}
              className={styles.carouselArrowBtn}
              aria-label="Previous Reviews"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              onClick={handleNext}
              className={styles.carouselArrowBtn}
              aria-label="Next Reviews"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Middle Testimonial Cards Grid (3 Cards without avatars) */}
        <div className={styles.reviewsGrid}>
          {visibleCards.map((item) => (
            <div key={item.id} className={styles.reviewCard}>
              {/* Author Name & Role/Company (No Client Image) */}
              <h3 className={styles.authorName}>{item.author}</h3>
              <p className={styles.authorRole}>
                {item.role} &bull; <span className={styles.companyName}>{item.company}</span>
              </p>

              <div className={styles.divider} />

              {/* Quote text */}
              <p className={styles.quoteText}>
                &ldquo;{item.quote}&rdquo;
              </p>

              {/* Bottom Rating Stars */}
              <div className={styles.ratingRow}>
                <span className={styles.ratingScore}>{item.rating.toFixed(1)}</span>
                <div className={styles.stars}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={15}
                      className={styles.starIcon}
                      fill="#eab308"
                      color="#eab308"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;


