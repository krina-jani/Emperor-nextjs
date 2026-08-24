import React from 'react';
import { generatePageMetadata } from '../lib/seo';

export const metadata = generatePageMetadata(
  'Emperor Smart Solution | Smart Digital Solutions',
  'Emperor Smart Solution is a modern IT and digital solutions company providing web development, mobile application development, UI/UX design, custom software, AI solutions, and digital transformation.',
  '/'
);
import Hero from '../components/home/Hero';

import ProjectsTeaser from '../components/home/ProjectsTeaser';
import AnimatedServices from '../components/home/AnimatedServices';
import WhyChooseUs from '../components/home/WhyChooseUs';
import IndustriesPreview from '../components/home/IndustriesPreview';

import TechnologyPreview from '../components/home/TechnologyPreview';
import FeaturedWork from '../components/home/FeaturedWork';
import AboutPreview from '../components/home/AboutPreview';
import HorizontalScrollCTA from '../components/home/HorizontalScrollCTA';

export default function Home() {
  return (
    <>
      <div id="home">
        <Hero />
      </div>

      <div id="projects-teaser">
        <ProjectsTeaser />
      </div>
      <div id="services">
        <AnimatedServices />
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
      <HorizontalScrollCTA />
    </>
  );
}
