import React, { useState } from 'react';
import { ShieldCheck, Activity, HeartPulse, Sparkles, HeartHandshake, ShieldAlert, CheckCircle2, Calendar, X } from 'lucide-react';
import { healthPackages } from '../data/hospitalData';

const iconMap = {
  Activity, HeartPulse, Sparkles, HeartHandshake, ShieldAlert
};

export default function HealthPackages({ onBookPackage }) {
  const [selectedPkgModal, setSelectedPkgModal] = useState(null);

  return (
    <section id="packages" className="py-24 relative bg-slate-50 border-t border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="section-divider" />
          <span className="section-label-pill">
            <ShieldCheck className="w-3.5 h-3.5" />
            Preventive Wellness Checkups
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-heading mt-3">
            Preventive <span className="text-gradient-emerald">Health Packages</span>
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Comprehensive diagnostic screening packages designed for early detection, organ wellness, diabetic tracking, and family health protection in Edappadi.
          </p>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {healthPackages.map((pkg) => {
            const IconComponent = iconMap[pkg.icon] || Activity;
            return (
              <div 
                key={pkg.id}
                className="premium-card rounded-3xl p-6 group flex flex-col justify-between space-y-6 relative overflow-hidden"
              >
                {/* Popular Ribbon */}
                {pkg.popular && (
                  <div className="absolute top-4 right-4 bg-amber-100 border border-amber-300 text-amber-800 font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                    Most Popular
                  </div>
                )}

                <div className="space-y-4">
                  {/* Icon & Category */}
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200 text-teal-600 flex items-center justify-center font-bold shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-600">
                        {pkg.category}
                      </span>
                      <h3 className="text-base font-extrabold text-slate-900 font-heading group-hover:text-emerald-700 transition-colors">
                        {pkg.name}
                      </h3>
                    </div>
                  </div>

                  {/* Price Tag */}
                  <div className="flex items-baseline space-x-2 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                    <span className="text-2xl font-extrabold text-teal-600 font-heading">{pkg.price}</span>
                    <span className="text-xs text-slate-400 line-through">{pkg.originalPrice}</span>
                    <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 ml-auto">
                      {pkg.discount}
                    </span>
                  </div>

                  {/* Desc */}
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pkg.desc}
                  </p>

                  {/* Highlights Inclusion Preview */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">Inclusions Preview:</div>
                    {pkg.inclusions.slice(0, 4).map((inc, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-[11px] text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span className="truncate">{inc}</span>
                      </div>
                    ))}
                    {pkg.inclusions.length > 4 && (
                      <div className="text-[11px] text-emerald-600 font-semibold pt-1">
                        + {pkg.inclusions.length - 4} More Key Tests Included
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedPkgModal(pkg)}
                    className="flex-1 py-2.5 px-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors text-center"
                  >
                    View Tests ({pkg.inclusions.length})
                  </button>

                  <button
                    onClick={() => onBookPackage(pkg.name)}
                    className="flex-1 py-2.5 px-3 btn-premium text-white text-xs font-bold rounded-xl flex items-center justify-center space-x-1"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Package</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Detailed Package Modal */}
        {selectedPkgModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 modal-backdrop animate-fade-in">
            <div className="max-w-xl w-full p-6 sm:p-8 rounded-3xl relative space-y-6 max-h-[90vh] overflow-y-auto"
              style={{ background: '#ffffff', border: '1px solid rgba(15,23,42,0.10)', boxShadow: '0 24px 64px rgba(0,0,0,0.18)' }}>
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-600">{selectedPkgModal.category}</span>
                  <h3 className="text-xl font-extrabold text-slate-900 font-heading">{selectedPkgModal.name}</h3>
                </div>
                <button 
                  onClick={() => setSelectedPkgModal(null)}
                  className="p-1.5 rounded-lg transition-colors" style={{ background: '#f1f5f9', color: '#64748b' }}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-between bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <div>
                  <div className="text-2xl font-extrabold text-teal-600 font-heading">{selectedPkgModal.price}</div>
                  <div className="text-xs text-slate-500">Special Offer Price (Original: <span className="line-through">{selectedPkgModal.originalPrice}</span>)</div>
                </div>
                <span className="bg-amber-50 text-amber-700 text-xs px-3 py-1 rounded-full font-bold border border-amber-200">
                  {selectedPkgModal.discount}
                </span>
              </div>

              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3">Complete Test & Consultation Breakdown ({selectedPkgModal.inclusions.length} Tests)</h4>
                <div className="space-y-2">
                  {selectedPkgModal.inclusions.map((inc, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end space-x-3">
                <button
                  onClick={() => setSelectedPkgModal(null)}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const pkgName = selectedPkgModal.name;
                    setSelectedPkgModal(null);
                    onBookPackage(pkgName);
                  }}
                  className="px-6 py-2.5 btn-premium text-white text-xs font-bold rounded-xl flex items-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book {selectedPkgModal.name}</span>
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
