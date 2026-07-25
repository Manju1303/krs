import React from 'react';
import { Calendar, ShieldAlert, Award, Stethoscope, ArrowRight, HeartPulse, CheckCircle2, Clock, Users, Building2 } from 'lucide-react';
import { hospitalInfo } from '../data/hospitalData';

export default function Hero({ onOpenBooking }) {
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

          {/* Right Column: Dynamic Visual & Quick Action Cards */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Visual Glass Card */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl relative z-10 border-teal-500/30 shadow-2xl space-y-6">
              
              {/* Doctor / Hospital Header Banner */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-900/80 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
                    <HeartPulse className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">KRS Care Hub</h3>
                    <p className="text-xs text-emerald-400 font-medium">Edappadi Central Campus</p>
                  </div>
                </div>
                <span className="bg-emerald-500/20 text-emerald-300 text-xs px-2.5 py-1 rounded-full font-bold border border-emerald-500/30">
                  Active 24/7
                </span>
              </div>

              {/* Founder Highlight Box */}
              <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800 flex items-center space-x-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center font-extrabold text-slate-950 text-xl shadow-md shrink-0">
                  KR
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Dr. K. Ravisuthan</h4>
                  <p className="text-xs text-slate-300 font-medium">MBBS., MHSC (Diabetology)</p>
                  <p className="text-[11px] text-emerald-400 mt-0.5">Founder & Chief Physician • Est. 1996</p>
                </div>
              </div>

              {/* Quick Action Grid inside Hero */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a 
                  href="#departments" 
                  className="p-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-emerald-500/40 transition-all text-left group"
                >
                  <Building2 className="w-5 h-5 text-teal-400 mb-1 group-hover:scale-110 transition-transform" />
                  <div className="text-xs font-bold text-white">15+ Departments</div>
                  <div className="text-[10px] text-slate-400">View Specialties</div>
                </a>

                <a 
                  href="#doctors" 
                  className="p-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-emerald-500/40 transition-all text-left group"
                >
                  <Users className="w-5 h-5 text-emerald-400 mb-1 group-hover:scale-110 transition-transform" />
                  <div className="text-xs font-bold text-white">19+ Specialists</div>
                  <div className="text-[10px] text-slate-400">Meet Our Doctors</div>
                </a>
              </div>

              {/* Emergency Hotline Direct Trigger */}
              <div className="bg-gradient-to-r from-rose-950/60 to-slate-900 p-4 rounded-2xl border border-rose-500/30 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-rose-300">Need Immediate Assistance?</div>
                  <div className="text-xs text-slate-400">24/7 Emergency & Trauma Hotline</div>
                </div>
                <a
                  href={`tel:${hospitalInfo.emergencyPhone}`}
                  className="px-3.5 py-2 bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs rounded-xl shadow transition-colors shrink-0"
                >
                  Call Now
                </a>
              </div>

            </div>

            {/* Decorative Floating Stats Badge */}
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
