import React from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Icon from '../ui/Icon';
import FadeIn from '../animations/FadeIn';
import { getStaggerDelay } from '../../lib/animations';
import styles from './AISolutions.module.css';

const solutions = [
  {
    title: 'Multi-Agent Reinforcement Models',
    desc: 'Deep policy networks trained via PPO to rebalance financial assets or dispatch delivery loads under stochastic parameters.',
    tech: 'PyTorch / Go API / Kubernetes Cluster',
    iconName: 'Cpu'
  },
  {
    title: 'Embedded On-Device Neural Networks',
    desc: 'Quantized CNNs running skin lesion pre-checks or image classifications directly on smartphone hardware without cloud latency.',
    tech: 'TensorFlow Lite / Flutter Sync / On-Device Cache',
    iconName: 'Smartphone'
  },
  {
    title: 'Agentic RAG Workflows',
    desc: 'Multi-step vector retrieval graphs checking company manuals, medical guidelines, or trading parameters securely.',
    tech: 'Pinecone / LangChain / Private VPC Llama 3',
    iconName: 'GitMerge'
  },
  {
    title: 'High-Frequency Telemetry Detectors',
    desc: 'Isolation forest models checking sub-second MQTT power, battery, or engine wear to deploy self-healing routines.',
    tech: 'ESP32 C++ / FastAPI backend / TimescaleDB logs',
    iconName: 'Activity'
  }
];

export const AISolutions: React.FC = () => {
  return (
    <section className={styles.section}>
      <Container>
        <SectionTitle
          badge="Capabilities"
          title="Proprietary AI Frameworks"
          subtitle="We train, deploy, and maintain custom model structures designed for narrow operational problems."
        />

        <div className="grid grid-cols-1 grid-cols-md-2 grid-cols-lg-2">
          {solutions.map((sol, index) => (
            <FadeIn
              key={sol.title}
              delay={getStaggerDelay(index, 120)}
              direction="up"
            >
              <div className={styles.card}>
                <div className={styles.header}>
                  <div className={styles.iconBox}>
                    <Icon name={sol.iconName} size={24} />
                  </div>
                  <h3 className={styles.cardTitle}>{sol.title}</h3>
                </div>
                <p className={styles.desc}>{sol.desc}</p>
                <div className={styles.footer}>
                  <span className={styles.techText}>{sol.tech}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AISolutions;
