'use client';

import React from 'react';
import { Language } from '@/types/laboratory';
import { Award, FileText, CheckCircle2 } from 'lucide-react';
import { CometCard } from '@/components/ui/comet-card';

interface PatentsSectionProps {
  currentLang: Language;
}

interface PatentItem {
  id: string;
  number: string;
  type: Record<Language, string>;
  isUtilityModel?: boolean;
  title: Record<Language, string>;
  target: Record<Language, string>;
  grant: Record<Language, string>;
  date: string;
  image: string;
}

const PATENTS: PatentItem[] = [
  // 1. Left: Ixtiro patenti (№ IAP 7952)
  {
    id: 'patent-iap-7952',
    number: '№ IAP 7952',
    type: {
      uz: 'Ixtiro patenti',
      ru: 'Патент на изобретение',
      en: 'Invention Patent',
    },
    title: {
      uz: 'Imatinib essinatni olish usuli',
      ru: 'Способ получения эссината иматиниба',
      en: 'Method for Obtaining Imatinib Essinate',
    },
    target: {
      uz: 'Onkologik terapiya va yangi farmatsevtik moddalar sintezi texnologiyasi',
      ru: 'Технология таргетной терапии онкозаболеваний и синтеза соединений',
      en: 'Oncological targeted therapy and pharmaceutical compound synthesis',
    },
    grant: {
      uz: 'O‘zbekiston Respublikasi Adliya vazirligi',
      ru: 'Министерство юстиции Республики Узбекистан',
      en: 'Ministry of Justice of the Republic of Uzbekistan',
    },
    date: '2024 / 2025',
    image: '/images/patents/patent-iap-7952.webp',
  },
  // 2. Middle: Foydali model patenti (№ FAP 2647) - user strictly requested in middle
  {
    id: 'patent-fap-2647',
    number: '№ FAP 2647',
    type: {
      uz: 'Foydali model patenti',
      ru: 'Патент на полезную модель',
      en: 'Utility Model Patent',
    },
    isUtilityModel: true,
    title: {
      uz: 'Essinning suvda eruvchan tuzlarini olish usuli',
      ru: 'Способ получения водорастворимых солей эсцина',
      en: 'Method for Obtaining Water-Soluble Salts of Escin',
    },
    target: {
      uz: 'Tabiiy moddalar bioeruvchanligini oshirish va innovatsion dori shakllari',
      ru: 'Повышение растворимости природных соединений и лекарственные формы',
      en: 'Solubility enhancement of natural compounds and novel formulations',
    },
    grant: {
      uz: 'O‘zbekiston Respublikasi Adliya vazirligi',
      ru: 'Министерство юстиции Республики Узбекистан',
      en: 'Ministry of Justice of the Republic of Uzbekistan',
    },
    date: '2024',
    image: '/images/patents/patent-fap-2647.webp',
  },
  // 3. Right: Ixtiro patenti (№ IAP 8557)
  {
    id: 'patent-iap-8557',
    number: '№ IAP 8557',
    type: {
      uz: 'Ixtiro patenti',
      ru: 'Патент на изобретение',
      en: 'Invention Patent',
    },
    title: {
      uz: 'Antioksidant va o‘smaga qarshi koordinatsion birikma',
      ru: 'Координационное соединение с антиоксидантной и противоопухолевой активностью',
      en: 'Antioxidant & Antitumor Manganese(II) Coordination Complex',
    },
    target: {
      uz: 'Diakvabis(dl-α-lipoato-κ²O,O\')marganets(II) koordinatsion birikmasi',
      ru: 'Координационное соединение диаквабис(dl-α-липоато-κ²O,O\')марганца(II)',
      en: 'Diaquabis(dl-α-lipoato-κ²O,O\')manganese(II) coordination complex',
    },
    grant: {
      uz: 'O‘zbekiston Respublikasi Adliya vazirligi',
      ru: 'Министерство юстиции Республики Узбекистан',
      en: 'Ministry of Justice of the Republic of Uzbekistan',
    },
    date: '2025 / 2026',
    image: '/images/patents/patent-iap-8557.webp',
  },
];

