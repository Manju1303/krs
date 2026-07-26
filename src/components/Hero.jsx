import React, { useState, useEffect } from 'react';
import { Calendar, ShieldAlert, Award, Stethoscope, ArrowRight, HeartPulse, CheckCircle2, Clock, Users, Building2, MapPin, FlaskConical, Camera, Phone } from 'lucide-react';
import { hospitalInfo } from '../data/hospitalData';

export default function Hero({ onOpenBooking, onOpenPackages }) {
  const getImg = (path) => {
    const baseUrl = import.meta.env.BASE_URL || '/';
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return baseUrl.endsWith('/') ? `${baseUrl}${cleanPath}` : `${baseUrl}/${cleanPath}`;
  };

  const bgSlideshow = [
    {
      url: getImg("images/building.jpeg"),
      title: "KRS Main Hospital Building",
      tag: "Edappadi Main Campus",
      desc: "Multi-storey modern hospital located on Salem Main Road, Edappadi."
    },
    {
      url: getImg("images/ot_main.jpeg"),
      title: "Modular Operation Theatre",
      tag: "Advanced Surgery Suite",
      desc: "Sterile laminar airflow OT with precision surgical lights and anesthesia console."
    },
    {
      url: getImg("images/icu_beds.jpeg"),
      title: "Intensive Care Unit (ICU)",
      tag: "24/7 Critical Care",
      desc: "Multi-bed ICU equipped with multi-para cardiac monitors & central oxygen."
    },
    {
      url: getImg("images/reception_lounge.jpeg"),
      title: "Patient Waiting Lounge",
      tag: "Patient Comfort",
      desc: "Spacious, air-conditioned waiting lounge for family comfort."
    },
    {
      url: getImg("images/pharmacy.jpeg"),
      title: "24/7 Hospital Pharmacy",
      tag: "Round-the-Clock",
      desc: "Fully stocked pharmacy with genuine medicines & surgical supplies."
    }
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Auto-scroll background slider every 4.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % bgSlideshow.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [bgSlideshow.length]);

  const currentPhoto = bgSlideshow[currentSlideIndex];

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-slate-950 flex items-center">
      
      {/* Dynamic Animated Background Image Slideshow with Overlay */}
      <div className="absolute inset-0 z-0">
        {bgSlideshow.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlideIndex === idx ? 'opacity-35' : 'opacity-0'
            }`}
          >
            <img
              src={slide.url}
              alt={slide.title}
              className={`w-full h-full object-cover ${currentSlideIndex === idx ? 'animate-ken-burns' : ''}`}
            />
          </div>
        ))}

        {/* Sleek Dark Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/80" />
      </div>

      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center space-x-2 bg-emerald-950/90 border border-emerald-500/40 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-300 shadow-inner backdrop-blur-md">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>Serving Edappadi Since 1996 • 28+ Years of Medical Trust</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight font-heading">
              Kauvery-Standard Care. <br />
              <span className="text-gradient-emerald">Trusted Healing</span> for Every Family.
            </h1>

            {/* Description */}
            <p className="text-slate-200 text-base sm:text-lg max-w-2xl font-normal leading-relaxed drop-shadow">
              Founded by <strong className="text-emerald-300 font-semibold">Dr. K. Ravisuthan</strong>, KRS Multispeciality Hospital & Trauma Care Centre brings 15+ specialized medical departments, modern operation theatres, 24/7 ICUs, and expert physicians together under one roof in Edappadi.
            </p>

            {/* Kauvery-Style 4 Quick Action Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="p-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-emerald-500/40 hover:border-emerald-400 transition-all text-left group shadow-lg backdrop-blur-md"
              >
                <Stethoscope className="w-5 h-5 text-emerald-400 mb-1.5 group-hover:scale-110 transition-transform" />
                <div className="text-xs font-bold text-white">Book Doctor</div>
                <div className="text-[10px] text-slate-400">19+ Specialists</div>
              </button>

              <a
                href={`tel:${hospitalInfo.hospitalMobile}`}
                className="p-3.5 rounded-2xl bg-rose-950/90 hover:bg-rose-900/90 border border-rose-500/50 transition-all text-left group shadow-lg backdrop-blur-md"
              >
                <ShieldAlert className="w-5 h-5 text-rose-400 mb-1.5 animate-pulse group-hover:scale-110 transition-transform" />
                <div className="text-xs font-bold text-rose-200">24/7 Emergency</div>
                <div className="text-[10px] text-rose-300">{hospitalInfo.hospitalMobile}</div>
              </a>

              <a
                href="#packages"
                className="p-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-teal-500/40 hover:border-teal-400 transition-all text-left group shadow-lg backdrop-blur-md"
              >
                <FlaskConical className="w-5 h-5 text-teal-400 mb-1.5 group-hover:scale-110 transition-transform" />
                <div className="text-xs font-bold text-white">Health Checkups</div>
                <div className="text-[10px] text-teal-300">Preventive Care</div>
              </a>

              <a
                href="#gallery"
                className="p-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-emerald-500 transition-all text-left group shadow-lg backdrop-blur-md"
              >
                <Camera className="w-5 h-5 text-emerald-400 mb-1.5 group-hover:scale-110 transition-transform" />
                <div className="text-xs font-bold text-white">Campus Photos</div>
                <div className="text-[10px] text-slate-400">Virtual Tour</div>
              </a>
            </div>

            {/* Primary Action CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenBooking()}
                className="bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-extrabold text-sm px-6 py-4 rounded-xl shadow-2xl shadow-emerald-950/80 flex items-center space-x-3 transition-all hover:scale-105"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Instant Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${hospitalInfo.emergencyPhone}`}
                className="bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-bold text-sm px-6 py-4 rounded-xl border border-slate-700 flex items-center space-x-3 transition-all hover:scale-105 backdrop-blur-md"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Landline: {hospitalInfo.landlinePhone}</span>
              </a>
            </div>

            {/* Quick Contact Bar */}
            <div className="pt-4 flex items-center space-x-6 text-xs text-slate-300 border-t border-slate-800">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-teal-400" />
                <span>Emergency: <strong>24 Hours Open</strong></span>
              </div>
              <div className="flex items-center space-x-2">
                <FlaskConical className="w-4 h-4 text-emerald-400" />
                <span>24/7 Lab Helpline: <strong>{hospitalInfo.labPhone}</strong></span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Interactive Real Hospital Showcase */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Visual Card with Real Hospital Photos */}
            <div className="glass-card rounded-3xl overflow-hidden border border-emerald-500/40 shadow-2xl space-y-4 relative z-10 p-2">
              
              {/* Featured Campus Image Display with Slideshow Indicator */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-950 group">
                <img 
                  src={currentPhoto.url} 
                  alt={currentPhoto.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-90" />
                
                {/* Photo Badge */}
                <div className="absolute top-3 left-3 bg-emerald-950/90 text-emerald-300 text-[10px] font-extrabold px-2.5 py-1 rounded-full border border-emerald-500/40 flex items-center space-x-1">
                  <MapPin className="w-3 h-3 text-emerald-400" />
                  <span>{currentPhoto.tag}</span>
                </div>

                {/* Photo Caption inside image */}
                <div className="absolute bottom-3 left-3 right-3 text-left space-y-0.5">
                  <h3 className="text-sm font-extrabold text-white">{currentPhoto.title}</h3>
                  <p className="text-[11px] text-slate-300 line-clamp-1">{currentPhoto.desc}</p>
                </div>
              </div>

              {/* Photo Selector Switcher & Slide Dots */}
              <div className="px-3 pb-2 flex items-center justify-between gap-2">
                <div className="flex items-center space-x-2">
                  {bgSlideshow.map((photo, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlideIndex(idx)}
                      className={`h-2.5 rounded-full transition-all ${
                        currentSlideIndex === idx ? 'w-8 bg-emerald-400' : 'w-2.5 bg-slate-700 hover:bg-slate-500'
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
