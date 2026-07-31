import { ArrowRight, Trophy, Lightbulb, Handshake } from "lucide-react";
import { Link } from "react-router-dom";

const PortfolioCTA = () => {
  return (
    <section className="py-12 lg:py-20 pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div 
          className="rounded-[3rem] border border-blue-100/50 p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden bg-gradient-to-br from-white via-[#f0f7ff] to-[#e0efff]"
        >
          
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Dotted Grid */}
            <div className="absolute inset-0 opacity-[0.25]" style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
            
            {/* Soft ambient glows */}
            <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-400/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-indigo-400/20 rounded-full blur-[120px]" />

            {/* Sweeping Glass Waves */}
            <svg className="absolute w-full h-full inset-0" viewBox="0 0 1440 800" preserveAspectRatio="none">
              {/* Background Wave */}
              <path 
                d="M0,400 C240,200 480,800 960,600 C1200,500 1440,300 1440,300 L1440,800 L0,800 Z" 
                fill="url(#glass-gradient-1)" 
                className="opacity-40 mix-blend-overlay"
              />
              {/* Middle Wave */}
              <path 
                d="M0,600 C320,800 640,200 1060,400 C1270,500 1440,100 1440,100 L1440,800 L0,800 Z" 
                fill="url(#glass-gradient-2)" 
                className="opacity-50"
              />
              {/* Foreground Wave */}
              <path 
                d="M0,800 C480,500 960,900 1440,500 L1440,800 L0,800 Z" 
                fill="url(#glass-gradient-3)" 
                className="opacity-70"
              />
              <defs>
                <linearGradient id="glass-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="glass-gradient-2" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="glass-gradient-3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#eff6ff" stopOpacity="1" />
                  <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0.6" />
                </linearGradient>
              </defs>
            </svg>

            {/* Connecting Lines and Nodes */}
            <svg className="absolute w-full h-full inset-0" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice">
              <path d="M-100,200 Q400,600 900,200 T1540,400" fill="none" stroke="url(#line-glow)" strokeWidth="1.5" className="opacity-60" />
              <path d="M-100,500 Q300,100 800,500 T1540,100" fill="none" stroke="url(#line-glow)" strokeWidth="1" className="opacity-40" />
              <path d="M200,800 Q700,300 1200,700 T1540,200" fill="none" stroke="url(#line-glow)" strokeWidth="1" className="opacity-30" />
              
              {/* Light Nodes */}
              <circle cx="200" cy="360" r="3" fill="#fff" className="drop-shadow-[0_0_8px_rgba(255,255,255,1)] animate-pulse" />
              <circle cx="650" cy="380" r="2.5" fill="#fff" className="drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]" style={{animationDelay: '1s'}} />
              <circle cx="1050" cy="275" r="3.5" fill="#fff" className="drop-shadow-[0_0_10px_rgba(255,255,255,1)] animate-pulse" style={{animationDelay: '0.5s'}} />
              <circle cx="450" cy="300" r="2" fill="#fff" className="drop-shadow-[0_0_5px_rgba(255,255,255,0.8)] animate-pulse" style={{animationDelay: '1.2s'}} />
              <circle cx="950" cy="570" r="2.5" fill="#fff" className="drop-shadow-[0_0_8px_rgba(255,255,255,1)]" style={{animationDelay: '0.8s'}} />

              <defs>
                <linearGradient id="line-glow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                  <stop offset="50%" stopColor="rgba(255,255,255,1)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </linearGradient>
              </defs>
            </svg>

            {/* Floating Glass Orbs */}
            <div className="absolute top-[10%] left-[8%] w-12 h-12 rounded-full bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_8px_32px_rgba(59,130,246,0.15)]" style={{ animation: 'floating 7s ease-in-out infinite' }} />
            <div className="absolute top-[35%] left-[55%] w-20 h-20 rounded-full bg-blue-50/40 backdrop-blur-md border border-white/60 shadow-[0_8px_32px_rgba(59,130,246,0.1)]" style={{ animation: 'floating 9s ease-in-out infinite reverse' }} />
            <div className="absolute bottom-[20%] left-[30%] w-16 h-16 rounded-full bg-white/30 backdrop-blur-md border border-white/50 shadow-[0_8px_32px_rgba(59,130,246,0.1)]" style={{ animation: 'floating 6s ease-in-out infinite 1s' }} />
            <div className="absolute top-[15%] right-[25%] w-10 h-10 rounded-full bg-white/50 backdrop-blur-md border border-white/70 shadow-[0_8px_32px_rgba(59,130,246,0.15)]" style={{ animation: 'floating 5s ease-in-out infinite 0.5s' }} />
          </div>

          {/* Left Text */}
          <div className="lg:w-1/3 relative z-10">
            <h2 className="font-display text-4xl font-bold text-foreground leading-tight mb-6">
              Inspired by Our Work? <span className="text-primary italic">Let's Build Yours Next.</span>
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              Explore how CYBAEM TECH transforms ideas into scalable digital solutions. If you're ready to start your next project, our team is here to make it happen.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
              Start Your Project <ArrowRight size={16} />
            </Link>
          </div>

          {/* Center spacer to allow background to show through */}
          <div className="lg:w-1/3 hidden lg:block h-64 relative z-10">
          </div>

          {/* Right Features */}
          <div className="lg:w-1/3 relative z-10 flex flex-col gap-8 pl-0 lg:pl-12">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-blue-50 flex items-center justify-center shrink-0">
                <Trophy size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-sm mb-1">Proven Results</h4>
                <p className="text-xs text-muted-foreground">Real-world solutions built for measurable business impact.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-blue-50 flex items-center justify-center shrink-0">
                <Lightbulb size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-sm mb-1">Innovative Solutions</h4>
                <p className="text-xs text-muted-foreground">Modern technologies tailored to your unique goals.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-blue-50 flex items-center justify-center shrink-0">
                <Handshake size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-sm mb-1">Trusted Partnership</h4>
                <p className="text-xs text-muted-foreground">From strategy to deployment, we're with you at every step.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PortfolioCTA;
