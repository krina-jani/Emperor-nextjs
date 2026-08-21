'use client';

import React, { useState } from 'react';
import Container from '../ui/Container';
import ProjectFilter from './ProjectFilter';
import ProjectCard from './ProjectCard';
import FadeIn from '../animations/FadeIn';
import { projects } from '../../data/projects';
import styles from './ProjectGrid.module.css';

const categories = [
  'all',
  'E-commerce Website Development',
  'Corporate Website Development',
  'Custom Web Application Development',
];

export const ProjectGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  return (
    <section className={styles.section}>
      <Container>
        {/* Horizontal Category Filtering */}
        <ProjectFilter
          categories={categories}
          activeCategory={activeCategory}
          onFilterChange={setActiveCategory}
        />

        {/* Vertical Stack of Cards */}
        <div className={styles.stack}>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <FadeIn key={project.id} direction="up" delay="100ms">
                <ProjectCard project={project} />
              </FadeIn>
            ))
          ) : (
            <div className={styles.emptyBlock}>
              <p className={styles.emptyText}>No case studies completed under this category yet.</p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default ProjectGrid;
