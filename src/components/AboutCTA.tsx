import { ArrowRight, Briefcase, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

const AboutCTA = () => {
  return (
    <section className="py-12 lg:py-20 pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div
          className="rounded-[3rem] border border-blue-100/50 p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('/images/about-cta1.webp')] lg:bg-[url('/images/about-cta.webp')]"
        >

          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-100/30 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

          {/* Left Text */}
          <div className="lg:w-1/3 relative z-10">
            <h2 className="font-display text-4xl font-bold text-foreground leading-tight mb-6">
              Ready to <span className="text-primary italic">Transform</span> Your Business?
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              Let's discuss how CYBAEM TECH can help you streamline operations, enhance security, and achieve scalable business growth.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
              Contact Us Today <ArrowRight size={16} />
            </Link>
          </div>

          {/* Center spacer to allow background to show through */}
          <div className="lg:w-1/3 hidden lg:block h-64 relative z-10">
          </div>

          {/* Right Features */}
          <div className="lg:w-1/3 relative z-10 flex flex-col gap-8 pl-0 lg:pl-12">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-blue-50 flex items-center justify-center shrink-0">
                <Briefcase size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-sm mb-1">Meaningful Work</h4>
                <p className="text-xs text-muted-foreground">Solve real problems that create impact.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-blue-50 flex items-center justify-center shrink-0">
                <TrendingUp size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-sm mb-1">Growth Mindset</h4>
                <p className="text-xs text-muted-foreground">Learn, grow and unlock your potential.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-blue-50 flex items-center justify-center shrink-0">
                <Users size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-sm mb-1">Amazing People</h4>
                <p className="text-xs text-muted-foreground">Work with talented, passionate people.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
