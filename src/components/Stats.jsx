import React, { useEffect, useRef, useState } from 'react';
import { hospitalInfo } from '../data/hospitalData';
import { Calendar, Users, Award, Stethoscope, ArrowRight } from 'lucide-react';

export default function Stats() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative z-20 py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* ── Left Column: Giant "28+" Experience Feature (Matching Heltro Template) ── */}
          <div className="lg:col-span-6 flex flex-col md:flex-row items-center gap-6">
            <div className="text-[5.5rem] sm:text-[7rem] font-black font-heading leading-none tracking-tight"
              style={{
                color: '#4A6D8C',
              }}>
              28+
            </div>
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-extrabold uppercase tracking-widest text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                Established 1996
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug font-heading">
                Trusted medical professionals united by one purpose — delivering compassionate, quality healthcare.
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We bring together experienced doctors, skilled nurses, and dedicated healthcare staff to provide accurate diagnosis and treatment.
              </p>
            </div>
          </div>

          {/* ── Right Column: Stat Highlight Cards (Matching Heltro 90% / 135+ cards) ── */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
            
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center hover:shadow-md transition-all">
              <div className="text-3xl sm:text-4xl font-black text-slate-900 font-heading">98%</div>
              <div className="text-xs font-bold text-slate-800 mt-1">Patient Satisfaction</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Based on discharge reviews</div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center hover:shadow-md transition-all">
              <div className="text-3xl sm:text-4xl font-black text-teal-600 font-heading">15+</div>
              <div className="text-xs font-bold text-slate-800 mt-1">Specialties</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Under one roof care</div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center col-span-2 sm:col-span-1 hover:shadow-md transition-all">
              <div className="text-3xl sm:text-4xl font-black text-slate-900 font-heading">50,000+</div>
              <div className="text-xs font-bold text-slate-800 mt-1">Patients Treated</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Since 1996 in Edappadi</div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
