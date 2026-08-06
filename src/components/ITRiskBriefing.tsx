import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Monitor, Shield, Clock, Mail, Users, DollarSign, ArrowRight, ChevronRight, Check, User, TrendingUp, Building2, Lock, ShieldCheck,
} from "lucide-react";

/* ═══ TYPES ═══ */
type Role = "CEO" | "CFO" | "CTO" | "COO" | "Board";
type SizeKey = "small" | "mid" | "large" | "xlarge";

interface RiskData {
  id: string;
  icon: React.ElementType;
  title: string;
  teaser: string;
  severity: "critical" | "high" | "medium";
  baseAnnual: number;
  benchmark: number;
  focus: Record<string, string>;
  details: string[];
  roleDetails: string[];
}

/* ═══ DATA ═══ */
const ROLES: { key: Role; badge: string; name: string; focus: string; icon: React.ElementType }[] = [
  { key: "CEO", badge: "CEO", name: "CHIEF EXECUTIVE", focus: "Revenue risk, competitive exposure & strategic liability", icon: User },
  { key: "CFO", badge: "CFO", name: "CHIEF FINANCIAL", focus: "Cost exposure, audit risk & unpredictable IT overhead", icon: TrendingUp },
  { key: "CTO", badge: "CTO", name: "CHIEF TECHNOLOGY", focus: "Technical debt, security posture & infrastructure resilience", icon: Monitor },
  { key: "COO", badge: "COO", name: "CHIEF OPERATING", focus: "Operational continuity, downtime impact & process failure", icon: Users },
  { key: "Board", badge: "BOARD / INVESTOR", name: "", focus: "Governance gaps, compliance exposure & fiduciary risk", icon: Building2 },
];

const SIZES: { key: SizeKey; label: string; meta: string; mult: number }[] = [
  { key: "small", label: "50–150 Employees", meta: "SMB", mult: 1 },
  { key: "mid", label: "150–500 Employees", meta: "Mid-market", mult: 3 },
  { key: "large", label: "500–2,000 Employees", meta: "Enterprise", mult: 7 },
  { key: "xlarge", label: "2,000+ Employees", meta: "Large Enterprise", mult: 18 },
];

const INDUSTRIES = [
  { val: "Financial Services", meta: "High-reg" },
  { val: "Healthcare", meta: "HIPAA" },
  { val: "Technology / SaaS", meta: "IP-critical" },
  { val: "Professional Services", meta: "Data-sensitive" },
  { val: "Retail / E-Commerce", meta: "Revenue-critical" },
  { val: "Manufacturing / Ops", meta: "Uptime-critical" },
];

