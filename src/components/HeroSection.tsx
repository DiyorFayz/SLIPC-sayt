'use client';

import React from 'react';
import { Language } from '@/types/laboratory';
import { TRANSLATIONS } from '@/data/translations';
import { ArrowDown, FileCheck2, ChevronRight } from 'lucide-react';
import { CometCard } from '@/components/ui/comet-card';

interface HeroSectionProps {
  currentLang: Language;
  onOpenPassport?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ currentLang, onOpenPassport }) => {
  const t = TRANSLATIONS[currentLang];

  const handleScrollToDepartments = () => {
    const el = document.getElementById('departments-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const ctaExploreText = {
    uz: "Ilmiy Bo'limlar & Xonalar",
    ru: "Научные отделы и комнаты",
    en: "Scientific Units & Labs"
  }[currentLang];

  const ctaPassportText = {
    uz: "Laboratoriya Pasporti (ISO/GLP)",
    ru: "Паспорт лаборатории (ISO/GLP)",
    en: "Laboratory Passport (ISO/GLP)"
  }[currentLang];

  return (
    <section className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-8 pt-5 sm:pt-6 pb-2">
      {/* EMBL / Broad Style Container: rounded-lg, 1px solid #E2E8F0, subtle dot grid */}
      <div className="relative rounded-lg border border-[#E2E8F0] bg-white academic-dot-grid overflow-hidden shadow-xs">
        {/* Top Accent Strip in Navy (#0F2942) and Bio-Green (#108A54) */}
        <div className="h-1 w-full bg-gradient-to-r from-[#0F2942] via-[#1E3D5F] to-[#108A54]" />

        <div className="p-4 sm:p-8 lg:p-10 relative z-10">
          {/* Institutional Academic Badge */}
          <div className="flex items-center pb-4 mb-5 sm:mb-6 border-b border-[#E2E8F0]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#108A54]/10 border border-[#108A54]/30 text-[#108A54] text-xs font-bold tracking-wide font-body">
              <span className="w-1.5 h-1.5 rounded-full bg-[#108A54] shrink-0" />
              <span>Toshkent Farmatsevtika Instituti</span>
            </div>
          </div>

          {/* Main Title, Mission, CTA Buttons & Brand Logo */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8">
            <div className="max-w-3xl flex-1">
              <h1 className="text-xl sm:text-3xl lg:text-[2.65rem] font-extrabold tracking-tight text-[#0F2942] font-display leading-[1.16]">
                {t.heroHeadline}
              </h1>

              <p className="mt-3 text-xs sm:text-base text-[#475569] leading-relaxed font-body max-w-2xl">
                {t.heroMission}
              </p>

              {/* 3) CTA Buttons */}
              <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={handleScrollToDepartments}
                  className="px-5 py-2.5 min-h-[44px] rounded-lg bg-[#0F2942] hover:bg-[#081726] active:scale-95 text-white text-xs sm:text-sm font-semibold inline-flex items-center gap-2 transition-all shadow-xs cursor-pointer touch-manipulation"
                >
                  <span>{ctaExploreText}</span>
                  <ArrowDown className="w-4 h-4 text-[#108A54]" />
                </button>

                {onOpenPassport && (
                  <button
                    type="button"
                    onClick={onOpenPassport}
                    className="px-4 py-2.5 min-h-[44px] rounded-lg bg-white hover:bg-[#F8FAFC] active:scale-95 text-[#0F2942] border border-[#E2E8F0] hover:border-[#CBD5E1] text-xs sm:text-sm font-semibold inline-flex items-center gap-2 transition-all cursor-pointer shadow-2xs touch-manipulation"
                  >
                    <FileCheck2 className="w-4 h-4 text-[#108A54]" />
                    <span>{ctaPassportText}</span>
                  </button>
                )}
              </div>
            </div>

            {/* Logo: Clean rounded-xl with interactive 3D CometCard motion */}
            <div className="shrink-0 self-center lg:self-center">
              <CometCard rotateDepth={15}>
                <div className="p-2 sm:p-2.5 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs hover:shadow-lg hover:border-[#108A54]/40 transition-all duration-300">
                  <img
                    src={currentLang === 'uz' ? '/logo-ifbil.webp' : '/logo-slipc.webp'}
                    alt={currentLang === 'uz' ? 'IFBIL Laboratoriyasi' : 'SLIPC Laboratory'}
                    className="w-28 h-28 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-lg object-contain bg-white"
                  />
                </div>
              </CometCard>
            </div>
          </div>

          {/* 3) Official Accreditation Badges: Removed from white card boxes, directly placed on grid */}
          <div className="mt-8 pt-5 border-t border-[#E2E8F0] flex flex-wrap items-center justify-start gap-6 sm:gap-8">
            <div className="transition-transform hover:scale-105">
              <img
                src="/images/badges/iso-17025-certified-badge.webp"
                alt="ISO/IEC 17025 Certified"
                className="h-10 sm:h-12 w-auto object-contain drop-shadow-2xs"
              />
            </div>
            <div className="transition-transform hover:scale-105">
              <img
                src="/images/badges/glp-certified-badge.webp"
                alt="Good Laboratory Practice (GLP) Certified"
                className="h-12 sm:h-14 w-auto object-contain drop-shadow-2xs"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
