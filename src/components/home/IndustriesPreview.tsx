import React from 'react';
import Link from 'next/link';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import Icon from '../ui/Icon';
import FadeIn from '../animations/FadeIn';
import { solutions } from '../../data/solutions';
import { getStaggerDelay } from '../../lib/animations';
import styles from './IndustriesPreview.module.css';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export const IndustriesPreview: React.FC = () => {
  return (
    <section className={styles.section}>
      <Container>
        <SectionTitle
          badge="Markets We Empower"
          title="Industry Specialization & Compliance"
          subtitle="We engineer solutions tailored to complex operational demands and strict regulatory landscapes."
        />

        <div className="grid grid-cols-1 grid-cols-md-2 grid-cols-lg-2">
          {solutions.map((ind, index) => (
            <FadeIn
              key={ind.id}
              delay={getStaggerDelay(index, 150)}
              direction="up"
              className={styles.cardWrapper}
            >
              <div className={styles.card}>
                <div className={styles.topRow}>
                  <div className={styles.iconBox}>
                    <Icon name={ind.iconName} size={26} />
                  </div>
                  <h3 className={styles.name}>{ind.name}</h3>
                </div>

                <p className={styles.summary}>{ind.summary}</p>

                {/* Technologies tags list */}
                <div className={styles.complianceBlock}>
                  <span className={styles.subHeading}>
                    <ShieldCheck size={14} className={styles.shieldIcon} />
                    Technologies Used
                  </span>
                  <div className={styles.badgeRow}>
                    {ind.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className={styles.badge}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className={styles.footer}>
                  <Link href={`/solutions/${ind.slug}`} className={styles.link}>
                    Explore Solution
                    <ArrowRight size={14} className={styles.arrow} />
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className={styles.bottomAction}>
          <Link href="/solutions">
            <Button variant="outline" size="lg">
              Check All Solutions
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default IndustriesPreview;
