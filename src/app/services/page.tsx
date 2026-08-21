import React from 'react';
import ServicesHero from '../../components/services/ServicesHero';
import ServicesFullPage from '../../components/services/ServicesFullPage';
import ServicesCTA from '../../components/services/ServicesCTA';
import { generatePageMetadata } from '../../lib/seo';

export const metadata = generatePageMetadata(
  'IT Services & Digital Solutions | Emperor Smart Solution',
  'We deliver AI solutions, business automation, digital transformation, e-commerce development, cloud solutions, and more — tailored for your business growth.',
  '/services'
);

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesFullPage />
      <ServicesCTA
        title="Ready to Start Your Project?"
        desc="Tell us your goal and we'll build the right solution around it. No templates, no shortcuts — just smart digital work built for you."
        buttonText="Get a Free Consultation"
      />
    </>
  );
}
