import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { 
  Search, 
  Target, 
  PenTool, 
  Code2, 
  FileCheck2, 
  Rocket, 
  Headset 
} from "lucide-react";

const processSteps = [
  {
    num: "01",
    title: "Discovery",
    desc: "Understanding your business & goals",
    icon: Search
  },
  {
    num: "02",
    title: "Strategy",
    desc: "Planning the right solution architecture",
    icon: Target
  },
  {
    num: "03",
    title: "UI/UX Design",
    desc: "Designing experiences users love",
    icon: PenTool
  },
  {
    num: "04",
    title: "Development",
    desc: "Building clean, scalable & secure systems",
    icon: Code2
  },
  {
    num: "05",
    title: "Testing",
    desc: "Rigorous testing for performance & quality",
    icon: FileCheck2
  },
  {
    num: "06",
    title: "Launch",
    desc: "Smooth deployment to production",
    icon: Rocket
  },
  {
    num: "07",
    title: "Support",
    desc: "Ongoing support & continuous improvement",
    icon: Headset
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

const DevelopmentProcess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Track the line's progress separately from the node's active state
  const [lineStep, setLineStep] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    const lineTravelTime = 1000; // 1 second for line to travel
    const cycleTime = 2500; // 2.5 seconds total per node cycle
    
    const interval = setInterval(() => {
      setLineStep((prev) => {
        const nextStep = prev >= processSteps.length - 1 ? 0 : prev + 1;
        
        // Wait for the line to arrive at the next node before lighting it up
        setTimeout(() => {
          setActiveStep(nextStep);
        }, lineTravelTime);
        
        return nextStep;
      });
    }, cycleTime);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0a1930] mb-4">
            Our <span className="text-primary">Development Process</span>
          </h2>
          <p className="text-sm md:text-base text-slate-500">
            A proven process that ensures quality, transparency & on-time delivery.
          </p>
        </div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative max-w-7xl mx-auto"
        >
          {/* Horizontal Connecting Line (Desktop) */}
          <div className="absolute top-10 left-[7%] right-[7%] h-[2px] hidden md:block z-0">
            {/* Dashed background line */}
            <div className="absolute top-0 left-0 w-full h-full border-t-2 border-dashed border-blue-200" />
            {/* Animated solid fill line passing through */}
            <div 
              className="absolute top-[-1px] left-0 h-[2px] bg-primary transition-all duration-1000 ease-in-out"
              style={{ width: `${(lineStep / (processSteps.length - 1)) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-7 gap-8 md:gap-4 relative z-10">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isPast = index <= activeStep;
              const isActive = index === activeStep;
              
              return (
                <motion.div 
                  key={step.num}
                  variants={itemVariants}
                  className="flex flex-col items-center text-center relative group"
                >
                  {/* Icon Circle */}
                  <div className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-700 mb-6 z-10 ${
                    isPast 
                      ? "shadow-[0_10px_30px_rgba(37,99,235,0.4)] border-transparent bg-primary" 
                      : "bg-white shadow-[0_10px_30px_rgba(37,99,235,0.1)] border-2 border-blue-50 group-hover:-translate-y-2 group-hover:border-blue-200"
                  }`}>
                    
                    {/* Ping Animation for Current Step */}
                    {isActive && (
                      <span className="absolute inset-0 w-full h-full rounded-full bg-primary opacity-50 animate-ping" style={{ animationDuration: '2s' }} />
                    )}
                    
                    <Icon 
                      size={28} 
                      className={`relative z-10 transition-colors duration-500 ${isPast ? "text-white" : "text-primary"}`} 
                      strokeWidth={1.5} 
                    />
                  </div>
                  
                  {/* Text Content */}
                  <div>
                    <h3 className={`font-bold text-sm mb-2 whitespace-nowrap transition-colors duration-300 ${isPast ? "text-primary" : "text-[#0a1930]"}`}>
                      {step.num}. {step.title}
                    </h3>
                    <p className="text-[11px] leading-relaxed text-slate-500 font-medium px-2">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default DevelopmentProcess;
