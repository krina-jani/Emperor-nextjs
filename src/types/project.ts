export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  client: string;
  category: 'AI & Data Science' | 'Web Engineering' | 'Mobile Solutions' | 'Cloud & DevOps' | 'Smart Devices (IoT)' | 'E-commerce Website Development' | 'Corporate Website Development' | 'Custom Web Application Development';
  industry: string;
  summary: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: ProjectMetric[];
  technologies: string[];
  imageUrl: string;
  galleryUrls?: string[];
  featured: boolean;
  completionDate: string;
}
