import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ShieldAlert, Award, Calendar, Facebook, FlaskConical, ChevronRight, Building2 } from 'lucide-react';
import { hospitalInfo, departments } from '../data/hospitalData';

const getImg = (path) => {
  const baseUrl = import.meta.env.BASE_URL || '/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return baseUrl.endsWith('/') ? `${baseUrl}${cleanPath}` : `${baseUrl}/${cleanPath}`;
};

export default function Footer({ onOpenBooking }) {
  const quickLinks = [
    { href: '#about', label: 'About KRS Hospital' },
    { href: '#departments', label: 'Medical Specialties' },
    { href: '#doctors', label: 'Our Specialists' },
    { href: '#packages', label: 'Health Packages' },
    { href: '#facilities', label: 'Hospital Facilities' },
    { href: '#gallery', label: 'Campus Gallery' },
  ];

  return (
    <footer id="contact" className="relative overflow-hidden" style={{ background: '#020810' }}>
      {/* Decorative background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(52,211,153,0.4), transparent)' }} />

      {/* ── Emergency CTA Banner ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16">
        <div
          className="rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative"
          style={{
            background: 'linear-gradient(135deg, rgba(127,0,0,0.3) 0%, rgba(10,18,35,0.95) 50%, rgba(2,44,34,0.3) 100%)',
            border: '1px solid rgba(220,38,38,0.20)',
          }}
        >
          {/* Glow */}
          <div className="absolute -top-16 -left-16 w-48 h-48 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(220,38,38,0.15), transparent)' }} />

          <div className="text-center md:text-left space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2 text-rose-400 font-bold text-xs uppercase tracking-widest">
              <ShieldAlert className="w-4 h-4 animate-pulse" />
              24 Hours / 7 Days Emergency Care
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading leading-tight">
              Need Critical or Emergency Care?
            </h3>
            <p className="text-slate-300 text-sm">
              Our ICU, trauma surgeons & ambulance are ready 24/7 in Edappadi.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`tel:${hospitalInfo.hospitalMobile}`}
              className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-white transition-all hover:scale-105"
              style={{ background: '#dc2626', boxShadow: '0 4px 20px rgba(220,38,38,0.4)' }}
            >
              <Phone className="w-4 h-4" />
              {hospitalInfo.hospitalMobile}
            </a>
            <button
              onClick={() => onOpenBooking()}
              className="btn-premium text-sm"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      {/* ── Main Footer Grid ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1 space-y-5">
            <div className="flex items-center gap-3">
              <img
                src={getImg('logo.jpeg')}
                alt="KRS Hospital"
                className="w-11 h-11 rounded-xl object-contain bg-white p-1"
                style={{ boxShadow: '0 0 0 2px rgba(52,211,153,0.25)' }}
              />
              <div>
                <div className="font-extrabold text-white font-heading text-base">KRS Multispeciality</div>
                <div className="text-xs text-emerald-400 font-semibold">Hospital & Trauma Care Centre</div>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Founded in 1996 by <strong className="text-slate-300">Dr. K. Ravisuthan</strong> in Edappadi. 
              Committed to high-quality, technology-driven, affordable healthcare for every family.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={hospitalInfo.facebook}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-blue-300 hover:text-white transition-all"
                style={{ background: 'rgba(59,130,246,0.10)', border: '1px solid rgba(59,130,246,0.20)' }}
              >
                <Facebook className="w-3.5 h-3.5" />
                Follow Us
              </a>
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                <Award className="w-3.5 h-3.5" />
                <span>28+ Years of Excellence</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(l => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-emerald-300 transition-colors group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-emerald-500/40 group-hover:text-emerald-400 transition-colors" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">Contact & Helplines</h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{hospitalInfo.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-rose-400 shrink-0" />
                <span>Mobile: <strong className="text-white">{hospitalInfo.hospitalMobile}</strong></span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Landline: <strong className="text-white">{hospitalInfo.landlinePhone}</strong></span>
              </div>
              <div className="flex items-center gap-2.5">
                <FlaskConical className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>24/7 Lab: <strong className="text-white">{hospitalInfo.labPhone}</strong></span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{hospitalInfo.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Open 24 Hours · 7 Days</span>
              </div>
            </div>
          </div>

          {/* Map & Location */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">Campus Location</h4>
            <div
              className="rounded-2xl p-4 space-y-3"
              style={{
                background: 'rgba(14,24,42,0.80)',
                border: '1px solid rgba(52,211,153,0.10)',
              }}
            >
              <div className="flex items-center gap-2.5">
                <Building2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-sm font-semibold text-white">Edappadi Central Campus</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Conveniently located on Salem Main Road, Vellandivalasu, Edappadi — with 24/7 ambulance access & parking.
              </p>
              <a
                href="https://maps.google.com/?q=KRS+Hospital+Edappadi+Salem+Tamil+Nadu"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors group"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Open Google Maps</span>
                <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div
        className="relative z-10 border-t"
        style={{ borderColor: 'rgba(255,255,255,0.05)' }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} KRS Multispeciality Hospital & Trauma Care Centre. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href={hospitalInfo.facebook} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">Facebook</a>
            <span className="text-slate-700">•</span>
            <span>Serving Edappadi since 1996</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
