import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { webSystemsSeoData } from "@/data/seo/webSystemsSeo";
import { Globe, ShoppingCart, Palette, MousePointerClick, PenTool, Layers, BookOpen, ArrowRight, Star, Mail, Phone, Rocket, Shield, Headset, Lock, PlayCircle, Users, ShieldCheck, Zap, TrendingUp, Box, Monitor, PieChart, Smartphone, Target, Lightbulb, MoreHorizontal } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MagneticButton } from "@/components/Navbar";
import { containerVariants, itemVariants } from "@/lib/animations";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { solutionsData } from "@/data/solutionsData";
import PlatformFitFinder from "@/components/PlatformFitFinder";
import CareFromAnywhere from "@/components/CareFromAnywhere";
import WebDesignMoodBoard from "@/components/WebDesignMoodBoard";
import SolutionsShowcase from "@/components/SolutionsShowcase";
import DevelopmentProcess from "@/components/DevelopmentProcess";

/* ─── Data ─── */
const data = solutionsData["web-systems"];

const categories = [
  {
    icon: Globe,
    title: "Business & Corporate",
    purpose: "To establish credibility and generate leads.",
    description: "These act as a digital brochure for a company. They provide information about services, the company's mission, and contact details.",
    example: "A site for a managed IT provider that details support models and service level agreements.",
    features: '"About Us" sections, service lists, and "Contact" forms.',
    image: "/images/web-corporate.avif",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Websites",
    purpose: "To facilitate online sales and transactions.",
    description: "These are online storefronts where users can browse, shop, and pay for products or services directly.",
    features: "Product catalogs, shopping carts, and secure payment gateway integrations.",
    image: "/images/web-ecommerce.avif",
  },
  {
    icon: Palette,
    title: "Portfolio Websites",
    purpose: "To act as a visual resume to attract clients or employers.",
    description: "Used by creative professionals (photographers, designers, developers) to showcase their past work and skills.",
    features: "High-quality image galleries, case studies, and testimonial sections.",
    image: "/images/web-portfolio.avif",
  },
  {
    icon: MousePointerClick,
    title: "Landing Pages",
    purpose: 'To convert visitors into leads or customers for a specific offer.',
    description: 'A single-page website focused on a specific marketing campaign or a single "Call to Action" (CTA).',
    features: "Minimal navigation, catchy headlines, and a prominent sign-up button or form.",
    image: "/images/web-landing.avif",
  },
  {
    icon: PenTool,
    title: "Blogs & Personal",
    purpose: "To share information, build an audience, or establish thought leadership.",
    description: "Focuses on written content, news, or personal journals. They are often updated regularly with new posts.",
    features: "Categories, tags, search bars, and comment sections.",
    image: "/images/web-blog.avif",
  },
  {
    icon: Layers,
    title: "SaaS & Web Applications",
    purpose: "To provide a specific service or utility via the browser.",
    description: "These are functional tools that users interact with, rather than just read.",
    example: "Project management tools (like Jira-like replicas) or automated dashboards.",
    features: "User authentication (login/signup), data persistence, and interactive interfaces.",
    image: "/images/web-saas.avif",
  },
  {
    icon: BookOpen,
    title: "Educational & Informational",
    purpose: "To educate the public or provide a knowledge base.",
    description: 'Includes "Wikis" or resource portals that provide deep-dive information on specific topics.',
    features: "Extensive search functionality, internal linking, and often a community-driven editing system.",
    image: "/images/web-educational.avif",
  },
];


const galleryImages = [
  "/images/web-corporate.avif",
  "/images/web-ecommerce.avif",
  "/images/web-portfolio.avif",
  "/images/web-landing.avif",
  "/images/web-blog.avif",
  "/images/web-saas.avif",
];

/* ─── Sections ─── */

