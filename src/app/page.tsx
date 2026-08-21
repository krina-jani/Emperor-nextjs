import React from 'react';
import { generatePageMetadata } from '../lib/seo';

export const metadata = generatePageMetadata(
  'Emperor Smart Solution | Smart Digital Solutions',
  'Emperor Smart Solution is a modern IT and digital solutions company providing web development, mobile application development, UI/UX design, custom software, AI solutions, and digital transformation.',
  '/'
);
import Hero from '../components/home/Hero';
import TrustBar from '../components/home/TrustBar';
import ServicesPreview from '../components/home/Whatwedo';
import WhyChooseUs from '../components/home/WhyChooseUs';
import IndustriesPreview from '../components/home/IndustriesPreview';

import TechnologyPreview from '../components/home/TechnologyPreview';
import FeaturedWork from '../components/home/FeaturedWork';
import AboutPreview from '../components/home/AboutPreview';
import HomeCTA from '../components/home/HomeCTA';

export default function Home() {
  return (
    <>
      <div id="home">
        <Hero />
      </div>
      <TrustBar />
      <div id="services">
        <ServicesPreview />
      </div>
      <WhyChooseUs />
      <div id="solutions">
        <IndustriesPreview />
      </div>

      <div id="technologies">
        <TechnologyPreview />
      </div>
      <div id="projects">
        <FeaturedWork />
      </div>
      <div id="about">
        <AboutPreview />
      </div>
      <HomeCTA />
    </>
  );
}
