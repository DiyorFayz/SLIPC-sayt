'use client';

import React from 'react';
import { Language } from '@/types/laboratory';
import { TRANSLATIONS } from '@/data/translations';

interface EducationSectionProps {
  currentLang: Language;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  const programs = {
    uz: [
      { title: "Hujayra Biologiyasi va BSL-2 Steril Amaliyot Maktabi", desc: "Hujayralarni parvarishlash, mikroskopiya va MTT sitotoksiklik tahlilini amaliy o'zlashtirish.", audience: "Bakalavr, Magistratura va PhD", duration: "2 hafta" },
      { title: "HPLC Instrumental Bioanaliz va Metod Validatsiyasi", desc: "Agilent 1260 HPLC tizimida gradient rejimlar va ICH Q2(R1) validatsiyasi.", audience: "Kimyogar-analitiklar", duration: "3 hafta" },
      { title: "In Vivo Eksperimentlar va Bioetika", desc: "Laboratoriya kemiruvchilari bilan ishlash, doza hisoblash va bioetik monitoring.", audience: "Farmakologlar", duration: "1 hafta" },
    ],
    ru: [
      { title: "Школа клеточной биологии и стерильной практики BSL-2", desc: "Культивирование клеток, микроскопия и анализ цитотоксичности MTT.", audience: "Магистранты и аспиранты", duration: "2 недели" },
      { title: "Практический курс ВЭЖХ биоанализа и валидации", desc: "Работа на Agilent 1260, градиентное элюирование и валидация по ICH Q2(R1).", audience: "Химики-аналитики", duration: "3 недели" },
      { title: "Доклинические исследования In Vivo и биоэтика", desc: "Стандарты работы с грызунами, дозирование и протоколы ARRIVE.", audience: "Фармакологи", duration: "1 неделя" },
    ],
    en: [
      { title: "Cell Culture Biology & BSL-2 Cleanroom Practicum", desc: "Hands-on cell maintenance, microscopy, and MTT cytotoxicity testing.", audience: "MSc & PhD Fellows", duration: "2 weeks" },
      { title: "HPLC Bioanalytical Instrumentation & Validation", desc: "Operational training on Agilent 1260 HPLC-DAD and ICH Q2(R1) validation.", audience: "Analytical Chemists", duration: "3 weeks" },
      { title: "In Vivo Preclinical Ergometry & Bioethics", desc: "Rodent handling, micro-sampling, and ARRIVE protocols.", audience: "Pharmacologists", duration: "1 week" },
    ],
  };

  return (
    <section id="education-section" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-3">{t.sectionEducationTag}</p>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            {t.sectionEducationTitle}
          </h2>
          <p className="text-slate-500 mt-3 leading-relaxed">
            {t.sectionEducationSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs[currentLang].map((prog, idx) => (
            <div key={idx}>
              <h3 className="text-base font-semibold text-slate-900 leading-snug mb-2">
                {prog.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                {prog.desc}
              </p>
              <div className="text-xs text-slate-400 space-y-1">
                <p>{t.educationAudienceLabel} {prog.audience}</p>
                <p>{t.educationDurationLabel || (currentLang === 'uz' ? 'Davomiyligi:' : currentLang === 'ru' ? 'Длительность:' : 'Duration:')} {prog.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
