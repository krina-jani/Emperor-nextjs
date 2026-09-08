import { Service } from '../types/service';

export const services: Service[] = [
  {
    id: 'web-development',
    serviceNumber: '01',
    title: 'Web Development',
    eyebrow: 'Website Development Company in Ahmedabad',
    slug: 'web-development',
    iconName: 'Globe',
    tag: 'WEB & PWA',
    summary: 'Custom websites and web applications built for speed, security, and conversions. Full-stack builds, progressive web apps, and API integrations, all covered.',
    description: 'Your site is often the first thing people see about your company, so it needs to look good and build trust right away. As a top website development company in Ahmedabad, we create digital platforms that help your company look professional and turn visitors into real customers. Every project starts with your goals in mind, using clean code and modern methods so the final result loads fast, works well on mobile, and is easy to find on Google.',
    ctaText: 'Explore Web Development →',
    features: [],
    benefits: [],
    deliverables: [
      'Corporate, e-commerce, or custom web application',
      'SEO-optimized structure with clean code and fast loading',
      'CMS setup (WordPress, Shopify, or fully custom)',
      'Mobile-responsive design tested across devices'
    ],
    process: [
      {
        stepNumber: 1,
        title: 'Consultation & Requirement Analysis',
        description: 'We talk with you and understand what your company really needs, your goals, your audience, your competitors.'
      },
      {
        stepNumber: 2,
        title: 'UI/UX Design & Wireframing',
        description: 'We create the layout before writing any code, so you know exactly what the final product will look like.'
      },
      {
        stepNumber: 3,
        title: 'Frontend & Backend Development',
        description: 'Our team codes the platform using clean, modern practices, the part users see and the part that runs behind the scenes.'
      },
      {
        stepNumber: 4,
        title: 'Testing & Quality Assurance',
        description: 'We check everything on different devices, browsers, and screen sizes to find and fix problems before your users do.'
      },
      {
        stepNumber: 5,
        title: 'Launch & Post-Launch Support',
        description: 'Once you approve everything, we go live, and we keep supporting you so small issues get fixed quickly.'
      }
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Tailwind CSS'],
    faqs: [
      {
        id: 'faq-1',
        question: 'How much does website development cost in Ahmedabad?',
        answer: 'The cost depends on how complex the project is, a simple corporate page costs less than a custom online store or application.'
      },
      {
        id: 'faq-2',
        question: 'How long does it take to develop a website?',
        answer: 'A normal corporate project usually takes 2–4 weeks. Custom applications or bigger online stores can take 6–12 weeks.'
      },
      {
        id: 'faq-3',
        question: 'Should I choose a custom-built platform or a CMS like WordPress?',
        answer: 'It depends on your goals. CMS platforms are affordable and easy to manage for simple projects. A custom-built solution works better for unique features or more scale.'
      },
      {
        id: 'faq-4',
        question: 'Do you provide maintenance after launch?',
        answer: 'Yes, we offer maintenance and support plans that cover updates, security checks, and bug fixes after you go live.'
      }
    ]
  },
  {
    id: 'custom-software-development',
    serviceNumber: '02',
    title: 'Custom Software Development',
    eyebrow: 'Enterprise Custom Software Development in India',
    slug: 'custom-software-development',
    iconName: 'Code2',
    tag: 'CUSTOM LOGIC',
    summary: 'Software built around how a business actually works, not a generic tool with the logo swapped out. Enterprise applications, SaaS platforms, and API development included.',
    description: 'Emperor Smart Solutions builds custom software development services for businesses in India. Enterprise apps, SaaS platforms, database systems. Whatever the challenge is, the software gets shaped around it, not the other way around.',
    ctaText: 'Explore Custom Software →',
    features: [],
    benefits: [],
    deliverables: [
      'Custom enterprise applications (ERP, CRM, workflow automation)',
      'Scalable SaaS platforms with multi-tenant architecture',
      'RESTful and GraphQL API development with security built in',
      'Cloud-native infrastructure on AWS, Azure, or GCP'
    ],
    process: [
      {
        stepNumber: 1,
        title: 'Discovery & Analysis',
        description: 'Requirements get gathered and the project gets planned before any architecture gets drawn.'
      },
      {
        stepNumber: 2,
        title: 'Architecture Design',
        description: 'Picking a tech stack that actually fits the project.'
      },
      {
        stepNumber: 3,
        title: 'Agile Development',
        description: "Iterative work with regular demos so nobody's surprised months later."
      },
      {
        stepNumber: 4,
        title: 'Testing & QA',
        description: 'Comprehensive checks run across the build.'
      },
      {
        stepNumber: 5,
        title: 'Deployment & Support',
        description: 'The software launches and keeps running with ongoing maintenance.'
      }
    ],
    technologies: ['TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    faqs: [
      {
        id: 'faq-1',
        question: 'How much do custom software development services cost?',
        answer: 'Depends on the system\'s complexity and integrations needed. Real numbers come only after requirements get scoped.'
      },
      {
        id: 'faq-2',
        question: 'Can custom software integrate with existing business systems?',
        answer: 'Yes, that\'s usually the point. APIs and integration work get planned early so new software connects with CRMs, ERPs, or other tools already in use.'
      },
      {
        id: 'faq-3',
        question: 'Does custom software development include support after launch?',
        answer: 'Yes. Updates, monitoring, and maintenance continue after launch, same as any software.'
      },
      {
        id: 'faq-4',
        question: 'How long does a custom software project take?',
        answer: 'A focused application usually takes a few months. Larger enterprise systems or SaaS platforms with multiple integrations run longer.'
      }
    ]
  },
  {
    id: 'algo-trading-software',
    serviceNumber: '03',
    title: 'Algo Trading Software',
    eyebrow: 'Best Algo Trading Software in Ahmedabad & India',
    slug: 'algo-trading-software',
    iconName: 'TrendingUp',
    tag: 'FINTECH & AUTOMATION',
    summary: 'Algorithmic trading platforms combining AI-powered decisions with automated execution. Built within SEBI\'s regulatory framework for traders across India.',
    description: 'Algo trading software runs on pre-set rules built for consistency, entering and exiting trades automatically the moment market conditions actually match what\'s been programmed. Emperor Smart Solutions builds this within SEBI\'s regulatory framework, pairing AI-driven decision logic with automated execution for traders across India.',
    ctaText: 'Explore Algo Trading →',
    features: [],
    benefits: [],
    deliverables: [
      'Custom trading software engine (Mean Reversion, Trend Following, Arbitrage)',
      'Process and risk management suite',
      'Broker API integration with multi-account support',
      'Real-time performance analytics dashboard'
    ],
    process: [
      {
        stepNumber: 1,
        title: 'Strategy Design',
        description: 'Trading logic and parameters get worked out first, shaped around exactly what the strategy needs to capture in the market.'
      },
      {
        stepNumber: 2,
        title: 'Process',
        description: 'The strategy runs against historical data until it holds up, so nothing goes live on a hunch.'
      },
      {
        stepNumber: 3,
        title: 'Broker Integration',
        description: 'Once validated, the strategy connects to brokerage APIs and links straight into a live trading account.'
      },
      {
        stepNumber: 4,
        title: 'Live Deployment',
        description: 'The strategy goes live, with monitoring and support running alongside it so it keeps working the way it\'s supposed to.'
      }
    ],
    technologies: ['Python', 'FastAPI', 'WebSockets', 'Redis', 'Docker'],
    faqs: [
      {
        id: 'faq-1',
        question: 'Is algo trading legal in India?',
        answer: 'Yes. SEBI and the exchanges regulate it, and every trade runs through a registered broker with approved API access.'
      },
      {
        id: 'faq-2',
        question: 'Do I need coding skills to use algo trading software?',
        answer: 'Not really. Pre-built strategy templates and configurable tools cover most of what\'s needed without writing a line of code. Knowing some Python just opens up more room for custom logic later.'
      }
    ]
  },
  {
    id: 'mobile-app-development',
    serviceNumber: '04',
    title: 'Mobile App Development',
    eyebrow: 'Best Mobile App Development Company in India',
    slug: 'mobile-app-development',
    iconName: 'Smartphone',
    tag: 'IOS & ANDROID',
    summary: 'Native and cross-platform apps for iOS and Android. Built on the same architecture and standards as the web version, not a separate afterthought.',
    description: 'Emperor Smart Solutions provides mobile app development services in India, building apps for iOS, Android, and cross-platform use alongside web and desktop software. From the first idea to launch, apps get built scalable and secure, not just functional on paper. Custom application development is the thread that runs through every platform.',
    ctaText: 'Explore Mobile App Development →',
    features: [],
    benefits: [],
    deliverables: [
      'Native and cross-platform mobile apps (iOS & Android)',
      'Full backend and API integration',
      'Scalable architecture built to handle growth',
      'Custom security and data protection across every build'
    ],
    process: [
      {
        stepNumber: 1,
        title: 'Discovery & Planning',
        description: 'Gathering requirements before any screen gets touched.'
      },
      {
        stepNumber: 2,
        title: 'UI/UX Design',
        description: 'Wireframes and user experience mapped out for mobile and web alike.'
      },
      {
        stepNumber: 3,
        title: 'Development',
        description: 'Sprints run through the actual build rather than one long stretch of coding.'
      },
      {
        stepNumber: 4,
        title: 'Testing & QA',
        description: 'Everything gets checked, not just the parts that are easy to test.'
      },
      {
        stepNumber: 5,
        title: 'Deployment & Support',
        description: 'The build launches, with support running well after release.'
      }
    ],
    technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase'],
    faqs: [
      {
        id: 'faq-1',
        question: 'How much does mobile app development cost?',
        answer: 'Depends on complexity, platform count, and features involved. Real numbers come only after the actual scope is clear.'
      },
      {
        id: 'faq-2',
        question: 'Native app or cross-platform, which one\'s better?',
        answer: 'Native apps run faster and use device features more fully, but cost more since iOS and Android get built separately. Depends on what the project actually needs.'
      },
      {
        id: 'faq-3',
        question: 'How long does building a mobile app take?',
        answer: 'A simple app usually takes a couple of months. More complex builds run longer.'
      },
      {
        id: 'faq-4',
        question: 'Is support available after the app goes live?',
        answer: 'Yes. Updates, bug fixes, and performance monitoring continue post-launch, especially with OS updates rolling out regularly.'
      }
    ]
  },
  {
    id: 'digital-marketing',
    serviceNumber: '05',
    title: 'Digital Marketing',
    eyebrow: 'Best Digital Marketing Company in India & Ahmedabad',
    slug: 'digital-marketing',
    iconName: 'Megaphone',
    tag: 'GROWTH & ROI',
    summary: 'SEO, PPC, social media, and content strategy working as one campaign. Results get tracked back to actual business outcomes, not vanity numbers.',
    description: 'Traffic numbers on a dashboard don\'t pay the bills. Sales do. Digital marketing only works when traffic converts into leads that go somewhere. Emperor Smart Solutions runs as a digital marketing company in India built on that idea, pulling SEO, PPC, social media, content strategy, and conversion optimization into one campaign aimed at numbers that actually matter to the business.',
    ctaText: 'Explore Digital Marketing →',
    features: [],
    benefits: [],
    deliverables: [
      'Technical SEO, content optimization, and link building strategy',
      'PPC and paid social campaigns (Google Ads, Facebook, Instagram, LinkedIn)',
      'Content and social media marketing across the right channels',
      'Analytics, reporting, and CRO tied back to real ROI'
    ],
    process: [
      {
        stepNumber: 1,
        title: 'Audit & Analysis',
        description: 'An honest look at where things stand and where the real gaps are.'
      },
      {
        stepNumber: 2,
        title: 'Strategy Development',
        description: 'Building around actual business goals rather than pulling a template off a shelf.'
      },
      {
        stepNumber: 3,
        title: 'Campaign Execution',
        description: 'The multi-channel plan gets put into motion.'
      },
      {
        stepNumber: 4,
        title: 'Performance Tracking',
        description: 'Things get watched live, catching problems before a monthly report would even notice them.'
      },
      {
        stepNumber: 5,
        title: 'Reporting & Scaling',
        description: 'Results feed straight into the next round of strategy.'
      }
    ],
    technologies: ['Google Analytics 4', 'Google Tag Manager', 'Meta Ads', 'SEMrush', 'Ahrefs'],
    faqs: [
      {
        id: 'faq-1',
        question: 'Which service should come first, SEO or PPC?',
        answer: 'Depends on the timeline. PPC brings traffic almost immediately but stops the second the spend does. SEO takes longer to build up but keeps working without ongoing ad cost.'
      },
      {
        id: 'faq-2',
        question: 'How long does SEO take to show results?',
        answer: 'A few months usually, longer for competitive keywords. It compounds over time instead of fixing anything overnight.'
      },
      {
        id: 'faq-3',
        question: 'Is social media marketing worth it for B2B businesses?',
        answer: 'Yes, though the platform makes a real difference. LinkedIn usually wins for B2B lead generation, while Instagram and Facebook tend to do better for consumer brands.'
      },
      {
        id: 'faq-4',
        question: 'How is ROI measured across marketing campaigns?',
        answer: 'Campaign tracking and analytics dashboards connect spend to leads and sales. Attribution models tie it back to acquisition cost.'
      }
    ]
  },
  {
    id: 'ecommerce-website-design',
    serviceNumber: '06',
    title: 'E-commerce Website Design',
    eyebrow: 'E-commerce Website Design & Development Company in India',
    slug: 'ecommerce-website-design',
    iconName: 'ShoppingCart',
    tag: 'COMMERCE & RETAIL',
    summary: 'High-converting online stores on Shopify, WooCommerce, or a custom build. Designed around how people actually shop, not just how a store looks in a mockup.',
    description: 'E-commerce website development turns an online store into something people actually buy from, not just browse. Emperor Smart Solutions builds stores meant to convert, not just exist, for businesses across Ahmedabad and India, with responsive design, secure payments, and shopping flows that don\'t lose people halfway through checkout.',
    ctaText: 'Explore E-commerce Development →',
    features: [],
    benefits: [],
    deliverables: [
      'Custom-built online store (Shopify, WooCommerce, or fully custom)',
      'Optimized checkout and conversion funnel',
      'Secure, PCI-compliant payment integration',
      'Advanced search, filtering, and review system'
    ],
    process: [
      {
        stepNumber: 1,
        title: 'Discovery & Strategy',
        description: 'Figuring out the market and what the store actually needs to do before any screens get designed.'
      },
      {
        stepNumber: 2,
        title: 'UI/UX Design',
        description: 'Wireframes and visual direction get mapped out around how shoppers actually browse and decide.'
      },
      {
        stepNumber: 3,
        title: 'Development',
        description: 'The design turns into a working front end and backend, built on the right platform for the business.'
      },
      {
        stepNumber: 4,
        title: 'Testing & QA',
        description: 'Every flow gets checked so issues get caught before customers do.'
      },
      {
        stepNumber: 5,
        title: 'Launch & Support',
        description: 'The store goes live, with maintenance and performance checks continuing well after launch day.'
      }
    ],
    technologies: ['Shopify', 'WooCommerce', 'Next.js Commerce', 'Stripe', 'Razorpay'],
    faqs: [
      {
        id: 'faq-1',
        question: 'How much does e-commerce website development cost?',
        answer: 'Depends on the platform, how many products are involved, and how much custom functionality gets built in. A standard Shopify setup costs a lot less than a fully custom platform with unique workflows.'
      },
      {
        id: 'faq-2',
        question: 'Which platform is better, Shopify or WooCommerce?',
        answer: 'Shopify wins on speed and low maintenance. WooCommerce wins on control and customization for anyone already on WordPress. It depends on the business.'
      },
      {
        id: 'faq-3',
        question: 'How long does it take to build an e-commerce website?',
        answer: 'A standard Shopify or WooCommerce store usually takes a few weeks. Custom platforms with heavy integrations take longer.'
      },
      {
        id: 'faq-4',
        question: 'Is there support after the store goes live?',
        answer: 'Yes. Maintenance, security patches, and performance checks continue after launch, since a store needs upkeep the same way any live system does.'
      }
    ]
  },
  {
    id: 'mlm-software-development',
    serviceNumber: '07',
    title: 'MLM Software Development',
    eyebrow: 'MLM Software Development Services in India',
    slug: 'mlm-software-development',
    iconName: 'GitFork',
    tag: 'NETWORK CORE',
    summary: 'Binary, matrix, unilevel, and hybrid compensation plans, calculated with the accuracy a growing distributor network actually needs.',
    description: 'Emperor Smart Solutions builds MLM software for network marketing businesses. Commission calculations, distributor management, and compensation plans all run without manual errors creeping in. Binary, matrix, or unilevel, whatever structure the business runs on, the software handles it correctly, every time.',
    ctaText: 'Explore MLM Software →',
    features: [],
    benefits: [],
    deliverables: [
      'Custom compensation plan engine (Binary, Matrix, Unilevel, Hybrid)',
      'Secure payment gateway with commission payouts and e-wallet',
      'Distributor management with genealogy tree and downline tracking',
      'Real-time analytics dashboard and mobile app for distributors'
    ],
    process: [
      {
        stepNumber: 1,
        title: 'Requirement Analysis',
        description: 'Understanding the compensation plan and business model before any code gets written.'
      },
      {
        stepNumber: 2,
        title: 'Plan Architecture',
        description: 'Designing the MLM structure and commission logic everything else builds on.'
      },
      {
        stepNumber: 3,
        title: 'Development',
        description: 'Building the secure, scalable platform itself.'
      },
      {
        stepNumber: 4,
        title: 'Testing & QA',
        description: 'Comprehensive commission calculation checks, since a bug here directly costs money.'
      },
      {
        stepNumber: 5,
        title: 'Deployment',
        description: 'Launching the software with training and ongoing support included.'
      }
    ],
    technologies: ['Node.js', 'React', 'PostgreSQL', 'Redis', 'Docker'],
    faqs: [
      {
        id: 'faq-1',
        question: 'How much does MLM software development cost?',
        answer: 'Depends on the compensation plan complexity, number of features, and whether it\'s a custom build or white-label solution. Real pricing comes only after the requirements are mapped out.'
      },
      {
        id: 'faq-2',
        question: 'Which compensation plan works best for a new MLM business?',
        answer: 'Depends on how the business is structured. Binary works well for fast team-building models. Matrix suits companies focused on width over depth.'
      },
      {
        id: 'faq-3',
        question: 'Can existing MLM software be upgraded instead of rebuilt?',
        answer: 'Often, yes. New compensation plans or upgraded security can usually get added without starting from zero.'
      },
      {
        id: 'faq-4',
        question: 'Does MLM software include mobile access for distributors?',
        answer: 'Yes. Native mobile apps for iOS and Android let distributors track their downline, check commissions, and manage their business without needing a desktop.'
      }
    ]
  },
  {
    id: 'software-development',
    serviceNumber: '08',
    title: 'Software Development',
    eyebrow: 'Software Development Company in Ahmedabad',
    slug: 'software-development',
    iconName: 'Layers',
    tag: 'ENTERPRISE CORE',
    summary: 'End-to-end software solutions for CRM systems, enterprise platforms, and custom web applications, built to match how the business runs.',
    description: 'Emperor Smart Solutions is a software company. It builds custom software for businesses across India. The software gets built around real business problems, not generic ones. If the need is a CRM, an ERP, or something else, the software gets made to fit it.',
    ctaText: 'Explore Software Development →',
    features: [],
    benefits: [],
    deliverables: [
      'Custom CRM, ERP, and business tools',
      'Web apps that work fast and grow with the business',
      'Strong, secure system design from day one',
      'Automated testing setup for fewer bugs'
    ],
    process: [
      {
        stepNumber: 1,
        title: 'Discovery & Planning',
        description: 'The team learns what\'s needed before any design work starts.'
      },
      {
        stepNumber: 2,
        title: 'Design & Architecture',
        description: 'System design and UI mockups get built to last under real use.'
      },
      {
        stepNumber: 3,
        title: 'Development',
        description: 'Development happens step by step, with testing built in along the way.'
      },
      {
        stepNumber: 4,
        title: 'Testing & QA',
        description: 'Bugs get caught before launch, not after.'
      },
      {
        stepNumber: 5,
        title: 'Deployment & Support',
        description: 'The software goes live, and support keeps going as the business grows.'
      }
    ],
    technologies: ['TypeScript', 'Node.js', 'Next.js', 'PostgreSQL', 'AWS'],
    faqs: [
      {
        id: 'faq-1',
        question: 'How much does custom software development cost?',
        answer: 'It depends on the size and complexity of the project. Real numbers come once the actual needs are clear.'
      },
      {
        id: 'faq-2',
        question: 'What\'s the difference between custom software and off-the-shelf tools?',
        answer: 'Off-the-shelf tools work fine until they don\'t fit the business anymore. Custom software gets built around how the business already works.'
      },
      {
        id: 'faq-3',
        question: 'Does the company build both web and mobile versions of the same software?',
        answer: 'Yes. Mobile apps often get built alongside the web version, using the same backend.'
      }
    ]
  },
  {
    id: 'crm-development',
    serviceNumber: '09',
    title: 'Custom CRM Development',
    eyebrow: 'Custom CRM Development Services',
    slug: 'crm-development',
    iconName: 'Users',
    tag: 'SYSTEMS & AUTOMATION',
    summary: 'Every pipeline stage and every automation gets shaped around the real sales process. Emperor Smart Solutions builds custom CRM systems this way.',
    description: 'Custom CRM development means building a CRM around how one business actually sells, not generic software made for everyone. Every pipeline stage and every automation gets shaped around the real sales process. Emperor Smart Solutions builds custom CRM systems this way, since one generic CRM rarely works well for two different businesses.',
    ctaText: 'Explore Custom CRM →',
    features: [],
    benefits: [],
    deliverables: [
      'Sales pipeline management with automatic stage tracking',
      'Lead capture and routing from every source',
      'CRM integration with email, accounting, and support tools',
      'Custom dashboards, reporting, and role-based access'
    ],
    process: [
      {
        stepNumber: 1,
        title: 'Sales Process Mapping',
        description: 'Understanding how deals actually move through the business before any pipeline gets built.'
      },
      {
        stepNumber: 2,
        title: 'CRM Architecture & Build',
        description: 'The platform gets built around that real sales process, not a generic funnel.'
      },
      {
        stepNumber: 3,
        title: 'Integration',
        description: 'The CRM gets connected to email platforms, accounting software, booking systems, and other tools already in place.'
      },
      {
        stepNumber: 4,
        title: 'Automation Setup',
        description: 'Follow-ups, reminders, and stage alerts get configured to fire on their own based on activity.'
      },
      {
        stepNumber: 5,
        title: 'Launch & Support',
        description: 'The CRM goes live, with updates and new features continuing as the sales process itself evolves.'
      }
    ],
    technologies: [],
    faqs: [
      {
        id: 'faq-1',
        question: 'Is a custom CRM better than Odoo, Salesforce, or HubSpot?',
        answer: 'Depends on the business honestly. Ready-made platforms handle standard sales processes fine. A custom CRM starts making more sense once the sales process stops fitting a generic template.'
      },
      {
        id: 'faq-2',
        question: 'Can a custom CRM integrate with existing business systems?',
        answer: 'Yes, and this is usually one of the first things that gets discussed. One connected system replaces five disconnected ones holding pieces of the same customer\'s information.'
      },
      {
        id: 'faq-3',
        question: 'How long does custom CRM development take?',
        answer: 'A focused build for a small sales team usually takes a few weeks to a couple of months. Bigger builds with several integrations take longer.'
      },
      {
        id: 'faq-4',
        question: 'Does custom CRM development include data migration?',
        answer: 'Yes. Existing customer records, deal history, and contact data move over as part of the build. Nothing gets lost in the switch.'
      }
    ]
  },
  {
    id: 'erp-development',
    serviceNumber: '10',
    title: 'ERP Development',
    eyebrow: 'ERP Development Services',
    slug: 'erp-development',
    iconName: 'Database',
    tag: 'SYSTEMS & AUTOMATION',
    summary: 'ERP development means building one connected system that handles finance, inventory, HR, and every other department together.',
    description: 'ERP development means building one connected system that handles finance, inventory, HR, and every other department together. Emperor Smart Solutions builds this kind of software for businesses running on too many disconnected tools right now.',
    ctaText: 'Explore ERP Development →',
    features: [],
    benefits: [],
    deliverables: [
      'Financial management (budgeting, ledger, payroll, tax handling)',
      'Inventory and supply chain management with automatic reordering',
      'Production, HR, and sales modules connected to one system',
      'Business intelligence dashboards with real-time reporting'
    ],
    process: [
      {
        stepNumber: 1,
        title: 'Discovery',
        description: 'Business needs, existing workflows, and the current IT environment all get mapped out before any design work starts.'
      },
      {
        stepNumber: 2,
        title: 'Design & Planning',
        description: 'System architecture, module scope, and the right tech stack get decided, along with a clear budget and timeline.'
      },
      {
        stepNumber: 3,
        title: 'Development & Testing',
        description: 'Frontend and backend development happen alongside integration work, with testing running throughout.'
      },
      {
        stepNumber: 4,
        title: 'Deployment',
        description: 'The system goes live, whether on-premises or in the cloud, with data migration and user training as part of the rollout.'
      },
      {
        stepNumber: 5,
        title: 'Post-Launch Support',
        description: 'Fine-tuning, troubleshooting, and updates continue after launch, since a growing business rarely stays static for long.'
      }
    ],
    technologies: [],
    faqs: [
      {
        id: 'faq-1',
        question: 'Is a custom ERP better than SAP or Oracle?',
        answer: 'For most growing businesses, yes. SAP and Oracle suit large global corporations. A custom build covers the same core needs without the licensing cost or lengthy rollout.'
      },
      {
        id: 'faq-2',
        question: 'What factors affect the cost of ERP development?',
        answer: 'Cost gets fixed based on the actual requirements, system complexity, the number of modules needed, and deployment type.'
      },
      {
        id: 'faq-3',
        question: 'Can ERP software integrate with existing business tools?',
        answer: 'Yes. Accounting software, CRM platforms, e-commerce tools, and other systems already in use typically connect directly.'
      },
      {
        id: 'faq-4',
        question: 'Does ERP development include data migration from old systems?',
        answer: 'Yes. Existing inventory records, financial data, and vendor information move into the new system as part of the build.'
      }
    ]
  },
  {
    id: 'legacy-modernization',
    serviceNumber: '11',
    title: 'Legacy Modernization',
    eyebrow: 'Legacy Modernization Services',
    slug: 'legacy-modernization',
    iconName: 'RefreshCw',
    tag: 'ENGINEERING',
    summary: 'Legacy modernization services update old software so it runs on current technology instead of infrastructure that\'s outdated and hard to maintain.',
    description: 'Legacy modernization services update old software so it runs on current technology instead of infrastructure that\'s outdated and hard to maintain. Emperor Smart Solutions delivers these services for businesses stuck on systems built years ago, systems that still run the business but are quietly getting harder to fix, harder to secure, and harder to staff every year.',
    ctaText: 'Explore Legacy Modernization →',
    features: [],
    benefits: [],
    deliverables: [
      'Legacy application migration to modern, cloud-based infrastructure',
      'Cloud modernization with services that scale independently',
      'Database modernization for current data volume and performance',
      'Security and compliance review (HIPAA, GDPR, PCI DSS)'
    ],
    process: [
      {
        stepNumber: 1,
        title: 'Assessment',
        description: 'The system gets reviewed on its own terms, what\'s actually broken, what\'s just old, and what approach fits the business\'s risk tolerance and timeline.'
      },
      {
        stepNumber: 2,
        title: 'Approach Selection',
        description: 'The right modernization approach gets chosen, rehost, replatform, re-architect, rebuild, or replace, based on what the system actually needs.'
      },
      {
        stepNumber: 3,
        title: 'Migration & Development',
        description: 'Work happens across cloud platforms, containerization, and databases, with testing running throughout the engagement.'
      },
      {
        stepNumber: 4,
        title: 'Parallel Run & Cutover',
        description: 'Old and new systems run side by side, so the switch happens only once the new system has been validated against real usage.'
      },
      {
        stepNumber: 5,
        title: 'Post-Launch Support',
        description: 'Support continues after the project wraps up, since a modernized system still needs monitoring and occasional adjustment.'
      }
    ],
    technologies: [],
    faqs: [
      {
        id: 'faq-1',
        question: 'What is legacy modernization?',
        answer: 'Updating old software so it runs on current technology and works with modern tools. It doesn\'t always mean rebuilding the whole thing.'
      },
      {
        id: 'faq-2',
        question: 'How long does legacy system migration take?',
        answer: 'Depends heavily on the size of the system and how many other things connect to it. A smaller migration might wrap up in a few months.'
      },
      {
        id: 'faq-3',
        question: 'Does modernization always mean moving to the cloud?',
        answer: 'No. Cloud modernization is common, but plenty of systems get modernized while staying on-site, usually because of compliance needs or sensitive data.'
      },
      {
        id: 'faq-4',
        question: 'Does legacy modernization address compliance requirements like HIPAA or GDPR?',
        answer: 'Yes, when relevant to the business. Compliance checks typically run alongside the technical assessment.'
      }
    ]
  },
  {
    id: 'ui-ux',
    serviceNumber: '12',
    title: 'UI/UX & Design Systems',
    eyebrow: 'UI/UX & Design Systems Services',
    slug: 'ui-ux',
    iconName: 'Layout',
    tag: 'GROWTH & DESIGN',
    summary: 'UI/UX design services shape how people actually experience a product, not just how it looks on the surface.',
    description: 'UI/UX design services shape how people actually experience a product, not just how it looks on the surface. Emperor Smart Solutions builds interfaces and design systems that make a website, app, or platform easier to use, not just easier to look at. A good design gets out of the way, people find what they need and don\'t think twice about the interface itself.',
    ctaText: 'Explore UI/UX Design →',
    features: [],
    benefits: [],
    deliverables: [
      'User research and usability testing reports',
      'Wireframes and interactive prototypes',
      'Complete design system (components, typography, spacing rules)',
      'Responsive UI design across all devices'
    ],
    process: [
      {
        stepNumber: 1,
        title: 'User Research',
        description: 'Understanding who\'s actually using the product and what they\'re trying to accomplish, before any screen gets designed.'
      },
      {
        stepNumber: 2,
        title: 'Wireframes & Prototypes',
        description: 'Low-fidelity layouts map out structure and flow early, with interactive prototypes tested before a single line of code gets written.'
      },
      {
        stepNumber: 3,
        title: 'Design System Development',
        description: 'A component library gets built once, covering typography, color systems, and reusable UI components.'
      },
      {
        stepNumber: 4,
        title: 'Interaction Design',
        description: 'Micro-interactions, transitions, and feedback get designed deliberately instead of left to default behavior.'
      },
      {
        stepNumber: 5,
        title: 'Usability Testing',
        description: 'Real people try the actual interface and get watched doing it, surfacing friction points internal teams usually miss.'
      }
    ],
    technologies: [],
    faqs: [
      {
        id: 'faq-1',
        question: 'What is the difference between UI and UX design?',
        answer: 'UI is the visual layer, what a product looks like. UX is the experience layer, how a product actually works and feels to use.'
      },
      {
        id: 'faq-2',
        question: 'What is a design system used for?',
        answer: 'A design system keeps a product visually and functionally consistent as it grows, by giving every designer and developer the same set of reusable components and rules.'
      },
      {
        id: 'faq-3',
        question: 'Does every product need a full design system?',
        answer: 'Not necessarily. Smaller products or early-stage MVPs might only need a lightweight style guide.'
      },
      {
        id: 'faq-4',
        question: 'How long does a UI/UX design project take?',
        answer: 'A focused redesign of a single product usually takes a few weeks. A full design system built from scratch takes longer, often a couple of months.'
      }
    ]
  },
  {
    id: 'ai-development',
    serviceNumber: '13',
    title: 'AI & Machine Learning',
    eyebrow: 'AI & Machine Learning Services',
    slug: 'ai-development',
    iconName: 'Brain',
    tag: 'AI & DATA',
    summary: 'AI and machine learning services turn raw data and static workflows into systems that can retrieve answers, hold conversations, and take action on their own.',
    description: 'AI and machine learning services turn raw data and static workflows into systems that can retrieve answers, hold conversations, and take action on their own. Emperor Smart Solutions builds these systems for businesses that want AI doing real work, not just running as a demo. Seven services sit under this umbrella, and most businesses only need two or three of them working together.',
    ctaText: 'Explore AI & Machine Learning →',
    features: [],
    benefits: [],
    deliverables: [
      'RAG-powered AI grounded in real business documents and data',
      'AI chatbot or voice agent for support and customer queries',
      'AI agent for multi-step task automation',
      'AI model and API integration with existing systems (CRM, ERP)'
    ],
    process: [
      {
        stepNumber: 1,
        title: 'RAG Solutions',
        description: 'Connecting an AI model to a business\'s actual documents, policies, and data, so answers come from real sources instead of guesses.'
      },
      {
        stepNumber: 2,
        title: 'AI Chatbot or Voice Agent Development',
        description: 'Building conversational systems that retrieve accurate answers from a business\'s knowledge base, escalating to a human when needed.'
      },
      {
        stepNumber: 3,
        title: 'AI Agent Development',
        description: 'Building systems that complete multi-step tasks on their own, built around specific workflows a business wants automated.'
      },
      {
        stepNumber: 4,
        title: 'Business Automation',
        description: 'Connecting AI models to existing workflows, approvals, data entry, and scheduling, so repetitive tasks run on their own.'
      },
      {
        stepNumber: 5,
        title: 'Model & API Integration',
        description: 'Connecting the right AI model to existing systems, handling authentication, data flow, and error handling.'
      }
    ],
    technologies: [],
    faqs: [
      {
        id: 'faq-1',
        question: 'What is RAG in AI development?',
        answer: 'Retrieval-Augmented Generation. It connects an AI model to real documents and data, so answers come from actual sources instead of the model guessing.'
      },
      {
        id: 'faq-2',
        question: 'How is an AI agent different from a chatbot?',
        answer: 'A chatbot answers questions. An agent takes multi-step actions, checking systems, updating records, completing tasks.'
      },
      {
        id: 'faq-3',
        question: 'Which AI models get used for these projects?',
        answer: 'Depends on the use case. Options typically include OpenAI, Anthropic Claude, Google Gemini, or open-source models.'
      },
      {
        id: 'faq-4',
        question: 'How long does an AI chatbot or agent project take?',
        answer: 'A focused RAG chatbot for a specific use case usually takes a few weeks. More complex agentic systems take longer.'
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
