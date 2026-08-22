export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  client: string;
  category: string;
  industry: string;
  summary: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: ProjectMetric[];
  deliverables?: string[];
  technologies: string[];
  imageUrl: string;
  galleryUrls?: string[];
  featured: boolean;
  completionDate: string;
}
