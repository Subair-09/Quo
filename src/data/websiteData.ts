import { Service, Project, FeatureBlock, Testimonial, TechItem, TrainingProgram } from "../types";

export const SERVICES: Service[] = [
  {
    id: "landing-pages",
    title: "Professional Landing Pages",
    description: "We create high-converting landing pages optimized for lead generation, product launches, and marketing campaigns.",
    gradient: "from-blue-600 to-cyan-500",
    icon: "Layout",
    details: [
      "Conversion Rate Optimization (CRO)",
      "Adaptive Mobile-First Responsive Layouts",
      "Tailwind-designed pixel-perfect aesthetics",
      "Google PageSpeed Core Web Vitals Optimization",
      "Integrated SEO tags & schema structures"
    ],
    features: ["A/B Testing Ready", "Instant-Load Performance", "Dynamic CMS integrations"]
  },
  {
    id: "fullstack-web",
    title: "Full Stack Web Applications",
    description: "Custom scalable web platforms built using modern technologies and software development best practices.",
    gradient: "from-indigo-600 to-purple-600",
    icon: "Layers",
    details: [
      "Robust RESTful & GraphQL API architectures",
      "Real-time data synchronization utilizing WebSockets",
      "Modern relational databases (PostgreSQL, MySQL)",
      "Component-driven React/Vite frontends",
      "Secure role-based user management engines"
    ],
    features: ["Microservices Ready", "Scalable Dev Architectures", "Secure Cloud Deployments"]
  },
  {
    id: "ai-apps",
    title: "AI-Powered Applications",
    description: "Intelligent software powered by machine learning, generative AI, automated flows, and predictive analytics.",
    gradient: "from-purple-600 to-pink-500",
    icon: "Brain",
    details: [
      "Gemini & OpenAI API advanced implementations",
      "Cognitive vector database search engines (Pinecone/PGVector)",
      "Automated document summarization & analysis tools",
      "Custom predictive analysis dashboard configurations",
      "Natural language customer agents with context memory"
    ],
    features: ["Low-Latency LLM Calls", "Custom Context Seeding", "Smart Data-Driven Automations"]
  },
  {
    id: "business-solutions",
    title: "Business Software Solutions",
    description: "Custom ERP, CRM, HR, Inventory, and workflow automation systems tailored to your company's operational needs.",
    gradient: "from-cyan-500 to-teal-500",
    icon: "Cpu",
    details: [
      "Automated logistics & structured inventory workflows",
      "Advanced sales automation & pipeline optimization",
      "Custom multi-dimensional reports and spreadsheets",
      "Employee portals with intuitive, accessible workflows",
      "Enterprise systems migration and data cleansing"
    ],
    features: ["Seamless API Bridging", "High Security & Compliance", "Automated Daily Operations"]
  },
  {
    id: "templates-assets",
    title: "Web Templates & Digital Products",
    description: "Premium customizable web templates, modular admin dashboards, UI kits, and reusable development assets.",
    gradient: "from-pink-500 to-rose-500",
    icon: "FileCode2",
    details: [
      "Modular components fully compliant with Tailwind-Vite",
      "Pre-configured dashboard templates for rapid scaling",
      "Aesthetic vector backgrounds & custom layouts included",
      "TypeScript files with clean schemas & documentation",
      "Accessible React widgets ready for copy-paste deployment"
    ],
    features: ["Fully Customizable", "Developer-Optimized Code", "Instant Access Delivery"]
  },
  {
    id: "ai-training",
    title: "AI Training & Capacity Building",
    description: "Practical hands-on AI courses designed for professionals, creative teams, educational systems, and enterprises.",
    gradient: "from-rose-500 to-orange-500",
    icon: "BookOpen",
    details: [
      "Advanced Prompt Engineering and orchestration",
      "AI-Assisted software coding (Cursor, Copilot, custom setups)",
      "Workflow automations (Zapier, Make, n8n) using AI",
      "Organizational efficiency policies for Generative AI",
      "Hands-on workshops with live templates and practical tasks"
    ],
    features: ["Interactive Lab Sessions", "Corporate Certifications", "Custom Tailored Curriculum"]
  }
];

