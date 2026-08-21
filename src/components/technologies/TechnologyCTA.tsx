import React from 'react';
import ServicesCTA from '../services/ServicesCTA';

export const TechnologyCTA: React.FC = () => {
  return (
    <ServicesCTA
      title="Integrate the Emperor Stack"
      desc="Schedule a consultation with our system engineers to map your database, frontend, or hardware requirements, and discuss specific framework integrations under NDA."
      buttonText="Request Stack Consultation"
    />
  );
};

export default TechnologyCTA;
