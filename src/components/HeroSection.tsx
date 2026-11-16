'use client';

import React from 'react';
import { Language } from '@/types/laboratory';
import { TRANSLATIONS } from '@/data/translations';
import { ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  currentLang: Language;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-8 pt-6 sm:pt-8 pb-2">
      <div className="glass-panel rounded-2xl overflow-hidden">
        {/* Top Pharmaceutical Brand Accent Bar */}
        <div className="h-1 w-full bg-gradient-to-r from-[#24356F] via-[#344A94] to-[#12715A]" />

        <div className="p-6 sm:p-8 lg:p-10">
          {/* Minimalist Institutional Tag */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-5 mb-6 border-b border-[#DDE2EF]/80">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6EAF5]/80 text-[#24356F] text-xs font-semibold tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[#12715A]" />
              <span>Toshkent Farmatsevtika Instituti</span>
            </div>
            <span className="text-[11px] font-mono text-[#5C6478] bg-[#F3F5FB] px-2.5 py-1 rounded-full border border-[#DDE2EF]">
              41.3111° N, 69.2797° E
            </span>
          </div>

          {/* Main Title, Mission & Brand Logo */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <h1 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-extrabold tracking-tight text-[#1B1F2A] font-display leading-[1.15]">
                {t.heroHeadline}
              </h1>

              <p className="mt-3.5 text-sm sm:text-base text-[#5C6478] leading-relaxed font-body max-w-2xl">
                {t.heroMission}
              </p>
            </div>

            <div className="shrink-0 self-start sm:self-center">
              <div className="p-1.5 rounded-2xl bg-white/90 border border-[#DDE2EF] shadow-pharmi-card">
                <img
                  src="/logo.jpg"
                  alt="SLIPC Laboratoriyasi"
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl object-contain bg-[#0A1128]"
                />
              </div>
            </div>
          </div>

          {/* Official Accreditation Badges Row (Replaces previous 4 metrics cards) */}
          <div className="mt-6 pt-5 border-t border-[#DDE2EF]/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 text-xs text-[#5C6478] font-body">
              <div className="p-1 rounded-md bg-[#E3F1EC] text-[#12715A]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="font-semibold text-[#1B1F2A]">
                {currentLang === 'uz'
                  ? "Davlat Akkreditatsiyasi va Xalqaro Standartlar:"
                  : currentLang === 'ru'
                  ? "Государственная аккредитация и стандарты качества:"
                  : "National Accreditation & International Quality Standards:"}
              </span>
              <span className="hidden md:inline text-[#5C6478]">
                ISO/IEC 17025 • GLP (GxP)
              </span>
            </div>

            {/* Badges placed on the right */}
            <div className="flex items-center gap-3 sm:gap-4 sm:ml-auto">
              <div className="h-12 sm:h-13 px-3 py-1.5 bg-white rounded-xl border border-[#DDE2EF] shadow-2xs flex items-center justify-center hover:border-[#24356F]/30 hover:shadow-xs transition-all">
                <img
                  src="/images/badges/iso-17025-certified-badge.png"
                  alt="ISO/IEC 17025 Certified"
                  className="h-8 sm:h-8.5 w-auto object-contain"
                />
              </div>
              <div className="h-12 sm:h-13 px-3 py-1.5 bg-white rounded-xl border border-[#DDE2EF] shadow-2xs flex items-center justify-center hover:border-[#24356F]/30 hover:shadow-xs transition-all">
                <img
                  src="/images/badges/glp-certified-badge.png"
                  alt="Good Laboratory Practice (GLP) Certified"
                  className="h-8.5 sm:h-9 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
