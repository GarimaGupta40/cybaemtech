import { motion } from "framer-motion";
import { User, FileCheck, ShieldCheck } from "lucide-react";
import { containerVariants, itemVariants } from "@/lib/animations";
import sectionTeam from "@/assets/section-team.avif";

const protocols = [
  { icon: User, title: "Single Point of Accountability", desc: "Every project is assigned a dedicated UK/UAE time-zone aligned Project Owner. No communication black holes." },
  { icon: FileCheck, title: 'The "Zero Scope-Creep" Architecture', desc: "We mandate comprehensive requirement freezes and technical scope sign-offs before a single line of code is written." },
  { icon: ShieldCheck, title: "Uncompromising Compliance", desc: "Operating under dual ISO certifications, your intellectual property and data are secured to international enterprise standards from Day 1." },
];

const DifferenceSection = () => {
  return (
    <section id="approach" className="section-border py-20 lg:py-28 bg-[#fafcff]">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            {/* Left Column */}
            <div>
              <motion.span variants={itemVariants} className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-slate-400 mb-4">
                THE CYBAEM DIFFERENCE
              </motion.span>
              <motion.h2 variants={itemVariants} className="font-display text-[32px] md:text-[42px] font-bold text-[#0a1128] leading-[1.15] tracking-tight mb-6">
                Premium IT Service Solutions: Risk Out of Global Outsourcing.
              </motion.h2>
              <motion.p variants={itemVariants} className="text-[14px] text-slate-500 leading-relaxed mb-10">
                Most international technology projects fail because of poor communication, shifting goalposts, and a lack of quality control. We built Cybaem Tech to solve exactly that. Rooted in over 14 years of rigorous QA automation and elite product leadership, our company DNA is obsessed with process. We don't just write code, we deliver bulletproof business outcomes.
              </motion.p>
              
              <motion.div variants={itemVariants} className="relative rounded-2xl overflow-hidden group">
                <img src={sectionTeam} alt="Cybaem engineering team collaborating" className="w-full h-[280px] object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                
                {/* 14+ Years Overlay */}
                <div className="absolute bottom-0 left-0 bg-[#060b19] p-5 rounded-tr-2xl flex items-center gap-4">
                  <span className="text-[#3b82f6] text-4xl font-bold tracking-tighter">14+</span>
                  <span className="text-white text-[10px] font-bold tracking-[0.15em] uppercase leading-relaxed">
                    YEARS OF ENGINEERING<br/>EXCELLENCE
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <motion.div variants={itemVariants} className="mb-6">
                <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-slate-400">
                  THE DELIVERY GUARANTEE PROTOCOL
                </span>
              </motion.div>
              
              {protocols.map((item) => (
                <motion.div key={item.title} variants={itemVariants} className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-slate-100 flex gap-5 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#f0f4f8] flex items-center justify-center">
                    <item.icon size={24} strokeWidth={1.5} className="text-[#3b82f6]" />
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-bold text-[15px] text-[#0a1128] mb-2">{item.title}</h3>
                    <p className="text-[13px] text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DifferenceSection;
