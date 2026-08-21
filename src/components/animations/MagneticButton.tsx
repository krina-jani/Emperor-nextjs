'use client';

import React, { useRef, useState } from 'react';
import { cn } from '../../lib/utils';
import styles from './MagneticButton.module.css';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  range?: number; // Distance threshold for pull effect
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className,
  range = 35,
}) => {
  const domRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!domRef.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = domRef.current.getBoundingClientRect();
    
    // Center coordinates
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Distance vector
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;

    // Pull translation
    const pullX = deltaX * 0.35;
    const pullY = deltaY * 0.35;

    // Limit maximum pull distance
    const dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    if (dist < range) {
      setPosition({ x: pullX, y: pullY });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={domRef}
      className={cn(styles.magneticWrapper, className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: position.x === 0 ? 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)' : 'none',
      }}
    >
      {children}
    </div>
  );
};

export default MagneticButton;
