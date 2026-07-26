import React, { useState, useEffect, useCallback } from 'react';
import { Calendar, ShieldAlert, Award, FlaskConical, Phone, Building2, ChevronLeft, ChevronRight, HeartPulse, CheckCircle2 } from 'lucide-react';
import { hospitalInfo } from '../data/hospitalData';

const getImg = (path) => {
  const baseUrl = import.meta.env.BASE_URL || '/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return baseUrl.endsWith('/') ? `${baseUrl}${cleanPath}` : `${baseUrl}/${cleanPath}`;
};

const slides = [
  {
    url: getImg('images/building_clean.png'),
    caption: 'KRS Multispeciality Hospital — Edappadi Main Campus',
    sub: 'Salem Main Road, Vellandivalasu, Edappadi',
    icon: Building2,
  },
  {
    url: getImg('images/ot_main.jpeg'),
    caption: 'Advanced Modular Operation Theatre',
    sub: 'Sterile laminar airflow surgical suite',
    icon: HeartPulse,
  },
  {
    url: getImg('images/icu_beds.jpeg'),
    caption: '24/7 Intensive Care Unit (ICU)',
    sub: 'Multi-para monitors & central oxygen',
    icon: HeartPulse,
  },
  {
    url: getImg('images/reception_lounge.jpeg'),
    caption: 'Patient Comfort Waiting Lounge',
    sub: 'Spacious, air-conditioned family lounge',
    icon: CheckCircle2,
  },
  {
    url: getImg('images/pharmacy.jpeg'),
    caption: '24/7 Hospital Pharmacy',
    sub: 'Genuine medicines & surgical supplies',
    icon: FlaskConical,
  },
  {
    url: getImg('images/emergency_ramp.jpeg'),
    caption: '24/7 Emergency & Trauma Bay',
    sub: 'Direct ambulance & stretcher access',
    icon: ShieldAlert,
  },
];

export default function Hero({ onOpenBooking }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goTo = useCallback((idx) => {
    setCurrentIndex((idx + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo]);
  const prev = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 4800);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{ height: '100dvh', minHeight: '620px' }}
    >
      {/* ── Full-Screen Background Slider ── */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: idx === currentIndex ? 1 : 0 }}
          >
            <img
              src={slide.url}
              alt={slide.caption}
              className={`w-full h-full object-cover select-none${idx === currentIndex ? ' animate-ken-burns' : ''}`}
              loading={idx === 0 ? 'eager' : 'lazy'}
              draggable={false}
            />
          </div>
        ))}

        {/* Premium layered gradient overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'linear-gradient(105deg, rgba(2,10,20,0.92) 0%, rgba(2,10,20,0.72) 48%, rgba(2,10,20,0.28) 100%)',
        }} />
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'linear-gradient(to top, rgba(4,8,15,0.80) 0%, transparent 38%)',
        }} />
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'linear-gradient(to bottom, rgba(4,8,15,0.55) 0%, transparent 25%)',
        }} />

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 pointer-events-none bg-grid-pattern opacity-30" />
      </div>

      {/* ── Caption Badge (top-right) ── */}
      <div className="absolute top-28 right-6 z-20 hidden lg:block">
        <div
          className="flex items-center gap-2.5 text-white/90 text-xs font-semibold px-4 py-2.5 rounded-full"
          style={{
            background: 'rgba(8,16,30,0.70)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.12)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
          }}
        >
          {React.createElement(slides[currentIndex].icon, {
            className: 'w-3.5 h-3.5 text-emerald-400 shrink-0',
          })}
          <div>
            <div className="leading-none">{slides[currentIndex].caption}</div>
            <div className="text-[10px] text-white/50 mt-0.5 leading-none">{slides[currentIndex].sub}</div>
          </div>
        </div>
      </div>

      {/* ── Slide Progress Dots (bottom-right) ── */}
      <div className="absolute bottom-8 right-6 z-20 flex items-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className="cursor-pointer transition-all duration-400 border-none outline-none"
            style={{
              width: idx === currentIndex ? '28px' : '7px',
              height: '7px',
              borderRadius: idx === currentIndex ? '4px' : '50%',
              background: idx === currentIndex ? 'linear-gradient(90deg, #10b981, #2dd4bf)' : 'rgba(255,255,255,0.35)',
              boxShadow: idx === currentIndex ? '0 0 12px rgba(16,185,129,0.5)' : 'none',
            }}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* ── Arrow Controls ── */}
      <button
        onClick={prev}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full transition-all hover:scale-110"
        style={{
          background: 'rgba(8,16,30,0.60)',
          border: '1px solid rgba(255,255,255,0.12)',
          backdropFilter: 'blur(12px)',
          color: '#fff',
        }}
        aria-label="Previous"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full transition-all hover:scale-110"
        style={{
          background: 'rgba(8,16,30,0.60)',
          border: '1px solid rgba(255,255,255,0.12)',
          backdropFilter: 'blur(12px)',
          color: '#fff',
        }}
        aria-label="Next"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* ── Hero Content ── */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 pb-20">
          <div className="max-w-2xl space-y-7">

            {/* Badge */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <span className="section-label-pill">
                <Award className="w-3.5 h-3.5" />
                Trusted Multispeciality Hospital · Edappadi, Salem District
              </span>
            </div>

            {/* Headline */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.12] tracking-tight font-heading">
                KRS Multispeciality<br />
                <span className="text-gradient-emerald">
                  Hospital & Trauma Care
                </span>
              </h1>
            </div>

            {/* Description */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
                Founded by <strong className="text-emerald-300 font-semibold">Dr. K. Ravisuthan</strong> in 1996. 
                Comprehensive 15+ specialty care, 24/7 ICU & Emergency, and expert surgeons — under one roof in Edappadi.
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap gap-3 animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              <button
                onClick={() => onOpenBooking()}
                className="btn-premium"
              >
                <Calendar className="w-4 h-4" />
                Book Appointment
              </button>
              <a
                href={`tel:${hospitalInfo.hospitalMobile}`}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white transition-all hover:scale-105"
                style={{
                  background: '#dc2626',
                  boxShadow: '0 4px 20px rgba(220,38,38,0.35)',
                  animation: 'pulseRed 2s infinite',
                }}
              >
                <Phone className="w-4 h-4" />
                Emergency: {hospitalInfo.hospitalMobile}
              </a>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
