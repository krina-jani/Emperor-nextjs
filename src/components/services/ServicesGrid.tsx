'use client';

import React from 'react';
import Link from 'next/link';
import Container from '../ui/Container';
import FadeIn from '../animations/FadeIn';
import { ArrowUpRight } from 'lucide-react';
import styles from './ServicesGrid.module.css';

const servicesData = [
  {
    category: 'ENGINEERING',
    title: 'Custom Software Engineering',
    description: 'We architect and engineer mission-critical custom software systems that handle complex business workflows, multi-tenant databases, strict compliance mandates, and high-concurrency throughput.',
    href: '/services/software-development'
  },
  {
    category: 'AI & DATA',
    title: 'AI & Machine Learning Engineering',
    description: 'We engineer production-ready AI solutions that move beyond superficial wrappers to deliver measurable business automation, semantic knowledge search, and autonomous multi-agent pipelines.',
    href: '/services/ai-development'
  },
  {
    category: 'ENGINEERING',
    title: 'Web Application & SaaS Engineering',
    description: 'We build enterprise-grade SaaS platforms, high-velocity customer portals, and internal business applications using modern React, Next.js, and TypeScript architectures.',
    href: '/services/web-app-development'
  },
  {
    category: 'ENGINEERING',
    title: 'Mobile App Development (iOS, Android & Flutter)',
    description: 'We build intuitive, fluid mobile applications for iOS and Android that combine native performance with seamless backend synchronization and offline reliability.',
    href: '/services/mobile-development'
  },
  {
    category: 'SYSTEMS & AUTOMATION',
    title: 'Custom CRM & Lead Automation Systems',
    description: 'Off-the-shelf CRMs charge exorbitant per-user fees for features you never use. We build custom CRM platforms structured around your exact sales funnel, team roles, and automation rules.',
    href: '/services/crm-development'
  },
  {
    category: 'SYSTEMS & AUTOMATION',
    title: 'Enterprise ERP & Operations Platforms',
    description: 'We design and engineer bespoke Enterprise Resource Planning (ERP) systems that consolidate manufacturing, inventory tracking, vendor procurement, and financial reporting into a unified system.',
    href: '/services/erp-development'
  },
  {
    category: 'AI & DATA',
    title: 'RAG & Enterprise Knowledge Systems',
    description: 'We build Retrieval-Augmented Generation (RAG) platforms that allow internal staff and external customers to query thousands of complex technical documents, policies, and contracts with verifiable precision.',
    href: '/services/rag-development'
  },
  {
    category: 'AI & DATA',
    title: 'Autonomous AI Agents & Multi-Agent Systems',
    description: 'We engineer autonomous AI agents and multi-agent swarms that plan sequences, query internal databases, trigger third-party APIs, and execute complex business workflows without human bottlenecks.',
    href: '/services/ai-agent-development'
  },
  {
    category: 'SYSTEMS & AUTOMATION',
    title: 'Workflow & Business Process Automation',
    description: 'We eliminate repetitive human tasks by designing robust automation pipelines connecting CRMs, ERPs, accounting software, email, and messaging platforms with zero data loss.',
    href: '/services/workflow-automation'
  },
  {
    category: 'CLOUD & DEVOPS',
    title: 'Cloud Architecture & Infrastructure (AWS, Azure, GCP)',
    description: 'We architect, provision, and manage secure cloud infrastructures across AWS, Google Cloud, and Microsoft Azure using Infrastructure as Code (Terraform) and containerization.',
    href: '/services/cloud'
  },
  {
    category: 'CLOUD & DEVOPS',
    title: 'DevOps & CI/CD Pipeline Automation',
    description: 'We build automated CI/CD deployment pipelines that eliminate manual FTP/SSH uploads, catch bugs before they reach production, and allow your engineering team to deploy safely multiple times per day.',
    href: '/services/devops'
  },
  {
    category: 'ENGINEERING',
    title: 'Legacy Modernization & Code Refactoring',
    description: 'Outdated software holding your business hostage? We refactor brittle legacy monolithic applications into clean, testable Next.js and microservice architectures without disrupting ongoing business operations.',
    href: '/services/legacy-modernization'
  },
  {
    category: 'GROWTH & DESIGN',
    title: 'UI/UX Product Design & Design Systems',
    description: 'We craft thoughtful digital product experiences that combine intuitive user journeys, high-contrast visual clarity, and scalable design token systems ready for engineering handoff.',
    href: '/services/ui-ux'
  },
  {
    category: 'GROWTH & DESIGN',
    title: 'Technical SEO & Organic Search Architecture',
    description: 'We architect web platforms engineered from the ground up to rank on Google for high-intent commercial keywords across US, UK, and international markets.',
    href: '/services/seo'
  },
  {
    category: 'CLOUD & DEVOPS',
    title: 'Dedicated Engineering Support & SLA Maintenance',
    description: 'Software is a living asset. We provide dedicated post-launch engineering retainers backed by guaranteed SLA response times, proactive security patching, and continuous performance optimization.',
    href: '/services/maintenance-support'
  }
];

export const ServicesGrid: React.FC = () => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          {servicesData.map((service, index) => (
            <FadeIn key={index} direction="up" delay={`${(index % 3) * 100}ms`}>
              <Link href={service.href} className={styles.card}>
                <div className={styles.cardHeader}>
                  <span className={styles.categoryPill}>{service.category}</span>
                  <ArrowUpRight className={styles.arrowIcon} size={20} />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.title}>{service.title}</h3>
                  <p className={styles.description}>{service.description}</p>
                </div>
                <div className={styles.cardFooter}>
                  <span className={styles.exploreText}>Explore Service Blueprint &rarr;</span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesGrid;
