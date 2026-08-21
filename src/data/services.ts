import { Service } from '../types/service';

export const services: Service[] = [
  {
    id: 'uiux-design',
    title: 'UI/UX Design',
    slug: 'uiux-design',
    iconName: 'Figma',
    image3d: '/images/services/ui_ux_3d.png',
    colorTheme: 'blue',
    tag: 'UI/UX Design',
    summary: 'Modern, intuitive, and engaging user interfaces designed to improve usability and customer engagement across all digital platforms.',
    description: 'We craft human-centric layouts focused on usability, accessibility, and high visual conversion rates.',
    features: ['User Journey Mapping', 'High-Fidelity Wireframes', 'Responsive Web Planning'],
    benefits: ['Ensure frictionless navigation', 'Review layouts before code', 'Unify brand communications'],
    process: [
      { stepNumber: 1, title: 'User Research', description: 'Map target audiences.' },
      { stepNumber: 2, title: 'Prototyping', description: 'Design click-through models.' }
    ],
    technologies: ['Figma', 'Adobe XD'],
    faqs: []
  },
  {
    id: 'corporate-development',
    title: 'Corporate & MNC Website Development',
    slug: 'corporate-development',
    iconName: 'Building',
    image3d: '/images/services/corp_web_3d.png',
    colorTheme: 'pink',
    tag: 'Enterprise',
    summary: 'Professional, highly responsive websites built to establish brand credibility and scale your enterprise digital presence.',
    description: 'We design and build bespoke corporate web platforms that elevate your brand credibility and streamline communications.',
    features: ['Custom Brand Identity', 'Advanced CMS', 'SEO-Optimized Foundations'],
    benefits: ['Establish enterprise credibility', 'Manage corporate content effortlessly', 'Attract high-intent leads'],
    process: [
      { stepNumber: 1, title: 'Discovery', description: 'Analyze brand guidelines.' },
      { stepNumber: 2, title: 'Build', description: 'Assemble CMS and themes.' }
    ],
    technologies: ['Next.js', 'React', 'WordPress'],
    faqs: []
  },
  {
    id: 'seo-development',
    title: 'SEO-Friendly Website Development',
    slug: 'seo-development',
    iconName: 'Search',
    image3d: '/images/services/seo_web_3d.png',
    colorTheme: 'yellow',
    tag: 'SEO & Search',
    summary: 'Optimized search-engine-ready websites featuring clean code, fast load times, and superior user experience to boost rankings.',
    description: 'We build websites following the latest SEO guidelines to ensure they rank high and load instantly.',
    features: ['Core Web Vitals Optimization', 'Semantic HTML5', 'Advanced Meta Data'],
    benefits: ['Higher search rankings', 'Increased organic traffic', 'Better accessibility'],
    process: [
      { stepNumber: 1, title: 'Audit', description: 'Keyword and structure audit.' },
      { stepNumber: 2, title: 'Implement', description: 'Build fast, semantic templates.' }
    ],
    technologies: ['HTML5', 'Next.js', 'Google Analytics'],
    faqs: []
  },
  {
    id: 'gaming-development',
    title: 'Gaming Website Development',
    slug: 'gaming-development',
    iconName: 'Gamepad',
    image3d: '/images/services/gaming_web_3d.png',
    colorTheme: 'green',
    tag: 'Interactive',
    summary: 'Immersive, high-performance web platforms for gaming communities, featuring interactive interfaces and fast speeds.',
    description: 'We engineer interactive gaming hubs, clan websites, and esports platforms that handle high traffic.',
    features: ['Real-time leaderboards', 'Community forums', 'Rich media galleries'],
    benefits: ['Engage gaming communities', 'High-performance interactive UI', 'Scalable for launches'],
    process: [
      { stepNumber: 1, title: 'Design', description: 'Create immersive dark-mode UIs.' },
      { stepNumber: 2, title: 'Develop', description: 'Integrate real-time APIs.' }
    ],
    technologies: ['React', 'WebGL', 'Node.js'],
    faqs: []
  },
  {
    id: 'web-app-development',
    title: 'Web Application Development',
    slug: 'web-app-development',
    iconName: 'Code2',
    image3d: '/images/services/web_app_3d.png',
    colorTheme: 'indigo',
    tag: 'Web Apps',
    summary: 'Secure, scalable, and custom web applications designed to streamline complex business workflows and operational processes.',
    description: 'We engineer complex web systems and dashboards built to solve specific operations.',
    features: ['Custom Admin Dashboards', 'Secure User Authentication', 'Third-party APIs'],
    benefits: ['Streamline business tasks', 'Protect database inputs', 'Connect external systems'],
    process: [
      { stepNumber: 1, title: 'Database Design', description: 'Model relational schemas.' },
      { stepNumber: 2, title: 'API Setup', description: 'Write secure backend routes.' }
    ],
    technologies: ['Next.js', 'React', 'Node.js'],
    faqs: []
  },
  {
    id: 'static-dynamic-private',
    title: 'Static, Dynamic & Private Websites',
    slug: 'static-dynamic-private',
    iconName: 'Cloud',
    image3d: '/images/services/static_web_3d.png',
    colorTheme: 'blueGray',
    tag: 'Portals',
    summary: 'Tailored static pages, content-driven dynamic platforms, and secure private portals that are responsive and easy to manage.',
    description: 'Flexible hosting and deployment options for public-facing or secure internal web portals.',
    features: ['Static Site Generation (SSG)', 'Server-Side Rendering (SSR)', 'Role-based access'],
    benefits: ['Extremely fast load times', 'Flexible content management', 'Secure private networks'],
    process: [
      { stepNumber: 1, title: 'Architecture', description: 'Determine SSG vs SSR needs.' },
      { stepNumber: 2, title: 'Deployment', description: 'Setup edge networks.' }
    ],
    technologies: ['Vercel', 'AWS', 'Next.js'],
    faqs: []
  },
  {
    id: 'ecommerce-development',
    title: 'E-Commerce Website Development',
    slug: 'ecommerce-development',
    iconName: 'ShoppingBag',
    image3d: '/images/services/ecommerce_3d.png',
    colorTheme: 'purple',
    tag: 'E-Commerce',
    summary: 'Robust online stores with product catalogs, secure payment integrations, order tracking, and frictionless checkout funnels.',
    description: 'We develop secure, reliable, and scalable online stores designed to optimize checkout funnels.',
    features: ['Payment Gateway Integration', 'Advanced Catalog Filtering', 'Inventory Sync'],
    benefits: ['Deliver seamless checkouts', 'Track sales directly', 'Enhance user conversions'],
    process: [
      { stepNumber: 1, title: 'Catalog Mapping', description: 'Structure product variations.' },
      { stepNumber: 2, title: 'Core Shop Assembly', description: 'Deploy payment modules.' }
    ],
    technologies: ['WooCommerce', 'Shopify', 'Stripe'],
    faqs: []
  },
  {
    id: 'custom-software',
    title: 'Custom Software Solutions',
    slug: 'custom-software',
    iconName: 'Cpu',
    image3d: '/images/services/custom_soft_3d.png',
    colorTheme: 'teal',
    tag: 'Custom Code',
    summary: 'Bespoke internal systems, workflow automation tools, and specialized software designed to maximize operational efficiency.',
    description: 'Bespoke automation scripts, internal ERP tools, and specialized process software.',
    features: ['Workflow Automation', 'Legacy System Integration', 'Cloud Native Architecture'],
    benefits: ['Reduce manual labor', 'Scale internal operations', 'Increase overall ROI'],
    process: [
      { stepNumber: 1, title: 'Process Audit', description: 'Map out manual inefficiencies.' },
      { stepNumber: 2, title: 'System Build', description: 'Develop and test custom tools.' }
    ],
    technologies: ['Python', 'Docker', 'PostgreSQL'],
    faqs: []
  }
];
