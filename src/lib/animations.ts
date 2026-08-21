/**
 * Default IntersectionObserver configurations for scroll-based reveals.
 */
export const defaultRevealConfig = {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px',
  triggerOnce: true
};

/**
 * Returns dynamic delays to stagger item renders in grids.
 */
export function getStaggerDelay(index: number, baseMs = 100, maxMs = 800): string {
  const delay = Math.min(index * baseMs, maxMs);
  return `${delay}ms`;
}
