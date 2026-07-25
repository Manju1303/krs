import React from 'react';
import { hospitalInfo } from '../data/hospitalData';

export default function Stats() {
  return (
    <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {hospitalInfo.stats.map((stat, idx) => (
          <div 
            key={idx}
            className="glass-card p-6 rounded-2xl border border-emerald-500/20 text-center hover:border-emerald-400/50 transition-all shadow-xl group"
          >
            <div className="text-3xl sm:text-4xl font-extrabold text-gradient-emerald font-heading group-hover:scale-110 transition-transform">
              {stat.value}
            </div>
            <div className="text-sm font-bold text-white mt-1">
              {stat.label}
            </div>
            <div className="text-xs text-slate-400 mt-0.5">
              {stat.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
