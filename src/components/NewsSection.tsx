'use client';

import React, { useEffect, useState } from 'react';
import { Language } from '@/types/laboratory';
import { TRANSLATIONS } from '@/data/translations';
import { ArrowRight, Edit3 } from 'lucide-react';
import { NewsItem, INITIAL_NEWS_ITEMS, fetchAllNews } from '@/data/newsData';

interface NewsSectionProps {
  currentLang: Language;
}

export const NewsSection: React.FC<NewsSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];
  const [newsItems, setNewsItems] = useState<NewsItem[]>(INITIAL_NEWS_ITEMS);

  useEffect(() => {
    fetchAllNews().then((data) => {
      if (data && data.length > 0) {
        setNewsItems(data);
      }
    });
  }, []);

  const editLabel =
    currentLang === 'uz'
      ? 'Tahrirlash'
      : currentLang === 'ru'
      ? 'Редактировать'
      : 'Edit';

  return (
    <section id="news-section" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-slate-400 mb-3">{t.sectionNewsTag}</p>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              {t.sectionNewsTitle}
            </h2>
            <p className="text-slate-500 mt-3">
              {t.sectionNewsSubtitle}
            </p>
          </div>

          <div>
            <a
              href="/admin/news"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-700 hover:text-[#101F52] hover:bg-slate-100 transition-colors"
            >
              <Edit3 className="w-3.5 h-3.5 text-emerald-600" />
              <span>{editLabel}</span>
            </a>
          </div>
        </div>

        <div className="divide-y divide-slate-200">
          {newsItems.map((item) => (
            <article key={item.id} className="py-6 first:pt-0 last:pb-0">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <time className="text-sm text-slate-400 shrink-0 sm:w-28 tabular-nums">{item.date}</time>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-slate-900 leading-snug mb-1">
                    {item.title?.[currentLang] || item.title?.uz || ''}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-3">
                    {item.summary?.[currentLang] || item.summary?.uz || ''}
                  </p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-slate-900 hover:text-slate-600 transition-colors inline-flex items-center gap-1"
                    >
                      {t.newsReadMore}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
