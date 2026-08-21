import React from 'react';
import { cn } from '../../lib/utils';
import styles from './ProjectFilter.module.css';

interface ProjectFilterProps {
  activeCategory: string;
  onFilterChange: (category: string) => void;
  categories: string[];
}

export const ProjectFilter: React.FC<ProjectFilterProps> = ({
  activeCategory,
  onFilterChange,
  categories,
}) => {
  return (
    <div className={styles.filterBar}>
      <ul className={styles.list}>
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <li key={cat} className={styles.item}>
              <button
                type="button"
                className={cn(styles.filterBtn, isActive && styles.active)}
                onClick={() => onFilterChange(cat)}
              >
                {cat === 'all' ? 'All Case Studies' : cat}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectFilter;
