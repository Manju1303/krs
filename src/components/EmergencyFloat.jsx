import React, { useState } from 'react';
import { Phone, Calendar, ShieldAlert, X, FlaskConical } from 'lucide-react';
import { hospitalInfo } from '../data/hospitalData';

export default function EmergencyFloat({ onOpenBooking }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {expanded && (
        <div className="animate-fade-in rounded-2xl p-4 space-y-3 w-72 text-xs"
          style={{ background: '#fff', border: '1px solid rgba(15,23,42,0.10)', boxShadow: '0 16px 40px rgba(0,0,0,0.15)' }}>
          <div className="flex justify-between items-center pb-2" style={{ borderBottom: '1px solid rgba(15,23,42,0.07)' }}>
            <span className="font-bold flex items-center gap-1.5" style={{ color: '#0f172a' }}>
              <ShieldAlert className="w-4 h-4 text-rose-500 animate-pulse" /> Hospital Helplines
            </span>
            <button onClick={() => setExpanded(false)} style={{ color: '#94a3b8' }}>
              <X className="w-4 h-4" />
            </button>
          </div>
          <a href={`tel:${hospitalInfo.hospitalMobile}`}
            className="flex items-center gap-2.5 p-3 rounded-xl font-bold transition-all"
            style={{ background: '#fef2f2', border: '1px solid rgba(220,38,38,0.20)', color: '#dc2626' }}>
            <Phone className="w-4 h-4 shrink-0" />
            <div>
              <div>{hospitalInfo.hospitalMobile}</div>
              <div className="text-[10px] font-normal" style={{ color: '#f87171' }}>Direct Emergency Mobile</div>
            </div>
          </a>
          <a href={`tel:${hospitalInfo.landlinePhone}`}
            className="flex items-center gap-2.5 p-3 rounded-xl font-bold transition-all"
            style={{ background: '#f8fafc', border: '1px solid rgba(15,23,42,0.08)', color: '#334155' }}>
            <Phone className="w-4 h-4 shrink-0" style={{ color: '#64748b' }} />
            <div>
              <div>{hospitalInfo.landlinePhone}</div>
              <div className="text-[10px] font-normal" style={{ color: '#94a3b8' }}>Hospital Reception</div>
            </div>
          </a>
          <a href={`tel:${hospitalInfo.labPhone}`}
            className="flex items-center gap-2.5 p-3 rounded-xl font-bold transition-all"
            style={{ background: '#f0fdf4', border: '1px solid #a7f3d0', color: '#047857' }}>
            <FlaskConical className="w-4 h-4 shrink-0" style={{ color: '#059669' }} />
            <div>
              <div>{hospitalInfo.labPhone}</div>
              <div className="text-[10px] font-normal" style={{ color: '#6ee7b7' }}>24/7 Lab & Diagnostics</div>
            </div>
          </a>
          <button onClick={() => { setExpanded(false); onOpenBooking(); }}
            className="btn-premium w-full justify-center text-sm">
            <Calendar className="w-4 h-4" /> Book Appointment
          </button>
        </div>
      )}

      <button onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-3 font-bold px-5 py-3.5 rounded-full shadow-xl border transition-all hover:scale-105"
        style={{
          background: 'linear-gradient(135deg, #dc2626, #059669)',
          color: '#fff',
          border: '1px solid rgba(255,255,255,0.20)',
          boxShadow: '0 8px 28px rgba(220,38,38,0.35)',
          animation: 'pulseBrand 2.5s infinite',
        }}>
        <ShieldAlert className="w-5 h-5 animate-pulse" />
        <span className="text-xs font-extrabold tracking-wide uppercase">24/7 Emergency</span>
      </button>
    </div>
  );
}
