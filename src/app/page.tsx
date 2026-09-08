import React from 'react';
import { generatePageMetadata } from '../lib/seo';
import HomeHero from '../components/home/HomeHero';
import AnimatedServices from '../components/home/AnimatedServices';
import ProcessTimeline from '../components/home/ProcessTimeline';
import FeaturedWork from '../components/home/FeaturedWork';
import Testimonials from '../components/home/Testimonials';
import TrustBar from '../components/home/TrustBar';
import AboutPreview from '../components/home/AboutPreview';
import BlogPreview from '../components/home/BlogPreview';
import HorizontalScrollCTA from '../components/home/HorizontalScrollCTA';
import ProjectsTeaser from '../components/home/ProjectsTeaser';
import HomeStack from '../components/home/HomeStack';

export const metadata = generatePageMetadata(
  'Emperor Smart Solutions | IT Solutions Company in Ahmedabad — Web, Software & Digital Marketing',
  'Emperor Smart Solutions is an IT solutions company in Ahmedabad, building websites, custom software, algo trading platforms, MLM systems, and digital marketing campaigns. Projects start with a real conversation about what the business actually needs.',
  '/'
);

export default function Home() {
  return (
    <div style={{ background: 'radial-gradient(circle at 65% 42%, rgb(5, 13, 26) 0%, rgb(1, 6, 16) 60%, rgb(0, 0, 0) 100%)', overflow: 'hidden', width: '100%' }}>
      <div id="home">
        <HomeHero />
      </div>

      <HomeStack>
        <div id="projects-teaser">
          <ProjectsTeaser />
        </div>

        <div id="services">
          <AnimatedServices />
        </div>
      </HomeStack>

      <div id="process">
        <ProcessTimeline />
      </div>

      <div id="case-studies">
        <FeaturedWork />
      </div>

      <div id="testimonials">
        <Testimonials />
      </div>

      <div id="clients">
        <TrustBar />
      </div>

      <div id="about">
        <AboutPreview />
      </div>

      <div id="blog">
        <BlogPreview />
      </div>

      <div id="cta-scatter">
        <HorizontalScrollCTA />
      </div>
    </div>
  );
}


