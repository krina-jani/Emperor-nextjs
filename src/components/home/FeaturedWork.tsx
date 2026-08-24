'use client';

import React from 'react';
import Link from 'next/link';
import Container from '../ui/Container';
import FadeIn from '../animations/FadeIn';
import { ArrowRight, ExternalLink, Folder } from 'lucide-react';
import styles from './FeaturedWork.module.css';

const featuredProjects = [
  {
    id: 'enterprise-crm',
    type: 'Web Application',
    name: 'Enterprise CRM',
    subtitle: 'Global Sales Automation',
    description:
      'A scalable CRM system designed to streamline sales, automate workflows, and deliver real-time insights for enterprise clients. Built for speed and massive data handling.',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'AWS'],
    accentColor: '#4f46e5',
    slug: 'enterprise-crm',
  },
  {
    id: 'nova-fintech',
    type: 'Mobile Application',
    name: 'Nova FinTech',
    subtitle: 'Secure Payments & Insights',
    description:
      'A secure fintech application enabling instant payments, transaction tracking, and AI-powered financial insights to help users master their wealth.',
    technologies: ['React Native', 'Firebase', 'Stripe API'],
    accentColor: '#0891b2',
    slug: 'nova-fintech',
  },
  {
    id: 'nexus-cloud',
    type: 'Cloud Solution',
    name: 'Nexus Cloud',
    subtitle: 'Infrastructure Monitoring',
    description:
      'A real-time cloud monitoring dashboard providing performance analytics, alerts, and infrastructure optimization for high-availability systems.',
    technologies: ['React', 'D3.js', 'AWS', 'Docker'],
    accentColor: '#059669',
    slug: 'nexus-cloud',
  },
  {
    id: 'cortex-ai',
    type: 'AI & Automation',
    name: 'Cortex AI',
    subtitle: 'Predictive Analytics Engine',
    description:
      'A data analytics platform that uses AI to predict trends, automate reporting, and visualize complex datasets for actionable business intelligence.',
    technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
    accentColor: '#d97706',
    slug: 'cortex-ai',
  },
];

export const FeaturedWork: React.FC = () => {
  return (
    <section className={styles.section} id="our-projects">
      <Container>
        {/* ── Section Header ── */}
        <FadeIn direction="up">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>OUR PROJECTS</span>
            <h2 className={styles.title}>
              Discover our innovative solutions that have{' '}
              <span className={styles.titleAccent}>transformed businesses</span> across industries
            </h2>
          </div>
        </FadeIn>

        {/* ── Project Cards Grid ── */}
        <div className={styles.projectGrid}>
          {featuredProjects.map((project, index) => (
            <FadeIn key={project.id} direction="up" delay={`${index * 80}ms`}>
              <div className={styles.projectCard} style={{ '--accent': project.accentColor } as React.CSSProperties}>
                <div className={styles.cardTop}>
                  <span className={styles.projectType}>{project.type}</span>
                  <div className={styles.folderIcon}>
                    <Folder size={18} />
                  </div>
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.projectName}>{project.name}</h3>
                  <p className={styles.projectSubtitle}>{project.subtitle}</p>
                  <p className={styles.projectDesc}>{project.description}</p>
                </div>

                <div className={styles.cardFooter}>
                  <div className={styles.techRow}>
                    {project.technologies.map((tech) => (
                      <span key={tech} className={styles.techBadge}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link href={`/projects/${project.slug}`} className={styles.caseStudyLink}>
                    View Case Study <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* ── Explore All Banner ── */}
        <FadeIn direction="up" delay="200ms">
          <div className={styles.exploreBanner}>
            <div className={styles.exploreLeft}>
              <span className={styles.exploreCount}>20+</span>
              <span className={styles.exploreLabel}>Projects</span>
            </div>
            <div className={styles.exploreDivider} />
            <div className={styles.exploreCenter}>
              <h3 className={styles.exploreTitle}>Explore Our Portfolio</h3>
              <p className={styles.exploreSubtitle}>Complete Project Collection</p>
            </div>
            <Link href="/projects" className={styles.exploreBtn}>
              Explore All <ArrowRight size={16} />
            </Link>
          </div>
        </FadeIn>

        {/* ── Portfolio CTA Card ── */}
        <FadeIn direction="up" delay="300ms">
          <div className={styles.portfolioCta}>
            <div className={styles.ctaContent}>
              <h3 className={styles.ctaTitle}>Explore Our Portfolio</h3>
              <p className={styles.ctaSubtitle}>Complete Project Collection</p>
              <p className={styles.ctaDesc}>
                Discover our complete portfolio of innovative solutions across web development,
                mobile apps, AI, cloud solutions, and more. See how we&apos;ve helped businesses
                transform digitally.
              </p>
              <div className={styles.ctaFeatures}>
                <span className={styles.ctaFeature}>✓ 20+ Successful Projects</span>
                <span className={styles.ctaFeature}>✓ Multiple Industries Covered</span>
                <span className={styles.ctaFeature}>✓ Detailed Case Studies</span>
              </div>
            </div>
            <div className={styles.ctaAction}>
              <Link
                href="https://www.emperorsmartsolutions.com/projects.php"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaPrimaryBtn}
              >
                View All Projects <ExternalLink size={16} />
              </Link>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};

export default FeaturedWork;
