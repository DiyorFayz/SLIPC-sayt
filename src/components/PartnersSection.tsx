'use client';

import React from 'react';
import { Language } from '@/types/laboratory';
import { Building2, ShieldCheck, CheckCircle2, ExternalLink, Handshake } from 'lucide-react';

interface PartnersSectionProps {
  currentLang: Language;
}

interface PartnerItem {
  id: string;
  tag: Record<Language, string>;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  scope: Record<Language, string>;
  badge: Record<Language, string>;
  logo: string;
  logoAlt: string;
  isEmblem?: boolean;
}

const PARTNERS: PartnerItem[] = [
  {
    id: 'temur-med-pharm',
    tag: {
      uz: 'Farmatsevtika korxonasi',
      ru: 'Фармацевтическое предприятие',
      en: 'Pharmaceutical Manufacturer',
    },
    title: {
      uz: 'TEMUR MED PHARM',
      ru: 'TEMUR MED PHARM',
      en: 'TEMUR MED PHARM',
    },
    subtitle: {
      uz: 'Dori vositalari va tibbiy buyumlar ishlab chiqaruvchi',
      ru: 'Производитель лекарственных средств и изделий медназначения',
      en: 'Medicines & Medical Consumables Production',
    },
    scope: {
      uz: 'Farmatsevtik substansiyalar tahlili, barqarorlik (stability) sinovlari, sifat nazorati hamda yangi dori shakllari bo‘yicha ilmiy integratsiya.',
      ru: 'Анализ фармацевтических субстанций, тестирование стабильности, контроль качества и совместная разработка лекарственных форм.',
      en: 'Active substance analytics, stability profiling, quality control, and clinical formulation development.',
    },
    badge: {
      uz: 'Sanoat hamkori',
      ru: 'Индустриальный партнер',
      en: 'Industrial Partner',
    },
    logo: '/images/partners/temur-med-pharm.svg',
    logoAlt: 'TEMUR MED PHARM Logo',
  },
  {
    id: 'ssv-uz',
    tag: {
      uz: 'Davlat organi',
      ru: 'Государственный орган',
      en: 'State Authority',
    },
    title: {
      uz: 'Sog‘liqni saqlash vazirligi',
      ru: 'Министерство здравоохранения',
      en: 'Ministry of Health',
    },
    subtitle: {
      uz: 'O‘zbekiston Respublikasi (Davlat gerbi)',
      ru: 'Республика Узбекистан (Государственный герб)',
      en: 'Republic of Uzbekistan (State Emblem)',
    },
    scope: {
      uz: 'Dori vositalari va tibbiy buyumlarni davlat ro‘yxatidan o‘tkazish, GLP standartlarini joriy etish hamda preklinik ekspertiza nazorati.',
      ru: 'Государственная регистрация лекарственных средств, внедрение стандартов GLP и контроль доклинической экспертизы.',
      en: 'National drug registration, GLP regulatory standards, and official preclinical safety assessment.',
    },
    badge: {
      uz: 'Nazorat va akkreditatsiya',
      ru: 'Контроль и аккредитация',
      en: 'Oversight & Accreditation',
    },
    logo: '/images/partners/uzbekistan-emblem.webp',
    logoAlt: 'O‘zbekiston Respublikasi Sog‘liqni saqlash vazirligi Gerbi',
    isEmblem: true,
  },
  {
    id: 'edu-ministry',
    tag: {
      uz: 'Davlat organi',
      ru: 'Государственный орган',
      en: 'State Authority',
    },
    title: {
      uz: 'Oliy ta’lim, fan va innovatsiyalar vazirligi',
      ru: 'Министерство высшего образования, науки и инноваций',
      en: 'Ministry of Higher Education, Science and Innovation',
    },
    subtitle: {
      uz: 'O‘zbekiston Respublikasi',
      ru: 'Республика Узбекистан',
      en: 'Republic of Uzbekistan',
    },
    scope: {
      uz: 'Fundamental va amaliy grantlar, in silico dori loyihalash laboratoriya majmuasi hamda biotexnologik ilmiy izlanishlar dasturi.',
      ru: 'Фундаментальные и прикладные гранты, лаборатория in silico дизайна лекарств и поддержка биотехнологических проектов.',
      en: 'National research grants, in silico drug design infrastructure, and strategic biotechnology research initiatives.',
    },
    badge: {
      uz: 'Bosh muvofiqlashtiruvchi',
      ru: 'Координирующий орган',
      en: 'Coordinating Ministry',
    },
    logo: '/images/partners/edu-ministry.webp',
    logoAlt: 'Oliy ta’lim, fan va innovatsiyalar vazirligi logotipi',
    isEmblem: true,
  },
  {
    id: 'zuma-pharm',
    tag: {
      uz: 'GMP farmatsevtika zavodi',
      ru: 'Фармацевтический комплекс GMP',
      en: 'GMP Pharmaceutical Complex',
    },
    title: {
      uz: 'ZUMA PHARMA',
      ru: 'ZUMA PHARMA',
      en: 'ZUMA PHARMA',
    },
    subtitle: {
      uz: 'Zamonaviy innovatsion farmatsevtika korxonasi',
      ru: 'Современное инновационное фармпредприятие',
      en: 'Modern Advanced Pharmaceutical Plant',
    },
    scope: {
      uz: 'Steril inyeksion eritmalar, liofilizatsiyalangan dori vositalari, bioekvivalentlik testlari va kontrakt tadqiqot (CRO) sinovlari.',
      ru: 'Стерильные инъекционные формы, лиофилизаты, исследования биоэквивалентности и контрактные испытания (CRO).',
      en: 'Sterile injectable medicines, lyophilized powders, biowaiver/bioequivalence testing, and contract research (CRO).',
    },
    badge: {
      uz: 'Strategik ishlab chiqaruvchi',
      ru: 'Стратегический партнер',
      en: 'Strategic Producer',
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
      scopeLabel: 'Hamkorlik yo‘nalishi:',
    },
    ru: {
      tag: 'СТРАТЕГИЧЕСКАЯ ИНТЕГРАЦИЯ И СОТРУДНИЧЕСТВО',
      title: 'Наши партнеры',
      subtitle:
        'Научная лаборатория SLIPC ведет тесное научно-практическое сотрудничество с профильными министерствами и ведущими производителями фармацевтической продукции.',
      scopeLabel: 'Направление сотрудничества:',
    },
    en: {
      tag: 'STRATEGIC INTEGRATION & PARTNERSHIP',
      title: 'Our Partners',
      subtitle:
        'SLIPC Scientific Laboratory maintains systemic research, regulatory and manufacturing partnerships with state authorities and leading pharmaceutical plants.',
      scopeLabel: 'Scope of Cooperation:',
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

      {/* 4 Partner Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {PARTNERS.map((partner) => (
          <div
            key={partner.id}
            className="group relative flex flex-col justify-between rounded-xl border border-[#E2E8F0] bg-white p-5 sm:p-6 shadow-2xs hover:shadow-md hover:border-[#108A54]/50 transition-all duration-300"
          >
            {/* Top Row: Category tag and Status pill */}
            <div>
              <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-[#F1F5F9]">
                <span className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#108A54] bg-[#E3F1EC] px-2 py-0.5 rounded">
                  {partner.tag[currentLang]}
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-medium text-[#64748B]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#108A54] animate-pulse" />
                  {partner.badge[currentLang]}
                </span>
              </div>

              {/* Logo Presentation Frame */}
              <div className="w-full h-28 sm:h-32 rounded-lg bg-[#F8FAFC] border border-[#EDF2F7] p-3 flex items-center justify-center group-hover:bg-[#F1F5F9] transition-colors overflow-hidden">
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

              {/* Partner Name & Subtitle */}
              <div className="mt-4">
                <h3 className="text-base sm:text-lg font-bold font-display text-[#0F2942] tracking-tight group-hover:text-[#108A54] transition-colors leading-snug">
                  {partner.title[currentLang]}
                </h3>
                <p className="mt-1 text-xs font-semibold text-[#64748B] font-body leading-tight">
                  {partner.subtitle[currentLang]}
                </p>
              </div>

              {/* Research Scope */}
              <div className="mt-3.5 pt-3 border-t border-[#F1F5F9]">
                <span className="text-[11px] font-semibold text-[#1E3D5F] block mb-1">
                  {headerContent.scopeLabel}
                </span>
                <p className="text-xs text-[#475569] font-body leading-relaxed">
                  {partner.scope[currentLang]}
                </p>
              </div>
            </div>

            {/* Bottom Accent line */}
            <div className="mt-4 pt-3 flex items-center justify-between text-[11px] font-medium text-[#64748B]">
              <span className="flex items-center gap-1 text-[#108A54]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Faol memorandumi</span>
              </span>
              <span className="font-mono text-[10px] text-[#94A3B8]">SLIPC &bull; 2026</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
