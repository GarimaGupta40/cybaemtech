import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, ShieldCheck, CheckSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { MagneticButton } from "./Navbar";
import { containerVariants, itemVariants } from "@/lib/animations";

const CTASection = () => {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="rounded-[2.5rem] border border-blue-100/80 p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-10 lg:gap-12 relative overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('/images/about-cta1.webp')] lg:bg-[url('/images/about-cta.webp')] shadow-[0_20px_60px_rgba(0,82,204,0.06)]"
        >
          {/* Decorative background glows */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-100/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

          {/* Left Side: Content */}
          <div className="lg:w-[42%] relative z-10 text-left">
            <motion.h2 variants={itemVariants} className="font-display text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 leading-[1.18] mb-4 tracking-tight">
              Ready to Build a System <br />
              <span className="text-[#0052cc] italic font-serif">That Scales?</span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-8 max-w-lg">
              Stop settling for vendors. Partner with a technology team that guarantees delivery, security, and performance. Speak directly with our technical leadership today.
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="mb-6">
              <MagneticButton>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-bold bg-[#0052cc] text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
                >
                  Schedule a Discovery Call
                  <ArrowRight size={16} />
                </Link>
              </MagneticButton>
            </motion.div>

            {/* Contact Email & Phone Lines */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 text-[13px] text-slate-500 pt-2">
              <a href="mailto:sales@cybaemtech.com" className="flex items-center gap-2 hover:text-[#0052cc] transition-colors font-medium">
                <Mail size={14} className="text-[#0052cc]" />
                sales@cybaemtech.com
              </a>
              <span className="flex items-center gap-2 font-medium">
                <Phone size={14} className="text-[#0052cc]" />
                Global Support Lines
              </span>
            </motion.div>
          </div>

          {/* Center Graphic Spacer */}
          <div className="lg:w-[22%] hidden lg:block h-64 relative z-10" />

          {/* Right Side: Stacked Feature Cards */}
          <div className="lg:w-[36%] relative z-10 flex flex-col gap-6 w-full pl-0 lg:pl-6">
            {/* Feature 1 */}
            <motion.div
              variants={itemVariants}
              className="flex items-start gap-4 p-5 rounded-2xl bg-white/90 backdrop-blur-sm border border-blue-100/70 shadow-sm hover:shadow-md hover:border-blue-300/60 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center shrink-0 text-[#0052cc]">
                <CheckSquare size={22} strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-display font-bold text-slate-900 text-base mb-1">
                  Zero Surprises Guarantee
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Transparent milestone pricing, predictable schedules, and no hidden fees.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              variants={itemVariants}
              className="flex items-start gap-4 p-5 rounded-2xl bg-white/90 backdrop-blur-sm border border-blue-100/70 shadow-sm hover:shadow-md hover:border-blue-300/60 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center shrink-0 text-[#0052cc]">
                <ShieldCheck size={22} strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-display font-bold text-slate-900 text-base mb-1">
                  Global Support Team
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  24/7 dedicated engineering support, active monitoring, and rapid resolution.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