export const WHY_CHOOSE_US: FeatureBlock[] = [
  {
    title: "Innovation First",
    description: "We constantly scout and integrate emerging web & AI developments to ensure your product remains ahead of the curve.",
    icon: "Sparkles",
    color: "text-brand-cyan bg-brand-cyan/10 ring-brand-cyan/20"
  },
  {
    title: "Enterprise Quality",
    description: "We implement rigorous typing, code structures, lint validation, and secure setups to produce flawless, scalable products.",
    icon: "ShieldCheck",
    color: "text-brand-electric bg-brand-electric/10 ring-brand-electric/20"
  },
  {
    title: "AI Expertise",
    description: "Our engineered prompts, custom retrieval modules, and workflow pipelines are designed to unlock measurable workspace productivity.",
    icon: "Brain",
    color: "text-brand-purple bg-brand-purple/10 ring-brand-purple/20"
  },
  {
    title: "Client-Centered Approach",
    description: "Every blueprint we assemble scales directly with your distinct user requests, organizational budgets, and launch timelines.",
    icon: "Users",
    color: "text-pink-500 bg-pink-500/10 ring-pink-500/20"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "lanseed",
    title: "Lanseed",
    subtitle: "Real Estate Investment & Management Platform",
    category: "enterprise-saas",
    description: "A next-generation real estate platform streamlining property investment, portfolio management, and secure transactions.",
    longDescription: "Lanseed is a next-generation real estate investment and property management platform. We engineered a robust digital ecosystem that simplifies property discovery, structural evaluation tracking, rental yield analytics, and secure transaction workflows. Designed for developers, agents, and buyers, the platform brings speed, complete transparency, and high-performance mapping tools to contemporary real estate operations.",
    image: "https://imgur.com/4gEPEIO.png",
    technologies: ["React", "Express", "PostgreSQL", "Tailwind CSS", "Recharts", "Chart.js"],
    outcomes: [
      "Reduced real estate transaction processing times by 50%",
      "Supported dynamic listing tracking and property metrics validation",
      "Streamlined communication and portfolio tracking for property investors"
    ],
    link: "https://lanseed.example.com",
    client: "Lanseed Enterprise Holdings"
  },
  {
    id: "japamoves-ai",
    title: "JapaMoves AI",
    subtitle: "AI-Powered Relocation Assistant",
    category: "enterprise-saas",
    description: "Japamoves AI is an AI-powered platform designed to help individuals successfully relocate, study, work, and build careers abroad.",
    longDescription: "JapaMoves AI is a specialized relocation planning assistant designed to streamline international move compliance. Leveraging smart contextual queries, the platform analyzes destination pathways, visa classes, and user profiles to instantly construct complete, prioritized document checklists. It removes administrative friction, tracks visa progress, and aggregates localized immigration directives into a unified, stress-free dashboard.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=800",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Motion", "Express"],
    outcomes: [
      "Generated over 12,000 customized, stress-free immigration checklists with zero errors",
      "Reduced visa application preparation cycles from weeks to just a few minutes",
      "Seamless and highly responsive client platform tailored for global relocations"
    ],
    link: "https://japamovesai.com/",
    client: "JapaMoves Global Solutions"
  },
  {
    id: "anioba-global",
    title: "Anioba Multipurpose Global",
    subtitle: "Electrical, Solar & Built Infrastructure Solutions",
    category: "web-dev",
    description: "ANIOBA Multipurpose Global Ltd delivers reliable electrical, solar, construction, and contracting solutions for homes, industries, and commercial projects across structural frameworks.",
    longDescription: "We designed and engineered a highly professional digital flagship platform for ANIOBA Multipurpose Global Ltd. The custom portal elegantly showcases their multi-disciplinary contracting capabilities across high-yield solar arrays, heavy-duty electrical setups, residential and industrial construction, and robust structural frameworks. Streamlining client onboarding, the system helps target contractors, provides visual estimates, and offers seamless inquiry pipelines to drive high-value physical infrastructure contracts.",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Motion", "Scroll-Driven FX"],
    outcomes: [
      "Bespoke digital blueprint and structural project catalog styled for maximum corporate conversion",
      "Interactive request pipelines directing high-value solar grid and commercial electrical consultation leads",
      "Seamless and accessible platform rendering with extreme optimization for both mobile and desktop viewers"
    ],
    link: "https://aniobaglobal.com/",
    client: "ANIOBA Multipurpose Global Ltd"
  },
  {
    id: "ai-assistant",
    title: "AI Business Assistant",
    subtitle: "Intelligent Workflow Automation Suite",
    category: "ai-automation",
    description: "Generative AI multi-agent platform automating financial calculations, custom email followups, and daily report generation.",
    longDescription: "This advanced suite leverages high-accuracy Gemini API models to deliver customized workspaces. Users instruct agents securely via a structured human dashboard to parse spreadsheet arrays, categorize active ticket registries, write tailored CRM emails, and generate client-ready weekly summaries with absolute zero human guidance required.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    technologies: ["React", "Google Gen AI SDK", "Python", "MongoDB", "Pinecone", "WebSockets"],
    outcomes: [
      "Saves over 15 hours per employee week in routine administrative triage",
      "Automated parsing of 15,000+ custom PDF invoices with 99.8% field matching accuracy",
      "Direct API integrations with existing corporate CRM platforms"
    ],
    link: "https://aiassistant.example.com",
    client: "CoreAlpha Operations Ltd"
  },
  {
    id: "learning-portal",
    title: "Smart Learning Portal",
    subtitle: "Recommendation-Driven Corporate LMS",
    category: "ai-automation",
    description: "An adaptive educational dashboard mapping tailored technical lessons, dynamic quiz questions, and AI-powered help desks.",
    longDescription: "We developed a customizable Learning Management System utilizing semantic recommendations. It analyses in-session questionnaire performance in real time, serving customized lesson hierarchies to seal skill deficiencies. A fast, dedicated AI help assistant provides contextually aware, course-specific code tutoring on demand 24/7.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    technologies: ["Next.js", "Express", "Drizzle ORM", "PostgreSQL", "LangChain", "Tailwind CSS"],
    outcomes: [
      "Boosted dynamic module completion rates from 42% to an unprecedented 89%",
      "Slashed tutor ticketing load by 75% via immediate contextual learning feedback",
      "Scaled stably to support over 30,000 concurrent student modules during exam sessions"
    ],
    link: "https://learnsmart.example.com",
    client: "Horizon Training Initiative"
  }
];

