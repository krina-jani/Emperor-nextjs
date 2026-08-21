import React from 'react';
import ServicesHero from '../../components/services/ServicesHero';
import ServicesFullPage from '../../components/services/ServicesFullPage';
import HomeCTA from '../../components/home/HomeCTA';
import { generatePageMetadata } from '../../lib/seo';

export const metadata = generatePageMetadata(
  'IT Services & Digital Solutions | Emperor Smart Solution',
  'We deliver AI solutions, business automation, digital transformation, e-commerce development, cloud solutions, and more — tailored for your business growth.',
  '/services'
);

import ProcessTimeline from '../../components/home/ProcessTimeline';

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesFullPage />
      <ProcessTimeline />
      <HomeCTA />
    </>
  );
}
