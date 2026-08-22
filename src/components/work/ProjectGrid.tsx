'use client';

import React, { useState } from 'react';
import Container from '../ui/Container';
import ProjectFilter from './ProjectFilter';
import ProjectCard from './ProjectCard';
import AnimatedCardWrapper from '../animations/AnimatedCardWrapper';
import { projects } from '../../data/projects';
import styles from './ProjectGrid.module.css';

const categories = [
  'ALL',
  'SOFTWARE',
  'AI & AUTOMATION',
  'WEB APPS',
  'MOBILE',
  'E-COMMERCE',
  'HEALTHCARE',
  'FINTECH',
  'REAL ESTATE',
  'TRAVEL & HOSPITALITY',
];

export const ProjectGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === 'ALL' || project.category === activeCategory;
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = 
      project.title.toLowerCase().includes(searchLower) ||
      project.description.toLowerCase().includes(searchLower) ||
      project.technologies.some(t => t.toLowerCase().includes(searchLower));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <section className={styles.section}>
      <Container>
        {/* Horizontal Category Filtering & Search */}
        <ProjectFilter
          categories={categories}
          activeCategory={activeCategory}
          onFilterChange={setActiveCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* Vertical Stack of Cards */}
        <div className={styles.stack}>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <AnimatedCardWrapper key={project.id} index={index} delay={(index % 3) * 0.1}>
                <ProjectCard project={project} index={index} />
              </AnimatedCardWrapper>
            ))
          ) : (
            <div className={styles.emptyBlock}>
              <p className={styles.emptyText}>No case studies found matching your criteria.</p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default ProjectGrid;
