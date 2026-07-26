import React, { useState } from 'react';
import { Camera, MapPin, Eye, X, ChevronRight, Sparkles } from 'lucide-react';
import { hospitalGallery } from '../data/hospitalData';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeLightboxImage, setActiveLightboxImage] = useState(null);

  const categories = ['All', 'Campus & Building', 'Surgical Suite', 'Critical Care', 'Pharmacy', 'Facilities'];

  const filteredItems = activeCategory === 'All' 
    ? hospitalGallery 
    : hospitalGallery.filter(item => item.category === activeCategory || (activeCategory === 'Facilities' && (item.category === 'Facilities' || item.category === 'Trauma Unit')));

  return (
    <section id="gallery" className="py-24 relative bg-slate-900 border-t border-b border-teal-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 bg-emerald-950/80 border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-300">
            <Camera className="w-4 h-4 text-emerald-400" />
            <span>Virtual Tour & Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading">
            Our <span className="text-gradient-emerald">Hospital Campus & Facilities</span>
          </h2>
          <p className="text-slate-400 text-base">
            Take a virtual tour of our actual hospital infrastructure in Edappadi, featuring modular operation theatres, ICUs, pharmacy, and patient lounges.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                activeCategory === cat 
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white border-emerald-400 shadow-lg shadow-emerald-950/50' 
                  : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-emerald-500/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <div 
              key={idx}
              onClick={() => setActiveLightboxImage(item)}
              className="glass-card rounded-3xl overflow-hidden border border-emerald-500/20 hover:border-emerald-400/50 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                <span className="absolute top-3 left-3 bg-emerald-950/90 text-emerald-300 text-[10px] font-extrabold px-2.5 py-1 rounded-full border border-emerald-500/30">
                  {item.category}
                </span>
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md">
                  <Eye className="w-4 h-4" />
                </div>
              </div>

              <div className="p-4 space-y-1.5">
                <h4 className="text-sm font-extrabold text-white group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeLightboxImage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 modal-backdrop animate-fade-in">
            <div className="glass-card max-w-3xl w-full rounded-3xl border border-emerald-500/40 shadow-2xl relative overflow-hidden space-y-4 p-4 sm:p-6">
              
              <button
                onClick={() => setActiveLightboxImage(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-white hover:bg-slate-800 z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="rounded-2xl overflow-hidden max-h-[60vh] bg-slate-950 flex items-center justify-center">
                <img 
                  src={activeLightboxImage.image} 
                  alt={activeLightboxImage.title}
                  className="max-h-[60vh] w-auto object-contain" 
                />
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-extrabold text-white font-heading">{activeLightboxImage.title}</h3>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded-full border border-emerald-500/30">
                    {activeLightboxImage.category}
                  </span>
                </div>
                <p className="text-xs text-slate-300">{activeLightboxImage.desc}</p>
                <p className="text-[11px] text-slate-500 pt-1 flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Verified Photo • KRS Multispeciality Hospital, Edappadi, Salem District</span>
                </p>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
