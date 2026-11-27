'use client';

import React from 'react';
import { Language } from '@/types/laboratory';
import { BookOpen, Sparkles, ArrowRight, Award } from 'lucide-react';

interface ArticlesSectionProps {
  currentLang: Language;
  onOpenProjects: () => void;
}

interface TopJournalItem {
  id: number;
  name: string;
  publisher: string;
  coverImage: string;
  badge: string;
  quartile?: string;
  impactFactor?: string;
}

const TOP_SCOPUS_WOS_JOURNALS: TopJournalItem[] = [
  {
    id: 3,
    name: 'Nano-Micro Letters',
    publisher: 'Springer Nature • SJTU',
    coverImage: '/images/journals/journal-3.webp',
    badge: 'Scopus / Web of Science',
    quartile: 'Q1',
    impactFactor: '36.3',
  },
  {
    id: 7,
    name: 'Chemical Engineering Journal',
    publisher: 'Elsevier • ScienceDirect',
    coverImage: '/images/journals/journal-7.webp',
    badge: 'Scopus / Web of Science',
    quartile: 'Q1',
    impactFactor: '13.3',
  },
  {
    id: 15,
    name: 'Nano Research',
    publisher: 'Springer / Tsinghua University Press',
    coverImage: '/images/journals/journal-15.webp',
    badge: 'Scopus / Web of Science',
    quartile: 'Q1',
    impactFactor: '9.5',
  },
  {
    id: 22,
    name: 'Journal of Agricultural and Food Chemistry',
    publisher: 'American Chemical Society (ACS)',
    coverImage: '/images/journals/journal-22.webp',
    badge: 'Scopus / Web of Science',
    quartile: 'Q1',
    impactFactor: '5.7',
  },
  {
    id: 9,
    name: 'Phytochemistry Reviews',
    publisher: 'Springer Nature Switzerland',
    coverImage: '/images/journals/journal-9.webp',
    badge: 'Scopus / Web of Science',
    quartile: 'Q1',
    impactFactor: '5.3',
  },
  {
    id: 21,
    name: 'Biomolecules',
    publisher: 'MDPI Open Access',
    coverImage: '/images/journals/journal-21.webp',
    badge: 'Scopus / Web of Science',
    quartile: 'Q1',
    impactFactor: '4.8',
  },
  {
    id: 20,
    name: 'Chemical Engineering Science',
    publisher: 'Elsevier Research',
    coverImage: '/images/journals/journal-20.webp',
    badge: 'Scopus / Web of Science',
    quartile: 'Q1',
    impactFactor: '4.1',
  },
  {
    id: 1,
    name: 'Anti-Cancer Agents in Medicinal Chemistry',
    publisher: 'Bentham Science Publishers',
    coverImage: '/images/journals/journal-1.webp',
    badge: 'Scopus / Web of Science',
    quartile: 'Q2',
    impactFactor: '2.8',
  },
  {
    id: 19,
    name: 'Journal of Structural Biology',
    publisher: 'Elsevier Academic Press',
    coverImage: '/images/journals/journal-19.webp',
    badge: 'Scopus / Web of Science',
    quartile: 'Q2',
    impactFactor: '3.2',
  },
  {
    id: 2,
    name: 'Discover Public Health',
    publisher: 'Springer Nature London',
    coverImage: '/images/journals/journal-2.webp',
    badge: 'Scopus / Web of Science',
    quartile: 'Q2',
    impactFactor: '2.6',
  },
  {
    id: 16,
    name: 'Separations',
    publisher: 'MDPI Basel Switzerland',
    coverImage: '/images/journals/journal-16.webp',
    badge: 'Scopus / Web of Science',
    quartile: 'Q2',
    impactFactor: '2.6',
  },
  {
    id: 11,
    name: 'Bioactive Compounds in Edible Mushrooms',
    publisher: 'Springer Nature Switzerland',
    coverImage: '/images/journals/journal-11.webp',
    badge: 'Scopus Indexed',
    quartile: 'Reference',
    impactFactor: 'Springer',
  },
  {
    id: 13,
    name: 'Phytonutrients in Treatment of Breast Cancer',
    publisher: 'CRC Press / Taylor & Francis',
    coverImage: '/images/journals/journal-13.webp',
    badge: 'Scopus Indexed',
    quartile: 'Reference',
    impactFactor: 'Taylor&F',
  },
  {
    id: 17,
    name: 'Water Crises and Sustainable Management',
    publisher: 'Springer Nature Singapore',
    coverImage: '/images/journals/journal-17.webp',
    badge: 'Scopus Indexed',
    quartile: 'Reference',
    impactFactor: 'Springer',
  },
  {
    id: 18,
    name: 'Sustainable Strategies for Air Pollution Mitigation',
    publisher: 'Springer Nature',
    coverImage: '/images/journals/journal-18.webp',
    badge: 'Scopus Indexed',
    quartile: 'Handbook',
    impactFactor: 'Springer',
  },
  {
    id: 10,
    name: 'The Natural Products Journal',
    publisher: 'Bentham Science',
    coverImage: '/images/journals/journal-10.webp',
    badge: 'Scopus / Web of Science',
    quartile: 'Q3',
    impactFactor: '1.8',
  },
];

