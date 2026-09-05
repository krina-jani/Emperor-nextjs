import React from 'react';
import Hero from '../../components/home/Hero';
import AboutStack from '../../components/about/AboutStack';
import CompanyStory from '../../components/about/CompanyStory';
import MissionVision from '../../components/about/MissionVision';
import Values from '../../components/about/Values';
import Team from '../../components/about/Team';
import AboutCTA from '../../components/about/AboutCTA';
import { generatePageMetadata } from '../../lib/seo';

export const metadata = generatePageMetadata(
  'About Emperor Smart Solution | Technology & Digital Solutions',
  'Emperor Smart Solution is a technology company focused on building practical, scalable digital products and transforming business ideas into smart digital solutions.',
  '/about'
);

export default function AboutPage() {
  return (
    <>
      <div id="about-hero">
        <Hero />
      </div>
      <AboutStack>
        <div id="company-story">
          <CompanyStory />
        </div>
        <div id="mission-vision">
          <MissionVision />
        </div>
        <div id="values">
          <Values />
        </div>
        <div id="team">
          <Team />
        </div>
        <div id="about-cta">
          <AboutCTA />
        </div>
      </AboutStack>
    </>
  );
}
