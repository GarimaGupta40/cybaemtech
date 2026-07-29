import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, ShieldCheck, CheckSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { MagneticButton } from "./Navbar";
import { containerVariants, itemVariants } from "@/lib/animations";

const CTASection = () => {
  return (
    <section id="contact" className="relative py-20 lg:py-24 overflow-hidden bg-[#060b19]">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/it-staff-augmentation/Agile%20and%20Remote%20collaboration.png')] opacity-[0.04] bg-cover bg-center bg-no-repeat pointer-events-none mix-blend-luminosity grayscale" />
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#1d4ed8]/10 rounded-full blur-[150px] pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="text-center max-w-4xl mx-auto">
          
          <motion.h2 variants={itemVariants} className="font-display text-[32px] md:text-4xl lg:text-[44px] font-bold text-white leading-tight mb-5 tracking-tight">
            Ready to Build a System<br />That Scales?
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-[14px] md:text-[15px] text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            Stop settling for vendors. Partner with a technology team that guarantees delivery, security, and performance. Speak directly with our technical leadership today.
          </motion.p>
          
          {/* Guarantees Inline */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12 text-[13px] font-medium text-white/90">
            <div className="flex items-center gap-2">
              <CheckSquare size={16} className="text-white/70" />
              <span>Zero Surprises Guarantee</span>
            </div>
            <div className="hidden sm:block w-[1px] h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-white/70" />
              <span>Global Support Team</span>
            </div>
          </motion.div>

          {/* Original Content Buttons & Links */}
          <motion.div variants={itemVariants} className="flex flex-col items-center justify-center gap-8">
            <MagneticButton>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold bg-[#0052cc] text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20">
                Schedule a Discovery Call
                <ArrowRight size={16} />
              </Link>
            </MagneticButton>

            <div className="flex flex-wrap items-center justify-center gap-8 text-[13px] text-gray-400">
              <a href="mailto:sales@cybaemtech.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={14} />
                sales@cybaemtech.com
              </a>
              <span className="flex items-center gap-2">
                <Phone size={14} />
                Global Support Lines
              </span>
            </div>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