export const TRAINING_PROGRAMS: TrainingProgram[] = [
  {
    id: "biz-efficiency",
    title: "Enterprise AI & Business Productivity",
    duration: "4 Weeks (Flexible / Cohort-based)",
    audience: "Business Leaders, Managers, and Corporate Teams",
    description: "Harness modern Generative AI techniques to optimize workspace communication, automate routine operations, and save precious hours weekly.",
    icon: "BarChart3",
    topics: [
      "Generative AI core fundamentals and corporate policies",
      "Strategic prompt structuring for business optimization",
      "Advanced workflow automation utilizing n8n, Make, and Zapier APIs",
      "Handling large enterprise datasets securely with specialized AI tools"
    ]
  },
  {
    id: "dev-acceleration",
    title: "AI-Augmented Software Engineering",
    duration: "6 Weeks (Intensive Development Labs)",
    audience: "Web Developers, Software Engineers, and Tech Teams",
    description: "Learn to build high-performance React architectures, APIs, and modern platforms utilizing modern AI assistants and generation systems securely.",
    icon: "Laptop",
    topics: [
      "AI-fueled application planning and visual flow mapping",
      "Leveraging LLMs for ultra-fast backend creation & tests",
      "Integrating @google/genai SDK in full-stack Express setups",
      "Advanced debugging strategies and code pattern refactoring"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Mr. Olawusi Benjamin",
    role: "Graphic Designer",
    company: "Landseed Nigeria",
    text: "Quotients Digital Horizon completely transformed Landseed Nigeria's digital presence. They engineered a stunning real estate investment and management platform that showcases our premier properties with gorgeous visual assets and elegant map layouts. Presenting our structural designs, pricing modules, and rental tracking dashboards has never been more seamless or visually impactful for our clients.",
    rating: 5,
    image: "https://imgur.com/c3x2DO0.png"
  },
  {
    id: "test-2",
    name: "Mr. Ismail Ayoyinka Adebayo",
    role: "Operations Director",
    company: "ANIOBA Multipurpose Global Ltd",
    text: "Quotients Digital Horizon engineered an exceptional flagship platform for ANIOBA. It showcases our electrical, solar power, and construction contracting capabilities flawlessly. The presentation is incredibly professional, resulting in a marked increase in corporate inquiries and higher conversion rates.",
    rating: 5,
    image: "https://imgur.com/02S7TDI.png"
  },
  {
    id: "test-3",
    name: "Ms. Adeyemi Faridah Adedoja",
    role: "Customer Service Representative",
    company: "Japamoves AI",
    text: "Quotients Digital Horizon built an incredible AI-powered assistant and inquiry routing system for Japamoves AI. Our customer service efficiency has risen dramatically, allowing us to respond to relocation and travel requests instantly with pristine accuracy. They did an exceptional job translating complex user pathways into a simple, high-performing workspace.",
    rating: 5,
    image: "https://imgur.com/vjWsk7x.png"
  }
];

export const TECH_STACK: TechItem[] = [
  // Frontend
  { name: "React", category: "frontend", icon: "Laptop", experienceLevel: "Expert / Primary Framework", useCase: "Highly-accessible stateful dashboards, web portals, and reactive UI elements" },
  { name: "Next.js", category: "frontend", icon: "Layers", experienceLevel: "Production Ready", useCase: "Static optimization, complex content pages, and hybrid React systems" },
  { name: "Vue", category: "frontend", icon: "Layout", experienceLevel: "Experienced", useCase: "Speedy modular web components and customer landing engines" },
  { name: "Tailwind CSS", category: "frontend", icon: "Sparkles", experienceLevel: "Native Fluent", useCase: "Systematic premium design variables, high-contrast aesthetics, and fluid layout frameworks" },
  
  // Backend
  { name: "Node.js", category: "backend", icon: "Server", experienceLevel: "Expert Backend Architect", useCase: "High-concurrency Express APIs, serverless handlers, and real-time WebSockets" },
  { name: "Laravel", category: "backend", icon: "FileCode2", experienceLevel: "Production Ready", useCase: "Robust monolithic corporate business structures" },
  { name: "Python", category: "backend", icon: "Terminal", experienceLevel: "Advanced", useCase: "Computational automations, intelligence-linking endpoints, and math structures" },
  { name: ".NET Core", category: "backend", icon: "ShieldCheck", experienceLevel: "Enterprise Standard", useCase: "High-security banking portals and rigid enterprise platforms" },

  // AI
  { name: "OpenAI API", category: "ai", icon: "Brain", experienceLevel: "System Integrator", useCase: "Custom creative copywriting engines and advanced conversational setups" },
  { name: "Google Gen AI", category: "ai", icon: "Sparkles", experienceLevel: "Primary Partner", useCase: "Context-aware data summarizing, document token analysis, and custom enterprise models" },
  { name: "LangChain", category: "ai", icon: "Layers", experienceLevel: "Experienced", useCase: "Connecting multi-agent software threads and cognitive memory chains" },

  // Database
  { name: "PostgreSQL", category: "database", icon: "Database", experienceLevel: "Expert / Primary DB", useCase: "Highly structured client accounts with strict transaction logic" },
  { name: "MySQL", category: "database", icon: "Database", experienceLevel: "Advanced", useCase: "Standard relational business tables and legacy content models" },
  { name: "MongoDB", category: "database", icon: "Layers", experienceLevel: "Experienced", useCase: "Flexible schema storage for tracking dynamic log registries" },

  // Cloud
  { name: "Google Cloud", category: "cloud", icon: "Cloud", experienceLevel: "Expert DevOps", useCase: "Cloud Run container hosting, IAM scaling, and secure regional setups" },
  { name: "AWS", category: "cloud", icon: "Cloud", experienceLevel: "Advanced Platform", useCase: "Elastic computing, content delivery networks, and raw asset storage vaults" },
  { name: "Azure", category: "cloud", icon: "Cloud", experienceLevel: "Enterprise Standard", useCase: "Active directory hybrid setups for deep corporate legacy storage" }
];
