import { Testimonial } from '../types/common';

export const testimonials: Testimonial[] = [
  {
    id: 't-1',
    author: 'Rajesh Patel',
    role: 'Director of Operations',
    company: 'Vardhman Logistics, Ahmedabad',
    quote: 'We needed a custom ERP that integrated with our ground logistics and automated shipment dispatches. The Emperor team sat with us, understood our actual day-to-day headaches, and delivered software that works reliably every single day.',
    rating: 5
  },
  {
    id: 't-2',
    author: 'Vikram Shah',
    role: 'Proprietary Trader',
    company: 'AlphaFin Capital, Mumbai',
    quote: 'Building an automated execution system that connects to Indian broker APIs without slippage is notoriously hard. Emperor built a Python-based algo platform with strict risk controls that executes flawlessly in volatile markets.',
    rating: 5
  },
  {
    id: 't-3',
    author: 'Ananya Desai',
    role: 'Founder & CEO',
    company: 'Organica Living, Surat',
    quote: 'Our previous e-commerce store was slow and was not converting visitors. Emperor revamped the entire platform, improved mobile checkout speed, and their SEO strategy brought a 40% organic traffic surge within three months.',
    rating: 5
  }
];