const RISKS: RiskData[] = [
  {
    id: "downtime", icon: Monitor, title: "Downtime Treated as Normal",
    teaser: "Small outages, VPN failures, slow systems — team adapts, productivity silently hemorrhages.",
    severity: "critical", baseAnnual: 95000, benchmark: 73,
    focus: {
      ceo: "Revenue leakage from invisible productivity erosion",
      cfo: "Unbudgeted recovery costs and contractor invoices",
      cto: "Infrastructure resilience and SLA exposure",
      coo: "Operational continuity and cross-department impact",
      board: "Undisclosed operational risk in board reporting",
    },
    details: ["Small outages never escalated to leadership", "VPN failures accepted as routine", "Email and system delays compound daily", "Cumulative cost never appears in any report"],
    roleDetails: ["Lost revenue per hour of downtime: $5,600+", "Employee-adapted workarounds mask true impact", "Hidden in departmental productivity variance"],
  },
  {
    id: "security", icon: Shield, title: "Security Exists Only on Paper",
    teaser: "Antivirus installed, unmonitored. MFA half-enforced. Tools installed ≠ governance.",
    severity: "critical", baseAnnual: 380000, benchmark: 61,
    focus: {
      ceo: "Brand and liability exposure in a breach event",
      cfo: "Regulatory fines, breach costs average $4.4M",
      cto: "Attack surface, log gaps, and incident response gaps",
      coo: "Business continuity risk from a single breach event",
      board: "D&O liability if governance gaps enable a breach",
    },
    details: ["Antivirus installed — review cadence unknown", "MFA not enforced org-wide", "No centralized log review or SIEM", "Patching done manually or inconsistently"],
    roleDetails: ["Average breach cost: $4.4M (IBM 2024)", "Regulatory penalties (GDPR/HIPAA): up to $50K/incident", "Stock price impact post-breach: -7.5% average"],
  },
  {
    id: "visibility", icon: Clock, title: "No Executive IT Visibility",
    teaser: "CXOs can't answer basic IT questions. What can't be measured cannot be governed.",
    severity: "high", baseAnnual: 55000, benchmark: 58,
    focus: {
      ceo: "Strategic decisions made on incomplete information",
      cfo: "Inability to audit IT spend ROI or forecast costs",
      cto: "No baseline to measure technical debt or progress",
      coo: "Process bottlenecks invisible until they cause failure",
      board: "Governance failure — IT risk not in board reporting",
    },
    details: ["No IT health dashboard or executive reporting", "CXOs rely on verbal updates, not data", "Compliance posture unknown until audit", "IT strategy reactive, not planned"],
    roleDetails: ["Board-level IT visibility is now a governance expectation", "M&A due diligence regularly fails on IT transparency", "Audit findings correlate with undocumented IT environments"],
  },
  {
    id: "email", icon: Mail, title: "Email as a Single Point of Failure",
    teaser: "Misconfigured SPF/DKIM/DMARC, no monitoring. Email failure affects every department.",
    severity: "high", baseAnnual: 42000, benchmark: 49,
    focus: {
      ceo: "Customer-facing communications at risk, reputation exposure",
      cfo: "Missed invoices, failed collections, delayed closings",
      cto: "Deliverability failure, spoofing exposure, no alerting",
      coo: "Cross-department coordination failures from email gaps",
      board: "Regulatory obligations around data retention not met",
    },
    details: ["SPF/DKIM/DMARC absent or misconfigured", "No alerting on delivery failures", "No email retention governance", "Offboarding leaves orphaned inboxes active"],
    roleDetails: ["Email spoofing exploits hurt brand trust overnight", "Finance email failures delay AR/AP cycles", "Lost emails in deals = measurable revenue leakage"],
  },
  {
    id: "overload", icon: Users, title: "Internal IT Trapped in Firefighting",
    teaser: "Your IT team handles tickets, vendors, alerts — reactive by structure, not by choice.",
    severity: "high", baseAnnual: 145000, benchmark: 66,
    focus: {
      ceo: "Technology strategy stalled while team fights fires",
      cfo: "IT labor cost delivering reactive, not strategic, value",
      cto: "No bandwidth for architecture, security, or innovation",
      coo: "Operational improvements blocked by IT availability",
      board: "Strategic IT initiatives delayed indefinitely",
    },
    details: ["Single points of knowledge — no documentation", "Every incident requires the same senior person", "Vendor management unstructured and time-consuming", "No proactive monitoring — only reactive response"],
    roleDetails: ["Reactive IT costs 3-4x more than proactive managed IT", "Senior IT staff turnover from burnout averages $85K replacement cost", "Strategic projects delayed 6–18 months on average"],
  },
  {
    id: "costs", icon: DollarSign, title: "IT Costs Growing Without Control",
    teaser: "Emergency consultants, redundant subscriptions, patchwork security. IT overhead is unpredictable.",
    severity: "medium", baseAnnual: 110000, benchmark: 71,
    focus: {
      ceo: "Eroding margin from invisible operational overhead",
      cfo: "30-40% of IT budget estimated as direct waste",
      cto: "License sprawl, shadow IT, and vendor duplication",
      coo: "Procurement decisions made without operational context",
      board: "Inability to benchmark IT spend against industry peers",
    },
    details: ["Emergency contractor invoices not budgeted", "SaaS subscriptions with unused licenses not reviewed", "Security tooling layered without strategy", "Migration mistakes billed to operational budget"],
    roleDetails: ["30-40% of enterprise IT spend is identifiable waste", "License audits routinely find 20-35% unused seats", "Emergency response labor averages 4x planned IT rates"],
  },
];

/* ═══ HELPERS ═══ */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const formatCurrency = (n: number) => "$" + Math.round(n).toLocaleString();

const sevColors: Record<string, string> = {
  critical: "bg-destructive/10 text-red-400 border border-destructive/25",
  high: "bg-amber-500/10 text-amber-400 border border-amber-500/25",
  medium: "bg-green-500/10 text-green-400 border border-green-500/25",
};

