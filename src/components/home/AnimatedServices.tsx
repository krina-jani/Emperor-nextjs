'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Globe, 
  Code2, 
  TrendingUp, 
  Smartphone, 
  Megaphone, 
  ShoppingCart, 
  GitFork, 
  Layers,
  Sparkles,
  Server,
  RefreshCw,
  Palette,
  Bot,
  Workflow,
  Cloud
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './AnimatedServices.module.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const SERVICES = [
  {
    title: 'Web Development',
    desc: 'Custom websites and web applications built for speed, security, and conversions. Full-stack builds, progressive web apps, and API integrations, all covered.',
    link: '/services/web-development',
    linkText: 'Explore Web Development →',
    icon: <Globe size={32} className={styles.cardIconSvg} />,
    tag: 'Web & PWA'
  },
  {
    title: 'Custom Software Development',
    desc: 'Software built around how a business actually works, not a generic tool with the logo swapped out. Enterprise applications, SaaS platforms, and API development included.',
    link: '/services/custom-software-development',
    linkText: 'Explore Custom Software →',
    icon: <Code2 size={32} className={styles.cardIconSvg} />,
    tag: 'Custom Logic'
  },
  {
    title: 'Algo Trading Software',
    desc: 'Algorithmic trading platforms combining AI-powered decisions with automated execution. Built within SEBI\'s regulatory framework for traders across India.',
    link: '/services/algo-trading-software',
    linkText: 'Explore Algo Trading →',
    icon: <TrendingUp size={32} className={styles.cardIconSvg} />,
    tag: 'FinTech'
  },
  {
    title: 'Mobile App Development',
    desc: 'Native and cross-platform apps for iOS and Android. Built on the same architecture and standards as the web version, not a separate afterthought.',
    link: '/services/mobile-app-development',
    linkText: 'Explore Mobile App Development →',
    icon: <Smartphone size={32} className={styles.cardIconSvg} />,
    tag: 'iOS & Android'
  },
  {
    title: 'Digital Marketing',
    desc: 'SEO, PPC, social media, and content strategy working as one campaign. Results get tracked back to actual business outcomes, not vanity numbers.',
    link: '/services/digital-marketing',
    linkText: 'Explore Digital Marketing →',
    icon: <Megaphone size={32} className={styles.cardIconSvg} />,
    tag: 'Growth & ROI'
  },
  {
    title: 'E-commerce Website Design',
    desc: 'High-converting online stores on Shopify, WooCommerce, or a custom build. Designed around how people actually shop, not just how a store looks in a mockup.',
    link: '/services/ecommerce-website-design',
    linkText: 'Explore E-commerce Development →',
    icon: <ShoppingCart size={32} className={styles.cardIconSvg} />,
    tag: 'Commerce'
  },
  {
    title: 'MLM Software Development',
    desc: 'Binary, matrix, unilevel, and hybrid compensation plans, calculated with the accuracy a growing distributor network actually needs.',
    link: '/services/mlm-software-development',
    linkText: 'Explore MLM Software →',
    icon: <GitFork size={32} className={styles.cardIconSvg} />,
    tag: 'Network Core'
  },
  {
    title: 'Software Development',
    desc: 'End-to-end software solutions for CRM systems, enterprise platforms, and custom web applications, built to match how the business runs.',
    link: '/services/software-development',
    linkText: 'Explore Software Development →',
    icon: <Layers size={32} className={styles.cardIconSvg} />,
    tag: 'Enterprise'
  },
];

const CAPABILITIES = [
  { name: 'Custom CRM Systems', icon: <Server size={14} /> },
  { name: 'Enterprise ERP', icon: <Layers size={14} /> },
  { name: 'Legacy Modernization', icon: <RefreshCw size={14} /> },
  { name: 'UI/UX & Design Systems', icon: <Palette size={14} /> },
  { name: 'AI & Machine Learning', icon: <Bot size={14} /> },
  { name: 'Workflow Automation (n8n)', icon: <Workflow size={14} /> },
  { name: 'Cloud Architecture (AWS/GCP)', icon: <Cloud size={14} /> },
];

const AnimatedServices = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  // Present the top 3 core services in the 3 cards style
  const threeServices = SERVICES.slice(0, 3);

  useEffect(() => {
    const section = sectionRef.current;
    const wrapper = scrollWrapperRef.current;

    if (!section || !wrapper) return;
    let ctx: gsap.Context | null = null;

    const timer = setTimeout(() => {
      ctx = gsap.context(() => {
        const cards = gsap.utils.toArray(wrapper.children);

        gsap.fromTo(
          cards,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          }
        );
      }, section);
    }, 100);

    return () => {
      clearTimeout(timer);
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} id="services" className={styles.section}>
      {/* Intro Header */}
      <div className={styles.introSlide}>
        <div className={styles.leftCol}>
          <div className={styles.badgeRow}>
            <span className={styles.subTag}>[08 Specialized Capabilities]</span>
          </div>
          <h2 className={styles.title}>Our Core Services</h2>
          <p className={styles.introDesc}>
            Eight services cover most of what a growing business needs. Each one gets handled by people who specialize in that specific area, not a generalist team stretched across everything.
          </p>
          <Link href="/services" className={styles.learnMore}>
            Explore All Services <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* 3 Core Services in 3 Cards Style */}
      <div className={styles.scrollContainer}>
        <div ref={scrollWrapperRef} className={styles.cardsWrapper}>
          {threeServices.map((service, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>{service.icon}</div>
                <span className={styles.serviceTag}>{service.tag}</span>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.desc}</p>
              </div>
              <div className={styles.cardFooter}>
                <Link href={service.link} className={styles.cardLink}>
                  <span>{service.linkText}</span>
                  <ArrowRight size={16} className={styles.linkArrow} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.btnWrapper}>
          <Link href="/services" className={styles.seeMoreBtn}>
            Explore All Services <ArrowRight className={styles.btnIcon} size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AnimatedServices;
