export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

export const testimonials: TestimonialItem[] = [
  {
    id: 't-1',
    author: 'Richards Johnson',
    role: 'Creative Director & Lead Designer',
    company: 'Vardhman Logistics',
    quote: 'Working with Emperor was a seamless experience. Their ability to merge creativity with functionality resulted in designs that not only looked stunning but also drove meaningful engagement. Highly recommended!',
    rating: 5
  },
  {
    id: 't-2',
    author: 'June Lee',
    role: 'CEO of GreenRoots',
    company: 'AlphaFin Capital',
    quote: 'Emperor\'s strategic approach to design brought our brand vision to life. The software architecture and user experience elevated our aesthetic and aligned perfectly with our business growth goals.',
    rating: 5
  },
  {
    id: 't-3',
    author: 'Jona Carter',
    role: 'Founder of EcoLux',
    company: 'Organica Living',
    quote: 'Every project Emperor touches turns into a perfect blend of design and purpose. They crafted a digital solution that reflected our mission while making our products stand out in a competitive market.',
    rating: 5
  },
  {
    id: 't-4',
    author: 'Vikram Shah',
    role: 'Director of Operations',
    company: 'Apex Global Solutions',
    quote: 'Building a complex web platform that integrates seamlessly with existing workflows is tough. Emperor delivered clean, reliable code ahead of schedule and transformed our business operations.',
    rating: 5
  },
  {
    id: 't-5',
    author: 'Ananya Desai',
    role: 'Managing Director',
    company: 'Zenith Digital Labs',
    quote: 'Our website traffic and user conversions skyrocketed after Emperor redesigned our portal. Their attention to detail, speed, and technical mastery is truly second to none.',
    rating: 5
  },
  {
    id: 't-6',
    author: 'Marcus Vance',
    role: 'VP of Product',
    company: 'AeroTech Innovations',
    quote: 'From wireframes to final deployment, Emperor executed with absolute precision. The custom software platform they built handles high throughput with zero downtime.',
    rating: 5
  },
  {
    id: 't-7',
    author: 'Sofia Rossi',
    role: 'Head of Brand Strategy',
    company: 'Luminary Media',
    quote: 'Emperor provided unmatched clarity and craftsmanship throughout our brand rollout. They delivered an incredible digital experience that our clients praise every single day.',
    rating: 5
  }
];


