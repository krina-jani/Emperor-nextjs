import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import styles from './ProjectsTeaser.module.css';

const ProjectsTeaser: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Projects</h2>
        
        <p className={styles.subtitle}>
          These are not just projects, they are stories of our clients, our work, and the impact we made.{' '}
          <Link href="/projects" className={styles.link}>
            See More <ArrowUpRight className={styles.icon} size={24} />
          </Link>
        </p>
      </div>
    </section>
  );
};

export default ProjectsTeaser;
