'use client';

import React, { useState } from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { cn } from '../../lib/utils';
import styles from './AIShowcase.module.css';
import { Brain, Cpu, ShieldCheck, Terminal, TrendingUp } from 'lucide-react';

interface AnalysisResult {
  model: string;
  dataStack: string;
  compliance: string;
  targetSla: string;
  caseStudy: string;
}

const analysisMatrix: Record<string, AnalysisResult> = {
  'low-speed': {
    model: 'Policy Reinforcement Learning (PPO) Network model trained via PyTorch',
    dataStack: 'Apache Kafka data streams linked with high-frequency Go microservices',
    compliance: 'ISO 27001 VPC isolated sandboxes with SOC2 logging controls',
    targetSla: 'Reduce execution delays from 450ms to 18ms (96% Latency Cut)',
    caseStudy: 'ApexAlgo: High Frequency Trade Optimizer',
  },
  'fuel-cost': {
    model: 'Genetic Dynamic Route Solver matching multi-point dispatch matrixes',
    dataStack: 'Mapbox GL visualizations dynamically fed by Redis memory caching databases',
    compliance: 'FMCSA ELD coordinates privacy policies matching GDPR standards',
    targetSla: 'Cut average fleet fuel consumption by 14% and prevent delivery delays',
    caseStudy: 'LogiRoute: Logistics Optimization Dashboard',
  },
  'chart-backlog': {
    model: 'Speech-to-Text Clinical Transcription model fine-tuned for terminology',
    dataStack: 'FHIR compliant chart ingestion APIs connected to SQLite secure storage',
    compliance: 'HIPAA and SOC2 Type II end-to-end encrypted databases',
    targetSla: 'Shorten patient check-in times by 35% with secure local models',
    caseStudy: 'MedConnect: Telehealth Mobile Application',
  },
  'grid-failure': {
    model: 'Embedded Neural Network (Edge AI) loaded directly on controllers',
    dataStack: 'MQTT low-bandwidth channels streaming signals to TimescaleDB databases',
    compliance: 'Hardware secure elements with cryptographic authentication',
    targetSla: 'Execute emergency switch controls in less than 40ms to avoid outages',
    caseStudy: 'SmartGrid: IoT Utility Substation Monitor',
  },
};

export const AIShowcase: React.FC = () => {
  const [bottleneck, setBottleneck] = useState('low-speed');
  const [dataType, setDataType] = useState('sentiment');
  const [isLoading, setIsLoading] = useState(false);
  const [logIndex, setLogIndex] = useState(0);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const logs = [
    'Initializing Emperor Smart Advisor...',
    'Reading bottleneck parameters...',
    'Scanning model architectures (Transformers / Reinforcement)...',
    'Resolving compliance constraints (HIPAA/SOC2)...',
    'Optimizing target SLA predictions...',
    'Analysis complete. Visualizing solution...',
  ];

  const handleAnalyze = () => {
    setIsLoading(true);
    setResult(null);
    setLogIndex(0);

    const logInterval = setInterval(() => {
      setLogIndex((prev) => {
        if (prev === logs.length - 1) {
          clearInterval(logInterval);
          setTimeout(() => {
            setResult(analysisMatrix[bottleneck]);
            setIsLoading(false);
          }, 400);
          return prev;
        }
        return prev + 1;
      });
    }, 300);
  };

  const handleScrollToCta = () => {
    const el = document.getElementById('consultation-cta');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.section}>
      <Container>
        <SectionTitle
          badge="Interactive Demo"
          title="Smart Solution Advisor"
          subtitle="Input your scale bottleneck and data parameters to analyze your target model architecture and recommended database stack."
        />

        <div className={styles.grid}>
          {/* Inputs Column */}
          <div className={styles.inputCard}>
            <h3 className={styles.cardHeading}>Advisor Settings</h3>
            
            <div className={styles.field}>
              <label className={styles.label}>Select Scale Bottleneck</label>
              <select
                value={bottleneck}
                onChange={(e) => setBottleneck(e.target.value)}
                className={styles.select}
              >
                <option value="low-speed">Low Trading Execution Speed & Volatility Spikes</option>
                <option value="fuel-cost">High Vehicle Fuel Usage & Routing Delays</option>
                <option value="chart-backlog">Manual Clinical Ingestion & Transcription Backlogs</option>
                <option value="grid-failure">Localized Substation Overloads & Outages</option>
              </select>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Ingestion Data Format</label>
              <select
                value={dataType}
                onChange={(e) => setDataType(e.target.value)}
                className={styles.select}
              >
                <option value="sentiment">Sentiment strings & market order logs</option>
                <option value="spatial">GPS coordinates & warehouse stock numbers</option>
                <option value="audio">Audio consultations & voice feeds</option>
                <option value="telemetry">High-frequency telemetry & MQTT sensor logs</option>
              </select>
            </div>

            <Button
              variant="primary"
              onClick={handleAnalyze}
              isLoading={isLoading}
              className={styles.analyzeBtn}
            >
              Analyze Target Architecture
            </Button>
          </div>

          {/* Terminal / Results Column */}
          <div className={styles.visualCol}>
            {isLoading ? (
              <div className={styles.terminal}>
                <div className={styles.terminalHeader}>
                  <Terminal size={14} />
                  <span>advisor-advisor.log</span>
                </div>
                <div className={styles.terminalBody}>
                  {logs.slice(0, logIndex + 1).map((log, i) => (
                    <p key={i} className={styles.logLine}>
                      <span className={styles.logPrompt}>$</span> {log}
                    </p>
                  ))}
                </div>
              </div>
            ) : result ? (
              <div className={styles.resultCard}>
                <h3 className={styles.resultTitle}>Recommended Architecture</h3>
                
                <div className={styles.resultList}>
                  <div className={styles.resultItem}>
                    <Brain className={styles.resultIcon} size={20} />
                    <div className={styles.resultText}>
                      <span className={styles.resultLabel}>Model Architecture</span>
                      <p className={styles.resultVal}>{result.model}</p>
                    </div>
                  </div>

                  <div className={styles.resultItem}>
                    <Cpu className={styles.resultIcon} size={20} />
                    <div className={styles.resultText}>
                      <span className={styles.resultLabel}>Recommended Ingest & Storage</span>
                      <p className={styles.resultVal}>{result.dataStack}</p>
                    </div>
                  </div>

                  <div className={styles.resultItem}>
                    <ShieldCheck className={styles.resultIcon} size={20} />
                    <div className={styles.resultText}>
                      <span className={styles.resultLabel}>Compliance & Sandbox</span>
                      <p className={styles.resultVal}>{result.compliance}</p>
                    </div>
                  </div>

                  <div className={styles.resultItem}>
                    <TrendingUp className={styles.resultIcon} size={20} />
                    <div className={styles.resultText}>
                      <span className={styles.resultLabel}>Target Outcome SLA</span>
                      <p className={cn(styles.resultVal, styles.slaText)}>{result.targetSla}</p>
                    </div>
                  </div>
                </div>

                <div className={styles.resultFooter}>
                  <span className={styles.relatedText}>
                    Related Case: <strong>{result.caseStudy}</strong>
                  </span>
                  <Button variant="glow" size="sm" onClick={handleScrollToCta}>
                    Request Briefing
                  </Button>
                </div>
              </div>
            ) : (
              <div className={styles.placeholderCard}>
                <Terminal size={32} className={styles.placeholderIcon} />
                <p className={styles.placeholderText}>
                  Select your advisor settings and click analyze to output your custom infrastructure proposal.
                </p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AIShowcase;
