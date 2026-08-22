import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { services } from '../../../data/services';
import Container from '../../../components/ui/Container';
import styles from './page.module.css';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { generatePageMetadata } from '../../../lib/seo';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return generatePageMetadata();

  return generatePageMetadata(
    service.title,
    service.summary || service.description,
    `/services/${slug}`
  );
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className={styles.pageWrapper}>
      <Container>
        <Link href="/services" className={styles.backLink}>
          <ArrowLeft size={14} /> Back to all services
        </Link>

        {/* Hero Card */}
        <div className={styles.card}>
          <span className={styles.pill}>{service.tag || 'ENTERPRISE CORE'}</span>
          <h1 className={styles.title}>{service.title}</h1>
          <p className={styles.description}>{service.description}</p>
        </div>

        {/* Deliverables Card */}
        {service.deliverables && service.deliverables.length > 0 && (
          <div className={styles.card}>
            <h2 className={styles.sectionTitle}>Production Deliverables & Artifacts</h2>
            <div className={styles.deliverablesGrid}>
              {service.deliverables.map((deliverable, index) => (
                <div key={index} className={styles.deliverableItem}>
                  <CheckCircle2 size={16} className={styles.icon} />
                  <span>{deliverable}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Process Card */}
        {service.process && service.process.length > 0 && (
          <div className={styles.card}>
            <h2 className={styles.sectionTitle}>Our Delivery Process</h2>
            <div className={styles.processGrid}>
              {service.process.map((step) => (
                <div key={step.stepNumber} className={styles.processItem}>
                  <span className={styles.stepNumber}>
                    {String(step.stepNumber).padStart(2, '0')}
                  </span>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQs Card */}
        {service.faqs && service.faqs.length > 0 && (
          <div className={styles.card}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <div className={styles.faqList}>
              {service.faqs.map((faq) => (
                <div key={faq.id} className={styles.faqItem}>
                  <h3 className={styles.faqQuestion}>{faq.question}</h3>
                  <p className={styles.faqAnswer}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
