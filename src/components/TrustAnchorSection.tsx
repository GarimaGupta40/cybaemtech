import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Award, Activity, Users, Clock, CheckCircle, Network, Settings, Cloud, RefreshCw, BarChart3, Shield, ArrowRight, Server, Code, Monitor, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { containerVariants, itemVariants } from "@/lib/animations";
import awsLogo from "@/assets/aws-logo.svg";
import microsoftLogo from "@/assets/microsoft-logo.svg";
import iso27017Logo from "@/assets/iso-27017-logo.png";
import iso27001Logo from "@/assets/iso-27001-logo.jpeg";
import sectionNetwork from "@/assets/section-network.avif";

// Partner logos
import partnerAws from "@/assets/partners/aws.svg";
import partnerMicrosoft from "@/assets/partners/microsoft.svg";
import partnerDell from "@/assets/partners/dell.svg";
import partnerHp from "@/assets/partners/hp.svg";
import partnerLenovo from "@/assets/partners/lenovo.svg";
import partnerAzure from "@/assets/partners/azure.svg";
import partnerFortinet from "@/assets/partners/fortinet.svg";
import partnerSophos from "@/assets/partners/sophos.jpg";
import partnerTataTele from "@/assets/partners/tata-tele.png";
import partnerEset from "@/assets/partners/eset.svg";
import partnerRedington from "@/assets/partners/redington.png";
import partnerMass from "@/assets/partners/mass.webp";
import partnerEnticesoft from "@/assets/partners/enticesoft.png";
import partnerRazorpay from "@/assets/partners/razorpay.png";

const useCounter = (end: number, duration: number = 2000, start: number = 0, inView: boolean = false) => {
  const [count, setCount] = useState(start);
  useEffect(() => {
    if (!inView) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * (end - start) + start));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start, inView]);
  return count;
};

const CertBadge = ({ children, subtitle }: { children: React.ReactNode; subtitle: string }) => (
  <motion.div className="flex flex-col items-center justify-center py-10 px-6 rounded-[2rem] bg-white shadow-[0_0_35px_rgba(29,78,216,0.12)] hover:shadow-[0_0_45px_rgba(29,78,216,0.22)] transition-all duration-300 border border-blue-50/50">
    <div className="h-16 flex items-center justify-center mb-6">
      {children}
    </div>
    <span className="text-[13px] font-bold text-[#0a1128] text-center whitespace-pre-line leading-relaxed">{subtitle}</span>
  </motion.div>
);

/* ── Partner logos ── */
const partners = [
  { name: "GlobalSign", logo: null },
  { name: "Microsoft", logo: partnerMicrosoft },
  { name: "Dell", logo: partnerDell },
  { name: "HP", logo: partnerHp },
  { name: "Lenovo", logo: partnerLenovo },
  { name: "AWS", logo: partnerAws },
  { name: "Azure", logo: partnerAzure },
  { name: "Fortinet", logo: partnerFortinet },
  { name: "Sophos", logo: partnerSophos },
];

const PartnerLogo = ({ name, logo }: { name: string; logo: string | null }) => (
  <div className="flex-shrink-0 flex items-center justify-center w-[140px] h-[80px] px-2">
    {logo ? (
      <img
        src={logo}
        alt={name}
        className="h-16 max-w-[120px] object-contain"
        loading="lazy"
        width={120}
        height={64}
      />
    ) : (
      <span className="font-display font-bold text-sm text-muted-foreground/70 whitespace-nowrap tracking-wide">
        {name}
      </span>
    )}
  </div>
);

