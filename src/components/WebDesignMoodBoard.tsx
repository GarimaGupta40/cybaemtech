import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations";
import { Globe, ShoppingCart, Palette, MousePointerClick, PenTool, Layers, ShieldCheck, Target, BarChart2 } from "lucide-react";

const moodBoardData = [
  {
    icon: Globe,
    category: "Corporate & Business",
    goal: "Trust & Authority",
    vibe: "Professional, strong, intelligent",
    primaryColors: ["#F8FAFC", "#E2E8F0", "#0F172A"],
    accentColors: ["#1E3A8A", "#166534", "#475569"],
    image: "/images/it1.png",
  },
  {
    icon: ShoppingCart,
    category: "E-Commerce",
    goal: "Uplifting & Action",
    vibe: "High-energy, trustworthy, exciting",
    primaryColors: ["#FFFFFF", "#F9FAFB", "#FFFBEB"],
    accentColors: ["#EA580C", "#DC2626", "#16A34A"],
    image: "/images/Ecomm.png",
  },
  {
    icon: Palette,
    category: "Portfolios",
    goal: "Self Expression & Impact",
    vibe: "Sophisticated, trendy, expressive",
    primaryColors: ["#000000", "#FFFFFF", "#78716C"],
    accentColors: ["#C084FC", "#67E8F9", "#FDE047"],
    image: "/images/web-portfolio.avif",
  },
  {
    icon: MousePointerClick,
    category: "Landing Pages",
    goal: "Conversion & Focus",
    vibe: "Focused, urgent, distraction-free",
    primaryColors: ["#FFFFFF", "#F8FAFC", "#F1F5F9"],
    accentColors: ["#0284C7", "#15803D", "#334155"],
    image: "/images/web-landing.avif",
  },
  {
    icon: PenTool,
    category: "Blogs & Personal",
    goal: "Warmth & Readability",
    vibe: "Inviting, organic, personal",
    primaryColors: ["#FAFAFA", "#F3F4F6", "#374151"],
    accentColors: ["#B45309", "#78350F", "#064E3B"],
    image: "/images/web-blog.avif",
  },
  {
    icon: Layers,
    category: "SaaS & Web Apps",
    goal: "Utility & Clarity",
    vibe: "Clean, modern, efficient",
    primaryColors: ["#F1F5F9", "#F8FAFC", "#1E293B"],
    accentColors: ["#2563EB", "#8B5CF6", "#0D9488"],
    image: "/images/web-saas.avif",
  }
];

const ColorRow = ({ title, colors }: { title: string, colors: string[] }) => (
  <div className="mb-3">
    <p className="text-[9px] font-bold tracking-[0.1em] uppercase text-slate-400 mb-2">{title}</p>
    <div className="flex gap-3">
      {colors.map((c, i) => (
        <div key={i} className="w-8 h-8 rounded-lg shadow-sm border border-slate-200 transition-transform hover:scale-110 cursor-pointer" style={{ backgroundColor: c }} />
      ))}
    </div>
  </div>
);

