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
      className="py-20 lg:py-24 relative overflow-hidden bg-[#0D0D0D] text-white border-t border-[#1a1a1a]/40"
    >
      {/* Decorative gradient orbs */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-[#00FF66]/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-[#00C853]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-1.5 py-1 px-3.5 rounded-full border border-[#00FF66]/20 bg-[#00FF66]/5 text-[#00FF66] text-[10px] font-mono tracking-widest uppercase font-bold">
            <Sparkles size={11} />
            <span>OPERATIONAL TIMELINE</span>
          </div>

          <h2 className="font-display text-4xl font-extrabold tracking-tight text-white">
            How We Work
          </h2>
          <p className="text-sm font-sans leading-relaxed text-[#B5B5B5]">
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
                className={`flex items-center space-x-2.5 px-4.5 py-3 rounded-xl border text-xs font-semibold tracking-wider transition-all duration-350 shrink-0 cursor-pointer ${
                  isCurrent
                    ? "bg-[#00FF66] text-black border-[#00FF66] font-bold shadow-lg shadow-[#00FF66]/10"
                    : "bg-[#121212] border-[#1A1A1A] text-[#B5B5B5] hover:border-[#00FF66]/35"
                }`}
              >
                <span className={`text-[10px] font-mono ${isCurrent ? "text-slate-900" : "text-[#707070]"}`}>
                  {st.number}
                </span>
                <span>{st.title.split(" ")[0]}</span>
                <ActiveIcon size={13} className={`animate-pulse ${isCurrent ? "text-slate-900" : "text-[#00FF66]"}`} />
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
              className="p-6 sm:p-8 rounded-3xl border border-[#1A1A1A] bg-[#121212] text-white shadow-xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                
                {/* Left col: Title and Bio */}
                <div className="md:col-span-7 space-y-4">
                  <div className="flex items-center space-x-3.5">
                    <span className="font-mono text-3xl font-extrabold text-[#00FF66] tracking-widest leading-none">
                      {steps[activeStep].number}
                    </span>
                    <div>
                      <h3 className="font-display font-extrabold text-base leading-tight uppercase tracking-wider text-white">
                        {steps[activeStep].title}
                      </h3>
                      <p className="text-[11px] font-mono mt-0.5 tracking-wide text-[#00FF66] uppercase font-bold">
                        {steps[activeStep].tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs font-sans leading-relaxed tracking-wide text-[#B5B5B5]">
                    {steps[activeStep].description}
                  </p>

                  <div className="p-3.5 rounded-xl bg-black/40 border border-[#00FF66]/20 flex items-center space-x-3">
                    <FileText size={15} className="text-[#00FF66] shrink-0 animate-pulse" />
                    <div>
                      <p className="text-[10px] font-mono text-[#707070] uppercase font-bold">Phase Deliverable Output:</p>
                      <p className="text-xs font-semibold font-sans mt-0.5 text-white">{steps[activeStep].output}</p>
                    </div>
                  </div>
                </div>

                {/* Right col: Checklists */}
                <div className="md:col-span-5 p-5 rounded-2xl bg-black/30 border border-[#1A1A1A] space-y-3">
                  <h4 className="font-display font-bold text-xs tracking-wider uppercase text-[#707070]">
                    Phase Milestones Check:
                  </h4>
                  
                  <div className="space-y-2.5">
                    {steps[activeStep].checklist.map((item, id) => (
                      <div key={id} className="flex items-start space-x-2 text-xs">
                        <CheckCircle size={13} className="text-[#00FF66] mt-0.5 shrink-0" />
                        <span className="text-[#B5B5B5]">{item}</span>
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
