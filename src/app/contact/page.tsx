import React from 'react';
import HomeCTA from '../../components/home/HomeCTA';
import Container from '../../components/ui/Container';
import { generatePageMetadata } from '../../lib/seo';
import styles from './ContactPage.module.css';

export const metadata = generatePageMetadata(
  'Contact Emperor Smart Solution | Let\'s Build Your Solution',
  'Get in touch with Emperor Smart Solution for professional web development, mobile solutions, AI integration, and digital business transformation.',
  '/contact'
);

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <Container>
          <span className={styles.badge}>CONTACT US</span>
          <h1 className={styles.title}>Connect With Our Experts</h1>
          <p className={styles.subtitle}>
            Have a project in mind or want to know how we can transform your business? Reach out to us below.
          </p>
        </Container>
      </div>
      <HomeCTA />
    </main>
  );
}
