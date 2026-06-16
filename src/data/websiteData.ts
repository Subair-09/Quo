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
    subtitle: "Enterprise Business Operating System",
    category: "enterprise-saas",
    description: "A comprehensive digital infrastructure delivering smart customer pipelines, billing automations, and live operations management.",
    longDescription: "Lanseed transforms day-to-day enterprise operations. We engineered a robust web hub that aggregates client management, automated invoicing, secure client workspaces, and dynamic telemetry tracking. Built using React and Node.js with high-concurrency database schemas, Lanseed cuts weekly administrative task management times by over 40%.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    technologies: ["React", "Express", "PostgreSQL", "Tailwind CSS", "Recharts", "Chart.js"],
    outcomes: [
      "40% reduction in weekly billing operations",
      "Aggregate uptime of 99.99% across intensive use cases",
      "Secured 5,000+ active staff workspaces with multi-role access control"
    ],
    link: "https://lanseed.example.com",
    client: "Lanseed Enterprise Holdings"
  },
  {
    id: "anioba-global",
    title: "Anioba Global Multipurpose",
    subtitle: "Corporate Digital Ecosystem & Logistics Hub",
    category: "web-dev",
    description: "Custom global hub with digital cargo-booking tools, real-time shipment status dashboards, and complex enterprise tracking.",
    longDescription: "Deploying high-speed custom systems for Anioba Global facilitated a clean modernization. We built a customer portal providing instantaneous quote estimations, real-time freight updates, digital invoice downloads, and custom warehouse state trackers. Beautiful micro-actions and responsive maps make the logistics client UI highly accessible on any browser standard.",
    image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80&w=800",
    technologies: ["React", "TypeScript", "NodeJS", "Google Maps Platform", "Vite", "D3.js"],
    outcomes: [
      "Eliminated 65% of customer inquiry hotline traffic with live parcel trackers",
      "100% compliant cargo manifests handled directly inside the digital console",
      "Average shipment booking process cut from 45 minutes to under 3 minutes"
    ],
    link: "https://aniobaglobal.example.com",
    client: "Anioba Logistics Group"
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
    name: "Dr. Kingsley Okonjo",
    role: "Director of Enterprise Development",
    company: "Lanseed Group Solutions",
    text: "Working with Quotients Digital Horizon was a game-changer for our operating system. They understood our complex pipeline, designed a gorgeous interface, and deployed a secure, ultra-fast web workspace. The level of engineering discipline and attention to detail they bring is outstanding.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "test-2",
    name: "Aisha Gidado Bello",
    role: "Chief Logistics Officer",
    company: "Anioba Global Multipurpose Ltd",
    text: "They completely modernised our customer workflow. Our logistics hub can now handle global booking and real-time cargo updates seamlessly on mobile. Customers love the simplicity, and the platform has brought enormous operational efficiencies to our front offices.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "test-3",
    name: "Marcus Sterling",
    role: "Founder & CTO",
    company: "CoreAlpha Operations",
    text: "We requested an automated invoice processing portal driven by AI. Quotients didn't just write a mock template; they built a solid, functional tool integrated with robust models. Our administrative burden has plummeted, making this one of our best software investments.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
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
