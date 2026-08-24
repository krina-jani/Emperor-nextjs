import React from 'react';
import PageHero from '../../components/ui/PageHero';
import ServicesGrid from '../../components/services/ServicesGrid';
import HomeCTA from '../../components/home/HomeCTA';
import { generatePageMetadata } from '../../lib/seo';

export const metadata = generatePageMetadata(
  'IT Services & Digital Solutions | Emperor Smart Solution',
  'We deliver AI solutions, business automation, digital transformation, e-commerce development, cloud solutions, and more — tailored for your business growth.',
  '/services'
);

import TechnologyRadar from '../../components/services/TechnologyRadar';

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Services Built For Your Growth"
        description="From intelligent AI automation to complete digital transformation — we deliver end-to-end technology solutions that help businesses scale, operate smarter, and lead their markets."
        badge="WHAT WE DO"
        colorTheme="black"
      />
      <ServicesGrid />
      <TechnologyRadar />
      <HomeCTA />
    </>
  );
}
