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
    <section ref={ref} className="relative z-20 -mt-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
        style={{
          background: 'linear-gradient(135deg, rgba(8,18,35,0.95) 0%, rgba(4,10,22,0.98) 100%)',
          borderRadius: '24px',
          border: '1px solid rgba(52,211,153,0.15)',
          boxShadow: '0 32px 64px -24px rgba(0,0,0,0.8), 0 0 0 1px rgba(52,211,153,0.06)',
          overflow: 'hidden',
          backdropFilter: 'blur(20px)',
        }}
      >
        {hospitalInfo.stats.map((stat, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <div
              key={idx}
              className="relative flex flex-col items-center justify-center p-6 sm:p-8 text-center group"
              style={{
                borderRight: idx < 3 ? '1px solid rgba(52,211,153,0.08)' : 'none',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.6s ease ${idx * 0.12}s, transform 0.6s ease ${idx * 0.12}s`,
              }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, transparent, #10b981, transparent)',
                  opacity: 0.6,
                }}
              />

              {/* Icon */}
              <div
                className="w-10 h-10 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(20,184,166,0.08))',
                  border: '1px solid rgba(52,211,153,0.20)',
                }}
              >
                <Icon className="w-5 h-5 text-emerald-400" />
              </div>

              {/* Value */}
              <div
                className="text-3xl sm:text-4xl font-extrabold font-heading mb-1"
                style={{
                  background: 'linear-gradient(135deg, #6ee7b7, #34d399, #2dd4bf)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {stat.value}
              </div>

              <div className="text-sm font-bold text-white mb-0.5">{stat.label}</div>
              <div className="text-xs text-slate-500 leading-snug max-w-[130px]">{stat.desc}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
