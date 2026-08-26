'use client';

import React, { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProps {
  children: React.ReactNode;
}

export const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  useEffect(() => {
    // Reset scroll position to top before initializing scroll systems
    if (typeof window !== 'undefined') {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      window.scrollTo(0, 0);
    }

    // Instantiate Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    // Expose Lenis globally to coordinate navigation transitions
    if (typeof window !== 'undefined') {
      (window as any).lenis = lenis;
    }

    // Link Lenis scroll event to ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Integrate Lenis RAF with GSAP Ticker
    const tickerUpdate = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerUpdate);

    // Disable lag smoothing to align triggers perfectly
    gsap.ticker.lagSmoothing(0);

    // Trigger an initial refresh of ScrollTrigger after DOM is fully painted
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    // Handle clicks on hash links smoothly via Lenis
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');

      if (!anchor) return;

      let href = anchor.getAttribute('href');
      if (!href) return;

      // Handle both "/#section" and "#section" on the homepage
      const isHome = window.location.pathname === '/';
      if (isHome && href.startsWith('/#')) {
        href = href.slice(1);
      }

      if (href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.slice(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          lenis.scrollTo(targetElement, {
            offset: -80, // Offset for sticky header
            duration: 1.2,
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // Debounced ScrollTrigger refresh on window resize
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 250);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      gsap.ticker.remove(tickerUpdate);
      lenis.destroy();
      if (typeof window !== 'undefined') {
        (window as any).lenis = null;
      }
      clearTimeout(refreshTimer);
      clearTimeout(resizeTimeout);
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
