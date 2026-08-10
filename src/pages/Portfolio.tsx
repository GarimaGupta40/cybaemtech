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
  TrendingDown,
  Check,
  ShoppingCart,
  Wand2,
  Zap,
  Palette
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import PortfolioCTA from "@/components/PortfolioCTA";
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
const tabs = ["IT Services", "Enterprise & AI Solutions", "Website Development", "Cloud Solutions", "Digital Marketing", "Cybersecurity"] as const;
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
          src="/images/portfolio-header.webp"
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
                src="/images/portfolio-header.webp"
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
    bgImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
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
              className="group relative h-[270px] rounded-[24px] overflow-hidden bg-[#071026] cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_45px_rgba(2,132,199,0.25)] hover:-translate-y-1 transition-all duration-400 border border-white/10"
            >
              {/* Background Image - Vibrant & Highly Visible */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={service.bgImage}
                  alt={service.title}
                  className="w-full h-full object-cover opacity-65 group-hover:opacity-80 brightness-[1.12] contrast-[1.08] group-hover:scale-105 transition-all duration-700 ease-out"
                />
                {/* Softer Navy/Blue Gradient Overlay (40-55% opacity) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#04091a]/95 via-[#061233]/45 to-sky-950/25 pointer-events-none" />
                <div className="absolute inset-0 bg-blue-900/15 group-hover:bg-blue-600/10 transition-colors duration-500 pointer-events-none" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full p-6">
                <div className="mb-auto">
                  <div className="w-12 h-12 rounded-[14px] border border-white/20 bg-[#071435]/60 backdrop-blur-md flex items-center justify-center text-white mb-6 group-hover:border-white/40 group-hover:bg-[#071435]/80 transition-all duration-300 shadow-md">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-[20px] font-bold text-white leading-tight mb-3 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                    {service.title}
                  </h3>
                  <div className="w-8 h-0.5 bg-sky-400 mb-4 transition-all duration-300 group-hover:w-12 group-hover:bg-sky-300 shadow-sm" />
                  <p className="text-[13px] text-white/95 font-medium leading-relaxed line-clamp-3 drop-shadow-[0_1.5px_4px_rgba(0,0,0,0.9)]">
                    {service.description}
                  </p>
                </div>

                {/* Arrow Button */}
                <div className="mt-auto self-end">
                  <div className="w-10 h-10 rounded-full border border-white/30 bg-black/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#040b1e] group-hover:border-white transition-all duration-300 shadow-md">
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-6 mb-10"
    >
      {/* Top Row: Hero + Why Choose */}
      <div className="flex flex-col lg:flex-row gap-6">

        {/* Hero Section */}
        <div className="lg:w-[70%]">
          {/* Dark Hero Card */}
          <div className="bg-[#040b1e] rounded-[2rem] p-6 lg:p-8 relative overflow-hidden flex flex-col md:flex-row items-center gap-6 min-h-[300px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] group">
            {/* Background Image & Effects */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-[#040b1e] to-[#040b1e] opacity-80" />
              {/* Glowing orbs */}
              <div className="absolute top-0 right-[20%] w-[40%] h-[60%] bg-blue-600/20 blur-[100px] mix-blend-screen pointer-events-none transition-colors duration-500" />
              <div className="absolute bottom-0 right-0 w-[30%] h-[50%] bg-purple-600/20 blur-[100px] mix-blend-screen pointer-events-none transition-colors duration-500" />
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
            </div>

            {/* Left Content */}
            <div className="relative z-10 w-full md:w-[55%] flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-[11px] font-bold tracking-wide uppercase mb-4 shadow-sm">
                <Settings size={14} className="text-blue-400" /> ENTERPRISE & AI SOLUTIONS
              </div>

              <h2 className="text-4xl lg:text-5xl font-display font-bold text-white leading-[1.15] mb-3">
                Intelligent Solutions.<br />
                <span className="text-slate-300">Real Business Impact.</span>
              </h2>

              <div className="w-12 h-1 bg-blue-500 rounded-full mb-4 group-hover:w-20 transition-all duration-300" />

              <p className="text-[15px] text-slate-300 leading-relaxed mb-6 max-w-sm">
                Building enterprise-grade applications and AI-powered systems that automate processes and drive measurable growth.
              </p>

              {/* Checkmark Pills */}
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { label: 'Scalable', icon: TrendingUp },
                  { label: 'Secure', icon: ShieldCheck },
                  { label: 'Smart', icon: BrainCircuit },
                  { label: 'Future-Ready', icon: Rocket }
                ].map(feature => (
                  <div key={feature.label} className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-[12px] font-medium backdrop-blur-md hover:bg-white/10 transition-colors cursor-default">
                    <feature.icon size={14} className="text-blue-400" />
                    {feature.label}
                  </div>
                ))}
              </div>

              <Link
                to="/solutions/enterprise-software"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
              >
                Explore Enterprise Solutions
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Right Static Layered Dashboard Composition (Product Showcase) */}
            <div className="relative z-10 w-full md:w-[48%] flex items-center justify-center min-h-[320px] sm:min-h-[380px] mt-6 md:mt-0 py-4">
              <div className="relative w-full max-w-[380px] sm:max-w-[440px] flex items-center justify-center">

                {/* Soft Ambient Blue Glow Background */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-indigo-500/10 to-transparent blur-3xl rounded-full pointer-events-none" />

                {/* Layer 1: Top-Left Floating Light Browser Mockup (Brand-Neutral SaaS Analytics UI) */}
                <div className="absolute -top-6 -left-3 sm:-left-8 w-44 sm:w-56 rounded-xl bg-white border border-white/60 shadow-[0_20px_40px_rgba(0,0,0,0.35)] overflow-hidden transform -rotate-6 z-10">
                  <div className="h-5.5 bg-slate-100/90 border-b border-slate-200/80 flex items-center px-2.5 gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="w-2 h-2 rounded-full bg-amber-400" />
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <div className="mx-auto text-[8px] font-mono text-slate-400 font-medium truncate max-w-[100px]">analytics.io</div>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=95&w=1600&auto=format&fit=crop"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/images/saas-website.webp"; }}
                    alt="SaaS Analytics Dashboard UI"
                    className="w-full h-28 sm:h-36 object-cover object-top"
                  />
                </div>

                {/* Layer 2: Top-Right Floating Dark Dashboard Mockup (Brand-Neutral CRM Admin UI) */}
                <div className="absolute -top-4 -right-3 sm:-right-8 w-44 sm:w-56 rounded-xl bg-[#0b1329] border border-blue-400/40 shadow-[0_20px_40px_rgba(0,82,204,0.3)] overflow-hidden transform rotate-6 z-10">
                  <div className="h-5.5 bg-[#060c1c] border-b border-white/10 flex items-center px-2.5 gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-slate-600" />
                    <div className="w-2 h-2 rounded-full bg-slate-600" />
                    <div className="w-2 h-2 rounded-full bg-slate-600" />
                    <div className="mx-auto text-[8px] font-mono text-slate-400 font-medium truncate max-w-[100px]">admin.platform.io</div>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=95&w=1600&auto=format&fit=crop"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/images/CRM-website.webp"; }}
                    alt="CRM Admin Dashboard UI"
                    className="w-full h-28 sm:h-36 object-cover object-top"
                  />
                </div>

                {/* Layer 3: Center Primary 4K Laptop Showcase (Clean Brand-Neutral Enterprise UI) */}
                <div className="relative z-20 w-60 sm:w-76 rounded-xl bg-[#060e24] border border-blue-400/60 shadow-[0_25px_60px_rgba(59,130,246,0.4)] overflow-hidden mt-8 sm:mt-10 transform -rotate-1">
                  <div className="h-6 bg-[#030714] border-b border-white/10 flex items-center justify-between px-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                      <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                      <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
                    </div>
                    <div className="text-[8px] font-medium text-slate-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10 font-mono">
                      dashboard.io
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=95&w=2000&auto=format&fit=crop"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/images/Tech-port/Enterprise Custom Software.webp"; }}
                      alt="Enterprise Business BI Dashboard UI"
                      className="w-full h-40 sm:h-52 object-cover object-top brightness-[1.02]"
                    />
                  </div>
                </div>

                {/* Layer 4: Bottom-Right 4K Smartphone App Mockup (Brand-Neutral Mobile Application UI) */}
                <div className="absolute -bottom-4 -right-2 sm:-right-5 w-24 sm:w-28 rounded-2xl bg-slate-900 border-2 border-slate-700/90 shadow-[0_20px_40px_rgba(0,0,0,0.6)] overflow-hidden z-30 transform rotate-3">
                  <div className="h-3 bg-black flex items-center justify-center">
                    <div className="w-7 h-1 bg-slate-800 rounded-full" />
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1555421689-491a97ff2040?q=95&w=1200&auto=format&fit=crop"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/images/Ecomm-website.webp"; }}
                    alt="Mobile Application UI"
                    className="w-full h-32 sm:h-40 object-cover object-top"
                  />
                </div>

              </div>
            </div>
          </div>
        </div> {/* End Hero Section */}

        {/* Right Column (Why Choose Our Solutions?) */}
        <div className="lg:w-[30%] bg-white border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] p-6 lg:p-8 flex flex-col group">
          <h3 className="font-display text-[24px] font-bold text-slate-900 leading-[1.15] mb-8 tracking-tight">
            Why Choose <br />Our Solutions?
          </h3>

          <div className="flex flex-col gap-8 flex-1">
            {[
              { title: "Enterprise Grade", desc: "Secure, scalable, and built for mission-critical operations.", icon: ShieldCheck, color: "text-blue-600", bg: "bg-blue-50" },
              { title: "AI-Powered Innovation", desc: "Leverage AI to automate, predict, and make smarter decisions.", icon: Cpu, color: "text-purple-600", bg: "bg-purple-50" },
              { title: "Scalable & Future-Ready", desc: "Solutions designed to grow with your business and adapt to tomorrow.", icon: Rocket, color: "text-cyan-600", bg: "bg-cyan-50" },
              { title: "Privacy & Security First", desc: "Data security, compliance, and privacy built into everything we do.", icon: Lock, color: "text-blue-600", bg: "bg-blue-50" }
            ].map((feature, i) => (
              <div key={i} className="flex gap-4 items-start group/feature">
                <div className={`w-12 h-12 rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center shrink-0 border border-white shadow-sm group-hover/feature:scale-110 transition-transform duration-300`}>
                  <feature.icon size={20} strokeWidth={2} />
                </div>
                <div className="pt-0.5">
                  <h4 className="text-[14px] font-bold text-slate-900 mb-1 leading-tight group-hover/feature:text-blue-600 transition-colors">{feature.title}</h4>
                  <p className="text-[12px] text-slate-500 font-medium leading-relaxed pr-2">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center gap-2 w-full py-3 text-[14px] font-semibold bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-all hover:scale-[1.02] shadow-md"
          >
            Talk to our experts
            <ArrowRight size={16} />
          </Link>
        </div>
      </div> {/* End Top Row */}

      {/* Bottom 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">

        {/* Enterprise Solutions (40% width) */}
        <div className="lg:col-span-5 bg-white border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] p-6 lg:p-8 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
              <Briefcase size={22} strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-[20px] font-bold text-slate-900">Enterprise Solutions</h3>
              <p className="text-[12px] text-slate-500 font-medium">Powerful enterprise applications built for efficiency and scale.</p>
            </div>
          </div>

          <div className="w-full mt-4">
            {/* Workflow & Operations */}
            <div className="flex flex-col bg-slate-50 border border-slate-100 rounded-3xl p-6 hover:border-purple-200 hover:shadow-md transition-all duration-300 group h-full w-full">
              <div className="h-[300px] bg-gradient-to-br from-indigo-50/40 to-purple-100/50 rounded-[1.25rem] mb-4 relative overflow-hidden flex flex-col items-center justify-center p-2 group-hover:shadow-inner transition-all duration-500 w-full">

                {/* Background patterns */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#4f46e5 1px, transparent 1px)", backgroundSize: "16px 16px" }}></div>

                <div className="relative w-full max-w-[280px] h-full flex flex-col items-center justify-between py-4 group-hover:-translate-y-2 transition-transform duration-700 z-10">

                  {/* Top Node */}
                  <div className="w-44 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/30 z-10 text-white animate-[floating_4s_ease-in-out_infinite]">
                    <Rocket size={12} className="fill-white" />
                    <span className="text-[10px] font-bold tracking-wide">Workflow Automation</span>
                  </div>

                  {/* Connector */}
                  <div className="w-0.5 h-6 bg-indigo-200/60" />

                  {/* Request Node */}
                  <div className="w-36 h-8 bg-white rounded-full shadow-md border border-slate-100 flex items-center justify-center gap-2 z-10">
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center"><Users size={10} className="text-blue-600" /></div>
                    <span className="text-[10px] font-bold text-slate-700">Request</span>
                  </div>

                  <div className="w-0.5 h-6 bg-indigo-200/60" />

                  {/* Manager Approval */}
                  <div className="w-44 h-8 bg-white rounded-full shadow-md border border-slate-100 flex items-center justify-center gap-2 z-10">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center shadow-sm shadow-green-500/40"><CheckCircle size={10} className="text-white" /></div>
                    <span className="text-[10px] font-bold text-slate-700">Manager Approval</span>
                  </div>

                  <div className="w-0.5 h-6 bg-indigo-200/60" />

                  {/* Finance Review */}
                  <div className="w-40 h-8 bg-white/80 backdrop-blur-sm rounded-full shadow-md border border-purple-100 flex items-center justify-center gap-2 z-10">
                    <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center"><FileText size={10} className="text-purple-600" /></div>
                    <span className="text-[10px] font-bold text-slate-700">Finance Review</span>
                  </div>

                  {/* Split Connector */}
                  <div className="flex flex-col items-center w-40">
                    <div className="w-0.5 h-4 bg-indigo-200/60" />
                    <div className="w-full h-0.5 bg-indigo-200/60" />
                    <div className="flex justify-between w-full px-2">
                      <div className="w-0.5 h-4 bg-indigo-200/60" />
                      <div className="w-0.5 h-4 bg-indigo-200/60" />
                    </div>
                  </div>

                  {/* Bottom Nodes */}
                  <div className="flex justify-between w-full max-w-[220px] px-2">
                    <div className="w-24 h-12 bg-white rounded-xl shadow-md border border-slate-100 flex items-center justify-center gap-2 z-10 hover:border-blue-200 transition-colors">
                      <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center"><Users size={12} className="text-blue-600" /></div>
                      <span className="text-[9px] font-bold text-slate-700">IT Team</span>
                    </div>
                    <div className="w-24 h-12 bg-white rounded-xl shadow-md border border-slate-100 flex flex-col items-center justify-center gap-1 z-10 hover:border-green-200 transition-colors">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center shadow-sm shadow-green-500/40"><CheckCircle size={10} className="text-white" /></div>
                      <span className="text-[9px] font-bold text-slate-700">Completed</span>
                    </div>
                  </div>

                </div>
              </div>

              <h4 className="text-[16px] font-bold text-slate-900 mb-2 leading-tight group-hover:text-purple-600 transition-colors">Workflow & Operations</h4>
              <p className="text-[12px] text-slate-500 leading-relaxed mb-6 flex-1">Automate workflows and streamline operations across teams.</p>

              <div className="flex flex-wrap gap-2 mt-auto">
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg border border-slate-200 shadow-sm group-hover:border-purple-200 transition-colors">
                  <Settings size={14} className="text-purple-500" />
                  <span className="text-[11px] font-medium text-slate-700">Automation</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg border border-slate-200 shadow-sm group-hover:border-purple-200 transition-colors">
                  <Network size={14} className="text-purple-500" />
                  <span className="text-[11px] font-medium text-slate-700">Process Flow</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Solutions (60% width) */}
        <div className="lg:col-span-7 bg-white border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] p-6 lg:p-8 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100">
              <BrainCircuit size={22} strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-[20px] font-bold text-slate-900">AI Solutions</h3>
              <p className="text-[12px] text-slate-500 font-medium">AI-powered products solving real-world challenges.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">

            {/* Card 1: Psychometric Analysis */}
            <div className="flex flex-col bg-slate-50 border border-slate-100 rounded-3xl p-4 hover:border-purple-200 hover:shadow-md transition-all duration-300 group h-full">
              <div className="h-32 bg-gradient-to-br from-purple-100 to-purple-200 rounded-[1.25rem] mb-4 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-white/20" />
                {/* Human Head Silhouette & Brain Circuit */}
                <div className="relative w-16 h-20 bg-purple-500 rounded-t-full rounded-bl-3xl shadow-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                  <BrainCircuit size={32} className="text-white opacity-80 animate-pulse" />
                </div>
                <div className="absolute top-[20%] right-[20%] w-12 h-12 bg-white/60 backdrop-blur-sm rounded-lg shadow-sm border border-white/50 p-1.5 flex flex-col gap-1.5 transform rotate-6 group-hover:-rotate-6 transition-transform">
                  <div className="w-full h-1.5 bg-purple-300 rounded-full" />
                  <div className="w-3/4 h-1.5 bg-purple-300 rounded-full" />
                  <div className="flex gap-1.5 mt-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  </div>
                </div>
              </div>
              <h4 className="text-[14px] font-bold text-slate-900 mb-2 leading-tight">Psychometric Analysis System</h4>
              <p className="text-[12px] text-slate-500 leading-relaxed flex-1">Live interview psychometric analysis with Generative AI, ATS integration, and bias mitigation.</p>
            </div>

            {/* Card 2: Business Card OCR */}
            <div className="flex flex-col bg-slate-50 border border-slate-100 rounded-3xl p-4 hover:border-emerald-200 hover:shadow-md transition-all duration-300 group h-full">
              <div className="h-32 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-[1.25rem] mb-4 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-white/20" />
                <div className="relative w-[70%] h-[60%] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  {/* Background card */}
                  <div className="absolute w-[80%] h-full bg-white/40 border border-white/50 rounded-lg transform -rotate-12 translate-x-3 translate-y-2" />
                  {/* Foreground Card */}
                  <div className="relative z-10 w-[90%] h-full bg-white shadow-lg rounded-lg border border-slate-100 p-2.5 flex flex-col justify-between overflow-hidden">
                    <div className="flex justify-between items-start">
                      <div className="w-6 h-6 rounded-full bg-slate-200" />
                      <div className="w-14 h-2 bg-emerald-400 rounded-full" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <div className="w-full h-1.5 bg-slate-200 rounded-full" />
                      <div className="w-3/4 h-1.5 bg-slate-200 rounded-full" />
                    </div>
                    {/* Scanning Laser Line */}
                    <div className="absolute left-0 w-full h-[2px] bg-emerald-500 shadow-[0_0_8px_#10b981] animate-[floating_2s_ease-in-out_infinite]" />
                  </div>
                </div>
              </div>
              <h4 className="text-[14px] font-bold text-slate-900 mb-2 leading-tight">Business Card OCR & Extraction</h4>
              <p className="text-[12px] text-slate-500 leading-relaxed flex-1">AI-driven extraction with automated CRM workflows and offline capture.</p>
            </div>

            {/* Card 3: ReqGen */}
            <div className="flex flex-col bg-slate-50 border border-slate-100 rounded-3xl p-4 hover:border-orange-200 hover:shadow-md transition-all duration-300 group h-full">
              <div className="h-32 bg-gradient-to-br from-orange-100 to-orange-200 rounded-[1.25rem] mb-4 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-white/20" />
                <div className="relative w-full h-full flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-300 gap-2.5">
                  <div className="flex items-center gap-2 h-12">
                    <div className="w-2.5 bg-orange-400 rounded-full h-[40%] animate-pulse" />
                    <div className="w-2.5 bg-orange-500 rounded-full h-[80%] animate-pulse delay-75" />
                    <div className="w-2.5 bg-orange-600 rounded-full h-[100%] animate-pulse delay-150" />
                    <div className="w-2.5 bg-orange-500 rounded-full h-[60%] animate-pulse delay-200" />
                    <div className="w-2.5 bg-orange-400 rounded-full h-[30%] animate-pulse delay-300" />
                  </div>
                  <div className="w-24 bg-white/60 backdrop-blur-sm border border-white/50 rounded-xl p-2 shadow-sm flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-orange-500 flex items-center justify-center text-white"><AudioWaveform size={10} /></div>
                    <div className="w-12 h-1.5 bg-slate-300 rounded-full" />
                  </div>
                </div>
              </div>
              <h4 className="text-[14px] font-bold text-slate-900 mb-2 leading-tight">ReqGen – Audio Based Requirement Generator</h4>
              <p className="text-[12px] text-slate-500 leading-relaxed flex-1">Convert audio conversations into structured requirements with AI.</p>
            </div>

            {/* Card 4: Prescription Scanner */}
            <div className="flex flex-col bg-slate-50 border border-slate-100 rounded-3xl p-4 hover:border-blue-200 hover:shadow-md transition-all duration-300 group h-full">
              <div className="h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-[1.25rem] mb-4 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-white/20" />
                <div className="relative w-14 h-24 bg-slate-800 rounded-2xl border-[4px] border-slate-900 shadow-xl flex flex-col items-center p-0.5 group-hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-5 h-1 bg-slate-700 rounded-full mb-1" />
                  <div className="w-full flex-1 bg-blue-50 rounded-lg overflow-hidden relative flex flex-col items-center pt-2.5">
                    {/* Medical Cross */}
                    <div className="w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center mb-1.5 z-10">
                      <div className="w-3 h-3 text-blue-600 relative">
                        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5 bg-current" />
                        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-current" />
                      </div>
                    </div>
                    <div className="w-3/4 h-1 bg-blue-200 rounded-full mb-1 z-10" />
                    <div className="w-1/2 h-1 bg-blue-200 rounded-full z-10" />
                    {/* Scanner effect */}
                    <div className="absolute bottom-0 w-full h-[40%] bg-gradient-to-t from-blue-500/30 to-transparent animate-pulse" />
                  </div>
                </div>
                <div className="absolute top-[20%] right-[15%] w-12 h-12 bg-white/60 backdrop-blur-sm rounded-lg shadow-sm border border-white/50 p-2 flex flex-col gap-1.5 transform rotate-6 group-hover:-rotate-3 transition-transform">
                  <div className="w-full h-1.5 bg-slate-300 rounded-full" />
                  <div className="w-full h-1.5 bg-slate-300 rounded-full" />
                  <div className="w-3/4 h-1.5 bg-blue-400 rounded-full" />
                </div>
              </div>
              <h4 className="text-[14px] font-bold text-slate-900 mb-2 leading-tight">Prescription AI Scanner Mobile App</h4>
              <p className="text-[12px] text-slate-500 leading-relaxed flex-1">AI-powered scanner that reads, validates, and organizes prescriptions.</p>
            </div>

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
/* ──────────── Website Development Tab ──────────── */
const WebsiteDevelopmentTab = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-6 lg:gap-8 mb-10">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

        {/* Left Hero (70% on desktop -> col-span-8) */}
        <div className="lg:col-span-8 bg-gradient-to-br from-blue-50/80 via-white to-blue-50/50 border border-blue-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] p-8 lg:p-12 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 min-h-[500px]">

          {/* Glassmorphism Background Waves (SVG) */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
            <svg className="absolute w-full h-full inset-0" viewBox="0 0 1000 600" preserveAspectRatio="none">
              <path d="M0,200 C300,400 700,100 1000,300 L1000,600 L0,600 Z" fill="url(#hero-glass-1)" className="opacity-30 mix-blend-overlay" />
              <path d="M0,400 C400,100 600,500 1000,200 L1000,600 L0,600 Z" fill="url(#hero-glass-2)" className="opacity-40" />
              <defs>
                <linearGradient id="hero-glass-1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#eff6ff" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="hero-glass-2" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.9" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 opacity-[0.2]" style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          </div>

          {/* Left Content */}
          <div className="relative z-10 w-full md:w-1/2 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/50 border border-blue-200 text-blue-700 text-[11px] font-bold tracking-wide uppercase mb-6 shadow-sm">
              <Globe size={14} className="text-blue-600" /> WEBSITE DEVELOPMENT
            </div>

            <h2 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 leading-[1.15] mb-4">
              Modern Websites.<br />
              <span className="text-slate-700">Stronger Brands.</span>
            </h2>

            <div className="w-12 h-1 bg-blue-600 rounded-full mb-6" />

            <p className="text-[15px] text-slate-600 leading-relaxed mb-8 max-w-sm">
              We design and develop high-performance, responsive websites that are fast, user-friendly, and built to grow your business online.
            </p>

            {/* Checkmark Pills */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-10">
              {['Modern Design', 'Responsive', 'SEO Optimized', 'Fast Performance', 'Secure', 'Scalable'].map(feature => (
                <div key={feature} className="flex items-center gap-2 text-[13px] font-semibold text-slate-700">
                  <div className="w-4 h-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 shadow-sm border border-blue-200/50">
                    <Check size={10} strokeWidth={3} />
                  </div>
                  {feature}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); navigate("/contact"); }}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity group w-full sm:w-auto shadow-sm whitespace-nowrap"
              >
                Contact Us <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); navigate("/solutions/web-systems"); }}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity group w-full sm:w-auto shadow-sm whitespace-nowrap"
              >
                Explore Solutions <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Laptop Illustration */}
          <div className="relative z-10 w-full md:w-1/2 flex items-center justify-center h-full min-h-[300px] mt-10 md:mt-0">
            {/* Soft blue glow behind laptop */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-400/20 rounded-full blur-[60px]" />

            {/* CSS Laptop Base */}
            <div className="relative w-[110%] max-w-[450px] rotate-[-5deg] md:rotate-[-8deg] hover:rotate-0 transition-transform duration-700 ease-out z-10">
              {/* Screen Frame */}
              <div className="relative bg-slate-900 p-2 rounded-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-4 border-slate-800">
                {/* Camera dot */}
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-slate-700" />

                {/* Inner Screen */}
                <div className="bg-white rounded-lg overflow-hidden aspect-[16/10] relative flex flex-col shadow-inner">
                  {/* Fake Website Header */}
                  <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-100 bg-white shadow-sm z-10">
                    <div className="text-[9px] font-black tracking-tight text-slate-900">CYBAEM TECH</div>
                    <div className="flex gap-3 text-[7px] font-semibold text-slate-500">
                      <span>Home</span>
                      <span className="text-blue-600">Services</span>
                      <span>Portfolio</span>
                      <span>Contact</span>
                    </div>
                  </div>

                  {/* Fake Website Hero */}
                  <div className="flex-1 bg-gradient-to-br from-blue-50 to-white p-6 flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute right-[-20%] bottom-[-20%] w-[150px] h-[150px] bg-blue-600/10 rounded-full blur-2xl" />
                    <h3 className="text-[14px] font-bold text-slate-900 leading-tight mb-2">Digital Experiences<br /><span className="text-blue-600">That Drive Results</span></h3>
                    <p className="text-[6px] text-slate-500 max-w-[120px] mb-4 leading-relaxed">We create beautiful, high-performance websites that deliver real business impact.</p>
                    <div className="w-16 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white text-[6px] font-bold shadow-md">Explore More</div>

                    {/* Fake abstract graphics inside website */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 w-[100px] h-[70px] bg-white rounded-lg shadow-lg border border-slate-100 flex flex-col overflow-hidden">
                      <div className="h-1/2 bg-blue-100/50" />
                      <div className="h-1/2 p-2 flex gap-1 items-end">
                        <div className="flex-1 bg-blue-200 rounded-t-sm h-[60%]" />
                        <div className="flex-1 bg-blue-500 rounded-t-sm h-[100%]" />
                        <div className="flex-1 bg-blue-300 rounded-t-sm h-[40%]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Laptop Keyboard Base */}
              <div className="relative h-3 bg-slate-300 rounded-b-xl w-[106%] left-[-3%] shadow-[0_10px_20px_rgba(0,0,0,0.2)] border-t border-slate-200 flex justify-center">
                <div className="w-1/4 h-1.5 bg-slate-400 rounded-b-md" />
              </div>

              {/* Floating UI Elements */}
              <div className="absolute -top-10 left-10 p-3 bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_15px_35px_rgba(37,99,235,0.15)] border border-white flex items-center justify-center animate-[floating_5s_ease-in-out_infinite] z-20">
                <Code2 size={24} className="text-blue-600" />
              </div>

              <div className="absolute top-1/2 -left-12 p-3 bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_15px_35px_rgba(37,99,235,0.15)] border border-white flex flex-col gap-2 animate-[floating_6s_ease-in-out_infinite_0.5s] z-20">
                <div className="flex gap-1.5">
                  <div className="w-5 h-5 rounded bg-blue-600" />
                  <div className="w-5 h-5 rounded bg-blue-400" />
                  <div className="w-5 h-5 rounded bg-slate-800" />
                </div>
                <div className="flex justify-between items-end px-1">
                  <span className="text-[10px] font-bold text-slate-800">Aa</span>
                  <span className="text-[8px] font-bold text-slate-400">Aa</span>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-4 p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_15px_35px_rgba(37,99,235,0.15)] border border-white w-24 flex flex-col gap-2 animate-[floating_7s_ease-in-out_infinite_1s] z-20">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center mb-1">
                  <MonitorSmartphone size={16} className="text-blue-600" />
                </div>
                <div className="w-full h-1.5 bg-slate-200 rounded-full" />
                <div className="w-2/3 h-1.5 bg-slate-200 rounded-full" />
              </div>

            </div>
          </div>
        </div>

        {/* Right Feature Cards (30% on desktop -> col-span-4) */}
        <div className="lg:col-span-4 flex flex-col gap-4 lg:gap-6">
          {/* Card 1: Responsive Design */}
          <div onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); navigate("/contact"); }} className="flex-1 bg-white border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[1.5rem] p-5 lg:p-6 flex items-center justify-between group hover:border-blue-200 hover:shadow-[0_15px_35px_rgba(37,99,235,0.08)] transition-all duration-300 relative overflow-hidden cursor-pointer">
            <div className="w-[55%] flex flex-col z-10">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 mb-4">
                <MonitorSmartphone size={20} strokeWidth={2} />
              </div>
              <h4 className="text-[15px] font-bold text-slate-900 mb-1.5 group-hover:text-blue-600 transition-colors">Responsive Design</h4>
              <p className="text-[12px] text-slate-500 leading-relaxed">Pixel-perfect websites that look stunning on every device.</p>
            </div>

            {/* Illustration */}
            <div className="w-[45%] h-full absolute right-0 top-0 flex items-center justify-center pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity duration-500">
              <div className="relative w-full h-full flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
                {/* Desktop Monitor */}
                <div className="w-20 h-14 bg-slate-50 rounded-md border border-slate-200 shadow-sm flex flex-col overflow-hidden absolute left-2 top-6 group-hover:-translate-y-1 transition-transform duration-500">
                  <div className="w-full h-2 bg-slate-100 flex items-center px-1 gap-0.5">
                    <div className="w-1 h-1 rounded-full bg-slate-300" />
                  </div>
                  <div className="flex-1 bg-blue-50/50 p-1 flex flex-col gap-1">
                    <div className="w-full h-4 bg-blue-100 rounded-sm" />
                    <div className="w-1/2 h-1.5 bg-blue-200 rounded-sm" />
                  </div>
                </div>
                {/* Mobile Phone */}
                <div className="w-8 h-14 bg-white rounded-lg border-[3px] border-slate-800 shadow-lg absolute right-2 bottom-4 z-10 flex flex-col items-center pt-1 group-hover:translate-y-1 transition-transform duration-500">
                  <div className="w-3 h-0.5 bg-slate-700 rounded-full mb-1" />
                  <div className="w-full flex-1 bg-blue-50 flex flex-col gap-0.5 p-0.5">
                    <div className="w-full h-2.5 bg-blue-200 rounded-sm" />
                    <div className="w-full h-1 bg-slate-300 rounded-sm" />
                    <div className="w-3/4 h-1 bg-slate-300 rounded-sm" />
                  </div>
                </div>
                {/* Floating Elements */}
                <div className="absolute top-4 right-6 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center shadow-sm animate-pulse">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: E-Commerce Solutions */}
          <div onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); navigate("/contact"); }} className="flex-1 bg-white border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[1.5rem] p-5 lg:p-6 flex items-center justify-between group hover:border-blue-200 hover:shadow-[0_15px_35px_rgba(37,99,235,0.08)] transition-all duration-300 relative overflow-hidden cursor-pointer">
            <div className="w-[55%] flex flex-col z-10">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 mb-4">
                <ShoppingCart size={20} strokeWidth={2} />
              </div>
              <h4 className="text-[15px] font-bold text-slate-900 mb-1.5 group-hover:text-blue-600 transition-colors">E-Commerce Solutions</h4>
              <p className="text-[12px] text-slate-500 leading-relaxed">Powerful online stores built to convert and scale.</p>
            </div>

            {/* Illustration */}
            <div className="w-[45%] h-full absolute right-0 top-0 flex items-center justify-center pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity duration-500">
              <div className="relative w-full h-full flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
                {/* Web Window */}
                <div className="w-24 h-16 bg-white rounded-md border border-slate-200 shadow-md flex flex-col overflow-hidden absolute left-1 group-hover:-translate-x-1 transition-transform duration-500">
                  <div className="w-full h-2.5 bg-slate-50 border-b border-slate-100 flex items-center px-1 gap-0.5">
                    <div className="w-1 h-1 rounded-full bg-red-400" />
                    <div className="w-1 h-1 rounded-full bg-amber-400" />
                    <div className="w-1 h-1 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 bg-slate-50 flex items-center justify-center p-1.5">
                    <div className="w-12 h-10 bg-blue-100 rounded-sm shadow-sm flex flex-col items-center justify-center gap-1">
                      <div className="w-6 h-4 bg-blue-300 rounded-[2px]" />
                      <div className="w-4 h-1 bg-blue-400 rounded-full" />
                    </div>
                  </div>
                </div>
                {/* Floating Cart Icon */}
                <div className="w-10 h-10 bg-blue-600 rounded-xl shadow-lg absolute right-1 bottom-3 z-10 flex items-center justify-center group-hover:-translate-y-2 group-hover:rotate-6 transition-transform duration-500">
                  <ShoppingCart size={16} className="text-white" />
                </div>
                {/* Shopping Bag Back */}
                <div className="absolute right-8 bottom-6 opacity-30 group-hover:translate-x-1 transition-transform">
                  <ShoppingCart size={24} className="text-blue-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Custom Web Development */}
          <div onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); navigate("/contact"); }} className="flex-1 bg-white border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[1.5rem] p-5 lg:p-6 flex items-center justify-between group hover:border-blue-200 hover:shadow-[0_15px_35px_rgba(37,99,235,0.08)] transition-all duration-300 relative overflow-hidden cursor-pointer">
            <div className="w-[55%] flex flex-col z-10">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 mb-4">
                <Rocket size={20} strokeWidth={2} />
              </div>
              <h4 className="text-[15px] font-bold text-slate-900 mb-1.5 group-hover:text-blue-600 transition-colors">Custom Web Development</h4>
              <p className="text-[12px] text-slate-500 leading-relaxed">Tailored websites with clean code and future-ready architecture.</p>
            </div>

            {/* Illustration */}
            <div className="w-[45%] h-full absolute right-0 top-0 flex items-center justify-center pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity duration-500">
              <div className="relative w-full h-full flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
                {/* Code Editor */}
                <div className="w-24 h-16 bg-slate-900 rounded-md border border-slate-700 shadow-xl flex flex-col overflow-hidden absolute left-1 bottom-4 group-hover:translate-x-1 transition-transform duration-500">
                  <div className="w-full h-2.5 bg-slate-800 flex items-center px-1 gap-0.5">
                    <div className="w-1 h-1 rounded-full bg-slate-600" />
                    <div className="w-1 h-1 rounded-full bg-slate-600" />
                  </div>
                  <div className="flex-1 p-1.5 flex flex-col gap-1.5 justify-center">
                    <div className="w-3/4 h-1 bg-blue-400 rounded-sm" />
                    <div className="w-1/2 h-1 bg-emerald-400 rounded-sm ml-2" />
                    <div className="w-5/6 h-1 bg-purple-400 rounded-sm ml-2" />
                  </div>
                </div>
                {/* Floating Code badge */}
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg absolute right-2 top-3 z-10 flex items-center justify-center group-hover:-translate-y-2 transition-transform duration-500">
                  <Code2 size={18} className="text-white" />
                </div>
                {/* Glowing gear */}
                <div className="absolute right-4 bottom-2 text-slate-300 opacity-50 group-hover:animate-[spin_4s_linear_infinite] transition-all">
                  <Settings size={22} />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="bg-white border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center gap-10">

        <div className="lg:w-1/4">
          <h3 className="text-2xl font-display font-bold text-slate-900 leading-tight">
            Why Choose Our<br />Website Development?
          </h3>
          <div className="w-10 h-1 bg-blue-600 rounded-full mt-4" />
        </div>

        <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Search,
              title: "SEO Optimized",
              desc: "Built with best practices to rank higher and get found faster."
            },
            {
              icon: Zap,
              title: "High Performance",
              desc: "Lightning-fast websites for better user experience and conversions."
            },
            {
              icon: Palette,
              title: "Pixel Perfect Design",
              desc: "Beautiful, modern, and conversion-focused designs."
            },
            {
              icon: Shield,
              title: "Secure & Reliable",
              desc: "Security-first approach to protect your website and data."
            }
          ].map((item, i) => (
            <div key={i} className="flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4 shadow-sm group hover:scale-105 transition-transform duration-300">
                <item.icon size={22} strokeWidth={2} />
              </div>
              <h4 className="text-[15px] font-bold text-slate-900 mb-2">{item.title}</h4>
              <p className="text-[13px] text-slate-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

const CloudSolutionsTab = () => {
  const navigate = useNavigate();
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const handleNavigation = (path: string) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(path);
  };

  const cloudServices = [
    { id: "migration", title: "Cloud Migration", desc: "Migrate seamlessly. Modernize efficiently.", icon: Cloud, x: 18, y: 10 },
    { id: "hosting", title: "Cloud Hosting", desc: "High performance. Always available.", icon: Server, x: 81, y: 17 },
    { id: "security", title: "Cloud Security", desc: "Protect your data. Stay compliant.", icon: Shield, x: 10, y: 43 },
    { id: "monitoring", title: "Cloud Monitoring", desc: "Real-time insights. Proactive alerts.", icon: Activity, x: 89, y: 61 },
    { id: "backup", title: "Cloud Backup & Disaster Recovery", desc: "Be prepared. Recover fast.", icon: Database, x: 15, y: 83 },
    { id: "devops", title: "DevOps & Deployment", desc: "Automate. Deploy. Deliver faster.", icon: InfinityIcon, x: 70, y: 89 },
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

          {/* Ambient Glass Bubbles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-10" style={{ maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)' }}>
            {[...Array(15)].map((_, i) => {
              const size = Math.random() * 12 + 8; // 8px to 20px
              const left = Math.random() * 80 + 10; // 10% to 90%
              const top = Math.random() * 80 + 20; // 20% to 100%
              const duration = Math.random() * 15 + 15; // 15s to 30s
              const delay = Math.random() * -30; // Random negative delay
              const animationName = i % 2 === 0 ? 'ambient-bubble-1' : 'ambient-bubble-2';

              return (
                <div
                  key={i}
                  className="absolute rounded-full bg-blue-100/30 backdrop-blur-sm border border-white/40 shadow-[0_0_12px_rgba(59,130,246,0.3)]"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    left: `${left}%`,
                    top: `${top}%`,
                    animation: `${animationName} ${duration}s ease-in-out infinite`,
                    animationDelay: `${delay}s`,
                  }}
                />
              );
            })}
          </div>

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
            <div className="absolute -inset-16 bg-blue-500/35 sm:bg-blue-500/40 rounded-full blur-[40px] sm:blur-[50px]" />

            <div className="relative flex flex-col items-center justify-center text-center p-6 sm:p-8 min-w-[240px] sm:min-w-[280px] min-h-[190px] sm:min-h-[210px]">
              {/* Background Cloud Icon positioned higher and centered behind Cloud Infrastructure text */}
              <Cloud
                size={270}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[58%] text-blue-500/35 fill-blue-50/80 pointer-events-none stroke-[1.5] filter drop-shadow-md"
              />

              <div className="relative z-10 flex flex-col items-center justify-center -mt-1 sm:-mt-2">
                <Server size={28} className="text-blue-700 mb-1 drop-shadow-sm" strokeWidth={2.2} />
                <h3 className="text-slate-900 font-bold text-[15px] sm:text-[16.5px] leading-tight mb-0.5 whitespace-nowrap tracking-tight">Cloud Infrastructure</h3>
                <p className="text-slate-600 text-[10px] sm:text-[11px] font-semibold tracking-wide whitespace-nowrap">
                  Secure. Scalable. Reliable.
                </p>
              </div>
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
              <span className="truncate">Talk to Experts</span>
              <ArrowUpRight size={18} className="shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <button
              onClick={() => handleNavigation("/solutions/managed-it")}
              className="flex-1 flex items-center justify-center gap-2 px-4 sm:px-5 py-3.5 sm:py-4 bg-white border-[1.5px] border-primary text-primary text-[14px] sm:text-[15px] font-bold rounded-lg hover:bg-primary hover:text-white transition-all duration-300 shadow-sm group w-full min-w-0"
            >
              <span className="truncate">Explore Solutions</span>
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
              <span className="truncate">Explore More</span>
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
                        className={`transition-all duration-500 bg-white/90 backdrop-blur-xl border rounded-full p-2 sm:p-2.5 pr-4 sm:pr-6 flex items-center gap-3 sm:gap-4 min-w-[200px] ${isHovered
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
                <h3 className="text-sm font-semibold text-foreground mb-1">{s.title}</h3>
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
              <span className="truncate">Talk to Experts</span>
              <ArrowRight size={18} className="shrink-0 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => handleNavigation("/solutions/managed-it")}
              className="flex-1 flex items-center justify-center gap-2 px-4 sm:px-5 py-3.5 sm:py-4 bg-white border-[1.5px] border-slate-300 text-slate-700 text-[14px] sm:text-[15px] font-bold rounded-lg hover:border-slate-400 hover:text-slate-900 transition-all duration-300 shadow-sm group w-full min-w-0"
            >
              <span className="truncate">Explore More</span>
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
      <section className="pb-6 lg:pb-8">
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
          {activeTab === "Enterprise & AI Solutions" && <SoftwareAISolutionsTab />}
          {activeTab === "Website Development" && <WebsiteDevelopmentTab />}
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
