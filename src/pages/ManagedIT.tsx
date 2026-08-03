import { useEffect, useRef } from "react";
import SEOHead from "@/components/SEOHead";
import { managedITSeoData } from "@/data/seo/managedITSeo";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import ITRiskBriefing from "@/components/ITRiskBriefing";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Shield,
  Monitor,
  Eye,
  Mail,
  Users,
  DollarSign,
  AlertTriangle,
  Server,
  Lock,
  BarChart3,
  TrendingUp,
  Building2,
  Briefcase,
  Award,
  PlayCircle,
  MinusCircle,
  FileText,
  ShieldCheck,
  LineChart,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { MagneticButton } from "@/components/Navbar";
import Footer from "@/components/Footer";
import SolutionFAQ from "@/components/solutions/SolutionFAQ";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/* ── animation helpers ── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 80, damping: 20 } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } };
const staggerFast = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const charReveal = {
  hidden: { opacity: 0, y: 60, rotateX: 40 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring" as const, stiffness: 100, damping: 18 } },
};

/* ── Section wrapper with scroll-reveal ── */
const RevealSection = ({
  children,
  className = "",
  dark = false,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section ref={ref} className={`${dark ? "bg-foreground text-background" : ""} ${className}`}>
      <motion.div variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"}>
        {children}
      </motion.div>
    </section>
  );
};

