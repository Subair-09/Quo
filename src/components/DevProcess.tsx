import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FileText,
  Search,
  Compass,
  Code2,
  ShieldCheck,
  Rocket,
  LineChart,
  CheckCircle,
  HelpCircle,
  Sparkles
} from "lucide-react";

interface DevProcessProps {
  isDarkMode: boolean;
}

export default function DevProcess({ isDarkMode }: DevProcessProps) {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      tagline: "Unearthing scope parameters and project goals",
      description: "We initiate the relationship with deep consulting. We analyze existing software frameworks, manually tasks backlogs, employee friction reports, and design detailed feature maps to isolate where automation can yield high returns.",
      icon: Search,
      checklist: [
        "Isolate business operational blockages",
        "Perform initial API structure blueprints",
        "Outline budget and project safety parameters",
        "Validate integration capabilities with current tools"
      ],
      output: "Operational Architecture Specification Doc (PRD)"
    },
    {
      number: "02",
      title: "Planning & Design",
      tagline: "System architecture drafting and bespoke UI wireframes",
      description: "No generic templates. We wireframe user paths pixel-by-pixel, crafting premium custom visual identities matching your branding. On the backend, we draft rigorous entity-relationship (ER) databases, API endpoints, and scalable cloud structures.",
      icon: Compass,
      checklist: [
        "Assemble high-fidelity interactive Figma mockups",
        "Produce detailed database entity-relational schemas",
        "Isolate custom prompts rules and context scopes",
        "Deliver complete technical roadmap schedules"
      ],
      output: "Figma Prototypes & Database Entity Schemas"
    },
    {
      number: "03",
      title: "Development",
      tagline: "Rigorous production-grade software programming",
      description: "Our core code phase. We build performant web platforms utilizing React, Next.js, and Express, reinforced by strict TypeScript interfaces to maintain clean structures. AI integration is coded using low-latency server APIs.",
      icon: Code2,
      checklist: [
        "Program modular client interfaces in React & Tailwind v4",
        "Develop high-concurrency Express APIs with strict auth",
        "Orchestrate cognitive Generative AI pipelines",
        "Implement secure offline-first client storage states"
      ],
      output: "Functional Repository Core Code & Testing Endpoints"
    },
    {
      number: "04",
      title: "Testing & Optimization",
      tagline: "Assuring robust speed, typing integrity, and security",
      description: "We validate type bindings, clean performance bottlenecks, audit network security structures, optimize responsive screens, and run load testing suites to guarantee 99.9% uptime scales.",
      icon: ShieldCheck,
      checklist: [
        "Audit syntax against strict static TypeScript compiler",
        "Perform extensive mobile UX responsive styling checks",
        "Run mock brute loads monitoring backend container latency",
        "Test cognitive safety and prompt engineering boundaries"
      ],
      output: "Verified Lint, Stress-Loading, and Security Manifest"
    },
    {
      number: "05",
      title: "Deployment",
      tagline: "Launching securely to Cloud Run containers",
      description: "We orchestrate CI/CD pipelines deploying your custom systems cleanly. Files serve over secure HTTPS networks with real-time logging, error routing, and automatic cloud system scaling fully armed.",
      icon: Rocket,
      checklist: [
        "Configure Docker containers and Cloud Run definitions",
        "Provision relational databases with secure IAM access roles",
        "Redirect global DNS protocols and assign SSL certificates",
        "Establish automated telemetry notification logs"
      ],
      output: "Live Scalplayable Platform Link & Admin Credentials"
    },
    {
      number: "06",
      title: "Support & Growth",
      tagline: "Continuous scaling, analytics audits, and model updates",
      description: "We deliver continuous operational support. We inspect analytics logs to locate usage blockages, perform routine security updates, and iterate prompt embeddings to capture fresh organizational data changes.",
      icon: LineChart,
      checklist: [
        "Monitor container resource load levels monthly",
        "Apply critical software security patch-sets immediately",
        "Optimize models based on actual customer feedback",
        "Draft growth roadmaps for feature additions"
      ],
      output: "Uptime Analytics Dashboard & Quarterly Audit Reports"
    }
  ];

  return (
    <section
      id="process"
      className={`py-20 lg:py-24 relative overflow-hidden transition-colors duration-300 ${
        isDarkMode ? "bg-[#0B1020] text-white" : "bg-white text-[#0F172A]"
      }`}
    >
      {/* Decorative gradient orbs */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-brand-electric/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-brand-cyan/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-1.5 py-1 px-3 rounded-full border border-brand-electric/25 bg-brand-electric/10 text-[10px] font-mono tracking-widest text-brand-electric dark:text-brand-cyan uppercase">
            <Sparkles size={11} />
            <span>OPERATIONAL TIMELINE</span>
          </div>

          <h2 className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight ${isDarkMode ? "text-white" : "text-brand-midnight"}`}>
            How We Work
          </h2>
          <p className={`text-sm font-sans leading-relaxed ${isDarkMode ? "text-slate-300" : "text-slate-500"}`}>
            Our methodical engineering workflow ensures predictable, scalable, and premium software delivery cycles. Explore each phase below.
          </p>
        </div>

        {/* Step navigation rail */}
        <div className="overflow-x-auto pb-4 max-w-full flex justify-start md:justify-center items-center gap-1.5 mb-10 select-none no-scrollbar">
          {steps.map((st, idx) => {
            const ActiveIcon = st.icon;
            const isCurrent = activeStep === idx;

            return (
              <button
                key={st.number}
                onClick={() => setActiveStep(idx)}
                className={`flex items-center space-x-2.5 px-4.5 py-3 rounded-xl border text-xs font-semibold tracking-wider transition-all duration-300 shrink-0 cursor-pointer ${
                  isCurrent
                    ? "bg-brand-electric text-white border-brand-electric shadow-lg shadow-brand-electric/15"
                    : isDarkMode
                    ? "bg-white/5 border-white/5 text-slate-300 hover:bg-white/10"
                    : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                }`}
              >
                <span className={`text-[10px] font-mono ${isCurrent ? "text-brand-cyan" : "text-slate-400"}`}>
                  {st.number}
                </span>
                <span>{st.title.split(" ")[0]}</span>
                <ActiveIcon size={13} className={`animate-pulse ${isCurrent ? "text-brand-cyan" : "text-slate-400"}`} />
              </button>
            );
          })}
        </div>

        {/* Highlighted Step detailed summary */}
        <div className="max-w-4xl mx-auto text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className={`p-6 sm:p-8 rounded-3xl border ${
                isDarkMode ? "bg-brand-midnight/40 border-white/10" : "bg-slate-50 border-slate-200"
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                
                {/* Left col: Title and Bio */}
                <div className="md:col-span-7 space-y-4">
                  <div className="flex items-center space-x-3.5">
                    <span className="font-mono text-3xl font-extrabold text-brand-purple tracking-widest leading-none">
                      {steps[activeStep].number}
                    </span>
                    <div>
                      <h3 className="font-display font-extrabold text-lg leading-tight uppercase tracking-wider">
                        {steps[activeStep].title}
                      </h3>
                      <p className={`text-[11px] font-mono mt-0.5 tracking-wide ${isDarkMode ? "text-brand-cyan" : "text-brand-electric"}`}>
                        {steps[activeStep].tagline}
                      </p>
                    </div>
                  </div>

                  <p className={`text-xs font-sans leading-relaxed tracking-wide ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                    {steps[activeStep].description}
                  </p>

                  <div className="p-3.5 rounded-xl bg-brand-purple/5 border border-brand-purple/10 flex items-center space-x-3">
                    <FileText size={15} className="text-brand-purple shrink-0" />
                    <div>
                      <p className="text-[10px] font-mono text-slate-400 uppercase">Phase Deliverable Output:</p>
                      <p className="text-xs font-semibold font-sans mt-0.5">{steps[activeStep].output}</p>
                    </div>
                  </div>
                </div>

                {/* Right col: Checklists */}
                <div className="md:col-span-5 p-5 rounded-2xl bg-white/2.5 border border-white/5 space-y-3">
                  <h4 className="font-display font-bold text-xs tracking-wider uppercase text-slate-400">
                    Phase Milestones Check:
                  </h4>
                  
                  <div className="space-y-2.5">
                    {steps[activeStep].checklist.map((item, id) => (
                      <div key={id} className="flex items-start space-x-2 text-xs">
                        <CheckCircle size={13} className="text-emerald-500 mt-1 shrink-0" />
                        <span className={isDarkMode ? "text-slate-300" : "text-slate-600"}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
