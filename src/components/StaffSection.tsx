'use client';

import React from 'react';
import { Language } from '@/types/laboratory';
import { TRANSLATIONS } from '@/data/translations';
import { STAFF_MEMBERS } from '@/data/staffData';
import { Mail, ExternalLink, Users } from 'lucide-react';

interface StaffSectionProps {
  currentLang: Language;
}

export const StaffSection: React.FC<StaffSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section id="staff-section" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-slate-400 mb-3">{t.sectionStaffTag}</p>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              {t.sectionStaffTitle}
            </h2>
            <p className="text-slate-500 mt-3">
              {t.sectionStaffSubtitle}
            </p>
          </div>

          <div>
            <a
              href="/staff/portal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-700 hover:text-[#108A54] hover:border-[#108A54]/40 shadow-xs transition-all"
            >
              <Users className="w-4 h-4 text-[#108A54]" />
              <span>
                {currentLang === 'uz'
                  ? 'Xodimlar uchun'
                  : currentLang === 'ru'
                  ? 'Для сотрудников'
                  : 'For Staff'}
              </span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {STAFF_MEMBERS.map((member, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-mono font-semibold text-[#12715A] bg-[#E3F1EC] px-2.5 py-0.5 rounded-full">
                    {member.room[currentLang]}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-slate-900">{member.name}</h3>
                <p className="text-sm text-[#24356F] font-medium mt-0.5">{member.title[currentLang]}</p>
                <p className="text-sm text-slate-500 mt-3 leading-relaxed">
                  {member.focus[currentLang]}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 space-y-1.5 text-xs font-mono">
                {member.orcid && (
                  <a
                    href={`https://orcid.org/${member.orcid}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-slate-600 transition-colors inline-flex items-center gap-1.5"
                  >
                    ORCID: {member.orcid}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                <a
                  href={`mailto:${member.email}`}
                  className="text-slate-400 hover:text-slate-600 transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  {member.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