export const PatentsSection: React.FC<PatentsSectionProps> = ({ currentLang }) => {
  const headerContent = {
    uz: {
      tag: 'INTELLEKTUAL MULK VA DAVLAT HIMOYASI',
      title: 'Davlat Patentlari',
      subtitle:
        'Laboratoriya ilmiy jamoasi tomonidan yaratilgan va O‘zbekiston Respublikasi Adliya vazirligi tomonidan rasman ro‘yxatga olingan ixtiro va foydali model patentlari.',
      officialRegistrar: 'Adliya vazirligi tomonidan tasdiqlangan',
    },
    ru: {
      tag: 'ИНТЕЛЛЕКТУАЛЬНАЯ СОБСТВЕННОСТЬ И ПАТЕНТЫ',
      title: 'Государственные патенты',
      subtitle:
        'Патенты на изобретения и полезные модели, разработанные научной командой лаборатории и официально зарегистрированные Министерством юстиции Республики Узбекистан.',
      officialRegistrar: 'Зарегистрировано Минюстом',
    },
    en: {
      tag: 'INTELLECTUAL PROPERTY & STATE PROTECTION',
      title: 'Official State Patents',
      subtitle:
        'Official invention and utility model patents developed by the laboratory research faculty and registered by the Ministry of Justice of the Republic of Uzbekistan.',
      officialRegistrar: 'Certified by Ministry of Justice',
    },
  }[currentLang];

  return (
    <section id="patents-section" className="mt-12 sm:mt-16 pt-8 border-t border-[#E2E8F0]">
      {/* Top Header Row with Section Title */}
      <div className="pb-4 sm:pb-6">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E3D5F] text-[11px] font-mono font-bold tracking-wider uppercase mb-2.5">
          <Award className="w-3.5 h-3.5 text-[#108A54]" />
          <span>{headerContent.tag}</span>
        </div>
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold font-display text-[#0F2942] tracking-tight">
          {headerContent.title}
        </h2>
        <p className="text-xs sm:text-sm text-[#475569] font-body mt-1.5 max-w-3xl leading-relaxed">
          {headerContent.subtitle}
        </p>
      </div>

      {/* 3 Patents Side-by-Side: Foydali Model in Middle, 2 Ixtiro Patents on Sides */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-start">
        {PATENTS.map((patent) => (
          <div
            key={patent.id}
            className={`group rounded-2xl border transition-all duration-300 p-4 sm:p-5 flex flex-col justify-between h-full bg-white shadow-2xs hover:shadow-lg ${
              patent.isUtilityModel
                ? 'border-[#108A54]/30 ring-1 ring-[#108A54]/15 hover:border-[#108A54]'
                : 'border-[#E2E8F0] hover:border-[#38D399]/60'
            }`}
          >
            {/* 3D Motion Card Frame with CometCard Tilt Effect (identical to certificates) */}
            <div className="w-full">
              <CometCard rotateDepth={15}>
                <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all">
                  <img
                    src={patent.image}
                    alt={`${patent.type[currentLang]} - ${patent.number}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-cover block select-none"
                  />
                </div>
              </CometCard>
            </div>

            {/* Patent Information & Badges */}
            <div className="mt-4 sm:mt-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span
                    className={`font-mono text-[11px] font-bold px-2.5 py-0.5 rounded-md border uppercase tracking-wider ${
                      patent.isUtilityModel
                        ? 'bg-[#E3F1EC] text-[#108A54] border-[#108A54]/30'
                        : 'bg-[#EEF2FF] text-[#344A94] border-[#C7D2FE]'
                    }`}
                  >
                    {patent.type[currentLang]}
                  </span>
                  <span className="font-mono text-xs font-bold text-[#0F2942]">
                    {patent.number}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold font-display text-[#0F2942] tracking-tight group-hover:text-[#108A54] transition-colors leading-snug">
                  {patent.title[currentLang]}
                </h3>

                <p className="mt-1.5 text-xs text-[#64748B] font-body leading-relaxed line-clamp-2">
                  {patent.target[currentLang]}
                </p>
              </div>

              {/* Footer Stamp & Registrar */}
              <div className="mt-4 pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-[11px] text-[#475569]">
                <span className="flex items-center gap-1 font-medium truncate">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#108A54] shrink-0" />
                  <span className="truncate">{patent.grant[currentLang]}</span>
                </span>
                <span className="font-mono text-[10px] text-slate-400 shrink-0 ml-2">
                  {patent.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
