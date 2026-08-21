import React from 'react';
import ServicesCTA from '../services/ServicesCTA';

export const IndustriesCTA: React.FC = () => {
  return (
    <ServicesCTA
      title="Secure Compliance-First Architectures"
      desc="Schedule a consultation with our system audit squad to map HIPAA, SOC2, or PCI constraints, and discuss custom secure deployment configurations under NDA."
      buttonText="Request Compliance Consultation"
    />
  );
};

export default IndustriesCTA;
