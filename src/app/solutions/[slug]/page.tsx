import React from 'react';
import { notFound } from 'next/navigation';
import { solutions } from '../../../data/solutions';
import { projects } from '../../../data/projects';
import Container from '../../../components/ui/Container';
import Breadcrumbs from '../../../components/navigation/Breadcrumbs';
import Badge from '../../../components/ui/Badge';
import Icon from '../../../components/ui/Icon';
import ProjectCard from '../../../components/work/ProjectCard';
import IndustriesCTA from '../../../components/industries/IndustriesCTA';
import HomeCTA from '../../../components/home/HomeCTA';
import styles from './page.module.css';
import { CheckCircle2, ShieldAlert } from 'lucide-react';
import { generatePageMetadata } from '../../../lib/seo';

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return solutions.map((ind) => ({
    slug: ind.slug,
  }));
}

export async function generateMetadata({ params }: IndustryPageProps) {
  const { slug } = await params;
  const solution = solutions.find((i) => i.slug === slug);
  if (!solution) return generatePageMetadata();

  return generatePageMetadata(
    solution.name,
    solution.summary,
    `/solutions/${slug}`
  );
}

export default async function IndustryDetailPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const solution = solutions.find((i) => i.slug === slug);

  if (!solution) {
    notFound();
  }

  // Filter projects associated with this solution vertical
  const relatedProjects = projects.filter(
    (proj) => proj.industry.toLowerCase() === solution.name.toLowerCase()
  );

  return (
    <>
      <section className={styles.hero}>
        <Container>
          <Breadcrumbs />
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <div className={styles.badgeRow}>
                <div className={styles.iconBox}>
                  <Icon name={solution.iconName} size={24} />
                </div>
                <Badge variant="secondary">Core Solution</Badge>
              </div>
              <h1 className={styles.title}>{solution.name}</h1>
              <p className={styles.desc}>{solution.description}</p>
            </div>

            <div className={styles.complianceCard}>
              <span className={styles.cardHeading}>
                <ShieldAlert size={14} className={styles.shieldIcon} />
                Core Technologies
              </span>
              <div className={styles.badgeRowWrap}>
                {solution.technologies.map((tech) => (
                  <Badge key={tech} variant="primary" className={styles.compBadge}>
                    {tech}
                  </Badge>
                ))}
              </div>
              <p className={styles.cardInfo}>
                We utilize these modern frameworks and technologies to engineer robust, scalable solutions.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Target capabilities specifications */}
      <section className={styles.featuresSection}>
        <Container>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>SYSTEM SPECIFICS</span>
            <h2 className={styles.sectionTitle}>Engineered Solutions</h2>
          </div>

          <div className={styles.featuresGrid}>
            {solution.features.map((feat, idx) => (
              <div key={idx} className={styles.featureCard}>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <p className={styles.featureText}>{feat}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Case studies grid built for this industry */}
      <section className={styles.projectsSection}>
        <Container>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>SUCCESS STORIES</span>
            <h2 className={styles.sectionTitle}>Client Work in {solution.name}</h2>
          </div>

          <div className={styles.stack}>
            {relatedProjects.length > 0 ? (
              relatedProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))
            ) : (
              <div className={styles.emptyCard}>
                <p className={styles.emptyText}>
                  We have completed multiple proprietary builds in this market segment under e-signed NDA logs. Contact our squad to audit past outcomes.
                </p>
              </div>
            )}
          </div>
        </Container>
      </section>

      <IndustriesCTA />
      <HomeCTA />
    </>
  );
}
