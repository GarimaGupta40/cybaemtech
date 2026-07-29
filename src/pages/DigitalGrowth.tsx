import { useEffect, useRef } from "react";
import SEOHead from "@/components/SEOHead";
import { digitalMarketingSeoData } from "@/data/seo/digitalMarketingSeo";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Search,
  Target,
  BarChart3,
  Briefcase,
  Mail,
  Rocket,
  LineChart,
  Brain,
  ChevronDown,
  Monitor,
  Package,
  TrendingUp,
  Settings,
  Factory,
  Home,
  GraduationCap,
  Facebook,
  Youtube,
  Twitter,
  Instagram,
  PenTool,
  Bot,
  Users,
  Sparkles,
  Gauge,
  Megaphone,
  Linkedin,
  Network,
  Activity,
  TrendingDown,
  MousePointerClick,
  ShoppingCart,
  UserX,
  Filter,
  LayoutTemplate,
  BarChart2,
  RefreshCcw,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { MagneticButton } from "@/components/Navbar";
import Footer from "@/components/Footer";
import SolutionFAQ from "@/components/solutions/SolutionFAQ";
import heroImg from "@/assets/digital-growth-hero.jpg";
import systemImg from "@/assets/digital-growth-system.jpg";


/* ── animation helpers ── */
const charReveal = {
  hidden: { opacity: 0, y: 60, rotateX: 40 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring" as const, stiffness: 100, damping: 18 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 80, damping: 20 } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } };
const staggerFast = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

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

/* ── Animated counter ── */
const Counter = ({ end, suffix = "", label }: { end: number; suffix?: string; label: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="text-center">
      <motion.span
        className="block text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
      >
        {end}
        {suffix}
      </motion.span>
      <span className="text-xs sm:text-sm uppercase tracking-wider text-muted-foreground mt-1 block">{label}</span>
    </div>
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

/* ── Service card ── */
const ServiceCard = ({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) => (
  <motion.div
    variants={fadeUp}
    className="glass-panel rounded-xl p-6 shadow-[0_0_20px_rgba(0,0,0,0.05)] hover:shadow-[0_0_30px_rgba(0,0,0,0.1)] transition-shadow duration-300 group"
  >
    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
      <Icon size={20} className="text-primary" />
    </div>
    <h4 className="font-display font-semibold text-base mb-2 text-foreground">{title}</h4>
    <div className="text-sm text-muted-foreground leading-relaxed">{children}</div>
  </motion.div>
);

/* ── Flow step ── */
const FlowStep = ({ label, index, total }: { label: string; index: number; total: number }) => (
  <motion.div variants={fadeUp} className="flex items-center gap-2 sm:gap-3">
    <span className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-display font-bold text-sm sm:text-base whitespace-nowrap">
      {label}
    </span>
    {index < total - 1 && <ArrowRight size={18} className="text-primary shrink-0" />}
  </motion.div>
);

/* ══════════════════════════════════════════════ */
/*                   PAGE                        */
/* ══════════════════════════════════════════════ */

const DigitalGrowth = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const overlayOp = useTransform(scrollYProgress, [0, 0.5], [0.45, 0.9]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  const faqs = [
    {
      question: "What makes CybaemTech different from other digital marketing agencies in India?",
      answer:
        "CybaemTech is not just a digital marketing agency in India — we operate as a Digital Revenue & Growth Engineering partner. Instead of offering isolated services like SEO or Google Ads, we integrate SEO, Performance Marketing, Conversion Rate Optimization (CRO), LinkedIn Marketing, and Marketing Automation into one measurable revenue system. Our focus is ROI, lead quality, and predictable pipeline growth.",
    },
    {
      question: "Do you provide B2B lead generation services?",
      answer:
        "Yes. We specialize in B2B lead generation services in India using advanced SEO (AEO, GEO, SXO), LinkedIn marketing for B2B, performance-driven Google Ads management, and marketing automation workflows. We focus on generating decision-maker leads, not just traffic.",
    },
    {
      question: "How do you reduce cost per lead (CPL)?",
      answer:
        "We reduce cost per lead by targeting high-intent keywords through SEO services, optimizing landing pages using CRO, improving ad targeting in Google Ads and LinkedIn Ads, implementing retargeting strategies, and automating lead nurturing. This ensures better lead quality and higher conversion rates.",
    },
    {
      question: "Do you offer performance marketing services for D2C brands?",
      answer:
        "Yes. As a performance marketing agency in India, we provide full-funnel strategies for D2C brands including Google Ads & Meta Ads management, E-commerce SEO, Conversion rate optimization, Customer retention automation, and Advanced analytics and attribution tracking. Our goal is sustainable scaling with improved ROAS and lower CAC.",
    },
    {
      question: "What industries do you work with?",
      answer:
        "We work with IT & SaaS Companies, Manufacturing & Industrial Businesses, Real Estate Developers, Education & EdTech, Healthcare & Clinics, E-commerce & D2C Brands, and Consultants & Professional Services.",
    },
    {
      question: "Do you provide marketing automation services?",
      answer:
        "Yes. We provide marketing automation services including CRM integration (Zoho, HubSpot, Salesforce), Lead scoring, Email workflows, Abandoned cart automation, Sales funnel automation, and Customer retention campaigns.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "SEO services typically show measurable improvements within 3–6 months. Performance marketing campaigns can generate leads within the first 30–60 days. However, our focus is long-term revenue stability, not short-term spikes.",
    },
    {
      question: "Do you offer a free digital growth audit?",
      answer:
        "Yes. We offer a Free Digital Growth Audit that includes SEO analysis, Paid ad performance review, Conversion gap analysis, LinkedIn authority assessment, and Automation opportunities. You can book it directly from our landing page.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={digitalMarketingSeoData.title}
        description={digitalMarketingSeoData.description}
        canonical={digitalMarketingSeoData.canonical}
        keywords={digitalMarketingSeoData.keywords}
        ogTitle={digitalMarketingSeoData.ogTitle}
        ogDescription={digitalMarketingSeoData.ogDescription}
        twitterTitle={digitalMarketingSeoData.twitterTitle}
        twitterDescription={digitalMarketingSeoData.twitterDescription}
        jsonLd={digitalMarketingSeoData.jsonLd}
      />
      <Navbar />

      {/* ═══ 1. HERO ═══ */}
      <section className="relative min-h-[calc(100vh-80px)] pt-[64px] sm:pt-20 pb-0 bg-white overflow-hidden flex flex-col">
        {/* Top Sub-nav Marquee */}
        <div className="w-full border-b border-slate-100 bg-white/80 backdrop-blur-sm sticky top-[56px] sm:top-[64px] z-40 overflow-hidden">
          <motion.div
            className="flex items-center py-3 gap-8 w-max px-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, ease: "linear", repeat: Infinity }}
          >
            {[
              { icon: Search, label: "Google Ads", color: "text-[#4285F4]" },
              { icon: Briefcase, label: "LinkedIn", color: "text-[#0077b5]" },
              { icon: Instagram, label: "Instagram", color: "text-[#E1306C]" },
              { icon: Facebook, label: "Facebook", color: "text-[#1877F2]" },
              { icon: Youtube, label: "YouTube", color: "text-[#FF0000]" },
              { icon: Twitter, label: "X (Twitter)", color: "text-black" },
              { icon: PenTool, label: "Content Creation", color: "text-slate-600" },
              { icon: BarChart3, label: "Analytics", color: "text-primary" },
              { icon: Bot, label: "Automation", color: "text-primary" },
              { icon: Users, label: "CRM", color: "text-primary" },
              // Duplicate the list to make the infinite loop seamless
              { icon: Search, label: "Google Ads", color: "text-[#4285F4]" },
              { icon: Briefcase, label: "LinkedIn", color: "text-[#0077b5]" },
              { icon: Instagram, label: "Instagram", color: "text-[#E1306C]" },
              { icon: Facebook, label: "Facebook", color: "text-[#1877F2]" },
              { icon: Youtube, label: "YouTube", color: "text-[#FF0000]" },
              { icon: Twitter, label: "X (Twitter)", color: "text-black" },
              { icon: PenTool, label: "Content Creation", color: "text-slate-600" },
              { icon: BarChart3, label: "Analytics", color: "text-primary" },
              { icon: Bot, label: "Automation", color: "text-primary" },
              { icon: Users, label: "CRM", color: "text-primary" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 shrink-0 pr-8">
                <item.icon size={16} className={item.color} />
                <span className="text-[13px] font-medium text-slate-600">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 lg:px-8 pt-16 lg:pt-24 pb-16 lg:pb-24 flex-grow flex items-center relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">

            {/* Left Content */}
            <div className="max-w-2xl">
              <motion.div variants={fadeUp} initial="hidden" animate="visible">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-[0.1em] uppercase mb-8">
                  <span className="w-2 h-2 rounded-full bg-primary"></span> DATA. STRATEGY. GROWTH.
                </span>
              </motion.div>

              <motion.h1 variants={fadeUp} initial="hidden" animate="visible" className="font-display font-bold text-[42px] sm:text-[56px] lg:text-[64px] leading-[1.1] text-slate-900 mb-6 tracking-tight">
                Your Traffic Is Not<br />the Problem.<br />
                <span className="text-primary relative inline-block">
                  Your Revenue<br />System Is.
                  <svg className="absolute w-full h-4 -bottom-1 left-0 text-primary/30" viewBox="0 0 200 20" preserveAspectRatio="none">
                    <path d="M0,10 Q100,20 200,0" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>
              </motion.h1>

              <motion.p variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.1 }} className="text-[17px] text-slate-600 leading-relaxed mb-10 max-w-xl">
                We build intelligent growth systems that attract the right audience, engage them with the right message, and convert them into measurable revenue.
              </motion.p>

              <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row items-center gap-4 mb-12">
                <Link to="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-[12px] hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                  Build My Revenue Engine <ArrowRight size={18} />
                </Link>
                <Link to="/services" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-[12px] border border-primary/20 hover:bg-primary/5 transition-colors">
                  Explore Our Services
                </Link>
              </motion.div>

              {/* Features */}
              <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.3 }} className="flex flex-wrap items-center gap-6 sm:gap-8 text-slate-600">
                <div className="flex items-center gap-2 text-[13px] font-medium">
                  <Target size={16} className="text-primary" /> Strategy First
                </div>
                <div className="flex items-center gap-2 text-[13px] font-medium">
                  <LineChart size={16} className="text-primary" /> ROI Focused
                </div>
                <div className="flex items-center gap-2 text-[13px] font-medium">
                  <Sparkles size={16} className="text-primary" /> AI Powered
                </div>
                <div className="flex items-center gap-2 text-[13px] font-medium">
                  <Gauge size={16} className="text-primary" /> Performance Driven
                </div>
              </motion.div>
            </div>

            {/* Right Content - Abstract Graphic Layout */}
            <div className="relative w-full aspect-square max-w-[600px] mx-auto lg:ml-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-primary/5 to-purple-50/50 rounded-full blur-3xl opacity-60"></div>

              {/* Central Stack Image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] lg:w-[500px] lg:h-[500px] z-0 flex items-center justify-center pointer-events-none">
                <img src="/images/digihero.png" alt="CT Growth Engine" className="w-full h-full object-contain drop-shadow-2xl mix-blend-multiply" />
              </div>

              {/* Orbiting Icons & Dashed Lines */}
              <div className="absolute top-1/2 left-1/2 w-[100%] h-[100%] -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
                {/* Outer Dashed Orbit Path */}
                <motion.div
                  className="absolute inset-0 border-[1.5px] border-dashed border-slate-300/80 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                ></motion.div>

                {/* Orbiting Social Media Icons */}
                {[
                  { icon: Instagram, color: "text-[#E1306C]", startAngle: 30 },
                  { icon: Search, color: "text-[#4285F4]", startAngle: 90 },
                  { icon: Briefcase, color: "text-[#0077b5]", startAngle: 150 },
                  { icon: Facebook, color: "text-[#1877F2]", startAngle: 210 },
                  { icon: Youtube, color: "text-[#FF0000]", startAngle: 270 },
                  { icon: Twitter, color: "text-black", startAngle: 330 },
                ].map((node, i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0"
                    animate={{ rotate: [node.startAngle, node.startAngle + 360] }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  >
                    <motion.div
                      className="absolute -top-6 left-1/2 w-12 h-12 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center -translate-x-1/2 border border-slate-100 pointer-events-auto"
                      animate={{ rotate: [-node.startAngle, -(node.startAngle + 360)] }}
                      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    >
                      <node.icon size={22} className={node.color} />
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Data Cards */}
              <div className="hidden lg:block absolute top-[5%] -right-4 lg:-right-12 w-[240px] bg-white rounded-2xl shadow-[0_20px_40px_rgb(0,0,0,0.08)] p-4 border border-slate-100 z-20">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[12px] font-bold text-slate-700">Revenue Overview</span>
                  <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">This Month v</span>
                </div>
                <div className="text-[11px] text-slate-500 mb-1">Total Revenue</div>
                <div className="text-[22px] font-bold text-slate-900 mb-1">₹ 8.76 Cr</div>
                <div className="text-[11px] text-green-500 font-semibold mb-3">+42.4% <span className="text-slate-400 font-normal">vs last month</span></div>
                <svg className="w-full h-10 text-primary" viewBox="0 0 100 30" preserveAspectRatio="none">
                  <path d="M0,25 C20,25 30,15 50,20 C70,25 80,5 100,10 L100,30 L0,30 Z" fill="currentColor" fillOpacity="0.1" />
                  <motion.path
                    d="M0,25 C20,25 30,15 50,20 C70,25 80,5 100,10"
                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                </svg>
              </div>

              <div className="hidden lg:block absolute top-[40%] -right-8 lg:-right-16 w-[200px] bg-white rounded-2xl shadow-[0_20px_40px_rgb(0,0,0,0.08)] p-4 border border-slate-100 z-20">
                <div className="text-[12px] font-bold text-slate-700 mb-2">Conversions</div>
                <div className="text-[20px] font-bold text-green-500 mb-1">+35%</div>
                <div className="text-[10px] text-slate-400 mb-3">vs last month</div>
                <div className="flex items-end gap-1.5 h-8">
                  {[4, 7, 5, 8, 6, 9, 12, 8].map((h, i) => (
                    <motion.div
                      key={i}
                      className="w-full bg-primary rounded-sm"
                      style={{ opacity: 0.3 + (i / 10) }}
                      animate={{ height: [`${h * 4}%`, `${h * 8}%`, `${h * 4}%`] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
                    ></motion.div>
                  ))}
                </div>
              </div>

              <div className="hidden lg:flex absolute bottom-[20%] -right-4 lg:-right-8 w-[200px] bg-white rounded-2xl shadow-[0_20px_40px_rgb(0,0,0,0.08)] p-4 border border-slate-100 items-center justify-between z-20">
                <div>
                  <div className="text-[12px] font-bold text-slate-700 mb-1">ROAS</div>
                  <div className="text-[22px] font-bold text-slate-900">4.6x</div>
                  <div className="text-[10px] text-slate-400">vs last month</div>
                </div>
                <div className="w-12 h-12 rounded-full border-4 border-primary/20 relative">
                  <motion.div
                    className="absolute inset-0 border-4 border-primary rounded-full border-r-transparent border-t-transparent"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  ></motion.div>
                </div>
              </div>

              <div className="hidden lg:block absolute -bottom-4 left-4 lg:left-12 w-[220px] bg-white rounded-2xl shadow-[0_20px_40px_rgb(0,0,0,0.08)] p-4 border border-slate-100 z-20">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[12px] font-bold text-slate-700">Active Campaigns</span>
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-green-500"
                    animate={{ opacity: [1, 0.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  ></motion.div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[20px] font-bold text-slate-900">18</div>
                    <div className="text-[10px] text-slate-500">Running</div>
                  </div>
                  <div className="flex items-center -space-x-2">
                    {[1, 2, 3].map((item, i) => (
                      <motion.div
                        key={item}
                        className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white relative z-0"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                      ></motion.div>
                    ))}
                    <div className="w-6 h-6 rounded-full bg-primary/10 border-2 border-white flex items-center justify-center text-[8px] font-bold text-primary relative z-10">+12</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="w-full border-t border-slate-100 bg-[#f8fafc]/50 relative z-20">
          <div className="container mx-auto px-4 lg:px-8 py-8 lg:py-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 max-w-5xl mx-auto">
              <div className="flex-1 text-center md:text-left">
                <h2 className="font-display text-2xl sm:text-3xl lg:text-[32px] font-bold text-slate-900 leading-snug">
                  That's not a traffic issue.<br />
                  That's a <span className="text-blue-700">system issue</span>.
                </h2>
              </div>
              <div className="hidden md:block w-px h-16 bg-slate-200"></div>
              <div className="flex-1 flex items-center justify-center md:justify-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/20">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <div className="font-display text-xl sm:text-2xl font-bold text-slate-900">Built for</div>
                  <div className="font-display text-xl sm:text-2xl font-bold text-slate-900">B2B Growth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ═══ 3. WHAT WE DO — Industries ═══ */}
      <RevealSection className="py-12 sm:py-20 lg:py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-5 lg:px-12">
          <motion.div variants={fadeUp} className="mb-12 sm:mb-16">
            <span className="text-sm font-bold tracking-wider uppercase text-primary mb-4 block">
              WHAT WE DO
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-[32px] font-bold text-slate-900 leading-tight">
              IT Services, SaaS, Manufacturing, Consulting,<br className="hidden md:block" /> Real Estate, Education
            </h2>
          </motion.div>

          <motion.div
            variants={staggerFast}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6"
          >
            {[
              { icon: Monitor, title: "IT Services", subtitle: "& Support" },
              { icon: Briefcase, title: "SaaS", subtitle: "Solutions" },
              { icon: Factory, title: "Manufacturing", subtitle: "Technology" },
              { icon: Users, title: "Consulting", subtitle: "Services" },
              { icon: Home, title: "Real Estate", subtitle: "Solutions" },
              { icon: GraduationCap, title: "Education", subtitle: "Technology" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex flex-col items-center text-center p-4 sm:p-6 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 hover:shadow-[0_16px_40px_rgb(0,0,0,0.12)] hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-3 sm:mb-4 bg-primary/5 rounded-xl text-primary">
                  <item.icon strokeWidth={1.5} className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <div className="font-bold text-[14px] sm:text-[15px] text-slate-900 leading-snug">
                  {item.title}<br />{item.subtitle}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </RevealSection>

      {/* ═══ 3b. HOW CYBAEMTECH SOLVES IT ═══ */}
      <RevealSection className="py-12 sm:py-20 lg:py-24 relative overflow-hidden bg-slate-50">
        {/* Digital Marketing Background Image */}
        <div
          className="absolute inset-0 z-0 opacity-25 pointer-events-none"
          style={{
            backgroundImage: `url(${systemImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        />

        {/* Decorative Glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none z-0" />

        <div className="container mx-auto px-4 sm:px-5 lg:px-12 relative z-10">

          {/* Main Card */}
          <div className="bg-white/80 backdrop-blur-xl rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white mb-8 sm:mb-12 transition-all hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)]">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center lg:items-stretch">

              {/* Left Column - Intro */}
              <motion.div variants={fadeUp} className="flex-1 w-full flex flex-col justify-center">
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.15em] uppercase text-primary mb-3 sm:mb-4 block">
                  HOW CYBAEMTECH SOLVES IT
                </span>
                <p className="text-slate-700 text-sm sm:text-base lg:text-[15px] leading-relaxed mb-6 sm:mb-8 font-medium">
                  We act as your Growth Marketing Partner,<br className="hidden lg:block" /> not just another digital marketing agency in India.
                </p>
                <div>
                  <Link to="/process" className="inline-flex items-center justify-center px-6 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 text-sm sm:text-base">
                    Our Process
                  </Link>
                </div>
              </motion.div>

              {/* Center Column - Orbit */}
              <motion.div variants={fadeUp} className="flex-[1.5] w-full flex items-center justify-center relative min-h-[320px] sm:min-h-[400px]">
                {/* Orbit Path */}
                <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px]">
                  <motion.div
                    className="absolute inset-0 border border-dashed border-slate-300 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  >
                    {[
                      { icon: Search, label: "SEO", angle: 0 },
                      { icon: Megaphone, label: "Ads", angle: 51.4 },
                      { icon: TrendingUp, label: "CRO", angle: 102.8 },
                      { icon: Users, label: "CRM", angle: 154.2 },
                      { icon: BarChart3, label: "AI Analytics", angle: 205.7 },
                      { icon: Settings, label: "Automation", angle: 257.1 },
                      { icon: Linkedin, label: "LinkedIn", angle: 308.5 },
                    ].map((node, i) => (
                      <div
                        key={i}
                        className="absolute inset-0"
                        style={{ transform: `rotate(${node.angle}deg)` }}
                      >
                        <motion.div
                          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-1.5"
                          animate={{ rotate: [-node.angle, -node.angle - 360] }}
                          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        >
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-slate-100 shadow-[0_4px_15px_rgb(0,0,0,0.05)] flex items-center justify-center text-primary">
                            <node.icon size={18} strokeWidth={2} />
                          </div>
                          <span className="text-[10px] sm:text-[11px] font-bold text-slate-800 whitespace-nowrap bg-white/60 backdrop-blur-sm px-1.5 rounded-md">
                            {node.label}
                          </span>
                        </motion.div>
                      </div>
                    ))}
                  </motion.div>

                  {/* Center Hub */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-primary flex items-center justify-center shadow-xl shadow-primary/20 z-10">
                    <span className="text-white font-display font-bold text-sm sm:text-base text-center leading-tight">
                      Growth<br />Engine
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - List */}
              <motion.div variants={fadeUp} className="flex-[1.5] w-full flex flex-col justify-center">
                <div className="flex flex-col gap-5 sm:gap-6">
                  {[
                    { title: "Advanced SEO (AEO, GEO, SXO)", desc: "Strategic B2B SEO services targeting decision-stage keywords to improve search rankings and inbound enquiries." },
                    { title: "Performance Marketing & Google Ads", desc: "Intent-based campaigns focused on conversion — not vanity clicks." },
                    { title: "Conversion Rate Optimization", desc: "Landing page optimization, UX improvement, heatmap analysis, CTA testing, funnel refinement." },
                    { title: "LinkedIn Marketing for B2B", desc: "Executive profile optimization + authority content strategy to influence buying decisions." },
                    { title: "Marketing Automation Services", desc: "Lead nurturing workflows, CRM integration (Zoho, HubSpot, Salesforce), email automation, lead scoring." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 sm:gap-4 items-start">
                      <div className="relative mt-1.5 sm:mt-1 shrink-0 w-2 sm:w-2.5 h-2 sm:h-2.5">
                        <motion.div
                          className="absolute inset-0 rounded-full bg-primary"
                          animate={{
                            scale: [1, 3, 1],
                            opacity: [0.6, 0, 0]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.6,
                            ease: "easeOut",
                            times: [0, 0.5, 1]
                          }}
                        />
                        <div className="absolute inset-0 rounded-full bg-primary z-10 shadow-[0_0_8px_rgba(0,0,0,0.3)]"></div>
                      </div>
                      <div>
                        <h4 className="font-bold text-[13px] sm:text-[14px] lg:text-[15px] text-slate-900 mb-1">{item.title}</h4>
                        <p className="text-[12px] sm:text-[13px] text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Results Grid */}
          <motion.div variants={fadeUp} className="mt-8 sm:mt-12">
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.15em] uppercase text-primary mb-4 sm:mb-6 block">
              THE RESULTS WE DELIVER
            </span>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              {[
                { icon: Network, metric: "4x", label: "More Qualified Leads" },
                { icon: Activity, metric: "35%", label: "Higher Conversion" },
                { icon: TrendingDown, metric: "60%", label: "Lower Cost Per Lead" },
                { icon: LineChart, metric: "3x", label: "Return on Ad Spend" },
              ].map((res, i) => (
                <div key={i} className="bg-white rounded-[16px] sm:rounded-[20px] border border-slate-100 p-4 sm:p-5 lg:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0">
                    <res.icon size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="font-bold text-xl sm:text-2xl lg:text-[28px] text-primary leading-none mb-1 sm:mb-1.5">{res.metric}</div>
                    <div className="text-[11px] sm:text-[12px] font-bold text-slate-800 leading-tight">{res.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </RevealSection>

      {/* ═══ 4. B2C SECTION ═══ */}
      <RevealSection className="py-12 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-5 lg:px-12 relative z-10">
          <motion.div variants={fadeUp} className="mb-10 sm:mb-14">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.15em] uppercase text-primary mb-3 sm:mb-4 block">
              FOR B2C BRANDS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold text-slate-900 leading-tight">
              Education, Healthcare,<br className="hidden md:block" /> Local Businesses &<br className="hidden md:block" /> <span className="text-primary">Service Providers</span>
            </h2>
          </motion.div>

          {/* 4 Quotes Grid */}
          <motion.div variants={staggerFast} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {[
              { icon: MousePointerClick, text: '"We get clicks but no sales."' },
              { icon: ShoppingCart, text: '"People add to cart but don\'t buy."' },
              { icon: TrendingUp, text: '"Ad costs are increasing."' },
              { icon: UserX, text: '"Customers don\'t come back."' },
            ].map((q, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-white rounded-xl sm:rounded-2xl border border-slate-100 p-5 sm:p-6 flex items-center gap-4 sm:gap-5 shadow-[0_0_20px_rgba(0,0,0,0.06)] hover:shadow-[0_0_30px_rgba(0,0,0,0.12)] transition-shadow">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <q.icon size={20} strokeWidth={2} />
                </div>
                <p className="text-[13px] sm:text-[14px] font-bold text-slate-800 leading-snug">
                  {q.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Transition Text */}
          <motion.div variants={fadeUp} className="text-center mb-12 sm:mb-16">
            <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-slate-700 font-medium mb-1.5 sm:mb-2">
              You're spending money. But not building long-term growth.
            </p>
            <p className="text-primary font-bold text-[15px] sm:text-[16px] lg:text-[18px]">
              Your business might be a classic victim of Revenue Leakage!
            </p>
          </motion.div>

          {/* Bottom Cards */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">

            {/* Left Card */}
            <motion.div variants={fadeUp} className="bg-[#f4f7fb] rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 lg:p-10 border border-slate-100">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-2">Our Performance Marketing System</h3>
              <p className="text-[12px] sm:text-[13px] text-slate-600 mb-8 sm:mb-10 font-medium">
                As a performance marketing agency in India, we build:
              </p>

              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-6 sm:gap-y-8">
                {[
                  { icon: Filter, title: "Funnel-based\nGoogle & Meta ads" },
                  { icon: Target, title: "Retargeting\ncampaigns" },
                  { icon: LayoutTemplate, title: "Landing page conversion\noptimization" },
                  { icon: Mail, title: "Email lifecycle\nautomation" },
                  { icon: ShoppingCart, title: "Checkout & form\noptimization" },
                  { icon: BarChart2, title: "Data-driven analytics\n& reporting" },
                ].map((item, i) => (
                  <div key={i} className={`flex items-start gap-4 ${i > 1 ? 'sm:border-t sm:border-slate-200/60 sm:pt-6 sm:-mt-2' : ''}`}>
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <item.icon size={18} strokeWidth={2} />
                    </div>
                    <p className="text-[12px] sm:text-[13px] font-bold text-slate-800 leading-snug whitespace-pre-line mt-1">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Card */}
            <motion.div variants={fadeUp} className="bg-[#0a1930] rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 lg:p-10 text-white flex flex-col">
              <div className="text-center mb-8 sm:mb-10">
                <h3 className="font-display text-xl sm:text-2xl font-bold mb-3">We Focus On</h3>
                <div className="w-10 h-0.5 bg-white/20 mx-auto rounded-full"></div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 flex-grow">
                {[
                  { icon: TrendingUp, val: "4x", label: "IMPROVED ROAS" },
                  { icon: Users, val: "35%", label: "HIGHER AOV" },
                  { icon: ShoppingCart, val: "60%", label: "LESS CART ABANDONMENT" },
                  { icon: RefreshCcw, val: "3x", label: "CUSTOMER RETENTION" },
                ].map((res, i) => (
                  <div key={i} className="bg-[#15284b] rounded-2xl p-5 sm:p-6 flex items-center gap-4 sm:gap-5 shadow-lg shadow-black/10">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                      <res.icon size={20} strokeWidth={2} />
                    </div>
                    <div>
                      <div className="font-bold text-2xl sm:text-3xl lg:text-[32px] leading-none mb-1 sm:mb-2">{res.val}</div>
                      <div className="text-[9px] sm:text-[10px] font-bold text-slate-300 tracking-wider">{res.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </RevealSection>

      {/* ═══ 5. INDUSTRIES WE EMPOWER ═══ */}
      <RevealSection id="industries" className="py-8 sm:py-12 lg:py-16 bg-white relative">
        <div className="container mx-auto px-4 sm:px-5 lg:px-12">

          <div className="bg-[#0b1221] rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row gap-8 lg:gap-12 border border-[#1a2333] shadow-2xl">

            {/* Left Content */}
            <motion.div variants={fadeUp} className="flex-1 w-full flex flex-col justify-center">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.15em] uppercase text-slate-400 mb-2 sm:mb-3 block">
                INDUSTRIES WE EMPOWER
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[34px] font-bold text-white leading-[1.15] mb-5 sm:mb-6">
                E-commerce, Consumer Products,<br className="hidden md:block" /> Healthcare, Education & More
              </h2>

              <div className="space-y-3 mb-6 sm:mb-8">
                {[
                  "Data-driven growth strategies",
                  "Process automation & optimization",
                  "Scalable systems & technology",
                  "Measureable results, every time"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check size={18} strokeWidth={3} className="text-primary shrink-0" />
                    <span className="text-sm sm:text-base text-slate-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>


              <div>
  <Link
    to="#"
    className="inline-flex items-center justify-center px-6 py-2.5 bg-transparent border-2 border-[#1e293b] text-white font-bold rounded-lg hover:bg-white/5 transition-all text-sm sm:text-base"
  >
    Explore All Industries
  </Link>
</div>
            </motion.div>

            {/* Right Grid */}
            <motion.div variants={fadeUp} className="flex-[1.2] w-full grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              {[
                { label: "E-commerce", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=400&auto=format&fit=crop" },
                { label: "Healthcare", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=400&auto=format&fit=crop" },
                { label: "Education", img: "/images/education.png" },
                { label: "Manufacturing", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400&auto=format&fit=crop" },
                { label: "Real Estate", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400&auto=format&fit=crop" },
              ].map((ind, i) => (
                <div key={i} className="relative aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 group cursor-pointer">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1221] via-transparent to-transparent z-10" />
                  <img src={ind.img} alt={ind.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 z-20">
                    <span className="text-white text-xs sm:text-sm font-bold tracking-wide">{ind.label}</span>
                  </div>
                </div>
              ))}

              {/* More Industries Card */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('industries')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="relative aspect-[16/10] rounded-xl sm:rounded-2xl border border-white/10 bg-[#151f32] flex flex-col items-center justify-center hover:bg-[#1a263d] transition-colors group cursor-pointer"
              >
                <span className="text-white text-lg sm:text-xl font-bold mb-1 group-hover:scale-110 transition-transform">+ More</span>
                <span className="text-slate-400 text-xs sm:text-sm font-medium">Industries</span>
              </a>
            </motion.div>

          </div>
        </div>
      </RevealSection>


      {/* ═══ 7. WHY CHOOSE CYBAEMTECH ═══ */}
      <RevealSection className="py-20 lg:py-32 bg-muted/50">
        <div className="container mx-auto px-5 sm:px-6 lg:px-12">
          <motion.div variants={fadeUp} className="text-center mb-12">
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-3 block">
              Why Businesses Choose CybaemTech
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
              Most agencies execute tasks. We engineer systems.
            </h2>
          </motion.div>

          {/* Flow diagram */}
          <motion.div
            variants={staggerFast}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16"
          >
            {["Traffic", "Conversion", "Authority", "Automation", "Revenue"].map((s, i) => (
              <FlowStep key={s} label={s} index={i} total={5} />
            ))}
          </motion.div>

          <motion.div variants={staggerFast} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            <ServiceCard icon={Search} title="SEO Services in India">
              AEO, GEO, SXO strategies for sustainable organic growth.
            </ServiceCard>
            <ServiceCard icon={Target} title="Google Ads Management">
              Intent-driven campaigns with precision targeting.
            </ServiceCard>
            <ServiceCard icon={Briefcase} title="LinkedIn Marketing">
              Executive thought leadership and B2B authority building.
            </ServiceCard>
            <ServiceCard icon={BarChart3} title="Conversion Rate Optimization">
              Data-driven UX and funnel optimization.
            </ServiceCard>
            <ServiceCard icon={Mail} title="Marketing Automation">
              End-to-end nurture flows and CRM integration.
            </ServiceCard>
            <ServiceCard icon={Brain} title="AI-Powered Tracking">
              Advanced analytics for revenue attribution.
            </ServiceCard>
          </motion.div>

          <motion.p variants={fadeUp} className="text-center text-lg font-display font-semibold text-muted-foreground">
            Clear strategy. Transparent reporting. <span className="text-primary">ROI-first execution.</span>
          </motion.p>
        </div>
      </RevealSection>



      {/* ═══ 9. CTA BANNER ═══ */}
      <section className="bg-primary py-16 lg:py-24 relative overflow-hidden">
        {/* Digital Marketing Background Image */}
        <div
          className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none z-0" />

        <div className="container mx-auto px-5 sm:px-6 lg:px-12 text-center relative z-10">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Let's Build Your Revenue Engine
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <MagneticButton>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold bg-primary-foreground text-primary rounded-lg hover:opacity-90 transition-opacity"
              >
                Book a Free Strategy Call <ArrowRight size={16} />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold border-2 border-primary-foreground text-primary-foreground rounded-lg hover:bg-primary-foreground/10 transition-colors"
              >
                Get a Free Digital Growth Audit <ArrowRight size={16} />
              </Link>
            </MagneticButton>
          </div>
          <p className="text-sm text-primary-foreground/70">
            CybaemTech – Your Performance-Driven Growth Marketing Partner in India.
          </p>
        </div>
      </section>

      {/* ═══ 10. FAQ ═══ */}
      <SolutionFAQ faqs={faqs} title="Digital Revenue & Growth" />

      {/* ═══ 11. FOOTER ═══ */}
      <Footer />
    </div>
  );
};

export default DigitalGrowth;
