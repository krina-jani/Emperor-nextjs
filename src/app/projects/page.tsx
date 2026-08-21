import React from 'react';
import WorkHero from '../../components/work/WorkHero';
import ProjectGrid from '../../components/work/ProjectGrid';
import WorkCTA from '../../components/work/WorkCTA';
import HomeCTA from '../../components/home/HomeCTA';
import { generatePageMetadata } from '../../lib/seo';

export const metadata = generatePageMetadata(
  'Web, AI & Software Projects | Emperor Smart Solution',
  'Browse our project portfolio showcasing modern web applications, e-commerce stores, custom software dashboards, and AI solutions.',
  '/projects'
);

export default function WorkPage() {
  return (
    <>
      <WorkHero />
      <ProjectGrid />
      <WorkCTA />
      <HomeCTA />
    </>
  );
}
