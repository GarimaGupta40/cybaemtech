import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { itAugmentationSeoData } from "@/data/seo/itAugmentationSeo";
import {
  ArrowUpRight, ArrowRight, Users, Monitor, Briefcase, Headphones, Server, FileText,
  Code, Cloud, Shield, TestTube, UserSearch, Building2, Heart, ShoppingBag, Truck,
  Cpu, Factory, Clock, Calendar, Target, Shuffle, CheckCircle, Lock, Zap,
  UserCheck, Phone as PhoneIcon, BarChart3, Globe, Star, Mail, Quote, Rocket, Settings
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MagneticButton } from "@/components/Navbar";
import { containerVariants, itemVariants } from "@/lib/animations";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { solutionsData } from "@/data/solutionsData";
import TACImage from "@/assets/TAC.png";

const data = solutionsData["it-staff-augmentation"];

/* ─── Data ─── */

const services = [
  {
    icon: Users,
    title: "Dedicated Onsite IT Engineers",
    description: "Get experienced IT professionals working directly at your office, fully integrated with your team culture and workflows.",
    features: ["Full-time onsite presence", "Seamless team integration", "Direct communication & collaboration", "Immediate issue resolution"],
  },
  {
    icon: Monitor,
    title: "Remote IT Specialists",
    description: "Access top-tier IT talent from anywhere in the world, working remotely but fully committed to your projects.",
    features: ["Global talent pool access", "Cost-effective solutions", "Flexible working hours", "Scalable team size"],
  },
  {
    icon: Briefcase,
    title: "Project-Based Staffing",
    description: "Hire skilled professionals for specific projects with defined scope, timeline, and deliverables.",
    features: ["Clear project milestones", "Fixed budget control", "Specialized expertise", "End-to-end delivery"],
  },
  {
    icon: Headphones,
    title: "Helpdesk Outsourcing",
    description: "24/7 IT support desk services to handle user queries, technical issues, and maintain service levels.",
    features: ["L1/L2/L3 support tiers", "Ticketing & SLA management", "Multi-channel support", "Knowledge base maintenance"],
  },
  {
    icon: Server,
    title: "Network & System Admins",
    description: "Expert administrators to manage, monitor, and optimize your network infrastructure and systems.",
    features: ["Server & network management", "Security & patch updates", "Performance monitoring", "Disaster recovery planning"],
  },
  {
    icon: FileText,
    title: "Contract / Long-Term Hiring",
    description: "Flexible contract arrangements for extended engagements, from 6 months to multi-year commitments.",
    features: ["Long-term stability", "Contract-to-hire options", "Competitive rates", "Easy contract renewals"],
  },
];

