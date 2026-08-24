import React from 'react';
import { notFound } from 'next/navigation';
import { technologies } from '../../../data/technologies';
import { projects } from '../../../data/projects';
import Container from '../../../components/ui/Container';
import Breadcrumbs from '../../../components/navigation/Breadcrumbs';
import Icon from '../../../components/ui/Icon';
import ProjectCard from '../../../components/work/ProjectCard';
import TechnologyCTA from '../../../components/technologies/TechnologyCTA';
import HomeCTA from '../../../components/home/HomeCTA';
import styles from './page.module.css';
import { generatePageMetadata } from '../../../lib/seo';

interface TechPageProps {
  params: Promise<{ slug: string }>;
}

const slugMappings: Record<string, string> = {
  'nextjs-react': 'Next.js & React',
  'python-pytorch': 'Python & PyTorch',
  'kubernetes-aws': 'Kubernetes & AWS',
  'flutter-swift': 'Flutter & Dart',
  'flutter-dart': 'Flutter & Dart',
  'esp32-c': 'ESP32 & C++',
  'postgresql-timescaledb': 'PostgreSQL & TimescaleDB'
};

export async function generateStaticParams() {
  return Object.keys(slugMappings).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: TechPageProps) {
  const { slug } = await params;
  const techName = slugMappings[slug];
  const tech = technologies.find((t) => t.name === techName);
  if (!tech) return generatePageMetadata();

  return generatePageMetadata(
    tech.name,
    tech.description,
    `/technologies/${slug}`
  );
}

export default async function TechnologyDetailPage({ params }: TechPageProps) {
  const { slug } = await params;
  const techName = slugMappings[slug];
  const tech = technologies.find((t) => t.name === techName);

  if (!tech) {
    notFound();
  }

  // Filter projects associated with this technology slug
  const relatedProjects = projects.filter((proj) =>
    tech.relatedProjects.includes(proj.id) ||
    proj.technologies.some((t) => t.toLowerCase().includes(slug.split('-')[0]))
  );

  return (
    <>
      <section className={styles.hero}>
        <Container>
          <Breadcrumbs />
          <div className={styles.heroCard}>
            <div className={styles.headerRow}>
              <div className={styles.iconBox}>
                <Icon name={tech.iconName} size={28} />
              </div>
              <div className={styles.titleInfo}>
                <span className={styles.category}>{tech.category} Stack</span>
                <h1 className={styles.title}>{tech.name}</h1>
              </div>
            </div>
            <p className={styles.desc}>{tech.description}</p>
            
            <div className={styles.proficiencyRow}>
              <span className={styles.profLabel}>Practice Squad Mastery: <strong>{tech.proficiency}%</strong></span>
              <div className={styles.barBg}>
                <div className={styles.barFill} style={{ width: `${tech.proficiency}%` }} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Case Studies grid built with this tech */}
      <section className={styles.projectsSection}>
        <Container>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>SUCCESS CASES</span>
            <h2 className={styles.sectionTitle}>Built with {tech.name}</h2>
          </div>

          <div className={styles.stack}>
            {relatedProjects.length > 0 ? (
              relatedProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))
            ) : (
              <div className={styles.emptyCard}>
                <p className={styles.emptyText}>
                  We have executed multiple proprietary enterprise implementations with this stack under e-signed NDA logs. Contact our squad to audit past outcomes.
                </p>
              </div>
            )}
          </div>
        </Container>
      </section>

      <TechnologyCTA />
      <HomeCTA />
    </>
  );
}
