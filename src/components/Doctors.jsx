import React, { useState } from 'react';
import { User, Award, Calendar, Search, Stethoscope, CheckCircle2, X, Clock, Sparkles } from 'lucide-react';
import { doctors, departments } from '../data/hospitalData';

export default function Doctors({ onOpenBooking }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDeptFilter, setSelectedDeptFilter] = useState('all');
  const [selectedDoctorModal, setSelectedDoctorModal] = useState(null);

  // Filter logic
  const filteredDoctors = doctors.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          doc.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          doc.degrees.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDeptFilter === 'all' || doc.departmentId === selectedDeptFilter;
    return matchesSearch && matchesDept;
  });

  return (
    <section id="doctors" className="py-24 relative bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 bg-emerald-950/80 border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-300">
            <Award className="w-4 h-4 text-emerald-400" />
            <span>Expert Medical Faculty</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading">
            Meet Our <span className="text-gradient-emerald">Specialist Doctors</span>
          </h2>
          <p className="text-slate-400 text-base">
            Over 19+ highly qualified physicians, orthopedic surgeons, gynecologists, neurologists, and oncologists committed to patient wellbeing.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="glass-panel p-4 sm:p-6 rounded-2xl border border-teal-500/20 mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by doctor name or specialty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
            />
          </div>

          {/* Department Filter Dropdown */}
          <div className="flex items-center space-x-2 w-full md:w-auto">
            <span className="text-xs text-slate-400 whitespace-nowrap">Filter Department:</span>
            <select
              value={selectedDeptFilter}
              onChange={(e) => setSelectedDeptFilter(e.target.value)}
              className="bg-slate-950 border border-slate-800 text-slate-200 text-xs rounded-xl px-3 py-2.5 focus:outline-none focus:border-emerald-500 w-full md:w-auto"
            >
              <option value="all">All Departments ({doctors.length})</option>
              {departments.map(dept => (
                <option key={dept.id} value={dept.id}>{dept.name}</option>
              ))}
            </select>
          </div>

        </div>

        {/* Doctors Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doc) => (
            <div 
              key={doc.id}
              className="glass-card rounded-3xl p-6 border border-emerald-500/20 hover:border-emerald-400/50 transition-all flex flex-col justify-between group space-y-5"
            >
              <div className="space-y-4">
                {/* Doctor Avatar Badge & Role */}
                <div className="flex items-start justify-between">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-900 to-teal-800 border border-emerald-400/40 text-emerald-300 flex items-center justify-center font-bold text-xl shadow-lg group-hover:scale-105 transition-transform">
                    <User className="w-8 h-8" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider bg-emerald-950 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-500/30">
                    {doc.experience} Experience
                  </span>
                </div>

                {/* Name & Credentials */}
                <div>
                  <h3 className="text-lg font-extrabold text-white font-heading group-hover:text-emerald-300 transition-colors">
                    {doc.name}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-400 mt-0.5">{doc.degrees}</p>
                  <p className="text-xs text-slate-400 font-medium mt-1">{doc.specialty}</p>
                </div>

                {/* Bio snippet */}
                <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                  {doc.bio}
                </p>

                {/* Clinical Highlights Bullet List */}
                <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                  {doc.highlights.slice(0, 3).map((hl, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-[11px] text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                      <span className="truncate">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedDoctorModal(doc)}
                  className="flex-1 py-2.5 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl transition-colors text-center"
                >
                  View Profile
                </button>

                <button
                  onClick={() => onOpenBooking(doc.departmentId, doc.name)}
                  className="flex-1 py-2.5 px-3 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white text-xs font-bold rounded-xl shadow-md transition-transform hover:scale-105 flex items-center justify-center space-x-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Doctor Full Profile Modal */}
        {selectedDoctorModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop animate-fade-in">
            <div className="glass-card max-w-2xl w-full p-6 sm:p-8 rounded-3xl border border-emerald-500/40 shadow-2xl relative max-h-[90vh] overflow-y-auto space-y-6">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedDoctorModal(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Doctor Header */}
              <div className="flex items-center space-x-4 border-b border-slate-800 pb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-400 text-slate-950 flex items-center justify-center font-bold text-2xl shadow-lg shrink-0">
                  <User className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white font-heading">{selectedDoctorModal.name}</h3>
                  <p className="text-xs font-bold text-emerald-400">{selectedDoctorModal.degrees}</p>
                  <p className="text-xs text-slate-300 font-medium">{selectedDoctorModal.specialty}</p>
                  <p className="text-[11px] text-slate-400 mt-1">{selectedDoctorModal.role} • {selectedDoctorModal.experience} Experience</p>
                </div>
              </div>

              {/* Full Bio */}
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2">About the Doctor</h4>
                <p className="text-sm text-slate-200 leading-relaxed">{selectedDoctorModal.bio}</p>
              </div>

              {/* Clinical Highlights */}
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3">Clinical Expertise & Highlights</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {selectedDoctorModal.highlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-slate-800 flex justify-end space-x-3">
                <button
                  onClick={() => setSelectedDoctorModal(null)}
                  className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold rounded-xl"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const docDept = selectedDoctorModal.departmentId;
                    const docName = selectedDoctorModal.name;
                    setSelectedDoctorModal(null);
                    onOpenBooking(docDept, docName);
                  }}
                  className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg flex items-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment with {selectedDoctorModal.name}</span>
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
