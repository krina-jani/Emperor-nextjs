import React from 'react';
import ServicesCTA from '../services/ServicesCTA';

export const AICta: React.FC = () => {
  return (
    <ServicesCTA
      title="Secure Your Custom AI Audit"
      desc="Discuss custom Transformers, fine-tuned LLMs, or edge networks under a strict NDA. Schedule a technical audit with our data science squad leader."
      buttonText="Request Model Consultation"
    />
  );
};

export default AICta;
