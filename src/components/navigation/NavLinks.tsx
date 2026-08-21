'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '../../lib/utils';
import { mainNavLinks } from '../../data/navigation';
import styles from './NavLinks.module.css';
import { ChevronDown } from 'lucide-react';

interface NavLinksProps {
  onItemClick?: () => void;
  className?: string;
  horizontal?: boolean;
}

export const NavLinks: React.FC<NavLinksProps> = ({
  onItemClick,
  className,
  horizontal = true,
}) => {
  const pathname = usePathname() || '/';
  const containerRef = useRef<HTMLUListElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({
    transform: 'translateX(0px)',
    width: '0px',
    opacity: 0,
  });

  // Calculate sliding active underline position based on page pathname
  useEffect(() => {
    if (!horizontal || !containerRef.current) return;

    const updateIndicator = () => {
      const container = containerRef.current;
      if (!container) return;

      const activeLinkEl = container.querySelector(`.${styles.active}`);
      if (activeLinkEl) {
        const parentLi = activeLinkEl.closest('li');
        if (parentLi) {
          const offsetLeft = parentLi.offsetLeft;
          const offsetWidth = parentLi.offsetWidth;
          
          setIndicatorStyle({
            transform: `translateX(${offsetLeft}px)`,
            width: `${offsetWidth}px`,
            opacity: 1,
          });
          return;
        }
      }
      setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
    };

    updateIndicator();
    const timeoutId = setTimeout(updateIndicator, 150); // Account for routing & CSS transition lag

    window.addEventListener('resize', updateIndicator);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', updateIndicator);
    };
  }, [pathname, horizontal]);

  const isLinkActive = (linkHref: string) => {
    if (linkHref === '/') return pathname === '/';
    // Remove the leading slash hash since we are using multi-page links
    const cleanHref = linkHref.startsWith('/#') ? linkHref.replace('/#', '/') : linkHref;
    if (cleanHref === '/') return pathname === '/';
    return pathname.startsWith(cleanHref);
  };

  return (
    <ul ref={containerRef} className={cn(styles.navLinks, horizontal ? styles.row : styles.column, className)}>
      {mainNavLinks.map((link) => {
        const isLinkActiveVal = isLinkActive(link.href);
        const hasChildren = link.children && link.children.length > 0;

        return (
          <li key={link.href} className={cn(styles.navItem, hasChildren && styles.hasDropdown)}>
            {hasChildren ? (
              <>
                <button
                  type="button"
                  className={cn(styles.linkBtn, isLinkActiveVal && styles.active)}
                >
                  {link.label}
                  <ChevronDown className={styles.chevron} size={14} />
                </button>
                <div className={styles.dropdown}>
                  <ul className={styles.dropdownMenu}>
                    {link.children?.map((subLink) => {
                      const isSubActive = pathname === subLink.href;
                      return (
                        <li key={subLink.href} className={styles.dropdownItem}>
                          <Link
                            href={subLink.href}
                            onClick={onItemClick}
                            className={cn(
                              styles.dropdownLink,
                              isSubActive && styles.activeDropdownLink
                            )}
                          >
                            {subLink.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </>
            ) : (
              <Link
                href={link.href}
                onClick={onItemClick}
                className={cn(styles.link, isLinkActiveVal && styles.active)}
              >
                {link.label}
              </Link>
            )}
          </li>
        );
      })}
      
      {horizontal && (
        <div className={styles.slidingIndicator} style={indicatorStyle} />
      )}
    </ul>
  );
};

export default NavLinks;
