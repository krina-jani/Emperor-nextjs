'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Search } from 'lucide-react';
import Container from '../ui/Container';
import styles from './TechnologyRadar.module.css';

import { TechLogo } from './TechLogo';
import OptionWheel from '../ui/OptionWheel';

// Technology categories exactly as shown in the shared image
const CATEGORIES = [
  'All',
  'Mobile',
  'Frontend',
  'Backend',
  'Databases',
  'AI/ML',
  'Cloud & DevOps',
  'Automation & APIs'
] as const;

type Category = typeof CATEGORIES[number];

interface TechItem {
  name: string;
  category: Category;
}

const TECHNOLOGIES_DATA: TechItem[] = [
  // Mobile
  { name: 'iOS', category: 'Mobile' },
  { name: 'React Native', category: 'Mobile' },
  { name: 'Android', category: 'Mobile' },
  { name: 'Flutter', category: 'Mobile' },
  { name: 'Unity 3D', category: 'Mobile' },
  { name: 'Xamarin', category: 'Mobile' },
  { name: 'Wearable Devices', category: 'Mobile' },
  { name: 'Apple TV', category: 'Mobile' },
  { name: 'Chromecast', category: 'Mobile' },
  { name: 'iBeacon', category: 'Mobile' },
  { name: 'AR App', category: 'Mobile' },
  { name: 'VR App', category: 'Mobile' },
  { name: 'IONIC', category: 'Mobile' },

  // Frontend
  { name: 'Next.js', category: 'Frontend' },
  { name: 'React', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Vue.js', category: 'Frontend' },

  // Backend
  { name: 'ASP.NET / .NET', category: 'Backend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: 'Go (Golang)', category: 'Backend' },
  { name: 'Laravel / PHP', category: 'Backend' },
  { name: 'NestJS', category: 'Backend' },

  // Databases
  { name: 'PostgreSQL', category: 'Databases' },
  { name: 'pgvector', category: 'Databases' },
  { name: 'Redis', category: 'Databases' },
  { name: 'MongoDB', category: 'Databases' },
  { name: 'Qdrant / Pinecone', category: 'Databases' },

  // AI/ML
  { name: 'OpenAI / GPT-4o', category: 'AI/ML' },
  { name: 'Anthropic Claude', category: 'AI/ML' },
  { name: 'LangChain / LlamaIndex', category: 'AI/ML' },
  { name: 'LlamaIndex', category: 'AI/ML' },
  { name: 'FastAPI', category: 'AI/ML' },

  // Cloud & DevOps
  { name: 'AWS', category: 'Cloud & DevOps' },
  { name: 'Docker', category: 'Cloud & DevOps' },
  { name: 'GitHub Actions', category: 'Cloud & DevOps' },
  { name: 'Cloudflare', category: 'Cloud & DevOps' },
  { name: 'Terraform', category: 'Cloud & DevOps' },

  // Automation & APIs
  { name: 'n8n', category: 'Automation & APIs' },
  { name: 'REST / Webhooks', category: 'Automation & APIs' },
  { name: 'Stripe', category: 'Automation & APIs' },
  { name: 'WhatsApp & Twilio', category: 'Automation & APIs' }
];

export const TechnologyRadar: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedWheelIndex, setSelectedWheelIndex] = useState(0);

  // Reset selected index when filters change
  useEffect(() => {
    setSelectedWheelIndex(0);
  }, [activeCategory, searchQuery]);

  // Filter and search logic
  const filteredTechnologies = useMemo(() => {
    return TECHNOLOGIES_DATA.filter((tech) => {
      const matchesCategory =
        activeCategory === 'All' || tech.category === activeCategory;
      const matchesSearch = tech.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const selectedTech = filteredTechnologies[selectedWheelIndex];

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <span className={styles.badge}>
            <span className={styles.badgeDot} />
            TECHNOLOGY RADAR & STACK
          </span>
          <h2 className={styles.title}>
            Explore Our Tech Stack
          </h2>
          <p className={styles.desc}>
            {/* From native mobile and cross-platform ecosystems to modern frontend frameworks, high-throughput backends, vector databases, and autonomous AI pipelines. */}
          </p>
        </div>

        {/* Controls: Category Filter Tabs & Search Box */}
        <div className={styles.controls}>
          <div className={styles.filters}>
            {CATEGORIES.map((category) => (
              <button
                key={category}
                className={`${styles.filterBtn} ${
                  activeCategory === category ? styles.filterBtnActive : ''
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className={styles.searchContainer}>
            <Search className={styles.searchIcon} size={18} />
            <input
              type="text"
              placeholder="Search technologies..."
              className={styles.searchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Mobile Wheel View (Only visible on mobile/responsive) */}
        <div className={styles.wheelContainer}>
          {filteredTechnologies.length > 0 ? (
            <div className={styles.wheelWrapper}>
              <div className={styles.wheelLeft}>
                <OptionWheel
                  key={`${activeCategory}-${searchQuery}`}
                  items={filteredTechnologies.map((tech) => tech.name)}
                  defaultSelected={0}
                  onChange={(idx) => setSelectedWheelIndex(idx)}
                  side="left"
                  fontSize={1.75}
                  spacing={1.6}
                  curve={1.2}
                  tilt={12}
                  inset={24}
                  textColor="rgba(255, 255, 255, 0.35)"
                  activeColor="#ffffff"
                />
              </div>

              <div className={styles.wheelRight}>
                {selectedTech && (
                  <div className={styles.floatingCard}>
                    <div className={styles.floatingCardInner}>
                      <div className={styles.wheelLogoBox}>
                        <TechLogo name={selectedTech.name} size={64} />
                      </div>
                      <div className={styles.wheelLogoInfo}>
                        <h4 className={styles.wheelLogoName}>{selectedTech.name}</h4>
                        <span className={styles.wheelLogoCat}>{selectedTech.category}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className={styles.noResultsMobile}>
              No technologies found matching your filter or query.
            </div>
          )}
        </div>

        {/* Technologies Grid */}
        <div className={styles.grid}>
          {filteredTechnologies.length > 0 ? (
            filteredTechnologies.map((tech) => (
              <div key={tech.name} className={styles.card}>
                <div className={styles.iconBox}>
                  <TechLogo name={tech.name} size={32} />
                </div>
                <div className={styles.info}>
                  <h3 className={styles.name}>{tech.name}</h3>
                  <span className={styles.category}>{tech.category}</span>
                </div>
              </div>
            ))
          ) : (
            <div className={styles.noResults}>
              No technologies found matching your filter or query.
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default TechnologyRadar;
