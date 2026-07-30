import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Globe,
  Layers,
  Rocket,
  Shield,
  Cpu,
  Code2,
  BarChart3,
  Users,
  CheckCircle,
  FileText,
  Settings,
  Smartphone,
  Briefcase,
  BrainCircuit,
  ScanText,
  LayoutDashboard,
  Receipt,
  AudioWaveform,
  KeyRound,
  Server,
  Headset,
  ShieldCheck,
  Network,
  Activity,
  Award,
  Monitor,
  DollarSign,
  Clock,
  Search,
  Target,
  ThumbsUp,
  Linkedin,
  BarChart2,
  TrendingUp,
  Wallet,
  Cloud,
  Database,
  Infinity as InfinityIcon,
  ShieldAlert,
  Lock,
  MonitorSmartphone,
  FileCheck,
  ClipboardCheck,
  TrendingDown
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { containerVariants, itemVariants } from "@/lib/animations";
import { Progress } from "@/components/ui/progress";
import { portfolioSeoData } from "@/data/seo/portfolioSeo";
import {
  heroStats,
  caseStudies,
  productEcosystem,
  productRoadmap,
  prototypes,
  internalTools,
  webClients,
  webCategories,
  processSteps,
  type CaseStudy,
  type WebClient,
} from "@/data/portfolioData";

/* ──────────── Tabs ──────────── */
const tabs = ["IT Services", "Software & AI Solutions", "Cloud Solutions", "Digital Marketing", "Cybersecurity"] as const;
type TabKey = (typeof tabs)[number];

