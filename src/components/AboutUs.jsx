import React from 'react';
import { Award, ShieldCheck, Heart, Target, Sparkles, CheckCircle2, User, MapPin } from 'lucide-react';
import { aboutData, hospitalInfo } from '../data/hospitalData';

export default function AboutUs() {
  return (
    <section id="about" className="py-24 relative bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Story Block */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Real Hospital Building & Founder Box */}
          <div className="lg:col-span-5 relative space-y-6">
            
            {/* Real Hospital Exterior Card */}
            <div className="glass-card rounded-3xl overflow-hidden border border-emerald-500/30 shadow-2xl p-2">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-950">
                <img 
                  src={aboutData.buildingImage} 
                  alt="KRS Multispeciality Hospital Building Edappadi" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                <div className="absolute top-3 left-3 bg-emerald-950/90 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/30 flex items-center space-x-1">
                  <Award className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Est. 1996 • Edappadi, Tamil Nadu</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800 space-y-1">
                  <div className="text-xs font-extrabold text-white">KRS Multispeciality Hospital</div>
                  <p className="text-[10px] text-emerald-400 flex items-center space-x-1">
                    <MapPin className="w-3 h-3 shrink-0" />
                    <span>Salem Main Road, Vellandivalasu, Edappadi</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Founder Spotlight Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950 to-slate-950 border border-emerald-500/30 flex items-center space-x-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-slate-950 flex items-center justify-center font-extrabold text-xl shadow-md shrink-0">
                <User className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-white">{hospitalInfo.founder}</h4>
                <p className="text-xs text-emerald-400 font-semibold">MBBS., MHSC (Diabetology)</p>
                <p className="text-[11px] text-slate-400">Founder & Managing Director • Established 1996</p>
              </div>
            </div>

          </div>

          {/* Right Column: Vision & Mission Overview */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-emerald-950/80 border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-300">
                <Target className="w-4 h-4 text-emerald-400" />
                <span>Our Core Principles</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
                A Legacy of Trust in <span className="text-gradient-emerald">Edappadi</span>
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                {aboutData.story}
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                At KRS Multispeciality Hospital, our mission is rooted in a commitment to treat every patient with the same care, empathy, and sincerity we extend to our own family.
              </p>
            </div>

            {/* Vision & Mission Cards Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              
              {/* Our Mission */}
              <div className="glass-panel p-6 rounded-2xl border border-emerald-500/20 space-y-3">
                <div className="flex items-center space-x-2 text-emerald-400 font-bold text-sm">
                  <Heart className="w-5 h-5 text-rose-500" />
                  <span className="text-white font-heading">Our Mission</span>
                </div>
                <div className="space-y-2">
                  {aboutData.mission.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Our Quality Policy */}
              <div className="glass-panel p-6 rounded-2xl border border-emerald-500/20 space-y-3">
                <div className="flex items-center space-x-2 text-emerald-400 font-bold text-sm">
                  <ShieldCheck className="w-5 h-5 text-teal-400" />
                  <span className="text-white font-heading">Quality Policy</span>
                </div>
                <div className="space-y-2">
                  {aboutData.qualityPolicy.slice(0, 4).map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Vision Statements Grid */}
        <div className="glass-card p-8 rounded-3xl border border-emerald-500/30">
          <h3 className="text-xl font-extrabold text-white font-heading mb-6 text-center">
            Our Vision for Healthcare in Edappadi
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {aboutData.vision.map((v, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-200 flex items-start space-x-3">
                <Sparkles className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{v}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
