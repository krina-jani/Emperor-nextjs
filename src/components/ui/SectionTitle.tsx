import React from 'react';
import { cn } from '../../lib/utils';
import styles from './SectionTitle.module.css';

interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  gradientTitle?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  className,
  badge,
  title,
  subtitle,
  align = 'center',
  gradientTitle = true,
  ...props
}) => {
  const formatTitle = (titleStr: string) => {
    if (!gradientTitle) return titleStr;
    const words = titleStr.split(' ');
    if (words.length <= 1) return titleStr;
    const lastWord = words.pop();
    const remaining = words.join(' ');
    return (
      <>
        {remaining} <span className={styles.highlight}>{lastWord}</span>
      </>
    );
  };

  return (
    <div className={cn(styles.wrapper, styles[align], className)} {...props}>
      {badge && (
        <span className={styles.badge}>
          {badge}
        </span>
      )}
      <h2 className={styles.title}>
        {formatTitle(title)}
      </h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
