'use client';

import React from 'react';
import PillNav from '../navigation/PillNav';
import { mainNavLinks } from '../../data/navigation';

interface NavbarProps {
  className?: string;
}

// Map the nav links data to PillNav's item format
const navItems = mainNavLinks.map((link) => ({
  label: link.label.replace(/\n/g, ' '),
  href: link.href,
}));

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <div className={className}>
      <PillNav
        items={navItems}
        baseColor="#f4f1ea"
        pillColor="#142134"
        pillTextColor="#142134"
        hoveredPillTextColor="#f4f1ea"
        ease="power3.out"
      />
    </div>
  );
};

export default Navbar;
