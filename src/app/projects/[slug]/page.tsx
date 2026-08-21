import { notFound } from 'next/navigation';
import { projects } from '../../../data/projects';
import Container from '../../../components/ui/Container';
import styles from './ProjectDetail.module.css';
import Image from 'next/image';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: 'Project Not Found | Emperor Smart Solution' };

  return {
    title: `${project.title} | Emperor Smart Solution`,
    description: project.summary,
  };
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className={styles.pageWrapper}>
      <Container>
        <div className={styles.heroSection}>
          <div className={styles.meta}>
            <span className={styles.category}>{project.category}</span>
            <span className={styles.dot}>•</span>
            <span className={styles.industry}>{project.industry}</span>
          </div>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.summary}>{project.summary}</p>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={1200}
            height={600}
            className={styles.mainImage}
            priority
          />
        </div>

        <div className={styles.contentSection}>
          <div className={styles.overview}>
            <h2>Overview</h2>
            <p>{project.description}</p>
          </div>

          <div className={styles.detailsGrid}>
            <div className={styles.detailBlock}>
              <h3>Client</h3>
              <p>{project.client}</p>
            </div>
            <div className={styles.detailBlock}>
              <h3>Completion</h3>
              <p>{project.completionDate}</p>
            </div>
            <div className={styles.detailBlock}>
              <h3>Technologies</h3>
              <div className={styles.techTags}>
                {project.technologies.map(tech => (
                  <span key={tech} className={styles.tag}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.challengeSolution}>
          <div className={styles.block}>
            <h2>The Challenge</h2>
            <p>{project.challenge}</p>
          </div>
          <div className={styles.block}>
            <h2>The Solution</h2>
            <p>{project.solution}</p>
          </div>
        </div>

        <div className={styles.resultsSection}>
          <h2>Key Outcomes</h2>
          <ul>
            {project.results.map((result, i) => (
              <li key={i}>{result}</li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}
