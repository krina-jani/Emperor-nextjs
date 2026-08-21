import React from 'react';
import Link from 'next/link';
import { TechnologyItem } from '../../data/technologies';
import Icon from '../ui/Icon';
import styles from './TechnologyCard.module.css';

interface TechnologyCardProps {
  tech: TechnologyItem;
}

export const TechnologyCard: React.FC<TechnologyCardProps> = ({ tech }) => {
  const getSlugFromName = (name: string) => {
    return name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.iconBox}>
          <Icon name={tech.iconName} size={24} />
        </div>
        <div className={styles.info}>
          <h3 className={styles.name}>{tech.name}</h3>
          <span className={styles.category}>{tech.category}</span>
        </div>
      </div>

      <p className={styles.desc}>{tech.description}</p>

      {/* Competency Meter */}
      <div className={styles.meterBlock}>
        <div className={styles.meterText}>
          <span>Operational Expertise</span>
          <span>{tech.proficiency}%</span>
        </div>
        <div className={styles.meterBg}>
          <div
            className={styles.meterFill}
            style={{ width: `${tech.proficiency}%` }}
          />
        </div>
      </div>

      {tech.relatedProjects && tech.relatedProjects.length > 0 && (
        <div className={styles.projectsBlock}>
          <span className={styles.projTitle}>Deploys in Case Studies</span>
          <div className={styles.projLinks}>
            {tech.relatedProjects.map((pSlug) => (
              <Link key={pSlug} href={`/work#${pSlug}`} className={styles.projLink}>
                {pSlug.replace(/-/g, ' ')}
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className={styles.footer}>
        <Link href={`/technologies/${getSlugFromName(tech.name)}`} className={styles.link}>
          Check practice details
        </Link>
      </div>
    </div>
  );
};

export default TechnologyCard;
