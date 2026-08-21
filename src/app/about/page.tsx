import React from 'react';
import AboutHero from '../../components/about/AboutHero';
import CompanyStory from '../../components/about/CompanyStory';
import MissionVision from '../../components/about/MissionVision';
import Values from '../../components/about/Values';
import Team from '../../components/about/Team';
import AboutCTA from '../../components/about/AboutCTA';
import HomeCTA from '../../components/home/HomeCTA';
import { generatePageMetadata } from '../../lib/seo';

export const metadata = generatePageMetadata(
  'About Emperor Smart Solution | Technology & Digital Solutions',
  'Emperor Smart Solution is a technology company focused on building practical, scalable digital products and transforming business ideas into smart digital solutions.',
  '/about'
);

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyStory />
      <MissionVision />
      <Values />
      <Team />
      <AboutCTA />
      <HomeCTA />
    </>
  );
}
