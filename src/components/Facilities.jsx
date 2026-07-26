import React from 'react';
import { Building2, Ambulance, HeartPulse, Activity, Scissors, Bed, Pill, Dumbbell, Cpu, CheckCircle2 } from 'lucide-react';
import { facilities } from '../data/hospitalData';

const iconMap = { Ambulance, HeartPulse, Activity, Scissors, Bed, Pill, Dumbbell, Cpu };

export default function Facilities() {
  return (
    <section id="facilities" className="py-24 relative overflow-hidden" style={{ background: '#f8fafc' }}>
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="section-divider" />
          <span className="section-label-pill">
            <Building2 className="w-3.5 h-3.5" />
            Infrastructure &amp; Diagnostics
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-heading mt-3" style={{ color: '#0f172a' }}>
            State-of-the-Art <span className="text-gradient-emerald">Facilities</span>
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>
            Modern diagnostic imaging, laminar airflow OTs, 24/7 emergency trauma bays, and digital records — Edappadi.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {facilities.map((fac, idx) => {
            const IconComponent = iconMap[fac.icon] || Activity;
            return (
              <div key={idx} className="premium-card overflow-hidden flex flex-col group">
                {/* Photo */}
                <div className="relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
                  <img src={fac.image} alt={fac.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.30) 0%, transparent 60%)' }} />
                  <span className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full"
                    style={{ background: '#d1fae5', border: '1px solid #a7f3d0', color: '#047857' }}>
                    {fac.badge}
                  </span>
                  <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl flex items-center justify-center shadow-md"
                    style={{ background: 'linear-gradient(135deg, #059669, #0d9488)' }}>
                    <IconComponent className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2 flex-1">
                  <h3 className="text-base font-bold font-heading" style={{ color: '#0f172a' }}>{fac.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: '#64748b' }}>{fac.desc}</p>
                </div>

                <div className="px-5 pb-4 flex items-center gap-1.5 text-[11px] font-semibold"
                  style={{ borderTop: '1px solid rgba(15,23,42,0.06)', paddingTop: '12px', color: '#059669' }}>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Edappadi Campus</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
