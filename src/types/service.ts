import { FAQItem } from './common';

export interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  iconName: string;
  image3d?: string;
  colorTheme?: string;
  tag?: string;
  summary: string;
  description: string;
  features: string[];
  benefits: string[];
  deliverables?: string[];
  process: ProcessStep[];
  technologies: string[];
  faqs: FAQItem[];
}
