import React from 'react';
import AILabHero from '../../components/ai/AILabHero';
import AISolutions from '../../components/ai/AISolutions';
import AIShowcase from '../../components/ai/AIShowcase';
import AIProcess from '../../components/ai/AIProcess';
import AICta from '../../components/ai/AICta';
import HomeCTA from '../../components/home/HomeCTA';
import { generatePageMetadata } from '../../lib/seo';

export const metadata = generatePageMetadata(
  'Applied AI Lab & ML Research',
  'Discover our proprietary machine learning modeling framework, multi-agent reinforcement algorithms, and interactive solution advisor.',
  '/ai'
);

export default function AILabPage() {
  return (
    <>
      <AILabHero />
      <AISolutions />
      <AIShowcase />
      <AIProcess />
      <AICta />
      <HomeCTA />
    </>
  );
}
