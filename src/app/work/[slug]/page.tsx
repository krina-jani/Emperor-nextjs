import { notFound } from 'next/navigation';
import { projects } from '../../../data/projects';
import Container from '../../../components/ui/Container';
import styles from './ProjectDetail.module.css';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: 'Project Not Found | Emperor Smart Solution' };

  return {
    title: `${project.title} | Emperor Smart Solution`,
    description: project.summary,
  };
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className={styles.pageWrapper}>
      <Container>
        <Link href="/work" className={styles.backLink}>
          <ArrowLeft size={16} />
          Back to all projects
        </Link>

        {/* Hero Card */}
        <div className={styles.heroCard}>
          <div className={styles.badgesRow}>
            <span className={styles.badge}>{project.category}</span>
            {project.industry && <span className={styles.badge}>{project.industry}</span>}
            {project.completionDate && <span className={styles.badgeYear}>Year: {project.completionDate}</span>}
          </div>
          
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.summary}>{project.summary}</p>

          {project.metrics && project.metrics.length > 0 && (
            <div className={styles.metricsGrid}>
              {project.metrics.map((metric, i) => (
                <div key={i} className={styles.metricCard}>
                  <div className={styles.metricValue}>{metric.value}</div>
                  <div className={styles.metricLabel}>{metric.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Challenge and Solution Split */}
        <div className={styles.splitCards}>
          <div className={styles.challengeCard}>
            <h2 className={styles.challengeTitle}>THE BUSINESS CHALLENGE</h2>
            <p className={styles.cardText}>{project.challenge}</p>
          </div>
          <div className={styles.solutionCard}>
            <h2 className={styles.solutionTitle}>THE ENGINEERING SOLUTION</h2>
            <p className={styles.cardText}>{project.solution}</p>
          </div>
        </div>

        {/* Architecture & Stack Card */}
        {(project.deliverables?.length || project.technologies?.length) && (
          <div className={styles.architectureCard}>
            {project.deliverables && project.deliverables.length > 0 && (
              <>
                <h2 className={styles.archTitle}>Key Architecture Modules & Deliverables</h2>
                <div className={styles.deliverablesGrid}>
                  {project.deliverables.map((item, i) => (
                    <div key={i} className={styles.deliverableItem}>
                      <CheckCircle2 size={18} className={styles.checkIcon} />
                      <span className={styles.deliverableText}>{item}</span>
                    </div>
                  ))}
                </div>
              </>
            )}

            {project.technologies && project.technologies.length > 0 && (
              <div className={styles.stackSection}>
                <h3 className={styles.stackTitle}>VERIFIED PRODUCTION STACK</h3>
                <div className={styles.techTags}>
                  {project.technologies.map(tech => (
                    <span key={tech} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </Container>
    </div>
  );
}
