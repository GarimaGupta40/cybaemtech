import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe, ShoppingCart, LayoutTemplate, Cloud, Users, BarChart3,
  ArrowRight, MonitorSmartphone, Search, ShieldCheck, Target,
  CreditCard, PieChart, Lock, Zap, Briefcase, MessagesSquare,
  LineChart, Settings, Headset
} from "lucide-react";
import { Link } from "react-router-dom";

const solutionsData = [
  {
    id: "corporate",
    icon: Globe,
    tabLabel: "Enterprise Websites",
    title: "Powerful digital presence, Elevated.",
    titleHighlight: "Elevated.",
    description: "High-performance, SEO-friendly websites that reflect your brand, build credibility, and convert visitors into customers.",
    features: [
      { text: "Responsive Design", icon: MonitorSmartphone },
      { text: "SEO Optimized", icon: Search },
      { text: "Fast & Secure", icon: ShieldCheck },
      { text: "Conversion Focused", icon: Target }
    ],
    image: "/images/corporate-websites.webp"
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    tabLabel: "E-Commerce Platforms",
    title: "Sell online with seamless Commerce.",
    titleHighlight: "Commerce.",
    description: "Robust e-commerce solutions tailored for growth. We build scalable platforms that deliver seamless shopping experiences.",
    features: [
      { text: "Secure Gateways", icon: CreditCard },
      { text: "Inventory Mgmt", icon: LayoutTemplate },
      { text: "Mobile-First", icon: MonitorSmartphone },
      { text: "High Performance", icon: Zap }
    ],
    image: "/images/ecomm-website.webp"
  },
  {
    id: "portals",
    icon: LayoutTemplate,
    tabLabel: "Web Portals",
    title: "Centralize your core Operations.",
    titleHighlight: "Operations.",
    description: "Custom web portals that connect your employees, partners, and customers in a secure, unified digital environment.",
    features: [
      { text: "Role-Based Access", icon: Lock },
      { text: "Custom Workflows", icon: Settings },
      { text: "Data Integration", icon: Cloud },
      { text: "Secure Comms", icon: MessagesSquare }
    ],
    image: "/images/saas-website.png"
  },
  {
    id: "saas",
    icon: Cloud,
    tabLabel: "SaaS Applications",
    title: "Cloud software that truly Scales.",
    titleHighlight: "Scales.",
    description: "End-to-end development of Software-as-a-Service platforms built for high availability, security, and multi-tenant architecture.",
    features: [
      { text: "Multi-Tenant Arch", icon: Users },
      { text: "Subscription Mgmt", icon: CreditCard },
      { text: "Scalable Infra", icon: Cloud },
      { text: "Advanced Analytics", icon: PieChart }
    ],
    image: "/images/saas-website.png"
  },
  {
    id: "crm",
    icon: Users,
    tabLabel: "CRM Systems",
    title: "Manage customer Relationships.",
    titleHighlight: "Relationships.",
    description: "Custom CRM solutions designed to streamline your sales pipeline, track interactions, and improve customer retention.",
    features: [
      { text: "Lead Tracking", icon: Target },
      { text: "Automated Workflows", icon: Zap },
      { text: "Sales Forecasting", icon: LineChart },
      { text: "Custom Reporting", icon: PieChart }
    ],
    image: "/images/CRM-website.webp"
  },
  {
    id: "erp",
    icon: BarChart3,
    tabLabel: "ERP Solutions",
    title: "Enterprise Resource Planning, Simplified.",
    titleHighlight: "Simplified.",
    description: "Comprehensive ERP software that integrates all facets of your enterprise to streamline operations, improve productivity and drive growth.",
    features: [
      { text: "Process Automation", icon: Settings },
      { text: "Resource Allocation", icon: Briefcase },
      { text: "Real-time Data", icon: Zap },
      { text: "Integrated Modules", icon: LayoutTemplate }
    ],
    image: "/images/saas-website.png"
  }
];