/* ── Check item ── */
const Check = ({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) => (
  <motion.div variants={fadeUp} className="flex items-start gap-3">
    <CheckCircle2 size={18} className={`mt-0.5 shrink-0 ${dark ? "text-primary" : "text-primary"}`} />
    <span className={`text-sm sm:text-base leading-relaxed ${dark ? "text-background/80" : "text-muted-foreground"}`}>
      {children}
    </span>
  </motion.div>
);

/* ══════════════════ DATA ══════════════════ */

const coreProblems = [
  {
    icon: Monitor,
    title: "Downtime That's Treated as Normal",
    bullets: [
      "Small outages.",
      "Slow systems.",
      "VPN failures.",
      "Email delays.",
      "Employees adapt. Productivity silently declines.",
      "Leadership never sees the cumulative cost.",
    ],
  },
  {
    icon: Shield,
    title: "Security That Exists Only on Paper",
    bullets: [
      "Antivirus installed but not monitored",
      "MFA partially enforced",
      "No centralized log review",
      "Patching inconsistent",
      "No structured incident response",
      "Security tools ≠ Security governance. The difference matters during a breach.",
    ],
  },
  {
    icon: Eye,
    title: "No Executive IT Visibility",
    bullets: [
      "CXOs often cannot answer key IT questions.",
      "If IT cannot be measured, it cannot be governed.",
    ],
  },
  {
    icon: Mail,
    title: "Email as a Single Point of Failure",
    bullets: [
      "Misconfigured SPF/DKIM/DMARC",
      "No monitoring",
      "Over-licensed users",
      "Manual onboarding/offboarding",
      "No retention governance",
      "Email failures affect every department.",
    ],
  },
  {
    icon: Users,
    title: "Internal IT Overload",
    bullets: [
      "Handles tickets",
      "Manages vendors",
      "Responds to emergencies",
      "Manages licenses",
      "Handles security alerts",
      "They are reactive by structure — not by design.",
    ],
  },
  {
    icon: DollarSign,
    title: "Rising Costs Without Control",
    bullets: [
      "Emergency consultants",
      "Tool subscriptions",
      "Patchwork security additions",
      "Migration mistakes",
      "IT becomes unpredictable operational overhead.",
    ],
  },
];

const triggerEvents = [
  { title: "A ransomware scare", desc: "Exposes gaps in your detection and response capability overnight." },
  { title: "A major email outage", desc: "Reveals dependencies and misconfigurations across every department." },
  { title: "Failed cloud migration", desc: "Costs multiply when data integrity and user transitions break down." },
  { title: "Compliance audit warning", desc: "Uncovers governance gaps that put the entire business at risk." },
  { title: "Rapid team expansion", desc: "Onboarding at scale without governance creates security blind spots." },
  { title: "Leadership change", desc: "New leadership demands visibility, accountability, and structured IT." },
  { title: "Investor due diligence", desc: "Investors scrutinize IT risk posture — unstructured IT raises red flags." },
  { title: "Client security questionnaire", desc: "Failing a client's security review can cost the deal entirely." },
];

const beforeItems = [
  "Issues resolved only after escalation",
  "No 24×7 monitoring",
  "Security tool-driven, not governance-driven",
  "No executive reporting",
  "Unclear escalation matrix",
  "Cost unpredictability",
  "Leadership frustration",
];

const afterItems = [
  "SLA-driven support",
  "24×7 monitoring",
  "Patch & vulnerability governance",
  "Executive dashboards",
  "Escalation matrix clarity",
  "Predictable monthly investment",
  "Dedicated account management",
];

const comparisonTable = [
  { capability: "24×7 Monitoring", internal: "Rare", msp: "Limited", cybaem: "Structured" },
  { capability: "SLA Governance", internal: "Informal", msp: "Basic", cybaem: "Defined & Reported" },
  { capability: "Executive Reporting", internal: "Minimal", msp: "Rare", cybaem: "Monthly Governance Dashboard" },
  { capability: "Email Expertise", internal: "General", msp: "Ticket-Based", cybaem: "Managed & Migration Specialists" },
  { capability: "Security Oversight", internal: "Tool-Based", msp: "Add-On", cybaem: "Integrated Framework" },
  { capability: "Escalation Matrix", internal: "Ad-Hoc", msp: "Varies", cybaem: "Defined" },
  { capability: "Cost Predictability", internal: "Salary-Based", msp: "Variable", cybaem: "Structured Monthly" },
  { capability: "Strategic Advisory", internal: "Limited", msp: "Rare", cybaem: "Included" },
];

const servicePillars = [
  {
    icon: Server,
    title: "Managed IT Services",
    bullets: ["8×5 and 24×7 support", "Proactive monitoring", "Patch management", "SLA governance", "Executive performance reporting", "Escalation matrix management"],
  },
  {
    icon: Mail,
    title: "Managed Email Services",
    bullets: ["Microsoft 365 administration", "Google Workspace administration", "Monitoring & optimization", "Security configuration", "License optimization", "Governance frameworks"],
  },
  {
    icon: TrendingUp,
    title: "Email Migration & Cloud Transitions",
    bullets: ["Cutover & Hybrid migrations", "Data integrity protection", "User transition management", "Risk mitigation planning", "Post-migration stabilization"],
  },
  {
    icon: Lock,
    title: "Security & Risk Oversight",
    bullets: ["Patch compliance", "MFA enforcement", "Incident response structure", "Governance alignment", "Audit readiness support"],
  },
];

const executiveQuestions = [
  "What is one hour of downtime worth?",
  "What would one ransomware incident cost?",
  "What is executive time spent firefighting worth?",
  "What is compliance failure exposure?",
];

const roiItems = [
  "Risk avoided",
  "Downtime reduced",
  "Productivity protected",
  "Leadership focus regained",
  "Financial predictability introduced",
];

const serviceTiers = [
  {
    title: "Business Hours Support (8×5)",
    desc: "For structured operating schedules.",
    features: ["Weekday coverage", "SLA-driven", "Governance included", "Executive reporting"],
  },
  {
    title: "24×7 Managed IT",
    desc: "For growth-stage and uptime-critical businesses.",
    features: ["Round-the-clock monitoring", "Immediate escalation", "Proactive patching", "Full governance"],
    highlighted: true,
  },
  {
    title: "Premium Plus",
    desc: "For security-sensitive and compliance-driven organizations.",
    features: ["All 24×7 features", "Advanced security oversight", "Compliance support", "Dedicated account manager"],
  },
];

const investingIn = [
  "Business continuity",
  "Security resilience",
  "Operational clarity",
  "Leadership confidence",
  "Strategic IT governance",
];

const compoundingAdvantage = [
  "Growth becomes smoother",
  "Hiring scales faster",
  "Audits become manageable",
  "Client trust increases",
  "Investors gain confidence",
];

const idealClients = [
  { icon: Building2, label: "Growing SMEs scaling operations" },
  { icon: TrendingUp, label: "Multi-location businesses" },
  { icon: Shield, label: "Compliance-sensitive industries" },
  { icon: Briefcase, label: "Security-conscious leadership teams" },
  { icon: Award, label: "Organizations tired of reactive IT" },
];

const faqs = [
  {
    question: "What are Managed IT Services?",
    answer: "Managed IT Services provide proactive monitoring, support, security oversight, and infrastructure governance to reduce downtime and cybersecurity risks.",
  },
  {
    question: "Why does a company need 24/7 IT support?",
    answer: "Businesses that rely on digital infrastructure need continuous monitoring to prevent downtime, security incidents, and operational disruption.",
  },
  {
    question: "What is included in Microsoft 365 management?",
    answer: "License optimization, security configuration, monitoring, user lifecycle management, and compliance governance.",
  },
  {
    question: "How do Email Migration Services reduce risk?",
    answer: "Professional migration ensures data integrity, security compliance, minimal downtime, and post-transition stabilization.",
  },
  {
    question: "How much do Managed IT Services cost?",
    answer: "Pricing depends on company size, infrastructure complexity, support coverage hours, and security requirements. Cybaem provides customized proposals after assessment.",
  },
];

/* ══════════════════ PAGE ══════════════════ */

const ManagedIT = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const overlayOp = useTransform(scrollYProgress, [0, 0.5], [0.5, 0.85]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={managedITSeoData.title}
        description={managedITSeoData.description}
        canonical={managedITSeoData.canonical}
        keywords={managedITSeoData.keywords}
        ogTitle={managedITSeoData.ogTitle}
        ogDescription={managedITSeoData.ogDescription}
        twitterTitle={managedITSeoData.twitterTitle}
        twitterDescription={managedITSeoData.twitterDescription}
        jsonLd={managedITSeoData.jsonLd}
      />
      <Navbar />



      {/* ═══ 1. HERO ═══ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/enterprise-hero-2.avif"
            alt="Cybaem Tech Team"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#051139]/95 via-[#051139]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            {/* Top Heading */}
            <motion.h1 variants={fadeUp} initial="hidden" animate="visible" className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
              When IT Becomes<br />a Business Risk
            </motion.h1>

            {/* White Box Heading */}
            <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.1 }} className="bg-white p-6 sm:p-8 rounded-tr-xl rounded-br-xl -ml-6 pl-6 sm:-ml-12 sm:pl-12 mb-8 shadow-2xl max-w-[95%] sm:max-w-2xl border-l-4 border-transparent">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#004E98] leading-[1.15] tracking-tight">
                We Turn It Into<br />
                Structured Governance.<br />
                Structured Growth.
              </h2>
            </motion.div>




            {/* Buttons */}
            <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.4 }} className="flex flex-col sm:flex-row items-center gap-4">
              <button onClick={() => document.getElementById('it-risk-briefing')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold bg-[#004E98] text-white rounded hover:bg-[#00387B] transition-colors shadow-lg">
                Schedule a Free Review <ArrowRight size={16} />
              </button>
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold border border-white/20 text-white rounded hover:bg-white/10 transition-colors backdrop-blur-sm">
                <PlayCircle size={18} /> Explore Our Approach
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ 2. INTERACTIVE IT RISK BRIEFING ═══ */}
      <div id="it-risk-briefing">
        <ITRiskBriefing />
      </div>

      {/* ═══ 3. TRIGGER EVENTS ═══ */}
      <div id="warning-signals">
        <RevealSection className="py-12 lg:py-16 bg-[#f8f9fc]">
          <div className="container mx-auto px-5 sm:px-6 lg:px-12">
            <div className="w-full max-w-5xl mx-auto">

              {/* Header Content */}
              <motion.div variants={fadeUp} className="mb-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-[2px] h-4 bg-primary" />
                  <span className="font-display text-[10px] font-bold tracking-[0.2em] uppercase text-primary">
                    Challenges You Face
                  </span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-bold leading-tight mb-3 text-[#051139] tracking-tight">
                  Trigger Events That Push Companies to <span className="text-primary">Switch</span>
                </h2>
                <p className="text-slate-500 text-[14px] max-w-lg">
                  Every business hits a breaking point. These are the triggers we see most often.
                </p>
              </motion.div>

              {/* Accordion 2 Columns */}
              <motion.div variants={fadeUp}>
                <Accordion type="single" collapsible className="grid md:grid-cols-2 gap-x-6 gap-y-3 items-start">
                  {triggerEvents.map((event, i) => (
                    <AccordionItem key={i} value={`trigger-${i}`} className="bg-white rounded-xl px-5 py-1.5 border border-slate-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] data-[state=open]:border-primary/20 data-[state=open]:shadow-sm transition-all h-fit">
                      <AccordionTrigger className="text-left font-display font-bold text-[14px] text-[#051139] hover:no-underline py-2.5">
                        <span className="flex items-center gap-4">
                          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-red-50 text-red-500 shrink-0">
                            <AlertTriangle size={14} strokeWidth={2.5} />
                          </span>
                          {event.title}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-slate-500 leading-relaxed pt-1 pb-3 text-[13px]">
                        {event.desc}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>

            </div>
          </div>
        </RevealSection>

        {/* ═══ 3b. FEAR OF DOING NOTHING ═══ */}
        <RevealSection className="py-20 lg:py-28 bg-[#051139] text-white relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <div className="absolute inset-0 opacity-10 mix-blend-screen">
              <img src="/images/it.webp" alt="" className="w-full h-full object-cover blur-md" />
            </div>
            <div className="w-[800px] h-[400px] bg-red-500 blur-[150px] rounded-full opacity-30 [mask-image:radial-gradient(ellipse,white,transparent)] mix-blend-screen" />
          </div>

          <div className="container mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
            <motion.div variants={fadeUp} className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-bold leading-tight mb-4">
                The Fear of Doing <span className="text-red-500">Nothing</span>
              </h2>
              <p className="text-slate-300 text-[14.5px] mb-10">
                Ignoring IT challenges doesn't make them disappear — it amplifies the risk.
              </p>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5 text-left max-w-2xl mx-auto mb-10">
                {[
                  "Data loss and system failures",
                  "Downtime and revenue leakage",
                  "Security breaches and compliance penalties",
                  "Inefficient operations and frustrated teams",
                ].map((item) => (
                  <motion.div key={item} variants={fadeUp} className="flex items-center gap-3 text-slate-300 text-[13px] font-medium">
                    <CheckCircle2 size={16} className="text-red-500 shrink-0" />
                    {item}
                  </motion.div>
                ))}
              </div>
              <motion.p variants={fadeUp} className="text-slate-400 text-[13px] italic">
                The cost of reacting is always higher than the cost of preventing.
              </motion.p>
            </motion.div>
          </div>
        </RevealSection>
      </div>

      {/* ═══ 4. BEFORE VS AFTER ═══ */}
      <RevealSection className="py-20 lg:py-32 bg-white relative">
        <div className="container mx-auto px-5 sm:px-6 lg:px-12">
          <motion.div variants={fadeUp} className="mb-14 text-center">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-bold leading-tight text-[#051139] tracking-tight">
              Before vs After <span className="text-primary">Cybaem</span>
            </h2>
          </motion.div>

          <div className="relative flex flex-col md:flex-row items-stretch justify-center gap-8 md:gap-12 max-w-5xl mx-auto">

            {/* Left Card: Before */}
            <motion.div variants={fadeUp} className="flex-1 bg-white rounded-3xl p-8 sm:p-10 border border-red-100 shadow-[0_8px_30px_rgb(239,68,68,0.06)] relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-50 text-red-500">
                  <AlertTriangle size={18} strokeWidth={2.5} />
                </span>
                <h3 className="font-display text-lg font-bold text-red-500">
                  Before: Reactive & Fragmented
                </h3>
              </div>
              <div className="space-y-4">
                {beforeItems.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-[13.5px] text-slate-600 font-medium">
                    <CheckCircle2 size={16} className="text-red-400 mt-0.5 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Middle Arrow */}
            <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full border-2 border-primary/20 items-center justify-center text-primary shadow-sm">
              <ArrowRight size={20} strokeWidth={2.5} />
            </div>

            {/* Right Card: After */}
            <motion.div variants={fadeUp} className="flex-1 bg-white rounded-3xl p-8 sm:p-10 border border-emerald-100 shadow-[0_8px_30px_rgb(16,185,129,0.06)] relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600">
                  <CheckCircle2 size={20} strokeWidth={2.5} />
                </span>
                <h3 className="font-display text-lg font-bold text-emerald-600">
                  After: Structured & Measurable
                </h3>
              </div>
              <div className="space-y-4">
                {afterItems.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-[13.5px] text-slate-600 font-medium">
                    <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </RevealSection>

      {/* ═══ 5. WHY COMPANIES SWITCH ═══ */}
      <RevealSection className="py-20 lg:py-32 bg-[#f8f9fc] relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04] mix-blend-multiply flex items-center justify-center">
          <img src="/images/world-map.svg" alt="" className="w-full h-auto max-w-[120%] object-cover object-center" />
        </div>

        <div className="container mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-[1fr_1fr_1.3fr] gap-10 items-center max-w-6xl mx-auto">
            <motion.div variants={fadeUp}>
              <span className="font-display text-[10px] font-bold tracking-[0.2em] uppercase text-[#0038b8] mb-3 block">
                Why Switch
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-bold leading-tight mb-4 text-[#051139] tracking-tight">
                Why Companies Switch to <span className="text-[#0038b8]">Cybaem</span>
              </h2>
              <p className="text-slate-500 text-[14px]">
                We don't just fix IT issues.<br />We transform IT into a growth enabler.
              </p>
            </motion.div>

            <motion.div variants={staggerFast} className="space-y-4 lg:px-6">
              {[
                "Proactive, not reactive",
                "Business-focused IT strategy",
                "Security & compliance first",
                "Scalable for future growth",
                "Clear communication & accountability",
                "Measurable results",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-slate-600 text-[13.5px] font-medium">
                  <CheckCircle2 size={16} className="text-[#0038b8] shrink-0" strokeWidth={2.5} />
                  {item}
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="hidden lg:flex justify-end relative pl-4">
              <img src="/images/it.webp" alt="Cybaem IT Blocks" className="w-full max-w-[450px] scale-110 lg:origin-right object-contain drop-shadow-xl mix-blend-multiply opacity-90" />
            </motion.div>
          </div>
        </div>
      </RevealSection>

      {/* ═══ 6. COMPARISON TABLE ═══ */}
      <RevealSection className="py-12 lg:py-16 bg-[#fafbfc]">
        <div className="container mx-auto px-5 sm:px-6 lg:px-12">

          <motion.div variants={fadeUp} className="mb-8 text-center">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="h-[1px] w-8 bg-blue-200 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-blue-600" /></div>
              <span className="font-display text-[11px] font-bold tracking-[0.15em] uppercase text-[#0038b8]">
                The Cybaem Advantage
              </span>
              <div className="h-[1px] w-8 bg-blue-200 relative"><div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-blue-600" /></div>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[36px] font-bold leading-tight mb-2 text-[#051139] tracking-tight">
              Internal IT vs Generic MSP vs <span className="text-[#0038b8]">Cybaem</span>
            </h2>
            <p className="text-slate-500 text-[14px] max-w-lg mx-auto">
              See how Cybaem's Managed IT Services go beyond traditional models to deliver measurable impact and business value.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="max-w-6xl mx-auto">
            {/* Desktop View */}
            <div className="relative mt-6 rounded-[20px] bg-white shadow-[0_5px_20px_rgb(0,0,0,0.03)] hidden lg:flex flex-row overflow-hidden border border-slate-100/60 lg:overflow-visible">

              {/* Column 1: Criteria */}
              <div className="flex-[1.4] bg-[#051139] text-white flex flex-col">
                <div className="h-[52px] flex items-center px-7 border-b border-white/10 shrink-0">
                  <FileText size={18} className="mr-4 text-white/80" />
                  <span className="font-display font-semibold text-[15px]">Criteria</span>
                </div>
                <div className="flex-1 flex flex-col">
                  {comparisonTable.map((row, i) => {
                    const icons = [Monitor, ShieldCheck, BarChart3, Mail, Lock, TrendingUp, DollarSign, Award];
                    const Icon = icons[i % icons.length];
                    return (
                      <div key={i} className={`h-[48px] flex items-center px-7 ${i !== comparisonTable.length - 1 ? 'border-b border-white/5' : ''}`}>
                        <Icon className="mr-4 text-white/80 shrink-0" size={18} strokeWidth={2} />
                        <span className="text-[13px] font-medium tracking-wide">{row.capability}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Column 2: Internal IT */}
              <div className="flex-[1.2] bg-white border-r border-slate-100 flex flex-col hidden sm:flex">
                <div className="h-[52px] flex items-center justify-center border-b border-slate-100 shrink-0">
                  <Users size={18} className="mr-3 text-[#0038b8]" />
                  <span className="font-display font-bold text-[14px] text-[#051139]">Internal IT</span>
                </div>
                <div className="flex-1 flex flex-col">
                  {comparisonTable.map((row, i) => (
                    <div key={i} className={`h-[48px] flex items-center justify-center px-4 ${i !== comparisonTable.length - 1 ? 'border-b border-slate-100' : ''}`}>
                      <MinusCircle size={15} className="mr-3 text-orange-400 shrink-0" />
                      <span className="text-[12.5px] text-slate-500 font-medium">{row.internal}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 3: Generic MSP */}
              <div className="flex-[1.2] bg-white flex flex-col hidden md:flex">
                <div className="h-[52px] flex items-center justify-center border-b border-slate-100 shrink-0">
                  <Building2 size={18} className="mr-3 text-[#0038b8]" />
                  <span className="font-display font-bold text-[14px] text-[#051139]">Generic MSP</span>
                </div>
                <div className="flex-1 flex flex-col">
                  {comparisonTable.map((row, i) => (
                    <div key={i} className={`h-[48px] flex items-center justify-center px-4 ${i !== comparisonTable.length - 1 ? 'border-b border-slate-100' : ''}`}>
                      <MinusCircle size={15} className="mr-3 text-orange-400 shrink-0" />
                      <span className="text-[12.5px] text-slate-500 font-medium">{row.msp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 4: Cybaem (Elevated Overlay) */}
              <div className="flex-[1.5] relative lg:scale-[1.04] shadow-[0_15px_40px_rgb(5,17,57,0.3)] rounded-[20px] bg-[#051139]/85 backdrop-blur-xl border border-white/10 flex flex-col overflow-hidden z-10">
                {/* Header Gradient */}
                <div className="h-[60px] bg-[#051139]/50 flex items-center justify-center text-white shrink-0 border-b border-white/10">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full border border-white/40 mr-3 font-display font-bold text-[10px] tracking-wider">CT</span>
                  <span className="font-display font-bold text-[16px] tracking-wide">Cybaem</span>
                </div>
                {/* Rows */}
                <div className="flex-1 flex flex-col">
                  {comparisonTable.map((row, i) => (
                    <div key={i} className={`h-[48px] flex items-center px-7 ${i !== comparisonTable.length - 1 ? 'border-b border-white/10' : ''}`}>
                      <CheckCircle2 size={18} className="mr-4 text-emerald-400 shrink-0" strokeWidth={2.5} />
                      <span className="text-[13px] text-white font-bold tracking-wide">{row.cybaem}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Mobile / Tablet View */}
            <div className="mt-6 flex flex-col gap-4 lg:hidden">
              {comparisonTable.map((row, i) => {
                const icons = [Monitor, ShieldCheck, BarChart3, Mail, Lock, TrendingUp, DollarSign, Award];
                const Icon = icons[i % icons.length];
                return (
                  <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                    {/* Header: Criteria */}
                    <div className="bg-[#051139] text-white p-4 flex items-center gap-3">
                      <Icon size={18} className="text-white/80" strokeWidth={2} />
                      <span className="font-display font-semibold text-[14px]">{row.capability}</span>
                    </div>
                    {/* Body */}
                    <div className="p-4 flex flex-col gap-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[12px] font-bold text-slate-400 uppercase tracking-wider">Internal IT</span>
                        <span className="text-[13px] text-slate-600 font-medium flex items-center gap-2">
                          <MinusCircle size={14} className="text-orange-400" />
                          {row.internal}
                        </span>
                      </div>
                      <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                        <span className="text-[12px] font-bold text-slate-400 uppercase tracking-wider">Generic MSP</span>
                        <span className="text-[13px] text-slate-600 font-medium flex items-center gap-2">
                          <MinusCircle size={14} className="text-orange-400" />
                          {row.msp}
                        </span>
                      </div>
                      <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                        <span className="text-[12px] font-bold text-primary uppercase tracking-wider flex items-center gap-2"><span className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center text-[9px] font-bold">CT</span> Cybaem</span>
                        <span className="text-[13px] text-[#051139] font-bold flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-emerald-500" strokeWidth={2.5} />
                          {row.cybaem}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Banner */}
            <div className="mt-8 bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between border border-[#0038b8]/10 shadow-[0_5px_20px_rgb(0,0,0,0.02)] gap-5 lg:mx-4">
              <div className="flex items-center gap-5 md:gap-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white shadow-md flex items-center justify-center shrink-0 border border-slate-50">
                  <ShieldCheck size={26} className="text-[#0038b8]" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-[16px] sm:text-[17px] text-[#051139] mb-1">More Than IT Support. We Drive Business Performance.</h4>
                  <p className="text-[13px] sm:text-[14px] text-slate-500">Cybaem delivers structure, security, and strategy — everything traditional models lack.</p>
                </div>
              </div>
              <a href="/contact" className="bg-[#0038b8] text-white px-6 sm:px-8 py-3 rounded-xl font-display font-bold text-[13.5px] hover:bg-[#002b8a] transition-colors flex items-center gap-2 whitespace-nowrap shadow-lg shadow-blue-500/20 shrink-0">
                Book a Free Review <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </RevealSection>

      {/* ═══ 7. CORE SERVICE PILLARS ═══ */}
      <div id="what-we-deliver">
        <RevealSection className="py-20 lg:py-28 bg-[#fafbfc]">
          <div className="container mx-auto px-5 sm:px-6 lg:px-12">
            <motion.div variants={fadeUp} className="mb-14 text-center">
              <span className="font-display text-[11px] font-bold tracking-[0.15em] uppercase text-primary mb-3 block">
                What We Manage
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-bold leading-tight text-[#051139] tracking-tight">
                Core Service <span className="text-primary">Pillars</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {servicePillars.map((pillar, idx) => (
                <motion.div
                  key={pillar.title}
                  variants={fadeUp}
                  className="bg-white rounded-[20px] shadow-[0_5px_25px_rgb(0,0,0,0.04)] p-6 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border border-slate-100"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
                      <pillar.icon size={22} strokeWidth={2} />
                    </div>
                    <h3 className="font-display font-bold text-[15px] leading-tight text-[#051139]">{pillar.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {pillar.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-[13px] text-slate-500 font-medium leading-snug">
                        <CheckCircle2 size={15} className="text-primary mt-[2px] shrink-0" strokeWidth={2.5} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </RevealSection>
      </div>

      {/* ═══ 8. ROI NARRATIVE ═══ */}
      <RevealSection className="py-12 lg:py-16 bg-[#051139] text-white relative overflow-hidden">

        {/* Subtle Background Image & Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-screen flex items-center justify-center">
          <img src="/images/world-map.svg" alt="" className="w-full h-auto max-w-[150%] object-cover object-center grayscale" />
        </div>
        <div className="absolute inset-0 pointer-events-none opacity-10 z-0 flex items-end justify-end">
          <svg width="600" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="translate-x-32 translate-y-20">
            <path d="M100 350 L250 200 L350 250 L550 50" stroke="#0038b8" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M550 50 L550 120 M550 50 L480 50" stroke="#0038b8" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="100" y="300" width="40" height="100" fill="#0038b8" fillOpacity="0.5" />
            <rect x="250" y="220" width="40" height="180" fill="#0038b8" fillOpacity="0.5" />
            <rect x="350" y="270" width="40" height="130" fill="#0038b8" fillOpacity="0.5" />
            <rect x="500" y="100" width="40" height="300" fill="#0038b8" fillOpacity="0.5" />
          </svg>
        </div>

        <div className="container mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left Column: 4 Cards Matrix */}
            <div>
              <motion.div variants={fadeUp} className="mb-6">
                <span className="font-display text-[10px] font-bold tracking-[0.2em] uppercase text-[#0038b8] mb-2 block">
                  The Real Impact
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-[36px] font-bold leading-tight tracking-tight">
                  ROI Narrative
                </h2>
              </motion.div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: DollarSign, title: "Cost Control", desc: "What is one hour of downtime worth?" },
                  { icon: TrendingUp, title: "Operational Impact", desc: "What is executive time spent firefighting worth?" },
                  { icon: Lock, title: "Risk Mitigation", desc: "What would one ransomware incident cost?" },
                  { icon: AlertTriangle, title: "Compliance Security", desc: "What is compliance failure exposure?" }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeUp}
                    className="rounded-xl border border-white/5 bg-[#0a184a]/60 backdrop-blur-md p-5 flex flex-col justify-center"
                  >
                    <item.icon size={22} className="text-slate-400 mb-3" strokeWidth={1.5} />
                    <h3 className="font-display font-bold text-[13.5px] text-white mb-2">{item.title}</h3>
                    <p className="text-[12px] text-slate-400 leading-snug">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: List & Statement */}
            <motion.div variants={fadeUp} className="max-w-md">
              <p className="font-display text-[14.5px] font-medium text-slate-300 mb-5">
                Managed IT ROI is not revenue generated.<br />It's:
              </p>
              <div className="space-y-3 mb-8">
                {roiItems.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#0038b8]/20 border border-[#0038b8] flex items-center justify-center shrink-0">
                      <CheckCircle2 size={12} className="text-[#2962ff]" strokeWidth={3} />
                    </div>
                    <span className="text-[14px] font-medium text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
              <p className="font-display text-[15px] font-bold text-[#2962ff] leading-relaxed">
                It's the growth enabler you can't see,<br />but your business feels every day.
              </p>
            </motion.div>

          </div>
        </div>
      </RevealSection>

      {/* ═══ 9. SERVICE TIERS ═══ */}
      <RevealSection className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-5 sm:px-6 lg:px-12">

          <motion.div variants={fadeUp} className="mb-14 text-center">
            <span className="font-display text-[10px] font-bold tracking-[0.2em] uppercase text-[#0038b8] mb-3 block">
              Engagement Models
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-bold leading-tight mb-4 text-[#051139] tracking-tight">
              Service Tiers
            </h2>
            <p className="text-slate-500 text-[14px]">
              Flexible engagement models for every business need.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16 max-w-6xl mx-auto">
            {serviceTiers.map((tier) => (
              <motion.div
                key={tier.title}
                variants={fadeUp}
                className={`rounded-[20px] p-8 transition-all duration-300 flex flex-col relative overflow-hidden ${tier.highlighted
                  ? "bg-[#051139]/85 backdrop-blur-xl border border-white/10 shadow-[0_15px_40px_rgb(5,17,57,0.3)] md:scale-105 z-10"
                  : "bg-white border border-slate-100 shadow-[0_5px_25px_rgb(0,0,0,0.03)]"
                  }`}
              >
                {/* Background texture only for the highlighted blue card */}
                {tier.highlighted && (
                  <div className="absolute inset-0 z-0 pointer-events-none opacity-25 mix-blend-overlay flex items-center justify-center">
                    <img src="/images/it-bg.webp" alt="" className="w-full h-full object-cover grayscale" />
                  </div>
                )}

                <div className="mb-6 relative z-10">
                  <h3 className={`font-display font-bold text-[18px] mb-2 ${tier.highlighted ? "text-white" : "text-[#051139]"}`}>
                    {tier.title}
                  </h3>
                  <p className={`text-[13px] ${tier.highlighted ? "text-slate-300" : "text-slate-500"}`}>
                    {tier.desc}
                  </p>
                </div>
                <ul className="space-y-4 relative z-10">
                  {tier.features.map((f) => (
                    <li key={f} className={`flex items-start gap-3 text-[13px] font-medium leading-snug ${tier.highlighted ? "text-white" : "text-slate-600"}`}>
                      <CheckCircle2 size={16} className={`mt-[2px] shrink-0 ${tier.highlighted ? "text-white opacity-80" : "text-[#0038b8]"}`} strokeWidth={2.5} />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Investing In (styled as pill badges like 'Technologies We Work With') */}
          <motion.div variants={fadeUp} className="max-w-4xl mx-auto text-center border-t border-slate-100 pt-12">
            <span className="font-display text-[10px] font-bold tracking-[0.2em] uppercase text-[#051139] mb-6 block">
              What You're Really Investing In
            </span>
            <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
              {investingIn.map((item) => (
                <span key={item} className="px-5 py-2.5 rounded-full bg-[#f4f7fc] text-slate-600 border border-slate-200/60 text-[12.5px] font-semibold hover:border-[#0038b8]/30 transition-colors cursor-default">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </RevealSection>


      {/* ═══ 12. FAQ ═══ */}
      <SolutionFAQ faqs={faqs} title="Managed IT Services" />



      <Footer />
    </div>
  );
};

export default ManagedIT;
