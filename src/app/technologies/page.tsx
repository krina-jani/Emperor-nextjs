import React from 'react';
import TechnologyHero from '../../components/technologies/TechnologyHero';
import TechnologyGrid from '../../components/technologies/TechnologyGrid';
import TechnologyCTA from '../../components/technologies/TechnologyCTA';
import HomeCTA from '../../components/home/HomeCTA';
import { generatePageMetadata } from '../../lib/seo';

export const metadata = generatePageMetadata(
  'Core Technology Stack & Mastery',
  'Browse our enterprise frontend, backend, database, cloud configurations, and IoT devices tech stack mappings.',
  '/technologies'
);

export default function TechnologiesPage() {
  return (
    <>
      <TechnologyHero />
      <TechnologyGrid />
      <TechnologyCTA />
      <HomeCTA />
    </>
  );
}
