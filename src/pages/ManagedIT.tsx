import { useState, useEffect, useRef } from "react";
import SEOHead from "@/components/SEOHead";
import { managedITSeoData } from "@/data/seo/managedITSeo";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import ITRiskBriefing from "@/components/ITRiskBriefing";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Check,
  ChevronDown,
  ChevronRight,
  Shield,
  Monitor,
  Eye,
  Mail,
  Users,
  User,
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
  Cloud,
  Globe,
  Database,
  Clock,
  Settings,
  Cpu,
  Headphones,
  ClipboardCheck,
  Target,
  MessageSquare,
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
  id,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section id={id} ref={ref} className={`${dark ? "bg-foreground text-background" : ""} ${className}`}>
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
  {
    title: "A ransomware scare",
    desc: "Exposes gaps in your detection and response capability overnight.",
    icon: AlertTriangle,
    bgColor: "bg-rose-50 border-rose-100/80 text-rose-500",
  },
  {
    title: "A major email outage",
    desc: "Reveals dependencies and misconfigurations across every department.",
    icon: Mail,
    bgColor: "bg-amber-50 border-amber-100/80 text-amber-500",
  },
  {
    title: "Failed cloud migration",
    desc: "Costs multiply when data integrity and user transitions break down.",
    icon: Cloud,
    bgColor: "bg-purple-50 border-purple-100/80 text-purple-500",
  },
  {
    title: "Compliance audit warning",
    desc: "Uncovers governance gaps that put the entire business at risk.",
    icon: ShieldCheck,
    bgColor: "bg-emerald-50 border-emerald-100/80 text-emerald-500",
  },
  {
    title: "Rapid team expansion",
    desc: "Onboarding at scale without governance creates security blind spots.",
    icon: Users,
    bgColor: "bg-blue-50 border-blue-100/80 text-blue-500",
  },
  {
    title: "Leadership change",
    desc: "New leadership demands visibility, accountability, and structured IT.",
    icon: User,
    bgColor: "bg-orange-50 border-orange-100/80 text-orange-500",
  },
  {
    title: "Investor due diligence",
    desc: "Investors scrutinize IT risk posture — unstructured IT raises red flags.",
    icon: FileText,
    bgColor: "bg-cyan-50 border-cyan-100/80 text-cyan-600",
  },
  {
    title: "Client security questionnaire",
    desc: "Failing a client's security review can cost the deal entirely.",
    icon: Lock,
    bgColor: "bg-indigo-50 border-indigo-100/80 text-indigo-500",
  },
];

