import React from 'react';
import { Award, ShieldCheck, Heart, Target, Sparkles, CheckCircle2, User, MapPin } from 'lucide-react';
import { aboutData, hospitalInfo } from '../data/hospitalData';

export default function AboutUs() {
  return (
    <section id="about" className="py-24 relative overflow-hidden" style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Story Block */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">

          {/* Left: Hospital Image */}
          <div className="lg:col-span-5 space-y-5">
            <div className="rounded-2xl overflow-hidden border p-2" style={{ background: '#fff', border: '1px solid rgba(15,23,42,0.08)', boxShadow: '0 8px 32px rgba(0,0,0,0.10)' }}>
              <div className="relative rounded-xl overflow-hidden shadow-lg" style={{ aspectRatio: '16/10', background: '#0b1e36' }}>
                <img src={aboutData.buildingImage} alt="KRS Multispeciality Hospital Building Edappadi"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.45) 0%, transparent 60%)' }} />
                <div className="absolute top-3 left-3 flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full shadow-md"
                  style={{ background: '#d1fae5', border: '1px solid #a7f3d0', color: '#047857' }}>
                  <Award className="w-3.5 h-3.5" />
                  Est. 1996 · Edappadi, Tamil Nadu
                </div>
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl shadow-md" style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)', border: '1px solid rgba(15,23,42,0.08)' }}>
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
              <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>
                {aboutData.story}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>
                Our mission is rooted in treating every patient with the same care, empathy, and sincerity we extend to our own family.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {/* Mission */}
              <div className="p-6 rounded-2xl space-y-3" style={{ background: '#f8fafc', border: '1px solid rgba(15,23,42,0.08)' }}>
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
              {/* Quality */}
              <div className="p-6 rounded-2xl space-y-3" style={{ background: '#f8fafc', border: '1px solid rgba(15,23,42,0.08)' }}>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5" style={{ color: '#0d9488' }} />
                  <span className="font-bold font-heading text-sm" style={{ color: '#0f172a' }}>Quality Policy</span>
                </div>
                <div className="space-y-2">
                  {aboutData.qualityPolicy.slice(0, 4).map((item, idx) => (
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
