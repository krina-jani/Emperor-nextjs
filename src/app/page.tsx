import React from 'react';
import { generatePageMetadata } from '../lib/seo';
import Hero from '../components/home/Hero';
import AnimatedServices from '../components/home/AnimatedServices';
import WhyChooseUs from '../components/home/WhyChooseUs';
import IndustriesPreview from '../components/home/IndustriesPreview';
import AboutPreview from '../components/home/AboutPreview';
import HorizontalScrollCTA from '../components/home/HorizontalScrollCTA';
import ProjectsTeaser from '../components/home/ProjectsTeaser';
import HomeStack from '../components/home/HomeStack';

export const metadata = generatePageMetadata(
  'Emperor Smart Solution | Smart Digital Solutions',
  'Emperor Smart Solution is a modern IT and digital solutions company providing web development, mobile application development, UI/UX design, custom software, AI solutions, and digital transformation.',
  '/'
);

export default function Home() {
  return (
    <>
      <div id="home">
        <Hero />
      </div>

      <HomeStack>
        <div id="projects-teaser">
          <ProjectsTeaser />
        </div>

        <div id="services">
          <AnimatedServices />
        </div>

        <div>
          <WhyChooseUs />
        </div>

        <div id="solutions">
          <IndustriesPreview />
        </div>

        <div id="about">
          <AboutPreview />
        </div>

        <div>
          <HorizontalScrollCTA />
        </div>
      </HomeStack>
    </>
  );
}
