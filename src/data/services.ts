import { Service } from '../types/service';

export const services: Service[] = [
  {
    id: 'software-development',
    title: 'Custom Software Engineering',
    slug: 'software-development',
    iconName: 'Code2',
    tag: 'ENTERPRISE CORE',
    summary: 'We architect and engineer mission-critical custom software systems that handle complex business workflows, multi-tenant databases, strict compliance mandates, and high-concurrency throughput.',
    description: 'Off-the-shelf software forces your enterprise into rigid constraints. We build bespoke software platforms crafted around your unique business operations, eliminating recurring license overhead, vendor lock-in, and operational bottlenecks.',
    features: [],
    benefits: [],
    deliverables: [
      'Production-Ready Source Code & Git Repository',
      'Interactive OpenAPI / Swagger Documentation',
      'Docker Compose & Kubernetes Deployment Manifests',
      'Comprehensive Architecture & Security Specification'
    ],
    process: [
      { stepNumber: 1, title: 'Domain Discovery', description: 'Mapping entities, transaction flows, and state machines.' },
      { stepNumber: 2, title: 'System Blueprint', description: 'Designing database schemas, API contracts, and security boundaries.' },
      { stepNumber: 3, title: 'Core Engineering', description: 'Building test-driven backend services and intuitive frontend interfaces.' },
      { stepNumber: 4, title: 'Load & Security QA', description: 'Stress-testing concurrency limits and vulnerability scanning.' },
      { stepNumber: 5, title: 'Production Deployment', description: 'Automated zero-downtime deployment with observability pipelines.' }
    ],
    technologies: [],
    faqs: [
      {
        id: 'faq-1',
        question: 'How do you ensure software maintainability over 5-10 years?',
        answer: 'We enforce strict TypeScript typing, automated CI/CD unit and integration test coverage (>85%), clear domain boundaries, and complete architectural documentation.'
      },
      {
        id: 'faq-2',
        question: 'Who owns the intellectual property and codebase?',
        answer: 'You have 100% full intellectual property ownership and direct repository access from day one.'
      }
    ]
  },
  {
    id: 'ai-development',
    title: 'AI & Machine Learning Engineering',
    slug: 'ai-development',
    iconName: 'Brain',
    tag: 'AI & DATA',
    summary: 'We engineer production-ready AI solutions that move beyond superficial wrappers to deliver measurable business automation, semantic knowledge search, and autonomous multi-agent pipelines.',
    description: 'We integrate enterprise-grade AI models directly into your operational software. From Retrieval-Augmented Generation (RAG) over proprietary documentation to autonomous multi-agent pipelines, we build AI that acts with verifiable precision.',
    features: [],
    benefits: [],
    deliverables: [
      'Custom AI Engine & API Microservice',
      'Vector Ingestion & Re-indexing Pipeline',
      'Evaluation Benchmark Suite & Accuracy Report',
      'Admin Dashboard for Prompt & Guardrail Management'
    ],
    process: [
      { stepNumber: 1, title: 'Data Audit & Feasibility', description: 'Evaluating source data cleanliness, privacy requirements, and baseline accuracy.' },
      { stepNumber: 2, title: 'Chunking & Vectorization', description: 'Implementing semantic document splitting and vector embedding pipelines.' },
      { stepNumber: 3, title: 'Agentic Logic & Tools', description: 'Connecting LLMs to internal database APIs and operational toolkits.' },
      { stepNumber: 4, title: 'Evaluation & Benchmarking', description: 'Testing retrieval precision, recall, and hallucination bounds.' },
      { stepNumber: 5, title: 'Production Hardening', description: 'Deploying rate limits, caching, and observability monitoring.' }
    ],
    technologies: [],
    faqs: [
      {
        id: 'faq-1',
        question: 'How do you prevent AI hallucinations in business-critical workflows?',
        answer: 'We utilize strict RAG architectures where the LLM is restricted to answering exclusively from verified retrieved chunks with explicit source citations, combined with JSON schema validators.'
      },
      {
        id: 'faq-2',
        question: 'Can we use AI without exposing confidential customer data to third parties?',
        answer: 'Yes. We deploy private instance models on your AWS/GCP infrastructure or utilize enterprise zero-data-retention APIs.'
      }
    ]
  },
  {
    id: 'web-app-development',
    title: 'Web Application & SaaS Engineering',
    slug: 'web-app-development',
    iconName: 'Globe',
    tag: 'ENGINEERING',
    summary: 'We build enterprise-grade SaaS platforms, high-velocity customer portals, and internal business applications using modern React, Next.js, and TypeScript architectures.',
    description: 'Modern web applications require the responsiveness of desktop software with the accessibility and reach of the web. We build clean, component-driven web apps with lightning-fast initial load times and robust state management.',
    features: [],
    benefits: [],
    deliverables: [
      'Full Web Application Codebase & Design System',
      'Automated Stripe / Payment Subscription Integration',
      'Multi-Tenant Admin & Organization Management',
      'CI/CD Build Pipelines & Production Hosting'
    ],
    process: [
      { stepNumber: 1, title: 'Product Wireframing', description: 'Mapping user stories, UX wireframes, and interactive clickable prototypes.' },
      { stepNumber: 2, title: 'Design System Assembly', description: 'Constructing accessible, responsive UI component libraries.' },
      { stepNumber: 3, title: 'Full-Stack Implementation', description: 'Developing responsive frontend views and secure backend API endpoints.' },
      { stepNumber: 4, title: 'End-to-End Testing', description: 'Automated Playwright browser tests across Chrome, Safari, and Firefox.' },
      { stepNumber: 5, title: 'Launch & Telemetry', description: 'Production release with Sentry error monitoring and performance telemetry.' }
    ],
    technologies: [],
    faqs: [
      {
        id: 'faq-1',
        question: 'Can you scale the application from 100 to 100,000 active users?',
        answer: 'Yes. Our architectures leverage stateless containerized backends, database read-replicas, and edge CDN distribution capable of scaling smoothly with user demand.'
      }
    ]
  },
  {
    id: 'mobile-development',
    title: 'Mobile App Development (iOS, Android & Flutter)',
    slug: 'mobile-development',
    iconName: 'Smartphone',
    tag: 'ENGINEERING',
    summary: 'We build intuitive, fluid mobile applications for iOS and Android that combine native performance with seamless backend synchronization and offline reliability.',
    description: 'From native iOS and Android to cost-effective cross-platform Flutter and React Native architectures, we build mobile apps that achieve 60fps animations, intuitive gesture navigation, and robust hardware sensor integrations.',
    features: [],
    benefits: [],
    deliverables: [
      'Signed iOS (.ipa) & Android (.aab) Production Builds',
      'Complete Mobile Source Code Repository',
      'App Store & Play Store Metadata, Screenshots & Privacy Policies',
      'Push Notification & Remote Config Dashboard'
    ],
    process: [
      { stepNumber: 1, title: 'Mobile UX Architecture', description: 'Designing thumb-zone friendly navigation patterns and native gestures.' },
      { stepNumber: 2, title: 'Core App Development', description: 'Building views, state management, and offline cache storage.' },
      { stepNumber: 3, title: 'API & Sensor Integration', description: 'Connecting push notifications, payment gateways, and backend endpoints.' },
      { stepNumber: 4, title: 'Device Matrix QA', description: 'Testing across 30+ physical iOS and Android form factors and screen sizes.' },
      { stepNumber: 5, title: 'Store Submission & Launch', description: 'Guiding approval through Apple App Store and Google Play reviews.' }
    ],
    technologies: [],
    faqs: [
      {
        id: 'faq-1',
        question: 'Should we choose Flutter or React Native for our project?',
        answer: 'We analyze your existing team skills and project requirements. Flutter offers pixel-perfect consistency and raw canvas performance, while React Native is ideal if you have an existing React web codebase to share logic.'
      }
    ]
  },
  {
    id: 'crm-development',
    title: 'Custom CRM & Lead Automation Systems',
    slug: 'crm-development',
    iconName: 'Users',
    tag: 'SYSTEMS & AUTOMATION',
    summary: 'Off-the-shelf CRMs charge exorbitant per-user fees for features you never use. We build custom CRM platforms structured around your exact sales funnel, team roles, and automation rules.',
    description: 'Every business has unique lead stages, commission structures, and customer communication channels. We build custom CRM platforms that unify phone, email, WhatsApp, and form submissions into a single high-velocity sales cockpit.',
    features: [],
    benefits: [],
    deliverables: [
      'Custom CRM Web & Mobile App',
      'Lead Webhook Ingestion API Gateway',
      'WhatsApp & Email Automation Templates',
      'Executive Sales Performance Dashboard'
    ],
    process: [
      { stepNumber: 1, title: 'Sales Funnel Audit', description: 'Documenting lead sources, qualification steps, and closing stages.' },
      { stepNumber: 2, title: 'Pipeline & Data Modeling', description: 'Structuring custom fields, permissions, and stage transitions.' },
      { stepNumber: 3, title: 'Automation Engine Setup', description: 'Configuring auto-responders, reminders, and lead scoring logic.' },
      { stepNumber: 4, title: 'User Training & Migration', description: 'Importing existing customer data from legacy spreadsheets or old CRMs.' },
      { stepNumber: 5, title: 'Deployment & Optimization', description: 'Launching system and refining sales rep conversion dashboards.' }
    ],
    technologies: [],
    faqs: [
      {
        id: 'faq-1',
        question: 'Can we migrate our existing contacts and deals from Salesforce or HubSpot?',
        answer: 'Yes. We perform automated CSV and API database migrations with deduplication and historical data cleansing.'
      }
    ]
  },
  {
    id: 'erp-development',
    title: 'Enterprise ERP & Operations Platforms',
    slug: 'erp-development',
    iconName: 'Database',
    tag: 'SYSTEMS & AUTOMATION',
    summary: 'We design and engineer bespoke Enterprise Resource Planning (ERP) systems that consolidate manufacturing, inventory tracking, vendor procurement, and financial reporting into a unified system.',
    description: 'Legacy ERP systems like SAP or Oracle are notoriously bloated and expensive to customize. We engineer agile, modern ERP systems built specifically for mid-market and growing enterprises.',
    features: [],
    benefits: [],
    deliverables: [
      'Custom Enterprise ERP Web Application',
      'Warehouse Barcode / QR Scanning Mobile Module',
      'Automated Tax Invoicing & General Ledger Engine',
      'Complete Data Backup & Disaster Recovery Protocol'
    ],
    process: [
      { stepNumber: 1, title: 'Operations Mapping', description: 'Analyzing supply chain, warehouse paths, and accounting logic.' },
      { stepNumber: 2, title: 'Schema & Architecture Design', description: 'Designing normalized relational schemas and transaction boundaries.' },
      { stepNumber: 3, title: 'Module Development', description: 'Building inventory, procurement, billing, and reporting modules.' },
      { stepNumber: 4, title: 'Data Verification & Stress QA', description: 'Validating reconciliation balances and stress-testing order volume.' },
      { stepNumber: 5, title: 'Phased Rollout & Support', description: 'Staged deployment by department with dedicated user training.' }
    ],
    technologies: [],
    faqs: [
      {
        id: 'faq-1',
        question: 'How long does a custom ERP take to build?',
        answer: 'Depending on scope, core ERP MVP modules are typically deployed in 8-12 weeks, followed by iterative additions of specialized departmental modules.'
      }
    ]
  },
  {
    id: 'rag-development',
    title: 'RAG & Enterprise Knowledge Systems',
    slug: 'rag-development',
    iconName: 'Library',
    tag: 'AI & DATA',
    summary: 'We build Retrieval-Augmented Generation (RAG) platforms that allow internal staff and external customers to query thousands of complex technical documents, policies, and contracts with verifiable precision.',
    description: 'Generic LLMs know nothing about your company\'s proprietary SOPs, legal contracts, or technical datasheets. Our RAG architectures index your enterprise data into vector databases, retrieving exact verified source context for every generated response.',
    features: [],
    benefits: [],
    deliverables: [
      'Enterprise RAG Search Engine & API',
      'Vector Ingestion & Auto-Sync Worker',
      'Interactive Document Query Interface with Citations',
      'Precision Benchmark Suite'
    ],
    process: [
      { stepNumber: 1, title: 'Corpus Ingestion & Cleaning', description: 'Parsing unstructured PDFs, spreadsheets, and databases.' },
      { stepNumber: 2, title: 'Chunking & Vector Pipeline', description: 'Generating embeddings and indexing into high-performance vector databases.' },
      { stepNumber: 3, title: 'Retrieval & Re-ranking Tuning', description: 'Optimizing top-k retrieval parameters and similarity thresholds.' },
      { stepNumber: 4, title: 'Citation & Guardrail Verification', description: 'Implementing strict grounding and citation validators.' },
      { stepNumber: 5, title: 'Enterprise Deployment', description: 'Deploying secure search interface and API endpoints.' }
    ],
    technologies: [],
    faqs: [
      {
        id: 'faq-1',
        question: 'How does RAG compare to fine-tuning an LLM?',
        answer: 'RAG is dramatically superior for business knowledge because it updates in real time without retraining costs, provides exact source citations, and respects user permissions.'
      }
    ]
  },
  {
    id: 'ai-agent-development',
    title: 'Autonomous AI Agents & Multi-Agent Systems',
    slug: 'ai-agent-development',
    iconName: 'Bot',
    tag: 'AI & DATA',
    summary: 'We engineer autonomous AI agents and multi-agent swarms that plan sequences, query internal databases, trigger third-party APIs, and execute complex business workflows without human bottlenecks.',
    description: 'While basic chatbots only generate text, AI agents execute actions. We build robust agentic architectures using LangGraph and CrewAI that reason through multi-step problems, validate intermediate outputs, and trigger real-world business transactions.',
    features: [],
    benefits: [],
    deliverables: [
      'Autonomous Multi-Agent Microservice',
      'Tool Contract & API Integration Layer',
      'Human-in-the-Loop Review Dashboard',
      'Full Execution Telemetry & Tracing Integration'
    ],
    process: [
      { stepNumber: 1, title: 'Task Decomposition', description: 'Mapping human workflow steps, decision trees, and exception scenarios.' },
      { stepNumber: 2, title: 'Tool & API Design', description: 'Building typed tool contracts and database connectors for the agent.' },
      { stepNumber: 3, title: 'State Graph Assembly', description: 'Implementing multi-agent communication and approval loops.' },
      { stepNumber: 4, title: 'Edge Case & Safety Stress Testing', description: 'Testing resilience against loops, invalid tool inputs, and rate limits.' },
      { stepNumber: 5, title: 'Production Orchestration', description: 'Deploying scalable agent worker queues with real-time monitoring.' }
    ],
    technologies: [],
    faqs: [
      {
        id: 'faq-1',
        question: 'What happens if an AI agent makes a mistake?',
        answer: 'We implement deterministic schema validation, automated self-correction loops, and mandatory Human-in-the-Loop checkpoints for actions involving financial transactions or irreversible data changes.'
      }
    ]
  },
  {
    id: 'workflow-automation',
    title: 'Workflow & Business Process Automation',
    slug: 'workflow-automation',
    iconName: 'Workflow',
    tag: 'SYSTEMS & AUTOMATION',
    summary: 'We eliminate repetitive human tasks by designing robust automation pipelines connecting CRMs, ERPs, accounting software, email, and messaging platforms with zero data loss.',
    description: 'If your team spends hours manually copying data between spreadsheets, invoicing tools, and email inboxes, you are losing valuable time and introducing errors. We build self-healing automation workflows that execute continuously in the background.',
    features: [],
    benefits: [],
    deliverables: [
      'Self-Hosted n8n Enterprise Cluster',
      'Custom Workflow Automation Scripts & Webhook Handlers',
      'Error Alerting & Dead-Letter Queue System',
      'Executive Time-Saved & Throughput Report'
    ],
    process: [
      { stepNumber: 1, title: 'Workflow Audit', description: 'Identifying manual bottlenecks, repetitive inputs, and system integration points.' },
      { stepNumber: 2, title: 'Pipeline Blueprint', description: 'Mapping data transformation steps, triggers, and fallback rules.' },
      { stepNumber: 3, title: 'Automation Engineering', description: 'Building webhook handlers, custom scripts, and connector nodes.' },
      { stepNumber: 4, title: 'Dry-Run Simulation', description: 'Testing high-volume data throughput and edge case handling.' },
      { stepNumber: 5, title: 'Live Handoff & Telemetry', description: 'Deploying automated execution logs with error alerting.' }
    ],
    technologies: [],
    faqs: [
      {
        id: 'faq-1',
        question: 'Why do you recommend self-hosted n8n over Zapier or Make?',
        answer: 'Self-hosted n8n runs on your own private cloud with zero per-task execution fees, complete data privacy, and unlimited complex multi-step workflows.'
      }
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud Architecture & Infrastructure (AWS, Azure, GCP)',
    slug: 'cloud',
    iconName: 'Cloud',
    tag: 'CLOUD & DEVOPS',
    summary: 'We architect, provision, and manage secure cloud infrastructures across AWS, Google Cloud, and Microsoft Azure using Infrastructure as Code (Terraform) and containerization.',
    description: 'A great application cannot survive on unstable infrastructure. We build modern, auto-scaling cloud environments with automated backups, DDoS mitigation, and global CDN acceleration that keep your business online 24/7/365.',
    features: [],
    benefits: [],
    deliverables: [
      'Terraform Infrastructure as Code Repository',
      'Production Docker & Container Registry Setup',
      'Grafana / CloudWatch Observability Dashboard',
      'Disaster Recovery & Backup Runbook'
    ],
    process: [
      { stepNumber: 1, title: 'Infrastructure Audit', description: 'Evaluating existing hosting, security vulnerabilities, and cost bloat.' },
      { stepNumber: 2, title: 'Architecture Blueprint', description: 'Designing multi-AZ VPC networks, load balancers, and container clusters.' },
      { stepNumber: 3, title: 'Terraform Provisioning', description: 'Writing reproducible infrastructure code and staging environments.' },
      { stepNumber: 4, title: 'Zero-Downtime Migration', description: 'Migrating data and traffic with automated DNS failovers.' },
      { stepNumber: 5, title: 'Monitoring & Hardening', description: 'Setting up Prometheus, Grafana dashboards, and automated alert alerts.' }
    ],
    technologies: [],
    faqs: [
      {
        id: 'faq-1',
        question: 'How do you help reduce existing high AWS or cloud bills?',
        answer: 'We perform comprehensive audits: rightsizing overprovisioned compute instances, implementing compute savings plans, configuring automated S3 lifecycle tiers, and optimizing database IOPS.'
      }
    ]
  },
  {
    id: 'devops',
    title: 'DevOps & CI/CD Pipeline Automation',
    slug: 'devops',
    iconName: 'Terminal',
    tag: 'CLOUD & DEVOPS',
    summary: 'We build automated CI/CD deployment pipelines that eliminate manual FTP/SSH uploads, catch bugs before they reach production, and allow your engineering team to deploy safely multiple times per day.',
    description: 'Manual deployments are the number one cause of production outages. We implement automated GitHub Actions / GitLab CI pipelines with automated linting, unit testing, security scanning, and preview environments for every pull request.',
    features: [],
    benefits: [],
    deliverables: [
      'Complete CI/CD YAML Pipeline Scripts',
      'Optimized Production Dockerfiles',
      'Secrets Management & Access Policy Configuration',
      'Team Deployment & Release Playbook'
    ],
    process: [
      { stepNumber: 1, title: 'Workflow Assessment', description: 'Auditing branching models, test suites, and deployment bottlenecks.' },
      { stepNumber: 2, title: 'Pipeline Configuration', description: 'Writing YAML workflows for linting, testing, and container packaging.' },
      { stepNumber: 3, title: 'Environment Automation', description: 'Configuring staging, preview, and production deployment targets.' },
      { stepNumber: 4, title: 'Security & Secret Management', description: 'Securing environment variables and credentials using HashiCorp Vault.' },
      { stepNumber: 5, title: 'Observability Integration', description: 'Wiring real-time Slack deployment notifications and Sentry error tracking.' }
    ],
    technologies: [],
    faqs: [
      {
        id: 'faq-1',
        question: 'Can we achieve zero downtime during database schema migrations?',
        answer: 'Yes. We implement expand-and-contract migration patterns where new columns and tables are added non-destructively before the application code is updated.'
      }
    ]
  },
  {
    id: 'legacy-modernization',
    title: 'Legacy Modernization & Code Refactoring',
    slug: 'legacy-modernization',
    iconName: 'RefreshCw',
    tag: 'ENGINEERING',
    summary: 'Outdated software holding your business hostage? We refactor brittle legacy monolithic applications into clean, testable Next.js and microservice architectures without disrupting ongoing business operations.',
    description: 'Legacy software slows down feature development, repels top engineering talent, and exposes your company to critical security vulnerabilities. We use the proven Strangler Fig migration pattern to incrementally replace old code with modern services.',
    features: [],
    benefits: [],
    deliverables: [
      'Modernized Next.js / TypeScript Codebase',
      'Migrated & Normalized PostgreSQL Database',
      'Automated End-to-End Test Suite',
      'Legacy Decommissioning & Cutover Documentation'
    ],
    process: [
      { stepNumber: 1, title: 'Legacy Code Audit', description: 'Analyzing codebase complexity, dependencies, and database schemas.' },
      { stepNumber: 2, title: 'Migration Roadmap', description: 'Segmenting the monolith into modular, low-risk incremental migration phases.' },
      { stepNumber: 3, title: 'Proxy & API Gateway Setup', description: 'Deploying reverse proxy to intercept and route live production traffic.' },
      { stepNumber: 4, title: 'Incremental Rewriting', description: 'Rebuilding modules with modern TypeScript and comprehensive tests.' },
      { stepNumber: 5, title: 'Decommissioning & Celebration', description: 'Retiring legacy servers once 100% traffic is verified on the modern platform.' }
    ],
    technologies: [],
    faqs: [
      {
        id: 'faq-1',
        question: 'Can we modernize our software without pausing customer operations?',
        answer: 'Yes. By using the Strangler Fig pattern, we migrate one feature at a time while the rest of your system continues running seamlessly in production.'
      }
    ]
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Product Design & Design Systems',
    slug: 'ui-ux',
    iconName: 'Layout',
    tag: 'GROWTH & DESIGN',
    summary: 'We craft thoughtful digital product experiences that combine intuitive user journeys, high-contrast visual clarity, and scalable design token systems ready for engineering handoff.',
    description: 'Great software is not just functional; it is a joy to use. We combine deep user research with cutting-edge visual craft to design interfaces that reduce cognitive friction and drive measurable conversions.',
    features: [],
    benefits: [],
    deliverables: [
      'Complete Figma Master File & Component Library',
      'Interactive Clickable Prototype',
      'Design System Documentation & Token Specs',
      'Tailwind CSS Configuration File'
    ],
    process: [
      { stepNumber: 1, title: 'User Journey Discovery', description: 'Mapping user mental models, wireflows, and friction points.' },
      { stepNumber: 2, title: 'Information Architecture', description: 'Structuring clean navigation hierarchies and page layouts.' },
      { stepNumber: 3, title: 'Visual Exploration & Identity', description: 'Developing distinct typography, color palettes, and component styles.' },
      { stepNumber: 4, title: 'High-Fidelity Interactive Prototyping', description: 'Building realistic Figma prototypes for user usability testing.' },
      { stepNumber: 5, title: 'Engineering Token Handoff', description: 'Exporting typed tokens and assisting frontend developers during implementation.' }
    ],
    technologies: [],
    faqs: [
      {
        id: 'faq-1',
        question: 'Do your designers understand real-world frontend engineering constraints?',
        answer: 'Yes. Our design team works directly alongside our senior frontend engineers, ensuring all designs are 100% buildable, responsive, and performance-conscious.'
      }
    ]
  },
  {
    id: 'seo',
    title: 'Technical SEO & Organic Search Architecture',
    slug: 'seo',
    iconName: 'Search',
    tag: 'GROWTH & DESIGN',
    summary: 'We architect web platforms engineered from the ground up to rank on Google for high-intent commercial keywords across US, UK, and international markets.',
    description: 'Most SEO agencies focus on superficial blog posts. We approach SEO from an engineering perspective: maximizing Core Web Vitals scores, implementing deep JSON-LD structured schemas, building dynamic programmatic landing pages, and establishing crawlable site architectures.',
    features: [],
    benefits: [],
    deliverables: [
      'High-Performance Search-Engine Optimized Web Application',
      'Complete JSON-LD Schema Architecture',
      'Automated Dynamic XML Sitemap & Robots.txt',
      'Monthly Search Performance & Indexation Telemetry'
    ],
    process: [
      { stepNumber: 1, title: 'Technical Crawl Audit', description: 'Identifying indexation errors, duplicate content, and redirect chains.' },
      { stepNumber: 2, title: 'Keyword & Intent Architecture', description: 'Mapping search intent to high-converting service and landing pages.' },
      { stepNumber: 3, title: 'Core Web Vitals Remediation', description: 'Eliminating render-blocking resources and layout shifts.' },
      { stepNumber: 4, title: 'Structured Data Implementation', description: 'Injecting comprehensive JSON-LD schemas across all dynamic routes.' },
      { stepNumber: 5, title: 'Search Telemetry & Monitoring', description: 'Setting up Search Console tracking and ranking telemetry.' }
    ],
    technologies: [],
    faqs: [
      {
        id: 'faq-1',
        question: 'Why is technical Next.js SEO better than traditional WordPress SEO?',
        answer: 'Next.js delivers near-instant edge-cached pre-rendered HTML without plugin bloat, database query latency, or excessive JavaScript payloads that drag down Google crawl efficiency.'
      }
    ]
  },
  {
    id: 'maintenance-support',
    title: 'Dedicated Engineering Support & SLA Maintenance',
    slug: 'maintenance-support',
    iconName: 'LifeBuoy',
    tag: 'CLOUD & DEVOPS',
    summary: 'Software is a living asset. We provide dedicated post-launch engineering retainers backed by guaranteed SLA response times, proactive security patching, and continuous performance optimization.',
    description: 'Never worry about unexpected server outages, broken API dependencies, or security vulnerabilities. Our engineering team acts as your dedicated technical operations department, keeping your systems fast, secure, and always online.',
    features: [],
    benefits: [],
    deliverables: [
      'SLA Support Agreement Contract',
      '24/7 Uptime & Error Alerting Dashboard',
      'Dedicated Slack / WhatsApp Engineering Emergency Channel',
      'Monthly Operational Health Report'
    ],
    process: [
      { stepNumber: 1, title: 'Monitoring Setup', description: 'Configuring synthetic health checks, alerting thresholds, and Sentry triggers.' },
      { stepNumber: 2, title: 'Security Baseline', description: 'Auditing third-party libraries and locking environment credentials.' },
      { stepNumber: 3, title: 'Continuous Ops', description: 'Proactive log reviews, database vacuuming, and routine patch applications.' },
      { stepNumber: 4, title: 'Monthly Reporting', description: 'Delivering uptime statistics, incident post-mortems, and performance metrics.' }
    ],
    technologies: [],
    faqs: [
      {
        id: 'faq-1',
        question: 'How quickly do you respond during a critical production emergency?',
        answer: 'For critical Priority-1 incidents affecting revenue or core functionality, our emergency response SLA is under 30 minutes 24/7.'
      }
    ]
  }
];
