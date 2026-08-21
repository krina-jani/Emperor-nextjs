export interface SolutionItem {
  id: string;
  name: string;
  slug: string;
  iconName: string;
  summary: string;
  description: string;
  features: string[];
  technologies: string[];
  relatedProjects: string[];
}

export const solutions: SolutionItem[] = [
  {
    id: 'ai-solutions',
    name: 'AI Solutions',
    slug: 'ai-solutions',
    iconName: 'Brain',
    summary: 'Intelligent automation, predictive models, and smart decision-making tools tailored for your business.',
    description: 'We integrate advanced Artificial Intelligence to solve complex business problems. From generative AI to machine learning and natural language processing, our solutions reduce manual effort and unlock hidden insights from your data.',
    features: [
      'Custom Machine Learning Models',
      'Generative AI Integration',
      'Natural Language Processing (NLP)',
      'Predictive Analytics'
    ],
    technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Python'],
    relatedProjects: []
  },
  {
    id: 'business-automation',
    name: 'Business Automation',
    slug: 'business-automation',
    iconName: 'Settings',
    summary: 'Streamline repetitive tasks and optimize workflows to improve overall operational efficiency.',
    description: 'Eliminate manual processes and reduce human error with intelligent business automation. We map out your workflows and deploy software that connects systems, automates tasks, and accelerates operations.',
    features: [
      'Workflow Optimization',
      'RPA (Robotic Process Automation)',
      'API Integrations',
      'Automated Reporting'
    ],
    technologies: ['Node.js', 'Python', 'AWS Step Functions', 'Zapier'],
    relatedProjects: []
  },
  {
    id: 'digital-transformation',
    name: 'Digital Transformation',
    slug: 'digital-transformation',
    iconName: 'RefreshCw',
    summary: 'Modernize legacy systems and adopt digital-first strategies across your entire organization.',
    description: 'Navigate the shift from outdated legacy software to modern, scalable digital platforms. We guide your organization through end-to-end digital transformation, ensuring seamless transitions with minimal downtime.',
    features: [
      'Legacy System Modernization',
      'Technology Consulting',
      'Cloud Migration',
      'Process Digitization'
    ],
    technologies: ['React', 'Next.js', 'Docker', 'Kubernetes'],
    relatedProjects: []
  },
  {
    id: 'enterprise-solutions',
    name: 'Enterprise Solutions',
    slug: 'enterprise-solutions',
    iconName: 'Building2',
    summary: 'Scalable, secure, and robust software designed for large-scale enterprise operations.',
    description: 'Empower your enterprise with secure, custom-built platforms. We design high-performance ERP, CRM, and internal management tools that handle massive data loads while keeping operations secure and compliant.',
    features: [
      'Custom ERP & CRM',
      'High-Availability Architecture',
      'Role-Based Access Control',
      'Global Scalability'
    ],
    technologies: ['Java', 'C#', 'PostgreSQL', 'AWS'],
    relatedProjects: []
  },
  {
    id: 'ecommerce-solutions',
    name: 'E-Commerce Solutions',
    slug: 'ecommerce-solutions',
    iconName: 'ShoppingCart',
    summary: 'High-conversion online stores with seamless checkout and personalized shopping experiences.',
    description: 'We build scalable e-commerce platforms that drive sales. Our solutions include headless commerce, custom storefronts, secure payment gateways, and real-time inventory synchronization.',
    features: [
      'Headless Commerce Architecture',
      'Secure Payment Integrations',
      'Inventory Management',
      'Personalized Recommendations'
    ],
    technologies: ['Shopify', 'Next.js', 'Stripe', 'Redis'],
    relatedProjects: []
  },
  {
    id: 'cloud-solutions',
    name: 'Cloud Solutions',
    slug: 'cloud-solutions',
    iconName: 'Cloud',
    summary: 'Flexible, secure, and scalable cloud infrastructure to power your applications globally.',
    description: 'Optimize your infrastructure with modern cloud computing. We provide cloud architecture design, migration, deployment, and management to ensure your platforms are resilient and cost-effective.',
    features: [
      'Cloud Infrastructure Design',
      'Serverless Architecture',
      'Multi-Cloud Strategies',
      'DevOps & CI/CD'
    ],
    technologies: ['AWS', 'Google Cloud', 'Azure', 'Terraform'],
    relatedProjects: []
  },
  {
    id: 'custom-platforms',
    name: 'Custom Business Platforms',
    slug: 'custom-platforms',
    iconName: 'MonitorSmartphone',
    summary: 'Tailor-made software platforms designed perfectly around your unique business requirements.',
    description: 'Off-the-shelf software often falls short. We develop custom business platforms from scratch, ensuring that every feature aligns exactly with your operational workflow and long-term goals.',
    features: [
      'Bespoke Web Applications',
      'Cross-Platform Mobile Apps',
      'Custom Dashboard Development',
      'Third-Party API Integrations'
    ],
    technologies: ['React Native', 'Next.js', 'Node.js', 'MongoDB'],
    relatedProjects: []
  },
  {
    id: 'data-analytics',
    name: 'Data & Analytics',
    slug: 'data-analytics',
    iconName: 'BarChart3',
    summary: 'Turn raw data into actionable insights through advanced analytics and business intelligence.',
    description: 'Make informed business decisions with our data solutions. We build data pipelines, interactive dashboards, and analytics platforms that visualize key performance indicators in real-time.',
    features: [
      'Interactive Data Dashboards',
      'Real-Time Analytics',
      'Data Warehousing',
      'Business Intelligence'
    ],
    technologies: ['PowerBI', 'Tableau', 'Snowflake', 'BigQuery'],
    relatedProjects: []
  },
  {
    id: 'customer-experience',
    name: 'Customer Experience',
    slug: 'customer-experience',
    iconName: 'Users',
    summary: 'Enhance every touchpoint with user-centric digital experiences that build loyalty.',
    description: 'Deliver exceptional value to your users through intuitive UI/UX and responsive digital touchpoints. We help you map customer journeys and build platforms that prioritize user satisfaction and retention.',
    features: [
      'User Journey Mapping',
      'Interactive UI/UX Design',
      'Omnichannel Strategy',
      'Performance Optimization'
    ],
    technologies: ['Figma', 'Framer Motion', 'React', 'Vercel'],
    relatedProjects: []
  }
];
