import { NavLink } from '../types/common';

export const mainNavLinks: NavLink[] = [
  { label: 'HOME', href: '/' },
  { label: 'SERVICES', href: '/services' },
  { label: 'SOLUTIONS', href: '/solutions' },
  { label: 'PROJECTS', href: '/projects' },
  { label: 'HOW WE WORK', href: '/how-we-work' },
  { label: 'ABOUT US', href: '/about' },
  { label: 'CONTACT US', href: '/contact' }
];

export const footerLinks = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Work', href: '/projects' },
    { label: 'AI Lab & Research', href: '/ai' },
    { label: 'Careers', href: '/about#careers' }
  ],
  services: [
    { label: 'Corporate Website', href: '/services#corporate' },
    { label: 'E-commerce Platform', href: '/services#ecommerce' },
    { label: 'Web App Development', href: '/services#webapp' },
    { label: 'UI/UX Design', href: '/services#uiux' }
  ],
  solutions: [
    { label: 'AI Solutions', href: '/solutions#ai' },
    { label: 'Business Automation', href: '/solutions#automation' },
    { label: 'Digital Transformation', href: '/solutions#digital' },
    { label: 'E-Commerce Solutions', href: '/solutions#ecommerce' }
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Security Standards', href: '/security' }
  ]
};
