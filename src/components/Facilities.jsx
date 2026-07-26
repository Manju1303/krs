import React from 'react';
import { 
  Building2, Ambulance, HeartPulse, Activity, Scissors, Bed, Pill, Dumbbell, Cpu, CheckCircle2 
} from 'lucide-react';
import { facilities } from '../data/hospitalData';

const iconMap = {
  Ambulance, HeartPulse, Activity, Scissors, Bed, Pill, Dumbbell, Cpu
};

export default function Facilities() {
  return (
    <section id="facilities" className="py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-950/80 border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-300">
            <Building2 className="w-4 h-4 text-emerald-400" />
            <span>Infrastructure & Diagnostics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading">
            State-of-the-Art <span className="text-gradient-emerald">Hospital Facilities</span>
          </h2>
          <p className="text-slate-400 text-base">
            Equipped with modern diagnostic imaging, laminar airflow operation suites, 24/7 emergency trauma bays, and digital healthcare records in Edappadi.
          </p>
        </div>

        {/* Facilities Grid with Real Photos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((fac, idx) => {
            const IconComponent = iconMap[fac.icon] || Activity;
            return (
              <div
                key={idx}
                className="glass-card rounded-3xl overflow-hidden border border-emerald-500/20 hover:border-emerald-400/50 transition-all space-y-4 flex flex-col justify-between group"
              >
                <div>
                  {/* Facility Real Photo */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                    <img 
                      src={fac.image} 
                      alt={fac.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    
                    <span className="absolute top-3 left-3 text-[10px] font-bold bg-emerald-950/90 text-emerald-300 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                      {fac.badge}
                    </span>

                    <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white flex items-center justify-center shadow-lg">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="text-base font-extrabold text-white font-heading group-hover:text-emerald-300 transition-colors">
                      {fac.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {fac.desc}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-0 flex items-center space-x-1 text-[11px] text-emerald-400 font-semibold border-t border-slate-800/80 pt-3">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Real Facility • Edappadi Campus</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
