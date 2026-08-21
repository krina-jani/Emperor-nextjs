'use client';

import React, { useState, useRef, useEffect } from 'react';
import { cn } from '../../lib/utils';
import styles from './DropdownMenu.module.css';

interface DropdownMenuProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  align?: 'left' | 'right' | 'center';
  className?: string;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  trigger,
  children,
  align = 'center',
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className={cn(styles.container, className)}>
      <div onClick={() => setIsOpen(!isOpen)} className={styles.trigger}>
        {trigger}
      </div>
      {isOpen && (
        <div className={cn(styles.dropdown, styles[align])}>
          <div className={styles.content}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
