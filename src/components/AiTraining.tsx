import React, { useState } from "react";
import { motion } from "motion/react";
import {
  BookOpen,
  Users,
  ArrowRight,
  TrendingUp,
  Cpu,
  Layers,
  Send,
  Sparkles,
  User,
  Building,
  GraduationCap,
  Cable,
  Smartphone,
  Video,
  Wifi,
  CheckCircle,
  Server,
  Network,
  ShieldCheck,
  Eye,
  Settings,
  HelpCircle
} from "lucide-react";

interface AiTrainingProps {
  isDarkMode: boolean;
  onCtaClick: (id: string, detail?: string) => void;
}

export default function AiTraining({ isDarkMode, onCtaClick }: AiTrainingProps) {
  // Tabs for Individual vs Organization
  const [activeTab, setActiveTab] = useState<"individual" | "organization">("individual");

  // Individual Training Programs list focusing on Full-Stack AI Integration (backend, frontend, database, API keys)
  const individualPrograms = [
    {
      id: "ind-fullstack",
      title: "Full-Stack AI Application Engineering",
      desc: "Learn to build advanced software with AI. Construct fully operational web applications complete with custom API key management, robust server-side databases, identity authentication, cloud storage accounts, and dynamic image manipulation.",
      duration: "4 Weeks Hybrid",
      level: "Intermediate to Advanced",
      outcome: "Production-Grade Full-Stack AI Portfolio",
      modules: [
        "Building and deploying full-stack apps with AI support",
        "Integrating custom external APIs securely",
        "Database schema setup and state persistence",
        "Secure user authentication and local storage sync",
        "Dynamic file structures and server-managed image manipulation"
      ]
    },
    {
      id: "ind-frontend",
      title: "AI Frontend Engineering",
      desc: "Unlock frontend development using AI. Quickly conceptualize modular React layouts, write modern responsive stylesheet definitions, design high-fidelity forms, and bind dynamic workflows to external Google Sheet & Google Drive integrations.",
      duration: "3 Weeks Live Intensive",
      level: "Beginner Friendly",
      outcome: "Interactive Web Apps & Form Dashboards",
      modules: [
        "Learn frontend engineering framework standards using AI",
        "Building professional input forms to collect records",
        "External tool triggers, API payload transport, and workflows",
        "Google Sheets integration for lightweight records database Setup",
        "Google Drive storage connections for documents and media"
      ]
    },
    {
      id: "ind-kids",
      title: "Kids AI Engineering (Ages 13 to 18)",
      desc: "Designed specifically for younger minds aged 13 to 18. This streamlined curriculum introduces system layout parameters and logic, teaching them to construct real applications and fun projects entirely fueled by modern AI helpers.",
      duration: "6 Weeks Cohort",
      level: "Ages 13 to 18",
      outcome: "Teen Digital Innovator Project Portfolio",
      modules: [
        "Step-by-step introduction to computing logic with AI",
        "Designing custom websites and styling them collaboratively",
        "Building input forms & interactive games from basic blueprints",
        "Applying pre-built AI APIs to fuel custom creations",
        "Safe digital deployment & project presentation techniques"
      ]
    }
  ];

  // Corporate / Organization Training Programs list
  const organizationPrograms = [
    {
      id: "org-automation",
      title: "AI Workplace Automation & Integration",
      desc: "Simplify work routines for your business teams. Learn how to leverage modern AI tools to construct functional intake sheets, gather internal feedback records, and link automatic flows between Google Sheets, Drive, and corporate communication tools.",
      duration: "2 Weeks Hybrid Cohort",
      level: "Non-Technical Teams & Ops",
      outcome: "Automated Workflows & Integrated Data Pipes",
      modules: [
        "Constructing smart data forms using AI logic assistant blocks",
        "Configuring automatic updates to Google Sheets & Drive systems",
        "Scheduling automatic notifications and alerts across departments",
        "Streamlining document assembly and reports generation with AI templates"
      ]
    },
    {
      id: "org-fullstack",
      title: "Team-Based Full-Stack AI Engineering",
      desc: "Train your software development and IT teams to quickly build robust internal platforms. Accelerate project delivery by applying AI guidelines to compile web interfaces, assemble API backends, control user authentications, and host secure databases.",
      duration: "4 Weeks Comprehensive Intensive",
      level: "Technical & Developer Teams",
      outcome: "Custom Corporate Full-Stack Software Suite",
      modules: [
        "Designing modular frontend and backend architectures with AI assistance",
        "Incorporating secure workspace credential encryption guidelines",
        "Connecting custom local or cloud relational databases",
        "Managing automated backups, storage structures, and image modifications"
      ]
    },
    {
      id: "org-strategy",
      title: "Executive AI Blueprinting & Rapid Prototyping",
      desc: "Give managers, system architects, and technical decision-makers the tools to quickly turn high-level concepts into interactive, high-fidelity prototypes. Establish unified system structures, security standards, and API quota budgets.",
      duration: "3 Days On-Site Intensive",
      level: "Leadership & Product Leads",
      outcome: "Strategic Enterprise AI App Roadmap",
      modules: [
        "Rapidly wireframing custom digital solutions from clear outlines",
        "Validating prototype database scales and responsive layout controls",
        "Implementing secure key guidelines and user credential rules",
        "Analyzing cost-to-performance curves for production-bound AI services"
      ]
    }
  ];

  // Physical Infrastructure Capabilities for the Grid layout
  const infrastructureServices = [
    {
      id: "cabling",
      title: "Structured Cabling (Cat6 / Cat6A)",
      desc: "High-performance clean copper cabling backbone tailored for modern corporate facilities. Includes organized patch panels, layout maps, and rigorous safety certifications.",
      icon: Cable,
      features: [
        "ANSI/TIA-568 compliant structural layout",
        "Fluke channel certification and tracing logs",
        "Clean overhead cable organizing and conduit layouts",
        "PoE+ power budget compatibility assessment"
      ]
    },
    {
      id: "intercom",
      title: "Smart IP Intercom Systems",
      desc: "Comprehensive remote door security & communication terminals. Ideal for modern commercial office rooms and high-density residential buildings.",
      icon: Smartphone,
      features: [
        "PoE terminal control stations with clear touchscreens",
        "Encrypted IP-based video caller relay pipelines",
        "Seamless smartphone App sync and cloud integration",
        "Secure digital access PIN & NFC card setups"
      ]
    },
    {
      id: "cctv",
      title: "CCTV Camera Surveillance",
      desc: "Industrial-grade indoor and weatherproof external security cameras connected with reliable network storage and continuous automated backup.",
      icon: Video,
      features: [
        "HD night-vision cameras with intelligent optical zoom",
        "Central NVR physical storage with automated recycling logs",
        "AI zone alerting & human movement boundary triggers",
        "Encrypted high-throughput remote site streams"
      ]
    },
    {
      id: "accesspoint",
      title: "Enterprise Access Point Installation",
      desc: "Fast, reliable wireless mesh connectivity across large physical environments with zero dead spots and fully managed guest networks.",
      icon: Wifi,
      features: [
        "High-density commercial dual-band transmitter arrays",
        "Seamless roaming transitions between rooms",
        "Isolated guest network portals and bandwidth limits",
        "Physical site surveys mapping signal decay values"
      ]
    }
  ];

  // Facility Environments listed clearly in a grid format
  const environmentsList = [
    {
      title: "Small Office / Retail Space",
      desc: "Optimized single-rack layout, responsive entry stations, and targeted wireless connectivity drops with simple local storage.",
      tag: "Business & Retail"
    },
    {
      title: "Multi-Tenant / Residential Complex",
      desc: "High-scale interlinked door intercom terminals, riser fiber lines, and dedicated tenant access databases.",
      tag: "Residential Systems"
    },
    {
      title: "Warehouse & Industrial Plant",
      desc: "Weatherproof dust-resistant hardware setups, durable long-run fiber optic trunking, and high-reach CCTV cameras.",
      tag: "Heavy-Duty Environments"
    },
    {
      title: "Custom Enterprise Headquarters",
      desc: "Complete comprehensive cabling grids, central server racks with automated backup power, and multi-tenant security layers.",
      tag: "High-Availability corporate"
    }
  ];

  const currentPrograms = activeTab === "individual" ? individualPrograms : organizationPrograms;

  return (
    <section
      id="training"
      className="py-20 lg:py-24 relative overflow-hidden bg-[#050505] text-white"
    >
      {/* Visual background atmospheric elements - subtle neon green flows */}
      <div className="absolute top-0 left-10 w-96 h-96 rounded-full blur-[110px] opacity-5 bg-[#00FF66]/10 pointer-events-none -z-10" />
      <div className="absolute bottom-20 right-10 w-92 h-92 rounded-full blur-[110px] opacity-4 bg-[#00C853]/10 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 py-1.5 px-3.5 rounded-full border border-[#00FF66]/20 bg-[#00FF66]/5 text-[#00FF66] text-[10px] font-mono tracking-widest uppercase font-bold">
            <GraduationCap size={15} strokeWidth={2.5} className="animate-pulse flex-shrink-0" />
            <span>AI Knowledge & Framework Training</span>
          </div>

          <h2 className="font-display text-4xl font-extrabold tracking-tight text-white">
            Full-Stack AI Application Engineering Training
          </h2>
          
          <p className="text-xs sm:text-sm font-sans leading-relaxed max-w-2xl mx-auto text-[#B5B5B5]">
            Empower yourself or your corporate engineering team to build custom AI applications. Learn everything from highly intuitive front-ends, secure server-side API proxies, cloud databases, and secret API key lifecycle architectures.
          </p>
        </div>

        {/* Tracks Selector Navigation Switcher */}
        <div className="flex justify-center mb-10 pt-2">
          <div className="p-1 rounded-xl flex items-center border border-[#1A1A1A] bg-[#121212]">
            <button
              onClick={() => setActiveTab("individual")}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-lg text-xs font-bold transition-all duration-350 cursor-pointer ${
                activeTab === "individual"
                  ? "bg-[#00FF66] text-black shadow-lg shadow-[#00FF66]/15"
                  : "text-[#B5B5B5] hover:text-white"
              }`}
            >
              <User size={16} strokeWidth={2.5} className="flex-shrink-0" />
              <span>For Individuals</span>
            </button>
            <button
              onClick={() => setActiveTab("organization")}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-lg text-xs font-bold transition-all duration-350 cursor-pointer ${
                activeTab === "organization"
                  ? "bg-[#00FF66] text-black shadow-lg shadow-[#00FF66]/15"
                  : "text-[#B5B5B5] hover:text-white"
              }`}
            >
              <Building size={16} strokeWidth={2.5} className="flex-shrink-0" />
              <span>For Organizations</span>
            </button>
          </div>
        </div>

        {/* Track Specific Courses Block */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-20">
          {currentPrograms.map((prog, index) => (
            <motion.div
              key={prog.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-[#1A1A1A] bg-[#121212] flex flex-col justify-between transition-all duration-350 hover:border-[#00FF66]/30 hover:scale-[1.01]"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="py-1 px-2 text-[9px] font-mono rounded bg-[#00FF66]/10 text-[#00FF66] border border-[#00FF66]/20 uppercase font-semibold">
                    {prog.duration}
                  </span>
                  <span className="text-[10px] font-mono text-[#707070]">
                    {prog.level}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-bold text-base tracking-tight text-white hover:text-[#00FF66] transition-colors">
                    {prog.title}
                  </h3>
                  <p className="text-[11.5px] font-sans leading-relaxed text-[#B5B5B5]">
                    {prog.desc}
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <p className="text-[9.5px] font-mono uppercase tracking-wider text-[#707070] font-bold">
                    Key Learning Milestones:
                  </p>
                  <ul className="space-y-1.5">
                    {prog.modules.map((mod, i) => (
                      <li key={i} className="flex items-start text-[10.5px] font-sans">
                        <CheckCircle size={15} strokeWidth={2.5} className="text-[#00FF66] mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-[#B5B5B5]">{mod}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1A1A1A] flex flex-col space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#707070]">Core Access:</span>
                  <span className="text-[#00FF66] font-bold uppercase py-0.5 px-1.5 rounded bg-[#00FF66]/15 border border-[#00FF66]/25">Complimentary</span>
                </div>

                <button
                  onClick={() => onCtaClick("contact", `Inquiry regarding AI Training curriculum: ${prog.title}`)}
                  className="w-full py-2.5 rounded-lg text-[10.5px] font-bold tracking-wider text-center cursor-pointer transition-all duration-200 flex items-center justify-center space-x-1.5 border border-[#00FF66]/40 text-[#00FF66] hover:bg-[#00FF66] hover:text-black font-display active:scale-95"
                >
                  <span>INQUIRE & SCHEDULE</span>
                  <ArrowRight size={14} strokeWidth={2.5} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Clean, Non-Interactive Services Grid - structured cabling, intercom, CCTV, Access Point Installation */}
        <div className="space-y-12">
          
          <div className="border-b border-[#1A1A1A] pb-5 max-w-3xl text-left">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-[#00FF66]/5 text-[#00FF66] border border-[#00FF66]/20 flex-shrink-0 shadow-lg shadow-[#00FF66]/5">
                <Network size={22} strokeWidth={2.5} className="animate-pulse" />
              </div>
              <p className="text-[10px] font-mono tracking-wider text-[#00FF66] uppercase font-bold">Physical Transport & Safety Division</p>
            </div>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl mt-1.5 text-white">
              Structured Cabling & Hardware Infrastructure Services
            </h3>
            <p className="text-xs sm:text-sm font-sans mt-2.5 leading-relaxed text-[#B5B5B5]">
              Unlock maximum transport speed, structural reliability, and crystal-clear safety monitoring. We design, lay, and certify complete commercial-grade communication and security backbones.
            </p>
          </div>

          {/* Infrastructure grid representation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 text-left">
            {infrastructureServices.map((service) => {
              const IconComp = service.icon;
              return (
                <div
                  key={service.id}
                  className="p-6 sm:p-8 rounded-2xl border border-[#1A1A1A] bg-[#121212]/50 hover:bg-[#121212] hover:border-[#00FF66]/20 transition-all duration-350"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-4 rounded-xl flex-shrink-0 transition-all bg-[#1A1A1A] text-[#00FF66] border border-[#00FF66]/25 shadow-md shadow-[#00FF66]/5">
                      <IconComp size={28} strokeWidth={2.2} className="animate-pulse-ambient" />
                    </div>
                    <h4 className="font-display font-bold text-base sm:text-lg text-white">
                      {service.title}
                    </h4>
                  </div>

                  <p className="text-[11.5px] sm:text-xs font-sans leading-relaxed mb-6 text-[#B5B5B5]">
                    {service.desc}
                  </p>

                  <div className="space-y-4 pt-4 border-t border-[#1A1A1A]">
                    <span className="text-[9.5px] font-mono uppercase text-[#707070] font-bold block mb-1">Coded Delivery Highlights:</span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feat, i) => (
                        <li key={i} className="flex items-start text-[10.5px] font-sans">
                          <CheckCircle size={15} strokeWidth={2.5} className="text-[#00FF66] mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-[#B5B5B5]">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Facility Target Environments Cards Grid */}
          <div className="p-6 sm:p-8 rounded-2xl border border-[#1A1A1A] bg-[#121212]/30 text-left">
            <div className="mb-6">
              <span className="text-[10px] font-mono text-[#00FF66] uppercase font-bold">Integrated Physical Scopes</span>
              <h4 className="font-display font-black text-sm uppercase mt-0.5 text-white">
                Installation Spaces We Cover
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {environmentsList.map((env, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl border border-[#1A1A1A] bg-[#121212] hover:border-[#00FF66]/20 transition-colors"
                >
                  <span className="py-0.5 px-1.5 text-[8.5px] font-mono rounded bg-[#00FF66]/10 text-[#00FF66] border border-[#00FF66]/20 uppercase font-bold">
                    {env.tag}
                  </span>
                  <h5 className="font-display font-bold text-xs mt-2 mb-1 text-white">
                    {env.title}
                  </h5>
                  <p className="text-[10px] font-sans leading-relaxed text-[#707070]">
                    {env.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Proposal Action Box */}
            <div className="mt-8 pt-6 border-t border-[#1A1A1A] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <span className="text-[10px] font-mono text-[#00FF66] uppercase font-black tracking-widest block">Complimentary Site Survey</span>
                <p className="text-[10.5px] font-sans mt-0.5 max-w-xl text-[#B5B5B5]">
                  We provide expert baseline on-site wiring audits, Wi-Fi channel checks, and design layouts completely complimentary. Precise commercial installations are custom-quoted.
                </p>
              </div>

              <div className="flex gap-2.5 w-full sm:w-auto flex-shrink-0">
                <button
                  type="button"
                  onClick={() => onCtaClick("contact", "Request complimentary Structured Cabling & Security site audit")}
                  className="px-5 py-3 rounded-lg text-xs font-bold text-black bg-[#00FF66] hover:bg-[#00E65C] transition-all cursor-pointer shadow-lg hover:shadow-[#00FF66]/10 flex items-center justify-center gap-1.5 w-full sm:w-auto font-display"
                >
                  <Send size={14} strokeWidth={2.5} className="animate-pulse" />
                  REQUEST ON-SITE SURVEY
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
