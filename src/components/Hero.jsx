import React, { useState, useEffect } from 'react';
import { Calendar, ShieldAlert, Phone, Clock, UserCheck, Stethoscope, ChevronRight } from 'lucide-react';
import { hospitalInfo } from '../data/hospitalData';

const getImg = (path) => {
  const baseUrl = import.meta.env.BASE_URL || '/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return baseUrl.endsWith('/') ? `${baseUrl}${cleanPath}` : `${baseUrl}/${cleanPath}`;
};

export default function Hero({ onOpenBooking }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const backgroundSlides = [
    {
      url: getImg('images/ot_main.jpeg'),
      caption: 'Advanced Modular Operation Theatre',
      sub: 'Sterile surgical suites with laminar airflow'
    },
    {
      url: getImg('images/icu_beds.jpeg'),
      caption: '24/7 Intensive Care Unit (ICU)',
      sub: 'Multi-para patient monitoring & oxygen support'
    },
    {
      url: getImg('images/reception_lounge.jpeg'),
      caption: 'Patient Comfort Lounge',
      sub: 'Spacious, air-conditioned family waiting lounge'
    },
    {
      url: getImg('images/pharmacy.jpeg'),
      caption: '24/7 In-House Pharmacy',
      sub: 'Genuine medicines & medical supplies'
    },
    {
      url: getImg('images/emergency_ramp.jpeg'),
      caption: '24/7 Emergency & Trauma Bay',
      sub: 'Direct ambulance & immediate triage access'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [backgroundSlides.length]);

  return (
    <section id="home" className="relative pt-28 md:pt-36 pb-16 overflow-hidden" style={{ minHeight: '100dvh' }}>

      {/* ── Background Image Slideshow (Clear & Vivid with logo-aligned subtle overlay) ── */}
      <div className="absolute inset-0 z-0">
        {backgroundSlides.map((slide, idx) => (
          <div
            key={idx}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: idx === currentSlide ? 1 : 0 }}
          >
            <img
              src={slide.url}
              alt={slide.caption}
              className="w-full h-full object-cover select-none"
              draggable={false}
            />
          </div>
        ))}

        {/* Lightweight logo-emerald gradient overlay so background slideshow images are vibrant and clearly visible */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'linear-gradient(105deg, rgba(4, 24, 30, 0.72) 0%, rgba(4, 24, 30, 0.48) 55%, rgba(4, 24, 30, 0.20) 100%)',
        }} />
        <div className="absolute inset-0 pointer-events-none bg-grid-pattern opacity-10" />
      </div>

      {/* ── Main Hero Content Container ── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[540px]">

          {/* ── Left Column: Headline & Messaging ── */}
          <div className="lg:col-span-7 space-y-6 text-white animate-fade-in-up">

            {/* Patients Trust Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-950/60 border border-emerald-400/30 backdrop-blur-md text-[11px] font-bold text-emerald-300">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <UserCheck className="w-3.5 h-3.5 text-emerald-300" />
              <span>Over 50,000+ Satisfied Patients Treated</span>
            </div>

            {/* Giant Title & Section Text */}
            <div className="space-y-3">
              <span className="text-emerald-400 text-xs sm:text-sm font-extrabold tracking-widest uppercase font-heading block">
                KRS Multispeciality Hospital
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-black tracking-tight leading-[1.05] font-heading text-white">
                MEDICAL
              </h1>
              <p className="text-slate-100 text-sm sm:text-base max-w-xl font-normal leading-relaxed drop-shadow-sm">
                Founded by <strong className="text-emerald-300 font-semibold">Dr. K. Ravisuthan</strong> in 1996. 
                Together, advancing healthcare through compassion, innovation, and patient-centered excellence in Edappadi.
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="btn-premium py-3.5 px-7 text-xs font-extrabold uppercase tracking-wider shadow-xl hover:scale-105 transition-all"
              >
                <Calendar className="w-4 h-4" />
                Book Appointment
              </button>

              <a
                href={`tel:${hospitalInfo.hospitalMobile}`}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-extrabold text-xs uppercase tracking-wider text-white transition-all hover:scale-105 shadow-xl"
                style={{
                  background: '#dc2626',
                  animation: 'pulseRed 2.5s infinite',
                }}
              >
                <ShieldAlert className="w-4 h-4" />
                Emergency: {hospitalInfo.hospitalMobile}
              </a>
            </div>

          </div>

          {/* ── Right Column: Doctor Hero Portrait ── */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">

            {/* Backdrop glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

            {/* Doctor Card Wrapper */}
            <div className="relative z-10 w-full max-w-sm rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-slate-950/30 backdrop-blur-md">
              <img
                src={getImg('images/hero_doctor_portrait.png')}
                alt="KRS Medical Professional"
                className="w-full h-auto object-cover transform hover:scale-102 transition-transform duration-500"
              />

              {/* Floating Experience Badge (Oversized 28+ Stat) */}
              <div className="absolute bottom-4 left-4 z-20 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-emerald-400/20 shadow-2xl flex items-center gap-4 text-white">
                <div className="text-4xl font-extrabold font-heading text-emerald-400 leading-none">
                  28+
                </div>
                <div className="text-xs font-semibold leading-tight text-slate-200">
                  Years of Medical<br />Excellence in Salem
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* ── 4-Column Quick Info Strip ── */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          {/* Card 1: Opening Hours */}
          <div className="p-5 rounded-2xl bg-slate-950/50 backdrop-blur-xl border border-emerald-400/20 text-white hover:bg-slate-900/60 transition-all">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm font-heading text-emerald-300">Opening Hours</h3>
            </div>
            <p className="text-xs text-slate-200 font-medium">24/7 ICU & Emergency Open</p>
            <p className="text-[11px] text-slate-300 mt-1">OPD: Mon – Sat (9:00 AM – 9:00 PM)</p>
          </div>

          {/* Card 2: Doctors' Timetable */}
          <div className="p-5 rounded-2xl bg-slate-950/50 backdrop-blur-xl border border-emerald-400/20 text-white hover:bg-slate-900/60 transition-all">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400">
                <Stethoscope className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm font-heading text-emerald-300">Doctors' Timetable</h3>
            </div>
            <p className="text-xs text-slate-200 font-medium">15+ Specialist Surgeons</p>
            <p className="text-[11px] text-slate-300 mt-1">Available for OPD & Emergency</p>
          </div>

          {/* Card 3: Quick Booking */}
          <div className="p-5 rounded-2xl bg-slate-950/50 backdrop-blur-xl border border-emerald-400/20 text-white hover:bg-slate-900/60 transition-all cursor-pointer group" onClick={onOpenBooking}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400">
                  <Calendar className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm font-heading text-emerald-300">Appointments</h3>
              </div>
              <ChevronRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="text-xs text-slate-200 font-medium">Book Online Instantly</p>
            <p className="text-[11px] text-slate-300 mt-1">Zero wait time consultation</p>
          </div>

          {/* Card 4: Emergency Cases */}
          <a href={`tel:${hospitalInfo.hospitalMobile}`} className="p-5 rounded-2xl bg-rose-600/90 backdrop-blur-xl border border-rose-400/30 text-white hover:bg-rose-600 transition-all block">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded-xl bg-white/20 text-white">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm font-heading">Emergency Cases</h3>
            </div>
            <p className="text-xs text-white font-bold">{hospitalInfo.hospitalMobile}</p>
            <p className="text-[11px] text-rose-100 mt-1">24/7 Trauma & Ambulance Ready</p>
          </a>

        </div>

      </div>

    </section>
  );
}
