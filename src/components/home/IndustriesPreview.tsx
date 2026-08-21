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
import Masonry from '../animations/Masonry';

export const IndustriesPreview: React.FC = () => {
  return (
    <section className={styles.section}>
      <Container>
        <SectionTitle
          badge="Markets We Empower"
          title="Industry Specialization & Compliance"
          subtitle="We engineer solutions tailored to complex operational demands and strict regulatory landscapes."
        />

        <div style={{ height: '900px', width: '100%', marginTop: '3rem' }}>
          <Masonry
            items={solutions.map((ind, index) => {
              const images = [
                'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop', // AI
                'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop', // Automation
                'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop', // Digital Trans
                'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop', // Enterprise
                'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop', // E-commerce
                'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=600&auto=format&fit=crop', // Cloud
                'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop', // Custom
                'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop', // Analytics
                'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop', // CX
              ];
              const heights = [600, 800, 500, 750, 650, 850, 550, 700, 600];
              return {
                id: ind.id,
                name: ind.name,
                img: images[index % images.length],
                url: `/solutions/${ind.slug}`,
                height: heights[index % heights.length],
              };
            })}
            animateFrom="bottom"
            duration={1}
            stagger={0.1}
            colorShiftOnHover={true}
          />
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
