import React, { useState } from 'react';
import { 
  Building2, Award, BadgePercent, Heart, ShieldCheck, HelpCircle, ChevronDown, ChevronUp, Star, Quote 
} from 'lucide-react';
import { whyChooseUs, faqs } from '../data/hospitalData';

const iconMap = {
  Building2, Award, BadgePercent, Heart
};

export default function WhyChooseUs({ onOpenBooking }) {
  const [openFaq, setOpenFaq] = useState(null);

  const testimonials = [
    {
      name: "S. Periyasamy",
      role: "Edappadi Resident",
      rating: 5,
      text: "Dr. K. Ravisuthan and Dr. Sharji Imman treated my mother's fracture with extreme care. The emergency team responded immediately in the middle of the night. KRS is truly a blessing for Edappadi."
    },
    {
      name: "K. Mohanraj",
      role: "Patient",
      rating: 5,
      text: "From routine diabetes checkups with Dr. Ravisuthan to orthopedic consultations, the hospital provides top-quality treatment at very affordable fees. Very clean rooms and polite nursing staff."
    },
    {
      name: "M. Soundarya",
      role: "Maternity Patient",
      rating: 5,
      text: "Dr. Srija gave us wonderful guidance throughout my pregnancy. The delivery was smooth and safe. Special thanks to the newborn pediatric team as well!"
    }
  ];

  return (
    <section id="why-us" className="py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-emerald-950/80 border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>The KRS Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading">
            Why Choose <span className="text-gradient-emerald">KRS Hospital?</span>
          </h2>
          <p className="text-slate-400 text-base">
            At KRS Multi-Speciality Hospital, your health is supported by a strong network of 15+ medical departments, highly qualified specialists, and transparent ethical care.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Heart;
            return (
              <div 
                key={idx}
                className="glass-card p-6 rounded-3xl border border-emerald-500/20 hover:border-emerald-400/50 transition-all space-y-4 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-900 to-teal-800 text-emerald-300 flex items-center justify-center font-bold shadow-lg group-hover:scale-110 transition-transform">
                  <IconComponent className="w-7 h-7" />
                </div>

                <h3 className="text-lg font-extrabold text-white font-heading group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Patient Testimonials */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-extrabold text-white font-heading">What Our Patients Say</h3>
            <p className="text-xs text-slate-400">Real feedback from families cared for at KRS Hospital Edappadi</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-2xl border border-emerald-500/20 space-y-4 relative">
                <Quote className="w-8 h-8 text-emerald-500/20 absolute top-4 right-4" />
                <div className="flex text-amber-400 space-x-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-300 italic leading-relaxed">
                  "{t.text}"
                </p>
                <div className="pt-2 border-t border-slate-800 text-xs">
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-slate-400 text-[11px]">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-6 pt-10 border-t border-slate-800">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center space-x-1.5 text-xs text-emerald-400 font-bold">
              <HelpCircle className="w-4 h-4" />
              <span>Got Questions?</span>
            </div>
            <h3 className="text-2xl font-extrabold text-white font-heading">Frequently Asked Questions</h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="glass-card rounded-2xl border border-slate-800 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between text-sm font-bold text-white hover:text-emerald-300"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-emerald-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />}
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
