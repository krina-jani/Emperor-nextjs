import React from 'react';
import PageHero from '../../components/ui/PageHero';
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
      <PageHero
        title="Solutions For Every Industry"
        description="We tailor our core engineering and AI expertise to solve complex challenges across healthcare, finance, manufacturing, and e-commerce."
        badge="SOLUTIONS"
        colorTheme="darkBlue"
      />
      <IndustryGrid />
      <IndustriesCTA />
      <HomeCTA />
    </>
  );
}
