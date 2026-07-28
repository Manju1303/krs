import React, { useState, useEffect } from 'react';
import { Award, ShieldCheck, Heart, Target, Sparkles, CheckCircle2, User, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { aboutData, hospitalInfo } from '../data/hospitalData';

export default function AboutUs() {
  const buildingImages = aboutData.buildingImages || [aboutData.buildingImage];
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % buildingImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [buildingImages.length]);

  return (
    <section id="about" className="py-24 relative overflow-hidden" style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Story Block */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">

          {/* Left: Hospital Image */}
          <div className="lg:col-span-5 space-y-5">
            <div className="rounded-2xl overflow-hidden border p-2" style={{ background: '#fff', border: '1px solid rgba(15,23,42,0.08)', boxShadow: '0 8px 32px rgba(0,0,0,0.10)' }}>
              <div className="relative rounded-xl overflow-hidden shadow-lg bg-slate-900 aspect-[4/3] group/carousel">
                {/* Images with soft backdrop for 100% full view fit */}
                {buildingImages.map((imgUrl, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out bg-slate-950 ${idx === currentIdx ? 'opacity-100' : 'opacity-0'}`}
                  >
                    {/* Blurred backdrop fill */}
                    <img
                      src={imgUrl}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-50 select-none pointer-events-none"
                      aria-hidden="true"
                    />
                    {/* Crisp main image (100% zoomed out & complete building visible) */}
                    <img
                      src={imgUrl}
                      alt={`KRS Multispeciality Hospital Building Edappadi - View ${idx + 1}`}
                      className="relative z-10 w-full h-full object-contain drop-shadow-xl"
                    />
                  </div>
                ))}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 pointer-events-none z-10" style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.45) 0%, transparent 60%)' }} />

                {/* Left Arrow */}
                <button
                  onClick={() => setCurrentIdx((prev) => (prev - 1 + buildingImages.length) % buildingImages.length)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center bg-white/80 hover:bg-white text-slate-800 shadow-md backdrop-blur-sm opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 z-20"
                  aria-label="Previous Image"
                >
                  <ChevronLeft className="w-4 h-4 text-emerald-850" />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={() => setCurrentIdx((prev) => (prev + 1) % buildingImages.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center bg-white/80 hover:bg-white text-slate-800 shadow-md backdrop-blur-sm opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 z-20"
                  aria-label="Next Image"
                >
                  <ChevronRight className="w-4 h-4 text-emerald-850" />
                </button>

                {/* Dot Indicators */}
                <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                  {buildingImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIdx(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIdx ? 'bg-emerald-500 w-4' : 'bg-white/60 hover:bg-white'}`}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Est. Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full shadow-md z-20"
                  style={{ background: '#d1fae5', border: '1px solid #a7f3d0', color: '#047857' }}>
                  <Award className="w-3.5 h-3.5" />
                  Est. 1996 · Edappadi, Tamil Nadu
                </div>

                {/* Hospital Tag Overlay */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl shadow-md z-20" style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)', border: '1px solid rgba(15,23,42,0.08)' }}>
                  <div className="text-xs font-bold" style={{ color: '#0f172a' }}>KRS Multispeciality Hospital</div>
                  <div className="flex items-center gap-1 mt-0.5 text-[10px]" style={{ color: '#059669' }}>
                    <MapPin className="w-3 h-3 shrink-0" />
                    Salem Main Road, Vellandivalasu, Edappadi
                  </div>
                </div>
              </div>
            </div>

            {/* About Our Founder Section */}
            <div className="p-6 rounded-3xl space-y-5" style={{ background: 'linear-gradient(135deg, #f0fdf4, #ecfdf5)', border: '1px solid #a7f3d0', boxShadow: '0 4px 20px rgba(5,150,105,0.08)' }}>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="w-32 sm:w-36 h-40 sm:h-44 rounded-2xl overflow-hidden shrink-0 shadow-lg border-2 border-emerald-400 bg-white">
                  <img
                    src={`${import.meta.env.BASE_URL || '/'}images/doctors/ravisuthan.jpg`}
                    alt={hospitalInfo.founder}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="space-y-2 text-center sm:text-left flex-1">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md text-emerald-800 bg-emerald-100 border border-emerald-200">
                    Founder & Managing Director
                  </span>
                  <h4 className="text-xl font-extrabold font-heading text-slate-900 leading-tight">
                    {hospitalInfo.founder}
                  </h4>
                  <p className="text-xs font-bold text-emerald-700">
                    MBBS., MHSC (Diabetology)
                  </p>
                  <p className="text-xs font-semibold text-slate-600">
                    Primary Consultant Diabetologist
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed italic pt-1 border-t border-emerald-200/60">
                    "Established KRS Hospital in 1996 with a vision to deliver transparent, ethical, and compassionate medical care to every family in Edappadi."
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-emerald-200/60 text-center">
                <div className="p-2 rounded-xl bg-white/80 border border-emerald-200/50">
                  <div className="text-xs font-extrabold text-emerald-700">28+ Years</div>
                  <div className="text-[10px] text-slate-500 font-medium">Clinical Leadership</div>
                </div>
                <div className="p-2 rounded-xl bg-white/80 border border-emerald-200/50">
                  <div className="text-xs font-extrabold text-emerald-700">Est. 1996</div>
                  <div className="text-[10px] text-slate-500 font-medium">Serving Edappadi</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Vision & Mission */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="section-divider" style={{ margin: '0 0 14px' }} />
              <div className="flex flex-wrap items-center gap-2">
                <span className="section-label-pill">
                  <Target className="w-3.5 h-3.5" />
                  Our Core Principles
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 font-tamil">
                  28+ ஆண்டுகள் தொடரும் மக்கள் நம்பிக்கை
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold font-heading mt-3" style={{ color: '#0f172a' }}>
                A Legacy of Trust in <span className="text-gradient-emerald">Edappadi</span>
              </h2>
              <div className="space-y-3">
                {aboutData.story.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-sm leading-relaxed text-slate-600">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {/* Mission */}
              <div className="p-6 rounded-2xl space-y-3 flex flex-col justify-between" style={{ background: '#f8fafc', border: '1px solid rgba(15,23,42,0.08)' }}>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5" style={{ color: '#dc2626' }} />
                    <span className="font-bold font-heading text-sm" style={{ color: '#0f172a' }}>Our Mission</span>
                  </div>
                  <div className="space-y-2">
                    {aboutData.mission.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm font-semibold" style={{ color: '#334155' }}>
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: '#059669' }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {aboutData.missionClosing && (
                  <p className="text-xs italic font-bold text-emerald-805 pt-2 border-t border-slate-200">
                    "{aboutData.missionClosing}"
                  </p>
                )}
              </div>
              {/* Quality */}
              <div className="p-6 rounded-2xl space-y-3" style={{ background: '#f8fafc', border: '1px solid rgba(15,23,42,0.08)' }}>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5" style={{ color: '#0d9488' }} />
                  <span className="font-bold font-heading text-sm" style={{ color: '#0f172a' }}>Our Quality Policy</span>
                </div>
                <div className="space-y-2">
                  {aboutData.qualityPolicy.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm font-semibold" style={{ color: '#334155' }}>
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: '#0d9488' }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Grid */}
        <div className="p-8 rounded-2xl" style={{ background: '#f8fafc', border: '1px solid rgba(15,23,42,0.08)' }}>
          <h3 className="text-xl font-extrabold font-heading text-center mb-6" style={{ color: '#0f172a' }}>
            Our Vision for Healthcare in Edappadi
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {aboutData.vision.map((v, idx) => (
              <div key={idx} className="p-4 rounded-xl flex items-start gap-3 text-sm font-semibold hover-card-lift" style={{ background: '#fff', border: '1px solid rgba(15,23,42,0.07)', color: '#334155' }}>
                <Sparkles className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#059669' }} />
                <span>{v}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
