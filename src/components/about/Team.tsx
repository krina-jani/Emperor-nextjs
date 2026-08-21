import React from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import FadeIn from '../animations/FadeIn';
import { getStaggerDelay } from '../../lib/animations';
import styles from './Team.module.css';
const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);

const teamMembers = [
  {
    name: 'Alexander Vance',
    role: 'Chief Architect & Founder',
    dept: 'Systems Engineering',
    bio: 'Alexander spent a decade designing low-latency trade routing and signal pipelines for banking grids before founding Emperor.',
    initial: 'AV'
  },
  {
    name: 'Elena Rostova',
    role: 'Principal ML Scientist',
    dept: 'Applied AI Lab',
    bio: 'Elena specializes in neural net quantization and Transformer architectures, adapting heavy LLMs to run on-device or on ESP32 chips.',
    initial: 'ER'
  },
  {
    name: 'Christopher Ward',
    role: 'VP of Cloud Infrastructure',
    dept: 'Cloud & DevOps',
    bio: 'Christopher constructs secure VPC networks, automated release triggers, and self-healing Kubernetes clusters for global scale.',
    initial: 'CW'
  }
];

export const Team: React.FC = () => {
  return (
    <section className={styles.section}>
      <Container>
        <SectionTitle
          badge="Principal Squad"
          title="Meet Our Systems Architects"
          subtitle="We embed senior engineering specialists directly into your operational pipelines to eliminate bottlenecks."
        />

        <div className="grid grid-cols-1 grid-cols-md-3 grid-cols-lg-3">
          {teamMembers.map((member, index) => (
            <FadeIn
              key={member.name}
              delay={getStaggerDelay(index, 100)}
              direction="up"
            >
              <div className={styles.card}>
                {/* Simulated profile avatar */}
                <div className={styles.avatarWrapper}>
                  <div className={styles.avatar}>
                    <span>{member.initial}</span>
                  </div>
                </div>

                <div className={styles.header}>
                  <h3 className={styles.name}>{member.name}</h3>
                  <span className={styles.role}>{member.role}</span>
                  <span className={styles.dept}>{member.dept}</span>
                </div>

                <p className={styles.bio}>{member.bio}</p>

                <div className={styles.socials}>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                    <LinkedinIcon size={16} />
                  </a>
                  <a href="https://github.com" target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="GitHub">
                    <GithubIcon size={16} />
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Team;
