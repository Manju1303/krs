import React, { useState } from 'react';
import { UserCheck, Award, GraduationCap, Clock, Calendar, Search, Sparkles, ChevronRight, X } from 'lucide-react';
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
    <section id="doctors" className="py-24 relative bg-slate-900 overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 bg-emerald-950/80 border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-300">
            <UserCheck className="w-4 h-4 text-emerald-400" />
            <span>19+ Qualified Medical Specialists</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading">
            Meet Our <span className="text-gradient-emerald">Specialist Doctors</span>
          </h2>
          <p className="text-slate-400 text-base">
            Dedicated surgeons, physicians, and consultants bringing advanced clinical expertise and patient-centered care to Edappadi.
          </p>
        </div>

        {/* Live Search & Department Filter Bar */}
        <div className="max-w-4xl mx-auto space-y-4 mb-12">
          {/* Search Box */}
          <div className="relative">
            <Search className="w-5 h-5 text-emerald-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search specialist by doctor name, qualification, or department (e.g. Dr. Ravisuthan, Ortho, Gynecologist)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-emerald-500/30 rounded-2xl pl-12 pr-10 py-3.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 shadow-xl"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Department Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <button
              onClick={() => setSelectedDeptFilter('All')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                selectedDeptFilter === 'All'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white border-emerald-400 shadow'
                  : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
              }`}
            >
              All Specialists ({doctors.length})
            </button>
            {departments.slice(0, 7).map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDeptFilter(dept.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                  selectedDeptFilter === dept.id
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white border-emerald-400 shadow'
                    : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                }`}
              >
                {dept.name}
              </button>
            ))}
          </div>
        </div>

        {/* Doctors Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDoctors.map((doc) => (
            <div
              key={doc.id}
              className="glass-card rounded-3xl p-6 border border-emerald-500/20 hover:border-emerald-400/50 transition-all flex flex-col justify-between group space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center font-extrabold text-slate-950 text-lg shadow-md shrink-0">
                    {doc.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400">
                      {doc.role}
                    </span>
                    <h3 className="text-base font-extrabold text-white font-heading group-hover:text-emerald-300 transition-colors line-clamp-1">
                      {doc.name}
                    </h3>
                  </div>
                </div>

                <div className="space-y-1 pt-1 border-t border-slate-800/80 text-xs">
                  <div className="flex items-center space-x-1.5 text-teal-300 font-medium">
                    <GraduationCap className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{doc.degrees}</span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-slate-300">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{doc.specialty}</span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span>Experience: {doc.experience}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {doc.bio}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center space-x-2">
                <button
                  onClick={() => setSelectedDoctorModal(doc)}
                  className="flex-1 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold border border-slate-800 transition-colors text-center"
                >
                  View Profile
                </button>

                <button
                  onClick={() => onOpenBooking(doc.departmentId, doc.name)}
                  className="flex-1 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white text-xs font-bold shadow transition-transform hover:scale-105 flex items-center justify-center space-x-1"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-12 text-slate-400 text-sm">
            No doctors found matching "{searchQuery}". Try searching by department or clear filters.
          </div>
        )}

        {/* Doctor Bio Modal */}
        {selectedDoctorModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 modal-backdrop animate-fade-in">
            <div className="glass-card max-w-lg w-full p-6 sm:p-8 rounded-3xl border border-emerald-500/40 shadow-2xl relative space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center font-extrabold text-slate-950 text-xl shadow">
                    {selectedDoctorModal.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-white font-heading">{selectedDoctorModal.name}</h3>
                    <p className="text-xs text-emerald-400 font-semibold">{selectedDoctorModal.degrees}</p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedDoctorModal(null)}
                  className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <h4 className="font-extrabold text-slate-300 uppercase tracking-wider mb-1">Specialty & Designation</h4>
                  <p className="text-emerald-300 font-medium">{selectedDoctorModal.specialty} • {selectedDoctorModal.role}</p>
                </div>

                <div>
                  <h4 className="font-extrabold text-slate-300 uppercase tracking-wider mb-1">Clinical Bio</h4>
                  <p className="text-slate-300 leading-relaxed">{selectedDoctorModal.bio}</p>
                </div>

                <div>
                  <h4 className="font-extrabold text-slate-300 uppercase tracking-wider mb-2">Key Clinical Highlights</h4>
                  <div className="space-y-1.5">
                    {selectedDoctorModal.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-slate-200">
                        <Award className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex justify-end space-x-3">
                <button
                  onClick={() => setSelectedDoctorModal(null)}
                  className="px-4 py-2.5 bg-slate-800 text-slate-300 text-xs font-bold rounded-xl"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const deptId = selectedDoctorModal.departmentId;
                    const docName = selectedDoctorModal.name;
                    setSelectedDoctorModal(null);
                    onOpenBooking(deptId, docName);
                  }}
                  className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg flex items-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
