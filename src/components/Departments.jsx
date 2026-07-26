import React, { useState } from 'react';
import { 
  Stethoscope, Activity, Bone, Brain, HeartHandshake, Wind, Sparkles, 
  Scissors, ShieldAlert, Crosshair, Baby, Smile, Scale, CircleDot, 
  CheckCircle2, ChevronRight, Calendar, ArrowRight, User 
} from 'lucide-react';
import { departments, doctors } from '../data/hospitalData';

const iconMap = {
  Stethoscope, Activity, Bone, Brain, HeartHandshake, Wind, Sparkles,
  Scissors, ShieldAlert, Crosshair, Baby, Smile, Scale, CircleDot
};

export default function Departments({ onOpenBooking, selectedDeptId, onSelectDepartment }) {
  const [activeTab, setActiveTab] = useState(selectedDeptId || departments[0].id);

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
            15+ Specialized Departments
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
          
          {/* Left Column: Department List */}
          <div className="lg:col-span-4 space-y-1.5 max-h-[600px] overflow-y-auto pr-1">
            {departments.map((dept) => {
              const IconComponent = iconMap[dept.icon] || Stethoscope;
              const isActive = dept.id === activeTab;
              return (
                <button
                  key={dept.id}
                  onClick={() => { setActiveTab(dept.id); if (onSelectDepartment) onSelectDepartment(dept.id); }}
                  className="w-full text-left p-4 rounded-xl transition-all flex items-center justify-between group"
                  style={{
                    background: isActive ? 'linear-gradient(135deg, #f0fdf4, #dcfce7)' : '#ffffff',
                    border: isActive ? '1px solid #a7f3d0' : '1px solid rgba(15,23,42,0.07)',
                    boxShadow: isActive ? '0 2px 12px rgba(5,150,105,0.12)' : '0 1px 3px rgba(0,0,0,0.04)',
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors flex-shrink-0"
                      style={{ background: isActive ? '#059669' : '#f0fdf4', border: isActive ? 'none' : '1px solid #a7f3d0' }}>
                      <IconComponent className="w-5 h-5" style={{ color: isActive ? '#fff' : '#059669' }} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold" style={{ color: isActive ? '#047857' : '#0f172a' }}>{dept.name}</h4>
                      <p className="text-[11px] line-clamp-1" style={{ color: '#94a3b8' }}>{dept.desc}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 transition-transform flex-shrink-0" style={{ color: isActive ? '#059669' : '#cbd5e1', transform: isActive ? 'translateX(3px)' : 'none' }} />
                </button>
              );
            })}
          </div>

          {/* Right: Active Department Detail */}
          <div className="lg:col-span-8">
            <div className="p-6 sm:p-8 rounded-2xl space-y-6" style={{ background: '#ffffff', border: '1px solid rgba(15,23,42,0.08)', boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}>
              
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6" style={{ borderBottom: '1px solid rgba(15,23,42,0.07)' }}>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md" style={{ background: 'linear-gradient(135deg, #059669, #0d9488)' }}>
                    {React.createElement(iconMap[activeDept.icon] || Stethoscope, { className: 'w-7 h-7 text-white' })}
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
                      <div key={doc.id} className="p-4 rounded-xl flex items-center gap-3" style={{ background: '#f8fafc', border: '1px solid rgba(15,23,42,0.07)' }}>
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 text-white"
                          style={{ background: 'linear-gradient(135deg, #059669, #0d9488)' }}>
                          {doc.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </div>
                        <div>
                          <h5 className="text-sm font-bold" style={{ color: '#0f172a' }}>{doc.name}</h5>
                          <p className="text-xs font-medium" style={{ color: '#059669' }}>{doc.degrees}</p>
                          <p className="text-[11px]" style={{ color: '#94a3b8' }}>{doc.specialty}</p>
                        </div>
                      </div>
                    ))}
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
