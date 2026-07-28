import React, { useState } from 'react';
import { 
  Stethoscope, Activity, Bone, Brain, HeartHandshake, Wind, Sparkles, 
  Scissors, ShieldAlert, Crosshair, Baby, Smile, Scale, CircleDot, Scan, Cpu,
  CheckCircle2, ChevronRight, Calendar, ArrowRight, User 
} from 'lucide-react';
import { departments, doctors } from '../data/hospitalData';

const iconMap = {
  Stethoscope, Activity, Bone, Brain, HeartHandshake, Wind, Sparkles,
  Scissors, ShieldAlert, Crosshair, Baby, Smile, Scale, CircleDot, Scan, Cpu
};

export default function Departments({ onOpenBooking, selectedDeptId, onSelectDepartment, onSelectDoctor, selectedDeptFilter }) {
  const [activeTab, setActiveTab] = useState(selectedDeptId || (selectedDeptFilter !== 'All' ? selectedDeptFilter : departments[0].id));

  // Sync activeTab with lifted state selectedDeptFilter
  React.useEffect(() => {
    if (selectedDeptFilter && selectedDeptFilter !== 'All' && selectedDeptFilter !== activeTab) {
      setActiveTab(selectedDeptFilter);
    }
  }, [selectedDeptFilter]);

  const handleTabClick = (deptId) => {
    setActiveTab(deptId);
    if (onSelectDepartment) onSelectDepartment(deptId);
    setTimeout(() => {
      const el = document.getElementById('active-dept-detail');
      if (el) {
        const yOffset = -90;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 30);
  };

  const activeDept = departments.find(d => d.id === activeTab) || departments[0];
  const deptDoctors = doctors.filter(doc => doc.departmentId === activeDept.id);

  return (
    <section id="departments" className="py-24 relative overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="section-divider" />
          <span className="section-label-pill">
            <Stethoscope className="w-3.5 h-3.5" />
            19+ Specialized Departments
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-heading mt-3">
            Medicine Department <span className="text-teal-600">Doctor Availability</span> & Schedule
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Advanced medical imaging, surgical care, and timely diagnoses from expert specialists under one roof in Edappadi.
          </p>
        </div>

        {/* Department Explorer Grid / Tabs */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Mobile Department Horizontal Scroll */}
          <div className="lg:hidden w-full flex gap-3 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-emerald-200 scrollbar-track-transparent">
            {departments.map((dept) => {
              const IconComponent = iconMap[dept.icon] || Stethoscope;
              const isActive = dept.id === activeTab;
              return (
                <button
                  key={dept.id}
                  onClick={() => handleTabClick(dept.id)}
                  className="flex-shrink-0 flex items-center gap-2.5 p-3 rounded-xl transition-all border text-left cursor-pointer"
                  style={{
                    background: isActive ? 'linear-gradient(135deg, #f0fdf4, #dcfce7)' : '#ffffff',
                    borderColor: isActive ? '#a7f3d0' : 'rgba(15,23,42,0.07)',
                    boxShadow: isActive ? '0 2px 10px rgba(5,150,105,0.1)' : '0 1px 3px rgba(0,0,0,0.04)',
                    minWidth: '180px'
                  }}
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors flex-shrink-0"
                    style={{ background: isActive ? '#e6f4ea' : '#f8fafc', border: isActive ? '1px solid #a7f3d0' : '1px solid rgba(15,23,42,0.06)' }}>
                    <IconComponent className="w-4 h-4" style={{ color: isActive ? '#047857' : '#0f766e' }} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs font-bold truncate" style={{ color: isActive ? '#047857' : '#0f172a' }}>{dept.name}</h4>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Left Column: Desktop Department List */}
          <div className="hidden lg:block lg:col-span-4 space-y-1.5 max-h-[600px] overflow-y-auto pr-1">
            {departments.map((dept) => {
              const IconComponent = iconMap[dept.icon] || Stethoscope;
              const isActive = dept.id === activeTab;
              return (
                <button
                  key={dept.id}
                  onClick={() => handleTabClick(dept.id)}
                  className="w-full text-left p-4 rounded-xl transition-all flex items-center justify-between group cursor-pointer"
                  style={{
                    background: isActive ? 'linear-gradient(135deg, #f0fdf4, #dcfce7)' : '#ffffff',
                    border: isActive ? '1px solid #a7f3d0' : '1px solid rgba(15,23,42,0.07)',
                    boxShadow: isActive ? '0 2px 12px rgba(5,150,105,0.12)' : '0 1px 3px rgba(0,0,0,0.04)',
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors flex-shrink-0"
                      style={{ background: isActive ? '#e6f4ea' : '#f8fafc', border: isActive ? '1px solid #a7f3d0' : '1px solid rgba(15,23,42,0.06)' }}>
                      <IconComponent className="w-5 h-5" style={{ color: isActive ? '#047857' : '#0f766e' }} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold" style={{ color: isActive ? '#047857' : '#0f172a' }}>{dept.name}</h4>
                      <p className="text-[11px] line-clamp-1" style={{ color: '#94a3b8' }}>{dept.desc}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    style={{ color: isActive ? '#059669' : '#cbd5e1' }} />
                </button>
              );
            })}
          </div>

          {/* Right: Active Department Detail */}
          <div id="active-dept-detail" className="lg:col-span-8 w-full scroll-mt-24">
            <div key={activeDept.id} className="p-6 sm:p-8 rounded-2xl space-y-6 animate-fade-in" style={{ background: '#ffffff', border: '1px solid rgba(15,23,42,0.08)', boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}>
              
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6" style={{ borderBottom: '1px solid rgba(15,23,42,0.07)' }}>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center border border-slate-150 shadow-sm" style={{ background: '#f8fafc' }}>
                    {React.createElement(iconMap[activeDept.icon] || Stethoscope, { className: 'w-7 h-7', style: { color: '#0f766e' } })}
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold font-heading" style={{ color: '#0f172a' }}>{activeDept.name}</h3>
                    <p className="text-sm" style={{ color: '#64748b' }}>KRS Multispeciality Hospital, Edappadi</p>
                  </div>
                </div>
                <button onClick={() => onOpenBooking(activeDept.id)}
                  className="btn-premium text-xs px-4 py-2.5">
                  <Calendar className="w-4 h-4" /> Book Consultation
                </button>
              </div>

              <div>
                <h4 className="text-[10px] uppercase tracking-wider font-bold mb-2" style={{ color: '#94a3b8' }}>Overview & Scope</h4>
                <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>{activeDept.desc}</p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-wider font-bold mb-3" style={{ color: '#94a3b8' }}>Key Services & Procedures</h4>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {activeDept.services.map((service, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl text-xs" style={{ background: '#f8fafc', border: '1px solid rgba(15,23,42,0.07)', color: '#334155' }}>
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#059669' }} />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {deptDoctors.length > 0 && (
                <div className="pt-4" style={{ borderTop: '1px solid rgba(15,23,42,0.07)' }}>
                  <h4 className="text-[10px] uppercase tracking-wider font-bold mb-3" style={{ color: '#94a3b8' }}>Specialists in {activeDept.name}</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {deptDoctors.map((doc) => (
                      <div 
                        key={doc.id}
                        onClick={() => onSelectDoctor && onSelectDoctor(doc)}
                        className="p-4 rounded-xl flex items-center justify-between gap-3 text-left transition-all border hover:border-emerald-300 hover:shadow-md cursor-pointer group"
                        style={{ background: '#f8fafc', border: '1px solid rgba(15,23,42,0.07)' }}
                      >
                        <div className="flex items-center gap-3">
                          {doc.photo ? (
                            <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0 shadow-sm transition-transform group-hover:scale-105" style={{ border: '1px solid rgba(15,23,42,0.08)' }}>
                              <img src={doc.photo} alt={doc.name} className="w-full h-full object-cover" />
                            </div>
                          ) : (
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 text-white transition-transform group-hover:scale-105"
                              style={{ background: 'linear-gradient(135deg, #059669, #0d9488)' }}>
                              {doc.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                            </div>
                          )}
                          <div>
                            <h5 className="text-sm font-bold transition-colors group-hover:text-emerald-700" style={{ color: '#0f172a' }}>{doc.name}</h5>
                            <p className="text-xs font-medium" style={{ color: '#059669' }}>{doc.degrees}</p>
                            <p className="text-[11px]" style={{ color: '#94a3b8' }}>{doc.specialty}</p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end shrink-0">
                          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-150 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                            View Profile →
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 flex flex-wrap items-center justify-between gap-3" style={{ borderTop: '1px solid rgba(15,23,42,0.07)' }}>
                    <span className="text-[11px] text-slate-500 font-medium">Ready to see availability, schedule, or full credentials?</span>
                    <button 
                      onClick={() => {
                        if (onSelectDepartment) onSelectDepartment(activeDept.id);
                        document.getElementById('doctors')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-xs text-emerald-600 hover:text-emerald-700 font-bold flex items-center gap-1 transition-all"
                    >
                      View Schedule & Availability <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
