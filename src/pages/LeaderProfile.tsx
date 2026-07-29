import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { leaders } from './Leadership';
import { Linkedin, ArrowLeft, ArrowRight, Users, Target, Globe, Rocket, Quote } from 'lucide-react';

const LeaderProfile = () => {
  const { id } = useParams<{ id: string }>();

  // Find the leader by matching the slugified name
  const leader = leaders.find(l => 
    l.name.toLowerCase().replace(/\s+/g, '-') === id
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!leader) {
    return <Navigate to="/leadership" replace />;
  }

  // Extract quote if it exists in description (starts and ends with quote marks)
  const paragraphs = leader.description.filter(p => !p.startsWith('"'));
  const quote = leader.description.find(p => p.startsWith('"'));

  return (
    <div className="min-h-screen bg-[#f8fafc] text-foreground font-sans selection:bg-primary/10 selection:text-primary flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          
          <div className="mb-6">
            <Link to="/leadership" className="inline-flex items-center gap-2 text-[15px] font-medium text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft size={18} />
              Back to Leadership
            </Link>
          </div>

          <div className="bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-8 lg:p-12">
            
            <div className="grid lg:grid-cols-[380px_1fr] gap-12 lg:gap-16 mb-12 border-b border-slate-100 pb-12">
              
              {/* Left Column - Image & Info */}
              <div className="flex flex-col">
                <div className="rounded-2xl overflow-hidden bg-slate-100 mb-8 aspect-[4/4.5]">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=' + leader.name.replace(' ', '+') + '&size=600&background=f0f5ff&color=0f4cff';
                    }}
                  />
                </div>
                
                <h1 className="text-[32px] font-bold text-[#051139] mb-1">{leader.name}</h1>
                <p className="text-[17px] text-primary mb-6">{leader.role}</p>
                <div className="w-12 h-[3px] bg-primary mb-6"></div>
                
                {leader.linkedin && (
                  <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-between gap-3 text-sm font-semibold text-slate-700 bg-white px-5 py-3 rounded-xl border border-slate-200 hover:border-primary hover:text-primary transition-all w-fit shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary text-white p-1 rounded">
                         <Linkedin size={16} className="fill-current" />
                      </div>
                      View LinkedIn Profile
                    </div>
                    <ArrowRight size={18} className="text-slate-400" />
                  </a>
                )}
              </div>

              {/* Right Column - Content */}
              <div className="flex flex-col pt-2 lg:pt-4">
                <div className="mb-8">
                   <h3 className="text-xs font-bold tracking-[0.15em] text-primary uppercase mb-3">EXECUTIVE PROFILE</h3>
                   <div className="w-8 h-[2px] bg-primary/30 mb-8"></div>
                   
                   <h2 className="text-[28px] lg:text-[34px] font-bold text-[#051139] leading-tight mb-8">
                     Visionary Leadership. <span className="text-primary">Technology with Purpose.</span>
                   </h2>
                </div>

                <div className="space-y-6 text-[16px] text-slate-600 leading-[1.8] font-medium mb-10">
                  {paragraphs.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                {quote && (
                  <div className="bg-[#f8fafc] rounded-2xl p-8 lg:p-10 relative overflow-hidden mt-auto">
                    {/* Decorative quote marks */}
                    <div className="absolute top-4 left-6 text-primary opacity-20">
                      <Quote size={40} className="fill-current rotate-180" />
                    </div>
                    <div className="absolute bottom-[-10px] right-6 text-primary opacity-5">
                      <Quote size={120} className="fill-current" />
                    </div>
                    
                    <p className="relative z-10 text-[20px] lg:text-[22px] italic font-semibold text-[#051139] leading-snug pl-10 pr-4">
                      {quote.replace(/"/g, '')}
                    </p>
                  </div>
                )}
              </div>
              
            </div>

            {/* Bottom Stats Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
              <div className="flex items-center gap-4 lg:px-4 pt-4 lg:pt-0">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                  <Users size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#051139]">{leader.experience || "15+"}</div>
                  <div className="text-[13px] text-slate-500 font-medium leading-tight">Years of Leadership<br/>Experience</div>
                </div>
              </div>

              <div className="flex items-center gap-4 lg:px-8 pt-4 lg:pt-0">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                  <Target size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#051139]">100+</div>
                  <div className="text-[13px] text-slate-500 font-medium leading-tight">Enterprise Clients<br/>Worldwide</div>
                </div>
              </div>

              <div className="flex items-center gap-4 lg:px-8 pt-4 lg:pt-0">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                  <Globe size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#051139]">20+</div>
                  <div className="text-[13px] text-slate-500 font-medium leading-tight">Countries<br/>Served</div>
                </div>
              </div>

              <div className="flex items-center gap-4 lg:px-8 pt-4 lg:pt-0">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                  <Rocket size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#051139]">1</div>
                  <div className="text-[13px] text-slate-500 font-medium leading-tight">Vision. Mission.<br/>Purpose.</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LeaderProfile;