const SolutionsShowcase = () => {
  const [activeTab, setActiveTab] = useState(solutionsData[5]); // Default to 'erp' to perfectly match the mockup
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveTab((current) => {
        const currentIndex = solutionsData.findIndex(s => s.id === current.id);
        const nextIndex = (currentIndex + 1) % solutionsData.length;
        return solutionsData[nextIndex];
      });
    }, 6000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const renderTitle = (title: string, highlight?: string) => {
    if (!highlight) return title;
    const parts = title.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === highlight.toLowerCase()
        ? <span key={i} className="text-primary">{part}</span>
        : part
    );
  };

  return (
    <section
      className="py-10 lg:py-12 bg-[#f4f7f9] overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#0a1930 2px, transparent 2px)", backgroundSize: "32px 32px" }} />
      <div className="absolute -top-40 -right-40 w-[800px] h-[800px] rounded-full border-[1px] border-slate-300/30 opacity-50 pointer-events-none" />
      <div className="absolute top-40 -left-40 w-[600px] h-[600px] rounded-full border-[1px] border-slate-300/30 opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 max-w-[1400px] relative z-10">

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-center lg:items-stretch">

          {/* Left Sidebar (Dark Navy Container) */}
          <div className="w-full lg:w-[300px] xl:w-[320px] shrink-0 bg-[#0b1b33] rounded-[2rem] p-4 flex flex-col justify-between shadow-[0_20px_50px_rgba(11,27,51,0.2)]">

            <div className="flex flex-col">
              {solutionsData.map((solution, idx) => {
                const isActive = activeTab.id === solution.id;
                const Icon = solution.icon;

                return (
                  <button
                    key={solution.id}
                    onClick={() => setActiveTab(solution)}
                    className={`flex items-center justify-between px-5 py-3 transition-all duration-300 text-left rounded-xl group relative ${isActive
                      ? "bg-gradient-to-r from-blue-500 to-blue-700 shadow-[0_10px_20px_rgba(37,99,235,0.3)] z-10"
                      : "bg-transparent hover:bg-white/5"
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        size={18}
                        className={isActive ? "text-white" : "text-white opacity-70 group-hover:opacity-100 transition-opacity"}
                        strokeWidth={isActive ? 2 : 1.5}
                      />
                      <span className={`font-semibold text-[14px] ${isActive ? "text-white" : "text-white opacity-80 group-hover:opacity-100 transition-opacity"}`}>
                        {solution.tabLabel}
                      </span>
                    </div>
                    {isActive && (
                      <ArrowRight size={16} className="text-white opacity-90" />
                    )}

                    {/* Faint divider for inactive tabs */}
                    {!isActive && idx !== solutionsData.length - 1 && (
                      <div className="absolute bottom-0 left-5 right-5 h-px bg-white/5" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Custom Solution CTA inside Sidebar */}
            <div className="mt-4 bg-[#122849] rounded-xl p-4 flex items-center justify-between group cursor-pointer hover:bg-[#163057] transition-colors border border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#0b1b33] flex items-center justify-center shrink-0 border border-white/10">
                  <Headset size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-[10px] text-white/50 mb-0.5">Need Help Choosing?</p>
                  <h4 className="text-white font-semibold text-[12px]">Talk to Our Experts</h4>
                </div>
              </div>
              <ArrowRight size={16} className="text-white opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </div>

          </div>

          {/* Main Content Area */}
          <div className="flex-1 w-full grid grid-cols-1 xl:grid-cols-[1fr_1fr] gap-10 xl:gap-0 items-center mt-6 lg:mt-0">

            {/* Text Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${activeTab.id}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                className="flex flex-col justify-center py-4 xl:pr-6 order-2 xl:order-1"
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-primary/30 bg-primary/5 mb-4 self-start">
                  <activeTab.icon size={12} className="text-primary" />
                  <span className="text-[10px] font-bold tracking-widest text-primary uppercase">
                    {activeTab.tabLabel}
                  </span>
                </div>

                {/* Title */}
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0b1b33] leading-[1.2] mb-4">
                  {renderTitle(activeTab.title, activeTab.titleHighlight)}
                </h2>

                <p className="text-[14px] text-slate-500 leading-relaxed mb-6 max-w-lg">
                  {activeTab.description}
                </p>

                {/* Features 2x2 Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4 mb-8">
                  {activeTab.features.map((feature, idx) => {
                    const FeatureIcon = feature.icon;
                    return (
                      <div key={idx} className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-[0_4px_10px_rgba(37,99,235,0.25)]">
                          <FeatureIcon size={12} className="text-white" />
                        </div>
                        <span className="text-[13px] text-[#0b1b33] font-semibold">{feature.text}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Explore Button */}
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold text-[13px] hover:bg-blue-700 transition-colors self-start shadow-[0_10px_20px_rgba(37,99,235,0.2)] group">
                  Explore Solutions
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </AnimatePresence>

            {/* Image Overflowing right side */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`img-${activeTab.id}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full relative xl:w-[115%] xl:-left-[12%] 2xl:-left-[15%] flex items-center justify-center xl:justify-center order-1 xl:order-2 px-4 sm:px-8 xl:px-0"
              >
                <img
                  src={activeTab.image}
                  alt={activeTab.tabLabel}
                  className="w-full max-w-[600px] xl:max-w-none h-auto object-contain transition-transform duration-700 hover:scale-[1.02] drop-shadow-[0_20px_40px_rgba(11,27,51,0.15)] xl:drop-shadow-[0_40px_80px_rgba(11,27,51,0.15)]"
                />
              </motion.div>
            </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  );
};

export default SolutionsShowcase;
