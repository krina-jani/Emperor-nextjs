'use client';

import React, { useRef } from 'react';
import Container from '../ui/Container';
import BlurText from '../animations/BlurText';
import styles from './WhyChooseUs.module.css';

export const WhyChooseUs: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const corporateText = 
    "At Emperor Smart Solution, we provide end-to-end digital solutions that help businesses turn ideas into powerful technology products. Our services include modern web development, mobile application development, UI/UX design, e-commerce development, custom software development, cloud solutions, AI-powered applications, automation, and digital transformation. From UI/UX design and development to AI integration, advanced functionality, SEO, performance optimization, deployment, and ongoing support, we manage the complete digital journey from idea to launch. Our focus is not just on building technology, but on creating practical digital solutions that improve efficiency, enhance user experiences, and support long-term business growth.";

  return (
    <section ref={containerRef} className={styles.section}>
      <Container>
        <div className={styles.contentBlock}>
          <BlurText
            text={corporateText}
            delay={15}
            animateBy="words"
            direction="bottom"
            className={styles.blurParagraph}
          />
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
