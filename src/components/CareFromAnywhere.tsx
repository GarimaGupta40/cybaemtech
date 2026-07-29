import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Globe, Building2, ShoppingCart, Briefcase, Target, PenTool, Layers, ArrowRight, BookOpen } from "lucide-react";

const looks = [
  {
    tag: "Business & Corporate",
    name: "Your digital\nheadquarters",
    purpose: "The platform that earns trust before a word is read. Built to convert enterprise attention into lasting relationships.",
    gradient: "linear-gradient(135deg, #f44336 0%, #ff5722 100%)",
    icon: <Building2 size={18} strokeWidth={2.5} />
  },
  {
    tag: "E-commerce",
    name: "Every page earns its keep",
    purpose: "Revenue-first architecture. From catalogue to checkout — optimised for conversion, not decoration.",
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
    icon: <ShoppingCart size={18} strokeWidth={2.5} />
  },
  {
    tag: "Portfolio",
    name: "Let your work do the talking",
    purpose: "A visual resume that sells while you sleep. Crafted for photographers, designers, and creative studios.",
    gradient: "linear-gradient(135deg, #0f766e 0%, #10b981 100%)",
    icon: <Briefcase size={18} strokeWidth={2.5} />
  },
  {
    tag: "Landing Pages",
    name: "One page.\nOne decision.",
    purpose: "Laser-focused on a single CTA. Minimal friction. Maximum conversion rate.",
    gradient: "linear-gradient(135deg, #ea580c 0%, #facc15 100%)",
    icon: <Target size={18} strokeWidth={2.5} />
  },
  {
    tag: "Blog & Personal",
    name: "Build your audience.\nOwn your voice.",
    purpose: "Thought leadership at scale. SEO-architected from the foundation up to compound your reach.",
    gradient: "linear-gradient(135deg, #9333ea 0%, #d946ef 100%)",
    icon: <PenTool size={18} strokeWidth={2.5} />
  },
  {
    tag: "SaaS & Web Apps",
    name: "Tools users\nreturn to daily",
    purpose: "Functional, scalable, and built for users who interact — not just read.",
    gradient: "linear-gradient(135deg, #14b8a6 0%, #2dd4bf 100%)",
    icon: <Layers size={18} strokeWidth={2.5} />
  },
];