const fearOfNothingItems = [
  {
    title: "Data loss and system failures",
    sub: "Your critical data is always at risk.",
    icon: Database,
  },
  {
    title: "Downtime and revenue leakage",
    sub: "Every minute of downtime costs more.",
    icon: Clock,
  },
  {
    title: "Security breaches and compliance penalties",
    sub: "Cyber threats are growing every day.",
    icon: ShieldCheck,
  },
  {
    title: "Inefficient operations and frustrated teams",
    sub: "Slow systems hold your people back.",
    icon: Settings,
  },
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
  const [openTriggerTitle, setOpenTriggerTitle] = useState<string | null>(null);
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
      <section ref={heroRef} className="relative h-screen min-h-[640px] max-h-[1080px] flex items-center pt-20 pb-10 lg:pt-24 lg:pb-12 overflow-hidden bg-white w-full">
        {/* Ambient Soft Blue Radial Aura behind Right Image */}
        <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none z-0" />

        {/* Right 60-65% Image Container with Seamless Background Blend */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[62%] xl:w-[65%] z-0 overflow-hidden pt-2 sm:pt-4 lg:pt-6">
          {/* Hero Image: Crisp and fully visible on the right end without any right-side white overlay or fade */}
          <img
            src="/images/office-meeting.png"
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/images/manageit-hero.webp"; }}
            alt="Cybaem Managed IT Team"
            className="w-full h-full object-cover object-[78%_0%] sm:object-[82%_0%] brightness-[1.03] contrast-[1.02] [mask-image:linear-gradient(to_right,transparent_0%,black_22%,black_100%)]"
          />

          {/* Left Content Readability Soft Gradient Fade */}
          <div className="absolute inset-y-0 left-0 w-2/5 sm:w-1/3 lg:w-[30%] bg-gradient-to-r from-white via-white/90 to-transparent pointer-events-none z-10" />

          {/* Bottom Edge Soft Blend Fade */}
          <div className="absolute inset-x-0 bottom-0 h-20 sm:h-28 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none z-10" />

          {/* Top Edge Soft Blend Fade */}
          <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-white/80 via-white/30 to-transparent pointer-events-none z-10" />
        </div>

        {/* Hero Content Container */}
        <div className="container mx-auto px-6 lg:px-12 relative z-10 my-auto">
          <div className="w-full lg:w-[48%] xl:w-[45%] max-w-xl">

            {/* Top Category Tag */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-2 mb-2.5"
            >
              <div className="w-5 h-[2px] bg-primary" />
              <span className="text-xs sm:text-[13px] font-bold text-primary uppercase tracking-wider">
                MANAGED IT SERVICES
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-display text-3xl sm:text-4xl lg:text-[46px] xl:text-[48px] font-extrabold text-[#0f172a] leading-[1.12] tracking-tight mb-3"
            >
              When IT Becomes <br />
              <span className="text-primary">
                a Business Risk
              </span>
            </motion.h1>

            {/* Accent Line */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
              className="w-10 h-1 bg-primary rounded-full mb-4"
            />

            {/* Subtitle / Supporting Text */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.15 }}
              className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 max-w-lg font-normal"
            >
              We transform reactive IT into structured, secure and scalable business operations.
            </motion.p>

            {/* 4 Benefit Bullets Stack */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.25 }}
              className="flex flex-col gap-0.5 mb-7 max-w-lg"
            >
              {/* Item 1: IT Governance */}
              <div className="flex flex-col">
                <div className="flex items-center gap-3.5 py-1">
                  <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 shadow-sm">
                    <Shield size={17} strokeWidth={2} />
                  </div>
                  <span className="font-display font-semibold text-slate-800 text-sm sm:text-[15px] tracking-wide">
                    IT Governance
                  </span>
                </div>
                <div className="w-60 sm:w-72 h-[1px] bg-slate-200/60 my-0.5" />
              </div>

              {/* Item 2: Security */}
              <div className="flex flex-col">
                <div className="flex items-center gap-3.5 py-1">
                  <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 shadow-sm">
                    <Lock size={17} strokeWidth={2} />
                  </div>
                  <span className="font-display font-semibold text-slate-800 text-sm sm:text-[15px] tracking-wide">
                    Security
                  </span>
                </div>
                <div className="w-60 sm:w-72 h-[1px] bg-slate-200/60 my-0.5" />
              </div>

              {/* Item 3: Compliance */}
              <div className="flex flex-col">
                <div className="flex items-center gap-3.5 py-1">
                  <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 shadow-sm">
                    <FileText size={17} strokeWidth={2} />
                  </div>
                  <span className="font-display font-semibold text-slate-800 text-sm sm:text-[15px] tracking-wide">
                    Compliance
                  </span>
                </div>
                <div className="w-60 sm:w-72 h-[1px] bg-slate-200/60 my-0.5" />
              </div>

              {/* Item 4: Growth */}
              <div className="flex flex-col">
                <div className="flex items-center gap-3.5 py-1">
                  <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 shadow-sm">
                    <TrendingUp size={17} strokeWidth={2} />
                  </div>
                  <span className="font-display font-semibold text-slate-800 text-sm sm:text-[15px] tracking-wide">
                    Growth
                  </span>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.35 }}
              className="flex flex-col sm:flex-row items-center gap-3.5"
            >
              <button
                onClick={() => document.getElementById('it-risk-briefing')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 text-sm font-bold bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity shadow-md hover:-translate-y-0.5"
              >
                Schedule a Free Review <ArrowRight size={17} />
              </button>
              <button
                onClick={() => document.getElementById('before-vs-after')?.scrollIntoView({ behavior: 'smooth' })}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 text-sm font-semibold border border-slate-300 text-slate-700 rounded-xl bg-white hover:bg-slate-50 hover:border-slate-400 transition-all duration-300 shadow-sm hover:-translate-y-0.5"
              >
                <PlayCircle size={18} strokeWidth={1.8} className="text-slate-600 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                <span>Explore Our Approach</span>
              </button>
            </motion.div>
          </div>
        </div>

        {/* Curved Blue Swoosh Border at Bottom matching reference image */}
        <div className="absolute bottom-0 inset-x-0 h-12 pointer-events-none z-20 overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 1440 48" fill="none" preserveAspectRatio="none">
            <path d="M0 48 C480 0 960 0 1440 48" stroke="hsl(var(--primary))" strokeWidth="3" fill="none" />
          </svg>
        </div>
      </section>

      {/* ═══ 2. INTERACTIVE IT RISK BRIEFING ═══ */}
      <div id="it-risk-briefing">
        <ITRiskBriefing />
      </div>

      {/* ═══ 3. TRIGGER EVENTS (IMAGE + LIST STYLE) ═══ */}
      <div id="warning-signals">
        <RevealSection className="py-16 lg:py-24 bg-[#F8FAFD]">
          <div className="container mx-auto px-5 sm:px-6 lg:px-12">
            <div className="w-full max-w-6xl mx-auto">

              {/* Header Content */}
              <motion.div variants={fadeUp} className="mb-10 lg:mb-12">
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

              {/* Image + List Style 2-Column Grid */}
              <motion.div variants={fadeUp} className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">

                {/* LEFT SIDE (~35% Width): Modern Cybersecurity Shield Illustration */}
                <div className="lg:col-span-5 relative flex items-center justify-center min-h-[380px] sm:min-h-[430px] bg-gradient-to-b from-blue-50/50 via-white to-blue-50/30 rounded-3xl p-6 border border-blue-100/60 shadow-[0_10px_30px_rgba(37,99,235,0.04)] overflow-hidden">
                  {/* Soft Blue Radial Glow */}
                  <div className="absolute w-64 h-64 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />

                  {/* Outer & Inner Dotted Orbit Rings */}
                  <div className="absolute w-64 h-64 sm:w-72 sm:h-72 border border-blue-200/70 border-dashed rounded-full pointer-events-none" />
                  <div className="absolute w-44 h-44 sm:w-52 sm:h-52 border border-blue-100/80 border-dashed rounded-full pointer-events-none" />

                  {/* Central Blue Security Shield with Exclamation Mark */}
                  <div className="relative z-10 w-32 h-40 sm:w-36 sm:h-44 bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 rounded-b-[45%] rounded-t-[26px] shadow-[0_16px_36px_rgba(37,99,235,0.35)] flex items-center justify-center border-2 border-blue-400/40 transform hover:scale-105 transition-transform duration-500">
                    {/* Inner Shield Bezel Line */}
                    <div className="absolute inset-2 border border-white/25 rounded-b-[40%] rounded-t-[20px] pointer-events-none" />
                    <span className="text-white text-5xl sm:text-6xl font-black font-sans drop-shadow-md select-none">!</span>
                  </div>

                  {/* Surrounding Floating Security Badges */}
                  <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                    {/* Top: Cloud */}
                    <div className="absolute -top-1 sm:top-3 w-9 h-9 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center text-blue-600 animate-[floating_4s_ease-in-out_infinite]">
                      <Cloud size={16} strokeWidth={2.2} />
                    </div>
                    {/* Top Right: Users */}
                    <div className="absolute top-10 right-4 sm:right-8 w-9 h-9 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center text-blue-600 animate-[floating_4s_ease-in-out_infinite_0.5s]">
                      <Users size={16} strokeWidth={2.2} />
                    </div>
                    {/* Right: ShieldCheck */}
                    <div className="absolute right-1 sm:right-3 w-9 h-9 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center text-blue-600 animate-[floating_4s_ease-in-out_infinite_1s]">
                      <ShieldCheck size={16} strokeWidth={2.2} />
                    </div>
                    {/* Lower Right: Lock */}
                    <div className="absolute bottom-12 right-6 sm:right-10 w-9 h-9 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center text-blue-600 animate-[floating_4s_ease-in-out_infinite_1.5s]">
                      <Lock size={16} strokeWidth={2.2} />
                    </div>
                    {/* Bottom: Mail */}
                    <div className="absolute bottom-1 sm:bottom-4 w-9 h-9 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center text-blue-600 animate-[floating_4s_ease-in-out_infinite_2s]">
                      <Mail size={16} strokeWidth={2.2} />
                    </div>
                    {/* Lower Left: FileText */}
                    <div className="absolute bottom-12 left-6 sm:left-10 w-9 h-9 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center text-blue-600 animate-[floating_4s_ease-in-out_infinite_2.5s]">
                      <FileText size={16} strokeWidth={2.2} />
                    </div>
                    {/* Left: TrendingUp */}
                    <div className="absolute left-1 sm:left-3 w-9 h-9 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center text-blue-600 animate-[floating_4s_ease-in-out_infinite_3s]">
                      <TrendingUp size={16} strokeWidth={2.2} />
                    </div>
                    {/* Top Left: User */}
                    <div className="absolute top-10 left-4 sm:left-8 w-9 h-9 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center text-blue-600 animate-[floating_4s_ease-in-out_infinite_3.5s]">
                      <User size={16} strokeWidth={2.2} />
                    </div>
                  </div>

                  {/* Faint City Skyline Vector Silhouette at Bottom */}
                  <div className="absolute bottom-0 inset-x-0 h-16 opacity-30 pointer-events-none flex items-end justify-center">
                    <svg className="w-full h-full text-blue-300 fill-current" viewBox="0 0 300 80" preserveAspectRatio="none">
                      <path d="M0,80 L0,50 L15,50 L15,30 L30,30 L30,80 L45,80 L45,20 L65,20 L65,80 L80,80 L80,40 L95,40 L95,80 L115,80 L115,10 L140,10 L140,80 L160,80 L160,35 L175,35 L175,80 L195,80 L195,25 L215,25 L215,80 L235,80 L235,45 L255,45 L255,80 L275,80 L275,30 L290,30 L290,80 Z" />
                    </svg>
                  </div>
                </div>

                {/* RIGHT SIDE (~65% Width): 8 Trigger Cards Grid (2 Columns x 4 Rows) */}
                <div className="lg:col-span-7">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-4.5 items-start">
                    {triggerEvents.map((event) => {
                      const isOpen = openTriggerTitle === event.title;
                      const IconComp = event.icon || AlertTriangle;
                      const bgStyle = event.bgColor || "bg-rose-50 border-rose-100 text-rose-500";
                      return (
                        <div
                          key={event.title}
                          onClick={() => setOpenTriggerTitle(isOpen ? null : event.title)}
                          className={`group bg-white rounded-[18px] p-4.5 sm:p-5 border transition-all duration-300 cursor-pointer ${isOpen
                              ? "border-primary/40 shadow-lg ring-2 ring-primary/10"
                              : "border-slate-100/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md hover:-translate-y-1 hover:border-slate-200"
                            }`}
                        >
                          <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-3.5 min-w-0">
                              <span className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${event.bgColor}`}>
                                <IconComp size={18} strokeWidth={2.2} />
                              </span>
                              <h3 className="font-display font-bold text-[14px] sm:text-[14.5px] text-[#051139] group-hover:text-primary transition-colors truncate">
                                {event.title}
                              </h3>
                            </div>
                            <span className={`w-7 h-7 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:bg-blue-50 transition-all duration-300 shrink-0 ${isOpen ? "rotate-90 text-primary bg-blue-50" : ""}`}>
                              <ChevronRight size={16} strokeWidth={2.2} className="group-hover:translate-x-0.5 transition-transform" />
                            </span>
                          </div>

                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                className="overflow-hidden"
                              >
                                <p className="text-slate-500 text-[13px] leading-relaxed pt-3 mt-3 border-t border-slate-100">
                                  {event.desc}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </motion.div>

            </div>
          </div>
        </RevealSection>

        {/* ═══ 3b. FEAR OF DOING NOTHING (REFINED LIGHTER NAVY & ASYMMETRICAL FLOATING ICONS) ═══ */}
        <RevealSection className="py-14 sm:py-16 lg:py-20 bg-gradient-to-b from-[#091538] via-[#0c1b48] to-[#071333] text-white relative overflow-hidden">
          {/* Subtle Dotted Grid Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#475569_1px,transparent_1px)] [background-size:24px_24px] opacity-65 pointer-events-none" />

          {/* Ambient Glowing Radial Auras */}
          <div className="absolute -left-36 top-1/4 w-[480px] h-[480px] bg-red-500/18 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute -right-36 bottom-1/4 w-[480px] h-[480px] bg-blue-500/22 rounded-full blur-[130px] pointer-events-none" />

          {/* Faint Orbital & Circuit Lines with Slow Ambient Floating Dots Along Curved Paths */}
          <svg className="absolute inset-0 w-full h-full text-blue-400/20 pointer-events-none z-0 hidden md:block" viewBox="0 0 1200 500" fill="none" preserveAspectRatio="none">
            {/* Left Arc Path & Slow Moving Glowing Bubble Dot (40-50% Slower Speed: 14s) */}
            <path d="M 60 250 C 180 120, 320 120, 480 250" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 5" />
            <g>
              <circle r="4.5" fill="#60a5fa" filter="drop-shadow(0 0 8px #3b82f6)">
                <animateMotion path="M 60 250 C 180 120, 320 120, 480 250" dur="14s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1" />
              </circle>
              <circle r="7" fill="#3b82f6" opacity="0.35">
                <animateMotion path="M 60 250 C 180 120, 320 120, 480 250" dur="14s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1" />
              </circle>
            </g>
            <circle cx="320" cy="155" r="3" fill="#60a5fa" opacity="0.7" />

            {/* Right Arc Path & Slow Moving Glowing Bubble Dot (40-50% Slower Speed: 16s) */}
            <path d="M 720 250 C 880 380, 1020 380, 1140 250" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 5" />
            <g>
              <circle r="4.5" fill="#60a5fa" filter="drop-shadow(0 0 8px #3b82f6)">
                <animateMotion path="M 720 250 C 880 380, 1020 380, 1140 250" dur="16s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1" />
              </circle>
              <circle r="7" fill="#3b82f6" opacity="0.35">
                <animateMotion path="M 720 250 C 880 380, 1020 380, 1140 250" dur="16s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1" />
              </circle>
            </g>
            <circle cx="950" cy="345" r="3" fill="#60a5fa" opacity="0.7" />
          </svg>

          {/* Dotted Matrix Clusters on Far Left & Right Edges */}
          <div className="absolute left-5 top-1/2 -translate-y-1/2 grid grid-cols-3 gap-1.5 opacity-25 pointer-events-none hidden lg:grid">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={`dl-${i}`} className="w-1.5 h-1.5 rounded-full bg-blue-300" />
            ))}
          </div>
          <div className="absolute right-5 top-1/2 -translate-y-1/2 grid grid-cols-3 gap-1.5 opacity-25 pointer-events-none hidden lg:grid">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={`dr-${i}`} className="w-1.5 h-1.5 rounded-full bg-blue-300" />
            ))}
          </div>

          {/* Asymmetrical Floating 3D Glass Icon Tiles */}
          <div className="absolute inset-0 pointer-events-none z-0 hidden md:block">
            {/* 1. Cloud: Top-Left, slightly higher, rotated -6° */}
            <div className="absolute top-[14%] left-[6%] w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-400/12 border border-blue-300/30 backdrop-blur-md flex items-center justify-center text-blue-200 -rotate-6 shadow-[0_0_25px_rgba(59,130,246,0.2)] animate-[floating_6.5s_ease-in-out_infinite]">
              <Cloud size={24} strokeWidth={1.8} />
            </div>
            {/* 2. Shield: Top-Right, slightly lower, rotated +7° */}
            <div className="absolute top-[26%] right-[5%] w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-400/12 border border-blue-300/30 backdrop-blur-md flex items-center justify-center text-blue-200 rotate-7 shadow-[0_0_25px_rgba(59,130,246,0.2)] animate-[floating_8s_ease-in-out_infinite_1.4s]">
              <ShieldCheck size={24} strokeWidth={1.8} />
            </div>
            {/* 3. Server: Bottom-Left, closer to cards, rotated +5° */}
            <div className="absolute bottom-[18%] left-[8%] w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-400/12 border border-blue-300/30 backdrop-blur-md flex items-center justify-center text-blue-200 rotate-5 shadow-[0_0_25px_rgba(59,130,246,0.2)] animate-[floating_7.2s_ease-in-out_infinite_2.8s]">
              <Server size={24} strokeWidth={1.8} />
            </div>
            {/* 4. Analytics: Bottom-Right, slightly lower, rotated -4° */}
            <div className="absolute bottom-[14%] right-[7%] w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-400/12 border border-blue-300/30 backdrop-blur-md flex items-center justify-center text-blue-200 -rotate-4 shadow-[0_0_25px_rgba(59,130,246,0.2)] animate-[floating_8.5s_ease-in-out_infinite_4.2s]">
              <BarChart3 size={24} strokeWidth={1.8} />
            </div>
          </div>

          <div className="container mx-auto px-5 sm:px-6 lg:px-12 relative z-10">

            {/* Compact Header Content */}
            <motion.div variants={fadeUp} className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-bold leading-tight mb-3 tracking-tight">
                The Fear of Doing <span className="text-red-500 drop-shadow-[0_0_20px_rgba(239,68,68,0.5)]">Nothing</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-[15px] max-w-xl mx-auto font-normal leading-relaxed">
                Ignoring IT challenges doesn't make them disappear — it amplifies the risk.
              </p>
              {/* Sleek Blue-to-Red Horizontal Pill Line */}
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 rounded-full mx-auto mt-3" />
            </motion.div>

            {/* 2x2 Glassmorphism Cards Grid (Rich Contrast Focal Point) */}
            <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 max-w-5xl mx-auto">
              {fearOfNothingItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className="group relative bg-[#0d1f4d]/85 backdrop-blur-xl border border-slate-700/70 hover:border-red-500/50 rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-[0_15px_35px_rgba(0,0,0,0.35)] hover:shadow-[0_0_35px_rgba(239,68,68,0.22)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex items-start gap-4 sm:gap-4.5"
                  >
                    {/* Card Top Border Red Accent Gradient */}
                    <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-red-500/60 to-blue-500/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Left Glass Icon Box Matching Floating Side Icons (Soft Blue Outline + Glassmorphism + Subtle Glow) */}
                    <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-blue-400/12 border border-blue-300/30 backdrop-blur-md flex items-center justify-center text-blue-200 shrink-0 shadow-[0_0_20px_rgba(59,130,246,0.2)] group-hover:scale-105 group-hover:border-blue-400/60 group-hover:bg-blue-400/20 group-hover:text-blue-100 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.35)] transition-all">
                      <IconComponent size={22} strokeWidth={1.8} />
                    </div>

                    {/* Right Title + Subtitle + Accent Underline */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-bold text-base sm:text-[16.5px] text-white group-hover:text-red-100 transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-slate-300 text-xs sm:text-[12.5px] font-normal mt-1 leading-relaxed">
                        {item.sub}
                      </p>
                      <div className="w-8 h-[2px] bg-gradient-to-r from-red-500/80 to-transparent mt-2.5 group-hover:w-14 transition-all duration-300" />
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* Compact Bottom Glass Quote Capsule */}
            <motion.div variants={fadeUp} className="mt-8 sm:mt-10 text-center flex justify-center">
              <div className="inline-flex items-center justify-center px-6 sm:px-9 py-2.5 sm:py-3 rounded-full bg-[#09183d]/90 backdrop-blur-md border border-slate-700/60 shadow-[0_10px_30px_rgba(0,0,0,0.3)] text-slate-200 text-xs sm:text-[13px] italic font-medium tracking-wide hover:border-slate-500 transition-colors">
                "The cost of reacting is always higher than the cost of preventing."
              </div>
            </motion.div>

          </div>
        </RevealSection>
      </div>

      {/* ═══ 4. BEFORE VS AFTER (SPLIT GLASS TIMELINE REDESIGN) ═══ */}
      <RevealSection id="before-vs-after" className="pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-20 bg-gradient-to-b from-white via-blue-50/20 to-slate-50/40 relative overflow-hidden">
        {/* Decorative Matrix Grid Clusters */}
        <div className="absolute top-10 right-12 grid grid-cols-4 gap-1.5 opacity-20 pointer-events-none hidden lg:grid">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={`bva-tr-${i}`} className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          ))}
        </div>
        <div className="absolute bottom-10 left-12 grid grid-cols-4 gap-1.5 opacity-20 pointer-events-none hidden lg:grid">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={`bva-bl-${i}`} className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          ))}
        </div>

        {/* Soft Ambient Center Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
          
          {/* Header */}
          <motion.div variants={fadeUp} className="mb-10 sm:mb-14 text-center">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 rounded-full mx-auto mb-4 opacity-80" />
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold leading-tight text-[#051139] tracking-tight">
              Before vs After <span className="text-primary">Cybaem</span>
            </h2>
          </motion.div>

          {/* Desktop & Tablet Split Glass Timeline Grid */}
          <div className="max-w-6xl mx-auto">
            
            {/* Column Layout Container */}
            <div className="grid lg:grid-cols-[1fr_56px_1fr] gap-4 lg:gap-6 items-stretch">

              {/* LEFT COLUMN: Before: Reactive & Fragmented */}
              <motion.div variants={fadeUp} className="bg-red-50/30 backdrop-blur-xl border border-red-200/60 rounded-[28px] p-5 sm:p-7 shadow-[0_15px_40px_rgba(239,68,68,0.05)] flex flex-col">
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-red-100/80 border border-red-200 flex items-center justify-center text-red-500 shrink-0 shadow-2xs">
                    <AlertTriangle size={20} strokeWidth={2.2} />
                  </div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-red-500">
                    Before: Reactive & Fragmented
                  </h3>
                </div>

                <div className="space-y-3 flex-1 flex flex-col justify-between">
                  {beforeItems.map((item) => (
                    <div
                      key={item}
                      className="group bg-white rounded-2xl px-4 py-3 sm:py-3.5 border border-red-100/90 shadow-[0_2px_8px_rgba(239,68,68,0.04)] hover:shadow-md hover:border-red-300 transition-all duration-300 flex items-center gap-[14px] min-h-[52px]"
                    >
                      <MinusCircle size={18} strokeWidth={2} className="text-red-500 shrink-0" />
                      <span className="font-display font-semibold text-slate-700 text-xs sm:text-[13.5px] leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* CENTER TIMELINE (Desktop 7 Connected Arrow Nodes) */}
              <div className="hidden lg:flex flex-col justify-between pt-[68px]">
                {beforeItems.map((_, idx) => (
                  <div key={`node-${idx}`} className="flex items-center justify-center my-auto min-h-[52px]">
                    <div className="w-3 h-[1.5px] bg-red-200/80 shrink-0" />
                    <div className="w-8 h-8 rounded-full bg-white border border-blue-200/90 text-blue-600 shadow-[0_2px_10px_rgba(59,130,246,0.15)] flex items-center justify-center shrink-0 hover:scale-110 hover:border-blue-400 hover:shadow-md transition-all duration-300">
                      <ArrowRight size={14} strokeWidth={2.5} />
                    </div>
                    <div className="w-3 h-[1.5px] bg-emerald-200/80 shrink-0" />
                  </div>
                ))}
              </div>

              {/* RIGHT COLUMN: After: Structured & Measurable */}
              <motion.div variants={fadeUp} className="bg-emerald-50/30 backdrop-blur-xl border border-emerald-200/60 rounded-[28px] p-5 sm:p-7 shadow-[0_15px_40px_rgba(16,185,129,0.05)] flex flex-col">
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100/80 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0 shadow-2xs">
                    <CheckCircle2 size={20} strokeWidth={2.2} />
                  </div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-emerald-600">
                    After: Structured & Measurable
                  </h3>
                </div>

                <div className="space-y-3 flex-1 flex flex-col justify-between">
                  {afterItems.map((item) => (
                    <div
                      key={item}
                      className="group bg-white rounded-2xl px-4 py-3 sm:py-3.5 border border-emerald-100/90 shadow-[0_2px_8px_rgba(16,185,129,0.04)] hover:shadow-md hover:border-emerald-300 transition-all duration-300 flex items-center gap-[14px] min-h-[52px]"
                    >
                      <CheckCircle2 size={18} strokeWidth={2} className="text-emerald-500 shrink-0" />
                      <span className="font-display font-semibold text-slate-800 text-xs sm:text-[13.5px] leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

            </div>

          </div>

        </div>
      </RevealSection>

      {/* ═══ 5. WHY COMPANIES SWITCH TO CYBAEM ═══ */}
      <RevealSection className="pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 bg-gradient-to-b from-white via-blue-50/20 to-slate-50/50 relative overflow-hidden">
        {/* Soft Radial Blue Ambient Glow behind Shield */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Faint Light Network Grid Texture */}
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05] pointer-events-none" />

        <div className="container mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center max-w-7xl mx-auto">
            
            {/* LEFT COLUMN (≈45% Width): Typography & Colorful Premium Service Checklist */}
            <motion.div variants={fadeUp} className="lg:col-span-5 xl:col-span-5 lg:pl-8 xl:pl-12">
              <span className="font-display text-[10.5px] font-bold tracking-[0.2em] uppercase text-primary mb-3 block">
                WHY SWITCH
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-[38px] font-bold leading-[1.14] mb-3.5 text-[#051139] tracking-tight">
                Why Companies Switch to <span className="text-primary">Cybaem</span>
              </h2>
              <p className="text-slate-500 text-[14px] sm:text-[15px] leading-relaxed mb-7">
                We don't just fix IT issues.<br />
                We transform IT into a growth enabler.
              </p>

              {/* Colorful Premium Service Checklist (Pastel Icon Badges + Microsoft/Apple Fluent Style) */}
              <motion.div variants={staggerFast} className="space-y-0 border-t border-slate-200/50">
                {[
                  { title: "Proactive, not reactive", icon: ShieldCheck, boxStyle: "bg-blue-50/90 border-blue-200/80 text-blue-600" },
                  { title: "Business-focused IT strategy", icon: Target, boxStyle: "bg-emerald-50/90 border-emerald-200/80 text-emerald-600" },
                  { title: "Security & compliance first", icon: Lock, boxStyle: "bg-purple-50/90 border-purple-200/80 text-purple-600" },
                  { title: "Scalable for future growth", icon: TrendingUp, boxStyle: "bg-amber-50/90 border-amber-200/80 text-amber-600" },
                  { title: "Clear communication & accountability", icon: MessageSquare, boxStyle: "bg-sky-50/90 border-sky-200/80 text-sky-600" },
                  { title: "Measurable results", icon: BarChart3, boxStyle: "bg-rose-50/90 border-rose-200/80 text-rose-600" },
                ].map((item) => {
                  const ItemIcon = item.icon;
                  return (
                    <motion.div key={item.title} variants={fadeUp} className="group flex flex-col">
                      <div className="py-2.5 sm:py-2.5 flex items-center gap-3.5 sm:gap-4 transition-colors hover:bg-blue-50/20 px-2 rounded-xl">
                        <div className={`w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-lg border flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform ${item.boxStyle}`}>
                          <ItemIcon size={16} strokeWidth={2.2} />
                        </div>
                        <span className="font-display font-semibold text-slate-800 text-[13px] sm:text-[13.5px] tracking-tight">
                          {item.title}
                        </span>
                      </div>
                      {/* Shorter 85% Width Divider Line */}
                      <div className="w-[85%] h-[1px] bg-slate-200/50 self-start ml-2" />
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* RIGHT COLUMN (≈55% Width): Seamlessly Blended 3D Glass Shield Artwork */}
            <motion.div variants={fadeUp} className="lg:col-span-7 xl:col-span-7 relative flex items-center justify-center w-full lg:translate-x-2 py-4">
              
              {/* Soft Radial Ambient Blue Glow Aura behind Shield */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[510px] sm:w-[580px] h-[510px] sm:h-[580px] bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
              
              {/* Concentric Light Ring Highlight */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-80 sm:w-[420px] h-20 bg-blue-400/25 rounded-[100%] blur-2xl pointer-events-none" />

              {/* 3D Glass Shield Artwork - Multiply Blend & Radial Feathering Mask (Slightly Increased Height/Scale) */}
              <div className="relative w-full max-w-[530px] sm:max-w-[610px] animate-[floating_6s_ease-in-out_infinite]">
                <img
                  src="/images/switch-it.png"
                  alt="Why Companies Switch to Cybaem - IT Transformation Shield"
                  className="w-full h-auto object-contain select-none mix-blend-multiply [mask-image:radial-gradient(ellipse_at_center,black_75%,transparent_98%)]"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </RevealSection>

      {/* ═══ 6. COMPARISON TABLE (Internal IT vs Generic MSP vs Cybaem) ═══ */}
      <RevealSection className="pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 bg-[#fafbfc]">
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
              <div className="flex-[1.4] bg-[#051139]/85 backdrop-blur-xl text-white flex flex-col rounded-[20px] overflow-hidden">
                <div className="h-[52px] bg-[#051139]/50 flex items-center px-7 border-b border-white/10 shrink-0">
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
                    <div key={i} className={`h-[48px] flex items-center justify-center text-center px-4 ${i !== comparisonTable.length - 1 ? 'border-b border-slate-100' : ''}`}>
                      <MinusCircle size={15} className="mr-3 text-orange-400 shrink-0" />
                      <span className="text-[12.5px] text-[#111827] font-semibold tracking-tight">{row.internal}</span>
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
                    <div key={i} className={`h-[48px] flex items-center justify-center text-center px-4 ${i !== comparisonTable.length - 1 ? 'border-b border-slate-100' : ''}`}>
                      <MinusCircle size={15} className="mr-3 text-orange-400 shrink-0" />
                      <span className="text-[12.5px] text-[#111827] font-semibold tracking-tight">{row.msp}</span>
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
                        <span className="text-[13px] text-[#111827] font-semibold flex items-center gap-2">
                          <MinusCircle size={14} className="text-orange-400" />
                          {row.internal}
                        </span>
                      </div>
                      <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                        <span className="text-[12px] font-bold text-slate-400 uppercase tracking-wider">Generic MSP</span>
                        <span className="text-[13px] text-[#111827] font-semibold flex items-center gap-2">
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
                  <h3 className="font-display font-bold text-[16px] sm:text-[17px] text-[#051139] mb-1">More Than IT Support. We Drive Business Performance.</h3>
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
        <RevealSection className="pt-12 sm:pt-16 lg:pt-20 pb-20 lg:pb-28 bg-[#fafbfc]">
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

      {/* ═══ 8. ROI NARRATIVE (COMPACT HIGH-CONTRAST LAYOUT) ═══ */}
      <RevealSection className="py-12 sm:py-14 lg:py-16 bg-gradient-to-b from-[#091538] via-[#0c1b48] to-[#071333] text-white relative overflow-hidden">
        {/* Subtle Dotted Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-45 pointer-events-none" />

        {/* Ambient Glowing Radial Auras */}
        <div className="absolute -left-40 top-1/4 w-[450px] h-[450px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -right-40 bottom-1/4 w-[450px] h-[450px] bg-purple-600/12 rounded-full blur-[140px] pointer-events-none" />

        {/* Dotted Matrix Cluster on Upper Right (Matching Reference Image) */}
        <div className="absolute top-8 right-12 grid grid-cols-4 gap-1.5 opacity-20 pointer-events-none hidden lg:grid">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={`rm-${i}`} className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          ))}
        </div>

        <div className="container mx-auto px-5 sm:px-6 lg:px-12 lg:pl-14 xl:pl-18 relative z-10">
          {/* Section Eyebrow & Title */}
          <motion.div variants={fadeUp} className="mb-6 sm:mb-8">
            <span className="font-display text-[10.5px] font-bold tracking-[0.25em] uppercase text-blue-400/90 mb-1.5 block">
              THE REAL IMPACT
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold leading-tight tracking-tight">
              ROI <span className="text-blue-500 drop-shadow-[0_0_25px_rgba(59,130,246,0.5)]">Narrative</span>
            </h2>
          </motion.div>

          {/* Layout Grid: 4 Cards Left, Compact Neon Circuit SVG Center, Shifted Right Content */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_170px_1fr] xl:grid-cols-[1.1fr_190px_1fr] gap-6 items-center max-w-6xl">

            {/* Left Column: 4 Stacked Glassmorphism Feature Cards */}
            <div className="space-y-3">
              {[
                {
                  num: "01",
                  title: "Cost Control",
                  desc: "What is one hour of downtime worth?",
                  icon: DollarSign,
                  iconBox: "bg-blue-500/15 border-blue-400/30 text-blue-400",
                  numColor: "text-blue-300/30",
                  hoverBorder: "hover:border-blue-400/60 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]",
                  dotColor: "bg-blue-400 shadow-[0_0_10px_#60a5fa]",
                },
                {
                  num: "02",
                  title: "Operational Impact",
                  desc: "What is executive time spent firefighting worth?",
                  icon: TrendingUp,
                  iconBox: "bg-purple-500/15 border-purple-400/30 text-purple-400",
                  numColor: "text-purple-300/30",
                  hoverBorder: "hover:border-purple-400/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]",
                  dotColor: "bg-purple-400 shadow-[0_0_10px_#c084fc]",
                },
                {
                  num: "03",
                  title: "Risk Mitigation",
                  desc: "What would one ransomware incident cost?",
                  icon: Lock,
                  iconBox: "bg-cyan-500/15 border-cyan-400/30 text-cyan-400",
                  numColor: "text-cyan-300/30",
                  hoverBorder: "hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]",
                  dotColor: "bg-cyan-400 shadow-[0_0_10px_#22d3ee]",
                },
                {
                  num: "04",
                  title: "Compliance Security",
                  desc: "What is compliance failure exposure?",
                  icon: AlertTriangle,
                  iconBox: "bg-amber-500/15 border-amber-400/30 text-amber-400",
                  numColor: "text-amber-300/30",
                  hoverBorder: "hover:border-amber-400/60 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]",
                  dotColor: "bg-amber-400 shadow-[0_0_10px_#fbbf24]",
                },
              ].map((card) => {
                const CardIcon = card.icon;
                return (
                  <motion.div
                    key={card.num}
                    variants={fadeUp}
                    className={`group relative bg-[#09153a]/80 backdrop-blur-xl border border-slate-700/60 ${card.hoverBorder} rounded-xl sm:rounded-2xl p-3.5 sm:p-4 flex items-center justify-between transition-all duration-300 hover:-translate-y-0.5`}
                  >
                    {/* Left Icon + Title + Description */}
                    <div className="flex items-center gap-3.5 min-w-0 pr-3">
                      <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl border flex items-center justify-center shrink-0 ${card.iconBox} shadow-inner group-hover:scale-105 transition-transform`}>
                        <CardIcon size={20} strokeWidth={2} />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-display font-bold text-sm sm:text-base text-white leading-snug">
                          {card.title}
                        </h3>
                        <p className="text-slate-400 text-[11.5px] sm:text-xs font-normal mt-0.5 leading-relaxed truncate sm:whitespace-normal">
                          {card.desc}
                        </p>
                      </div>
                    </div>

                    {/* Right Big Number (01, 02, 03, 04) */}
                    <div className={`font-display font-bold text-2xl sm:text-3xl ${card.numColor} tracking-tight select-none shrink-0`}>
                      {card.num}
                    </div>

                    {/* Right Border Connector Pulse Dot */}
                    <div className={`absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full ${card.dotColor} border border-slate-900 hidden lg:block`} />
                  </motion.div>
                );
              })}
            </div>

            {/* Center Animated Neon SVG Circuit Lines */}
            <div className="hidden lg:flex items-center justify-center relative w-full h-[320px] pointer-events-none">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 180 360" fill="none" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="neonGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#60a5fa" />
                  </linearGradient>
                  <linearGradient id="neonGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                  <linearGradient id="neonGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                  <linearGradient id="neonGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                  <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Extended Branch Line 1 (Card 01 -> Central Junction) */}
                <path d="M 0 45 C 70 45, 90 45, 90 180 M 90 180 L 165 180" stroke="url(#neonGradient1)" strokeWidth="2.5" strokeLinecap="round" filter="url(#neonGlow)" />
                {/* Extended Branch Line 2 (Card 02 -> Central Junction) */}
                <path d="M 0 135 C 70 135, 90 135, 90 180" stroke="url(#neonGradient2)" strokeWidth="2.5" strokeLinecap="round" filter="url(#neonGlow)" />
                {/* Extended Branch Line 3 (Card 03 -> Central Junction) */}
                <path d="M 0 225 C 70 225, 90 225, 90 180" stroke="url(#neonGradient3)" strokeWidth="2.5" strokeLinecap="round" filter="url(#neonGlow)" />
                {/* Extended Branch Line 4 (Card 04 -> Central Junction) */}
                <path d="M 0 315 C 70 315, 90 315, 90 180" stroke="url(#neonGradient4)" strokeWidth="2.5" strokeLinecap="round" filter="url(#neonGlow)" />

                {/* Central Merged Junction Dot (Static without ping animation) */}
                <circle cx="90" cy="180" r="4.5" fill="#60a5fa" filter="url(#neonGlow)" />

                {/* Extended Right Output Arrowhead */}
                <path d="M 155 173 L 172 180 L 155 187 Z" fill="#60a5fa" filter="url(#neonGlow)" />
              </svg>
            </div>

            {/* Right Column: ROI Statement & Target Bullets (Shifted Right for Breathing Space) */}
            <motion.div variants={fadeUp} className="space-y-6 lg:pl-10 lg:translate-x-4">
              <p className="font-display text-base sm:text-[17px] font-medium text-slate-200 leading-relaxed">
                Managed IT ROI is not revenue generated.<br />It's:
              </p>

              {/* 5 Bullet Points with Concentric Glowing Target Dots */}
              <div className="space-y-3.5">
                {roiItems.map((item) => (
                  <div key={item} className="flex items-center gap-3.5 text-[#e2e8f0]">
                    {/* Concentric Target Dot (Matching Reference Image) */}
                    <span className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-400/60 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                      <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_#60a5fa]" />
                    </span>
                    <span className="text-sm sm:text-[15px] font-medium tracking-wide text-slate-200">{item}</span>
                  </div>
                ))}
              </div>

              {/* Divider Line */}
              <div className="w-16 h-[2px] bg-blue-500/40 rounded-full my-4" />

              {/* Highlight Quote */}
              <p className="font-display font-bold text-lg sm:text-xl lg:text-[21px] text-[#38bdf8] leading-relaxed drop-shadow-[0_0_20px_rgba(56,189,248,0.35)]">
                It's the growth enabler you can't see,<br />but your business feels every day.
              </p>
            </motion.div>

          </div>
        </div>
      </RevealSection>

      {/* ═══ 9. SERVICE TIERS & WHAT YOU'RE REALLY INVESTING IN ═══ */}
      <RevealSection className="pt-20 lg:pt-28 pb-10 lg:pb-12 bg-white">
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
                    <img src="/images/it-bg1.png" alt="" className="w-full h-full object-cover grayscale" />
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
      <SolutionFAQ faqs={faqs} title="Managed IT Services" className="pt-8 sm:pt-10 lg:pt-12 pb-20 lg:pb-24" />



      <Footer />
    </div>
  );
};

export default ManagedIT;
