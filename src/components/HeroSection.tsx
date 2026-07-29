import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { MagneticButton } from "./Navbar";
import type { Variants } from "framer-motion";
import heroVideo from "../assets/web video 01.mp4";

const heroContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-end justify-center pb-12 sm:pb-16">
      {/* Full-screen background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/hero-new.avif"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>

      {/* Uniform dark overlay for readability, matching reference image */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />

      {/* Content */}
      <div className="container mx-auto px-5 sm:px-6 lg:px-12 relative z-10 w-full">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center"
        >
          {/* Badge */}
          {/* <motion.div variants={fadeUp} className="mb-8">
            <span className="inline-flex items-center gap-2.5 px-5 py-2 text-[13px] font-semibold tracking-wide uppercase text-white/90 border border-white/10 rounded-full bg-black/40 shadow-lg backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-primary" />
              ISO-Certified Global Technology Partner
            </span>
          </motion.div> */}

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="font-black text-white mb-8 mt-10 text-center drop-shadow-2xl tracking-tight"
            style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.1, fontSize: 'clamp(60px, 11vw, 96px)' }}
          >
            Scale Your <br /> Enterprise IT Services
          </motion.h1>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <MagneticButton>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold text-white border border-white/80 rounded-lg hover:bg-white/10 hover:border-white transition-all duration-300"
              >
                Contact Us
                <ArrowRight size={20} />
              </Link>
            </MagneticButton>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold text-white border border-white/80 rounded-lg hover:bg-white/10 hover:border-white transition-all duration-300"
            >
              See How We Deliver
              <ArrowRight size={20} />
            </Link>
          </motion.div>

          {/* Stats strip */}

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