const containerAnim = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const itemAnim = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const CareFromAnywhere = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-10 lg:py-16 bg-[#fdfdfd] relative overflow-hidden font-sans">

      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent opacity-80 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-1/3 h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-orange-50/50 via-transparent to-transparent opacity-80 pointer-events-none"></div>
      <div className="absolute right-0 top-1/2 w-64 h-64 bg-[radial-gradient(circle,#000_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03] pointer-events-none"></div>
      <div className="absolute left-0 bottom-10 w-48 h-48 bg-[radial-gradient(circle,#000_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-[1140px] mx-auto px-6 lg:px-8 relative z-10">
        <motion.div variants={containerAnim} initial="hidden" animate={isInView ? "visible" : "hidden"}>

          {/* Header Row */}
          <motion.div variants={itemAnim} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-14">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-purple-200 bg-white shadow-sm text-[11px] font-bold tracking-[0.1em] text-[#6C5CE7] uppercase mb-8">
                SOLUTION BENEFITS
              </div>
              <h2 className="font-display text-5xl lg:text-[72px] font-bold leading-[1.05] tracking-tight text-[#051139] mb-5">
                Care from<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0080] via-[#7928CA] to-[#00DFD8]">
                  Anywhere
                </span>
              </h2>
              <div className="h-[5px] w-[180px] bg-gradient-to-r from-[#FF0080] via-[#7928CA] to-[#00DFD8] rounded-full"></div>
            </div>

            <div className="pt-2 lg:pt-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full border border-purple-100 bg-white shadow-sm flex items-center justify-center text-[#6C5CE7]">
                  <Globe size={18} strokeWidth={2.5} />
                </div>
                <span className="text-[12px] font-bold tracking-[0.15em] uppercase text-[#6C5CE7]">
                  Collect on all platforms
                </span>
              </div>
              <p className="text-slate-600 text-[15px] leading-[1.8] max-w-[480px] font-medium">
                With secure, high-performance platforms, reaching your audience becomes effortless — whether <strong className="text-[#1A1A2E] font-semibold">D2C, B2B, B2C,</strong> or internal. Every platform is engineered to perform at enterprise-grade from day one.
              </p>
            </div>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-8">
            {looks.map((card, i) => {
              const numStr = String(i + 1).padStart(2, '0');
              return (
                <motion.div
                  key={card.tag}
                  variants={itemAnim}
                  className="relative overflow-hidden rounded-[20px] p-6 lg:p-8 text-white min-h-[220px] lg:min-h-[240px] flex flex-col justify-between group cursor-pointer transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1)]"
                  style={{ background: card.gradient }}
                >
                  {/* Large Background Number */}
                  <div className="absolute right-6 bottom-4 font-display text-[100px] md:text-[140px] font-bold leading-none text-white/15 select-none pointer-events-none transition-transform group-hover:scale-110 duration-500">
                    {numStr}
                  </div>

                  {/* Top Section */}
                  <div className="flex items-center gap-3 relative z-10 mb-8">
                    <div className="w-10 h-10 rounded-[10px] bg-white/20 flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-sm">
                      {card.icon}
                    </div>
                    <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-white/95 drop-shadow-sm">
                      {numStr} . {card.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-display text-2xl lg:text-[26px] font-bold leading-[1.1] mb-2 whitespace-pre-line text-white">
                        {card.name}
                      </h3>
                      <p className="text-[12px] text-white/90 leading-relaxed max-w-[300px] font-medium whitespace-pre-line drop-shadow-sm mb-4">
                        {card.purpose}
                      </p>
                    </div>
                    {/* Thin arrow line */}
                    <div className="flex items-center opacity-80 group-hover:opacity-100 transition-opacity mt-auto">
                      <div className="h-[1px] w-12 bg-white group-hover:w-16 transition-all duration-300 relative">
                        <ArrowRight size={12} className="absolute -right-2 -top-[5.5px] text-white" strokeWidth={3} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* CTA Card */}
          <motion.div
            variants={itemAnim}
            className="relative overflow-hidden rounded-[24px] cursor-pointer group mb-10 transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] shadow-[0_15px_40px_-5px_rgba(0,0,0,0.12)]"
            style={{
              background: "linear-gradient(135deg, #FF6B6B, #FD79A8, #A29BFE, #6C5CE7)",
            }}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 px-6 sm:px-10 py-8 relative z-10">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 relative z-10 mb-4">
                  <div className="w-10 h-10 rounded-[10px] bg-white/20 flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-sm text-white">
                    <BookOpen size={18} strokeWidth={2.5} />
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-white/95 drop-shadow-sm">
                    07 . EDUCATIONAL & INFORMATIONAL
                  </span>
                </div>
                <h3 className="font-display font-bold text-white text-xl sm:text-2xl mb-2 drop-shadow-sm">
                  Knowledge platforms that position you as the authority.
                </h3>
                <p className="text-[13px] font-medium text-white/90 max-w-[600px] leading-relaxed drop-shadow-sm">
                  Deep-dive wikis, resource portals, and community knowledge bases — structured for discovery, retention, and thought leadership at scale.
                </p>
              </div>
              <Link
                to="/contact"
                className="shrink-0 inline-flex items-center gap-2 px-6 py-4 font-bold text-[13px] tracking-wide uppercase rounded-[14px] transition-all duration-300 group-hover:translate-x-1 group-hover:shadow-lg whitespace-nowrap bg-white text-[#1A1A2E]"
              >
                Start a Project
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          {/* ── Footer Stats ── */}
          <motion.div
            variants={itemAnim}
            className="flex flex-col md:flex-row flex-wrap items-start md:items-center justify-between gap-6 pt-8 text-[11px] font-bold tracking-[0.15em] uppercase text-slate-500 border-t border-slate-200"
          >
            <span>Cybaem Web Systems — Seven Platform Categories</span>
            <div className="flex flex-wrap gap-8 md:gap-12">
              {[
                { value: "200+", label: "Platforms Delivered" },
                { value: "0.8s", label: "Avg Load Time" },
                { value: "98%", label: "Client Satisfaction" },
              ].map((s) => (
                <div key={s.label} className="flex items-baseline gap-2">
                  <strong className="font-display text-2xl font-bold text-[#051139] tracking-tight">
                    {s.value}
                  </strong>
                  <span className="text-slate-500">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default CareFromAnywhere;
