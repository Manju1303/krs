import React, { useState } from 'react';
import { Building2, Award, BadgePercent, Heart, ShieldCheck, HelpCircle, ChevronDown, ChevronUp, Star, Quote } from 'lucide-react';
import { whyChooseUs, faqs } from '../data/hospitalData';

const iconMap = { Building2, Award, BadgePercent, Heart };

const testimonials = [
  { name: 'S. Periyasamy', role: 'Edappadi Resident', rating: 5, text: 'Dr. K. Ravisuthan and Dr. Sharji Imman treated my mother\'s fracture with extreme care. The emergency team responded immediately in the middle of the night. KRS is truly a blessing for Edappadi.' },
  { name: 'K. Mohanraj', role: 'Diabetes Patient', rating: 5, text: 'From routine diabetes checkups to orthopedic consultations, the hospital provides top-quality treatment at very affordable fees. Very clean rooms and polite nursing staff.' },
  { name: 'M. Soundarya', role: 'Maternity Patient', rating: 5, text: 'Dr. Srija gave us wonderful guidance throughout my pregnancy. The delivery was smooth and safe. Special thanks to the newborn pediatric team as well!' },
];

export default function WhyChooseUs({ onOpenBooking }) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section id="why-us" className="py-28 relative overflow-hidden" style={{ background: '#ffffff' }}>
      <div className="absolute inset-0 bg-dot-pattern opacity-60 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-24 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="section-divider" />
          <div className="flex flex-wrap justify-center items-center gap-2">
            <span className="section-label-pill"><ShieldCheck className="w-3.5 h-3.5" />The KRS Difference</span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 font-tamil">
              அன்பான கவனிப்பு • துல்லியமான மருத்துவம்
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-heading mt-3" style={{ color: '#0f172a' }}>
            Why Choose <span className="text-gradient-emerald">KRS Hospital?</span>
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>
            15+ medical departments, highly qualified specialists, and transparent ethical care since 1996.
          </p>
        </div>

        {/* 4 Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyChooseUs.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Heart;
            return (
              <div key={idx} className="premium-card p-7 group cursor-default">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{ background: '#d1fae5', border: '1px solid #a7f3d0' }}>
                  <IconComponent className="w-7 h-7" style={{ color: '#059669' }} />
                </div>
                <h3 className="text-base font-bold font-heading mb-2.5 leading-snug" style={{ color: '#0f172a' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>{item.desc}</p>
                <div className="absolute top-5 right-5 text-5xl font-black font-heading select-none" style={{ color: 'rgba(5,150,105,0.05)' }}>0{idx + 1}</div>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="space-y-10">
          <div className="text-center">
            <div className="section-divider" />
            <h3 className="text-2xl font-extrabold font-heading mt-4" style={{ color: '#0f172a' }}>What Our Patients Say</h3>
            <p className="text-sm mt-2" style={{ color: '#64748b' }}>Real experiences from families across Edappadi & Salem District</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, idx) => (
              <div key={idx} className="relative p-7 rounded-2xl" style={{ background: '#f8fafc', border: '1px solid rgba(15,23,42,0.07)', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                <Quote className="absolute top-5 right-5 w-9 h-9" style={{ color: 'rgba(5,150,105,0.10)' }} />
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-sm italic leading-relaxed mb-5" style={{ color: '#475569' }}>"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid rgba(15,23,42,0.07)' }}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm font-heading shrink-0 text-white"
                    style={{ background: 'linear-gradient(135deg, #059669, #0d9488)' }}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-bold" style={{ color: '#0f172a' }}>{t.name}</div>
                    <div className="text-xs" style={{ color: '#94a3b8' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="text-center mb-10">
            <div className="section-divider" />
            <h3 className="text-2xl font-extrabold font-heading mt-4" style={{ color: '#0f172a' }}>Frequently Asked Questions</h3>
          </div>
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="overflow-hidden rounded-2xl transition-all duration-300"
                style={{ background: isOpen ? '#f0fdf4' : '#f8fafc', border: `1px solid ${isOpen ? '#a7f3d0' : 'rgba(15,23,42,0.08)'}` }}>
                <button onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left">
                  <span className="text-sm font-semibold" style={{ color: isOpen ? '#047857' : '#0f172a' }}>{faq.question}</span>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-all"
                    style={{ background: isOpen ? '#d1fae5' : '#f1f5f9', border: `1px solid ${isOpen ? '#a7f3d0' : 'rgba(15,23,42,0.08)'}` }}>
                    {isOpen ? <ChevronUp className="w-3.5 h-3.5" style={{ color: '#059669' }} /> : <ChevronDown className="w-3.5 h-3.5" style={{ color: '#64748b' }} />}
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm leading-relaxed animate-fade-in" style={{ color: '#475569', borderTop: '1px solid #d1fae5', paddingTop: '12px' }}>
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
