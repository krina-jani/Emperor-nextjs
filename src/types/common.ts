export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface StatItem {
  id: string;
  label: string;
  value: string;
  suffix?: string;
  description: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  quote: string;
  avatarUrl?: string;
  rating: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  avatarUrl: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface ValueCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
