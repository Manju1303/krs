import React, { useState, useEffect } from 'react';
import { Phone, Clock, MapPin, Calendar, ShieldAlert, Menu, X, ChevronRight, Facebook, Mail, FlaskConical, PackageCheck } from 'lucide-react';
import { hospitalInfo } from '../data/hospitalData';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Emergency Announcement Bar */}
      <div className="bg-gradient-to-r from-emerald-950 via-teal-900 to-emerald-950 text-xs py-2 px-4 border-b border-teal-500/20">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-5 text-slate-300">
            <div className="flex items-center space-x-1.5 text-emerald-400 font-semibold">
              <ShieldAlert className="w-3.5 h-3.5 text-rose-500 animate-pulse" />
              <span>24/7 Emergency & Trauma Unit</span>
            </div>
            <div className="hidden md:flex items-center space-x-1.5">
              <MapPin className="w-3.5 h-3.5 text-teal-400" />
              <span>{hospitalInfo.location}</span>
            </div>
            <div className="hidden lg:flex items-center space-x-1.5 text-teal-300 font-medium">
              <FlaskConical className="w-3.5 h-3.5 text-emerald-400" />
              <span>24/7 Lab: <strong>{hospitalInfo.labPhone}</strong></span>
            </div>
          </div>

          <div className="flex items-center space-x-3 ml-auto">
            {/* Facebook Social Link */}
            <a 
              href={hospitalInfo.facebook}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-1 text-slate-300 hover:text-emerald-400 transition-colors px-2 py-0.5 bg-slate-900/80 rounded-full border border-slate-800"
              title="KRS Hospital Facebook Page"
            >
              <Facebook className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden sm:inline text-[11px]">Facebook</span>
            </a>

            {/* Email link */}
            <a 
              href={`mailto:${hospitalInfo.email}`}
              className="hidden lg:flex items-center space-x-1 text-slate-300 hover:text-emerald-400 transition-colors px-2 py-0.5 bg-slate-900/80 rounded-full border border-slate-800 text-[11px]"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>{hospitalInfo.email}</span>
            </a>

            {/* Phone Hotline */}
            <a 
              href={`tel:${hospitalInfo.hospitalMobile}`} 
              className="flex items-center space-x-1.5 text-rose-300 font-bold hover:text-rose-200 transition-colors bg-rose-950/70 px-2.5 py-1 rounded-full border border-rose-500/30"
            >
              <Phone className="w-3.5 h-3.5 text-rose-400" />
              <span>Call: {hospitalInfo.hospitalMobile}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Header */}
      <div className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/90 backdrop-blur-md shadow-2xl py-3 border-b border-teal-500/20' 
          : 'bg-slate-900/60 backdrop-blur-sm py-4 border-b border-white/5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo & Brand Name */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src="/logo.jpeg" 
                alt="KRS Hospital Logo" 
                className="w-12 h-12 rounded-xl object-contain bg-white p-1 shadow-lg ring-2 ring-emerald-500/40 group-hover:scale-105 transition-transform" 
              />
              <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-slate-950 text-[10px] font-extrabold px-1 rounded shadow">
                1996
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-extrabold text-xl tracking-tight text-white font-heading">KRS</span>
                <span className="text-emerald-400 font-semibold text-sm tracking-wide uppercase px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/30">
                  Multispeciality
                </span>
              </div>
              <p className="text-xs text-slate-400 tracking-wider">Hospital & Trauma Care Centre • Edappadi</p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium text-slate-200">
            <a href="#about" className="hover:text-emerald-400 transition-colors py-1">About Us</a>
            <a href="#departments" className="hover:text-emerald-400 transition-colors py-1">Specialties</a>
            <a href="#doctors" className="hover:text-emerald-400 transition-colors py-1">Specialists</a>
            <a href="#packages" className="hover:text-emerald-400 transition-colors py-1 flex items-center space-x-1 text-emerald-400 font-semibold">
              <PackageCheck className="w-3.5 h-3.5" />
              <span>Health Packages</span>
            </a>
            <a href="#facilities" className="hover:text-emerald-400 transition-colors py-1">Facilities</a>
            <a href="#gallery" className="hover:text-emerald-400 transition-colors py-1">Campus Photos</a>
            <a href="#why-us" className="hover:text-emerald-400 transition-colors py-1">Why KRS</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors py-1">Contact</a>
          </nav>

          {/* Action CTA Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`tel:${hospitalInfo.hospitalMobile}`}
              className="flex items-center space-x-2 bg-rose-600/20 hover:bg-rose-600/30 text-rose-300 font-semibold text-xs px-3.5 py-2.5 rounded-xl border border-rose-500/40 transition-all hover:scale-105"
            >
              <Phone className="w-4 h-4 text-rose-400" />
              <span>{hospitalInfo.hospitalMobile}</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="flex items-center space-x-2 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-lg shadow-teal-900/40 border border-emerald-400/30 transition-all hover:scale-105"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-800 text-slate-200 hover:text-emerald-400"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 backdrop-blur-xl border-b border-teal-500/20 py-6 px-6 space-y-4">
          <nav className="flex flex-col space-y-3 font-medium text-slate-200">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-2 border-b border-slate-800 flex justify-between items-center"
            >
              <span>About Us</span>
              <ChevronRight className="w-4 h-4 text-emerald-400" />
            </a>
            <a 
              href="#departments" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-2 border-b border-slate-800 flex justify-between items-center"
            >
              <span>Specialties & Departments</span>
              <ChevronRight className="w-4 h-4 text-emerald-400" />
            </a>
            <a 
              href="#doctors" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-2 border-b border-slate-800 flex justify-between items-center"
            >
              <span>Specialist Doctors</span>
              <ChevronRight className="w-4 h-4 text-emerald-400" />
            </a>
            <a 
              href="#packages" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-2 border-b border-slate-800 flex justify-between items-center text-emerald-400 font-bold"
            >
              <span>Preventive Health Packages</span>
              <ChevronRight className="w-4 h-4 text-emerald-400" />
            </a>
            <a 
              href="#facilities" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-2 border-b border-slate-800 flex justify-between items-center"
            >
              <span>Hospital Facilities</span>
              <ChevronRight className="w-4 h-4 text-emerald-400" />
            </a>
            <a 
              href="#gallery" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-2 border-b border-slate-800 flex justify-between items-center"
            >
              <span>Campus Photos & Tour</span>
              <ChevronRight className="w-4 h-4 text-emerald-400" />
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-2 flex justify-between items-center"
            >
              <span>Contact & Directions</span>
              <ChevronRight className="w-4 h-4 text-emerald-400" />
            </a>
          </nav>

          <div className="pt-4 flex flex-col space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-bold rounded-xl shadow-lg flex items-center justify-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment Online</span>
            </button>
            
            <a
              href={`tel:${hospitalInfo.hospitalMobile}`}
              className="w-full py-3 bg-rose-600/20 text-rose-300 font-bold rounded-xl border border-rose-500/40 text-center flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Hospital: {hospitalInfo.hospitalMobile}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
