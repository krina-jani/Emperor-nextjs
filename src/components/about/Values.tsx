import React from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Icon from '../ui/Icon';
import FadeIn from '../animations/FadeIn';
import { getStaggerDelay } from '../../lib/animations';
import styles from './Values.module.css';

const valuesData = [
  {
    title: 'Extreme Quality Integration',
    desc: 'We do not build minimum viable products. We engineer systems designed for production speed, zero leakages, and clean compliance auditing log sheets.',
    iconName: 'Award'
  },
  {
    title: 'NDA-Backed Transparency',
    desc: 'We treat client code, data structures, and business logic with absolute confidentiality. Isolate VPC environments, execute secure updates, and maintain strict data boundaries.',
    iconName: 'Lock'
  },
  {
    title: 'Continuous System Reinforcement',
    desc: 'Static code drifts. We continually review telemetry signals, monitor model accuracy, and optimize routing variables to reinforce your operational performance.',
    iconName: 'RotateCw'
  }
];

export const Values: React.FC = () => {
  return (
    <section className={styles.section}>
      <Container>
        <SectionTitle
          badge="Our Values"
          title="Founding Engineering Principles"
          subtitle="Every line of code we write, every pipeline we build, and every model we train is governed by these core rules."
        />

        <div className="grid grid-cols-1 grid-cols-md-3 grid-cols-lg-3">
          {valuesData.map((val, index) => (
            <FadeIn
              key={val.title}
              delay={getStaggerDelay(index, 100)}
              direction="up"
            >
              <div className={styles.card}>
                <div className={styles.iconBox}>
                  <Icon name={val.iconName} size={22} />
                </div>
                <h3 className={styles.cardTitle}>{val.title}</h3>
                <p className={styles.desc}>{val.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Values;
