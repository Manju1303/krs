import React, { useState } from 'react';
import { Phone, Calendar, MessageSquare, ShieldAlert, X, FlaskConical } from 'lucide-react';
import { hospitalInfo } from '../data/hospitalData';

export default function EmergencyFloat({ onOpenBooking }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
      {/* Expanded Quick Options */}
      {expanded && (
        <div className="glass-card p-4 rounded-2xl border border-emerald-500/40 shadow-2xl space-y-3 animate-fade-in w-72 text-xs">
          <div className="flex justify-between items-center border-b border-slate-800 pb-2">
            <span className="font-extrabold text-white flex items-center space-x-1.5">
              <ShieldAlert className="w-4 h-4 text-rose-500 animate-pulse" />
              <span>Hospital Helplines</span>
            </span>
            <button onClick={() => setExpanded(false)} className="text-slate-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>

          <a
            href={`tel:${hospitalInfo.hospitalMobile}`}
            className="flex items-center space-x-2 p-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold transition-colors"
          >
            <Phone className="w-4 h-4 shrink-0" />
            <div>
              <div>Hospital: {hospitalInfo.hospitalMobile}</div>
              <div className="text-[10px] text-rose-100 font-normal">Direct Emergency Mobile</div>
            </div>
          </a>

          <a
            href={`tel:${hospitalInfo.landlinePhone}`}
            className="flex items-center space-x-2 p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold transition-colors"
          >
            <Phone className="w-4 h-4 text-teal-400 shrink-0" />
            <div>
              <div>Landline: {hospitalInfo.landlinePhone}</div>
              <div className="text-[10px] text-slate-400 font-normal">Hospital Reception</div>
            </div>
          </a>

          <a
            href={`tel:${hospitalInfo.labPhone}`}
            className="flex items-center space-x-2 p-2.5 rounded-xl bg-emerald-950 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-300 font-bold transition-colors"
          >
            <FlaskConical className="w-4 h-4 text-emerald-400 shrink-0" />
            <div>
              <div>24/7 Lab: {hospitalInfo.labPhone}</div>
              <div className="text-[10px] text-emerald-400 font-normal">Pathology & Diagnostics</div>
            </div>
          </a>

          <button
            onClick={() => {
              setExpanded(false);
              onOpenBooking();
            }}
            className="w-full flex items-center justify-center space-x-2 p-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-bold transition-colors shadow"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Online Appointment</span>
          </button>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="group relative flex items-center space-x-3 bg-gradient-to-r from-rose-600 via-rose-500 to-emerald-600 text-white font-bold px-5 py-3.5 rounded-full shadow-2xl shadow-rose-950/80 border border-rose-400/40 hover:scale-105 transition-all animate-pulse-glow"
      >
        <ShieldAlert className="w-6 h-6 animate-pulse" />
        <span className="text-xs font-extrabold tracking-wide uppercase">24/7 Emergency</span>
      </button>
    </div>
  );
}
