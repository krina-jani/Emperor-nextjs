import React from 'react';
import { cn } from '../../lib/utils';
import styles from './Badge.module.css';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'outline',
  ...props
}) => {
  return (
    <span className={cn(styles.badge, styles[variant], className)} {...props} />
  );
};

export default Badge;
