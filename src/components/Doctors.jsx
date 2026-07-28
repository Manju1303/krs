import React, { useState } from 'react';
import { UserCheck, GraduationCap, Clock, Calendar, Search, Stethoscope, X } from 'lucide-react';
import { doctors, departments } from '../data/hospitalData';

export default function Doctors({ 
  onOpenBooking, 
  selectedDeptFilter, 
  setSelectedDeptFilter, 
  selectedDoctorModal, 
  setSelectedDoctorModal 
}) {
  const [searchQuery, setSearchQuery] = useState('');

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
          <span className="section-label-pill"><UserCheck className="w-3.5 h-3.5" />20+ Qualified Specialists</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-heading mt-3" style={{ color: '#0f172a' }}>
            Our <span className="text-gradient-emerald">Specialist Doctors</span>
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>
            Dedicated surgeons, physicians, and consultants bringing advanced expertise to Edappadi.
          </p>
        </div>

        {/* Unified Search, Filter and Doctors List Container */}
        <div className="bg-white rounded-3xl border border-slate-200/60 shadow-xl p-6 sm:p-8 lg:p-10 space-y-8">
          
          {/* Controls: Search and Filters */}
          <div className="space-y-6 max-w-4xl mx-auto">
            {/* Search */}
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2" style={{ color: '#059669' }} />
                <input type="text" placeholder="Search by name, specialty or qualification…"
                  value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-10 py-3 rounded-xl text-sm placeholder-slate-400 focus:outline-none"
                  style={{ background: '#f8fafc', border: '1px solid rgba(15,23,42,0.08)', color: '#0f172a' }} />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2" style={{ color: '#94a3b8' }}>
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Dept Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {[{ id: 'All', name: `All (${doctors.length})` }, ...departments].map((d) => {
                const active = selectedDeptFilter === d.id;
                return (
                  <button key={d.id} onClick={() => setSelectedDeptFilter(d.id)}
                    className="px-4 py-1.5 rounded-lg text-xs font-semibold transition-all"
                    style={{
                      background: active ? 'linear-gradient(135deg, #059669, #0d9488)' : '#f8fafc',
                      color: active ? '#fff' : '#475569',
                      border: active ? '1px solid transparent' : '1px solid rgba(15,23,42,0.06)',
                      boxShadow: active ? '0 2px 10px rgba(5,150,105,0.25)' : 'none',
                    }}>
                    {d.name || d.id === 'All' ? d.name : d.name}
                  </button>
                );
              })}
            </div>
          </div>

          <div style={{ height: '1px', background: 'rgba(15,23,42,0.06)' }} />

          {/* Results Area */}
          <div className="space-y-4">
            <div className="flex items-center justify-between px-2 text-xs text-slate-500 pb-2 border-b border-slate-100">
              <span className="font-semibold text-emerald-700">
                Showing {filteredDoctors.length} Specialist Consultants
              </span>
              <span className="text-[10px] text-slate-400 hidden sm:inline">
                Scroll inside to view all doctors
              </span>
            </div>

            {/* Scrollable Container for doctor profiles */}
            <div className="max-h-[660px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-1">
                {filteredDoctors.map((doc) => (
                  <div key={doc.id} className="premium-card p-6 group flex flex-col hover-card-lift" style={{ background: '#f8fafc' }}>
                    <div className="flex flex-col gap-3.5 mb-4">
                      <div className="flex items-start gap-4">
                        {doc.photo ? (
                          <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-sm border-2 border-slate-100" style={{ border: '2px solid rgba(15,23,42,0.06)' }}>
                            <img src={doc.photo} alt={doc.name} className="w-full h-full object-cover" />
                          </div>
                        ) : (
                          <div className="w-16 h-16 rounded-xl flex items-center justify-center font-extrabold text-lg shrink-0 font-heading text-white"
                            style={{ background: 'linear-gradient(135deg, #059669, #0d9488)' }}>
                            {doc.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                          </div>
                        )}
                        <div className="space-y-1.5 flex-1 min-w-0">
                          <h3 className="text-base font-extrabold font-heading leading-tight text-slate-900 truncate" title={doc.name}>{doc.name}</h3>
                          <div className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-100 inline-block truncate max-w-full" title={doc.role}>
                            {doc.role}
                          </div>
                        </div>
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
                        style={{ background: '#fff', border: '1px solid rgba(15,23,42,0.08)', color: '#475569' }}>
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
            <div className="max-w-md w-full p-7 rounded-2xl relative space-y-5 max-h-[90vh] overflow-y-auto animate-popup-in"
              style={{ background: '#fff', border: '1px solid rgba(15,23,42,0.10)', boxShadow: '0 24px 64px rgba(0,0,0,0.18)' }}>
                <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  {selectedDoctorModal.photo ? (
                    <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-sm border border-slate-100">
                      <img src={selectedDoctorModal.photo} alt={selectedDoctorModal.name} className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center font-extrabold text-base font-heading shrink-0 text-white"
                      style={{ background: 'linear-gradient(135deg, #059669, #0d9488)' }}>
                      {selectedDoctorModal.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </div>
                  )}
                  <div className="space-y-1">
                    <h3 className="font-extrabold text-lg font-heading leading-tight" style={{ color: '#0f172a' }}>{selectedDoctorModal.name}</h3>
                    <p className="text-xs font-bold text-emerald-600">{selectedDoctorModal.degrees}</p>
                  </div>
                </div>
                <button onClick={() => setSelectedDoctorModal(null)}
                  className="p-1.5 rounded-lg transition-colors hover:bg-slate-100" style={{ color: '#64748b' }}>
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div style={{ height: '1px', background: 'rgba(15,23,42,0.07)' }} />
              <div className="space-y-4 text-sm">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest mb-1.5" style={{ color: '#94a3b8' }}>Specialty & Role</div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-semibold text-slate-800">{selectedDoctorModal.specialty}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-100 inline-block">
                      {selectedDoctorModal.role}
                    </span>
                  </div>
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
