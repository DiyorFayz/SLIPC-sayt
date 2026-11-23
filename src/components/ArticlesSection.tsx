'use client';

import React from 'react';
import { Language } from '@/types/laboratory';
import { BookOpen, Sparkles, ArrowRight, ExternalLink, Award, TrendingUp, Layers } from 'lucide-react';

interface ArticlesSectionProps {
  currentLang: Language;
  onOpenProjects: () => void;
}

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
    </section>
  );
};
