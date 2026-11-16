'use client';

import React, { useState } from 'react';
import { Publication, Language } from '@/types/laboratory';
import { TRANSLATIONS } from '@/data/translations';
import { LAB_PUBLICATIONS } from '@/data/laboratoryData';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

interface PublicationsHubProps {
  currentLang: Language;
}

export const PublicationsHub: React.FC<PublicationsHubProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];
  const [expandedAbstracts, setExpandedAbstracts] = useState<Record<string, boolean>>({});

  const toggleAbstract = (id: string) => {
    setExpandedAbstracts((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="publications-section" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-3">
            {currentLang === 'uz' ? 'ILMIY NASHRLAR' : currentLang === 'ru' ? 'НАУЧНЫЕ ПУБЛИКАЦИИ' : 'PUBLICATIONS'}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            {t.publicationsTitle}
          </h2>
          <p className="text-slate-500 mt-2">{t.publicationsSubtitle}</p>
        </div>

        <div className="space-y-6">
          {LAB_PUBLICATIONS.map((pub) => {
            const isExpanded = !!expandedAbstracts[pub.id];
            return (
              <div key={pub.id} className="bg-white border border-slate-200 rounded p-6">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-2">
                      <span className="font-medium text-slate-600">Scopus {pub.quartile}</span>
                      <span>IF {pub.impactFactor}</span>
                      <span>{pub.year}</span>
                      <span className="italic">{pub.journal}</span>
                    </div>

                    <h3 className="text-base font-semibold text-slate-900 leading-snug">
                      {pub.title[currentLang]}
                    </h3>

                    <p className="text-sm text-slate-400 mt-1.5">{pub.authors}</p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-slate-500 hover:text-slate-900 transition-colors inline-flex items-center gap-1"
                    >
                      DOI <ExternalLink className="w-3 h-3" />
                    </a>
                    <button
                      onClick={() => toggleAbstract(pub.id)}
                      className="text-sm text-slate-400 hover:text-slate-700 transition-colors inline-flex items-center gap-1"
                    >
                      {t.abstractToggle}
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-slate-100 text-sm text-slate-600 leading-relaxed">
                    {pub.abstract[currentLang]}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
