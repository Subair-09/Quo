import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  BookOpen,
  Users,
  Award,
  ArrowRight,
  TrendingUp,
  Cpu,
  Layers,
  ShieldAlert,
  Send,
  Eye,
  CheckCircle,
  Copy,
  Calendar,
  Sparkles,
  User,
  Building,
  GraduationCap
} from "lucide-react";

interface AiTrainingProps {
  isDarkMode: boolean;
  onCtaClick: (id: string, detail?: string) => void;
}

interface SyllabusTopic {
  id: string;
  name: string;
  desc: string;
  hours: number;
}

export default function AiTraining({ isDarkMode, onCtaClick }: AiTrainingProps) {
  // Tabs for Individual vs Organization
  const [activeTab, setActiveTab] = useState<"individual" | "organization">("individual");
  
  // Custom Syllabus Builder State
  const [selectedTopicIds, setSelectedTopicIds] = useState<string[]>(["intro", "rag"]);
  const [learningMode, setLearningMode] = useState<string>("bootcamp");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  // Individual Training Programs list
  const individualPrograms = [
    {
      id: "ind-core",
      title: "Core AI Engineering Masterclass",
      desc: "Go from fundamental software development to drafting, building, and serving enterprise-grade custom LLM applications.",
      duration: "4 Weeks Hybrid",
      level: "Intermediate",
      outcome: "Full-Stack AI Project Portfolio",
      modules: ["LLM Orchestration APIs", "Symphonic Semantic Search", "Function-calling Hooks", "Autonomous Agent States"]
    },
    {
      id: "ind-prompt",
      title: "Practical Prompt Archetype Course",
      desc: "Learn advanced context injection, chain-of-thought orchestration, system-level safety guidelines, and few-shot vector layout strategies.",
      duration: "2 Weeks Self-Paced",
      level: "Beginner Friendly",
      outcome: "Certified Prompt Specialist Deck",
      modules: ["Contextual Injection Limits", "Few-Shot Alignment", "System Prompts Hardening", "Evaluation Suite Testing"]
    },
    {
      id: "ind-agents",
      title: "Autonomous Agent Graph Systems",
      desc: "Build highly reliable loop processors, recursive self-improving nodes, and smart multi-role agent workspaces.",
      duration: "3 Weeks Live Intensive",
      level: "Advanced",
      outcome: "Production LangGraph Workspace Setup",
      modules: ["Dynamic Routing Matrices", "Recursive Loop Halting", "Multi-Agent Handshakes", "Durable Server Memory"]
    }
  ];

  // Corporate / Organization Training Programs list
  const organizationPrograms = [
    {
      id: "org-exec",
      title: "Executive AI Strategy & Governance Briefing",
      desc: "High-level guidance tailored specifically for board members and executives seeking clear insight into AI risk, ROI, and compliant integration roadmaps.",
      duration: "2 Days Intensive On-site",
      level: "Executive Leadership",
      outcome: "Verified AI Actionable Strategy Plan",
      modules: ["Safe ROI Evaluation Matrices", "Legal & Compliance Audits", "Vendor Risk Assessments", "Generative Threat Modeling"]
    },
    {
      id: "org-dev",
      title: "Enterprise AI Developer Onboarding",
      desc: "Accelerated technical training alignment to equip your active software engineering team with private RAG setups, vector indexing pipelines, and local hosting models.",
      duration: "2 Weeks Hybrid Cohort",
      level: "Technical Team",
      outcome: "Team-Wide Production Framework Onboarding",
      modules: ["PGVector / Milvus Datastores", "Cohere Re-ranking Engines", "End-to-End Encryption Tunnels", "CI/CD AI Evaluation Hooks"]
    },
    {
      id: "org-safety",
      title: "Generative Guardrails & Data Protection Workshops",
      desc: "Crucial safety workshop for IT, cybersecurity, and governance nodes focusing on preventing data leakage, setting up enterprise firewalls, and managing server keys.",
      duration: "1 Week Live cohort",
      level: "Cybersecurity & IT Admin",
      outcome: "Certified Security & Privacy Guidelines Setup",
      modules: ["PII Real-time Masking", "Local LLM Inference Hosting", "Access Control Role Tokens", "Output Hallucination Filters"]
    }
  ];

  // Topics for the custom Syllabus Builder
  const customTopics: SyllabusTopic[] = [
    { id: "intro", name: "Generative Foundation Principles", desc: "Understanding weights, tokens, architectural biases, and context limits.", hours: 6 },
    { id: "rag", name: "Enterprise Vector Search & RAG", desc: "Building vector indexes, semantic indexing, and hybrid pinecone routes.", hours: 10 },
    { id: "agent", name: "Graph Systems & Recursive Agents", desc: "Managing asynchronous multi-agent loops, supervisor nodes, and state states.", hours: 12 },
    { id: "safety", name: "GDPR/PII Data Shielding Matrix", desc: "Setting up real-time masks, local docker inference, and key security.", hours: 8 },
    { id: "fine-tune", name: "Localized Model Fine-Tuning", desc: "Preparing datasets, LoRA parameter optimization, and hosting server nodes.", hours: 14 }
  ];

  const handleTopicToggle = (id: string) => {
    if (selectedTopicIds.includes(id)) {
      setSelectedTopicIds(selectedTopicIds.filter(t => t !== id));
    } else {
      setSelectedTopicIds([...selectedTopicIds, id]);
    }
  };

  const selectedTopicsList = customTopics.filter(t => selectedTopicIds.includes(t.id));
  const totalHours = selectedTopicsList.reduce((acc, curr) => acc + curr.hours, 0);

  const getModeLabel = (mode: string) => {
    switch (mode) {
      case "self": return "Self-Paced Learning Portal";
      case "bootcamp": return "Live Virtual Technical Bootcamp";
      case "workshop": return "Dedicated Corporate Team Workshop";
      case "mentor": return "1-on-1 Expert Executive Mentoring";
      default: return "";
    }
  };

  const currentPrograms = activeTab === "individual" ? individualPrograms : organizationPrograms;

  const handleCopySyllabusText = () => {
    const textToCopy = `QUOTIENTS CUSTOM AI SYLLABUS DRAFT:
------------------------------------------
Target Group: ${activeTab === "individual" ? "Individual Career Architect" : "Enterprise / Organization Group"}
Primary Learning Mode: ${getModeLabel(learningMode)}
Selected Interactive Modules:
${selectedTopicsList.map(t => `- ${t.name} (${t.hours} class hours) - ${t.desc}`).join("\n")}

AGGREGATE SYLLABUS FORECAST:
------------------------------------------
Total Interactive Training Hours: ${totalHours} Direct Hours
Tuition/Pricing Structure: Custom Scope (Complimentary Core Outline / Request Custom Quote)
Next Execution Step: Contact Quotients Team to secure training slots and schedule dates.`;

    navigator.clipboard.writeText(textToCopy);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section
      id="training"
      className={`py-20 lg:py-24 relative overflow-hidden transition-colors duration-300 ${
        isDarkMode ? "bg-[#0B1020] text-white" : "bg-[#F8FAFC] text-[#0F172A]"
      }`}
    >
      {/* Visual background atmospheric elements */}
      <div className={`absolute top-0 left-10 w-96 h-96 rounded-full blur-3xl opacity-15 pointer-events-none -z-10 ${
        isDarkMode ? "bg-brand-electric/25" : "bg-brand-electric/10"
      }`} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="inline-flex items-center space-x-1.5 py-1 px-3 rounded-full border border-brand-cyan/25 bg-brand-cyan/10 text-[10px] font-mono tracking-widest text-brand-cyan uppercase">
            <GraduationCap size={12} className="animate-pulse" />
            <span>AI Knowledge & Framework Training</span>
          </div>

          <h2 className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight ${isDarkMode ? "text-white" : "text-brand-midnight"}`}>
            Elite AI Engineering & Strategy Training
          </h2>
          
          <p className={`text-xs sm:text-sm font-sans leading-relaxed max-w-2xl mx-auto ${isDarkMode ? "text-slate-300" : "text-slate-500"}`}>
            Empower yourself or your corporate engineering team to build, host, and monitor custom LLM agents securely. Pick your ideal specialization pathway or program.
          </p>
        </div>

        {/* Tracks Selector Navigation Switcher */}
        <div className="flex justify-center mb-10 pt-2">
          <div className={`p-1 rounded-xl flex items-center border transition-all ${
            isDarkMode ? "bg-slate-900/60 border-white/5" : "bg-slate-100 border-slate-200"
          }`}>
            <button
              onClick={() => setActiveTab("individual")}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-lg text-xs font-bold transition-all duration-350 cursor-pointer ${
                activeTab === "individual"
                  ? "bg-brand-electric text-white shadow-lg shadow-brand-electric/15"
                  : isDarkMode ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <User size={13} />
              <span>For Individuals</span>
            </button>
            <button
              onClick={() => setActiveTab("organization")}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-lg text-xs font-bold transition-all duration-350 cursor-pointer ${
                activeTab === "organization"
                  ? "bg-brand-electric text-white shadow-lg shadow-brand-electric/15"
                  : isDarkMode ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Building size={13} />
              <span>For Organizations</span>
            </button>
          </div>
        </div>

        {/* Track Specific Courses Block */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-16">
          {currentPrograms.map((prog, index) => (
            <motion.div
              key={prog.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`p-6 rounded-2xl border flex flex-col justify-between transition-all duration-300 ${
                isDarkMode 
                  ? "bg-[#0F172A]/70 border-white/5 hover:border-brand-electric/30 hover:bg-[#111C35]" 
                  : "bg-white border-slate-200 hover:shadow-md hover:border-slate-300"
              }`}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="py-1 px-2 text-[9px] font-mono rounded bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/15 uppercase">
                    {prog.duration}
                  </span>
                  <span className={`text-[10px] font-mono ${isDarkMode ? "text-slate-500" : "text-slate-400"}`}>
                    {prog.level}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className={`font-display font-black text-sm tracking-tight ${isDarkMode ? "text-white" : "text-brand-midnight"}`}>
                    {prog.title}
                  </h3>
                  <p className={`text-[11px] font-sans leading-relaxed ${isDarkMode ? "text-slate-300" : "text-slate-500"}`}>
                    {prog.desc}
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <p className={`text-[9.5px] font-mono uppercase tracking-wider ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
                    Key Learning Milestones:
                  </p>
                  <ul className="space-y-1.5">
                    {prog.modules.map((mod, i) => (
                      <li key={i} className="flex items-start text-[10.5px] font-sans">
                        <CheckCircle size={11} className="text-brand-cyan mt-0.5 mr-2 flex-shrink-0" />
                        <span className={isDarkMode ? "text-slate-300" : "text-slate-600"}>{mod}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/10 flex flex-col space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className={isDarkMode ? "text-slate-500" : "text-slate-400"}>Core Curriculum:</span>
                  <span className="text-emerald-500 font-bold uppercase py-0.5 px-1.5 rounded bg-emerald-500/10 border border-emerald-500/15">Complimentary</span>
                </div>
                <button
                  onClick={() => onCtaClick("contact", `Inquiry regarding ${prog.title}`)}
                  className="w-full py-2.5 rounded-lg text-[10.5px] font-bold tracking-wider text-center cursor-pointer transition-all duration-200 flex items-center justify-center space-x-1.5 border border-brand-electric text-brand-electric hover:bg-brand-electric hover:text-white"
                >
                  <span>INQUIRE & SCHEDULE</span>
                  <ArrowRight size={10} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Syllabus Interactive Builder (Fills complete previous blueprint UI) */}
        <div className={`p-6 sm:p-8 rounded-2xl border relative overflow-hidden ${
          isDarkMode 
            ? "bg-radial-glow border-white/10 shadow-2xl" 
            : "bg-white border-slate-200 shadow-xl shadow-slate-200/30"
        }`}>
          {/* Abs decorative overlay */}
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <GraduationCap size={120} className="text-brand-electric" />
          </div>

          <div className="border-b border-slate-200/10 pb-4 mb-6">
            <div className="flex items-center space-x-2">
              <Sparkles size={13} className="text-brand-cyan animate-pulse" />
              <p className="text-[10px] font-mono tracking-wider text-brand-cyan uppercase">Interactive Syllabus Builder</p>
            </div>
            <h3 className={`font-display font-extrabold text-lg mt-0.5 ${isDarkMode ? "text-white" : "text-brand-midnight"}`}>
              Draft a Personalized AI Syllabus
            </h3>
            <p className={`text-[11px] font-sans mt-1.5 ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
              Select relevant core training models, map your delivery preference strategy, and reveal your interactive learning program instantly. No commitments or payment details requested.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Steps Left Form Side (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Module Section */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-electric text-white text-[10px] font-mono font-bold">1</span>
                  <h4 className={`font-display font-bold text-xs tracking-wide uppercase ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>
                    Choose Specialty Core Modules
                  </h4>
                </div>

                <div className="grid grid-cols-1 gap-2">
                  {customTopics.map((topic) => {
                    const isChecked = selectedTopicIds.includes(topic.id);
                    return (
                      <button
                        key={topic.id}
                        type="button"
                        onClick={() => handleTopicToggle(topic.id)}
                        className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                          isChecked
                            ? "bg-brand-electric/10 border-brand-electric"
                            : isDarkMode
                            ? "bg-slate-900/40 border-white/5 hover:border-slate-800 hover:bg-slate-900/60"
                            : "bg-slate-50 border-slate-200/80 hover:border-slate-300 hover:bg-white"
                        }`}
                      >
                        <div className="flex items-center space-x-3 max-w-[80%]">
                          <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center flex-shrink-0 transition-all ${
                            isChecked 
                              ? "bg-brand-electric border-brand-electric text-white" 
                              : isDarkMode ? "border-slate-700 bg-slate-950" : "border-slate-300 bg-white"
                          }`}>
                            <div className={`w-1.5 h-1.5 rounded-full bg-white ${isChecked ? "block" : "hidden"}`} />
                          </div>
                          <div>
                            <p className="font-display font-extrabold text-[11px]">{topic.name}</p>
                            <p className={`text-[10px] font-sans mt-0.5 leading-none ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                              {topic.desc}
                            </p>
                          </div>
                        </div>
                        <span className="text-[9.5px] font-mono text-brand-electric font-bold ml-2 flex-shrink-0">
                          {topic.hours} class hrs
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Learning Mode Strategy Section */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-electric text-white text-[10px] font-mono font-bold">2</span>
                  <h4 className={`font-display font-bold text-xs tracking-wide uppercase ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>
                    Preferred Learning Delivery Approach
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { id: "self", title: "Core Self-Paced Access", desc: "Interactive online sandboxes & docs" },
                    { id: "bootcamp", title: "Live Virtual Bootcamp", desc: "Weekly active coding cohorts" },
                    { id: "workshop", title: "Corporate Team Seminar", desc: "On-site customized alignment" },
                    { id: "mentor", title: "Executive 1-on-1", desc: "Targeted strategy guidance" }
                  ].map((mode) => {
                    const isSelected = learningMode === mode.id;
                    return (
                      <button
                        key={mode.id}
                        type="button"
                        onClick={() => setLearningMode(mode.id)}
                        className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all ${
                          isSelected
                            ? "bg-brand-purple/10 border-brand-purple"
                            : isDarkMode
                            ? "bg-slate-900/30 border-white/5 hover:border-slate-800"
                            : "bg-slate-50 border-slate-200/80 hover:border-slate-300 hover:bg-white"
                        }`}
                      >
                        <h5 className="font-display font-bold text-[11px]">{mode.title}</h5>
                        <p className={`text-[9.5px] font-sans leading-tight mt-0.5 ${isDarkMode ? "text-slate-400" : "text-slate-550"}`}>
                          {mode.desc}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Config Outputs Right Side (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              
              <div className={`p-5 rounded-xl border h-full flex flex-col justify-between space-y-6 ${
                isDarkMode ? "bg-slate-950/60 border-white/5" : "bg-slate-50 border-slate-200/85"
              }`}>
                
                <div className="space-y-4">
                  <p className="text-[10px] font-mono text-brand-cyan uppercase tracking-wider border-b border-slate-200/10 pb-2">
                    Selected Syllabus Summary
                  </p>
                  
                  {/* Selected Modules display */}
                  {selectedTopicsList.length > 0 ? (
                    <div className="space-y-2">
                      <span className="text-[9.5px] font-mono text-slate-500 uppercase">Core Content Selected:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedTopicsList.map((t) => (
                          <span key={t.id} className="text-[10px] font-sans py-1 px-2.5 rounded-lg bg-brand-electric/10 text-brand-cyan border border-brand-cyan/15 flex items-center">
                            {t.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <p className="text-[10.5px] font-sans text-slate-400 italic">Select at least one module node from the left panel.</p>
                  )}

                  {/* Delivery Info */}
                  <div className="pt-2">
                    <span className="text-[9.5px] font-mono text-slate-500 uppercase block">Delivery Strategy:</span>
                    <p className={`text-xs font-display font-bold mt-1 ${isDarkMode ? "text-white" : "text-brand-midnight"}`}>
                      {getModeLabel(learningMode)}
                    </p>
                  </div>

                  {/* Class Hours */}
                  <div className="p-4 rounded-xl border border-dashed border-slate-200/20 bg-brand-electric/5 text-center">
                    <p className="text-[10px] font-mono text-slate-500 uppercase">Class-room Load Time</p>
                    <p className="text-3xl font-display font-black text-brand-cyan tracking-tight mt-1">
                      {totalHours} <span className="text-xs font-normal text-slate-500">hours</span>
                    </p>
                    <p className="text-[9px] font-sans text-slate-500 mt-1 leading-none">Suggested custom sprint duration</p>
                  </div>
                </div>

                {/* Free Notification Banner - NO MONEY */}
                <div className="p-3.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-center">
                  <span className="text-[10px] font-mono text-emerald-500 uppercase font-black tracking-widest block">Core Access: COMPLIMENTARY</span>
                  <p className={`text-[10px] font-sans mt-1 leading-relaxed ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                    We offer free baseline syllabus resources. Advanced corporate coaching, custom integrations or 1-on-1 master mentoring are tailored to quotes.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => {
                      if (selectedTopicsList.length === 0) return;
                      setIsModalOpen(true);
                    }}
                    disabled={selectedTopicsList.length === 0}
                    className={`px-4 py-3 rounded-xl text-xs font-bold tracking-wider cursor-pointer border flex items-center justify-center gap-1.5 transition-all w-full ${
                      selectedTopicsList.length === 0 
                        ? "opacity-40 cursor-not-allowed" 
                        : isDarkMode 
                        ? "border-white/10 hover:bg-white/5 text-white" 
                        : "border-slate-200 hover:bg-slate-100 text-slate-700"
                    }`}
                  >
                    <Eye size={12} />
                    REVEAL OUTLINE
                  </button>

                  <button
                    type="button"
                    onClick={() => onCtaClick("contact", `Book specialized AI Training program incorporating: ${selectedTopicsList.map(t => t.name).join(", ")} (${getModeLabel(learningMode)})`)}
                    className="px-4 py-3 rounded-xl text-xs font-bold tracking-wider text-white bg-brand-electric hover:bg-opacity-95 hover:shadow-lg hover:scale-[1.01] transition-all cursor-pointer shadow flex items-center justify-center gap-1.5 w-full"
                  >
                    <Send size={11} className="animate-pulse" />
                    CONTACT US
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Syllabus Detail Previewer Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              className={`relative w-full max-w-xl rounded-2xl border p-6 sm:p-7 max-h-[85vh] overflow-y-auto shadow-2xl z-10 ${
                isDarkMode ? "bg-[#0F172A] border-white/10 text-white" : "bg-white border-slate-200 text-[#0F172A]"
              }`}
            >
              <div className="flex justify-between items-start border-b border-slate-200/10 pb-4 mb-4">
                <div>
                  <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded bg-brand-cyan/10 border border-brand-cyan/25 text-[8.5px] font-mono text-brand-cyan uppercase tracking-wider mb-1.5">
                    <BookOpen size={9} />
                    <span>Configuration Deck</span>
                  </span>
                  <h3 className="font-display font-black text-md tracking-tight">
                    Custom AI Syllabus Specification
                  </h3>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className={`p-1 rounded-lg border cursor-pointer transition-colors ${
                    isDarkMode ? "border-white/10 hover:bg-white/5 text-slate-400" : "border-slate-200 hover:bg-slate-50 text-slate-500"
                  }`}
                  aria-label="Close modal dialog"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Syllabus description details */}
              <div className="space-y-4 text-xs sm:text-sm">
                
                <div className={`p-4 rounded-xl border ${isDarkMode ? "bg-slate-900/50 border-white/5" : "bg-slate-50 border-slate-200/50"}`}>
                  <span className="text-[8.5px] font-mono uppercase tracking-wider text-slate-500">Learning Track Mode</span>
                  <p className="font-display font-extrabold text-xs mt-0.5">{getModeLabel(learningMode)}</p>
                </div>

                <div className="space-y-2">
                  <span className="text-[8.5px] font-mono uppercase tracking-wider text-slate-500 px-1">Curated Core Study Nodes</span>
                  <div className="grid grid-cols-1 gap-2">
                    {selectedTopicsList.map((t) => (
                      <div key={t.id} className={`p-3 rounded-lg border flex justify-between items-center ${
                        isDarkMode ? "bg-slate-900/20 border-white/5" : "bg-white border-slate-150"
                      }`}>
                        <div>
                          <p className="font-display font-black text-[11px]">{t.name}</p>
                          <p className="text-[9.5px] font-sans text-slate-400 mt-0.5 leading-snug">{t.desc}</p>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-brand-cyan italic ml-4 flex-shrink-0">
                          {t.hours} hrs
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center pt-4 border-t border-slate-200/10 gap-3">
                  <div className="text-center sm:text-left">
                    <p className="text-[8.5px] font-mono uppercase text-slate-500">Suggested Sprint Length</p>
                    <p className="text-sm font-display font-black">
                      Total commitment: <span className="text-brand-electric font-mono">{totalHours} Course Hours</span>
                    </p>
                  </div>

                  <div className="flex gap-2 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={handleCopySyllabusText}
                      className={`px-3.5 py-2 rounded-lg text-[10.5px] font-bold font-mono border flex items-center justify-center gap-1 cursor-pointer w-full sm:w-auto ${
                        isCopied 
                          ? "bg-emerald-500 border-emerald-500 text-white" 
                          : isDarkMode ? "border-white/10 hover:bg-white/5 text-slate-300" : "border-slate-200 hover:bg-slate-50 text-slate-700"
                      }`}
                    >
                      {isCopied ? <CheckCircle size={11} /> : <Copy size={11} />}
                      {isCopied ? "COPIED" : "COPY OUTLINE"}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setIsModalOpen(false);
                        onCtaClick("contact", `Book specialized training incorporates: ${selectedTopicsList.map(t => t.name).join(", ")}`);
                      }}
                      className="px-4 py-2 rounded-lg text-[10.5px] font-bold text-white bg-brand-electric hover:bg-opacity-90 cursor-pointer w-full sm:w-auto flex items-center justify-center gap-1 shadow-lg shadow-brand-electric/15"
                    >
                      <Calendar size={11} />
                      SCHEDULE
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
