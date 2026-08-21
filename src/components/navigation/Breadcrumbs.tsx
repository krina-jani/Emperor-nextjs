'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '../../lib/utils';
import styles from './Breadcrumbs.module.css';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ className }) => {
  const pathname = usePathname() || '/';
  if (pathname === '/') return null;

  const segments = pathname.split('/').filter(Boolean);

  const getCleanLabel = (segment: string) => {
    // Mapping known slugs to clear labels
    const customMappings: Record<string, string> = {
      'ai-data-science': 'AI & Data Science',
      'web-engineering': 'Web Engineering',
      'mobile-solutions': 'Mobile Solutions',
      'cloud-devops': 'Cloud & DevOps',
      'smart-devices-iot': 'Smart Devices (IoT)',
      'nextjs-react': 'Next.js & React',
      'python-pytorch': 'Python & PyTorch',
      'kubernetes-aws': 'Kubernetes & AWS',
      'flutter-swift': 'Flutter & Swift',
      'fintech': 'FinTech',
      'healthtech': 'HealthTech',
      'logistics': 'Logistics',
      'retail': 'Smart Retail',
      'ai': 'AI Lab',
    };

    if (customMappings[segment]) return customMappings[segment];

    // Default capitalization and dash-replacing
    return segment
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <nav aria-label="breadcrumb" className={cn(styles.nav, className)}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href="/" className={styles.link}>
            <Home size={14} />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {segments.map((segment, index) => {
          const href = `/${segments.slice(0, index + 1).join('/')}`;
          const isLast = index === segments.length - 1;
          const label = getCleanLabel(segment);

          return (
            <React.Fragment key={href}>
              <li className={styles.separator} aria-hidden="true">
                <ChevronRight size={12} />
              </li>
              <li className={styles.item}>
                {isLast ? (
                  <span className={styles.current} aria-current="page">
                    {label}
                  </span>
                ) : (
                  <Link href={href} className={styles.link}>
                    {label}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
