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
    desc: 'Fast, responsive websites and web applications built using modern frameworks. Fast-loading, search-engine-ready, and easy to maintain over time.',
    link: '/services',
    linkText: 'Explore Web Development Services',
    icon: <Globe size={32} className={styles.cardIconSvg} />,
    tag: 'Web & PWA'
  },
  {
    title: 'Custom Software Development',
    desc: 'Business software designed around exact workflows. Automates repetitive tasks, organizes internal data, and integrates with systems already in use.',
    link: '/services',
    linkText: 'Explore Custom Software Development',
    icon: <Code2 size={32} className={styles.cardIconSvg} />,
    tag: 'Custom Logic'
  },
  {
    title: 'Algo Trading Software',
    desc: 'Automated trading solutions that connect to broker APIs, execute strategies at high speed, and follow strict risk parameters without emotional decision-making.',
    link: '/services',
    linkText: 'Explore Algo Trading Software',
    icon: <TrendingUp size={32} className={styles.cardIconSvg} />,
    tag: 'FinTech'
  },
  {
    title: 'Mobile App Development',
    desc: 'iOS and Android applications built natively or cross-platform. Clean user interfaces, reliable performance, and full support through app store submission.',
    link: '/services',
    linkText: 'Explore Mobile App Development',
    icon: <Smartphone size={32} className={styles.cardIconSvg} />,
    tag: 'iOS & Android'
  },
  {
    title: 'Digital Marketing',
    desc: 'Campaigns that bring the right audience to the business. Search engine optimization (SEO), performance ads, social media strategy, and conversion optimization.',
    link: '/services',
    linkText: 'Explore Digital Marketing Services',
    icon: <Megaphone size={32} className={styles.cardIconSvg} />,
    tag: 'Growth & ROI'
  },
  {
    title: 'E-commerce Website Design',
    desc: 'Online stores that make buying simple for customers and selling easy for the business. Product catalogs, payment gateways, inventory management, and fast checkout.',
    link: '/services',
    linkText: 'Explore E-commerce Solutions',
    icon: <ShoppingCart size={32} className={styles.cardIconSvg} />,
    tag: 'Commerce'
  },
  {
    title: 'MLM Software Development',
    desc: 'Complete multi-level marketing platforms supporting binary, matrix, generation, and custom plans. Real-time commission tracking, distributor genealogy trees, and payouts.',
    link: '/services',
    linkText: 'Explore MLM Software Solutions',
    icon: <GitFork size={32} className={styles.cardIconSvg} />,
    tag: 'Network Core'
  },
  {
    title: 'Software Development',
    desc: 'From backend architecture to front-facing applications, robust software built to scale as the business grows, keeping maintenance low and performance high.',
    link: '/services',
    linkText: 'Explore Software Development',
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
  const triggerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const trigger = triggerRef.current;
    const wrapper = scrollWrapperRef.current;

    if (!section || !trigger || !wrapper) return;
    let ctx: gsap.Context | null = null;

    const timer = setTimeout(() => {
      ctx = gsap.context(() => {
        const cards = gsap.utils.toArray(wrapper.children);
        const mm = gsap.matchMedia();

        mm.add('(min-width: 992px)', () => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: trigger,
              start: 'top top',
              end: '+=450%',
              pin: true,
              scrub: 1,
            },
          });

          tl.fromTo(
            cards,
            { y: 160, opacity: 0, scale: 0.95 },
            { y: 0, opacity: 1, scale: 1, stagger: 0.15, duration: 1.2, ease: 'power2.out' }
          );

          tl.to({}, { duration: 2 });

          tl.to(cards, {
            y: -120,
            opacity: 0,
            stagger: 0.1,
            duration: 1,
            ease: 'power2.in',
          });
        });
      }, section);
    }, 100);

    return () => {
      clearTimeout(timer);
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} id="services" className={styles.section}>
      {/* Intro Slide */}
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

        <div className={styles.rightCol}>
          <div className={styles.summary}>
            <span className={styles.summaryLabel}>Specialized Focus:</span>
            <div className={styles.capabilitiesTags}>
              {CAPABILITIES.map((cap, idx) => (
                <span key={idx} className={styles.capBadge}>
                  {cap.icon}
                  {cap.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* The Cards Section (Pins when it reaches top on desktop) */}
      <div ref={triggerRef} className={styles.pinWrapper}>
        <div className={styles.scrollContainer}>
          <div ref={scrollWrapperRef} className={styles.cardsWrapper}>
            {SERVICES.map((service, idx) => (
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
      </div>
    </section>
  );
};

export default AnimatedServices;