/* ──────────── Hero ──────────── */
const PortfolioHero = () => {
  return (
    <section className="relative pt-32 pb-4 md:pt-44 md:pb-12 overflow-hidden bg-white border-b border-slate-100">
      {/* Decorative curved shapes on left */}
      <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 overflow-hidden pointer-events-none z-0 select-none">
        {/* Light blue soft glow */}
        <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-64 h-[400px] bg-sky-100/40 rounded-full blur-2xl" />
        {/* Concentric rings */}
        <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-64 h-[350px] border-[1.5px] border-sky-200/20 rounded-full" />
        <div className="absolute -left-36 top-1/2 -translate-y-1/2 w-96 h-[480px] border-[1.5px] border-sky-200/15 rounded-full" />
        <div className="absolute -left-48 top-1/2 -translate-y-1/2 w-[480px] h-[600px] border-[1.5px] border-sky-100/10 rounded-full" />
      </div>

      {/* Right Column: Image Background (Absolute on Desktop) */}
      <div className="absolute right-4 lg:right-8 top-[48%] -translate-y-1/2 w-full lg:w-[45%] xl:w-[48%] 2xl:w-[50%] z-0 hidden lg:block pointer-events-none select-none mt-8">
        <img
          src="/images/portfolio-header.png"
          alt="Our IT Service Work Showcase"
          className="w-full h-auto object-contain object-right rounded-tl-[100px] rounded-br-[100px] shadow-[0_0_50px_rgba(0,0,0,0.25)]"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Column: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-6 xl:col-span-5 max-w-xl"
          >
            <motion.span
              variants={itemVariants}
              className="text-xs sm:text-sm font-bold tracking-[0.15em] uppercase text-sky-500 mb-3 block"
            >
              PORTFOLIO
            </motion.span>
            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 leading-[1.15] mb-6"
            >
              Our IT Service <br />
              Work <span className="text-primary">Speaks</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg"
            >
              From custom ERPs to AI-powered platforms — <br className="hidden sm:inline" />
              real results for real enterprises across 5 countries.
            </motion.p>

            {/* Mobile Image (Visible only on mobile/tablet) */}
            <div className="relative mt-12 lg:hidden w-full bg-transparent overflow-visible">
              <img
                src="/images/portfolio-header.png"
                alt="Our IT Service Work Showcase"
                className="w-full h-auto object-cover rounded-tl-[60px] rounded-br-[60px] shadow-[0_0_30px_rgba(0,0,0,0.15)]"
              />
            </div>
          </motion.div>

          {/* Right Column Spacer (Hidden on mobile, takes space on desktop) */}
          <div className="lg:col-span-6 xl:col-span-7 hidden lg:block" />
        </div>

        {/* Stats bar */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 pt-8 border-t border-slate-100 relative z-10"
        >
          {heroStats.map((s) => (
            <motion.div
              key={s.label}
              variants={itemVariants}
              className="bg-white border border-slate-100 rounded-xl p-5 text-center shadow-xl hover:shadow-md hover:border-primary/20 transition-all duration-300"
            >
              <span className="block font-display text-2xl sm:text-3xl font-bold text-primary">{s.value}</span>
              <span className="text-xs text-slate-500 mt-1 block font-medium">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ──────────── Case Study Card ──────────── */
const cardImages = [
  "/case-studies/ent_itsm_dashboard.png",
  "/case-studies/ent_dms_secure.png",
  "/case-studies/ent_erp_tailored.png",
  "/case-studies/ent_crm_ace.png",
];

const CaseStudyCard = ({ study, index }: { study: CaseStudy; index: number }) => {
  const imageUrl = cardImages[index % cardImages.length];
  const bgColors = ["bg-blue-50/60", "bg-emerald-50/60", "bg-purple-50/60", "bg-orange-50/60"];
  const borderColors = ["border-blue-200/60", "border-emerald-200/60", "border-purple-200/60", "border-orange-200/60"];
  const badgeColors = ["bg-blue-100 text-blue-700", "bg-emerald-100 text-emerald-700", "bg-purple-100 text-purple-700", "bg-orange-100 text-orange-700"];

  const bgColor = bgColors[index % bgColors.length];
  const borderColor = borderColors[index % borderColors.length];
  const badgeColor = badgeColors[index % badgeColors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`${bgColor} border ${borderColor} shadow-[0_8px_24px_rgba(15,23,42,0.05)] rounded-[20px] flex flex-col group hover:shadow-[0_12px_32px_rgba(15,23,42,0.08)] transition-all duration-500 overflow-hidden cursor-pointer`}
    >
      {/* Top Image */}
      <div className="w-full h-[200px] sm:h-[230px] overflow-hidden bg-slate-100 relative shrink-0">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
        <img
          src={imageUrl}
          alt={study.product}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>

      {/* Bottom Content */}
      <div className="w-full flex flex-col p-5 sm:p-7 flex-1">
        <div className="mb-3 flex flex-wrap gap-2 items-center">
          <span className={`px-2.5 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider rounded-full ${badgeColor}`}>
            {study.sector}
          </span>
        </div>

        {study.client.trim() ? (
          <h3 className="font-display text-[12px] sm:text-[13px] font-bold text-slate-500 mb-1 tracking-wide">{study.client}</h3>
        ) : null}

        <h4 className="text-[24px] sm:text-[28px] font-black text-slate-900 mb-2 tracking-tight leading-tight group-hover:text-primary transition-colors">{study.product}</h4>
        <p className="text-[12px] sm:text-[13px] text-slate-600 leading-relaxed mb-4 font-medium line-clamp-3">{study.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {study.tags.map((t) => (
            <span key={t} className="px-2.5 py-1 text-[9px] sm:text-[10px] font-semibold rounded-md bg-white border border-slate-200/60 text-slate-600 shadow-sm transition-colors group-hover:bg-slate-50">
              {t}
            </span>
          ))}
        </div>

        {/* Minimal KPIs */}
        <div className="grid grid-cols-3 gap-3 pt-3.5 border-t border-slate-200/60 mt-auto">
          {study.metrics.map((m) => (
            <div key={m.metric} className="flex flex-col">
              <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 mb-0.5 leading-tight uppercase tracking-wider">{m.metric}</span>
              <span className="text-[14px] sm:text-[16px] font-black text-slate-900 tracking-tight">{m.result}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

/* ──────────── IT Services Tab ──────────── */
const itServices = [
  {
    title: "IT Infrastructure & Support",
    description: "High-performance infrastructure that grows with your business.",
    icon: Server,
    bgImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    slug: "it-infrastructure-services",
  },
  {
    title: "Managed IT & Security",
    description: "24×7 support and maintenance for uninterrupted operations.",
    icon: Headset,
    bgImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
    slug: "managed-it",
  },
  {
    title: "Threat Monitoring",
    description: "Real-time monitoring and proactive threat detection.",
    icon: Activity,
    bgImage: "https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&q=80&w=800",
    slug: "managed-it",
  },
  {
    title: "IT Augmentation",
    description: "Skilled professionals to extend your in-house capabilities.",
    icon: Users,
    bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    slug: "it-staff-augmentation",
  }
];

const itFeatures = [
  {
    title: "Certified & Experienced Engineers",
    description: "Industry-certified experts with years of experience.",
    icon: Award,
  },
  {
    title: "Proactive Monitoring",
    description: "24×7 monitoring to prevent issues before they impact your business.",
    icon: Monitor,
  },
  {
    title: "Quick Response & Resolution",
    description: "Fast response time and efficient issue resolution.",
    icon: Clock,
  }
];

const ITServicesTab = () => {
  const navigate = useNavigate();

  const handleServiceClick = (slug: string) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/solutions/${slug}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col lg:flex-row gap-6 mb-12"
    >
      {/* Left Side: Service Cards (70%) */}
      <div className="w-full lg:w-[68%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-5 gap-y-4">
        {itServices.map((service, i) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              role="button"
              tabIndex={0}
              aria-label={`View details about ${service.title}`}
              onClick={() => handleServiceClick(service.slug)}
              onKeyDown={(e) => e.key === "Enter" && handleServiceClick(service.slug)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative h-[270px] rounded-[24px] overflow-hidden bg-[#0a1128] cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-400"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={service.bgImage}
                  alt={service.title}
                  className="w-full h-full object-cover opacity-20 group-hover:scale-110 group-hover:opacity-30 transition-all duration-700 ease-out mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040b1e] via-[#040b1e]/60 to-transparent" />
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-600/20 transition-colors duration-500" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full p-6">
                <div className="mb-auto">
                  <div className="w-12 h-12 rounded-[14px] border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-slate-200 mb-6 group-hover:border-white/30 group-hover:text-white transition-colors duration-300">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-[20px] font-bold text-white leading-tight mb-3">
                    {service.title}
                  </h3>
                  <div className="w-8 h-0.5 bg-blue-600 mb-4 transition-all duration-300 group-hover:w-12 group-hover:bg-blue-500" />
                  <p className="text-[13px] text-slate-300/90 font-medium leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* Arrow Button */}
                <div className="mt-auto self-end">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#040b1e] group-hover:border-white transition-all duration-300">
                    <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Right Side: Why Choose Us (30%) */}
      <div className="w-full lg:w-[32%] bg-slate-50 border border-slate-200/70 rounded-[24px] p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.03)] flex flex-col relative overflow-hidden">
        {/* Subtle decorative background element */}
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col h-full">
          <h3 className="font-display text-[26px] font-bold text-slate-900 leading-[1.15] mb-2 tracking-tight">
            Why Choose Our<br />IT Services?
          </h3>
          <div className="w-12 h-1 bg-primary mb-8 rounded-full" />

          <div className="flex flex-col gap-10 mb-10 flex-1 justify-center">
            {itFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="w-10 h-10 rounded-full bg-blue-100/60 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon size={18} strokeWidth={2} />
                  </div>
                  <div className="pt-0.5">
                    <h4 className="text-[14px] font-bold text-slate-900 mb-0.5 leading-tight group-hover:text-primary transition-colors">{feature.title}</h4>
                    <p className="text-[12px] text-slate-500 font-medium leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <Link
            to="/contact"
            className="w-full flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity group"
          >
            <span>Talk to Our Experts</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

/* ──────────── Software & AI Solutions Tab ──────────── */
const softwareFeatures = [
  {
    title: "Certified & Experienced Engineers",
    description: "Industry-certified experts delivering reliable software solutions.",
    icon: Award,
  },
  {
    title: "Agile & Innovative Approach",
    description: "Modern technologies and agile development for faster delivery.",
    icon: Rocket,
  }
];

const SoftwareAISolutionsTab = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(path);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col xl:flex-row gap-6 mb-12 items-stretch xl:h-[620px]"
    >
      {/* Column 1: Featured Enterprise Software (55%) */}
      <div className="w-full xl:w-[55%] h-full flex flex-col">
        <motion.div
          role="button"
          tabIndex={0}
          aria-label="View Enterprise Software details"
          onClick={() => handleNavigation("/solutions/enterprise-software")}
          onKeyDown={(e) => e.key === "Enter" && handleNavigation("/solutions/enterprise-software")}
          className="group relative flex-1 w-full rounded-[24px] overflow-hidden bg-[#040b1e] shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col p-8 sm:p-10 justify-end"
        >
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0 overflow-hidden bg-[#040b1e]">
            {/* Image positioned on the right */}
            <div className="absolute top-0 right-0 w-[70%] sm:w-[60%] h-full">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
                alt="Enterprise Dashboard"
                className="w-full h-full object-cover opacity-90 brightness-[1.15] contrast-[1.10] saturate-[1.20] origin-right scale-100 group-hover:scale-105 group-hover:brightness-[1.25] transition-all duration-500 ease-out"
              />
            </div>
            
            {/* Blend image into the dark background - FIXED FULL-CARD GRADIENTS */}
            {/* This ensures the gradient never moves, completely hiding the image's left edge */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#040b1e] via-[#040b1e]/95 to-transparent sm:via-[#040b1e]/90" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040b1e] via-transparent to-[#040b1e]/40 pointer-events-none" />
            
            {/* Soft blue glow on the right, intensifies on hover */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-2/3 bg-blue-600/10 group-hover:bg-blue-500/20 blur-[120px] pointer-events-none mix-blend-screen transition-colors duration-500" />
            
            {/* Subtle noise/texture overlay for premium SaaS feel */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
          </div>

          <div className="relative z-10 w-full h-full flex flex-col justify-between">
            <div className="w-12 h-12 rounded-[14px] border border-white/20 bg-white/10 backdrop-blur-xl flex items-center justify-center text-blue-100 group-hover:border-white/40 group-hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.2)]">
              <Code2 size={24} strokeWidth={1.5} />
            </div>
            
            <div className="mt-auto">
              <h3 className="font-display text-[36px] sm:text-[46px] font-bold text-white leading-[1.1] mb-5 tracking-tight group-hover:text-blue-50 transition-colors">
                Enterprise <br className="hidden sm:block" />
                Software Solutions
              </h3>
              <div className="w-12 h-1 bg-blue-500 mb-6 rounded-full group-hover:w-20 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all duration-300" />
              <p className="text-[16px] text-slate-300/90 font-medium leading-relaxed max-w-lg mb-8">
                Custom enterprise software built to streamline operations, drive efficiency, and scale with your business seamlessly.
              </p>
              
              {/* Tech Badges */}
              <div className="flex flex-wrap gap-3 mb-10">
                <span className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-[13px] font-medium backdrop-blur-md hover:bg-white/10 transition-colors">
                  <Globe size={15} className="text-cyan-400" /> React
                </span>
                <span className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-[13px] font-medium backdrop-blur-md hover:bg-white/10 transition-colors">
                  <Server size={15} className="text-green-400" /> Node.js
                </span>
                <span className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-[13px] font-medium backdrop-blur-md hover:bg-white/10 transition-colors">
                  <Layers size={15} className="text-blue-400" /> Cloud
                </span>
                <span className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-[13px] font-medium backdrop-blur-md hover:bg-white/10 transition-colors">
                  <BrainCircuit size={15} className="text-purple-400" /> AI/ML
                </span>
              </div>

              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-bold rounded-[12px] hover:bg-slate-100 transition-colors group/btn">
                Learn More <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Column 2: Stacked Medium Cards (25%) */}
      <div className="w-full xl:w-[25%] h-full flex flex-col gap-6">
        <motion.div
          role="button"
          tabIndex={0}
          aria-label="View Website Designing details"
          onClick={() => handleNavigation("/solutions/web-systems")}
          onKeyDown={(e) => e.key === "Enter" && handleNavigation("/solutions/web-systems")}
          className="group relative flex-1 w-full rounded-[24px] bg-white border border-slate-200/70 p-7 flex flex-col justify-between cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_15px_35px_rgb(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
        >
          {/* Custom Vercel/Stripe style 2.5D UI Illustration */}
          <div className="absolute right-[-10px] bottom-[-20px] w-64 h-64 pointer-events-none transition-transform duration-700 group-hover:scale-105 group-hover:-translate-y-2">
            {/* Glowing background */}
            <div className="absolute inset-0 bg-blue-400/20 blur-[50px] rounded-full" />
            
            {/* Desktop Monitor */}
            <div className="absolute right-4 bottom-12 w-48 h-32 bg-white rounded-t-xl border border-slate-200/80 shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col">
              <div className="w-full h-3 bg-slate-100 border-b border-slate-200 flex items-center px-2 gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 p-2 flex flex-col gap-2 relative overflow-hidden">
                <div className="w-full h-10 bg-blue-50 rounded-lg" />
                <div className="flex gap-2">
                  <div className="flex-1 h-12 bg-slate-50 rounded-md" />
                  <div className="flex-1 h-12 bg-slate-50 rounded-md" />
                </div>
                {/* Floating Code Snippet */}
                <div className="absolute -right-2 top-6 w-24 h-16 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-lg shadow-2xl p-2 transform rotate-[-5deg] group-hover:rotate-0 transition-transform duration-500">
                  <div className="w-10 h-1 bg-blue-400 rounded-full mb-1.5" />
                  <div className="w-16 h-1 bg-slate-600 rounded-full mb-1.5" />
                  <div className="w-12 h-1 bg-purple-400 rounded-full" />
                </div>
              </div>
            </div>
            {/* Monitor Stand */}
            <div className="absolute right-24 bottom-9 w-8 h-3 bg-slate-200" />
            <div className="absolute right-16 bottom-8 w-24 h-1 bg-slate-300 rounded-full" />

            {/* Mobile Phone */}
            <div className="absolute right-36 bottom-6 w-16 h-32 bg-slate-900 rounded-[14px] border-2 border-slate-700 shadow-[0_15px_30px_rgba(0,0,0,0.15)] overflow-hidden transform rotate-12 group-hover:rotate-6 transition-transform duration-500">
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-slate-800 rounded-full" />
              <div className="w-full h-full mt-4 flex flex-col gap-1.5 px-1.5">
                <div className="w-full h-8 bg-blue-500/20 rounded-md" />
                <div className="w-full h-4 bg-slate-800 rounded-sm" />
                <div className="w-full h-4 bg-slate-800 rounded-sm" />
                <div className="w-2/3 h-4 bg-slate-800 rounded-sm" />
              </div>
            </div>
            
            {/* Floating Glass Element */}
            <div className="absolute right-8 bottom-32 w-12 h-12 rounded-xl bg-white/40 backdrop-blur-md border border-white/60 shadow-xl flex items-center justify-center transform rotate-12 group-hover:translate-y-[-10px] transition-transform duration-700">
              <Globe size={20} className="text-blue-500" />
            </div>
          </div>
          <div className="relative z-10 bg-white/70 backdrop-blur-sm p-4 -m-4 rounded-xl mb-4 self-start">
            <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <Globe size={22} strokeWidth={2} />
            </div>
            <h4 className="font-display text-[22px] font-bold text-slate-900 mb-2 leading-tight">Website <br/>Development</h4>
            <p className="text-[13px] text-slate-600 font-medium leading-relaxed max-w-[160px]">
              Modern, responsive, and SEO-friendly websites.
            </p>
          </div>
          <div className="relative z-10 flex items-center gap-2 text-[14px] font-bold text-primary group-hover:text-blue-700 transition-colors mt-auto">
            Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.div>

        <motion.div
          role="button"
          tabIndex={0}
          aria-label="View AI Solutions details"
          onClick={() => handleNavigation("/solutions/enterprise-software")}
          onKeyDown={(e) => e.key === "Enter" && handleNavigation("/solutions/enterprise-software")}
          className="group relative flex-1 w-full rounded-[24px] bg-[#f8fafc] border border-slate-200/70 p-7 flex flex-col justify-between cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_15px_35px_rgb(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
        >
          {/* Custom Holographic AI Illustration */}
          <div className="absolute right-[-10px] bottom-[-20px] w-64 h-64 pointer-events-none transition-transform duration-700 group-hover:scale-105 group-hover:-translate-y-2">
            {/* Glowing orb background */}
            <div className="absolute inset-0 bg-purple-400/20 blur-[60px] rounded-full" />
            
            {/* Holographic Rings */}
            <div className="absolute right-12 bottom-12 w-40 h-40 border-[1px] border-purple-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute right-16 bottom-16 w-32 h-32 border-[1px] border-blue-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute right-24 bottom-24 w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full blur-[10px] opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
            
            {/* Neural Network Nodes (SVG) */}
            <svg className="absolute right-8 bottom-8 w-48 h-48 text-purple-400/40" viewBox="0 0 100 100">
              <line x1="20" y1="50" x2="50" y2="20" stroke="currentColor" strokeWidth="0.5" />
              <line x1="50" y1="20" x2="80" y2="50" stroke="currentColor" strokeWidth="0.5" />
              <line x1="80" y1="50" x2="50" y2="80" stroke="currentColor" strokeWidth="0.5" />
              <line x1="50" y1="80" x2="20" y2="50" stroke="currentColor" strokeWidth="0.5" />
              <line x1="20" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="0.2" />
              <circle cx="20" cy="50" r="2" fill="currentColor" />
              <circle cx="50" cy="20" r="3" fill="currentColor" />
              <circle cx="80" cy="50" r="2.5" fill="currentColor" />
              <circle cx="50" cy="80" r="2" fill="currentColor" />
            </svg>

            {/* AI Assistant Chat Bubble */}
            <div className="absolute right-32 bottom-28 w-24 h-16 bg-white/80 backdrop-blur-md rounded-2xl rounded-br-none border border-white shadow-[0_10px_30px_rgba(168,85,247,0.15)] flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-purple-500 animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="w-2 h-2 rounded-full bg-purple-500 animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="w-2 h-2 rounded-full bg-purple-500 animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>

            {/* Floating Glass Component */}
            <div className="absolute right-6 bottom-16 w-14 h-14 bg-gradient-to-br from-white/60 to-white/10 backdrop-blur-xl border border-white/50 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] flex items-center justify-center transform rotate-12 group-hover:-translate-y-4 transition-transform duration-700">
              <BrainCircuit size={24} className="text-purple-600" />
            </div>
          </div>
          <div className="relative z-10 bg-white/70 backdrop-blur-sm p-4 -m-4 rounded-xl mb-4 self-start">
            <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
              <BrainCircuit size={22} strokeWidth={2} />
            </div>
            <h4 className="font-display text-[22px] font-bold text-slate-900 mb-2 leading-tight">AI Solutions</h4>
            <p className="text-[13px] text-slate-600 font-medium leading-relaxed max-w-[160px]">
              AI-powered solutions, chatbots, and automation.
            </p>
          </div>
          <div className="relative z-10 flex items-center gap-2 text-[14px] font-bold text-purple-600 group-hover:text-purple-700 transition-colors mt-auto">
            Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.div>
      </div>

      {/* Column 3: Why Choose Panel (20%) */}
      <div className="w-full xl:w-[20%] h-full bg-white border border-slate-200/70 rounded-[24px] p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)] flex flex-col relative overflow-hidden group hover:shadow-[0_15px_35px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1">
        <div className="absolute -right-20 -bottom-20 w-56 h-56 bg-blue-50/80 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-100/80 transition-colors duration-500" />
        
        <div className="relative z-10 flex flex-col h-full w-full">
          <h3 className="font-display text-[26px] font-bold text-slate-900 leading-[1.15] mb-5 tracking-tight group-hover:text-primary transition-colors">
            Why Choose Our Software & AI Solutions?
          </h3>
          <div className="w-12 h-1.5 bg-primary mb-10 rounded-full group-hover:w-20 transition-all duration-300" />
          
          <div className="flex flex-col gap-7 flex-1 justify-center">
            {softwareFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="flex gap-4 items-start group/feature">
                  <div className="w-12 h-12 rounded-full bg-blue-50/80 text-primary flex items-center justify-center shrink-0 group-hover/feature:bg-primary group-hover/feature:text-white transition-all duration-300 group-hover/feature:shadow-md">
                    <Icon size={22} strokeWidth={2} />
                  </div>
                  <div className="pt-0.5">
                    <h4 className="text-[15px] font-bold text-slate-900 mb-1.5 leading-tight group-hover/feature:text-primary transition-colors">{feature.title}</h4>
                    <p className="text-[13px] text-slate-500 font-medium leading-relaxed pr-2">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-auto pt-6 w-full flex justify-center border-t border-slate-100">
            <Link
              to="/contact"
              className="w-[95%] flex items-center justify-center gap-2 px-5 py-3 text-[14px] font-medium bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity group/btn"
            >
              <span>Talk to Our Experts</span>
              <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ──────────── Enterprise Software Tab ──────────── */
const ecosystemIcons: Record<string, React.ElementType> = {
  "01": Users,
  "02": CheckCircle,
  "03": FileText,
  "04": Settings,
  "05": Smartphone,
  "06": Briefcase
};

const EnterpriseSoftwareTab = () => {
  return (
    <div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="flex flex-nowrap overflow-x-auto lg:flex-wrap lg:grid lg:grid-cols-6 gap-2 sm:gap-3 mb-10 pb-4 sm:pb-0"
      >
        {productEcosystem.map((p) => {
          const Icon = ecosystemIcons[p.id] || Layers;
          return (
            <motion.div
              key={p.id}
              variants={itemVariants}
              className="bg-white border border-slate-100 rounded-[16px] p-4 flex flex-col items-center text-center flex-1 min-w-[130px] hover:border-primary/20 hover:shadow-lg transition-all duration-300 cursor-pointer shadow-[0_2px_10px_rgb(0,0,0,0.02)] group"
            >
              <div className="w-10 h-10 mb-3 rounded-xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm border border-slate-100">
                <Icon size={18} strokeWidth={2.5} />
              </div>
              <span className="text-[10px] font-bold text-slate-400 mb-0.5">{p.id}</span>
              <span className="text-xs sm:text-sm font-bold text-slate-800 leading-tight mb-1">{p.name}</span>
              <span className="text-[9px] sm:text-[10px] text-slate-500 leading-tight">{p.desc}</span>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Case studies */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 max-w-[1140px] mx-auto">
        {caseStudies.map((s, i) => (
          <CaseStudyCard key={`case-${i}`} study={s} index={i} />
        ))}
      </div>
    </div>
  );
};

/* ──────────── Web & Digital Tab ──────────── */
const WebDigitalTab = ({ initialCategory }: { initialCategory?: string }) => {
  const [filter, setFilter] = useState(initialCategory && webCategories.includes(initialCategory) ? initialCategory : "All");
  const filtered = filter === "All" ? webClients : webClients.filter((c) => c.category === filter);

  return (
    <div>
      {/* Category filters */}
      <div className="flex flex-wrap gap-3 sm:gap-4 mb-10">
        {webCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2.5 text-[13px] sm:text-sm rounded-full font-bold transition-all duration-300 border ${filter === cat
                ? "bg-primary text-white border-primary shadow-lg scale-105"
                : "bg-slate-50 text-slate-600 border-slate-200/60 hover:text-slate-900 hover:bg-slate-100 hover:border-slate-300 hover:shadow-sm"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div
        key={filter}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8"
      >
        {filtered.map((c, i) => (
          <WebClientCard key={`${c.title}-${c.sector}`} client={c} index={i} />
        ))}
      </motion.div>
    </div>
  );
};

const webCardImages: Record<string, string> = {
  "Indo-USA Industrial Tech Firm": "/case-studies/img_indo_usa.png",
  "EV Manufacturer": "/case-studies/img_ev_mfg.png",
  "Sustainable Materials Company": "/case-studies/img_sus_mat.png",
  "Cold Engineering Firm": "/case-studies/img_cold_eng.png",
  "Glass Manufacturing Company": "/case-studies/img_glass_mfg.png",
  "Green Materials Enterprise": "/case-studies/img_industrial.png",
  "Sports & Athletics Brand": "/case-studies/img_engineering.png",
  "Heritage Luxury Jewelry House": "/case-studies/img_lifestyle.png",
  "Premium Beauty & Skincare Brand": "/case-studies/itsm_manufacturing.png",
  "Specialty Medicine & Wellness Co.": "/case-studies/dms_chemicals.png",
  "Corporate Technology Firm": "/case-studies/img_corporate.png",
  "Cybaem Tech": "/case-studies/custom_erp_pharma.png",
  "Import-Export Trading Firm": "/case-studies/pm_crm_saas.png",
};

const categoryThemes: Record<string, { border: string, glow: string }> = {
  "Engineering & Manufacturing": { border: "border-blue-200/60", glow: "bg-blue-400/20" },
  "Specialized Industrial": { border: "border-emerald-200/60", glow: "bg-emerald-400/20" },
  "Lifestyle & Luxury": { border: "border-purple-200/60", glow: "bg-purple-400/20" },
  "Corporate & Trade": { border: "border-orange-200/60", glow: "bg-orange-400/20" },
};

const WebClientCard = ({ client, index }: { client: WebClient; index: number }) => {
  const imageUrl = webCardImages[client.title] || "/case-studies/img_engineering.png";
  const theme = categoryThemes[client.category] || categoryThemes["Engineering & Manufacturing"];

  return (
    <motion.div
      variants={itemVariants}
      className={`bg-white border ${theme.border} shadow-[0_8px_24px_rgba(15,23,42,0.04)] rounded-2xl p-3.5 sm:p-4 hover:border-slate-300/50 transition-all duration-500 hover:shadow-[0_12px_32px_rgba(15,23,42,0.08)] hover:-translate-y-1 flex flex-col sm:flex-row gap-4 sm:gap-5 group cursor-pointer relative overflow-hidden`}
    >
      {/* Subtle Colored Glow Background on Hover */}
      <div className={`absolute top-0 right-0 w-32 h-32 ${theme.glow} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

      {/* External Link Icon */}
      <div className="absolute top-4 right-4 text-slate-300 group-hover:text-slate-600 transition-all duration-300 z-10 group-hover:-translate-y-1 group-hover:translate-x-1">
        <ArrowUpRight size={18} strokeWidth={2.5} />
      </div>

      {/* Image Side - 45% width, increased prominence */}
      <div className="w-full sm:w-[42%] md:w-[45%] shrink-0 sm:h-[180px] h-[160px] rounded-[14px] overflow-hidden bg-slate-50 border border-slate-100/50 flex items-center justify-center relative z-10 shadow-sm">
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
        <img src={imageUrl} alt={client.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out relative z-10" />
      </div>

      {/* Content Side */}
      <div className="flex flex-col flex-1 py-1 pr-3 relative z-10">
        <h4 className="font-display text-[16px] sm:text-[17px] font-black text-slate-900 mb-1.5 leading-tight group-hover:text-slate-800 transition-colors pr-4">
          {client.title}
        </h4>
        <span className="text-[11px] font-bold text-slate-500 block mb-3 tracking-wide">{client.region}</span>

        <div className="flex flex-wrap items-center gap-1.5 mb-3">
          <span className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-slate-50 text-slate-600 border border-slate-200/60 shadow-sm whitespace-nowrap transition-colors duration-300 group-hover:bg-slate-100">
            {client.sector}
          </span>
          <span className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-slate-50 text-slate-600 border border-slate-200/60 shadow-sm whitespace-nowrap">
            {client.category === "Engineering & Manufacturing" ? "E & M" : client.category}
          </span>
        </div>

        <p className="text-[11px] sm:text-[12px] text-slate-500 leading-relaxed mt-auto line-clamp-3">
          {client.outcome}
        </p>
      </div>
    </motion.div>
  );
};

/* ──────────── Cloud Solutions Tab ──────────── */
const CloudSolutionsTab = () => {
  const navigate = useNavigate();
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const handleNavigation = (path: string) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(path);
  };

  const cloudServices = [
    { id: "migration", title: "Cloud Migration", desc: "Migrate seamlessly. Modernize efficiently.", icon: Cloud, x: 25, y: 15 },
    { id: "hosting", title: "Cloud Hosting", desc: "High performance. Always available.", icon: Server, x: 75, y: 25 },
    { id: "security", title: "Cloud Security", desc: "Protect your data. Stay compliant.", icon: Shield, x: 15, y: 45 },
    { id: "monitoring", title: "Cloud Monitoring", desc: "Real-time insights. Proactive alerts.", icon: Activity, x: 85, y: 60 },
    { id: "backup", title: "Cloud Backup & Disaster Recovery", desc: "Be prepared. Recover fast.", icon: Database, x: 20, y: 75 },
    { id: "devops", title: "DevOps & Deployment", desc: "Automate. Deploy. Deliver faster.", icon: InfinityIcon, x: 65, y: 85 },
  ];

  const features = [
    "Secure by Design", "Enterprise-grade Security",
    "Auto Scaling & Elastic", "Disaster Recovery Ready",
    "High Availability (99.99% Uptime)", "Cost Optimized Cloud Solutions"
  ];

  return (
    <div className="bg-white border border-slate-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[24px] p-6 sm:p-10 lg:p-12 mb-10 overflow-hidden relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left - Cloud Ecosystem (55%) */}
        <div className="lg:col-span-7 relative w-full aspect-[4/3] sm:aspect-square lg:aspect-auto lg:h-[600px] flex items-center justify-center">
          
          {/* Background Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] rounded-full border border-slate-200 border-dashed animate-[spin_60s_linear_infinite]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full border border-slate-100 border-dashed animate-[spin_90s_linear_infinite_reverse]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full border border-slate-50 border-dashed" />
          
          {/* SVG Connector Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {cloudServices.map((s, i) => {
              const isHovered = hoveredService === s.id;
              return (
                <g key={i}>
                  <line 
                    x1="50%" 
                    y1="50%" 
                    x2={`${s.x}%`} 
                    y2={`${s.y}%`} 
                    stroke={isHovered ? "#3b82f6" : "url(#cloudGradient)"} 
                    strokeWidth={isHovered ? "2.5" : "1.5"} 
                    strokeDasharray={isHovered ? "0" : "4 4"} 
                    className={`transition-all duration-500 ${isHovered ? "opacity-100 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" : "opacity-30"}`}
                  />
                  <circle cx={`${s.x}%`} cy={`${s.y}%`} r={isHovered ? "5" : "3"} fill="#3b82f6" className={`transition-all duration-300 ${isHovered ? "opacity-100 shadow-[0_0_10px_rgba(59,130,246,0.8)]" : "opacity-50"}`} />
                </g>
              );
            })}
            <defs>
              <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#60a5fa" />
              </linearGradient>
            </defs>
          </svg>

          {/* Center Cloud Hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping opacity-60" style={{ animationDuration: '4s' }} />
            <div className="absolute -inset-10 bg-blue-400/20 rounded-full blur-3xl" />
            
            <div className="relative w-[180px] h-[130px] sm:w-[220px] sm:h-[160px] bg-gradient-to-b from-blue-500 to-blue-700 rounded-[60px] shadow-[0_15px_40px_rgba(37,99,235,0.4)] flex flex-col items-center justify-center text-center p-4 border border-blue-400/30">
              {/* Cloud shape bumps */}
              <div className="absolute -top-6 sm:-top-8 left-1/2 -translate-x-1/2 w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] bg-gradient-to-b from-blue-400 to-blue-600 rounded-full -z-10" />
              <div className="absolute top-2 -left-4 sm:-left-6 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] bg-gradient-to-b from-blue-400 to-blue-600 rounded-full -z-10" />
              <div className="absolute top-2 -right-4 sm:-right-6 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] bg-gradient-to-b from-blue-400 to-blue-600 rounded-full -z-10" />
              
              <Server size={32} className="text-white mb-2" strokeWidth={1.5} />
              <h3 className="text-white font-bold text-[15px] sm:text-[17px] leading-tight mb-0.5">Cloud Infrastructure</h3>
              <p className="text-blue-100 text-[10px] sm:text-[11px] font-medium tracking-wide">
                Secure. Scalable. Reliable.
              </p>
            </div>
          </div>

          {/* Floating Service Cards */}
          {cloudServices.map((service, index) => {
            const ServiceIcon = service.icon;
            const isHovered = hoveredService === service.id;
            const floatDelay = `${index * 0.5}s`;
            
            return (
              <div 
                key={service.id}
                style={{ top: `${service.y}%`, left: `${service.x}%`, transform: 'translate(-50%, -50%)' }}
                className="absolute z-30 pointer-events-auto"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div 
                  className="flex items-center justify-center animate-[floating_4s_ease-in-out_infinite]"
                  style={{ animationDelay: floatDelay, animationPlayState: isHovered ? 'paused' : 'running' }}
                >
                  <div 
                    className={`transition-all duration-300 bg-white/95 backdrop-blur-xl border rounded-2xl p-2.5 sm:p-3 pr-4 sm:pr-6 flex items-center gap-3 shadow-[0_8px_25px_rgba(0,0,0,0.06)] min-w-[200px] cursor-default
                      ${isHovered ? "scale-105 -translate-y-1 shadow-[0_15px_35px_rgba(59,130,246,0.15)] border-blue-300" : "border-slate-200/80"}`}
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600 flex items-center justify-center shrink-0 border border-blue-200/50">
                      <ServiceIcon size={18} strokeWidth={2.5} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[13px] font-bold text-slate-900 leading-tight mb-0.5">{service.title}</h4>
                      <p className="text-[10px] text-slate-500 font-medium leading-tight max-w-[130px] truncate">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right - Text Content (45%) */}
        <div className="lg:col-span-5 relative z-10 lg:pl-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <span className="text-[11px] font-black text-blue-600 uppercase tracking-wider">CLOUD SOLUTIONS</span>
          </div>

          <h3 className="font-display text-[32px] sm:text-[40px] font-bold text-slate-900 leading-[1.15] mb-5 tracking-tight">
            Build Today.<br />
            Scale Tomorrow.
          </h3>
          
          <div className="w-12 h-1.5 bg-blue-600 rounded-full mb-6" />

          <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed mb-8 max-w-lg">
            Our cloud solutions help businesses migrate, secure, optimize and scale modern infrastructure with enterprise-grade reliability.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 mb-8">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <CheckCircle size={12} strokeWidth={3} />
                </div>
                <span className="text-[13px] font-bold text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full mt-2">
            <button
              onClick={() => handleNavigation("/contact")}
              className="flex-1 flex items-center justify-center gap-2 px-4 sm:px-5 py-3.5 sm:py-4 bg-primary text-primary-foreground text-[14px] sm:text-[15px] font-bold rounded-lg hover:opacity-90 transition-all duration-300 shadow-md group w-full min-w-0"
            >
              <span className="truncate">Talk to Cloud Experts</span>
              <ArrowUpRight size={18} className="shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <button
              onClick={() => handleNavigation("/solutions/cloud-solutions")}
              className="flex-1 flex items-center justify-center gap-2 px-4 sm:px-5 py-3.5 sm:py-4 bg-white border-[1.5px] border-primary text-primary text-[14px] sm:text-[15px] font-bold rounded-lg hover:bg-primary hover:text-white transition-all duration-300 shadow-sm group w-full min-w-0"
            >
              <span className="truncate">Explore Cloud Solutions</span>
              <ArrowRight size={18} className="shrink-0 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Statistics Bar */}
      <div className="mt-12 sm:mt-16 bg-white border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[20px] p-6 lg:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
        <div className="flex items-center gap-4 pt-4 sm:pt-0 pl-0">
          <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md">
            <ShieldCheck size={20} strokeWidth={2.5} />
          </div>
          <div>
            <div className="text-[18px] font-black text-blue-600 leading-tight">99.99%</div>
            <div className="text-[12px] font-bold text-slate-500 mt-0.5">Uptime Guarantee</div>
          </div>
        </div>
        
        <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:pl-8">
          <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-md">
            <TrendingUp size={20} strokeWidth={2.5} />
          </div>
          <div>
            <div className="text-[16px] font-black text-slate-900 leading-tight">Auto Scaling</div>
            <div className="text-[12px] font-bold text-slate-500 mt-0.5">Elastic. Flexible. Efficient.</div>
          </div>
        </div>

        <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:pl-8">
          <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
            <Shield size={20} strokeWidth={2.5} />
          </div>
          <div>
            <div className="text-[16px] font-black text-slate-900 leading-tight">Enterprise Security</div>
            <div className="text-[12px] font-bold text-slate-500 mt-0.5">Built-in Protection</div>
          </div>
        </div>

        <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:pl-8">
          <div className="w-12 h-12 rounded-full bg-sky-500 text-white flex items-center justify-center shrink-0 shadow-md">
            <Cloud size={20} strokeWidth={2.5} />
          </div>
          <div>
            <div className="text-[16px] font-black text-slate-900 leading-tight">Lower Costs</div>
            <div className="text-[12px] font-bold text-slate-500 mt-0.5">Optimize. Save. Grow.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ──────────── Digital Marketing Tab ──────────── */
const DigitalMarketingTab = () => {
  const navigate = useNavigate();
  const [hoveredPill, setHoveredPill] = useState<string | null>(null);

  const handleNavigation = (path: string) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(path);
  };

  const marketingFeatures = [
    "Performance-Focused Campaigns",
    "ROI-Driven Marketing",
    "Transparent Reporting",
    "Data-Backed Strategies"
  ];

  const services = [
    {
      id: "seo",
      title: "SEO",
      desc: "Improve rankings and drive organic traffic.",
      icon: Search,
      path: "/solutions/digital-marketing",
      color: "blue",
      x: 65, y: 12
    },
    {
      id: "google-ads",
      title: "Google Ads",
      desc: "Target the right audience and maximize ROI.",
      icon: Target,
      path: "/solutions/digital-marketing",
      color: "orange",
      x: 82, y: 45
    },
    {
      id: "linkedin",
      title: "LinkedIn Strategy",
      desc: "Generate B2B leads and grow your network.",
      icon: Linkedin,
      path: "/solutions/digital-marketing",
      color: "blue",
      x: 70, y: 85
    },
    {
      id: "content",
      title: "Content Marketing",
      desc: "Create valuable content that converts.",
      icon: FileText,
      path: "/solutions/digital-marketing",
      color: "cyan",
      x: 25, y: 80
    },
    {
      id: "social",
      title: "Social Media",
      desc: "Build brand awareness and engage your audience.",
      icon: ThumbsUp,
      path: "/solutions/digital-marketing",
      color: "purple",
      x: 15, y: 35
    }
  ];

  const stats = [
    { value: "320%", label: "Organic Traffic Growth", icon: Users, color: "blue" },
    { value: "2.4X", label: "More Qualified Leads", icon: TrendingUp, color: "purple" },
    { value: "47%", label: "Higher Conversion Rate", icon: Target, color: "orange" },
    { value: "4.6X", label: "Average ROI Increase", icon: Wallet, color: "emerald" },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-6"
    >
      <div className="bg-white border border-slate-200/70 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[24px] p-8 sm:p-12 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        
        {/* Left Side (40%) */}
        <div className="w-full lg:w-[40%] relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[11px] font-bold tracking-wider uppercase mb-6 shadow-sm">
            Digital Marketing
          </div>
          
          <h2 className="font-display text-[42px] sm:text-[52px] font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
            Grow Smarter.<br />
            Reach Further.
          </h2>
          
          <div className="w-16 h-1 bg-blue-600 mb-6 rounded-full" />
          
          <p className="text-slate-600 text-[15px] sm:text-[16px] leading-relaxed mb-8 max-w-[90%] font-medium">
            Data-driven digital marketing strategies that increase visibility, generate high-quality leads, and maximize ROI.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2 mb-10">
            {marketingFeatures.map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <CheckCircle size={12} strokeWidth={3} />
                </div>
                <span className="text-[13px] font-bold text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-2">
            <button
              onClick={() => handleNavigation("/contact")}
              className="flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-primary text-primary-foreground text-[13px] sm:text-[14px] font-bold rounded-lg hover:opacity-90 transition-all duration-300 shadow-md group w-full sm:w-[200px]"
            >
              <span className="truncate">Book a Strategy Call</span>
              <ArrowUpRight size={16} className="shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <button
              onClick={() => handleNavigation("/solutions/digital-revenue-growth")}
              className="flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-white border-[1.5px] border-primary text-primary text-[13px] sm:text-[14px] font-bold rounded-lg hover:bg-primary hover:text-white transition-all duration-300 shadow-sm group w-full sm:w-[200px]"
            >
              <span className="truncate">Explore Digital Growth</span>
              <ArrowRight size={16} className="shrink-0 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Side - Ecosystem (60%) */}
        <div className="w-full lg:w-[60%] relative flex justify-center items-center lg:min-h-[600px] z-10 py-6 lg:py-0">
          
          {/* Desktop Absolute Layout */}
          <div className="hidden lg:flex relative w-full max-w-[600px] aspect-square items-center justify-center">
            
            {/* Concentric Dashed Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45%] h-[45%] rounded-full border border-slate-200 border-dashed animate-[spin_60s_linear_infinite]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] h-[75%] rounded-full border border-slate-200 border-dashed animate-[spin_90s_linear_infinite_reverse]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] rounded-full border border-slate-100 border-dashed" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] rounded-full border-2 border-white/20 animate-pulse pointer-events-none mix-blend-overlay opacity-30" />
            
            {/* Rotating Layer for Lines and Pills */}
            <div 
              className="absolute inset-0 pointer-events-none z-30"
              style={{
                animation: 'orbit-spin 40s linear infinite',
                animationPlayState: hoveredPill ? 'paused' : 'running'
              }}
            >
              {/* SVG Connector Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                {services.map((s, i) => {
                  const isHovered = hoveredPill === s.id;
                  return (
                    <g key={i}>
                      <line 
                        x1="50%" 
                        y1="50%" 
                        x2={`${s.x}%`} 
                        y2={`${s.y}%`} 
                        stroke={isHovered ? "#3b82f6" : "url(#lineGradient)"} 
                        strokeWidth={isHovered ? "2.5" : "1.5"} 
                        strokeDasharray={isHovered ? "0" : "4 4"} 
                        className={`transition-all duration-500 ${isHovered ? "opacity-100" : "opacity-40"}`}
                      />
                      <circle cx={`${s.x}%`} cy={`${s.y}%`} r={isHovered ? "6" : "4"} fill="#3b82f6" className={`transition-all duration-300 ${isHovered ? "opacity-100" : "opacity-50"}`} />
                    </g>
                  );
                })}
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Floating Service Pills */}
              {services.map((service) => {
                const ServiceIcon = service.icon;
                const isHovered = hoveredPill === service.id;
                
                const baseColor = {
                  blue: "text-blue-600 bg-blue-50",
                  orange: "text-orange-600 bg-orange-50",
                  purple: "text-purple-600 bg-purple-50",
                  cyan: "text-cyan-600 bg-cyan-50"
                }[service.color as "blue" | "orange" | "purple" | "cyan"];
                
                const hoverColor = {
                  blue: "bg-blue-600 text-white",
                  orange: "bg-orange-600 text-white",
                  purple: "bg-purple-600 text-white",
                  cyan: "bg-cyan-600 text-white"
                }[service.color as "blue" | "orange" | "purple" | "cyan"];
                
                const hoverTextColor = {
                  blue: "text-blue-600",
                  orange: "text-orange-600",
                  purple: "text-purple-600",
                  cyan: "text-cyan-600"
                }[service.color as "blue" | "orange" | "purple" | "cyan"];
                
                return (
                  <div 
                    key={service.id}
                    style={{ top: `${service.y}%`, left: `${service.x}%`, transform: 'translate(-50%, -50%)' }}
                    className="absolute z-30 pointer-events-auto"
                    onMouseEnter={() => setHoveredPill(service.id)}
                    onMouseLeave={() => setHoveredPill(null)}
                  >
                    <div 
                      className="flex items-center justify-center"
                      style={{
                        animation: 'orbit-spin-reverse 40s linear infinite',
                        animationPlayState: hoveredPill ? 'paused' : 'running'
                      }}
                    >
                      <div 
                        className={`transition-all duration-500 bg-white/90 backdrop-blur-xl border rounded-full p-2 sm:p-2.5 pr-4 sm:pr-6 flex items-center gap-3 sm:gap-4 min-w-[200px] ${
                          isHovered 
                            ? "scale-105 shadow-[0_15px_35px_rgba(59,130,246,0.2)] border-blue-300" 
                            : "shadow-[0_8px_25px_rgba(0,0,0,0.06)] border-slate-200/80"
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${isHovered ? hoverColor : baseColor}`}>
                          <ServiceIcon size={18} strokeWidth={2.5} />
                        </div>
                        <div className="flex-1">
                          <h4 className={`text-[13px] font-bold leading-tight mb-0.5 transition-colors ${isHovered ? hoverTextColor : "text-slate-900"}`}>{service.title}</h4>
                          <p className="text-[10px] text-slate-500 font-medium leading-tight max-w-[120px] truncate">
                            {service.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Center Growth Hub (Fixed) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none">
              <div className="absolute inset-0 bg-blue-600/20 rounded-full animate-[ping_3.5s_ease-in-out_infinite] opacity-75" />
              <div className="absolute -inset-4 bg-blue-600/30 rounded-full blur-2xl" />
              
              <div className="relative w-[150px] h-[150px] sm:w-[170px] sm:h-[170px] rounded-full bg-gradient-to-br from-[#0a1b4d] to-[#040b1e] border-4 border-white shadow-[0_15px_35px_rgba(4,11,30,0.3)] flex flex-col items-center justify-center text-center p-4">
                <BarChart2 size={36} className="text-blue-400 mb-2" strokeWidth={1.5} />
                <h3 className="text-white font-bold text-[16px] sm:text-[18px] leading-tight mb-1">Growth Hub</h3>
                <p className="text-blue-200/80 text-[10px] sm:text-[11px] font-medium tracking-wide">
                  Data. Strategy.<br />Results.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Responsive Layout */}
          <div className="flex lg:hidden flex-col items-center w-full gap-8">
            <div className="relative z-20">
              <div className="absolute inset-0 bg-blue-600/20 rounded-full animate-ping opacity-75" />
              <div className="absolute -inset-4 bg-blue-600/30 rounded-full blur-2xl" />
              <div className="relative w-[150px] h-[150px] rounded-full bg-gradient-to-br from-[#0a1b4d] to-[#040b1e] border-4 border-white shadow-[0_15px_35px_rgba(4,11,30,0.3)] flex flex-col items-center justify-center text-center p-4">
                <BarChart2 size={32} className="text-blue-400 mb-2" strokeWidth={1.5} />
                <h3 className="text-white font-bold text-[16px] leading-tight mb-1">Growth Hub</h3>
                <p className="text-blue-200/80 text-[10px] font-medium tracking-wide">
                  Data. Strategy.<br />Results.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
               {services.map(service => {
                 const ServiceIcon = service.icon;
                 const colorClasses = {
                   blue: "text-blue-600 bg-blue-50 group-hover:bg-blue-600",
                   orange: "text-orange-600 bg-orange-50 group-hover:bg-orange-600",
                   purple: "text-purple-600 bg-purple-50 group-hover:bg-purple-600",
                   cyan: "text-cyan-600 bg-cyan-50 group-hover:bg-cyan-600"
                 }[service.color as "blue" | "orange" | "purple" | "cyan"];
                 
                 return (
                   <div 
                     key={`mobile-${service.id}`}
                     className="group hover:scale-[1.02] transition-all duration-300 bg-white border border-slate-200/80 rounded-[20px] p-3 pr-4 flex items-center gap-4 shadow-sm hover:shadow-md hover:border-blue-200/60 w-full"
                   >
                     <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${colorClasses} group-hover:text-white`}>
                       <ServiceIcon size={20} strokeWidth={2.5} />
                     </div>
                     <div className="flex-1">
                       <h4 className="text-[14px] font-bold text-slate-900 leading-tight mb-0.5 group-hover:text-blue-600 transition-colors">{service.title}</h4>
                       <p className="text-[11px] text-slate-500 font-medium leading-tight">
                         {service.desc}
                       </p>
                     </div>
                   </div>
                 )
               })}
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Stats Bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => {
          const StatIcon = stat.icon;
          const colorStyles = {
            blue: "text-blue-600 bg-blue-50",
            purple: "text-purple-600 bg-purple-50",
            orange: "text-orange-600 bg-orange-50",
            emerald: "text-emerald-600 bg-emerald-50"
          }[stat.color as "blue" | "purple" | "orange" | "emerald"];
          
          return (
            <div key={i} className="bg-white border border-slate-200/70 shadow-[0_8px_20px_rgb(0,0,0,0.02)] rounded-[20px] p-5 sm:p-6 flex items-center gap-4 sm:gap-5 hover:shadow-md hover:border-slate-300 transition-all duration-300 group">
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 ${colorStyles} group-hover:scale-110`}>
                <StatIcon size={20} strokeWidth={2.5} />
              </div>
              <div>
                <div className="font-display text-[22px] sm:text-[28px] font-bold text-slate-900 leading-none mb-1.5 group-hover:text-primary transition-colors">{stat.value}</div>
                <div className="text-[11px] sm:text-[12px] font-bold text-slate-500">{stat.label}</div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

/* ──────────── Process Timeline ──────────── */
const ProcessTimeline = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 variants={itemVariants} className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Our Development Process
          </motion.h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {processSteps.map((s) => (
              <motion.div
                key={s.step}
                variants={itemVariants}
                className="bg-card border border-border rounded-xl p-5 text-center hover:border-primary/30 transition-colors relative"
              >
                <span className="inline-block w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-sm leading-10 mb-3">
                  {s.step}
                </span>
                <h4 className="text-sm font-semibold text-foreground mb-1">{s.title}</h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ──────────── Cybersecurity Tab ──────────── */
const CybersecurityTab = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(path);
  };

  const securityFeatures = [
    {
      title: "Threat Detection & Response",
      desc: "Real-time monitoring and AI-powered threat detection.",
      icon: ShieldAlert,
    },
    {
      title: "Zero Trust Security",
      desc: "Verify every user and device. Always.",
      icon: Lock,
    },
    {
      title: "Endpoint Protection",
      desc: "Next-gen protection for all endpoints and devices.",
      icon: MonitorSmartphone,
    },
    {
      title: "Compliance & Risk Management",
      desc: "Stay compliant and reduce security risks.",
      icon: FileCheck,
    }
  ];

  const sparklines = [
    "M0,15 Q5,5 10,12 T20,10 T30,15 T40,5 T50,15",
    "M0,10 Q5,15 10,8 T20,12 T30,5 T40,15 T50,8",
    "M0,5 Q5,15 10,10 T20,5 T30,15 T40,10 T50,5",
    "M0,12 Q5,5 10,15 T20,8 T30,12 T40,5 T50,10",
  ];

  return (
    <div className="bg-white border border-slate-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[24px] p-6 sm:p-10 lg:p-12 mb-10 overflow-hidden relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left - Text Content (45%) */}
        <div className="lg:col-span-5 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50/80 border border-blue-100 mb-6">
            <ShieldCheck size={14} className="text-blue-600" />
            <span className="text-[11px] font-black text-blue-700 uppercase tracking-wider">CYBERSECURITY</span>
          </div>

          <h3 className="font-display text-[32px] sm:text-[40px] font-bold text-slate-900 leading-[1.15] mb-5 tracking-tight">
            Protect Today.<br />
            Prevent Tomorrow.
          </h3>
          
          <div className="w-12 h-1.5 bg-blue-600 rounded-full mb-6" />

          <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed mb-8 max-w-lg">
            Advanced security solutions that protect your infrastructure, data, and applications from evolving cyber threats.
          </p>

          <div className="flex flex-col gap-5 mb-10">
            {securityFeatures.map((feature, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 border border-blue-100/50 mt-1">
                  <feature.icon size={18} strokeWidth={2} />
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-slate-900 mb-1">{feature.title}</h4>
                  <p className="text-[13px] text-slate-500 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full mt-2">
            <button
              onClick={() => handleNavigation("/contact")}
              className="flex-1 flex items-center justify-center gap-2 px-4 sm:px-5 py-3.5 sm:py-4 bg-[#0a2540] text-white text-[14px] sm:text-[15px] font-bold rounded-lg hover:bg-[#113054] transition-all duration-300 shadow-md group w-full min-w-0"
            >
              <span className="truncate">Talk to Security Experts</span>
              <ArrowRight size={18} className="shrink-0 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => handleNavigation("/solutions/cybersecurity")}
              className="flex-1 flex items-center justify-center gap-2 px-4 sm:px-5 py-3.5 sm:py-4 bg-white border-[1.5px] border-slate-300 text-slate-700 text-[14px] sm:text-[15px] font-bold rounded-lg hover:border-slate-400 hover:text-slate-900 transition-all duration-300 shadow-sm group w-full min-w-0"
            >
              <span className="truncate">Explore Cybersecurity</span>
              <ArrowRight size={18} className="shrink-0 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right - SOC Dashboard (55%) */}
        <div className="lg:col-span-7 relative w-full h-[700px] lg:h-[750px] flex items-center justify-center">
          
          {/* Dashboard Container */}
          <div className="absolute inset-0 bg-[#0b1120] rounded-[24px] shadow-[0_20px_60px_rgba(11,17,32,0.4)] border border-slate-800/80 overflow-hidden flex flex-col">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-[80px] pointer-events-none translate-x-1/3 translate-y-1/3" />
            
            {/* Top Bar */}
            <div className="h-[4.5rem] flex items-center justify-between px-6 border-b border-slate-800/60 shrink-0">
              <div className="text-[11px] font-black tracking-widest text-slate-400">SECURITY STATUS</div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-bold text-emerald-400 tracking-wide">All Systems Secure</span>
              </div>
            </div>

            {/* Dashboard Content Grid */}
            <div className="flex-1 p-5 lg:p-6 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 h-full overflow-y-auto overflow-x-hidden relative z-10 custom-scrollbar">
              
              {/* 1. Left Col - 4 Stat Cards */}
              <div className="flex flex-col gap-3 lg:gap-4">
                {[
                  { icon: ShieldCheck, title: "Threats Blocked", val: "12,486", trend: "↑ 18.6%", trendCol: "text-emerald-400", isLive: false },
                  { icon: Target, title: "Firewall", val: "ACTIVE", trend: "Live", trendCol: "text-slate-400", isLive: true },
                  { icon: Lock, title: "Encryption", val: "ENABLED", trend: "Live", trendCol: "text-slate-400", isLive: true },
                  { icon: Users, title: "Zero Trust", val: "VERIFIED", trend: "Live", trendCol: "text-slate-400", isLive: true },
                ].map((stat, i) => (
                  <div key={i} className="flex-1 bg-slate-900/50 border border-slate-800/80 rounded-xl p-3 lg:p-4 flex items-center gap-3 lg:gap-4 hover:border-slate-700 transition-colors group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                      <stat.icon size={20} strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <div className="text-[11px] lg:text-[12px] font-bold text-slate-400 mb-0.5 lg:mb-1">{stat.title}</div>
                      <div className="text-[16px] lg:text-[18px] font-black text-white tracking-tight">{stat.val}</div>
                    </div>
                    <div className="flex flex-col items-end justify-between h-full py-0.5 lg:py-1 min-w-[70px] lg:min-w-[80px]">
                      {stat.isLive ? (
                        <div className="flex items-center gap-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                          <span className={`text-[10px] lg:text-[11px] font-bold ${stat.trendCol}`}>{stat.trend}</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1">
                          <span className={`text-[10px] lg:text-[11px] font-bold ${stat.trendCol}`}>{stat.trend}</span>
                        </div>
                      )}
                      
                      {/* Mini Sparkline Chart */}
                      <svg className="w-[50px] lg:w-[60px] h-[14px] lg:h-[16px] text-blue-500 mt-2 opacity-50 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]" viewBox="0 0 50 20" preserveAspectRatio="none">
                        <path d={sparklines[i]} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>

              {/* 2. Right Col - Security Score */}
              <div className="bg-slate-900/50 border border-slate-800/80 rounded-xl p-5 flex flex-col items-center justify-center relative overflow-hidden h-full min-h-[220px]">
                <div className="absolute top-4 left-5 text-[10px] font-black tracking-widest text-slate-400">SECURITY SCORE</div>
                
                <div className="relative w-32 h-32 lg:w-36 lg:h-36 mt-4 group">
                  <svg className="w-full h-full transform -rotate-90 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)] group-hover:drop-shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all duration-500" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" fill="none" className="text-slate-800" />
                    <circle cx="50" cy="50" r="40" stroke="url(#scoreGrad)" strokeWidth="8" fill="none" strokeLinecap="round" 
                      strokeDasharray="251.2" strokeDashoffset="5" className="animate-[dash_2s_ease-out_forwards]" />
                    <defs>
                      <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#34d399" />
                        <stop offset="100%" stopColor="#10b981" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="flex items-start">
                      <span className="text-[32px] lg:text-[36px] font-black text-white leading-none">98</span>
                      <span className="text-[14px] lg:text-[16px] font-bold text-emerald-400 mt-1">%</span>
                    </div>
                    <span className="text-[10px] lg:text-[11px] font-bold text-emerald-400 mt-1">Excellent</span>
                  </div>
                </div>
                
                <p className="text-[10px] lg:text-[11px] text-slate-400 text-center mt-4 max-w-[180px]">
                  Your security posture is strong and continuously improving.
                </p>
              </div>

              {/* 3. Left Col - Real-Time Threat Map */}
              <div className="bg-slate-900/50 border border-slate-800/80 rounded-xl p-4 lg:p-5 flex flex-col relative overflow-hidden group min-h-[200px]">
                <div className="text-[10px] font-black tracking-widest text-slate-400 mb-4 z-10 relative">REAL-TIME THREAT MAP</div>
                <div className="flex-1 w-full relative flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  <Globe size={180} strokeWidth={1} className="text-blue-500/30 absolute" />
                  {/* Glowing threat dots */}
                  <div className="absolute top-[30%] left-[25%] w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(239,68,68,1)]" />
                  <div className="absolute top-[45%] right-[30%] w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(245,158,11,1)]" />
                  <div className="absolute bottom-[35%] right-[40%] w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(239,68,68,1)]" style={{ animationDelay: "0.5s" }} />
                  <div className="absolute bottom-[25%] left-[45%] w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,1)]" style={{ animationDelay: "1s" }} />
                  <div className="absolute top-[20%] right-[45%] w-2 h-2 bg-amber-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(245,158,11,1)]" style={{ animationDelay: "0.7s" }} />
                </div>
                <div className="flex items-center gap-4 mt-auto pt-4 relative z-10">
                  <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-red-500" /><span className="text-[9px] font-bold text-slate-400">High</span></div>
                  <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-amber-500" /><span className="text-[9px] font-bold text-slate-400">Medium</span></div>
                  <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /><span className="text-[9px] font-bold text-slate-400">Low</span></div>
                </div>
              </div>

              {/* 4. Right Col - Threat Activity Chart */}
              <div className="bg-slate-900/50 border border-slate-800/80 rounded-xl p-4 lg:p-5 flex flex-col min-h-[200px]">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-[10px] font-black tracking-widest text-slate-400">THREAT ACTIVITY (24H)</div>
                  <div className="flex flex-col items-end">
                    <span className="text-[16px] lg:text-[18px] font-black text-white leading-tight">7,892</span>
                    <span className="text-[9px] lg:text-[10px] text-slate-400 flex items-center gap-1">Total Events <span className="text-emerald-400 font-bold ml-1">↓ 12.4%</span></span>
                  </div>
                </div>
                
                {/* Bar Chart */}
                <div className="flex-1 flex items-end gap-[2px] lg:gap-[3px] mt-2 relative w-full h-[100px]">
                  {/* Grid lines */}
                  <div className="absolute inset-x-0 bottom-0 border-t border-slate-800/60 h-[25%]" />
                  <div className="absolute inset-x-0 bottom-[25%] border-t border-slate-800/60 h-[25%]" />
                  <div className="absolute inset-x-0 bottom-[50%] border-t border-slate-800/60 h-[25%]" />
                  <div className="absolute inset-x-0 bottom-[75%] border-t border-slate-800/60 h-[25%]" />
                  
                  {Array.from({ length: 36 }).map((_, i) => {
                    const isHigh = i > 22 && i < 30;
                    const baseHeight = isHigh ? 50 : 15;
                    const randomAdd = Math.random() * (isHigh ? 45 : 35);
                    const height = `${baseHeight + randomAdd}%`;
                    const delay = `${i * 0.02}s`;
                    
                    return (
                      <div key={i} className="flex-1 bg-blue-600 hover:bg-blue-400 rounded-t-[1px] transition-all duration-300 relative z-10 opacity-80 hover:opacity-100" 
                        style={{ 
                          height,
                          animation: `growUp 1s ease-out forwards`,
                          animationDelay: delay
                        }} 
                      />
                    );
                  })}
                </div>
                
                <div className="flex justify-between text-[8px] lg:text-[9px] font-bold text-slate-500 mt-3 border-t border-slate-800/50 pt-2">
                  <span>00:00</span>
                  <span>06:00</span>
                  <span>12:00</span>
                  <span>18:00</span>
                  <span>24:00</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom Statistics Bar */}
      <div className="mt-12 sm:mt-16 bg-white border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[20px] p-6 lg:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
        <div className="flex items-center gap-4 pt-4 sm:pt-0 pl-0">
          <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0">
            <ShieldCheck size={20} strokeWidth={2.5} />
          </div>
          <div>
            <div className="text-[18px] font-black text-slate-900 leading-tight">98.7%</div>
            <div className="text-[12px] font-bold text-slate-800 mt-0.5">Threats Blocked</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Last 30 Days</div>
          </div>
        </div>
        
        <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:pl-8">
          <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0">
            <Target size={20} strokeWidth={2.5} />
          </div>
          <div>
            <div className="text-[16px] font-black text-slate-900 leading-tight">24/7</div>
            <div className="text-[12px] font-bold text-slate-800 mt-0.5">Security Monitoring</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Always On</div>
          </div>
        </div>

        <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:pl-8">
          <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0">
            <Cloud size={20} strokeWidth={2.5} />
          </div>
          <div>
            <div className="text-[16px] font-black text-slate-900 leading-tight">99.99%</div>
            <div className="text-[12px] font-bold text-slate-800 mt-0.5">System Uptime</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Highly Available</div>
          </div>
        </div>

        <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:pl-8">
          <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0">
            <ClipboardCheck size={20} strokeWidth={2.5} />
          </div>
          <div>
            <div className="text-[16px] font-black text-slate-900 leading-tight">100%</div>
            <div className="text-[12px] font-bold text-slate-800 mt-0.5">Compliance Ready</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Audit Passed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ──────────── CTA ──────────── */
const PortfolioCTA = () => {
  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 variants={itemVariants} className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to see your project here?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
            No sales reps. No scripts. Senior engineers who understand your challenges — from day one.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Schedule a Discovery Call <ArrowRight size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

/* ──────────── Main Page ──────────── */
const Portfolio = () => {
  const [searchParams] = useSearchParams();
  const initialTab = (searchParams.get("tab") as TabKey) || "IT Services";
  const initialCategory = searchParams.get("category") || undefined;
  const [activeTab, setActiveTab] = useState<TabKey>(
    tabs.includes(initialTab) ? initialTab : "IT Services"
  );

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={portfolioSeoData.title}
        description={portfolioSeoData.description}
        canonical={portfolioSeoData.canonical}
        keywords={portfolioSeoData.keywords}
        ogDescription={portfolioSeoData.ogDescription}
        ogImageAlt={portfolioSeoData.ogImageAlt}
        twitterDescription={portfolioSeoData.twitterDescription}
        jsonLd={portfolioSeoData.jsonLd}
      />
      <Navbar />
      <PortfolioHero />
      <ProcessTimeline />

      {/* Tab section */}
      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          {/* Tab buttons */}
          <div className="relative flex overflow-x-auto hide-scrollbar gap-2 mb-12 p-2 bg-slate-50/80 rounded-2xl border border-slate-100 shadow-inner snap-x">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative shrink-0 snap-start px-6 py-3 text-[14px] font-bold rounded-[14px] transition-all duration-300 ${activeTab === tab
                    ? "text-white"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
                  }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activePortfolioTab"
                    className="absolute inset-0 bg-primary rounded-[14px] shadow-md"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 whitespace-nowrap">{tab}</span>
              </button>
            ))}
          </div>

          {/* Tab content (Temporarily mapping to existing components) */}
          {activeTab === "IT Services" && <ITServicesTab />}
          {activeTab === "Software & AI Solutions" && <SoftwareAISolutionsTab />}
          {activeTab === "Cloud Solutions" && <CloudSolutionsTab />}
          {activeTab === "Digital Marketing" && <DigitalMarketingTab />}
          {activeTab === "Cybersecurity" && <CybersecurityTab />}
        </div>
      </section>

      <PortfolioCTA />
      <Footer />
    </div>
  );
};

export default Portfolio;
