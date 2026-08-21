import React from 'react';
import IndustriesHero from '../../components/industries/IndustriesHero';
import IndustryGrid from '../../components/industries/IndustryGrid';
import IndustriesCTA from '../../components/industries/IndustriesCTA';
import HomeCTA from '../../components/home/HomeCTA';
import { generatePageMetadata } from '../../lib/seo';

export const metadata = generatePageMetadata(
  'AI & Digital Business Solutions | Emperor Smart Solution',
  'Explore our digital business solutions including Business Automation, Digital Transformation, E-Commerce Solutions, Cloud Solutions, and Data Analytics.',
  '/solutions'
);

export default function IndustriesPage() {
  return (
    <>
      <IndustriesHero />
      <IndustryGrid />
      <IndustriesCTA />
      <HomeCTA />
    </>
  );
}
