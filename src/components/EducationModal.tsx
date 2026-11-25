'use client';

import React, { useEffect } from 'react';
import { Language } from '@/types/laboratory';
import { TRANSLATIONS } from '@/data/translations';
import { motion, AnimatePresence } from 'framer-motion';
import { X, GraduationCap } from 'lucide-react';

interface EducationModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const EducationModal: React.FC<EducationModalProps> = ({
  isOpen,
  onClose,
  currentLang,
}) => {
  const t = TRANSLATIONS[currentLang];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    if (isOpen) {
      document.body.classList.add('modal-open');
      document.documentElement.classList.add('modal-open');
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.classList.remove('modal-open');
      document.documentElement.classList.remove('modal-open');
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.classList.remove('modal-open');
      document.documentElement.classList.remove('modal-open');
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const programs = [
    {
      code: "EDU-IV-101",
      title: {
        uz: "Hujayra Biologiyasi va BSL-2 Steril Amaliyot Maktabi",
        ru: "Школа клеточной биологии и стерильной практики BSL-2",
        en: "Cell Culture Biology & BSL-2 Cleanroom Practicum"
      },
      desc: {
        uz: "Hujayralarni parvarishlash, mikroskopiya, laminar bokslar bilan ishlash va MTT sitotoksiklik tahlilini amaliy o'zlashtirish.",
        ru: "Культивирование клеток, инвертированная микроскопия и анализ цитотоксичности MTT на практике.",
        en: "Hands-on cell maintenance, inverted phase microscopy, and standardized MTT cytotoxicity testing."
      },
      audience: {
        uz: "Bakalavr, Magistratura va PhD talabalari",
        ru: "Магистранты и аспиранты (PhD)",
        en: "MSc & PhD Research Fellows"
      },
      duration: {
        uz: "2 haftalik intensiv amaliyot",
        ru: "2 недели интенсивной практики",
        en: "2-week intensive workshop"
      }
    },
    {
      code: "EDU-HP-201",
      title: {
        uz: "HPLC Instrumental Bioanaliz va Metod Validatsiyasi Kursi",
        ru: "Практический курс ВЭЖХ биоанализа и валидации методик",
        en: "HPLC Bioanalytical Instrumentation & Method Validation"
      },
      desc: {
        uz: "Agilent 1260 HPLC tizimida ko'chma faza tayyorlash, gradient rejimlar va ICH Q2(R1) validatsiyasini amaliy bajarish.",
        ru: "Работа на Agilent 1260 HPLC, настройка градиентного элюирования и валидация по ICH Q2(R1).",
        en: "Operational training on Agilent 1260 HPLC-DAD, mobile phase preparation, and ICH Q2(R1) validation."
      },
      audience: {
        uz: "Kimyogar-analitiklar va farmatsevtlar",
        ru: "Химики-аналитики и фармацевты",
        en: "Analytical Chemists & Pharmacists"
      },
      duration: {
        uz: "3 haftalik amaliy dastur",
        ru: "3 недели практического обучения",
        en: "3-week accredited module"
      }
    },
    {
      code: "EDU-PH-102",
      title: {
        uz: "In Vivo Eksperimentlar va Bioetika (ARRIVE / GLP)",
        ru: "Доклинические исследования In Vivo и биоэтика (GLP)",
        en: "In Vivo Preclinical Ergometry & Bioethics (GLP/ARRIVE)"
      },
      desc: {
        uz: "Laboratoriya kemiruvchilari bilan ishlash qoidalari, doza hisoblash, qon olish usullari va bioetik monitoring.",
        ru: "Стандарты работы с грызунами, дозирование, отбор биообразцов и протоколы ARRIVE.",
        en: "Standard operating handling of rodents, micro-sampling, animal welfare ethics, and physiological screening."
      },
      audience: {
        uz: "Eksperimental farmakologlar va toksikologlar",
        ru: "Фармакологи и токсикологи",
        en: "Pharmacologists & Toxicologists"
      },
      duration: {
        uz: "1 haftalik seminar-trening",
        ru: "1 неделя тренинга",
        en: "1-week practical course"
      }
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 overflow-hidden overscroll-contain">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#101F52]/30 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ type: 'spring', duration: 0.32, bounce: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full sm:max-w-4xl glass-modal sm:rounded-2xl overflow-hidden flex flex-col h-[94vh] sm:h-[90vh] max-h-[94vh] overscroll-contain z-10"
          >
            {/* Top Brand Accent Bar */}
            <div className="h-1 w-full bg-gradient-to-r from-[#24356F] via-[#344A94] to-[#12715A] shrink-0" />

            {/* Header */}
            <div className="p-5 sm:p-6 bg-white/80 border-b border-[#DDE2EF] flex flex-col sm:flex-row justify-between items-start gap-4">
              <div className="flex items-start gap-4">
                <div className="p-1 rounded-xl bg-white border border-[#DDE2EF] shadow-sm shrink-0">
                  <img
                    src={currentLang === 'uz' ? '/logo-ifbil.webp' : '/logo-slipc.webp'}
                    alt={currentLang === 'uz' ? 'IFBIL' : 'SLIPC'}
                    className="w-12 h-12 rounded-lg object-contain bg-white"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="font-mono text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#E6EAF5] text-[#24356F] inline-flex items-center gap-1.5 uppercase">
                      <GraduationCap className="w-3.5 h-3.5 text-[#12715A]" />
                      Education &amp; Outreach
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1B1F2A] font-display">
                    {t.sectionEducationTitle}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#5C6478] mt-1 font-body">
                    {t.sectionEducationSubtitle}
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-xl border border-[#DDE2EF] bg-white text-[#5C6478] hover:text-[#24356F] hover:bg-[#F3F5FB] transition-colors shrink-0 cursor-pointer"
                aria-label={t.closeModal}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain ios-momentum-scroll modal-scroll-area p-5 sm:p-7 space-y-5 bg-[#F3F5FB]/40">
              <div className="p-4 sm:p-5 rounded-2xl bg-white/95 border border-[#DDE2EF] text-xs sm:text-sm text-[#5C6478] leading-relaxed font-body shadow-sm">
                {t.educationIntro}
              </div>

              <div className="space-y-4">
                {programs.map((prog, idx) => (
                  <div
                    key={idx}
                    className="glass-card rounded-2xl p-5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span className="font-mono text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#E3F1EC] text-[#12715A] uppercase">
                          {prog.code}
                        </span>
                        <span className="text-xs font-mono text-[#5C6478]">
                          {prog.duration[currentLang]}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold font-display text-[#1B1F2A] leading-snug">
                        {prog.title[currentLang]}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#5C6478] mt-2 leading-relaxed font-body">
                        {prog.desc[currentLang]}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#DDE2EF] text-xs font-mono text-[#5C6478] flex items-center justify-between">
                      <div>
                        <strong className="text-[#24356F]">{t.educationAudienceLabel}</strong>{' '}
                        <span>{prog.audience[currentLang]}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-white/90 border-t border-[#DDE2EF] flex items-center justify-between">
              <span className="text-xs font-mono text-[#5C6478]">
                SLIPC Outreach Module
              </span>
              <button
                onClick={onClose}
                className="btn-pharmi btn-pharmi-primary text-xs px-5 py-2"
              >
                {t.closeModal}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
