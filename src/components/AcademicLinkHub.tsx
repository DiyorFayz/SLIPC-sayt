'use client';

import React from 'react';
import { Language, SOPDocument } from '@/types/laboratory';
import { TRANSLATIONS } from '@/data/translations';
import { LAB_SOPS } from '@/data/laboratoryData';
import { ExternalLink, ArrowRight } from 'lucide-react';

interface AcademicLinkHubProps {
  currentLang: Language;
  onOpenSOP: (sop: SOPDocument) => void;
  onOpenPassport: () => void;
}

export const AcademicLinkHub: React.FC<AcademicLinkHubProps> = ({
  currentLang,
  onOpenSOP,
  onOpenPassport,
}) => {
  const t = TRANSLATIONS[currentLang];

  const academicProfiles = [
    { title: "Google Scholar", url: "https://scholar.google.com" },
    { title: "ResearchGate", url: "https://www.researchgate.net" },
    { title: "ORCID", url: "https://orcid.org" },
    { title: "Mendeley", url: "https://www.mendeley.com" },
    { title: "Telegram", url: "https://t.me" },
  ];

  return (
    <section id="links-section" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-3">
            {currentLang === 'uz' ? 'RESURSLAR' : currentLang === 'ru' ? 'РЕСУРСЫ' : 'RESOURCES'}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            {t.linksHubTitle}
          </h2>
          <p className="text-slate-500 mt-2">{t.linksHubSubtitle}</p>
        </div>

        {/* SOPs */}
        <div className="mb-16">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">
            {t.sopDirectoryTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LAB_SOPS.map((sop) => (
              <div key={sop.id} className="border border-slate-200 rounded p-5 bg-white">
                <h4 className="text-base font-semibold text-slate-900 leading-snug mb-2">
                  {sop.title[currentLang]}
                </h4>
                <p className="text-sm text-slate-500 line-clamp-2 mb-4">
                  {sop.purpose[currentLang]}
                </p>
                <button
                  onClick={() => onOpenSOP(sop)}
                  className="text-sm text-slate-900 hover:text-slate-600 transition-colors inline-flex items-center gap-1"
                >
                  {t.viewSop} <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Profiles */}
        <div>
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">
            {currentLang === 'uz' ? 'Ilmiy tarmoqlar' : currentLang === 'ru' ? 'Научные сети' : 'Academic Networks'}
          </h3>
          <div className="flex flex-wrap gap-4">
            {academicProfiles.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-500 hover:text-slate-900 transition-colors inline-flex items-center gap-1.5 border border-slate-200 rounded px-4 py-2"
              >
                {link.title}
                <ExternalLink className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
