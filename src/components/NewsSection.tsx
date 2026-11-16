'use client';

import React from 'react';
import { Language } from '@/types/laboratory';
import { TRANSLATIONS } from '@/data/translations';
import { ArrowRight } from 'lucide-react';

interface NewsSectionProps {
  currentLang: Language;
}

export const NewsSection: React.FC<NewsSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  const newsItems = [
    {
      id: "news-1",
      date: "2024-10-18",
      title: {
        uz: "Ziziphora pedicellata ekstraktlari bo'yicha tadqiqot Q1 jurnalida chop etildi",
        ru: "Исследование экстрактов Ziziphora pedicellata опубликовано в журнале Q1",
        en: "Ziziphora pedicellata cytotoxicity study published in Q1 journal"
      },
      summary: {
        uz: "In vitro sitotoksiklik va apoptoz kaskadlari tahlili Journal of Ethnopharmacology jurnalida e'lon qilindi.",
        ru: "Результаты анализа цитотоксичности и апоптоза опубликованы в Journal of Ethnopharmacology.",
        en: "Apoptotic cascades research in HepG2 cells published in Journal of Ethnopharmacology."
      },
      link: "#publications-section"
    },
    {
      id: "news-2",
      date: "2024-09-05",
      title: {
        uz: "Horizon Europe konsortsiumiga rasmiy hamkor sifatida qabul qilindi",
        ru: "SLIPC вошла в консорциум Horizon Europe",
        en: "SLIPC onboarded to Horizon Europe Consortium"
      },
      summary: {
        uz: "Yevropa Ittifoqining dori vositalarini tadqiq etish loyihasida laboratoriyamiz tasdiqlandi.",
        ru: "Лаборатория утверждена партнером европейского консорциума.",
        en: "Validated as partner entity for preclinical pharmacology work packages."
      },
      link: "#about-section"
    },
    {
      id: "news-3",
      date: "2024-06-22",
      title: {
        uz: "Agilent 1260 Infinity II xromatografik tizimi metrologik kalibratsiyadan o'tdi",
        ru: "Agilent 1260 Infinity II прошла метрологическую калибровку",
        en: "Agilent 1260 Infinity II HPLC System calibrated and standardized"
      },
      summary: {
        uz: "DAD-detektorli xromatograf ICH Q2(R1) talablariga mos holatga keltirildi.",
        ru: "Хроматограф введен в эксплуатацию по стандартам ICH Q2(R1).",
        en: "HPLC module calibrated for pharmacokinetic bioanalysis per ICH Q2(R1)."
      },
      link: "#centers-section"
    }
  ];

  return (
    <section id="news-section" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-3">{t.sectionNewsTag}</p>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            {t.sectionNewsTitle}
          </h2>
          <p className="text-slate-500 mt-3">
            {t.sectionNewsSubtitle}
          </p>
        </div>

        <div className="divide-y divide-slate-200">
          {newsItems.map((item) => (
            <article key={item.id} className="py-6 first:pt-0 last:pb-0">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <time className="text-sm text-slate-400 shrink-0 sm:w-28 tabular-nums">{item.date}</time>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-slate-900 leading-snug mb-1">
                    {item.title[currentLang]}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-3">
                    {item.summary[currentLang]}
                  </p>
                  <a
                    href={item.link}
                    className="text-sm text-slate-900 hover:text-slate-600 transition-colors inline-flex items-center gap-1"
                  >
                    {t.newsReadMore}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
