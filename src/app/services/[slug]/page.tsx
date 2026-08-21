import React from 'react';
import { notFound } from 'next/navigation';
import { services } from '../../../data/services';
import Container from '../../../components/ui/Container';
import Breadcrumbs from '../../../components/navigation/Breadcrumbs';
import Process from '../../../components/services/Process';
import ServicesCTA from '../../../components/services/ServicesCTA';
import HomeCTA from '../../../components/home/HomeCTA';
import Badge from '../../../components/ui/Badge';
import Icon from '../../../components/ui/Icon';
import styles from './page.module.css';
import { CheckCircle2, HelpCircle } from 'lucide-react';
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
    service.summary,
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
    <>
      {/* Individual Service Hero */}
      <section className={styles.hero}>
        <Container>
          <Breadcrumbs />
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <div className={styles.badgeRow}>
                <div className={styles.iconContainer}>
                  <Icon name={service.iconName} size={24} />
                </div>
                <Badge variant="secondary">Core Practice</Badge>
              </div>
              <h1 className={styles.title}>{service.title}</h1>
              <p className={styles.description}>{service.description}</p>
            </div>
            
            <div className={styles.heroDetails}>
              <div className={styles.detailsCard}>
                <h3 className={styles.detailsHeading}>Practice Core Targets</h3>
                <ul className={styles.detailsList}>
                  {service.features.map((feat) => (
                    <li key={feat} className={styles.detailsItem}>
                      <span className={styles.bulletDot} />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Structured Delivery Process */}
      <Process steps={service.process} />

      {/* Practice Benefits Section */}
      <section className={styles.benefitsSection}>
        <Container>
          <div className={styles.benefitsHeader}>
            <span className={styles.benefitsBadge}>BUSINESS OUTCOMES</span>
            <h2 className={styles.benefitsTitle}>Value Delivery & Impact</h2>
          </div>

          <div className={styles.benefitsGrid}>
            {service.benefits.map((benefit, idx) => (
              <div key={idx} className={styles.benefitCard}>
                <CheckCircle2 className={styles.benefitIcon} size={22} />
                <p className={styles.benefitText}>{benefit}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Accordion FAQ Section */}
      {service.faqs && service.faqs.length > 0 && (
        <section className={styles.faqSection}>
          <Container>
            <div className={styles.faqHeader}>
              <span className={styles.faqBadge}>COMMON INQUIRIES</span>
              <h2 className={styles.faqTitle}>Practice FAQ</h2>
            </div>

            <div className={styles.faqGrid}>
              {service.faqs.map((faq) => (
                <div key={faq.id} className={styles.faqCard}>
                  <div className={styles.faqQuestionRow}>
                    <HelpCircle className={styles.faqIcon} size={20} />
                    <h3 className={styles.faqQuestion}>{faq.question}</h3>
                  </div>
                  <p className={styles.faqAnswer}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      <ServicesCTA
        title={`Accelerate with our ${service.title} Squad`}
        desc="Let's execute an NDA-backed review. Partner with our senior developers and scientists to deploy high-impact configurations."
      />
      
      <HomeCTA />
    </>
  );
}