const ClientLogosMarquee = () => (
  <motion.div variants={itemVariants} className="pb-8 w-full">
    <div className="text-center mb-4">
      <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-[#1d4ed8]">
        # OUR PARTNERS
      </span>
    </div>
    <div className="relative bg-white py-6 shadow-[0_0_35px_rgba(29,78,216,0.12)] border-y border-blue-50/50 overflow-hidden">
      <div className="flex items-center gap-8 animate-marquee">
        {[...partners, ...partners, ...partners].map((p, i) => (
          <PartnerLogo key={`${p.name}-${i}`} name={p.name} logo={p.logo} />
        ))}
      </div>
    </div>
  </motion.div>
);

const TrustAnchorSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="section-border py-10 lg:py-16 bg-white relative overflow-hidden">

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
          <motion.div variants={itemVariants} className="text-center mb-10">
            <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase text-primary mb-3">WHY IT COMPLIANCE</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Enterprise-Grade <span className="text-primary italic font-light">IT Service Credentials</span>
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10 max-w-5xl mx-auto">
            <CertBadge subtitle="ISO 27001 Certified">
              <img src={iso27001Logo} alt="ISO 27001 Certified" className="h-full w-auto object-contain" />
            </CertBadge>
            <CertBadge subtitle={"ISO 9001:2015\nCertified"}>
              <img src={iso27017Logo} alt="ISO 9001:2015 Certified" className="h-full w-auto object-contain mix-blend-multiply" />
            </CertBadge>
            <CertBadge subtitle={"AWS\nAdvanced Partner"}>
              <img src={awsLogo} alt="AWS Advanced Partner" className="h-full w-auto object-contain" />
            </CertBadge>
            <CertBadge subtitle="SOC 2 Certified">
              <img src={microsoftLogo} alt="SOC 2 Certified" className="h-full w-auto object-contain scale-[1.6]" />
            </CertBadge>
          </motion.div>
        </motion.div>
      </div>

      {/* Client Logos Marquee - Full Width */}
      <ClientLogosMarquee />

      {/* Mini Solutions Section */}
      <MiniSolutions />
    </section>
  );
};

const miniSolutions = [
  { title: "IT Infrastructure\nServices", desc: "Robust, secure & scalable infrastructure built for availability.", icon: Server, link: "/solutions/it-infrastructure-services" },
  { title: "Managed IT & Security", desc: "24/7 monitoring, proactive threat detection and risk management.", icon: Shield, link: "/solutions/managed-it" },
  { title: "Enterprise Software\nSolutions", desc: "Custom software built for performance, scalability & growth.", icon: Code, link: "/solutions/enterprise-software" },
  { title: "Website Designing", desc: "Creative, conversion driven designs that elevate your brand.", icon: Monitor, link: "/solutions/web-systems" },
  { title: "IT Augmentation", desc: "Top 1% tech talent to extend your team and accelerate delivery.", icon: Users, link: "/solutions/it-staff-augmentation" },
  { title: "Digital Marketing", desc: "Data-driven strategies to grow visibility, leads and revenue.", icon: TrendingUp, link: "/solutions/digital-revenue-growth" },
];

const MiniSolutions = () => (
  <div className="w-full bg-[#060b19] py-16 lg:py-20 mt-12 border-t border-white/5 relative overflow-hidden">
    {/* Background Image Layer */}
    <div className="absolute inset-0 z-0">
      <img src={sectionNetwork} alt="" className="w-full h-full object-cover opacity-40" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#060b19] via-[#060b19]/80 to-[#060b19]" />
    </div>

    <motion.div variants={itemVariants} className="w-full px-4 sm:px-6 max-w-[1400px] mx-auto relative z-10">
      <div className="text-center mb-12">
        <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-3">OUR EXPERTISE</span>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          Expertise That <span className="text-blue-500">Powers</span> Your Business
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4">
        {miniSolutions.map((sol, i) => (
          <div key={i} className="bg-[#0a1128]/40 rounded-xl p-5 lg:p-6 flex flex-col items-center text-center transition-all duration-300 border border-slate-800/80 hover:border-blue-500/60 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] h-full group relative overflow-hidden">
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            
            <div className="w-12 h-12 flex items-center justify-center mb-4 text-blue-500 group-hover:text-blue-400 transition-colors relative z-10">
              <sol.icon size={28} strokeWidth={1.5} />
            </div>
            <h3 className="font-bold text-[13px] lg:text-[14px] text-white mb-3 leading-snug relative z-10 whitespace-pre-line">{sol.title}</h3>
            <p className="text-[11px] text-gray-400 leading-relaxed mb-6 flex-1 relative z-10 px-1">{sol.desc}</p>
            <Link to={sol.link} className="text-blue-500 text-[12px] font-bold inline-flex items-center gap-1.5 hover:text-blue-400 transition-colors mt-auto relative z-10">
              Learn More <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        ))}
      </div>
    </motion.div>
  </div>
);

export default TrustAnchorSection;