const Hero = () => (
  <section className="relative pt-12 pb-8 lg:pt-16 lg:pb-12 overflow-hidden bg-background">
    {/* Background Dots Pattern */}
    <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

    <div className="container mx-auto px-6 lg:px-12 relative z-10">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center mb-4 lg:mb-6">

        {/* Left Column */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/60 border border-blue-200/50 mb-6">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.15em] uppercase text-primary">
              Leading Web Systems Solutions
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1 variants={itemVariants} className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-extrabold leading-[1.05] text-[#0a1930] tracking-tight mb-6">
            Web Systems<br />
            Built for<br />
            <span className="text-primary italic font-serif tracking-normal pr-4">Business Growth</span>
          </motion.h1>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg mb-8 font-medium">
            We design, develop, and deliver secure, scalable, high-performance web systems that drive digital transformation and measurable results.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 mb-12">
            <MagneticButton>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-[15px] font-semibold bg-primary text-white rounded-xl shadow-[0_8px_20px_rgba(0,47,135,0.2)] hover:-translate-y-0.5 hover:shadow-[0_12px_25px_rgba(0,47,135,0.3)] transition-all duration-300 w-full sm:w-auto justify-center"
              >
                Explore Our Solutions
                <ArrowRight size={18} />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 text-[15px] font-semibold bg-transparent border border-slate-300 text-[#0a1930] rounded-xl hover:bg-slate-50 transition-colors w-full sm:w-auto justify-center"
              >
                View Our Work
                <PlayCircle size={20} className="text-slate-500" strokeWidth={1.5} />
              </Link>
            </MagneticButton>
          </motion.div>


        </motion.div>

        {/* Right Column - Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.2 }}
          className="relative w-full h-full flex justify-center lg:justify-end items-center"
        >
          {/* Main Hero Image */}
          <div className="relative w-full lg:w-[120%] max-w-[950px] aspect-[4/3] sm:aspect-auto sm:h-[500px] lg:h-[750px] z-20 flex items-center justify-center">
            <img src="/images/web-systems-hero.webp" alt="Web Systems Platforms" className="w-full h-full object-contain drop-shadow-[0_30px_60px_rgba(0,47,135,0.15)] scale-100 lg:scale-110 xl:scale-[1.2] lg:origin-right lg:translate-x-10" />

            {/* Floating Element 1: 500+ Projects */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[15%] left-[5%] xl:-left-[5%] bg-white rounded-2xl p-3 sm:p-4 shadow-[0_15px_30px_rgba(0,47,135,0.1)] border border-slate-100 hidden lg:flex items-center gap-3 z-30"
            >
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                <Users size={20} strokeWidth={2} />
              </div>
              <div>
                <p className="text-sm font-bold text-[#0a1930] leading-tight">500+</p>
                <p className="text-[11px] text-slate-500 font-medium">Projects Delivered</p>
              </div>
            </motion.div>

            {/* Floating Element 2: 99% Client Satisfaction */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-[50%] -left-[5%] lg:-left-[15%] xl:-left-[30%] bg-white rounded-2xl p-3 sm:p-4 shadow-[0_15px_30px_rgba(0,47,135,0.1)] border border-slate-100 hidden lg:flex items-center gap-3 z-30"
            >
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                <ShieldCheck size={20} strokeWidth={2} />
              </div>
              <div>
                <p className="text-sm font-bold text-[#0a1930] leading-tight">99%</p>
                <p className="text-[11px] text-slate-500 font-medium">Client Satisfaction</p>
              </div>
            </motion.div>

            {/* Floating Element 3: 24/7 Support */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-[10%] right-[25%] xl:right-[35%] bg-white rounded-2xl p-3 sm:p-4 shadow-[0_15px_30px_rgba(0,47,135,0.1)] border border-slate-100 hidden lg:flex items-center gap-3 z-30"
            >
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                <Headset size={20} strokeWidth={2} />
              </div>
              <div>
                <p className="text-sm font-bold text-[#0a1930] leading-tight">24/7</p>
                <p className="text-[11px] text-slate-500 font-medium">Support Available</p>
              </div>
            </motion.div>
          </div>

          {/* Decorative background glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[80%] bg-blue-100/40 blur-[80px] rounded-full z-0 pointer-events-none" />
        </motion.div>

      </div>

      {/* Bottom Stats Strip */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="w-full bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-[0_20px_50px_rgba(0,47,135,0.08)] p-6 sm:p-8 relative z-20 mt-2 lg:-mt-4 border border-blue-50"
      >
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-100">

          {/* Item 1 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left pt-4 md:pt-0 pl-0 md:pl-4 first:pt-0 first:pl-0">
            <div className="w-12 h-12 rounded-full bg-blue-50 shadow-[0_5px_15px_rgba(37,99,235,0.15)] flex items-center justify-center text-primary mb-3">
              <Rocket size={20} strokeWidth={2} />
            </div>
            <div>
              <h2 className="font-bold text-[#0a1930] text-sm mb-0.5">10+</h2>
              <p className="text-xs text-slate-500 font-medium">Years of Excellence</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left pt-4 md:pt-0 pl-0 md:pl-4 first:pt-0 first:pl-0">
            <div className="w-12 h-12 rounded-full bg-blue-50 shadow-[0_5px_15px_rgba(37,99,235,0.15)] flex items-center justify-center text-primary mb-3">
              <Shield size={20} strokeWidth={2} />
            </div>
            <div>
              <h3 className="font-bold text-[#0a1930] text-sm mb-0.5">ISO</h3>
              <p className="text-xs text-slate-500 font-medium">Certified Process</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left pt-4 md:pt-0 pl-0 md:pl-4 first:pt-0 first:pl-0">
            <div className="w-12 h-12 rounded-full bg-blue-50 shadow-[0_5px_15px_rgba(37,99,235,0.15)] flex items-center justify-center text-primary mb-3">
              <Headset size={20} strokeWidth={2} />
            </div>
            <div>
              <h2 className="font-bold text-[#0a1930] text-sm mb-0.5">24/7</h2>
              <p className="text-xs text-slate-500 font-medium">Support Available</p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left pt-4 md:pt-0 pl-0 md:pl-4 first:pt-0 first:pl-0">
            <div className="w-12 h-12 rounded-full bg-blue-50 shadow-[0_5px_15px_rgba(37,99,235,0.15)] flex items-center justify-center text-primary mb-3">
              <Lock size={20} strokeWidth={2} />
            </div>
            <div>
              <h3 className="font-bold text-[#0a1930] text-sm mb-0.5">Secure</h3>
              <p className="text-xs text-slate-500 font-medium">Enterprise Grade</p>
            </div>
          </div>

          {/* Item 5 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left pt-4 md:pt-0 pl-0 md:pl-4 first:pt-0 first:pl-0">
            <div className="w-12 h-12 rounded-full bg-blue-50 shadow-[0_5px_15px_rgba(37,99,235,0.15)] flex items-center justify-center text-primary mb-3">
              <Globe size={20} strokeWidth={2} />
            </div>
            <div>
              <h3 className="font-bold text-[#0a1930] text-sm mb-0.5">Global</h3>
              <p className="text-xs text-slate-500 font-medium">Client Presence</p>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  </section>
);

const featuredProjectsData = [
  { image: "/images/website/astha.webp", icon: Monitor },
  { image: "/images/website/batara.webp", icon: PieChart },
  { image: "/images/website/carbonhive.webp", icon: Smartphone },
  { image: "/images/website/rasa.webp", icon: Monitor },
  { image: "/images/website/shrisat.webp", icon: PieChart },
  { image: "/images/website/surya.webp", icon: Smartphone }
];

const FeaturedProjects = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })

    const interval = setInterval(() => {
      api.scrollNext()
    }, 3500)

    return () => {
      clearInterval(interval)
      api.off("select", () => {
        setCurrent(api.selectedScrollSnap())
      })
    }
  }, [api])

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden section-border">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl mb-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3 block">
              Our Work
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-3 text-slate-900">
              Featured <span className="text-primary italic">Projects</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-xl">
              Innovative solutions designed to drive results and create impact.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[100vw] px-0 pb-16">
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full relative"
        >
          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 lg:px-12 z-20 pointer-events-none">
            <CarouselPrevious className="static translate-y-0 w-12 h-12 shadow-lg border-slate-100 bg-white text-slate-700 hover:bg-primary/10 hover:text-primary hover:border-primary/20 pointer-events-auto" />
            <CarouselNext className="static translate-y-0 w-12 h-12 shadow-lg border-slate-100 bg-white text-slate-700 hover:bg-primary/10 hover:text-primary hover:border-primary/20 pointer-events-auto" />
          </div>

          <CarouselContent className="flex items-center py-10">
            {featuredProjectsData.map((project, idx) => {
              const isActive = current === idx;
              const Icon = project.icon;
              return (
                <CarouselItem
                  key={idx}
                  className="flex justify-center items-center basis-[85%] sm:basis-[60%] md:basis-[45%] lg:basis-[33.33%]"
                >
                  <div className="relative pb-10 w-full">
                    <div className={`w-full bg-white rounded-[24px] transition-all duration-700 ease-in-out flex flex-col ${isActive ? 'scale-[1.05] z-10 opacity-100 border border-transparent shadow-[0_0_40px_hsl(var(--primary)/0.25)]' : 'scale-95 opacity-80 z-0 shadow-sm border border-slate-100'}`}>
                      <div className="rounded-[22px] overflow-hidden bg-transparent flex items-center justify-center p-1">
                        <img
                          src={project.image}
                          alt="Project"
                          className="w-full h-auto object-contain rounded-[18px]"
                        />
                      </div>
                    </div>
                    {/* Floating Icon */}
                    <div className={`absolute bottom-3 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full flex flex-col items-center justify-center transition-all duration-700 ${isActive ? 'bg-primary text-primary-foreground shadow-xl scale-110 z-20' : 'bg-primary/10 text-primary/60 z-10 shadow-sm'}`}>
                      <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                    </div>
                    <div className={`absolute -bottom-3 left-1/2 -translate-x-1/2 transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-40'}`}>
                      <MoreHorizontal size={24} className="text-slate-400" />
                    </div>
                  </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-12 gap-2 relative z-20">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${current === index ? 'w-8 bg-primary' : 'w-2 bg-slate-200 hover:bg-slate-300'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>

      {/* 4 Feature Columns */}
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl pt-12 border-t border-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full shrink-0 flex items-center justify-center text-primary bg-white">
              <Target size={32} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-bold text-[#0f172a] text-[15px] mb-1">Business Focused</h3>
              <p className="text-slate-500 text-[13px] leading-relaxed">Solutions aligned with your goals to drive real business growth.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full shrink-0 flex items-center justify-center text-primary bg-white">
              <Lightbulb size={32} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-bold text-[#0f172a] text-[15px] mb-1">Innovative Approach</h3>
              <p className="text-slate-500 text-[13px] leading-relaxed">Cutting-edge technology and creative thinking at every step.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full shrink-0 flex items-center justify-center text-primary bg-white">
              <ShieldCheck size={32} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-bold text-[#0f172a] text-[15px] mb-1">Reliable & Scalable</h3>
              <p className="text-slate-500 text-[13px] leading-relaxed">Robust, secure and scalable solutions built for the future.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full shrink-0 flex items-center justify-center text-primary bg-white">
              <Headset size={32} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-bold text-[#0f172a] text-[15px] mb-1">Expert Support</h3>
              <p className="text-slate-500 text-[13px] leading-relaxed">Dedicated support and guidance whenever you need us.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CategoriesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section ref={ref} className="py-16 sm:py-24 lg:py-32 section-border bg-[hsl(var(--card))]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <motion.span variants={itemVariants} className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3 sm:mb-4 block">
            What We Build
          </motion.span>
          <motion.h2 variants={itemVariants} className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-3 sm:mb-4 max-w-2xl">
            Care from <span className="text-primary italic">Anywhere</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-xl mb-10 sm:mb-12 lg:mb-16">
            With secure, high-performance platforms, reaching your audience becomes effortless — whether B2B, B2C, or internal.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                variants={itemVariants}
                className="group glass-panel rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 cursor-pointer hover:-translate-y-2 h-full flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <cat.icon size={32} className="text-primary" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {cat.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed flex-1">
                  {cat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const relatedTitles = data?.relatedSlugs?.map((s) => solutionsData[s]?.title || s) || [];

  return (
    <section ref={ref} className="py-12 lg:py-16 bg-white relative">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="max-w-6xl mx-auto">
          <div className="bg-[#f8fafc] border border-slate-100 rounded-[32px] lg:rounded-[40px] overflow-hidden shadow-sm flex flex-col">

            {/* Top Area */}
            <div className="p-8 lg:p-12 flex flex-col items-center text-center">
              <motion.span variants={itemVariants} className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary text-[11px] font-bold tracking-[0.15em] uppercase mb-4 border border-primary/20">
                LET&apos;S BUILD SOMETHING GREAT
              </motion.span>

              <motion.h2 variants={itemVariants} className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold leading-[1.1] mb-4 text-[#0f172a]">
                Ready to Build Your<br />
                Next-Gen <span className="text-primary">Web Platform?</span>
              </motion.h2>

              <motion.p variants={itemVariants} className="text-[14px] lg:text-[15px] text-slate-500 leading-relaxed mb-8 max-w-2xl mx-auto font-medium">
                Partner with our experts to turn your ideas into a powerful,<br className="hidden sm:block" />
                scalable, and future-ready digital platform.
              </motion.p>

              <motion.div variants={itemVariants} className="mb-10">
                <MagneticButton>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 px-8 py-3.5 text-[14px] font-semibold bg-[#0f172a] text-white rounded-[12px] hover:bg-primary transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    Start a Project
                    <ArrowRight size={18} />
                  </Link>
                </MagneticButton>
              </motion.div>

              {/* Separator line */}
              <div className="w-full h-px bg-slate-200/60 mb-8" />

              {/* 3 Features */}
              <motion.div variants={itemVariants} className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative text-left">

                {/* Feature 1 */}
                <div className="flex flex-col items-center sm:flex-row sm:items-start text-center sm:text-left gap-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Shield size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-[#0f172a] font-bold text-[14px] lg:text-[15px] mb-1">Enterprise Grade</h3>
                    <p className="text-slate-500 text-[12px] lg:text-[13px] font-medium leading-relaxed">Secure, reliable &<br />built to scale</p>
                  </div>
                </div>

                {/* Vertical Divider 1 */}
                <div className="hidden md:block absolute left-1/3 top-2 bottom-2 w-px bg-slate-200/60" />

                {/* Feature 2 */}
                <div className="flex flex-col items-center sm:flex-row sm:items-start text-center sm:text-left gap-4 md:pl-4 lg:pl-6">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Zap size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-[#0f172a] font-bold text-[14px] lg:text-[15px] mb-1">High Performance</h3>
                    <p className="text-slate-500 text-[12px] lg:text-[13px] font-medium leading-relaxed">Optimized for speed<br />and seamless experience</p>
                  </div>
                </div>

                {/* Vertical Divider 2 */}
                <div className="hidden md:block absolute left-[66.666%] top-2 bottom-2 w-px bg-slate-200/60" />

                {/* Feature 3 */}
                <div className="flex flex-col items-center sm:flex-row sm:items-start text-center sm:text-left gap-4 md:pl-4 lg:pl-6">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <TrendingUp size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-[#0f172a] font-bold text-[14px] lg:text-[15px] mb-1">Results Driven</h3>
                    <p className="text-slate-500 text-[12px] lg:text-[13px] font-medium leading-relaxed">Built to convert,<br />engage & grow</p>
                  </div>
                </div>

              </motion.div>
            </div>

            {/* Bottom Related Solutions Area */}
            {data?.relatedSlugs?.length > 0 && (
              <motion.div variants={itemVariants} className="bg-[#f1f5f9]/60 px-6 py-6 lg:px-8 lg:py-8 flex flex-col items-center border-t border-slate-200/60">
                <div className="flex items-center gap-4 mb-6 w-full max-w-2xl">
                  <div className="h-px bg-primary/20 flex-1 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-primary/40"></div></div>
                  <h4 className="text-[#0f172a] font-bold text-[14px] lg:text-[15px]">Explore Related Solutions</h4>
                  <div className="h-px bg-primary/20 flex-1 relative"><div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-primary/40"></div></div>
                </div>

                <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
                  {data.relatedSlugs.map((slug, i) => (
                    <Link
                      key={slug}
                      to={`/solutions/${slug}`}
                      className="inline-flex items-center gap-2 lg:gap-3 px-5 py-2.5 lg:px-6 lg:py-3 text-[13px] lg:text-[14px] font-bold border border-slate-200 bg-[#f8fafc] rounded-full text-[#0f172a] hover:border-blue-300 hover:text-blue-600 hover:bg-white transition-all shadow-sm group"
                    >
                      <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-md bg-blue-50 flex items-center justify-center text-blue-500">
                        {i % 2 === 0 ? <Box size={14} strokeWidth={2.5} /> : <TrendingUp size={14} strokeWidth={2.5} />}
                      </div>
                      {relatedTitles[i]}
                      <ArrowRight size={14} className="text-slate-400 group-hover:text-blue-600 transition-colors lg:w-4 lg:h-4" />
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}

          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ─── Page ─── */

const WebSystems = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SEOHead
        title={webSystemsSeoData.title}
        description={webSystemsSeoData.description}
        canonical={webSystemsSeoData.canonical}
        keywords={webSystemsSeoData.keywords}
        ogTitle={webSystemsSeoData.ogTitle}
        ogDescription={webSystemsSeoData.ogDescription}
        twitterTitle={webSystemsSeoData.twitterTitle}
        twitterDescription={webSystemsSeoData.twitterDescription}
        jsonLd={webSystemsSeoData.jsonLd}
      />
      <Navbar />
      <Hero />
      <SolutionsShowcase />
      <DevelopmentProcess />
      <FeaturedProjects />
      <CareFromAnywhere />
      <div id="platform-fit-finder">
        <PlatformFitFinder />
      </div>
      <WebDesignMoodBoard />
      <CTASection />
      <Footer />
    </div>
  );
};

export default WebSystems;
