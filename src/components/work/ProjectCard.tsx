import React from 'react';
import { Project } from '../../types/project';
import Badge from '../ui/Badge';
import Image from '../ui/Image';
import styles from './ProjectCard.module.css';
import { Calendar, CheckCircle2 } from 'lucide-react';
import { formatCompletionDate } from '../../lib/utils';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article id={project.slug} className={styles.card}>
      <div className={styles.grid}>
        {/* Visual Media Column */}
        <div className={styles.visualCol}>
          <div className={styles.imageWrapper}>
            <Image
              src={project.imageUrl}
              alt={project.title}
              fallbackText={project.title}
              width={600}
              height={450}
              className={styles.image}
            />
          </div>

          {/* Metrics display directly in visual card */}
          <div className={styles.metricsBox}>
            {project.metrics.map((metric, idx) => (
              <div key={idx} className={styles.metricItem}>
                <span className={styles.metricVal}>{metric.value}</span>
                <span className={styles.metricLabel}>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Content Details Column */}
        <div className={styles.contentCol}>
          <div className={styles.metaRow}>
            <Badge variant="primary">{project.category}</Badge>
            <span className={styles.metaDivider}>•</span>
            <span className={styles.metaInfo}>{project.industry}</span>
            <span className={styles.metaDivider}>•</span>
            <span className={styles.metaInfo}>
              <Calendar size={12} className={styles.metaIcon} />
              {formatCompletionDate(project.completionDate)}
            </span>
          </div>

          <h2 className={styles.title}>{project.title}</h2>
          <p className={styles.client}>Client: <strong>{project.client}</strong></p>
          <p className={styles.summary}>{project.summary}</p>

          {/* Challenge and Solution block */}
          <div className={styles.challenges}>
            <div className={styles.block}>
              <h4 className={styles.blockHeading}>The Challenge</h4>
              <p className={styles.blockText}>{project.challenge}</p>
            </div>
            <div className={styles.block}>
              <h4 className={styles.blockHeading}>Our Solution</h4>
              <p className={styles.blockText}>{project.solution}</p>
            </div>
          </div>

          {/* Outcomes bullets */}
          <div className={styles.outcomes}>
            <h4 className={styles.blockHeading}>Key Project Results</h4>
            <ul className={styles.list}>
              {project.results.map((res, i) => (
                <li key={i} className={styles.item}>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                  <span className={styles.itemText}>{res}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech tags */}
          <div className={styles.techStack}>
            <h4 className={styles.techHeading}>Technologies Deployed</h4>
            <div className={styles.badgeRow}>
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className={styles.badge}>
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
