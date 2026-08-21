import React from 'react';
import Process from '../services/Process';

const aiSteps = [
  {
    stepNumber: 1,
    title: 'Data Audit & Synthetics',
    description: 'We map your telemetry or database records, generating synthetic inputs to balance sparse classifications.',
  },
  {
    stepNumber: 2,
    title: 'Quantization & Selection',
    description: 'We select optimal neural nets (CNNs, LLMs) and apply INT8 quantization to support local mobile or edge chips.',
  },
  {
    stepNumber: 3,
    title: 'VPC Training & Tuning',
    description: 'Models are trained inside private virtual clouds, ensuring proprietary data never exits secure boundaries.',
  },
  {
    stepNumber: 4,
    title: 'gRPC Container Wrapping',
    description: 'We encapsulate models as light REST or gRPC services for high-speed connectivity to front-end clients.',
  },
  {
    stepNumber: 5,
    title: 'Reinforcement & Drift Checks',
    description: 'We configure anomaly tracking, monitor accuracy drift, and execute automated retraining pipelines.',
  },
];

export const AIProcess: React.FC = () => {
  return (
    <Process
      steps={aiSteps}
      title="Machine Learning Ingestion Workflow"
      subtitle="From telemetry mapping to containerized edge deployment, we follow a rigorous five-step modeling path."
    />
  );
};

export default AIProcess;
