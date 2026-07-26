import React, { useEffect, useRef, useState } from 'react';
import { hospitalInfo } from '../data/hospitalData';
import { Calendar, Users, Award, Stethoscope } from 'lucide-react';

const icons = [Award, Stethoscope, Users, Calendar];

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
    <section ref={ref} className="relative z-20 -mt-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0 overflow-hidden rounded-2xl"
        style={{
          background: '#ffffff',
          boxShadow: '0 12px 40px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)',
          border: '1px solid rgba(15,23,42,0.08)',
        }}>
        {hospitalInfo.stats.map((stat, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <div key={idx} className="relative flex flex-col items-center justify-center p-6 sm:p-8 text-center group"
              style={{
                borderRight: idx < 3 ? '1px solid rgba(15,23,42,0.07)' : 'none',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(16px)',
                transition: `opacity 0.6s ease ${idx * 0.12}s, transform 0.6s ease ${idx * 0.12}s`,
              }}>
              {/* Top accent */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-0.5 rounded-full"
                style={{ background: 'linear-gradient(90deg, transparent, #059669, transparent)' }} />

              {/* Icon */}
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110"
                style={{ background: '#d1fae5', border: '1px solid #a7f3d0' }}>
                <Icon className="w-5 h-5" style={{ color: '#059669' }} />
              </div>

              {/* Value */}
              <div className="text-3xl sm:text-4xl font-extrabold font-heading mb-1" style={{
                background: 'linear-gradient(135deg, #059669, #0d9488)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                {stat.value}
              </div>
              <div className="text-sm font-bold mb-0.5" style={{ color: '#0f172a' }}>{stat.label}</div>
              <div className="text-xs leading-snug" style={{ color: '#64748b' }}>{stat.desc}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
