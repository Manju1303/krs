import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldAlert, Award, Calendar, Heart } from 'lucide-react';
import { hospitalInfo, departments } from '../data/hospitalData';

export default function Footer({ onOpenBooking }) {
  return (
    <footer id="contact" className="bg-slate-950 border-t border-teal-500/20 pt-16 pb-12 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Emergency CTA Card in Footer */}
        <div className="glass-card p-8 rounded-3xl border border-rose-500/30 bg-gradient-to-r from-rose-950/40 via-slate-900 to-emerald-950/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 text-rose-400 font-extrabold text-xs uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4 animate-pulse" />
              <span>24 Hours / 7 Days Active Emergency Care</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              In Need of Critical Trauma or Medical Emergency?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm">
              Our casualty team, ICUs, ambulance, and trauma surgeons are ready 24/7 in Edappadi.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`tel:${hospitalInfo.emergencyPhone}`}
              className="px-6 py-3.5 bg-rose-600 hover:bg-rose-500 text-white font-extrabold text-xs rounded-xl shadow-xl flex items-center space-x-2 transition-transform hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span>Call Emergency: {hospitalInfo.emergencyPhone}</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="px-6 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-extrabold text-xs rounded-xl shadow-xl flex items-center space-x-2 transition-transform hover:scale-105"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>

        {/* Main Footer Links & Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-xs">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.jpeg" 
                alt="KRS Hospital Logo" 
                className="w-10 h-10 rounded-lg object-contain bg-white p-1 ring-2 ring-emerald-500/40" 
              />
              <div>
                <h4 className="text-base font-extrabold text-white font-heading">KRS Multispeciality</h4>
                <p className="text-[11px] text-emerald-400 font-semibold">Hospital & Trauma Care Centre</p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed">
              Founded in 1996 by Dr. K. Ravisuthan in Edappadi. Committed to high-quality, technology-driven, affordable healthcare for every family.
            </p>

            <div className="pt-2 text-emerald-400 font-semibold flex items-center space-x-1.5">
              <Award className="w-4 h-4" />
              <span>28+ Years of Medical Excellence</span>
            </div>
          </div>

          {/* Col 2: Quick Links / Specialties */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white font-heading uppercase tracking-wider">Top Specialties</h4>
            <ul className="space-y-2 text-slate-400">
              {departments.slice(0, 6).map(d => (
                <li key={d.id}>
                  <a href="#departments" className="hover:text-emerald-400 transition-colors">
                    • {d.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Hours */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white font-heading uppercase tracking-wider">Contact & Hours</h4>
            <div className="space-y-2.5 text-slate-300">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{hospitalInfo.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-rose-400 shrink-0" />
                <span>Emergency: {hospitalInfo.emergencyPhone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Landline: {hospitalInfo.landlinePhone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{hospitalInfo.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{hospitalInfo.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Col 4: Location Map & Campus */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white font-heading uppercase tracking-wider">Campus Location</h4>
            <div className="glass-panel p-3 rounded-2xl border border-slate-800 space-y-2">
              <div className="text-[11px] text-slate-300 font-semibold">Edappadi Central Campus</div>
              <p className="text-[10px] text-slate-400">Conveniently situated in Edappadi, Salem District with 24/7 parking and ambulance access.</p>
              <a
                href="https://maps.google.com/?q=Edappadi+Salem+Tamil+Nadu"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs text-emerald-400 font-bold hover:underline pt-1"
              >
                <span>Open Google Maps Directions</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} KRS Multispeciality Hospital & Trauma Care Centre. All rights reserved.</p>
          <div className="flex items-center space-x-1 text-slate-400">
            <span>Delivering trusted care in Edappadi since 1996</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
