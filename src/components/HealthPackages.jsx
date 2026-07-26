import React, { useState } from 'react';
import { ShieldCheck, Activity, HeartPulse, Sparkles, HeartHandshake, ShieldAlert, CheckCircle2, ChevronRight, Calendar, ArrowRight, Tag } from 'lucide-react';
import { healthPackages } from '../data/hospitalData';

const iconMap = {
  Activity, HeartPulse, Sparkles, HeartHandshake, ShieldAlert
};

export default function HealthPackages({ onBookPackage }) {
  const [selectedPkgModal, setSelectedPkgModal] = useState(null);

  return (
    <section id="packages" className="py-24 relative bg-slate-900 border-t border-b border-teal-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-950/80 border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Kauvery-Style Preventive Care</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading">
            Preventive <span className="text-gradient-emerald">Health Packages</span>
          </h2>
          <p className="text-slate-400 text-base">
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
                className="glass-card rounded-3xl p-6 border border-emerald-500/20 hover:border-emerald-400/50 transition-all flex flex-col justify-between group space-y-6 relative overflow-hidden"
              >
                {/* Popular Ribbon */}
                {pkg.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow border border-amber-300/40">
                    Most Popular
                  </div>
                )}

                <div className="space-y-4">
                  {/* Icon & Category */}
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-900 to-teal-800 text-emerald-300 flex items-center justify-center font-bold shadow-lg">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400">
                        {pkg.category}
                      </span>
                      <h3 className="text-lg font-extrabold text-white font-heading group-hover:text-emerald-300 transition-colors">
                        {pkg.name}
                      </h3>
                    </div>
                  </div>

                  {/* Price Tag */}
                  <div className="flex items-baseline space-x-2 bg-slate-950/80 p-3 rounded-2xl border border-slate-800">
                    <span className="text-2xl font-extrabold text-emerald-400 font-heading">{pkg.price}</span>
                    <span className="text-xs text-slate-500 line-through">{pkg.originalPrice}</span>
                    <span className="text-[10px] font-bold text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/30 ml-auto">
                      {pkg.discount}
                    </span>
                  </div>

                  {/* Desc */}
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {pkg.desc}
                  </p>

                  {/* Highlights Inclusion Preview */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-800">
                    <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">Inclusions Preview:</div>
                    {pkg.inclusions.slice(0, 4).map((inc, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-[11px] text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                        <span className="truncate">{inc}</span>
                      </div>
                    ))}
                    {pkg.inclusions.length > 4 && (
                      <div className="text-[11px] text-emerald-400 font-semibold pt-1">
                        + {pkg.inclusions.length - 4} More Key Tests Included
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedPkgModal(pkg)}
                    className="flex-1 py-2.5 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl transition-colors text-center"
                  >
                    View Tests ({pkg.inclusions.length})
                  </button>

                  <button
                    onClick={() => onBookPackage(pkg.name)}
                    className="flex-1 py-2.5 px-3 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white text-xs font-bold rounded-xl shadow-md transition-transform hover:scale-105 flex items-center justify-center space-x-1"
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
            <div className="glass-card max-w-xl w-full p-6 sm:p-8 rounded-3xl border border-emerald-500/40 shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400">{selectedPkgModal.category}</span>
                  <h3 className="text-xl font-extrabold text-white font-heading">{selectedPkgModal.name}</h3>
                </div>
                <button 
                  onClick={() => setSelectedPkgModal(null)}
                  className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <div className="flex items-center justify-between bg-slate-950 p-4 rounded-2xl border border-slate-800">
                <div>
                  <div className="text-2xl font-extrabold text-emerald-400 font-heading">{selectedPkgModal.price}</div>
                  <div className="text-xs text-slate-400">Special Offer Price (Original: <span className="line-through">{selectedPkgModal.originalPrice}</span>)</div>
                </div>
                <span className="bg-amber-500/20 text-amber-300 text-xs px-3 py-1 rounded-full font-bold border border-amber-500/30">
                  {selectedPkgModal.discount}
                </span>
              </div>

              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3">Complete Test & Consultation Breakdown ({selectedPkgModal.inclusions.length} Tests)</h4>
                <div className="space-y-2">
                  {selectedPkgModal.inclusions.map((inc, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex justify-end space-x-3">
                <button
                  onClick={() => setSelectedPkgModal(null)}
                  className="px-4 py-2.5 bg-slate-800 text-slate-300 text-xs font-bold rounded-xl"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const pkgName = selectedPkgModal.name;
                    setSelectedPkgModal(null);
                    onBookPackage(pkgName);
                  }}
                  className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg flex items-center space-x-2"
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
