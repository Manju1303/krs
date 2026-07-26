import React, { useState } from 'react';
import { Calendar, ShieldAlert, Award, Stethoscope, ArrowRight, HeartPulse, CheckCircle2, Clock, Users, Building2, MapPin, Eye } from 'lucide-react';
import { hospitalInfo, aboutData } from '../data/hospitalData';

export default function Hero({ onOpenBooking }) {
  const [heroImageIndex, setHeroImageIndex] = useState(0);

  const heroPhotos = [
    {
      url: "/images/building.jpeg",
      title: "KRS Main Hospital Building",
      tag: "Edappadi Main Campus",
      desc: "Multi-storey modern hospital located on Salem Main Road, Edappadi."
    },
    {
      url: "/images/ot_main.jpeg",
      title: "Modular Operation Theatre",
      tag: "Advanced Surgery Suite",
      desc: "Sterile laminar airflow OT with precision surgical lights and anesthesia console."
    },
    {
      url: "/images/icu_beds.jpeg",
      title: "Intensive Care Unit (ICU)",
      tag: "24/7 Critical Care",
      desc: "Multi-bed ICU equipped with multi-para cardiac monitors & central oxygen."
    }
  ];

  const currentPhoto = heroPhotos[heroImageIndex];

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-gradient-hero flex items-center">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center space-x-2 bg-emerald-950/80 border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-300 shadow-inner">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>Serving Edappadi Since 1996 • 28+ Years of Medical Trust</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight font-heading">
              Comprehensive Care. <br />
              <span className="text-gradient-emerald">Trusted Healing</span> for Every Family.
            </h1>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
              Founded by <strong className="text-emerald-300 font-semibold">Dr. K. Ravisuthan</strong>, KRS Multispeciality Hospital & Trauma Care Centre brings 15+ specialized medical departments, modern operation theatres, 24/7 ICUs, and expert physicians together under one roof in Edappadi.
            </p>

            {/* Feature Checkmarks */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-200">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>24/7 Emergency & Trauma Unit</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>15+ Specialized Medical Departments</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Modern Operating Theatres & ICUs</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Affordable & Ethical Healthcare</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-extrabold text-sm px-6 py-4 rounded-xl shadow-xl shadow-emerald-950/60 flex items-center space-x-3 transition-all hover:scale-105"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Instant Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${hospitalInfo.emergencyPhone}`}
                className="bg-rose-950/80 hover:bg-rose-900/90 text-rose-300 font-bold text-sm px-6 py-4 rounded-xl border border-rose-500/40 flex items-center space-x-3 transition-all hover:scale-105"
              >
                <ShieldAlert className="w-5 h-5 text-rose-400 animate-pulse" />
                <span>24/7 Trauma Helpline</span>
              </a>
            </div>

            {/* Quick Contact Bar */}
            <div className="pt-4 flex items-center space-x-6 text-xs text-slate-400 border-t border-slate-800">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-teal-400" />
                <span>Emergency: <strong>24 Hours Open</strong></span>
              </div>
              <div className="flex items-center space-x-2">
                <Stethoscope className="w-4 h-4 text-emerald-400" />
                <span>OPD Consultations: <strong>Daily 9:00 AM - 9:00 PM</strong></span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Real Hospital Photo Showcase */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Visual Card with Real Hospital Photos */}
            <div className="glass-card rounded-3xl overflow-hidden border border-emerald-500/30 shadow-2xl space-y-4 relative z-10 p-2">
              
              {/* Featured Campus Image Display */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-950 group">
                <img 
                  src={currentPhoto.url} 
                  alt={currentPhoto.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-90" />
                
                {/* Photo Badge */}
                <div className="absolute top-3 left-3 bg-emerald-950/90 text-emerald-300 text-[10px] font-extrabold px-2.5 py-1 rounded-full border border-emerald-500/30 flex items-center space-x-1">
                  <MapPin className="w-3 h-3 text-emerald-400" />
                  <span>{currentPhoto.tag}</span>
                </div>

                {/* Photo Caption inside image */}
                <div className="absolute bottom-3 left-3 right-3 text-left space-y-0.5">
                  <h3 className="text-sm font-extrabold text-white">{currentPhoto.title}</h3>
                  <p className="text-[11px] text-slate-300 line-clamp-1">{currentPhoto.desc}</p>
                </div>
              </div>

              {/* Photo Selector Switcher */}
              <div className="px-3 pb-2 flex items-center justify-between gap-2">
                <div className="flex items-center space-x-2">
                  {heroPhotos.map((photo, idx) => (
                    <button
                      key={idx}
                      onClick={() => setHeroImageIndex(idx)}
                      className={`h-2.5 rounded-full transition-all ${
                        heroImageIndex === idx ? 'w-8 bg-emerald-400' : 'w-2.5 bg-slate-700 hover:bg-slate-500'
                      }`}
                      title={photo.title}
                    />
                  ))}
                </div>
                <a 
                  href="#gallery"
                  className="text-[11px] text-emerald-400 font-bold hover:underline flex items-center space-x-1"
                >
                  <span>View All 11 Campus Photos</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>

              {/* Doctor Founder Badge */}
              <div className="bg-slate-900/90 p-3.5 rounded-2xl border border-slate-800 flex items-center space-x-3.5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center font-extrabold text-slate-950 text-lg shadow shrink-0">
                  KR
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Dr. K. Ravisuthan</h4>
                  <p className="text-[11px] text-slate-300">MBBS., MHSC (Diabetology)</p>
                  <p className="text-[10px] text-emerald-400 font-semibold">Founder & Chief Physician • Est. 1996</p>
                </div>
              </div>

            </div>

            {/* Decorative Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-slate-900/90 border border-emerald-500/40 p-4 rounded-2xl shadow-2xl backdrop-blur-md hidden sm:flex items-center space-x-3 z-20">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-extrabold">
                28+
              </div>
              <div className="text-xs">
                <div className="font-extrabold text-white">Years of Clinical Excellence</div>
                <div className="text-slate-400">Serving Edappadi Community</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