const WebDesignMoodBoard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-8 lg:py-12 section-border bg-[#FAFBFC] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >

          {/* Header Row */}
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 mb-10 items-center">
            <div className="relative z-10">
              <motion.span variants={itemVariants} className="text-[11px] font-bold tracking-[0.15em] uppercase text-primary mb-5 block">
                COLOUR PSYCHOLOGY
              </motion.span>
              <motion.h2 variants={itemVariants} className="font-display text-4xl lg:text-[54px] font-bold leading-[1.1] mb-6 text-[#051139] tracking-tight">
                The <span className="text-primary italic font-serif">Science</span> of Web Design
              </motion.h2>
              <motion.p variants={itemVariants} className="text-slate-600 text-[17px] leading-relaxed max-w-lg font-medium">
                Every colour choice drives perception. Here's the strategic palette blueprint we apply to each website category.
              </motion.p>
            </div>

            <motion.div variants={itemVariants} className="flex justify-end relative h-[250px] lg:h-[350px] items-center">
              {/* Optional Placeholder for the color wheel illustration in case the exact asset isn't added yet */}
              <div className="relative w-full h-full flex items-center justify-end">
                <img
                  src="/images/color-wheel-illustration.png"
                  alt="Colour Psychology Wheel"
                  className="max-h-[120%] object-contain drop-shadow-2xl z-10 relative lg:translate-x-12"
                  onError={(e) => {
                    // Fallback CSS Color Wheel if image is missing
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.nextElementSibling) {
                      (target.nextElementSibling as HTMLElement).style.display = 'flex';
                    }
                  }}
                />

                {/* Fallback CSS element hidden by default */}
                <div className="hidden w-64 h-64 rounded-full shadow-2xl relative items-center justify-center animate-spin-slow" style={{ background: 'conic-gradient(from 0deg, #EF4444, #F97316, #FBBF24, #10B981, #06B6D4, #3B82F6, #8B5CF6, #EF4444)' }}>
                  <div className="w-32 h-32 bg-white rounded-full shadow-inner absolute"></div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Grid of Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 relative z-20">
            {moodBoardData.map((item, index) => (
              <motion.div
                key={item.category}
                variants={itemVariants}
                className="group bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-100/60 p-6 relative overflow-hidden flex min-h-[260px] hover:shadow-[0_15px_50px_rgba(15,76,255,0.06)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Content */}
                <div className="relative z-10 w-full md:w-3/5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-[10px] bg-primary/5 text-primary flex items-center justify-center border border-primary/10">
                        <item.icon size={18} strokeWidth={2.5} />
                      </div>
                      <h3 className="font-display font-bold text-[#051139] text-[15px]">{item.category}</h3>
                    </div>
                    <p className="font-semibold text-slate-800 text-[13px] mb-1 mt-4">{item.goal}</p>
                    <p className="text-slate-500 text-[11px] mb-6 leading-tight">{item.vibe}</p>
                  </div>

                  <div className="mt-auto space-y-1">
                    <ColorRow title="PRIMARY" colors={item.primaryColors} />
                    <ColorRow title="ACCENT" colors={item.accentColors} />
                  </div>
                </div>

                {/* Right Side Fading Image */}
                <div className="absolute right-0 bottom-0 top-0 w-1/2 pointer-events-none opacity-[0.85] transition-transform duration-700 group-hover:scale-105"
                  style={{
                    maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 40%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 40%, transparent 100%)'
                  }}>
                  <img
                    src={item.image}
                    alt={item.category}
                    className="w-full h-full object-cover object-right"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Stats / Info Bar */}
          <motion.div
            variants={itemVariants}
            className="bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-3xl p-6 lg:p-8 flex flex-wrap gap-6 lg:gap-8 justify-between items-center shadow-[0_8px_30px_rgba(0,0,0,0.02)] relative z-20"
          >
            <div className="flex items-center gap-4 flex-1 min-w-[200px]">
              <div className="w-12 h-12 rounded-full bg-blue-50/80 text-primary flex items-center justify-center shrink-0 border border-blue-100/50">
                <ShieldCheck size={20} strokeWidth={2} />
              </div>
              <div>
                <h4 className="font-bold text-[#051139] text-[13px] mb-1">Backed by Strategy</h4>
                <p className="text-slate-500 text-[11px] leading-snug">Science meets creativity<br />in every design.</p>
              </div>
            </div>

            <div className="hidden lg:block w-[1px] h-12 bg-slate-100"></div>

            <div className="flex items-center gap-4 flex-1 min-w-[200px]">
              <div className="w-12 h-12 rounded-full bg-blue-50/80 text-primary flex items-center justify-center shrink-0 border border-blue-100/50">
                <Target size={20} strokeWidth={2} />
              </div>
              <div>
                <h4 className="font-bold text-[#051139] text-[13px] mb-1">Built for Results</h4>
                <p className="text-slate-500 text-[11px] leading-snug">Colours that convert,<br />engage & retain.</p>
              </div>
            </div>

            <div className="hidden lg:block w-[1px] h-12 bg-slate-100"></div>

            <div className="flex items-center gap-4 flex-1 min-w-[200px]">
              <div className="w-12 h-12 rounded-full bg-blue-50/80 text-primary flex items-center justify-center shrink-0 border border-blue-100/50">
                <Palette size={20} strokeWidth={2} />
              </div>
              <div>
                <h4 className="font-bold text-[#051139] text-[13px] mb-1">Consistent & Cohesive</h4>
                <p className="text-slate-500 text-[11px] leading-snug">Unified colour systems<br />across every touchpoint.</p>
              </div>
            </div>

            <div className="hidden lg:block w-[1px] h-12 bg-slate-100"></div>

            <div className="flex items-center gap-4 flex-1 min-w-[200px]">
              <div className="w-12 h-12 rounded-full bg-blue-50/80 text-primary flex items-center justify-center shrink-0 border border-blue-100/50">
                <BarChart2 size={20} strokeWidth={2} />
              </div>
              <div>
                <h4 className="font-bold text-[#051139] text-[13px] mb-1">Data-Informed Choices</h4>
                <p className="text-slate-500 text-[11px] leading-snug">Psychology-backed palettes<br />that drive outcomes.</p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default WebDesignMoodBoard;
