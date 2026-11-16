'use client';

import React from 'react';
import { Language } from '@/types/laboratory';
import { TRANSLATIONS } from '@/data/translations';
import { Mail, ExternalLink } from 'lucide-react';

interface StaffSectionProps {
  currentLang: Language;
}

export const StaffSection: React.FC<StaffSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  const staffMembers = [
    {
      name: "Professor Avez Sharipov, DSc",
      title: { uz: "SLIPC laboratoriya mudiri, professor", ru: "Заведующий лабораторией SLIPC, профессор", en: "Head of SLIPC Laboratory, Professor" },
      focus: { uz: "Preklinik farmakologiya, toksikologiya, adaptogenlar", ru: "Доклиническая фармакология, токсикология, адаптогены", en: "Preclinical pharmacology, toxicology, adaptogens" },
      orcid: "0000-0001-9231-778X",
      email: "a.sharipov@slipc-lab.uz",
    },
    {
      name: "Tulyaganov Bobir Sobirovich",
      title: { uz: "Katta ilmiy xodim, PhD", ru: "Старший научный сотрудник, PhD", en: "Senior Research Scientist, PhD" },
      focus: { uz: "RP-HPLC-DAD bioanalitika, moddalar standartlashtirish, ICH validatsiyasi", ru: "ВЭЖХ-DAD биоаналитика, стандартизация субстанций, валидация ICH", en: "RP-HPLC-DAD bioanalysis, chemical standardization, ICH validation" },
      orcid: "0000-0002-3419-8821",
      email: "b.tulyaganov@slipc-lab.uz",
    },
    {
      name: "Gulyamov Shohid Sharofutdin o'g'li",
      title: { uz: "Katta ilmiy xodim, PhD", ru: "Старший научный сотрудник, PhD", en: "Senior Research Scientist, PhD" },
      focus: { uz: "MTT sitotoksiklik, hujayra kultivatsiyasi, apoptoz mexanizmlari", ru: "Цитотоксичность MTT, клеточные культуры, апоптоз", en: "MTT cytotoxicity assays, cell cultures, apoptosis pathways" },
      orcid: "0000-0003-4512-7104",
      email: "sh.gulyamov@slipc-lab.uz",
    },
    {
      name: "Fayzullayev Diyorbek To'xtasinovich",
      title: { uz: "Kichik ilmiy xodim", ru: "Младший научный сотрудник", en: "Junior Research Scientist" },
      focus: { uz: "O'simliklar ekstraksiyasi, vakuum konsentratsiyalash, liofilizatsiya", ru: "Экстракция растений, вакуумное упаривание, лиофилизация", en: "Plant extraction, vacuum evaporation, lyophilization" },
      orcid: "0000-0001-8874-3392",
      email: "d.fayzullayev@slipc-lab.uz",
    },
    {
      name: "Sulaymonova Nigina Jamshid qizi",
      title: { uz: "Kichik ilmiy xodim", ru: "Младший научный сотрудник", en: "Junior Research Scientist" },
      focus: { uz: "Oksidlovchi stress (MDA, SOD, CAT), antioksidant faollik, IFA", ru: "Окислительный стресс (MDA, SOD, CAT), антиоксидантная активность, ИФА", en: "Oxidative stress markers (MDA, SOD, CAT), antioxidant assays, ELISA" },
      orcid: "0000-0002-1980-6218",
      email: "n.sulaymonova@slipc-lab.uz",
    }
  ];

  return (
    <section id="staff-section" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-3">{t.sectionStaffTag}</p>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            {t.sectionStaffTitle}
          </h2>
          <p className="text-slate-500 mt-3">
            {t.sectionStaffSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staffMembers.map((member, idx) => (
            <div key={idx}>
              <h3 className="text-base font-semibold text-slate-900">{member.name}</h3>
              <p className="text-sm text-slate-400 mt-0.5">{member.title[currentLang]}</p>
              <p className="text-sm text-slate-500 mt-3 leading-relaxed">
                {member.focus[currentLang]}
              </p>
              <div className="mt-4 space-y-1.5 text-sm">
                <a
                  href={`https://orcid.org/${member.orcid}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-slate-600 transition-colors inline-flex items-center gap-1.5"
                >
                  ORCID
                  <ExternalLink className="w-3 h-3" />
                </a>
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
