export interface TechnologyItem {
  name: string;
  category: 'frontend' | 'backend' | 'cms' | 'database' | 'cloud' | 'design';
  iconName: string;
  description: string;
  proficiency: number; // percentage
  relatedProjects: string[]; // project slugs
}

export const technologies: TechnologyItem[] = [
  // Frontend
  {
    name: 'React',
    category: 'frontend',
    iconName: 'Code2',
    description: 'High-performance interactive interfaces, state-driven rendering, and component hierarchies.',
    proficiency: 95,
    relatedProjects: ['ecommerce-platform']
  },
  {
    name: 'Vue.js',
    category: 'frontend',
    iconName: 'Layout',
    description: 'Lightweight reactive view layers, intuitive data bindings, and single-file components.',
    proficiency: 88,
    relatedProjects: []
  },
  {
    name: 'Angular',
    category: 'frontend',
    iconName: 'Layers',
    description: 'Robust MVC frameworks suited for large-scale corporate dashboard configurations.',
    proficiency: 82,
    relatedProjects: []
  },
  {
    name: 'JavaScript',
    category: 'frontend',
    iconName: 'Code2',
    description: 'Dynamic scripting, asynchronous requests, and core event listeners.',
    proficiency: 95,
    relatedProjects: ['corporate-website', 'ecommerce-platform']
  },
  {
    name: 'HTML5',
    category: 'frontend',
    iconName: 'Building',
    description: 'Semantic markup, structural document trees, and standard metadata configurations.',
    proficiency: 98,
    relatedProjects: ['corporate-website']
  },
  {
    name: 'CSS3',
    category: 'frontend',
    iconName: 'Brush',
    description: 'Custom layouts, responsive queries, keyframe animations, and styling variables.',
    proficiency: 95,
    relatedProjects: ['corporate-website']
  },

  // Backend
  {
    name: 'Node.js',
    category: 'backend',
    iconName: 'Cpu',
    description: 'Asynchronous event-driven server runtime for writing scalable backend services.',
    proficiency: 92,
    relatedProjects: ['ecommerce-platform']
  },
  {
    name: 'PHP',
    category: 'backend',
    iconName: 'Code2',
    description: 'Server-side processing for custom CMS systems, themes, and template operations.',
    proficiency: 90,
    relatedProjects: ['corporate-website']
  },
  {
    name: 'Laravel',
    category: 'backend',
    iconName: 'Layers',
    description: 'Sophisticated web application frameworks with active ORM and routing middleware.',
    proficiency: 86,
    relatedProjects: []
  },

  // CMS
  {
    name: 'WordPress',
    category: 'cms',
    iconName: 'BookOpen',
    description: 'World-leading content management engine, custom post models, and admin dashboards.',
    proficiency: 95,
    relatedProjects: ['corporate-website']
  },

  // Database
  {
    name: 'MySQL',
    category: 'database',
    iconName: 'Database',
    description: 'Relational database systems, optimized SQL joins, and relational query indices.',
    proficiency: 92,
    relatedProjects: ['corporate-website']
  },
  {
    name: 'MongoDB',
    category: 'database',
    iconName: 'Database',
    description: 'Document-based NoSQL storage, flexible JSON schemas, and fast aggregate pipelines.',
    proficiency: 88,
    relatedProjects: ['ecommerce-platform']
  },

  // Cloud & DevOps
  {
    name: 'AWS',
    category: 'cloud',
    iconName: 'Cloud',
    description: 'Cloud hosting, VPC configurations, S3 asset buckets, and automated load balancers.',
    proficiency: 85,
    relatedProjects: ['ecommerce-platform']
  },
  {
    name: 'Docker',
    category: 'cloud',
    iconName: 'Box',
    description: 'Containerized processes, isolated environment setups, and clean developer workflows.',
    proficiency: 88,
    relatedProjects: []
  },
  {
    name: 'Git',
    category: 'cloud',
    iconName: 'GitBranch',
    description: 'Version control workflows, repository structures, and pull request review pipelines.',
    proficiency: 95,
    relatedProjects: ['corporate-website', 'ecommerce-platform']
  },

  // Design
  {
    name: 'Figma',
    category: 'design',
    iconName: 'Figma',
    description: 'Collaborative visual wireframing, high-fidelity layouts, and vector components.',
    proficiency: 96,
    relatedProjects: ['corporate-website', 'ecommerce-platform']
  },
  {
    name: 'Adobe XD',
    category: 'design',
    iconName: 'Compass',
    description: 'Clickable prototype maps, user journeys, and responsive grid patterns.',
    proficiency: 80,
    relatedProjects: []
  },
  {
    name: 'Photoshop',
    category: 'design',
    iconName: 'Brush',
    description: 'Professional raster editing, photo manipulation, and visual style assets.',
    proficiency: 85,
    relatedProjects: []
  }
];
