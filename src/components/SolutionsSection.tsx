import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Code2, Globe, Users, Shield, BarChart3, Rocket, Clock, CalendarDays, UserCheck, Lock, CheckCircle, ShieldCheck, Database, Award, Cloud } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    title: "Enterprise Custom Software",
    outcome: "Scalable, secure and future-ready solutions that drive business transformation.",
    capability: "Build robust, dependable & scalable software solutions tailored to your business.",
    cta: "Explore Solution",
    slug: "enterprise-software",
    image: "/images/Tech-port/Enterprise Custom Software.webp",
    icon: Code2
  },
  {
    title: "High-Performance Web Systems",
    outcome: "Digital platforms that convert, delivered on deadline.",
    capability: "From immersive corporate portals to high-traffic E-commerce and PWA architectures, we design secure, lightning-fast web systems.",
    cta: "Explore Solution",
    slug: "web-systems",
    image: "/images/Tech-port/High-Performance Web systems.webp",
    icon: Globe
  },
  {
    title: "Elite IT Staff Augmentation",
    outcome: "Bypass local talent shortages and scale your team instantly.",
    capability: "Seamlessly integrate pre-vetted Cloud Architects, DevOps Engineers, and Full-Stack Developers into your existing workflows.",
    cta: "Explore Solution",
    slug: "it-staff-augmentation",
    image: "/images/Tech-port/Elite IT Staff.webp",
    icon: Users
  },
  {
    title: "Managed IT & Cloud Security",
    outcome: "24/7 infrastructure resilience and Zero-Trust protection.",
    capability: "We provide comprehensive NOC support, seamless AWS/Azure cloud migrations, and proactive threat monitoring.",
    cta: "Explore Solution",
    slug: "managed-it-cloud-security",
    image: "/images/Tech-port/Managed IT.webp",
    icon: Shield
  },
  {
    title: "Digital Revenue & Growth",
    outcome: "Turn your digital presence into a predictable B2B lead engine.",
    capability: "Dominate international search results through advanced AEO/GEO optimization, CRO, and targeted executive LinkedIn thought leadership strategies.",
    cta: "Explore Solution",
    slug: "digital-revenue-growth",
    image: "/images/Tech-port/Digital revenue and growth.webp",
    icon: BarChart3
  },
];

const SolutionsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = solutions[activeIndex];
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "center center",
        end: `+=${solutions.length * 240}vh`,
        pin: true,
        pinSpacing: true,
        onUpdate: (self) => {
          let newIndex = Math.floor(self.progress * solutions.length);
          if (newIndex >= solutions.length) newIndex = solutions.length - 1;
          if (newIndex < 0) newIndex = 0;
          setActiveIndex(newIndex);
        }
      });
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  const handleTabClick = (index: number) => {
    const st = ScrollTrigger.getAll().find((st) => st.trigger === sectionRef.current);
    if (st && window.innerWidth >= 1024) {
      const segmentSize = (st.end - st.start) / solutions.length;
      const scrollY = st.start + (index * segmentSize) + (segmentSize * 0.1);
      window.scrollTo({ top: scrollY, behavior: "smooth" });
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section id="solutions" ref={sectionRef} className="py-8 lg:py-10 bg-[#060b19] overflow-hidden text-white relative min-h-screen flex flex-col justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/images/it-staff-augmentation/Agile%20and%20Remote%20collaboration.png')] opacity-[0.04] bg-cover bg-center bg-no-repeat pointer-events-none mix-blend-luminosity grayscale" />
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#1d4ed8]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-[1400px]">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-col items-start"
        >
          <div className="flex items-center gap-4 mb-3">
            <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase text-blue-500">
              ENTERPRISE TECHNOLOGY PORTFOLIO
            </span>
            <div className="w-16 h-px bg-blue-500/50" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] max-w-3xl text-white mb-4">
            Our IT Service Solutions.<br />
            <span className="text-blue-500 italic font-light">One Bulletproof Partner.</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl leading-relaxed">
            We build robust, secure and future-ready IT solutions that drive measurable business outcomes.
          </p>
        </motion.div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 relative">

          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute left-[380px] top-0 bottom-0 w-px bg-blue-500/20 z-0">
            {/* Active Node */}
            <div
              className="absolute left-[-4px] w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_15px_4px_rgba(96,165,250,0.6)] transition-all duration-500"
              style={{ top: `calc(${activeIndex * (100 / solutions.length)}% + 40px)` }}
            />
            {/* Horizontal connection to showcase */}
            <div
              className="absolute left-0 h-px bg-gradient-to-r from-blue-400 to-transparent transition-all duration-500"
              style={{ top: `calc(${activeIndex * (100 / solutions.length)}% + 44px)`, width: '40px' }}
            />
          </div>

          {/* Left: Tab List */}
          <div className="w-full lg:w-[380px] shrink-0 flex flex-col gap-4 relative z-10">
            {solutions.map((sol, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={sol.slug}
                  onClick={() => handleTabClick(i)}
                  className={`text-left w-full p-4 rounded-2xl transition-all duration-300 border flex flex-col justify-center relative overflow-hidden group ${isActive
                    ? "bg-[#0c1a3b]/80 border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.15)]"
                    : "bg-[#0c162d]/50 border-white/5 hover:bg-[#0c1a3b]/40 hover:border-white/10"
                    }`}
                >
                  {/* Active background glow */}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 shadow-[0_0_20px_#3b82f6]" />
                  )}
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent opacity-50" />
                  )}

                  <div className="flex items-center gap-4 relative z-10">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border ${isActive ? 'border-blue-400/30 bg-blue-500/10 text-blue-400' : 'border-white/10 bg-white/5 text-gray-500'}`}>
                      <sol.icon size={18} />
                    </div>
                    <span className={`font-display text-xl font-bold shrink-0 ${isActive ? 'text-blue-400' : 'text-gray-600'}`}>
                      0{i + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-display font-bold text-[15px] leading-tight truncate ${isActive ? "text-white" : "text-gray-400 group-hover:text-gray-300"}`}>
                        {sol.title}
                      </h3>
                    </div>
                    <ArrowRight size={18} className={`shrink-0 ${isActive ? 'text-blue-400' : 'text-gray-600'}`} />
                  </div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        className="text-[12px] text-gray-400 leading-relaxed pl-[76px] pr-4 relative z-10"
                      >
                        {sol.outcome}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>

          {/* Right: Showcase */}
          <div className="flex-1 relative rounded-3xl overflow-hidden border border-blue-500/30 bg-[#081024] flex flex-col shadow-[0_0_50px_rgba(59,130,246,0.1)] min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.slug}
                initial={{ opacity: 0, filter: 'blur(6px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, filter: 'blur(6px)' }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="absolute inset-0 flex flex-col"
              >
                {/* Background Image full cover */}
                <div className="absolute inset-0">
                  <img
                    src={encodeURI(active.image)}
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      if (!target.src.includes("it.webp")) {
                        target.src = "/images/it.webp";
                      }
                    }}
                    alt={active.title}
                    className="w-full h-full object-cover opacity-60 mix-blend-screen"
                  />
                  {/* Heavy dark gradient on left side for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#060b19] via-[#060b19]/90 to-transparent w-[80%]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060b19] via-transparent to-[#060b19]/30" />
                </div>

                {/* Floating Badges */}
                <div className="absolute top-12 right-12 flex flex-col items-end gap-3 z-20 hidden md:flex">
                  <div className="px-4 py-2 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 flex items-center gap-2">
                    <Database size={14} className="text-cyan-400" />
                    <span className="text-[10px] font-bold text-gray-200 tracking-wider">AI POWERED</span>
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 flex items-center gap-2 mr-12">
                    <Database size={14} className="text-blue-400" />
                    <span className="text-[10px] font-bold text-gray-200 tracking-wider">CLOUD NATIVE</span>
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-[#0c2d6b]/60 backdrop-blur-md border border-blue-400/50 flex items-center gap-2 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                    <ShieldCheck size={14} className="text-blue-300" />
                    <span className="text-[10px] font-bold text-blue-100 tracking-wider">ENTERPRISE GRADE</span>
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 flex items-center gap-2 mr-8">
                    <Lock size={14} className="text-cyan-400" />
                    <span className="text-[10px] font-bold text-gray-200 tracking-wider">SECURE BY DESIGN</span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-20 flex-1 p-8 lg:p-10 flex flex-col justify-center max-w-xl">
                  <span className="text-[10px] font-bold tracking-[0.15em] text-gray-400 uppercase mb-2 block">
                    FEATURED SOLUTION
                  </span>
                  <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight">
                    {active.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {active.capability}
                  </p>
                  <Link
                    to={`/solutions/${active.slug}`}
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-[13px] font-semibold px-5 py-2.5 rounded-lg transition-colors w-fit shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                  >
                    {active.cta} <ArrowRight size={14} />
                  </Link>
                </div>

                {/* Bottom Stats Bar */}
                <div className="relative z-20 mt-auto bg-black/30 backdrop-blur-xl border-t border-white/5 p-4 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                      <Rocket size={18} className="text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-xl text-white">500+</h4>
                      <p className="text-[11px] text-gray-400 font-medium">Projects Delivered</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                      <Clock size={18} className="text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-xl text-white">99.9%</h4>
                      <p className="text-[11px] text-gray-400 font-medium">Enterprise SLA</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                      <CalendarDays size={18} className="text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-xl text-white">14+</h4>
                      <p className="text-[11px] text-gray-400 font-medium">Years of Excellence</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                      <UserCheck size={18} className="text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-xl text-white">250+</h4>
                      <p className="text-[11px] text-gray-400 font-medium">Expert Professionals</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Footer: Certifications */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col gap-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="flex items-center justify-center gap-4 text-left">
              <div className="w-12 h-12 rounded-full border border-blue-500/30 bg-blue-900/20 flex items-center justify-center shrink-0">
                <ShieldCheck size={20} className="text-blue-400" />
              </div>
              <div>
                <p className="text-white text-[13px] font-bold">ISO 27001:2013</p>
                <p className="text-gray-400 text-[11px]">Certified</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 text-left">
              <div className="w-12 h-12 rounded-full border border-blue-500/30 bg-blue-900/20 flex items-center justify-center shrink-0">
                <Award size={20} className="text-blue-400" />
              </div>
              <div>
                <p className="text-white text-[13px] font-bold">ISO 9001:2015</p>
                <p className="text-gray-400 text-[11px]">Certified</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 text-left">
              <div className="w-12 h-12 rounded-full border border-blue-500/30 bg-blue-900/20 flex items-center justify-center shrink-0">
                <Lock size={20} className="text-blue-400" />
              </div>
              <div>
                <p className="text-white text-[13px] font-bold">100%</p>
                <p className="text-gray-400 text-[11px]">Data Protection</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 text-left">
              <div className="w-12 h-12 rounded-full border border-blue-500/30 bg-blue-900/20 flex items-center justify-center shrink-0">
                <CheckCircle size={20} className="text-blue-400" />
              </div>
              <div>
                <p className="text-white text-[13px] font-bold">SOC 2</p>
                <p className="text-gray-400 text-[11px]">Compliant</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 text-left">
              <div className="w-12 h-12 rounded-full border border-blue-500/30 bg-blue-900/20 flex items-center justify-center shrink-0">
                <Users size={20} className="text-blue-400" />
              </div>
              <div>
                <p className="text-white text-[13px] font-bold">Trusted by</p>
                <p className="text-gray-400 text-[11px]">Global Clients</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SolutionsSection;
