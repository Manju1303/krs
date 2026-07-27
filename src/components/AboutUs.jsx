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

            {/* Founder Card */}
            <div className="p-4 rounded-2xl flex items-center gap-4" style={{ background: '#f0fdf4', border: '1px solid #a7f3d0' }}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #059669, #0d9488)' }}>
                <User className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold font-heading" style={{ color: '#0f172a' }}>{hospitalInfo.founder}</h4>
                <p className="text-xs font-semibold" style={{ color: '#059669' }}>MBBS., MHSC (Diabetology)</p>
                <p className="text-[11px]" style={{ color: '#64748b' }}>Founder & Managing Director · Est. 1996</p>
              </div>
            </div>
          </div>

          {/* Right: Vision & Mission */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="section-divider" style={{ margin: '0 0 14px' }} />
              <span className="section-label-pill">
                <Target className="w-3.5 h-3.5" />
                Our Core Principles
              </span>
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
                      <div key={idx} className="flex items-start gap-2 text-xs" style={{ color: '#475569' }}>
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: '#059669' }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {aboutData.missionClosing && (
                  <p className="text-[11px] italic font-medium text-emerald-800 pt-2 border-t border-slate-200">
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
                    <div key={idx} className="flex items-start gap-2 text-xs" style={{ color: '#475569' }}>
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
              <div key={idx} className="p-4 rounded-xl flex items-start gap-3 text-xs" style={{ background: '#fff', border: '1px solid rgba(15,23,42,0.07)', color: '#475569' }}>
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
