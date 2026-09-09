'use client';

import React, { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number; // in milliseconds
  suffix?: string;
  prefix?: string;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  from = 1,
  to,
  duration = 1800,
  suffix = '',
  prefix = '',
  className = '',
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState<number>(from);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
    const element = ref.current;
    if (!element) return;

    let frameId: number;
    let startTime: number | null = null;

    // Quartic ease out: energetic initial movement, silky deceleration
    const easeOutQuart = (t: number): number => 1 - Math.pow(1 - t, 4);

    const startCountUp = () => {
      if (frameId) cancelAnimationFrame(frameId);
      startTime = null;

      const step = (timestamp: number) => {
        if (startTime === null) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentVal = Math.round(from + (to - from) * easeOutQuart(progress));

        setCount(currentVal);

        if (progress < 1) {
          frameId = requestAnimationFrame(step);
        }
      };

      frameId = requestAnimationFrame(step);
    };

    const resetCount = () => {
      if (frameId) cancelAnimationFrame(frameId);
      setCount(from);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCountUp();
          } else {
            // Reset whenever element leaves the viewport so it runs again every time it appears
            resetCount();
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [from, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {isMounted ? count : to}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
