export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon: string;
  gradient: string;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "all" | "ai-automation" | "enterprise-saas" | "web-dev";
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  outcomes: string[];
  link: string;
  client: string;
}

export interface FeatureBlock {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  image: string;
}

export interface TechItem {
  name: string;
  category: "frontend" | "backend" | "ai" | "database" | "cloud";
  icon: string;
  experienceLevel: string;
  useCase: string;
}

export interface TrainingProgram {
  id: string;
  title: string;
  duration: string;
  audience: string;
  description: string;
  topics: string[];
  icon: string;
}
