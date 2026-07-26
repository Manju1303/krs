import React, { useState } from 'react';
import { UserCheck, GraduationCap, Clock, Calendar, Search, Stethoscope, X } from 'lucide-react';
import { doctors, departments } from '../data/hospitalData';

export default function Doctors({ onOpenBooking }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDeptFilter, setSelectedDeptFilter] = useState('All');
  const [selectedDoctorModal, setSelectedDoctorModal] = useState(null);

  const filteredDoctors = doctors.filter((doc) => {
    const matchesSearch =
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.degrees.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDept = selectedDeptFilter === 'All' || doc.departmentId === selectedDeptFilter;
    return matchesSearch && matchesDept;
  });

  return (
    <section id="doctors" className="py-24 relative overflow-hidden" style={{ background: '#f8fafc' }}>
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="section-divider" />
          <span className="section-label-pill"><UserCheck className="w-3.5 h-3.5" />19+ Qualified Specialists</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-heading mt-3" style={{ color: '#0f172a' }}>
            Our <span className="text-gradient-emerald">Specialist Doctors</span>
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>
            Dedicated surgeons, physicians, and consultants bringing advanced expertise to Edappadi.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2" style={{ color: '#059669' }} />
            <input type="text" placeholder="Search by name, specialty or qualification…"
              value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-3 rounded-xl text-sm placeholder-slate-400 focus:outline-none"
              style={{ background: '#fff', border: '1px solid rgba(15,23,42,0.10)', color: '#0f172a', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }} />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2" style={{ color: '#94a3b8' }}>
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Dept Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[{ id: 'All', name: `All (${doctors.length})` }, ...departments.slice(0, 7)].map((d) => {
            const active = selectedDeptFilter === d.id;
            return (
              <button key={d.id} onClick={() => setSelectedDeptFilter(d.id)}
                className="px-4 py-1.5 rounded-lg text-xs font-semibold transition-all"
                style={{
                  background: active ? 'linear-gradient(135deg, #059669, #0d9488)' : '#ffffff',
                  color: active ? '#fff' : '#475569',
                  border: active ? '1px solid transparent' : '1px solid rgba(15,23,42,0.10)',
                  boxShadow: active ? '0 2px 10px rgba(5,150,105,0.25)' : '0 1px 3px rgba(0,0,0,0.05)',
                }}>
                {d.name || d.id === 'All' ? d.name : d.name}
              </button>
            );
          })}
        </div>

        {/* Scrollable Doctors Container Box */}
        <div className="p-4 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-lg space-y-4">
          
          <div className="flex items-center justify-between px-2 text-xs text-slate-500 pb-2 border-b border-slate-100">
            <span className="font-semibold text-emerald-700">
              Showing {filteredDoctors.length} Specialist Consultants
            </span>
            <span className="text-[11px] text-slate-400 hidden sm:inline">
              Scroll inside container to view all doctors
            </span>
          </div>

          <div className="max-h-[580px] overflow-y-auto pr-2 space-y-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filteredDoctors.map((doc) => (
                <div key={doc.id} className="premium-card p-6 group flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center font-extrabold text-sm shrink-0 font-heading text-white"
                      style={{ background: 'linear-gradient(135deg, #059669, #0d9488)' }}>
                      {doc.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: '#059669' }}>{doc.role}</div>
                      <h3 className="text-sm font-bold font-heading leading-snug" style={{ color: '#0f172a' }}>{doc.name}</h3>
                    </div>
                  </div>

                  <div className="space-y-2 flex-1 mb-5">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-3.5 h-3.5 shrink-0" style={{ color: '#059669' }} />
                      <span className="text-xs truncate" style={{ color: '#334155' }}>{doc.degrees}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Stethoscope className="w-3.5 h-3.5 shrink-0" style={{ color: '#0d9488' }} />
                      <span className="text-xs truncate" style={{ color: '#475569' }}>{doc.specialty}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 shrink-0" style={{ color: '#94a3b8' }} />
                      <span className="text-xs" style={{ color: '#64748b' }}>{doc.experience} exp.</span>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4" style={{ borderTop: '1px solid rgba(15,23,42,0.07)' }}>
                    <button onClick={() => setSelectedDoctorModal(doc)}
                      className="flex-1 py-2 rounded-lg text-xs font-semibold transition-colors"
                      style={{ background: '#f8fafc', border: '1px solid rgba(15,23,42,0.08)', color: '#475569' }}>
                      Profile
                    </button>
                    <button onClick={() => onOpenBooking(doc.departmentId, doc.name)}
                      className="flex-1 py-2 rounded-lg text-xs font-bold text-white flex items-center justify-center gap-1.5 transition-all hover:opacity-90"
                      style={{ background: 'linear-gradient(135deg, #059669, #0d9488)' }}>
                      <Calendar className="w-3.5 h-3.5" /> Book
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredDoctors.length === 0 && (
              <div className="text-center py-16 text-sm" style={{ color: '#94a3b8' }}>
                No doctors found matching "{searchQuery}".
              </div>
            )}
          </div>
        </div>

        {/* Modal */}
        {selectedDoctorModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 modal-backdrop animate-fade-in">
            <div className="max-w-md w-full p-7 rounded-2xl relative space-y-5"
              style={{ background: '#fff', border: '1px solid rgba(15,23,42,0.10)', boxShadow: '0 24px 64px rgba(0,0,0,0.18)' }}>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center font-extrabold text-sm font-heading shrink-0 text-white"
                    style={{ background: 'linear-gradient(135deg, #059669, #0d9488)' }}>
                    {selectedDoctorModal.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <div>
                    <h3 className="font-bold text-base font-heading" style={{ color: '#0f172a' }}>{selectedDoctorModal.name}</h3>
                    <p className="text-xs font-semibold" style={{ color: '#059669' }}>{selectedDoctorModal.degrees}</p>
                  </div>
                </div>
                <button onClick={() => setSelectedDoctorModal(null)}
                  className="p-1.5 rounded-lg transition-colors" style={{ background: '#f1f5f9', color: '#64748b' }}>
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div style={{ height: '1px', background: 'rgba(15,23,42,0.07)' }} />
              <div className="space-y-4 text-sm">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: '#94a3b8' }}>Specialty</div>
                  <p style={{ color: '#059669' }}>{selectedDoctorModal.specialty} — {selectedDoctorModal.role}</p>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: '#94a3b8' }}>About</div>
                  <p className="text-xs leading-relaxed" style={{ color: '#475569' }}>{selectedDoctorModal.bio}</p>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: '#94a3b8' }}>Highlights</div>
                  <div className="space-y-1.5">
                    {selectedDoctorModal.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs" style={{ color: '#334155' }}>
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#059669' }} />
                        {h}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex gap-3 pt-4" style={{ borderTop: '1px solid rgba(15,23,42,0.07)' }}>
                <button onClick={() => setSelectedDoctorModal(null)}
                  className="flex-1 py-2.5 rounded-xl text-xs font-semibold transition-colors"
                  style={{ background: '#f8fafc', border: '1px solid rgba(15,23,42,0.08)', color: '#64748b' }}>
                  Close
                </button>
                <button onClick={() => { const d = selectedDoctorModal.departmentId; const n = selectedDoctorModal.name; setSelectedDoctorModal(null); onOpenBooking(d, n); }}
                  className="flex-1 py-2.5 rounded-xl text-xs font-bold text-white flex items-center justify-center gap-2 transition-all hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #059669, #0d9488)' }}>
                  <Calendar className="w-4 h-4" /> Book Consultation
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
