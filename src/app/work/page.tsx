import React from 'react';
import PageHero from '../../components/ui/PageHero';
import ProjectGrid from '../../components/work/ProjectGrid';
import WorkCTA from '../../components/work/WorkCTA';
import { generatePageMetadata } from '../../lib/seo';

export const metadata = generatePageMetadata(
  'Web, AI & Software Projects | Emperor Smart Solution',
  'Browse our project portfolio showcasing modern web applications, e-commerce stores, custom software dashboards, and AI solutions.',
  '/projects'
);

export default function WorkPage() {
  return (
    <>
      <PageHero
        title="Our Recent Work"
        description="Browse our portfolio of digital products, scalable web apps, and customized software systems we've built for our clients."
        badge="PROJECTS"
        colorTheme="black"
      />
      <ProjectGrid />
      <WorkCTA />
    </>
  );
}
