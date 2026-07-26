import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Calendar, ShieldAlert, Menu, X, ChevronRight, Facebook, Mail, FlaskConical, Award } from 'lucide-react';
import { hospitalInfo } from '../data/hospitalData';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const logoUrl = (() => {
    const base = import.meta.env.BASE_URL || '/';
    return base.endsWith('/') ? `${base}logo.jpeg` : `${base}/logo.jpeg`;
  })();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#departments', label: 'Specialties' },
    { href: '#doctors', label: 'Doctors' },
    { href: '#packages', label: 'Health Packages' },
    { href: '#facilities', label: 'Facilities' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">

      {/* ── Top Emergency Bar ── */}
      <div
        className="hidden md:flex items-center justify-between px-6 lg:px-12 text-xs py-2"
        style={{
          background: 'linear-gradient(90deg, #022c22, #047857, #022c22)',
          borderBottom: '1px solid rgba(52,211,153,0.15)',
        }}
      >
        <div className="flex items-center gap-6 text-emerald-200/80">
          <div className="flex items-center gap-1.5">
            <ShieldAlert className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
            <span className="font-semibold text-rose-300">24/7 Emergency & Trauma Active</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-emerald-400" />
            <span>{hospitalInfo.location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FlaskConical className="w-3 h-3 text-teal-400" />
            <span>24/7 Lab: <strong className="text-white">{hospitalInfo.labPhone}</strong></span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={hospitalInfo.facebook}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-blue-300 hover:text-blue-200 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 transition-colors text-[11px] font-medium"
          >
            <Facebook className="w-3 h-3" />
            <span>Facebook</span>
          </a>
          <a
            href={`mailto:${hospitalInfo.email}`}
            className="hidden lg:flex items-center gap-1 text-emerald-300 hover:text-emerald-200 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 transition-colors text-[11px]"
          >
            <Mail className="w-3 h-3" />
            {hospitalInfo.email}
          </a>
          <a
            href={`tel:${hospitalInfo.hospitalMobile}`}
            className="flex items-center gap-1.5 text-white font-bold px-3 py-1 rounded-full border border-rose-500/40 bg-rose-600/20 hover:bg-rose-600/40 transition-colors text-[11px]"
          >
            <Phone className="w-3 h-3 text-rose-400" />
            {hospitalInfo.hospitalMobile}
          </a>
        </div>
      </div>

      {/* ── Main Navigation Bar ── */}
      <div
        className="transition-all duration-300"
        style={{
          background: isScrolled
            ? 'rgba(4,8,15,0.96)'
            : 'rgba(4,8,15,0.65)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          borderBottom: '1px solid rgba(52,211,153,0.10)',
          boxShadow: isScrolled ? '0 8px 32px rgba(0,0,0,0.5)' : 'none',
          padding: isScrolled ? '10px 0' : '14px 0',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-3.5 group shrink-0">
            <div className="relative">
              <img
                src={logoUrl}
                alt="KRS Hospital Logo"
                className="w-11 h-11 rounded-xl object-contain bg-white p-1 shadow-lg transition-transform group-hover:scale-105"
                style={{ boxShadow: '0 0 0 2px rgba(52,211,153,0.30), 0 4px 16px rgba(0,0,0,0.4)' }}
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg text-white tracking-tight font-heading">KRS</span>
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded-md"
                  style={{
                    background: 'rgba(16,185,129,0.12)',
                    border: '1px solid rgba(52,211,153,0.25)',
                    color: '#34d399',
                    letterSpacing: '0.06em',
                  }}
                >
                  MULTISPECIALITY
                </span>
              </div>
              <p className="text-[11px] text-slate-400 tracking-wide">Hospital & Trauma Care Centre</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-emerald-300 px-3 py-2 rounded-lg hover:bg-emerald-500/8 transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            <a
              href={`tel:${hospitalInfo.hospitalMobile}`}
              className="hidden lg:flex items-center gap-2 text-xs font-semibold text-rose-300 px-3.5 py-2 rounded-xl border border-rose-500/30 bg-rose-500/8 hover:bg-rose-500/15 transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              {hospitalInfo.hospitalMobile}
            </a>
            <button
              onClick={onOpenBooking}
              className="btn-premium text-xs px-4 py-2.5"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl text-slate-200 hover:text-emerald-300 hover:bg-emerald-500/10 transition-all"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden py-5 px-6 space-y-1 animate-slide-down"
          style={{
            background: 'rgba(4,10,20,0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(52,211,153,0.12)',
          }}
        >
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 px-4 rounded-xl text-slate-200 hover:text-emerald-300 hover:bg-emerald-500/8 transition-all text-sm font-medium"
            >
              <span>{link.label}</span>
              <ChevronRight className="w-4 h-4 text-emerald-500/50" />
            </a>
          ))}
          <div className="pt-4 space-y-2.5">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
              className="btn-premium w-full justify-center text-sm"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment Online
            </button>
            <a
              href={`tel:${hospitalInfo.hospitalMobile}`}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-rose-300 font-bold text-sm border border-rose-500/30 bg-rose-500/8"
            >
              <Phone className="w-4 h-4" />
              Call: {hospitalInfo.hospitalMobile}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
