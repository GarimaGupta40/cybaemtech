import { useState, useRef, ReactNode } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ArrowLeft, RotateCcw, Check,
  Building2, ShoppingCart, Rocket, Palette, Megaphone,
  Inbox, Banknote, Layers, Users, Award,
  Sprout, Blocks, RefreshCcw, Zap,
  Lightbulb, TrendingUp, Server, Landmark, HelpCircle,
  Globe, BarChart3, Code2, PenTool, Target, GraduationCap, ShieldCheck
} from "lucide-react";
import { Link } from "react-router-dom";
import { MagneticButton } from "@/components/Navbar";
import { containerVariants, itemVariants } from "@/lib/animations";

/* ─── Quiz Data ─── */

interface QuizQuestion {
  number: string;
  text: string;
  sub: string;
  options: { value: string; icon: ReactNode; title: string; desc: string }[];
  cols1?: boolean;
}

const ICON_SIZE = 24;
const ICON_STROKE = 1.75;

const questions: QuizQuestion[] = [
  {
    number: "Question 01 / 04",
    text: "What are you building?",
    sub: "Pick the option closest to your project — this shapes everything we recommend.",
    options: [
      { value: "corporate", icon: <Building2 size={ICON_SIZE} strokeWidth={2} fill="#dbeafe" />, title: "Business Website", desc: "Company site to showcase services and generate leads" },
      { value: "ecommerce", icon: <ShoppingCart size={ICON_SIZE} strokeWidth={2} fill="#dbeafe" />, title: "Online Store", desc: "Sell products with payments and catalog" },
      { value: "startup", icon: <Rocket size={ICON_SIZE} strokeWidth={2} fill="#dbeafe" />, title: "SaaS / App", desc: "Build a platform users log into" },
      { value: "creative", icon: <Palette size={ICON_SIZE} strokeWidth={2} fill="#dbeafe" />, title: "Portfolio / Personal", desc: "Showcase work or create content" },
      { value: "landing", icon: <Megaphone size={ICON_SIZE} strokeWidth={2} fill="#dbeafe" />, title: "Landing Page", desc: "High-conversion campaign or single-page site" },
      { value: "ngo", icon: <GraduationCap size={ICON_SIZE} strokeWidth={2} fill="#dbeafe" />, title: "NGO / Educational / Trust", desc: "Informational site for nonprofits, schools, or trusts" },
    ],
  },
  {
    number: "Question 02 / 04",
    text: "What is the primary outcome you want from this platform?",
    sub: "Focus on the #1 outcome you want the website to drive.",
    options: [
      { value: "leads", icon: <Inbox size={ICON_SIZE} strokeWidth={2} fill="#dbeafe" />, title: "Generate Leads", desc: "Capture inquiries and build your sales pipeline" },
      { value: "sales", icon: <Banknote size={ICON_SIZE} strokeWidth={2} fill="#dbeafe" />, title: "Drive Sales", desc: "Sell products/services with online payments" },
      { value: "product", icon: <Layers size={ICON_SIZE} strokeWidth={2} fill="#dbeafe" />, title: "Deliver a Product", desc: "Users log in and use your platform" },
      { value: "audience", icon: <Users size={ICON_SIZE} strokeWidth={2} fill="#dbeafe" />, title: "Grow Audience", desc: "Attract traffic via content and SEO" },
      { value: "credibility", icon: <Award size={ICON_SIZE} strokeWidth={2} fill="#dbeafe" />, title: "Build Authority", desc: "Showcase expertise and build trust" },
    ],
  },
  {
    number: "Question 03 / 04",
    text: "Where are you starting from?",
    sub: "This shapes how we'd approach your build.",
    options: [
      { value: "none", icon: <Sprout size={ICON_SIZE} strokeWidth={2} fill="#dbeafe" />, title: "Starting Fresh", desc: "No existing website or product" },
      { value: "basic", icon: <Blocks size={ICON_SIZE} strokeWidth={2} fill="#dbeafe" />, title: "Basic Site / MVP Exists", desc: "Simple site or prototype that needs a proper build" },
      { value: "old", icon: <RefreshCcw size={ICON_SIZE} strokeWidth={2} fill="#dbeafe" />, title: "Needs Complete Rebuild", desc: "Current system is outdated or not scalable" },
      { value: "upgrade", icon: <Zap size={ICON_SIZE} strokeWidth={2} fill="#dbeafe" />, title: "Improve & Scale Existing", desc: "Add features, improve performance, or scale" },
    ],
  },
  {
    number: "Question 04 / 04",
    text: "What level of investment are you comfortable with?",
    sub: "This helps us recommend the right scope and approach for your budget.",
    options: [
      { value: "starter", icon: <Lightbulb size={ICON_SIZE} strokeWidth={2} fill="#dbeafe" />, title: "Starter (₹50K – ₹1.5L)", desc: "Simple sites, landing pages, MVPs" },
      { value: "growth", icon: <TrendingUp size={ICON_SIZE} strokeWidth={2} fill="#dbeafe" />, title: "Growth (₹1.5L – ₹5L)", desc: "Business websites, small apps" },
      { value: "advanced", icon: <Server size={ICON_SIZE} strokeWidth={2} fill="#dbeafe" />, title: "Advanced (₹5L – ₹15L)", desc: "Custom platforms, dashboards, integrations" },
      { value: "enterprise", icon: <Landmark size={ICON_SIZE} strokeWidth={2} fill="#dbeafe" />, title: "Enterprise (₹15L+)", desc: "Complex systems, high-scale architecture" },
      { value: "unsure", icon: <HelpCircle size={ICON_SIZE} strokeWidth={2} fill="#dbeafe" />, title: "Not sure yet", desc: "Need help deciding based on requirements" },
    ],
  },
];

