'use client';

import React, { useState } from 'react';
import Container from '../ui/Container';
import { FAQItem } from '../../types/common';
import { Plus } from 'lucide-react';
import styles from './FAQAccordion.module.css';

interface FAQAccordionProps {
  faqs?: FAQItem[];
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs }) => {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    [faqs?.[0]?.id || '']: true // First item open by default for immediate engagement
  });

  if (!faqs || faqs.length === 0) return null;

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.sectionHeader}>
          <span className={styles.badge}>QUESTIONS & ANSWERS</span>
          <h2 className={styles.heading}>Frequently Asked Questions</h2>
        </div>

        <div className={styles.accordionList}>
          {faqs.map((faq) => {
            const isOpen = !!openIds[faq.id];

            return (
              <div
                key={faq.id}
                className={`${styles.accordionItem} ${isOpen ? styles.open : ''}`}
              >
                <button
                  type="button"
                  className={styles.trigger}
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <h3 className={styles.question}>{faq.question}</h3>
                  <div className={styles.iconWrapper} aria-hidden="true">
                    <Plus size={16} />
                  </div>
                </button>

                <div
                  id={`faq-answer-${faq.id}`}
                  className={styles.contentWrapper}
                >
                  <div className={styles.innerContent}>
                    <p className={styles.answer}>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default FAQAccordion;