/* ═══ COMPONENT ═══ */
const ITRiskBriefing = () => {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<Role | null>(null);
  const [size, setSize] = useState<SizeKey | null>(null);
  const [industry, setIndustry] = useState<string | null>(null);
  const [selectedRisks, setSelectedRisks] = useState<Set<string>>(new Set());
  const [briefText, setBriefText] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const sizeMult = SIZES.find((s) => s.key === size)?.mult ?? 1;

  const scrollToTop = useCallback(() => {
    containerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const goToStep = (s: number) => {
    setStep(s);
    setTimeout(scrollToTop, 100);
  };

  const toggleRisk = (id: string) => {
    setSelectedRisks((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const totalExposure = Array.from(selectedRisks).reduce((sum, id) => {
    const r = RISKS.find((x) => x.id === id);
    return sum + (r ? r.baseAnnual * sizeMult : 0);
  }, 0);

  const riskPct = Math.round((selectedRisks.size / RISKS.length) * 100);
  const roleKey = (role || "CEO").toLowerCase();

  const generateBrief = () => {
    setLoading(true);
    goToStep(4);
    const selected = RISKS.filter((r) => selectedRisks.has(r.id));
    const sizeLabel = SIZES.find((s) => s.key === size)?.label || "";

    // Fallback brief (no API call needed)
    setTimeout(() => {
      const brief = `EXECUTIVE SUMMARY
Your organization has identified ${selected.length} active risk vectors representing both operational vulnerability and unbudgeted financial exposure. These are not IT issues — they are **business risks** disguised as technical problems that compound silently until a triggering event makes them impossible to ignore.

FINANCIAL EXPOSURE
- $${Math.round((selected[0]?.baseAnnual ?? 85000) * sizeMult / 1000)}K+ annually in ${selected[0]?.title || "operational risk"}
- Emergency response costs running 4x planned IT rates
- License and subscription waste estimated at 30-40% of IT budget
- Regulatory exposure carrying potential fines in six figures

STRATEGIC RISK ANALYSIS
- Board-level decisions being made on incomplete IT data
- Competitive disadvantage from infrastructure unreliability
- M&A and audit readiness materially impaired
- Strategic initiatives stalled while IT fights operational fires

90-DAY ACTION PLAN
1. Engage a managed IT partner for a structured gap assessment
2. Deploy security baseline monitoring and alerting within 30 days
3. Conduct a license audit — reclaim 20-35% in immediate savings
4. Establish monthly IT reporting dashboard for ${role} visibility

ROI OF RESOLUTION
- IT costs become predictable — reactive overhead eliminated
- Breach and compliance risk reduced by 60-80% with structured governance
- Strategic IT roadmap becomes possible — from firefighting to forward investment`;
      setBriefText(brief);
      setLoading(false);
    }, 3500);
  };

  const parseSections = (text: string) => {
    const headings = ["EXECUTIVE SUMMARY", "FINANCIAL EXPOSURE", "STRATEGIC RISK ANALYSIS", "90-DAY ACTION PLAN", "ROI OF RESOLUTION"];
    const sections: Record<string, string> = {};
    headings.forEach((h, i) => {
      const start = text.indexOf(h);
      if (start === -1) return;
      const contentStart = start + h.length;
      const nextHeading = headings.slice(i + 1).find((nh) => text.indexOf(nh) > contentStart);
      const end = nextHeading ? text.indexOf(nextHeading) : text.length;
      sections[h] = text.slice(contentStart, end).trim();
    });
    return sections;
  };

  const formatList = (content: string) =>
    content
      .split("\n")
      .map((l) => l.replace(/^[-*•\d+.]\s*/, "").trim())
      .filter(Boolean);

  /* ═══ GAUGE SVG ═══ */
  const GaugeSVG = () => {
    const arcLen = 251.3;
    const offset = arcLen - (arcLen * riskPct) / 100;
    return (
      <svg viewBox="0 0 200 120" className="w-full">
        <defs>
          <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(142 76% 36%)" />
            <stop offset="40%" stopColor="hsl(38 92% 50%)" />
            <stop offset="100%" stopColor="hsl(0 84% 60%)" />
          </linearGradient>
        </defs>
        <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="hsl(var(--border))" strokeWidth="12" strokeLinecap="round" />
        <path
          d="M 20 100 A 80 80 0 0 1 180 100"
          fill="none"
          stroke="url(#gaugeGrad)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={arcLen}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.6s cubic-bezier(0.34,1.56,0.64,1)" }}
        />
        <text x="100" y="92" textAnchor="middle" className="fill-foreground font-display text-[28px] font-bold">
          {riskPct}%
        </text>
        <text x="100" y="108" textAnchor="middle" className="fill-muted-foreground text-[11px] font-mono">
          Risk Exposure
        </text>
      </svg>
    );
  };

  /* ═══ RENDER ═══ */
  return (
    <section ref={containerRef} className="bg-white flex flex-col pt-8 pb-10 relative overflow-hidden min-h-[650px] justify-center">
      {/* Background Decorative Graphic removed to prevent double rendering */}

      <div className="w-full flex flex-col px-5 sm:px-6 lg:px-12 relative z-10">

        {/* Top Header & Progress */}
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mb-16 relative z-10 gap-6">
          <div className="font-display text-[12px] font-bold tracking-[0.05em] uppercase text-primary flex items-center gap-2">
            <Shield size={16} className="text-primary" />
            IT RISK INTELLIGENCE
          </div>
          
          {/* Progress Indicator */}
          <div className="flex items-center gap-0 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 hidden md:flex">
            {[1, 2, 3, 4].map((s, i) => (
              <div key={s} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-bold transition-colors ${
                  s === step ? "bg-primary text-white" : s < step ? "bg-white text-primary border border-gray-200" : "bg-white text-gray-400 border border-gray-200"
                }`}>
                  {s}
                </div>
                {i < 3 && (
                  <div className={`w-12 h-px ${s < step ? "bg-primary" : "bg-gray-200"}`} />
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <span className="font-display text-[11px] font-bold tracking-[0.05em] uppercase text-primary border border-primary/20 bg-white px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
              <Lock size={12} /> CONFIDENTIAL
            </span>
            <span className="font-sans text-[13px] font-medium text-slate-500">
              Step {step} of 4
            </span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {/* ═══ STEP 1: ROLE ═══ */}
          {step === 1 && (
            <motion.div key="step1" variants={fadeUp} initial="hidden" animate="visible" exit="exit" className="flex flex-col items-center text-center relative z-10 w-full max-w-7xl mx-auto">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-px bg-primary/20" />
                <span className="font-display text-[11px] font-bold tracking-[0.1em] uppercase text-primary">
                  EXECUTIVE BRIEFING
                </span>
                <div className="w-12 h-px bg-primary/20" />
              </div>
              
              <h2 className="font-display text-4xl sm:text-5xl lg:text-[52px] font-bold text-[#051139] leading-tight mb-4 tracking-tight">
                What is your <span className="text-primary italic">primary</span><br className="sm:hidden" /> executive role?
              </h2>
              <p className="text-slate-500 text-[15px] mb-12 max-w-xl mx-auto leading-relaxed">
                This quick form helps us understand your priorities and tailor a risk and governance assessment for your organization.
              </p>

              <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5 w-full mb-10">
                {ROLES.map((r) => {
                  const isSelected = role === r.key;
                  return (
                    <button
                      key={r.key}
                      onClick={() => setRole(r.key)}
                      className={`relative rounded-xl p-6 text-center transition-all duration-300 flex flex-col items-center justify-start group bg-white shadow-[0_4px_20px_rgb(0,0,0,0.04)] h-full overflow-hidden ${
                        isSelected ? "border-2 border-primary" : "border border-transparent hover:border-primary/20 hover:shadow-lg"
                      }`}
                    >
                      {/* Checked corner triangle */}
                      {isSelected && (
                        <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden rounded-tr-xl">
                          <div className="absolute top-[-24px] right-[-24px] w-20 h-20 bg-primary rotate-45"></div>
                          <Check className="absolute top-2 right-2 text-white" size={14} strokeWidth={3} />
                        </div>
                      )}

                      <div className="w-[52px] h-[52px] rounded-full bg-primary/5 text-primary flex items-center justify-center mb-5 mt-2 transition-transform group-hover:scale-110">
                        <r.icon strokeWidth={1.5} size={24} />
                      </div>
                      
                      <span className={`block font-display text-lg font-bold mb-1 ${isSelected ? "text-primary" : "text-[#051139]"}`}>
                        {r.badge}
                      </span>
                      {r.name && (
                        <span className="block text-[10px] font-bold tracking-[0.1em] uppercase text-slate-400 mb-4">
                          {r.name}
                        </span>
                      )}
                      <span className={`block text-[13px] leading-relaxed mb-8 ${!r.name && "mt-4"} text-slate-500`}>
                        {r.focus}
                      </span>

                      {/* Bottom radio circle */}
                      <div className="mt-auto pt-4 flex justify-center w-full">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                          isSelected ? "border-primary" : "border-slate-300"
                        }`}>
                          {isSelected && <div className="w-2.5 h-2.5 bg-primary rounded-full" />}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between w-full mt-4">
                {/* Left Alert */}
                <div className="flex items-center gap-4 bg-[#f8f9fc] rounded-lg p-4 max-w-md w-full sm:w-auto mb-6 sm:mb-0 text-left">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <ShieldCheck size={16} />
                  </div>
                  <div>
                    <p className="text-[12px] font-bold text-slate-900">Your responses are secure and confidential.</p>
                    <p className="text-[11px] text-slate-500">We use this information only to provide relevant insights.</p>
                  </div>
                </div>

                {/* Right Button */}
                <button
                  onClick={() => role && goToStep(2)}
                  disabled={!role}
                  className={`flex items-center justify-center gap-2 px-10 py-3.5 rounded-full font-display text-[15px] font-bold transition-all ${
                    role
                      ? "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20"
                      : "bg-slate-200 text-slate-400 cursor-not-allowed"
                  }`}
                >
                  Continue <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          )}

          {/* ═══ STEP 2: CONTEXT ═══ */}
          {step === 2 && (
            <motion.div key="step2" variants={fadeUp} initial="hidden" animate="visible" exit="exit" className="flex flex-col items-center text-center relative z-10 w-full max-w-7xl mx-auto">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#051139] leading-tight mb-2 tracking-tight">
                Calibrate your <span className="text-primary italic">exposure</span>
              </h2>
              <p className="text-slate-500 text-[14px] mb-8 max-w-md mx-auto">
                Two quick data points to size your financial risk accurately.
              </p>

              <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
                {/* Lists side */}
                <div className="grid sm:grid-cols-[1fr_2fr] gap-6 w-full text-left">
                  {/* Company Size Box */}
                  <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-xl shadow-slate-200/40">
                    <span className="font-display text-[10px] font-bold tracking-[0.2em] uppercase text-primary block mb-5">Company Size</span>
                    <div className="space-y-3">
                      {SIZES.map((s) => {
                        const isSelected = size === s.key;
                        return (
                          <button
                            key={s.key}
                            onClick={() => {
                              setSize(s.key);
                              if (industry) setTimeout(() => goToStep(3), 400);
                            }}
                            className={`w-full flex items-center justify-between rounded-xl px-4 py-3 transition-all duration-200 border ${
                              isSelected
                                ? "bg-[#f8f9fc] border-primary shadow-sm text-primary"
                                : "bg-white border-slate-100 hover:border-primary/20 hover:shadow-md text-[#051139]"
                            }`}
                          >
                            <span className="font-medium text-[13px]">{s.label}</span>
                            <span className={`font-mono text-[10px] uppercase tracking-wider ${isSelected ? "text-primary" : "text-slate-400"}`}>{s.meta}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Industry Box */}
                  <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-xl shadow-slate-200/40">
                    <span className="font-display text-[10px] font-bold tracking-[0.2em] uppercase text-primary block mb-5">Industry</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {INDUSTRIES.map((ind) => {
                        const isSelected = industry === ind.val;
                        return (
                          <button
                            key={ind.val}
                            onClick={() => {
                              setIndustry(ind.val);
                              if (size) setTimeout(() => goToStep(3), 400);
                            }}
                            className={`w-full flex items-center justify-between gap-2 rounded-xl px-4 py-3 transition-all duration-200 border ${
                              isSelected
                                ? "bg-[#f8f9fc] border-primary shadow-sm text-primary"
                                : "bg-white border-slate-100 hover:border-primary/20 hover:shadow-md text-[#051139]"
                            }`}
                          >
                            <span className="font-medium text-[13px] text-left">{ind.val}</span>
                            <span className={`font-mono text-[9px] uppercase tracking-wider shrink-0 ${isSelected ? "text-primary" : "text-slate-400"}`}>{ind.meta}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center w-full mt-8">
                <button
                  onClick={() => size && industry && goToStep(3)}
                  disabled={!size || !industry}
                  className={`flex items-center justify-center gap-2 px-10 py-3.5 rounded-full font-display text-[14px] font-bold transition-all ${
                    size && industry
                      ? "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20"
                      : "bg-slate-200 text-slate-400 cursor-not-allowed"
                  }`}
                >
                  Continue <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          )}

          {/* ═══ STEP 3: RISKS ═══ */}
          {step === 3 && (
            <motion.div key="step3" variants={fadeUp} initial="hidden" animate="visible" exit="exit" className="w-full max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-[1fr_350px] gap-0 rounded-2xl overflow-hidden border border-slate-100 bg-white shadow-xl shadow-slate-200/40">
                {/* Main */}
                <div className="p-8 sm:p-12">
                  <div className="mb-10">
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#051139] leading-tight mb-4 tracking-tight">
                      Which risks does your<br className="hidden sm:block" />
                      organization <span className="text-primary italic">recognize?</span>
                    </h2>
                    <p className="text-slate-500 text-[15px]">
                      Select every scenario that sounds familiar. Each carries a real financial footprint.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {RISKS.map((r) => {
                      const isSelected = selectedRisks.has(r.id);
                      const cost = Math.round((r.baseAnnual * sizeMult) / 1000) * 1000;
                      const focusText = r.focus[roleKey] || r.teaser;

                      return (
                        <div
                          key={r.id}
                          onClick={() => toggleRisk(r.id)}
                          className={`rounded-2xl p-5 border cursor-pointer transition-all duration-200 relative overflow-hidden group ${
                            isSelected
                              ? "border-primary bg-[#f8f9fc] shadow-sm"
                              : "border-slate-100 bg-white hover:border-primary/20 hover:shadow-md"
                          }`}
                        >
                          <div className="flex items-center gap-5">
                            <div
                              className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border transition-all ${
                                isSelected
                                  ? "bg-primary text-white border-transparent"
                                  : "bg-slate-50 border-slate-200 text-slate-400 group-hover:text-primary"
                              }`}
                            >
                              <r.icon size={22} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className={`text-[15px] font-bold mb-1 ${isSelected ? "text-[#051139]" : "text-[#051139]"}`}>{r.title}</div>
                              <div className="text-[13px] text-slate-500 leading-snug">{focusText}</div>
                            </div>
                            <div className="flex flex-col items-end gap-2 shrink-0">
                              <span className={`font-display text-[9px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded-full ${
                                r.severity === 'CRITICAL' ? 'bg-red-50 text-red-600' :
                                r.severity === 'HIGH' ? 'bg-orange-50 text-orange-600' :
                                'bg-yellow-50 text-yellow-600'
                              }`}>
                                {r.severity}
                              </span>
                              <span className={`font-mono text-[12px] font-medium whitespace-nowrap ${isSelected ? "text-primary" : "text-slate-400"}`}>
                                ~${Math.round(cost / 1000)}K/yr
                              </span>
                            </div>
                          </div>

                          {/* Expanded details */}
                          <div
                            className={`overflow-hidden transition-all duration-400 ${isSelected ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                              }`}
                          >
                            <div className="grid sm:grid-cols-2 gap-6 pt-5 mt-5 border-t border-slate-200">
                              <div>
                                <span className="font-display text-[10px] font-bold tracking-[0.15em] uppercase text-slate-400 block mb-3">What We See</span>
                                <ul className="space-y-2">
                                  {r.details.map((d) => (
                                    <li key={d} className="text-[13px] text-slate-500 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary">
                                      {d}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <span className="font-display text-[10px] font-bold tracking-[0.15em] uppercase text-slate-400 block mb-3">Executive Impact</span>
                                <ul className="space-y-2">
                                  {r.roleDetails.map((d) => (
                                    <li key={d} className="text-[13px] text-slate-500 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary">
                                      {d}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 mt-5 pt-5 border-t border-slate-200">
                              <span className="font-mono text-[11px] text-slate-400 whitespace-nowrap">{r.benchmark}% of companies your size have this</span>
                              <div className="flex-1 h-[4px] bg-slate-100 rounded-full">
                                <div className="h-full bg-primary rounded-full" style={{ width: `${r.benchmark}%` }} />
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Sidebar */}
                <div className="bg-[#f8f9fc] p-8 lg:p-10 lg:sticky lg:top-20 flex flex-col gap-10 border-l border-slate-100">
                  <div>
                    <span className="font-display text-[10px] font-bold tracking-[0.15em] uppercase text-slate-400 block mb-3">Annual Exposure Estimate</span>
                    <div className="font-display text-[44px] font-bold text-primary tracking-tight leading-none mb-2">
                      {formatCurrency(totalExposure)}
                    </div>
                    <span className="text-[12px] text-slate-500">estimated at-risk annually</span>
                  </div>

                  <div>
                    <span className="font-display text-[10px] font-bold tracking-[0.15em] uppercase text-slate-400 block mb-4">Risk Severity</span>
                    <GaugeSVG />
                  </div>

                  <div>
                    <span className="font-display text-[10px] font-bold tracking-[0.15em] uppercase text-slate-400 block mb-4">Risk Vectors</span>
                    <div className="space-y-3">
                      {RISKS.map((r) => {
                        const active = selectedRisks.has(r.id);
                        const cost = Math.round((r.baseAnnual * sizeMult) / 1000) * 1000;
                        return (
                          <div key={r.id} className="flex items-start gap-3">
                            <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 transition-colors ${active ? "bg-primary" : "bg-slate-200"}`} />
                            <span className={`flex-1 text-[13px] leading-snug transition-colors ${active ? "text-[#051139] font-medium" : "text-slate-400"}`}>
                              {r.title}
                            </span>
                            <span className={`font-mono text-[12px] font-medium transition-colors ${active ? "text-primary" : "text-slate-300"}`}>
                              {active ? `$${Math.round(cost / 1000)}K` : "–"}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-auto pt-8">
                    <button
                      onClick={() => selectedRisks.size >= 2 && generateBrief()}
                      disabled={selectedRisks.size < 2}
                      className={`w-full rounded-full py-4 px-6 font-display text-[15px] font-bold flex flex-col items-center justify-center gap-1 transition-all ${selectedRisks.size >= 2
                          ? "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20"
                          : "bg-slate-200 text-slate-400 cursor-not-allowed"
                        }`}
                    >
                      <div className="flex items-center gap-2">
                        Generate Executive Brief <ArrowRight size={18} />
                      </div>
                      <div className="text-[11px] opacity-70 font-normal">AI-powered · 30 seconds</div>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ═══ STEP 4: BRIEF ═══ */}
          {step === 4 && (
            <motion.div key="step4" variants={fadeUp} initial="hidden" animate="visible" exit="exit" className="max-w-3xl mx-auto">
              {loading ? (
                <div className="flex flex-col items-center justify-center min-h-[60vh] gap-5">
                  <div className="w-12 h-12 border-2 border-border border-t-primary rounded-full animate-spin" />
                  <span className="font-mono text-xs text-muted-foreground tracking-[0.1em] animate-pulse">Generating your executive brief…</span>
                  <div className="flex flex-col items-center gap-2 mt-4">
                    {["Analyzing identified risk vectors", "Calibrating financial exposure model", "Benchmarking against industry data", "Drafting board-ready recommendations"].map((item, i) => (
                      <span
                        key={item}
                        className="text-xs text-muted-foreground opacity-0 animate-[fadeIn_0.5s_forwards]"
                        style={{ animationDelay: `${0.3 + i * 1.1}s` }}
                      >
                        ▸ {item}
                      </span>
                    ))}
                  </div>
                </div>
              ) : briefText ? (
                (() => {
                  const sections = parseSections(briefText);
                  const selected = RISKS.filter((r) => selectedRisks.has(r.id));
                  const today = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
                  const sizeLabel = { small: "SMB", mid: "Mid-Market", large: "Enterprise", xlarge: "Large Enterprise" }[size!] || "";
                  const riskLevel = selected.length >= 4 ? "HIGH RISK" : selected.length >= 2 ? "ELEVATED RISK" : "MODERATE RISK";

                  return (
                    <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl shadow-slate-200/40 border border-slate-100">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-5 pb-8 mb-10 border-b border-slate-200">
                        <div>
                          <div className="font-display text-[10px] tracking-[0.2em] uppercase text-primary mb-4 font-bold flex items-center gap-2">
                            Confidential <span className="opacity-40">•</span> {today} <span className="opacity-40">•</span> {sizeLabel} {industry}
                          </div>
                          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-[#051139]">
                            Executive IT Risk<br />
                            Briefing — {role}
                          </h2>
                          <p className="text-slate-500 text-[14px]">
                            {selected.length} of 6 risk vectors identified <span className="mx-1">•</span> Estimated exposure ${Math.round(totalExposure / 1000)}K–${Math.round((totalExposure * 1.4) / 1000)}K annually
                          </p>
                        </div>
                        <div className="shrink-0 border-2 border-red-400/80 rounded-md px-4 py-2.5 text-center rotate-3 opacity-90 mt-2">
                          <span className="font-display text-[10px] tracking-[0.2em] uppercase text-red-500 font-bold leading-relaxed block">
                            CONFIDENTIAL
                            <br />
                            {riskLevel}
                          </span>
                        </div>
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-0 bg-[#f8f9fc] border border-slate-200 rounded-2xl overflow-hidden mb-12">
                        {[
                          { label: "Estimated Annual Exposure", value: `$${Math.round(totalExposure / 1000)}K+`, sub: "conservative floor estimate" },
                          { label: "Risk Vectors Identified", value: `${selected.length} / 6`, sub: "critical business risks active" },
                          { label: "Risk Profile", value: selected.length >= 4 ? "High" : selected.length >= 2 ? "Elevated" : "Moderate", sub: `${industry} industry benchmark` },
                        ].map((m, i) => (
                          <div key={m.label} className={`p-6 sm:p-8 ${i !== 2 ? 'border-r border-slate-200' : ''}`}>
                            <div className="font-display text-[9px] font-bold tracking-[0.2em] uppercase text-slate-400 mb-3">{m.label}</div>
                            <div className="font-display text-3xl font-bold text-primary leading-none mb-2">{m.value}</div>
                            <div className="text-[12px] text-slate-500">{m.sub}</div>
                          </div>
                        ))}
                      </div>

                      {/* Sections */}
                      {[
                        { heading: "Executive Summary", key: "EXECUTIVE SUMMARY", isList: false },
                        { heading: "Financial Exposure", key: "FINANCIAL EXPOSURE", isList: true },
                        { heading: `Strategic Risk Analysis — ${role} Perspective`, key: "STRATEGIC RISK Analysis", isList: true },
                        { heading: "90-Day Action Plan", key: "90-DAY ACTION PLAN", isList: true },
                        { heading: "ROI of Resolution", key: "ROI OF RESOLUTION", isList: true },
                      ].map((sec) => (
                        <div key={sec.key} className="mb-10">
                          <div className="font-display text-[10px] font-bold tracking-[0.2em] uppercase text-primary mb-5 flex items-center gap-4">
                            {sec.heading}
                            <span className="flex-1 h-px bg-slate-200" />
                          </div>
                          {sec.isList ? (
                            <ul className="space-y-3">
                              {formatList(sections[sec.key] || sections[sec.key.toUpperCase()] || "").map((item, i) => (
                                <li key={i} className="text-[14px] text-slate-600 pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-primary before:text-[14px] leading-relaxed">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-[15px] text-slate-600 leading-[1.8]">
                              {(sections[sec.key] || sections[sec.key.toUpperCase()] || "").replace(/\*\*(.*?)\*\*/g, "$1")}
                            </p>
                          )}
                        </div>
                      ))}

                      {/* Actions */}
                      <div className="flex flex-wrap gap-4 mt-12 pt-8 border-t border-slate-200">
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-display text-[14px] font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                        >
                          Schedule a Risk Assessment Call
                        </Link>
                        <button
                          onClick={() => { goToStep(3); }}
                          className="px-8 py-4 rounded-full border border-slate-200 text-slate-500 text-[14px] font-bold hover:border-slate-300 hover:bg-slate-50 transition-all"
                        >
                          ← Revise Selections
                        </button>
                      </div>
                    </div>
                  );
                })()
              ) : null}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        @keyframes fadeIn {
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default ITRiskBriefing;
