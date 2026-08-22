import React from 'react';
import { cn } from '../../lib/utils';
import { Search } from 'lucide-react';
import styles from './ProjectFilter.module.css';

interface ProjectFilterProps {
  activeCategory: string;
  onFilterChange: (category: string) => void;
  categories: string[];
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const ProjectFilter: React.FC<ProjectFilterProps> = ({
  activeCategory,
  onFilterChange,
  categories,
  searchQuery,
  onSearchChange,
}) => {
  return (
    <div className={styles.filterContainer}>
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
                {cat}
              </button>
            </li>
          );
        })}
      </ul>
      
      <div className={styles.searchWrapper}>
        <Search size={16} className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search projects..."
          className={styles.searchInput}
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ProjectFilter;
