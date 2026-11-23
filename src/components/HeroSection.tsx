'use client';

import React from 'react';
import { Language } from '@/types/laboratory';
import { TRANSLATIONS } from '@/data/translations';
import { CometCard } from '@/components/ui/comet-card';

interface HeroSectionProps {
  currentLang: Language;
  onOpenPassport?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-8 pt-5 sm:pt-6 pb-2">
      {/* EMBL / Broad Style Container: rounded-lg, 1px solid #E2E8F0, subtle dot grid */}
      <div className="relative rounded-lg border border-[#E2E8F0] bg-white academic-dot-grid overflow-hidden shadow-xs">
        {/* Top Accent Strip in Navy (#0F2942) and Bio-Green (#108A54) */}
        <div className="h-1 w-full bg-gradient-to-r from-[#0F2942] via-[#1E3D5F] to-[#108A54]" />

        <div className="p-4 sm:p-8 lg:p-10 relative z-10">
          {/* Main Title, Mission & Brand Logos */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8">
            <div className="max-w-3xl flex-1">
              <h1 className="text-xl sm:text-3xl lg:text-[2.65rem] font-extrabold tracking-tight text-[#0F2942] font-display leading-[1.16]">
                {t.heroHeadline}
              </h1>

              <p className="mt-3 text-xs sm:text-base text-[#475569] leading-relaxed font-body max-w-2xl">
                {t.heroMission}
              </p>
            </div>

            {/* Logos: ToshFarmI and IFBIL/SLIPC side-by-side with interactive 3D CometCard motion */}
            <div className="shrink-0 self-center lg:self-center flex items-center gap-4 sm:gap-6">
              {/* Toshkent Farmatsevtika Instituti Circular Logo - pure circle without square background */}
              <CometCard rotateDepth={15} isCircle={true} className="rounded-full !shadow-none" containerClassName="w-auto">
                <div className="rounded-full overflow-hidden filter drop-shadow-md hover:drop-shadow-xl transition-all duration-300">
                  <img
                    src="/logo-toshfarmi.webp"
                    alt="Toshkent Farmatsevtika Instituti"
                    className="w-24 h-24 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full object-contain"
                  />
                </div>
              </CometCard>

              {/* IFBIL / SLIPC Laboratory Logo */}
              <CometCard rotateDepth={15} containerClassName="w-auto">
                <div className="p-2 sm:p-2.5 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs hover:shadow-lg hover:border-[#108A54]/40 transition-all duration-300">
                  <img
                    src={currentLang === 'uz' ? '/logo-ifbil.webp' : '/logo-slipc.webp'}
                    alt={currentLang === 'uz' ? 'IFBIL Laboratoriyasi' : 'SLIPC Laboratory'}
                    className="w-24 h-24 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-lg object-contain bg-white"
                  />
                </div>
              </CometCard>
            </div>
          </div>

          {/* 3) Official Accreditation Badges: Enlarged 2x */}
          <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex flex-wrap items-center justify-start gap-8 sm:gap-12">
            <div className="transition-transform hover:scale-105">
              <img
                src="/images/badges/iso-17025-certified-badge.webp"
                alt="ISO/IEC 17025 Certified"
                className="h-20 sm:h-24 w-auto object-contain drop-shadow-sm"
              />
            </div>
            <div className="transition-transform hover:scale-105">
              <img
                src="/images/badges/glp-certified-badge.webp"
                alt="Good Laboratory Practice (GLP) Certified"
                className="h-24 sm:h-28 w-auto object-contain drop-shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
