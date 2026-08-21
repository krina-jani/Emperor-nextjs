import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'Modern E-commerce Platform',
    slug: 'ecommerce-platform',
    client: 'Enterprise Retailer',
    category: 'E-commerce Website Development',
    industry: 'Retail',
    summary: 'A fully-featured online store with advanced filtering, product search, and secure checkouts.',
    description: 'We built a high-performance e-commerce platform that enables customers to browse, filter, and purchase items smoothly. The system connects to secure payment processors and includes custom admin stock management panels.',
    challenge: 'The client had a slow legacy storefront that caused high cart abandonment rates on mobile devices and suffered from delayed stock count updates.',
    solution: 'We engineered a React-based client interface connected to an optimized Node.js transactional API, utilising document databases for product schemas and Stripe hooks for secure purchasing.',
    results: [
      'Increased mobile checkout completions by 28% in 3 months.',
      'Reduced average inventory sync cycles to real-time.',
      'Ensured fast page loading times under high visitor traffic.'
    ],
    metrics: [
      { label: 'Mobile Sales', value: '+28%' },
      { label: 'Inventory Sync', value: 'Real-time' },
      { label: 'Uptime Score', value: '99.98%' }
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Git'],
    imageUrl: '/images/work/ecommerce.jpg',
    featured: true,
    completionDate: '2026-02'
  },
  {
    id: 'corporate-website',
    title: 'Corporate Business Website',
    slug: 'corporate-website',
    client: 'Logistics Group',
    category: 'Corporate Website Development',
    industry: 'Logistics',
    summary: 'A professional corporate website with CMS integration and lead generation functionality.',
    description: 'We created an editorial business website that showcases the client services, manages blog updates, and integrates contact forms to feed incoming leads directly to their sales database.',
    challenge: 'The corporate group lacked a mobile-optimized web presence, and editing pages required developer tickets, slowing down marketing updates.',
    solution: 'We developed a custom WordPress theme utilizing secure, reusable layout blocks, allowing the team to publish articles and edit landing copy dynamically.',
    results: [
      'Increased organic search visitor impressions by 45% in 6 months.',
      'Reduced content publishing timelines to less than 15 minutes.',
      'Completed a security audit with zero vulnerabilities found.'
    ],
    metrics: [
      { label: 'Search Traffic', value: '+45%' },
      { label: 'Publishing Time', value: '<15m' },
      { label: 'Vulnerabilities', value: '0' }
    ],
    technologies: ['WordPress', 'PHP', 'HTML5', 'CSS3', 'MySQL'],
    imageUrl: '/images/work/corporate.jpg',
    featured: true,
    completionDate: '2025-11'
  },
  {
    id: 'custom-web-application',
    title: 'Custom Web Application Dashboard',
    slug: 'custom-web-application',
    client: 'Management Group',
    category: 'Custom Web Application Development',
    industry: 'Finance',
    summary: 'A custom business tracking dashboard with user role restrictions and real-time updates.',
    description: 'We built a secure client dashboard that connects database endpoints, handles authentication, and lists operational statistics on live interactive graphs.',
    challenge: 'Staff were tracking operational files across multiple spreadsheets, causing sync conflicts and making reporting difficult.',
    solution: 'We engineered a Next.js web application utilizing secure server-side rendering and database clusters, adding role-based access rules to guard files.',
    results: [
      'Eliminated data conflicts by centralizing records.',
      'Reduced weekly report generation times from hours to seconds.',
      'Secured routes with token-based HTTP-only cookies.'
    ],
    metrics: [
      { label: 'Conflicts Removed', value: '100%' },
      { label: 'Report Load Time', value: '<1s' },
      { label: 'Access Control', value: 'RBAC' }
    ],
    technologies: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Docker'],
    imageUrl: '/images/work/dashboard.jpg',
    featured: true,
    completionDate: '2026-04'
  }
];
