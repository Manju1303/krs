import React, { useState } from 'react';
import { Camera, Eye, X } from 'lucide-react';
import { hospitalGallery } from '../data/hospitalData';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeLightboxImage, setActiveLightboxImage] = useState(null);

  const categories = ['All', 'Campus & Building', 'Surgical Suite', 'Critical Care', 'Pharmacy', 'Facilities'];

  const filteredItems = activeCategory === 'All'
    ? hospitalGallery
    : hospitalGallery.filter(item => item.category === activeCategory || (activeCategory === 'Facilities' && (item.category === 'Facilities' || item.category === 'Trauma Unit')));

  return (
    <section id="gallery" className="py-24 relative overflow-hidden" style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="section-divider" />
          <span className="section-label-pill">
            <Camera className="w-3.5 h-3.5" />
            Virtual Campus Tour
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-heading mt-3" style={{ color: '#0f172a' }}>
            Hospital <span className="text-gradient-emerald">Campus &amp; Facilities</span>
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>
            A virtual tour of our actual hospital infrastructure in Edappadi — OTs, ICUs, pharmacy, and patient lounges.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const active = activeCategory === cat;
            return (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-xl text-xs font-semibold transition-all"
                style={{
                  background: active ? 'linear-gradient(135deg, #059669, #0d9488)' : '#ffffff',
                  color: active ? '#fff' : '#475569',
                  border: active ? '1px solid transparent' : '1px solid rgba(15,23,42,0.10)',
                  boxShadow: active ? '0 2px 10px rgba(5,150,105,0.25)' : '0 1px 3px rgba(0,0,0,0.05)',
                }}>
                {cat}
              </button>
            );
          })}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, idx) => (
            <div key={idx}
              className="relative overflow-hidden rounded-2xl cursor-pointer group"
              style={{ aspectRatio: '4/3', border: '1px solid rgba(15,23,42,0.07)', boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}
              onClick={() => setActiveLightboxImage(item)}>
              <img src={item.image} alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.70) 0%, transparent 60%)' }}>
                <h4 className="text-xs font-bold text-white leading-snug">{item.title}</h4>
                <p className="text-[10px] text-white/70 mt-0.5">{item.category}</p>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: 'rgba(255,255,255,0.90)' }}>
                <Eye className="w-4 h-4" style={{ color: '#059669' }} />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {activeLightboxImage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 modal-backdrop animate-fade-in"
            onClick={() => setActiveLightboxImage(null)}>
            <div className="relative max-w-3xl w-full rounded-2xl overflow-hidden"
              style={{ boxShadow: '0 32px 64px rgba(0,0,0,0.40)' }}
              onClick={e => e.stopPropagation()}>
              <img src={activeLightboxImage.image} alt={activeLightboxImage.title} className="w-full object-contain" />
              <div className="absolute bottom-0 left-0 right-0 p-5"
                style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.85), transparent)' }}>
                <h3 className="text-sm font-bold text-white">{activeLightboxImage.title}</h3>
                <p className="text-[11px] text-white/60 mt-0.5">{activeLightboxImage.category} · KRS Hospital, Edappadi</p>
              </div>
              <button className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.92)', color: '#0f172a' }}
                onClick={() => setActiveLightboxImage(null)}>
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