export const ArticlesSection: React.FC<ArticlesSectionProps> = ({
  currentLang,
  onOpenProjects,
}) => {
  const content = {
    uz: {
      tag: 'ILMIY NASHRLAR VA TADQIQOT LOYIHALARI',
      title: 'Chop etilgan maqolalar',
      subtitle:
        'Innovatsion farmatsevtik birikmalar ilmiy laboratoriyasi tomonidan xalqaro Scopus va Web of Science nufuzli ilmiy bazalarida indeksatsiya qilingan 22 ta maqola va tadqiqot loyihalari.',
      actionBtn: 'Barcha 22 ta maqolani ko‘rish',
      stat1Val: '22 ta',
      stat1Label: 'Xalqaro ilmiy maqola',
      stat2Val: '100%',
      stat2Label: 'Scopus & Web of Science',
      stat3Val: 'IF 36.3',
      stat3Label: 'Nano-Micro Letters (Q1)',
      stat4Val: '11x',
      stat4Label: 'Ilmiy unumdorlik o‘sishi',
      featuredTag: 'Eng yuqori impakt-faktorli nashr',
      featuredTitle: 'Nano-Micro Letters (Q1 • Impact Factor: 36.3)',
      featuredDesc:
        'Onkologik terapiya, tabiiy va sintetik biologik faol moddalar, instrumental YUSSX bioanalizi bo‘yicha jahon darajasidagi ilmiy natijalar.',
      tickerTag: 'SCOPUS VA WEB OF SCIENCE NUFUSLI JURNALLARI',
      tickerTitle: 'Laboratoriya maqolalari chop etilgan yetakchi jurnallar',
      tickerDesc:
        'Xalqaro Q1 va Q2 kvartildagi nufuzli jurnallar va monografiyalar muqovalari',
    },
    ru: {
      tag: 'НАУЧНЫЕ ПУБЛИКАЦИИ И ИССЛЕДОВАТЕЛЬСКИЕ ПРОЕКТЫ',
      title: 'Опубликованные статьи',
      subtitle:
        '22 научные статьи и исследовательских проекта лаборатории, индексированных в международных авторитетных базах Scopus и Web of Science.',
      actionBtn: 'Посмотреть все 22 статьи',
      stat1Val: '22',
      stat1Label: 'Международные статьи',
      stat2Val: '100%',
      stat2Label: 'Scopus & Web of Science',
      stat3Val: 'IF 36.3',
      stat3Label: 'Nano-Micro Letters (Q1)',
      stat4Val: '11x',
      stat4Label: 'Рост научной продуктивности',
      featuredTag: 'Публикация с наивысшим импакт-фактором',
      featuredTitle: 'Nano-Micro Letters (Q1 • Импакт-фактор: 36.3)',
      featuredDesc:
        'Мировые научные результаты по таргетной терапии онкозаболеваний, биоактивным соединениям и инструментальному ВЭЖХ анализу.',
      tickerTag: 'АВТОРИТЕТНЫЕ ЖУРНАЛЫ SCOPUS И WEB OF SCIENCE',
      tickerTitle: 'Ведущие журналы, в которых опубликованы статьи лаборатории',
      tickerDesc:
        'Обложки престижных международных периодических изданий первого и второго квартилей (Q1/Q2)',
    },
    en: {
      tag: 'SCIENTIFIC PUBLICATIONS & RESEARCH PROJECTS',
      title: 'Published Scientific Articles',
      subtitle:
        '22 high-impact research articles and projects indexed in prestigious international databases Scopus and Web of Science.',
      actionBtn: 'Explore All 22 Publications',
      stat1Val: '22',
      stat1Label: 'International Articles',
      stat2Val: '100%',
      stat2Label: 'Scopus & Web of Science',
      stat3Val: 'IF 36.3',
      stat3Label: 'Nano-Micro Letters (Q1)',
      stat4Val: '11x',
      stat4Label: 'Research Growth Rate',
      featuredTag: 'Highest Impact Factor Publication',
      featuredTitle: 'Nano-Micro Letters (Q1 • Impact Factor: 36.3)',
      featuredDesc:
        'World-class findings in targeted oncology, bioactive phytocompounds, and advanced HPLC bioanalytical instrumentation.',
      tickerTag: 'PRESTIGIOUS SCOPUS & WEB OF SCIENCE JOURNALS',
      tickerTitle: 'Leading Journals Publishing Our Research',
      tickerDesc:
        'Official covers of high-impact Q1 & Q2 international periodicals and scientific monographs',
    },
  }[currentLang];

  return (
    <section id="articles-section" className="mt-12 sm:mt-16 pt-8 border-t border-[#E2E8F0]">
      {/* Top Header Row with Section Title */}
      <div className="pb-4 sm:pb-6">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E3D5F] text-[11px] font-mono font-bold tracking-wider uppercase mb-2.5">
          <BookOpen className="w-3.5 h-3.5 text-[#108A54]" />
          <span>{content.tag}</span>
        </div>
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold font-display text-[#0F2942] tracking-tight">
          {content.title}
        </h2>
        <p className="text-xs sm:text-sm text-[#475569] font-body mt-1.5 max-w-3xl leading-relaxed">
          {content.subtitle}
        </p>
      </div>

      {/* Main Interactive Academic Publications Banner (Clicking opens ProjectsModal) */}
      <div
        onClick={onOpenProjects}
        className="group relative rounded-2xl border border-[#E2E8F0] bg-gradient-to-br from-[#0F2942] via-[#163654] to-[#0A1F33] p-6 sm:p-8 lg:p-10 text-white shadow-md hover:shadow-xl hover:border-[#38D399]/50 transition-all duration-300 cursor-pointer overflow-hidden"
      >
        {/* Subtle Background Glow Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#108A54]/15 rounded-full blur-3xl pointer-events-none group-hover:bg-[#108A54]/25 transition-all duration-500" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#38D399]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          {/* Left Side: Summary & High Impact Callout */}
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#108A54]/30 border border-[#38D399]/40 text-[#38D399] text-xs font-mono font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{content.featuredTag}</span>
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-display tracking-tight text-white group-hover:text-[#38D399] transition-colors leading-snug">
              {content.featuredTitle}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 font-body leading-relaxed">
              {content.featuredDesc}
            </p>

            {/* 4 Academic Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 sm:pt-4">
              <div className="p-3 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10">
                <span className="font-mono text-base sm:text-xl font-bold text-[#38D399] block">
                  {content.stat1Val}
                </span>
                <span className="text-[11px] text-slate-300 font-body mt-0.5 block leading-tight">
                  {content.stat1Label}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10">
                <span className="font-mono text-base sm:text-xl font-bold text-white block">
                  {content.stat2Val}
                </span>
                <span className="text-[11px] text-slate-300 font-body mt-0.5 block leading-tight">
                  {content.stat2Label}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10">
                <span className="font-mono text-base sm:text-xl font-bold text-[#38D399] block">
                  {content.stat3Val}
                </span>
                <span className="text-[11px] text-slate-300 font-body mt-0.5 block leading-tight">
                  {content.stat3Label}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10">
                <span className="font-mono text-base sm:text-xl font-bold text-white block">
                  {content.stat4Val}
                </span>
                <span className="text-[11px] text-slate-300 font-body mt-0.5 block leading-tight">
                  {content.stat4Label}
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Big Interactive Call to Action Button */}
          <div className="shrink-0 flex items-center lg:justify-end">
            <button
              type="button"
              onClick={onOpenProjects}
              className="px-6 py-3.5 rounded-xl bg-[#108A54] hover:bg-[#0C6B41] active:scale-95 text-white font-semibold text-sm sm:text-base inline-flex items-center gap-3 shadow-lg transition-all duration-200 group-hover:scale-105 cursor-pointer"
            >
              <BookOpen className="w-5 h-5 text-white" />
              <span>{content.actionBtn}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* SCOPUS & Web of Science Top Journals Continuous Infinite Marquee Ticker */}
      <div className="mt-8 pt-6 border-t border-[#E2E8F0]/80">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#ECFDF5] border border-[#A7F3D0] text-[#047857] text-[10px] font-mono font-bold tracking-wider uppercase mb-1">
              <Award className="w-3 h-3 text-[#108A54]" />
              <span>{content.tickerTag}</span>
            </div>
            <h3 className="text-base sm:text-xl font-bold font-display text-[#0F2942] tracking-tight">
              {content.tickerTitle}
            </h3>
            <p className="text-xs text-[#64748B] font-body mt-0.5">
              {content.tickerDesc}
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenProjects}
            className="self-start sm:self-auto text-xs font-semibold text-[#108A54] hover:text-[#0C6B41] inline-flex items-center gap-1 group/btn cursor-pointer py-1"
          >
            <span>{content.actionBtn}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
          </button>
        </div>

        {/* Infinite Carousel Container */}
        <div className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-slate-50 via-white to-slate-50 border border-[#DDE2EF] p-3 sm:p-4 shadow-2xs">
          {/* Left & Right Fade Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />

          {/* Marquee Track (Smooth Continuous Loop) */}
          <div className="animate-marquee-infinite flex items-stretch gap-3.5 sm:gap-4 py-1">
            {[...TOP_SCOPUS_WOS_JOURNALS, ...TOP_SCOPUS_WOS_JOURNALS].map((journal, idx) => (
              <div
                key={`${journal.id}-${idx}`}
                onClick={onOpenProjects}
                className="shrink-0 w-44 sm:w-48 p-3 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#108A54] hover:shadow-md transition-all duration-300 group/card cursor-pointer flex flex-col justify-between"
              >
                <div className="aspect-[3/4] w-full rounded-lg overflow-hidden bg-slate-50/80 border border-slate-100 p-1 flex items-center justify-center relative mb-2.5">
                  <img
                    src={journal.coverImage}
                    alt={journal.name}
                    className="w-full h-full object-contain rounded-md group-hover/card:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  {journal.quartile && (
                    <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded-md bg-[#0F2942]/90 backdrop-blur-xs text-[10px] font-mono font-bold text-white shadow-xs">
                      {journal.quartile}
                    </div>
                  )}
                </div>

                <div>
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-[10px] font-mono font-bold text-[#108A54] bg-[#E8F5E9] px-2 py-0.5 rounded-md truncate max-w-[110px]">
                      {journal.badge}
                    </span>
                    {journal.impactFactor && (
                      <span className="text-[10px] font-mono font-extrabold text-[#0F2942]">
                        IF: {journal.impactFactor}
                      </span>
                    )}
                  </div>
                  <h4 className="text-xs font-bold text-[#0F2942] group-hover/card:text-[#108A54] transition-colors line-clamp-2 leading-tight">
                    {journal.name}
                  </h4>
                  <p className="text-[10px] text-[#64748B] mt-1 truncate font-body">
                    {journal.publisher}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
