'use client';

import React from 'react';
import { Language } from '@/types/laboratory';
import { Handshake } from 'lucide-react';

interface PartnersSectionProps {
  currentLang: Language;
}

interface PartnerItem {
  id: string;
  title: Record<Language, string>;
  logo: string;
  logoAlt: string;
  isEmblem?: boolean;
}

const PARTNERS: PartnerItem[] = [
  {
    id: 'temur-med-pharm',
    title: {
      uz: 'TEMUR MED PHARM',
      ru: 'TEMUR MED PHARM',
      en: 'TEMUR MED PHARM',
    },
    logo: '/images/partners/temur-med-pharm.svg',
    logoAlt: 'TEMUR MED PHARM Logo',
  },
  {
    id: 'ssv-uz',
    title: {
      uz: 'Sog‘liqni saqlash vazirligi',
      ru: 'Министерство здравоохранения',
      en: 'Ministry of Health',
    },
    logo: '/images/partners/uzbekistan-emblem.webp',
    logoAlt: 'O‘zbekiston Respublikasi Sog‘liqni saqlash vazirligi Gerbi',
    isEmblem: true,
  },
  {
    id: 'edu-ministry',
    title: {
      uz: 'Oliy ta’lim, fan va innovatsiyalar vazirligi',
      ru: 'Министерство высшего образования, науки и инноваций',
      en: 'Ministry of Higher Education, Science and Innovation',
    },
    logo: '/images/partners/edu-ministry.webp',
    logoAlt: 'Oliy ta’lim, fan va innovatsiyalar vazirligi logotipi',
    isEmblem: true,
  },
  {
    id: 'zuma-pharm',
    title: {
      uz: 'ZUMA PHARMA',
      ru: 'ZUMA PHARMA',
      en: 'ZUMA PHARMA',
    },
    logo: '/images/partners/zuma-pharma.webp',
    logoAlt: 'ZUMA PHARMA Logo',
  },
];

export const PartnersSection: React.FC<PartnersSectionProps> = ({ currentLang }) => {
  const headerContent = {
    uz: {
      tag: 'STRATEGIK INTEGRATSIYA VA HAMKORLIK',
      title: 'Hamkorlarimiz',
      subtitle:
        'SLIPC ilmiy laboratoriyasi davlat organlari, nufuzli vazirliklar hamda farmatsevtika sanoati yetakchilari bilan faol ilmiy-amaliy hamkorlikni amalga oshiradi.',
    },
    ru: {
      tag: 'СТРАТЕГИЧЕСКАЯ ИНТЕГРАЦИЯ И СОТРУДНИЧЕСТВО',
      title: 'Наши партнеры',
      subtitle:
        'Научная лаборатория SLIPC ведет тесное научно-практическое сотрудничество с профильными министерствами и ведущими производителями фармацевтической продукции.',
    },
    en: {
      tag: 'STRATEGIC INTEGRATION & PARTNERSHIP',
      title: 'Our Partners',
      subtitle:
        'SLIPC Scientific Laboratory maintains systemic research, regulatory and manufacturing partnerships with state authorities and leading pharmaceutical plants.',
    },
  }[currentLang];

  return (
    <section id="partners-section" className="mt-12 sm:mt-16 pt-8 border-t border-[#E2E8F0]">
      {/* Top Header Row with Section Title */}
      <div className="pb-4 sm:pb-6">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#EBF3FB] border border-[#BFDBFE] text-[#1E3D5F] text-[11px] font-mono font-bold tracking-wider uppercase mb-2.5">
          <Handshake className="w-3.5 h-3.5 text-[#108A54]" />
          <span>{headerContent.tag}</span>
        </div>
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold font-display text-[#0F2942] tracking-tight">
          {headerContent.title}
        </h2>
        <p className="text-xs sm:text-sm text-[#475569] font-body mt-1.5 max-w-3xl leading-relaxed">
          {headerContent.subtitle}
        </p>
      </div>

      {/* 4 Clean Minimalist Partner Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {PARTNERS.map((partner) => (
          <div
            key={partner.id}
            className="group relative flex flex-col items-center justify-center text-center rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-2xs hover:shadow-md hover:border-[#108A54]/50 transition-all duration-300"
          >
            {/* Logo Presentation Frame */}
            <div className="w-full h-32 sm:h-36 rounded-lg bg-[#F8FAFC] border border-[#EDF2F7] p-4 flex items-center justify-center group-hover:bg-[#F1F5F9] transition-colors overflow-hidden">
              <img
                src={partner.logo}
                alt={partner.logoAlt}
                loading="lazy"
                decoding="async"
                className={`max-h-full max-w-full object-contain filter transition-transform duration-300 group-hover:scale-105 ${
                  partner.isEmblem ? 'h-24 sm:h-28 w-auto' : 'h-16 sm:h-20 w-auto'
                }`}
              />
            </div>

            {/* Partner Name Only */}
            <h3 className="mt-4 text-base sm:text-lg font-bold font-display text-[#0F2942] tracking-tight group-hover:text-[#108A54] transition-colors leading-snug">
              {partner.title[currentLang]}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};
