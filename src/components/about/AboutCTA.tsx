import React from 'react';
import ServicesCTA from '../services/ServicesCTA';

export const AboutCTA: React.FC = () => {
  return (
    <ServicesCTA
      title="Partner with Our Senior Architects"
      desc="Discuss your technology roadmaps, system bottlenecks, and scalability targets under NDA with our founding engineers."
      buttonText="Request Architectural Briefing"
    />
  );
};

export default AboutCTA;
