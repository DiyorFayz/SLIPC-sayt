'use client';

import React, { useEffect } from 'react';
import { Language } from '@/types/laboratory';
import { TRANSLATIONS } from '@/data/translations';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Newspaper, ExternalLink } from 'lucide-react';

interface NewsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const NewsModal: React.FC<NewsModalProps> = ({
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
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const newsItems = [
    {
      id: "news-1",
      date: "2024-10-18",
      category: {
        uz: "Ilmiy Nashr",
        ru: "Научная публикация",
        en: "Scientific Publication"
      },
      title: {
        uz: "Ziziphora pedicellata ekstraktlari bo'yicha tadqiqot nufuzli Q1 jurnalida chop etildi",
        ru: "Исследование экстрактов Ziziphora pedicellata опубликовано в журнале квартиля Q1",
        en: "Ziziphora pedicellata cytotoxicity study published in premier Q1 Elsevier journal"
      },
      summary: {
        uz: "Laboratoriyamiz xodimlari tomonidan olib borilgan in vitro sitotoksiklik va apoptoz kaskadlari tahlili Journal of Ethnopharmacology jurnalida e'lon qilindi.",
        ru: "Результаты анализа цитотоксичности и апоптоза опубликованы в Journal of Ethnopharmacology.",
        en: "Collaborative research on apoptotic cascades in HepG2 cells published in Journal of Ethnopharmacology."
      },
      link: "https://doi.org/10.1016/j.jep.2023.116890"
    },
    {
      id: "news-2",
      date: "2024-09-05",
      category: {
        uz: "Xalqaro Hamkorlik",
        ru: "Международное сотрудничество",
        en: "International Consortium"
      },
      title: {
        uz: "Horizon Europe konsortsiumiga rasmiy hamkor sifatida qabul qilindi",
        ru: "SLIPC вошла в консорциум исследовательской программы Horizon Europe",
        en: "SLIPC onboarded to European Horizon Europe Research Consortium"
      },
      summary: {
        uz: "Yevropa Ittifoqining dori vositalarini tadqiq etish yo'nalishidagi loyihasida laboratoriyamiz PIC 912048192 raqami bilan tasdiqlandi.",
        ru: "Лаборатория утверждена партнером европейского консорциума под идентификатором PIC 912048192.",
        en: "Validated as partner entity under PIC 912048192 for preclinical pharmacology work packages."
      },
      link: "https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/how-to-participate/participant-register"
    },
    {
      id: "news-3",
      date: "2024-06-22",
      category: {
        uz: "Infratuzilma",
        ru: "Инфраструктура",
        en: "Infrastructure"
      },
      title: {
        uz: "Yangi Agilent 1260 Infinity II xromatografik tizimi muvaffaqiyatli metrologik kalibratsiyadan o'tdi",
        ru: "Система ВЭЖХ Agilent 1260 Infinity II прошла государственную метрологическую калибровку",
        en: "Agilent 1260 Infinity II HPLC System successfully calibrated and standardized"
      },
      summary: {
        uz: "HPLC xonasidagi yangi DAD-detektorli xromatograf ICH Q2(R1) talablariga mos holatda eksperimental tahlillarga shay holatga keltirildi.",
        ru: "Хроматограф введен в постоянную эксплуатацию для биоаналитических задач по стандартам ICH Q2(R1).",
        en: "High-performance liquid chromatography module calibrated for pharmacokinetic bioanalysis."
      },
      link: "https://www.agilent.com"
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 overflow-y-auto">
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
            className="relative w-full sm:max-w-4xl glass-modal sm:rounded-2xl overflow-hidden flex flex-col max-h-[92vh] z-10"
          >
            {/* Top Brand Accent Bar */}
            <div className="h-1 w-full bg-gradient-to-r from-[#24356F] via-[#344A94] to-[#12715A] shrink-0" />

            {/* Header */}
            <div className="p-5 sm:p-6 bg-white/80 border-b border-[#DDE2EF] flex flex-col sm:flex-row justify-between items-start gap-4">
              <div className="flex items-start gap-4">
                <div className="p-1 rounded-xl bg-white border border-[#DDE2EF] shadow-sm shrink-0">
                  <img
                    src="/logo.jpg"
                    alt="SLIPC"
                    className="w-12 h-12 rounded-lg object-contain bg-[#0A1128]"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="font-mono text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#E6EAF5] text-[#24356F] inline-flex items-center gap-1.5 uppercase">
                      <Newspaper className="w-3.5 h-3.5 text-[#12715A]" />
                      Academic Dispatches
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1B1F2A] font-display">
                    {t.sectionNewsTitle}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#5C6478] mt-1 font-body">
                    {t.sectionNewsSubtitle}
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
            <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-4 bg-[#F3F5FB]/40">
              {newsItems.map((item) => (
                <div
                  key={item.id}
                  className="glass-card rounded-2xl p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-[#5C6478] mb-2.5">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#24356F]" />
                        <span>{item.date}</span>
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#E3F1EC] text-[#12715A] font-bold uppercase text-[11px]">
                        {item.category[currentLang]}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold font-display text-[#1B1F2A] leading-snug">
                      {item.title[currentLang]}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#5C6478] mt-2 leading-relaxed font-body">
                      {item.summary[currentLang]}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#DDE2EF] flex items-center justify-between">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono font-bold text-[#24356F] hover:text-[#12715A] hover:underline inline-flex items-center gap-1.5"
                    >
                      <span>{t.newsReadMore}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-4 bg-white/90 border-t border-[#DDE2EF] flex items-center justify-between">
              <span className="text-xs font-mono text-[#5C6478]">
                SLIPC Media Hub
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
