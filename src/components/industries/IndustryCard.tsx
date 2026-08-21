import React from 'react';
import Link from 'next/link';
import { SolutionItem } from '../../data/solutions';
import Icon from '../ui/Icon';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import styles from './IndustryCard.module.css';
import { ArrowRight, CheckCircle2, ShieldAlert } from 'lucide-react';

interface IndustryCardProps {
  industry: SolutionItem;
}

export const IndustryCard: React.FC<IndustryCardProps> = ({ industry }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.iconBox}>
          <Icon name={industry.iconName} size={24} />
        </div>
        <h2 className={styles.name}>{industry.name}</h2>
      </div>

      <p className={styles.summary}>{industry.description}</p>

      {/* Technologies Tags */}
      <div className={styles.complianceBlock}>
        <span className={styles.blockTitle}>
          <ShieldAlert size={14} className={styles.shieldIcon} />
          Technologies Used
        </span>
        <div className={styles.badgeRow}>
          {industry.technologies.map((tech) => (
            <Badge key={tech} variant="outline" className={styles.badge}>
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Target capabilities checklist */}
      <div className={styles.featuresBlock}>
        <span className={styles.blockTitle}>Targeted Capabilities</span>
        <ul className={styles.list}>
          {industry.features.map((feat) => (
            <li key={feat} className={styles.item}>
              <CheckCircle2 size={14} className={styles.checkIcon} />
              <span className={styles.itemText}>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.footer}>
        <Link href={`/solutions/${industry.slug}`}>
          <Button variant="outline" rightIcon={<ArrowRight size={14} />} className={styles.btn}>
            Launch Solution
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default IndustryCard;