interface ResultData {
  icon: ReactNode;
  tag: string;
  title: string;
  headline: string;
  highlightedText: string;
  desc: string;
  features: string[];
  timeline: string[];
}

const RESULT_ICON = 28;

const results: Record<string, ResultData> = {
  corporate_credibility: {
    icon: <Building2 size={RESULT_ICON} strokeWidth={1.5} />, tag: "Your Recommendation", title: "High-Authority Corporate Platform",
    headline: "You need a platform that ", highlightedText: "commands trust",
    desc: "Enterprise buyers decide in seconds. Your platform needs impeccable design, lightning load times, and a content architecture that positions your firm as the definitive choice in your category. We'd build this on a headless CMS stack with performance-first engineering.",
    features: ["Executive-grade UI/UX", "Case study & credibility engine", "Enterprise SEO architecture", "Multi-team CMS workflow", "Performance SLA commitment", "LinkedIn/CRM integration"],
    timeline: ["Discovery & Strategy Workshop", "UI/UX Design & Review", "Development & CMS Setup", "QA, SEO & Launch"],
  },
  ecommerce_sales: {
    icon: <ShoppingCart size={RESULT_ICON} strokeWidth={1.5} />, tag: "Your Recommendation", title: "Conversion-Optimised E-commerce Platform",
    headline: "You need a platform where every page ", highlightedText: "earns its keep",
    desc: "Revenue-first architecture: optimised product pages, frictionless checkout, abandoned cart flows, and analytics baked in from day one. We engineer for conversion rate, not just aesthetics — every element has a job to do.",
    features: ["Advanced product catalogue", "One-click checkout flow", "Cart abandonment recovery", "Inventory & order management", "Mobile-first responsive UI", "Payment gateway integration"],
    timeline: ["Catalogue & UX Planning", "Design & Conversion Architecture", "Build & Integration Phase", "Testing, GTM & Launch"],
  },
  startup_product: {
    icon: <Rocket size={RESULT_ICON} strokeWidth={1.5} />, tag: "Your Recommendation", title: "SaaS / Web Application Platform",
    headline: "You need an app platform ", highlightedText: "built to scale",
    desc: "Scalable frontend + backend architecture, user authentication, role-based access, and a clean API layer your product will grow on. We approach SaaS builds as infrastructure investments — every technical decision is made with 10x growth in mind.",
    features: ["Auth & role-based access", "API-first architecture", "Dashboard & analytics UI", "Subscription & billing logic", "CI/CD pipeline setup", "Scalable cloud infrastructure"],
    timeline: ["Product Architecture Review", "Design System & Prototyping", "Core Feature Development", "Beta, Feedback & Launch"],
  },
  creative_leads: {
    icon: <PenTool size={RESULT_ICON} strokeWidth={1.5} />, tag: "Your Recommendation", title: "Portfolio & Lead-Generation Platform",
    headline: "Your work deserves a platform that ", highlightedText: "does the selling for you",
    desc: "A beautifully crafted platform that showcases your best work, communicates your process, and converts visitors into clients without you lifting a finger. We design for the feeling a prospect gets — and the action they take.",
    features: ["Portfolio with case studies", "Lead capture & nurture flow", "Personal brand storytelling", "SEO-optimised structure", "Fast-load gallery system", "Enquiry & booking flow"],
    timeline: ["Brand & Direction Session", "Design Concepts & Review", "Build & Content Integration", "Review, Polish & Launch"],
  },
  landing_leads: {
    icon: <Target size={RESULT_ICON} strokeWidth={1.5} />, tag: "Your Recommendation", title: "High-Conversion Landing Page",
    headline: "You need a page that ", highlightedText: "turns traffic into action",
    desc: "A single-page powerhouse engineered for one job: conversion. Every section, headline, and CTA is tested and optimised to move visitors from curiosity to commitment. We pair persuasive copy architecture with performance engineering.",
    features: ["A/B test-ready structure", "Conversion-optimised layout", "Speed-first engineering", "Analytics & heatmap ready", "Mobile-perfect design", "CRM & email integration"],
    timeline: ["Goal & Audience Mapping", "Copy & Design Sprint", "Build & Optimise", "Launch & Iterate"],
  },
};