const resourceCategories = [
  {
    icon: Code,
    title: "Software & Web Developers",
    skills: ["Full Stack (MEAN, MERN, LAMP)", "React, Angular, Vue.js", "Java, .NET, Node.js", "Flutter, iOS/Android"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps Engineers",
    skills: ["AWS, Azure, GCP", "Jenkins, GitHub Actions", "Terraform, Ansible", "Docker, Kubernetes"],
  },
  {
    icon: Server,
    title: "IT Support & Infrastructure",
    skills: ["L1–L3 Support", "SysAdmins (Win/Linux)", "Cisco, Fortinet", "Helpdesk, SLA"],
  },
  {
    icon: Shield,
    title: "Cybersecurity & Compliance",
    skills: ["SOC, Incident Response", "SIEM, IAM, MFA", "Splunk, QRadar", "Firewall: Fortinet, Palo Alto"],
  },
  {
    icon: TestTube,
    title: "QA & Testing Engineers",
    skills: ["Manual & Automation", "Selenium, Cypress", "JMeter, LoadRunner", "Test Strategies"],
  },
  {
    icon: UserSearch,
    title: "IT Recruiters & Coordinators",
    skills: ["Tech Hiring", "Screening & Validation", "Onboarding", "HR Compliance"],
  },
];

const industries = [
  { icon: Building2, name: "Banking & Financial Services (BFSI)" },
  { icon: Heart, name: "Healthcare & Pharma" },
  { icon: ShoppingBag, name: "Retail & E-Commerce" },
  { icon: Truck, name: "Logistics & Transportation" },
  { icon: Cpu, name: "Enterprise IT & Tech Startups" },
  { icon: Factory, name: "Manufacturing & Engineering" },
];

const engagementModels = [
  { icon: Clock, title: "Hourly", description: "Ideal for agile teams and short-term assignments. Gain full flexibility and pay-as-you-go advantages." },
  { icon: Calendar, title: "Monthly (Dedicated)", description: "Get fully dedicated engineers every month, embedded into your team and focused on consistent delivery." },
  { icon: Target, title: "Project-Based", description: "End-to-end project delivery with clear timelines and scope. Best for defined deliverables and milestones." },
  { icon: Shuffle, title: "Onsite + Offshore Hybrid", description: "Leverage the perfect mix of in-person collaboration and offshore scalability to maximize ROI." },
];

const hiringSteps = [
  { step: 1, title: "Requirement Understanding", description: "We engage with you to understand project goals, tech stack, and talent expectations.", icon: UserSearch },
  { step: 2, title: "Candidate Screening", description: "Receive matched, verified profiles of top-tier candidates within 24-48 hours.", icon: Users },
  { step: 3, title: "Interview & Selection", description: "Conduct direct interviews and technical assessments to ensure the best fit.", icon: CheckCircle },
  { step: 4, title: "Onboarding & Support", description: "We handle all HR, compliance, NDAs, infrastructure, and ongoing support.", icon: BarChart3 },
];

const whyCybaem = [
  { icon: Lock, title: "NDA & Compliance Ready", description: "We strictly adhere to non-disclosure agreements and legal compliance at every stage.", image: "/images/it-staff-augmentation/NDA & Compliance.png" },
  { icon: Zap, title: "Agile & Remote Collaboration", description: "Agile teams that integrate smoothly with your workflow — remote-ready and responsive.", image: "/images/it-staff-augmentation/Agile and Remote collaboration.png" },
  { icon: UserCheck, title: "Dedicated Account Manager", description: "A single point of contact ensures aligned goals and personalized support.", image: "/images/it-staff-augmentation/Dedicated account manager.png" },
  { icon: PhoneIcon, title: "24/7 Resource Availability", description: "Choose round-the-clock engagement models to never miss a milestone.", image: "/images/it-staff-augmentation/24-7 resource availability.png" },
  { icon: BarChart3, title: "Work Tracking Tools", description: "Integrated tools like Jira, Trello, and Asana keep progress transparent and measurable.", image: "/images/it-staff-augmentation/Work Tracking tools.png" },
  { icon: Star, title: "Monthly Performance Reviews", description: "Transparent metrics and reviews to assess team performance and ensure accountability.", image: "/images/it-staff-augmentation/Monthly performance.png" },
];

const globalDelivery = [
  { region: "USA", focus: "SaaS, Healthcare IT, Managed Services", flagUrl: "https://flagcdn.com/us.svg" },
  { region: "UK", focus: "Fintech, eCommerce, Cloud Startups", flagUrl: "https://flagcdn.com/gb.svg" },
  { region: "UAE", focus: "Government, Oil & Gas, Construction Tech", flagUrl: "https://flagcdn.com/ae.svg" },
  { region: "Australia", focus: "EdTech, Agencies, Remote Infrastructure", flagUrl: "https://flagcdn.com/au.svg" },
  { region: "Canada & Europe", focus: "AI, Cybersecurity, Logistics", flagUrl: "https://flagcdn.com/ca.svg" },
];


/* ─── Sections ─── */

const Hero = () => {
  const renderHeadline = (text: string) => {
    const parts = text.split("instantly");
    if (parts.length > 1) {
      return (
        <>
          {parts[0]}<span className="text-primary">instantly</span>{parts[1]}
        </>
      );
    }
    return text;
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 bg-[#0a1128]">
      <div className="absolute inset-0 z-0">
        <img src={data.heroImage} alt="IT Staff Augmentation" className="w-full h-full object-cover object-right" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030919] via-[#030919]/90 to-transparent" />
      </div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-2xl">
          <motion.h1 variants={itemVariants} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-white whitespace-pre-wrap">
            {renderHeadline(data.heroHeadline)}
          </motion.h1>
          <motion.p variants={itemVariants} className="text-base lg:text-lg text-white/80 leading-relaxed max-w-xl mb-8">
            {data.heroSubheadline}
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 mb-10">
            {data.heroKeywords.map((kw) => (
              <div key={kw} className="flex items-center gap-2">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 border border-primary/30">
                  <CheckCircle size={12} className="text-primary" />
                </div>
                <span className="text-sm font-semibold text-white/90">
                  {kw}
                </span>
              </div>
            ))}
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
            <MagneticButton>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity border border-primary">
                Hire Top Talent <ArrowRight size={16} />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold bg-transparent text-white border border-white/30 rounded hover:bg-white/10 transition-colors">
                Talk to an Expert
              </Link>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const cardImages = [
    "/images/it-staff-augmentation/Dedicated Onsite IT Engineers.png",
    "/images/it-staff-augmentation/Remote-IT-Specialists.png",
    "/images/it-staff-augmentation/Project-Based-Staffing.png",
    "/images/it-staff-augmentation/Helpdesk Outsourcing.png",
    "/images/it-staff-augmentation/Network & System Admins.png",
    "/images/it-staff-augmentation/Contract  Long-Term Hiring.png",
  ];

  const cardColors = [
    { bg: "bg-blue-600", text: "text-blue-600" },
    { bg: "bg-purple-600", text: "text-purple-600" },
    { bg: "bg-[#059669]", text: "text-[#059669]" },
    { bg: "bg-blue-700", text: "text-blue-700" },
    { bg: "bg-teal-600", text: "text-teal-600" },
    { bg: "bg-orange-500", text: "text-orange-500" },
  ];

  return (
    <section ref={ref} className="py-12 lg:py-16 bg-[#fafbfc]">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <div className="text-center mb-12">
            <motion.span variants={itemVariants} className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary block mb-2">
              Our IT Staff Augmentation Services
            </motion.span>
            <motion.h2 variants={itemVariants} className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-[#0a1128] mb-3">
              Staffing Solutions for Every <span className="text-primary italic">Need</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-sm text-gray-500 max-w-2xl mx-auto">
              Choose from our comprehensive range of staffing solutions designed to meet your unique business needs.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, idx) => {
              const color = cardColors[idx];
              const image = cardImages[idx];
              return (
                <motion.div key={svc.title} variants={itemVariants} className="bg-white rounded-2xl overflow-hidden shadow-[0_0px_15px_rgba(0,0,0,0.06)] border border-gray-100 hover:shadow-[0_0px_25px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col">
                  <div className="h-48 w-full relative shrink-0">
                    <img src={image} alt={svc.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 pt-10 relative flex-grow flex flex-col bg-white">
                    <div className={`absolute -top-6 left-6 w-12 h-12 rounded-xl flex items-center justify-center text-white ${color.bg} shadow-lg border-4 border-white`}>
                      <svc.icon size={20} strokeWidth={2} />
                    </div>
                    <h3 className="font-display text-[17px] font-bold text-[#0a1128] mb-4">{svc.title}</h3>
                    <ul className="space-y-2">
                      {svc.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-[12px] text-gray-600 font-medium">
                          <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${color.bg}`}>
                            <CheckCircle size={8} className="text-white" strokeWidth={4} />
                          </div>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div variants={itemVariants} className="mt-16 bg-white rounded-2xl p-6 shadow-[0_0px_15px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-blue-600/10 flex items-center justify-center shrink-0 border border-blue-600/20">
                <Users size={24} className="text-blue-600" />
              </div>
              <div>
                <h4 className="font-display text-lg font-bold text-[#0a1128]">Get the Right Talent, Exactly When You Need</h4>
                <p className="text-sm text-gray-500 mt-1">Scale your team with pre-vetted IT professionals — fast, flexible, and reliable.</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 md:gap-12 shrink-0 md:pl-8 border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 w-full md:w-auto">
              <div className="flex flex-col items-center text-center gap-2">
                <Rocket size={24} className="text-blue-600" strokeWidth={1.5} />
                <span className="text-[11px] font-bold text-[#0a1128] uppercase leading-tight">Fast<br />Onboarding</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <CheckCircle size={24} className="text-blue-600" strokeWidth={1.5} />
                <span className="text-[11px] font-bold text-[#0a1128] uppercase leading-tight">Quality<br />Assurance</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <Settings size={24} className="text-blue-600" strokeWidth={1.5} />
                <span className="text-[11px] font-bold text-[#0a1128] uppercase leading-tight">Flexible<br />Engagement</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <Globe size={24} className="text-blue-600" strokeWidth={1.5} />
                <span className="text-[11px] font-bold text-[#0a1128] uppercase leading-tight">Cost<br />Optimized</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const ResourcesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section ref={ref} className="py-12 lg:py-16 bg-[#fafbfc]">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <div className="text-center mb-10">
            <motion.span variants={itemVariants} className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary block mb-2">
              Our Resource Categories
            </motion.span>
            <motion.h2 variants={itemVariants} className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-[#0a1128] mb-3">
              Handpicked IT <span className="text-primary italic">Professionals</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-sm text-gray-500 max-w-2xl mx-auto">
              Aligned with your goals, tech stack & project timelines.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resourceCategories.map((cat) => (
              <motion.div key={cat.title} variants={itemVariants} className="bg-white rounded-2xl p-6 px-5 shadow-[0_0px_15px_rgba(0,0,0,0.06)] border border-gray-100 hover:shadow-[0_0px_25px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col relative group">
                <div className="flex flex-col items-center mb-6">
                  <h3 className="font-display text-[15px] font-bold text-[#0a1128] leading-snug mb-3 text-center">{cat.title}</h3>
                  <div className="w-6 h-[2px] bg-[#1d4ed8] rounded-full"></div>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-[45%] shrink-0 flex flex-col items-center justify-center">
                    <img
                      src={`/images/it-staff-augmentation/${cat.title}.png`}
                      alt={cat.title}
                      className="w-full h-auto object-contain max-h-36"
                    />
                  </div>
                  <div className="w-[55%] flex flex-col">
                    <ul className="space-y-3.5">
                      {cat.skills.map((s) => (
                        <li key={s} className="flex items-start gap-2.5 text-[11px] text-gray-600 font-medium leading-tight">
                          <span className="w-1 h-1 mt-1.5 bg-[#1d4ed8] shrink-0 rounded-full" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-auto flex justify-end">
                  <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-md hover:opacity-90 transition-opacity cursor-pointer mt-2">
                    <ArrowRight size={12} strokeWidth={2.5} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-12 bg-[#f0f5ff] rounded-2xl p-6 px-8 border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-[#1d4ed8] flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/20">
                <Users size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-display text-[17px] font-bold text-[#0a1128]">Need a Custom Staffing Solution?</h4>
                <p className="text-[13px] text-gray-500 mt-1">We'll help you build the right team with the right skills — fast.</p>
              </div>
            </div>
            <MagneticButton>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 text-[13px] font-bold bg-[#1d4ed8] text-white rounded-lg hover:bg-blue-800 transition-colors shadow-md">
                Talk to Our Experts <ArrowRight size={16} />
              </Link>
            </MagneticButton>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

const IndustriesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const iconColors = [
    { bg: "bg-blue-50 border-blue-100", text: "text-blue-600" },
    { bg: "bg-purple-50 border-purple-100", text: "text-purple-600" },
    { bg: "bg-emerald-50 border-emerald-100", text: "text-emerald-600" },
    { bg: "bg-indigo-50 border-indigo-100", text: "text-indigo-600" },
    { bg: "bg-teal-50 border-teal-100", text: "text-teal-600" },
    { bg: "bg-orange-50 border-orange-100", text: "text-orange-600" },
  ];

  return (
    <section ref={ref} className="py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <div className="text-center mb-10">
            <motion.span variants={itemVariants} className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary block mb-2 opacity-60">
              DOMAIN EXPERTISE
            </motion.span>
            <motion.h2 variants={itemVariants} className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-[#0a1128] mb-3">
              Specialized <span className="text-primary italic">Expertise</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-sm text-gray-500 max-w-2xl mx-auto">
              Access top talent across a wide range of technologies.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((ind, idx) => {
              const color = iconColors[idx % iconColors.length];
              return (
                <motion.div key={ind.name} variants={itemVariants} className="bg-white rounded-2xl p-6 text-center shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-50 hover:shadow-[0_4px_25px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center min-h-[140px]">
                  <div className={`w-12 h-12 rounded-2xl ${color.bg} flex items-center justify-center mb-4 border`}>
                    <ind.icon size={24} className={color.text} strokeWidth={1.5} />
                  </div>
                  <p className="text-[12px] font-bold text-[#0a1128] leading-tight px-2">{ind.name}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const EngagementSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section ref={ref} className="py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="bg-[#f4f7fc] rounded-[40px] p-10 lg:p-16 relative overflow-hidden">
          {/* Background Map */}
          <div
            className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: "url('/images/world-map.svg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}
          />

          <div className="relative z-10 text-center mb-12">
            <motion.span variants={itemVariants} className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary block mb-2 opacity-60">
              Engagement Models
            </motion.span>
            <motion.h2 variants={itemVariants} className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-[#0a1128] mb-3">
              Flexible <span className="text-primary italic">Hiring</span> Structures
            </motion.h2>
            <motion.p variants={itemVariants} className="text-sm text-gray-500 max-w-2xl mx-auto">
              Choose the engagement model that fits your business needs.
            </motion.p>
          </div>

          <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {engagementModels.map((model) => (
              <motion.div key={model.title} variants={itemVariants} className="bg-white rounded-3xl p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-white hover:border-blue-100 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-[#f0f5ff] flex items-center justify-center mx-auto mb-5 border border-blue-50">
                  <model.icon size={26} className="text-[#1d4ed8]" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-[15px] font-bold text-[#0a1128] mb-3">{model.title}</h3>
                <p className="text-[12px] text-gray-500 leading-relaxed">{model.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="relative z-10 flex flex-wrap justify-center gap-4">
            {["No long-term commitment", "Scalable teams", "Transparent pricing", "Quick ramp-up"].map((pill) => (
              <div key={pill} className="bg-white rounded-full px-5 py-2.5 flex items-center gap-2.5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100">
                <CheckCircle size={14} className="text-[#1d4ed8]" strokeWidth={2.5} />
                <span className="text-[12px] font-bold text-gray-600">{pill}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const HiringJourneySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % hiringSteps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-[#fafbfc]">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>

          <div className="text-center mb-16">
            <motion.span variants={itemVariants} className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary block mb-2 opacity-60">
              Our Process
            </motion.span>
            <motion.h2 variants={itemVariants} className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-[#0a1128] mb-3">
              A Seamless <span className="text-primary italic">4-Step Process</span>
            </motion.h2>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0 text-center">
            {/* Dotted horizontal line for desktop */}
            <div className="hidden md:block absolute top-[52px] left-[12.5%] right-[12.5%] h-px border-t border-dashed border-primary opacity-30 z-0" />

            {/* Progress line animation */}
            <div
              className="hidden md:block absolute top-[52px] left-[12.5%] h-[2px] bg-primary z-0 transition-all duration-1000 ease-in-out"
              style={{ width: `${(activeStep / (hiringSteps.length - 1)) * 75}%` }}
            />

            {hiringSteps.map((step, idx) => {
              const isActive = activeStep === idx;
              const isPast = activeStep >= idx;

              return (
                <motion.div
                  key={step.step}
                  variants={itemVariants}
                  className={`relative z-10 flex flex-col items-center group w-full transition-all duration-500 cursor-default ${isActive ? '-translate-y-2' : ''}`}
                >

                  {/* Diamond dot between steps */}
                  {idx < hiringSteps.length - 1 && (
                    <div className={`hidden md:block absolute top-[52px] right-0 w-2 h-2 rotate-45 transform translate-x-1/2 -translate-y-1/2 z-10 transition-colors duration-500 ${activeStep > idx ? 'bg-primary opacity-100' : 'bg-primary opacity-30'}`} />
                  )}

                  {/* Icon Circle */}
                  <div className="relative mb-6">
                    {/* Small number badge */}
                    <div className={`absolute -top-1 -left-4 w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-md z-20 transition-all duration-500 ${isActive ? 'scale-110 rotate-12 bg-primary' : isPast ? 'bg-primary' : 'bg-primary/60'}`}>
                      0{step.step}
                    </div>
                    {/* Main white circle */}
                    <div className={`w-[104px] h-[104px] rounded-full bg-white flex items-center justify-center border border-gray-50 relative z-10 transition-all duration-500 ${isActive ? 'shadow-lg shadow-primary/20 border-primary/20 scale-105' : 'shadow-[0_4px_25px_rgba(0,0,0,0.06)]'}`}>
                      {step.icon && <step.icon size={36} className={`transition-all duration-500 ${isActive ? 'text-primary scale-110' : isPast ? 'text-primary' : 'text-primary/60'}`} strokeWidth={1.5} />}
                    </div>
                  </div>

                  <h3 className={`font-display text-[14px] font-bold mb-3 max-w-[160px] transition-colors duration-500 ${isActive ? 'text-primary' : 'text-[#0a1128]'}`}>{step.title}</h3>
                  <p className="text-[12px] text-gray-500 leading-relaxed max-w-[200px]">{step.description}</p>
                </motion.div>
              )
            })}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

const WhyCybaemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section ref={ref} className="py-16 lg:py-24 bg-[#fafbfc] relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-start relative">

            {/* Subtle background image spanning the left side */}
            <div className="absolute top-0 bottom-0 left-[-20%] w-[60%] -z-10 opacity-30 pointer-events-none hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-b from-[#fafbfc] via-[#fafbfc]/50 to-transparent z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#fafbfc] via-transparent to-transparent z-10" />
              <img src="/images/team.png" alt="" className="w-full h-full object-cover object-center" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            </div>

            {/* Left Column (Sticky) */}
            <div className="lg:w-[28%] lg:sticky lg:top-32 w-full pt-6 relative">

              <motion.span variants={itemVariants} className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#1d4ed8] mb-6 block">
                WHY CYBAEMTECH?
              </motion.span>
              <motion.h2 variants={itemVariants} className="font-display text-4xl lg:text-5xl font-bold leading-[1.15] mb-6 text-[#0a1128]">
                Structured,<br /> Strategic & <br /><span className="text-[#1d4ed8] italic">Focused</span>
              </motion.h2>

              <motion.div variants={itemVariants} className="w-10 h-0.5 bg-[#1d4ed8] mb-6" />

              <motion.p variants={itemVariants} className="text-[14px] text-gray-600 leading-relaxed max-w-[280px]">
                We bring the right structure, tools and people together to deliver consistent, scalable and measurable results.
              </motion.p>
            </div>

            {/* Right Column (Grid & Banner) */}
            <div className="lg:w-[72%] w-full">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {whyCybaem.map((item, index) => (
                  <motion.div key={item.title} variants={itemVariants} className="bg-white rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col relative group h-full">

                    {/* Image Container with Angled Cut */}
                    <div
                      className="w-full h-40 relative rounded-t-2xl overflow-hidden"
                      style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-[#0a1128]/20" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#1d4ed8]/20 to-transparent mix-blend-multiply" />
                      <div className="absolute top-4 left-6 text-white font-display text-lg font-bold tracking-tight">
                        0{index + 1}
                      </div>
                    </div>

                    {/* Overlapping Icon Circle */}
                    <div className="absolute top-40 left-6 -translate-y-[60%] w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center shadow-sm z-10">
                      <div className="w-[42px] h-[42px] rounded-full border border-blue-100 flex items-center justify-center bg-blue-50/50">
                        <item.icon size={20} className="text-[#1d4ed8]" strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="pt-10 pb-6 px-6 flex-1 flex flex-col">
                      <h3 className="font-display text-[14px] font-bold text-[#0a1128] mb-3 leading-snug">{item.title}</h3>
                      <p className="text-[12px] text-gray-500 leading-relaxed">{item.description}</p>
                    </div>

                  </motion.div>
                ))}
              </div>

              {/* Bottom Banner */}
              <motion.div variants={itemVariants} className="mt-8 bg-[#0a1128] rounded-2xl p-6 px-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-xl shadow-[#0a1128]/10">
                <div className="absolute right-0 top-0 bottom-0 w-2/3 bg-gradient-to-l from-[#1d4ed8]/20 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-[url('/images/world-map.svg')] opacity-[0.05] pointer-events-none bg-cover bg-center" />

                <div className="flex items-center gap-5 relative z-10 w-full md:w-auto">
                  <div className="w-[46px] h-[46px] rounded-full bg-white/10 flex items-center justify-center border border-white/20 shrink-0">
                    <Users size={20} className="text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-[14px] mb-1 leading-snug">We focus on building partnerships that drive growth</h4>
                    <p className="text-white/60 text-[12px] tracking-wide">Structured engagement. Strategic execution. Focused on your success.</p>
                  </div>
                </div>

                <div className="relative z-10 shrink-0 w-full md:w-auto flex justify-end">
                  <button className="bg-white text-[#0a1128] px-6 py-3 rounded-xl text-[13px] font-bold flex items-center gap-2 hover:bg-gray-100 transition-colors shadow-md">
                    Let's Build Together <ArrowRight size={16} className="text-[#1d4ed8]" />
                  </button>
                </div>
              </motion.div>

            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
};

const GlobalDeliverySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const deliveryColors = ["#2563eb", "#10b981", "#8b5cf6", "#f97316", "#ec4899"];

  return (
    <section ref={ref} className="py-24 lg:py-32 section-border relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div>
              <motion.span variants={itemVariants} className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4 block flex items-center gap-4">
                <span className="w-8 h-[2px] bg-primary"></span>
                Proven Global Delivery
              </motion.span>
              <motion.h2 variants={itemVariants} className="font-display text-4xl lg:text-5xl font-bold leading-tight mb-6 text-slate-900">
                Trusted Across <br />
                <span className="text-primary italic">Continents</span>
              </motion.h2>
              <motion.p variants={itemVariants} className="text-base text-muted-foreground max-w-md mb-12">
                Delivering innovative IT solutions and driving business success for clients across the globe.
              </motion.p>

              <div className="space-y-6">
                {globalDelivery.map((g, index) => {
                  const color = deliveryColors[index % deliveryColors.length];
                  return (
                    <motion.div key={g.region} variants={itemVariants} className="flex items-center gap-6 group">
                      {/* Icon */}
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center shrink-0 shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-transform duration-300 group-hover:scale-110 overflow-hidden border-2"
                        style={{ borderColor: color }}
                      >
                        <img src={g.flagUrl} alt={`${g.region} flag`} className="w-full h-full object-cover" />
                      </div>

                      {/* Text content */}
                      <div className="min-w-[180px]">
                        <h3 className="font-display text-lg font-bold mb-1" style={{ color }}>{g.region}</h3>
                        <p className="text-sm text-slate-500 leading-snug max-w-[200px]">{g.focus}</p>
                      </div>

                      {/* Extending Line & Dot */}
                      <div className="hidden sm:flex flex-1 items-center pr-4">
                        <div className="flex-1 h-[2px] opacity-20 transition-opacity duration-300 group-hover:opacity-60" style={{ backgroundColor: color }}></div>
                        <div className="w-2.5 h-2.5 rounded-full ml-1" style={{ backgroundColor: color }}></div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right Image */}
            <motion.div variants={itemVariants} className="relative hidden lg:flex justify-center items-center">
              {/* <div className="relative aspect-square w-full max-w-[800px] lg:scale-110 xl:scale-125 mx-auto rounded-full shadow-2xl flex items-center justify-center overflow-hidden border-8 border-white bg-white"> */}
              <img
                src={TACImage}
                alt="Global Presence"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback if image doesn't exist yet
                  (e.target as HTMLImageElement).src = 'https://placehold.co/800x800/f1f5f9/94a3b8?text=Add+1st+Image+Here';
                }}
              />
              {/* </div> */}
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};


const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section ref={ref} className="py-24 lg:py-32 section-border bg-[#fafbfc]">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <motion.span variants={itemVariants} className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#1d4ed8] mb-4 block">
              Frequently Asked Questions
            </motion.span>
            <motion.h2 variants={itemVariants} className="font-display text-3xl lg:text-5xl font-bold leading-tight text-[#0a1128]">
              {data.title} — Answered
            </motion.h2>
          </div>

          <motion.div variants={itemVariants}>
            <Accordion type="single" collapsible className="grid md:grid-cols-2 gap-6 items-start">
              {data.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-white rounded-2xl px-8 py-2 border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                  <AccordionTrigger className="text-left font-display font-semibold text-[15px] text-[#0a1128] hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500 text-[14px] leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const relatedTitles = data.relatedSlugs.map((s) => solutionsData[s]?.title || s);

  return (
    <section ref={ref} className="py-24 lg:py-32 text-primary-foreground relative overflow-hidden bg-[#0a1128]">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="/images/product-card-4.avif" alt="Background" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1d4ed8]/80 to-[#0a1128]/90 mix-blend-multiply" />
      </div>

      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl z-0" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-white/5 blur-2xl z-0" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="text-center max-w-2xl mx-auto">
          <motion.h2 variants={itemVariants} className="font-display text-3xl lg:text-5xl font-bold leading-tight mb-6">
            Ready to Hire Top IT Talent?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-base text-primary-foreground/70 leading-relaxed mb-10">
            Cybaem Tech is your trusted global partner for flexible, scalable IT staff augmentation. Let's build your dream team — faster, smarter, and within budget.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <MagneticButton>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold bg-primary-foreground text-primary rounded-full hover:opacity-90 transition-opacity">
                Email Us <Mail size={16} />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold border border-primary-foreground/20 text-primary-foreground rounded-full hover:bg-primary-foreground/10 transition-all">
                Book a Call <ArrowUpRight size={16} />
              </Link>
            </MagneticButton>
          </motion.div>

          {data.relatedSlugs.length > 0 && (
            <motion.div variants={itemVariants} className="pt-8 border-t border-primary-foreground/15">
              <p className="text-xs font-medium tracking-[0.15em] uppercase text-primary-foreground/50 mb-4">Related Solutions</p>
              <div className="flex flex-wrap justify-center gap-3">
                {data.relatedSlugs.map((slug, i) => (
                  <Link key={slug} to={`/solutions/${slug}`} className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium border border-primary-foreground/20 rounded-full text-primary-foreground/80 hover:bg-primary-foreground/10 transition-all">
                    {relatedTitles[i]} <ArrowRight size={14} />
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

/* ─── Page ─── */

const ITStaffAugmentation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title={itAugmentationSeoData.title}
        description={itAugmentationSeoData.description}
        canonical={itAugmentationSeoData.canonical}
        keywords={itAugmentationSeoData.keywords}
        ogTitle={itAugmentationSeoData.ogTitle}
        ogDescription={itAugmentationSeoData.ogDescription}
        twitterTitle={itAugmentationSeoData.twitterTitle}
        twitterDescription={itAugmentationSeoData.twitterDescription}
        jsonLd={itAugmentationSeoData.jsonLd}
      />
      <Navbar />
      <Hero />
      <ServicesSection />
      <ResourcesSection />
      <IndustriesSection />
      <EngagementSection />
      <HiringJourneySection />
      <WhyCybaemSection />
      <GlobalDeliverySection />


      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default ITStaffAugmentation;
