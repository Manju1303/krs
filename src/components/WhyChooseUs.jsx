import React, { useState } from 'react';
import { 
  Building2, Award, BadgePercent, Heart, ShieldCheck, HelpCircle, ChevronDown, ChevronUp, Star, Quote 
} from 'lucide-react';
import { whyChooseUs, faqs } from '../data/hospitalData';

const iconMap = { Building2, Award, BadgePercent, Heart };

const gradients = [
  'from-emerald-900/50 to-teal-900/30',
  'from-teal-900/50 to-emerald-900/30',
  'from-emerald-800/40 to-teal-800/30',
  'from-teal-800/40 to-emerald-800/30',
];

const testimonials = [
  {
    name: 'S. Periyasamy',
    role: 'Edappadi Resident',
    rating: 5,
    text: 'Dr. K. Ravisuthan and Dr. Sharji Imman treated my mother\'s fracture with extreme care. The emergency team responded immediately in the middle of the night. KRS is truly a blessing for Edappadi.',
  },
  {
    name: 'K. Mohanraj',
    role: 'Diabetes Patient',
    rating: 5,
    text: 'From routine diabetes checkups with Dr. Ravisuthan to orthopedic consultations, the hospital provides top-quality treatment at very affordable fees. Very clean rooms and polite nursing staff.',
  },
  {
    name: 'M. Soundarya',
    role: 'Maternity Patient',
    rating: 5,
    text: 'Dr. Srija gave us wonderful guidance throughout my pregnancy. The delivery was smooth and safe. Special thanks to the newborn pediatric team as well!',
  },
];

export default function WhyChooseUs({ onOpenBooking }) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section id="why-us" className="py-28 relative overflow-hidden" style={{ background: '#060d18' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)' }} />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-24 relative z-10">

        {/* ── Section Header ── */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="section-divider" />
          <span className="section-label-pill">
            <ShieldCheck className="w-3.5 h-3.5" />
            The KRS Difference
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white font-heading mt-3">
            Why Choose <span className="text-gradient-emerald">KRS Hospital?</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            At KRS Multispeciality Hospital, your health is supported by 15+ medical departments, 
            highly qualified specialists, and transparent ethical care since 1996.
          </p>
        </div>

        {/* ── 4 Pillars ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyChooseUs.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Heart;
            return (
              <div key={idx} className="premium-card p-7 group cursor-default">
                {/* Top gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-[20px]"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(52,211,153,0.4), transparent)', opacity: 0 }}
                />
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-[-3deg]"
                  style={{
                    background: 'linear-gradient(135deg, rgba(16,185,129,0.18), rgba(20,184,166,0.10))',
                    border: '1px solid rgba(52,211,153,0.20)',
                  }}
                >
                  <IconComponent className="w-7 h-7 text-emerald-400" />
                </div>
                <h3 className="text-base font-bold text-white font-heading mb-2.5 leading-snug group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                {/* Number badge */}
                <div className="absolute top-5 right-5 text-4xl font-black text-emerald-500/5 font-heading select-none">
                  0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Testimonials ── */}
        <div className="space-y-10">
          <div className="text-center">
            <div className="section-divider" />
            <h3 className="text-2xl font-extrabold text-white font-heading mt-4">
              What Our Patients Say
            </h3>
            <p className="text-sm text-slate-500 mt-2">
              Real experiences from families across Edappadi & Salem District
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="relative p-7 rounded-2xl overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg, rgba(14,24,42,0.90), rgba(6,12,22,0.96))',
                  border: '1px solid rgba(52,211,153,0.10)',
                }}
              >
                {/* Quote decoration */}
                <Quote className="absolute top-5 right-5 w-10 h-10 text-emerald-500/08" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-slate-300 italic leading-relaxed mb-5">
                  "{t.text}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm font-heading flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #10b981, #14b8a6)', color: '#022c22' }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── FAQ Accordion ── */}
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="text-center mb-10">
            <div className="section-divider" />
            <h3 className="text-2xl font-extrabold text-white font-heading mt-4">
              Frequently Asked Questions
            </h3>
          </div>

          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl transition-all duration-300"
                style={{
                  background: isOpen
                    ? 'linear-gradient(145deg, rgba(16,185,129,0.06), rgba(14,24,42,0.96))'
                    : 'linear-gradient(145deg, rgba(14,24,42,0.90), rgba(6,12,22,0.96))',
                  border: `1px solid ${isOpen ? 'rgba(52,211,153,0.25)' : 'rgba(52,211,153,0.08)'}`,
                }}
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left group"
                >
                  <span className={`text-sm font-semibold transition-colors ${isOpen ? 'text-emerald-300' : 'text-white group-hover:text-emerald-300'}`}>
                    {faq.question}
                  </span>
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-all"
                    style={{
                      background: isOpen ? 'rgba(16,185,129,0.20)' : 'rgba(255,255,255,0.05)',
                      border: `1px solid ${isOpen ? 'rgba(52,211,153,0.35)' : 'rgba(255,255,255,0.08)'}`,
                    }}
                  >
                    {isOpen
                      ? <ChevronUp className="w-3.5 h-3.5 text-emerald-400" />
                      : <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                    }
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm text-slate-300 leading-relaxed border-t border-emerald-500/10 pt-3 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