const defaultResult: ResultData = {
  icon: <Globe size={RESULT_ICON} strokeWidth={1.5} />, tag: "Your Recommendation", title: "Custom Web Platform",
  headline: "You need a ", highlightedText: "purpose-built platform",
  desc: "Based on your inputs, we'd recommend a consultation first — your combination of goals and context suggests a custom approach is the right move. Cybaem specialises in exactly these kinds of non-standard builds.",
  features: ["Custom architecture planning", "Goal-aligned UX design", "Performance-first development", "Analytics from day one", "Scalable infrastructure", "Dedicated project team"],
  timeline: ["Discovery & Requirements", "Architecture & Design", "Development & Testing", "Launch & Optimisation"],
};

/* ─── Component ─── */

const stepsLabel = [
  { label: "Your Project" },
  { label: "Your Goals" },
  { label: "Key Features" },
  { label: "Preferences" },
];

const PlatformFitFinder = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);

  const selectOption = (questionIdx: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionIdx]: value }));
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
    else setShowResult(true);
  };

  const prevStep = () => {
    if (showResult) {
      setShowResult(false);
    } else if (step > 0) {
      setStep(step - 1);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setShowResult(false);
  };

  const getResult = (): ResultData => {
    const key = `${answers[0]}_${answers[1]}`;
    return results[key] || defaultResult;
  };

  const currentDisabled = answers[step] === undefined;
  const result = getResult();

  return (
    <section ref={sectionRef} className="py-8 lg:py-12 section-border bg-[#F4F7FB] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1000px]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header Grid */}
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-xs tracking-wider uppercase border border-primary/20 mb-6">
                <Target size={14} /> PLATFORM FIT FINDER
              </div>
              <h2 className="font-display text-4xl lg:text-[42px] font-bold text-[#051139] leading-[1.15] mb-6">
                Discover your <span className="text-primary italic font-serif">perfect</span><br />
                web platform in 60 seconds
              </h2>
              <p className="text-slate-600 text-[17px] leading-relaxed max-w-md font-medium">
                Answer 4 quick questions and get a tailored platform recommendation built around your actual business goals.
              </p>
            </div>

            <div className="relative h-[250px] lg:h-[300px] flex items-center justify-center">
              <img src="/images/web-platform.png" alt="Platform Fit Finder" className="w-full lg:w-[120%] max-w-[500px] object-contain object-center drop-shadow-xl lg:translate-x-8" onError={(e) => { e.currentTarget.style.display = 'none' }} />
            </div>
          </div>

          {/* Progress Bar Area */}
          <div className="relative max-w-4xl mx-auto mb-5 px-4">
            {/* Line behind steps */}
            <div className="absolute top-4 left-[5%] right-[5%] h-[2px] bg-slate-200 z-0"></div>

            <div className="flex justify-between relative z-10">
              {stepsLabel.map((s, i) => {
                const isActive = step === i && !showResult;
                const isCompleted = step > i || showResult;
                return (
                  <div key={i} className="flex flex-col items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${isActive ? "bg-primary text-primary-foreground shadow-[0_0_0_4px_hsl(var(--primary)/0.2)]" :
                        isCompleted ? "bg-primary text-primary-foreground" : "bg-white border-2 border-slate-200 text-slate-400"
                      }`}>
                      {isCompleted ? <Check size={16} strokeWidth={3} /> : i + 1}
                    </div>
                    <span className={`text-[11px] font-semibold tracking-wide ${isActive || isCompleted ? "text-primary" : "text-slate-400"}`}>
                      {s.label}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-100 p-5 lg:p-7 mb-8 max-w-4xl mx-auto min-h-[380px]">
            <AnimatePresence mode="wait">
              {!showResult ? (
                <motion.div
                  key={`q-${step}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-primary mb-3">
                    {questions[step].number}
                  </p>
                  <h3 className="font-display text-xl sm:text-[26px] font-bold mb-1.5 text-[#051139]">
                    {questions[step].text}
                  </h3>
                  <p className="text-[13px] text-slate-500 mb-5 font-medium">
                    {questions[step].sub}
                  </p>

                  <div className={`grid gap-3 ${questions[step].cols1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}>
                    {questions[step].options.map((opt) => {
                      const isSelected = answers[step] === opt.value;
                      return (
                        <button
                          key={opt.value}
                          onClick={() => selectOption(step, opt.value)}
                          className={`flex items-start gap-3.5 p-3 rounded-[14px] border-[1.5px] text-left transition-all ${isSelected
                              ? "border-primary shadow-[0_0_0_1px_hsl(var(--primary)/0.2)] bg-white"
                              : "border-slate-100 hover:border-slate-300 hover:bg-slate-50 bg-white"
                            }`}
                        >
                          {/* Checkbox square */}
                          <div className={`w-[18px] h-[18px] rounded-[4px] border-[1.5px] mt-1 shrink-0 flex items-center justify-center transition-all ${isSelected ? "bg-primary border-primary text-primary-foreground" : "bg-white border-slate-300"}`}>
                            {isSelected && <Check size={11} strokeWidth={3} />}
                          </div>

                          {/* Icon Box */}
                          <div className="w-10 h-10 rounded-[10px] bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                            {opt.icon}
                          </div>

                          {/* Text */}
                          <div className="flex-1 mt-0.5">
                            <p className="font-bold text-[13px] text-[#051139] mb-0.5">{opt.title}</p>
                            <p className="text-[11px] text-slate-500 leading-snug font-medium">{opt.desc}</p>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Nav */}
                  <div className="flex items-center justify-between mt-4">
                    {step > 0 ? (
                      <button
                        onClick={prevStep}
                        className="flex items-center gap-2 px-5 py-3 text-sm text-slate-500 hover:text-[#051139] font-medium transition-all"
                      >
                        <ArrowLeft size={16} /> Back
                      </button>
                    ) : (
                      <div />
                    )}
                    <button
                      onClick={nextStep}
                      disabled={currentDisabled}
                      className="bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {step === 3 ? "See My Fit" : "Continue"} <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                      {result.icon}
                    </div>
                    <div>
                      <p className="text-[11px] tracking-[0.08em] uppercase font-semibold text-primary mb-1">{result.tag}</p>
                      <p className="font-display text-xl font-extrabold text-[#051139]">{result.title}</p>
                    </div>
                  </div>

                  <h3 className="font-display text-xl sm:text-[30px] font-extrabold leading-[1.25] mb-3.5 text-[#051139]">
                    {result.headline}<span className="text-primary italic">{result.highlightedText}</span>
                  </h3>
                  <p className="text-[15px] text-slate-600 leading-[1.7] mb-7 font-medium">
                    {result.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                    {result.features.map((f) => (
                      <div key={f} className="flex items-center gap-2.5 bg-slate-50 border border-slate-100 rounded-[10px] px-3.5 py-3 text-[13px] font-medium text-slate-700">
                        <div className="w-[7px] h-[7px] rounded-full bg-primary shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>

                  <div className="bg-primary/5 border border-primary/10 rounded-[14px] p-5 mb-7">
                    <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-primary mb-3">
                      Typical Build Roadmap
                    </p>
                    <div className="space-y-2">
                      {result.timeline.map((t, i) => (
                        <div key={i} className="flex items-center gap-3 text-[13px] font-medium text-slate-700">
                          <div className="w-[22px] h-[22px] rounded-full bg-white border border-slate-200 flex items-center justify-center text-[10px] font-bold text-primary shrink-0 shadow-sm">
                            {i + 1}
                          </div>
                          {t}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <MagneticButton>
                      <Link
                        to="/contact"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 text-[15px] font-display font-bold bg-primary text-primary-foreground rounded-xl hover:-translate-y-0.5 hover:shadow-[0_10px_28px_hsl(var(--primary)/0.35)] transition-all"
                      >
                        Book a Free Strategy Session <ArrowRight size={16} />
                      </Link>
                    </MagneticButton>
                    <button
                      onClick={reset}
                      className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-display font-semibold border border-slate-200 text-slate-600 rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all"
                    >
                      <RotateCcw size={14} /> Start Over
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom Features Strip */}
          <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-xl border border-slate-100 rounded-3xl p-6 lg:p-8 flex flex-wrap gap-4 lg:gap-6 justify-between items-center shadow-sm relative z-20">
            <div className="flex items-center gap-3 lg:gap-4 flex-1 min-w-[200px] xl:min-w-0">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white shadow-sm border border-primary/10 flex items-center justify-center shrink-0 text-primary">
                <Target size={22} strokeWidth={2.5} fill="#dbeafe" />
              </div>
              <div>
                <h4 className="font-bold text-[#051139] text-[12px] lg:text-[13px] mb-1">Personalized for You</h4>
                <p className="text-[10px] lg:text-[11px] text-slate-500 font-medium leading-tight">Get a platform match based on<br />your unique business needs.</p>
              </div>
            </div>

            <div className="hidden xl:block w-px h-12 bg-slate-100 shrink-0" />

            <div className="flex items-center gap-3 lg:gap-4 flex-1 min-w-[200px] xl:min-w-0">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white shadow-sm border border-primary/10 flex items-center justify-center shrink-0 text-primary">
                <Zap size={22} strokeWidth={2.5} fill="#dbeafe" />
              </div>
              <div>
                <h4 className="font-bold text-[#051139] text-[12px] lg:text-[13px] mb-1">Saves Time & Effort</h4>
                <p className="text-[10px] lg:text-[11px] text-slate-500 font-medium leading-tight">Skip the confusion and focus<br />on what truly fits.</p>
              </div>
            </div>

            <div className="hidden xl:block w-px h-12 bg-slate-100 shrink-0" />

            <div className="flex items-center gap-3 lg:gap-4 flex-1 min-w-[200px] xl:min-w-0">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white shadow-sm border border-primary/10 flex items-center justify-center shrink-0 text-primary">
                <ShieldCheck size={22} strokeWidth={2.5} fill="#dbeafe" />
              </div>
              <div>
                <h4 className="font-bold text-[#051139] text-[12px] lg:text-[13px] mb-1">Strategic Recommendations</h4>
                <p className="text-[10px] lg:text-[11px] text-slate-500 font-medium leading-tight">Built on best practices and<br />real-world results.</p>
              </div>
            </div>

            <div className="hidden xl:block w-px h-12 bg-slate-100 shrink-0" />

            <div className="flex items-center gap-3 lg:gap-4 flex-1 min-w-[200px] xl:min-w-0">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white shadow-sm border border-primary/10 flex items-center justify-center shrink-0 text-primary">
                <BarChart3 size={22} strokeWidth={2.5} fill="#dbeafe" />
              </div>
              <div>
                <h4 className="font-bold text-[#051139] text-[12px] lg:text-[13px] mb-1">Built for Growth</h4>
                <p className="text-[10px] lg:text-[11px] text-slate-500 font-medium leading-tight">Scalable platforms that grow<br />with your business.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformFitFinder;
