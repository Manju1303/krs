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
    <section id="departments" className="py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-950/80 border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-300">
            <Stethoscope className="w-4 h-4 text-emerald-400" />
            <span>Specialized Clinical Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading">
            Our <span className="text-gradient-emerald">Medical Departments</span>
          </h2>
          <p className="text-slate-400 text-base">
            Over 15+ dedicated departments equipped with modern diagnostic systems, advanced surgical tools, and highly experienced medical specialists in Edappadi.
          </p>
        </div>

        {/* Department Explorer Grid / Tabs */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Department List Buttons */}
          <div className="lg:col-span-4 space-y-2 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
            {departments.map((dept) => {
              const IconComponent = iconMap[dept.icon] || Stethoscope;
              const isActive = dept.id === activeTab;
              return (
                <button
                  key={dept.id}
                  onClick={() => {
                    setActiveTab(dept.id);
                    if (onSelectDepartment) onSelectDepartment(dept.id);
                  }}
                  className={`w-full text-left p-4 rounded-2xl transition-all flex items-center justify-between group ${
                    isActive 
                      ? 'bg-gradient-to-r from-emerald-900/90 to-teal-950 border border-emerald-500/50 shadow-lg shadow-emerald-950/50' 
                      : 'bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800/80'
                  }`}
                >
                  <div className="flex items-center space-x-3.5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      isActive ? 'bg-emerald-500 text-slate-950 font-bold' : 'bg-slate-800 text-emerald-400 group-hover:bg-slate-700'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className={`text-sm font-bold transition-colors ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                        {dept.name}
                      </h4>
                      <p className="text-[11px] text-slate-400 line-clamp-1">{dept.desc}</p>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-emerald-400 translate-x-1' : 'text-slate-600 group-hover:text-slate-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Department Detail Box */}
          <div className="lg:col-span-8">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-emerald-500/30 shadow-2xl relative overflow-hidden space-y-6">
              
              {/* Department Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-slate-950 flex items-center justify-center shadow-lg">
                    {React.createElement(iconMap[activeDept.icon] || Stethoscope, { className: "w-7 h-7" })}
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-white font-heading">{activeDept.name}</h3>
                    <p className="text-sm text-emerald-400 font-medium">Department of Clinical Excellence • KRS Edappadi</p>
                  </div>
                </div>

                <button
                  onClick={() => onOpenBooking(activeDept.id)}
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs px-4 py-2.5 rounded-xl shadow-lg flex items-center space-x-2 transition-transform hover:scale-105"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation</span>
                </button>
              </div>

              {/* Department Overview */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-extrabold text-slate-400 mb-2">Overview & Scope</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{activeDept.desc}</p>
              </div>

              {/* Key Services & Procedures Grid */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-extrabold text-slate-400 mb-3">Key Services & Specialized Procedures</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {activeDept.services.map((service, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specialist Doctors in this Department */}
              {deptDoctors.length > 0 && (
                <div className="pt-4 border-t border-slate-800">
                  <h4 className="text-xs uppercase tracking-wider font-extrabold text-slate-400 mb-3">Specialist Doctors in {activeDept.name}</h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {deptDoctors.map((doc) => (
                      <div key={doc.id} className="p-4 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 border border-emerald-500/20 flex items-center space-x-3.5">
                        <div className="w-12 h-12 rounded-xl bg-emerald-950 text-emerald-400 flex items-center justify-center font-bold text-sm border border-emerald-500/30 shrink-0">
                          <User className="w-6 h-6" />
                        </div>
                        <div>
                          <h5 className="text-sm font-bold text-white">{doc.name}</h5>
                          <p className="text-xs text-emerald-400 font-medium">{doc.degrees}</p>
                          <p className="text-[11px] text-slate-400">{doc.specialty}</p>
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
