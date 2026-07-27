import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Calendar, ShieldAlert, Menu, X, ChevronRight, Facebook, Mail, FlaskConical } from 'lucide-react';
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
    { href: '#facilities', label: 'Facilities' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">

      {/* ── Top Info Bar ── */}
      <div className="hidden md:flex items-center justify-between px-6 lg:px-12 text-xs py-2"
        style={{ background: '#047857', borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
        <div className="flex items-center gap-5 text-slate-200">
          <div className="flex items-center gap-1.5">
            <ShieldAlert className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
            <span className="font-semibold text-rose-200">24/7 Emergency Active</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-teal-300" />
            <span>Salem Main Road, Edappadi</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FlaskConical className="w-3 h-3 text-teal-300" />
            <span>Lab: <strong className="text-white">{hospitalInfo.labPhone}</strong></span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a href={hospitalInfo.facebook} target="_blank" rel="noreferrer"
            className="flex items-center gap-1.5 text-slate-200 hover:text-white px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] transition-colors">
            <Facebook className="w-3 h-3" /> Facebook
          </a>
          <a href={`mailto:${hospitalInfo.email}`}
            className="hidden lg:flex items-center gap-1.5 text-slate-200 hover:text-white px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] transition-colors">
            <Mail className="w-3 h-3" /> {hospitalInfo.email}
          </a>
          <a href={`tel:${hospitalInfo.hospitalMobile}`}
            className="flex items-center gap-1.5 font-bold px-3 py-1 rounded-full text-[11px] transition-all"
            style={{ background: '#dc2626', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}>
            <Phone className="w-3 h-3" /> {hospitalInfo.hospitalMobile}
          </a>
        </div>
      </div>

      {/* ── Main Navigation ── */}
      <div className="transition-all duration-300"
        style={{
          background: isScrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.88)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(15,23,42,0.08)',
          boxShadow: isScrolled ? '0 4px 24px rgba(0,0,0,0.08)' : '0 1px 4px rgba(0,0,0,0.04)',
          padding: isScrolled ? '10px 0' : '14px 0',
        }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group shrink-0">
            <img src={logoUrl} alt="KRS Hospital Logo"
              className="w-11 h-11 rounded-xl object-contain bg-white p-1 transition-transform group-hover:scale-105"
              style={{ boxShadow: '0 0 0 2px rgba(5,150,105,0.25), 0 2px 8px rgba(0,0,0,0.10)' }} />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg tracking-tight font-heading" style={{ color: '#0f172a' }}>KRS</span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-md"
                  style={{ background: '#d1fae5', border: '1px solid #a7f3d0', color: '#047857', letterSpacing: '0.06em' }}>
                  MULTISPECIALITY
                </span>
              </div>
              <p className="text-[11px] tracking-wide" style={{ color: '#64748b' }}>Hospital & Trauma Care Centre</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <a key={link.href} href={link.href}
                className="text-sm font-medium px-3 py-2 rounded-lg transition-all text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 focus:text-emerald-600 focus:bg-emerald-50">
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            <a href={`tel:${hospitalInfo.hospitalMobile}`}
              className="hidden lg:flex items-center gap-2 text-xs font-semibold px-3.5 py-2 rounded-xl transition-all"
              style={{ color: '#dc2626', border: '1px solid rgba(220,38,38,0.20)', background: 'rgba(220,38,38,0.05)' }}>
              <Phone className="w-3.5 h-3.5" /> {hospitalInfo.hospitalMobile}
            </a>
            <button onClick={onOpenBooking} className="btn-premium text-xs px-4 py-2.5">
              <Calendar className="w-4 h-4" /> Book Appointment
            </button>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl transition-all"
            style={{ color: '#334155', background: mobileMenuOpen ? '#f0fdf4' : 'transparent' }}>
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden py-5 px-6 space-y-1"
          style={{ background: 'rgba(255,255,255,0.98)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(15,23,42,0.08)' }}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 px-4 rounded-xl text-sm font-medium transition-all"
              style={{ color: '#334155' }}>
              <span>{link.label}</span>
              <ChevronRight className="w-4 h-4" style={{ color: '#a7f3d0' }} />
            </a>
          ))}
          <div className="pt-4 space-y-2.5">
            <button onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
              className="btn-premium w-full justify-center text-sm">
              <Calendar className="w-4 h-4" /> Book Appointment
            </button>
            <a href={`tel:${hospitalInfo.hospitalMobile}`}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold transition-all"
              style={{ color: '#dc2626', border: '1px solid rgba(220,38,38,0.20)', background: 'rgba(220,38,38,0.05)' }}>
              <Phone className="w-4 h-4" /> {hospitalInfo.hospitalMobile}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
