import React from 'react';
import Link from 'next/link';
import { Project } from '../../types/project';
import styles from './ProjectCard.module.css';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '../../lib/utils';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  // Rotate through 5 themes based on the index
  const themeClass = styles[`theme${index % 5}`];

  return (
    <article id={project.slug} className={cn(styles.card, themeClass)}>
      
      {/* Left/Top Content Column */}
      <div className={styles.contentCol}>
        <div className={styles.headerRow}>
          <Link href={`/work/${project.slug}`} className={styles.titleLink}>
            Case Study
            <ArrowUpRight size={14} className={styles.linkIcon} />
          </Link>
        </div>

        <h2 className={styles.title}>{project.title}</h2>
        <p className={styles.description}>{project.summary}</p>
        
        <div className={styles.techRow}>
          {project.technologies.map((tech) => (
            <span key={tech} className={styles.techBadge}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Right/Bottom Metrics Column */}
      <div className={styles.metricsCol}>
        {project.metrics && project.metrics.length > 0 && (
          <div className={styles.metricItem}>
            <span className={styles.metricLabel}>{project.metrics[0].label}</span>
            <span className={styles.metricVal}>{project.metrics[0].value}</span>
          </div>
        )}
      </div>

    </article>
  );
};

export default ProjectCard;
