'use client';

import React, { useEffect, useState } from 'react';
import { Language } from '@/types/laboratory';
import { TRANSLATIONS } from '@/data/translations';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  CheckCircle2,
  Users,
  Mail,
  ShieldCheck,
  ExternalLink,
  Building2,
  FileText,
  Sparkles,
  Send,
} from 'lucide-react';
import { HistoryModal } from '@/components/HistoryModal';
import { STAFF_MEMBERS } from '@/data/staffData';
import { CometCard } from '@/components/ui/comet-card';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onOpenHistory?: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  onOpenHistory,
}) => {
  const t = TRANSLATIONS[currentLang];
  const [glpPage, setGlpPage] = useState<1 | 2>(1);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isHistoryOpen) {
          setIsHistoryOpen(false);
        } else if (isOpen) {
          onClose();
        }
      }
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
  }, [isOpen, isHistoryOpen, onClose]);

  const pillars = [
    { title: t.aboutPillar1Title, desc: t.aboutPillar1Desc, code: "PH-INVIVO" },
    { title: t.aboutPillar2Title, desc: t.aboutPillar2Desc, code: "IV-CELL" },
    { title: t.aboutPillar3Title, desc: t.aboutPillar3Desc, code: "HP-ANALYTICS" },
    { title: t.aboutPillar4Title, desc: t.aboutPillar4Desc, code: "PC-PHYTO" },
  ];

  const staffMembers = STAFF_MEMBERS;

  const sectionStaffHeader = {
    uz: {
      tag: "LABORATORIYA JAMOASI",
      title: "Yetakchi Ilmiy Xodimlar",
      subtitle: "Laboratoriyaning asosiy ilmiy yo'nalishlarini olib boruvchi yetakchi olimlar va tadqiqotchilar"
    },
    ru: {
      tag: "КОМАНДА ЛАБОРАТОРИИ",
      title: "Ведущие Научные Сотрудники",
      subtitle: "Ведущие ученые и исследователи, руководящие ключевыми научными направлениями лаборатории"
    },
    en: {
      tag: "LABORATORY TEAM",
      title: "Leading Research Scientists",
      subtitle: "Principal investigators and researchers heading the core scientific divisions of our laboratory"
    }
  }[currentLang];

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
            className="relative w-full sm:max-w-4xl glass-modal rounded-t-2xl sm:rounded-lg overflow-hidden flex flex-col max-h-[92dvh] z-10"
          >
            {/* Top Brand Accent Bar */}
            <div className="h-1 w-full bg-gradient-to-r from-[#0F2942] via-[#1E3D5F] to-[#108A54] shrink-0" />

            {/* Header */}
            <div className="p-4 sm:p-6 bg-white/95 border-b border-[#E2E8F0] flex flex-col sm:flex-row justify-between items-start gap-4">
              <div className="flex items-center gap-3.5 sm:gap-4">
                <div className="p-1 rounded-lg bg-white border border-[#E2E8F0] shadow-sm shrink-0">
                  <img
                    src="/logo.webp"
                    alt="SLIPC"
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-md object-contain bg-white"
                  />
                </div>
                <div>
                  <h2 className="text-lg sm:text-2xl font-bold tracking-tight text-[#0F2942] font-display">
                    {t.sectionAboutTitle}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#475569] mt-0.5 font-body">
                    {t.sectionAboutSubtitle}
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-lg border border-[#E2E8F0] bg-white text-[#475569] hover:text-[#0F2942] hover:bg-[#F8FAFC] transition-colors shrink-0 cursor-pointer touch-manipulation self-end sm:self-auto"
                aria-label={t.closeModal}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-7 space-y-6 sm:space-y-7 bg-[#F4F6F9] ios-momentum-scroll overscroll-contain">
              {/* Laboratory Description */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white/95 border border-[#DDE2EF] shadow-sm">
                <p className="text-sm text-[#1B1F2A]/90 leading-relaxed font-body whitespace-pre-line">
                  {t.aboutMissionText}
                </p>
              </div>

              {/* Laboratory Origin & History Subsection */}
              <div className="pt-2">
                <div className="glass-card rounded-2xl p-5 sm:p-6 border border-[#24356F]/20 bg-gradient-to-br from-white via-[#F8FAFC] to-[#E6EAF5]/50 shadow-xs hover:border-[#24356F]/40 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#E6EAF5] text-[#24356F] border border-[#CCD6ED] uppercase">
                          1987 — 2025 &bull; 38 Yil
                        </span>
                        <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                          IF: 36.3
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold font-display text-[#1B1F2A]">
                        {currentLang === 'uz'
                          ? "Laboratoriyaning kelib chiqish tarixi"
                          : currentLang === 'ru'
                            ? "История происхождения лаборатории"
                            : "Origins & History of the Laboratory"}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#5C6478] font-body mt-1 leading-relaxed max-w-xl">
                        {currentLang === 'uz'
                          ? "1987-yilda tashkil etilgan ilk laboratoriyadan bugungi kungacha bosib o'tilgan 38 yillik ilmiy taraqqiyot yo'li, 1000 dan ortiq yangi moddalar sintezi, 40 ta dori vositasi va nufuzli Scopus Q1 nashrlari."
                          : currentLang === 'ru'
                            ? "38-летний путь научного развития с 1987 года: синтез более 1000 новых соединений, создание около 40 лекарственных средств и передовые публикации Q1."
                            : "38 years of scientific drug discovery since 1987: over 1,000 synthesized molecules, ~40 formulated pharmaceuticals, and high-impact Q1 publications."}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        if (onOpenHistory) {
                          onOpenHistory();
                        } else {
                          setIsHistoryOpen(true);
                        }
                      }}
                      className="self-start md:self-center px-4 py-2.5 rounded-xl bg-[#24356F] hover:bg-[#1B2854] text-white text-xs font-semibold flex items-center gap-2 transition-all shadow-xs shrink-0 cursor-pointer group"
                    >
                      <Sparkles className="w-4 h-4 text-[#38D399]" />
                      <span>
                        {currentLang === 'uz'
                          ? "Tarix sahifasini ochish"
                          : currentLang === 'ru'
                            ? "Открыть страницу истории"
                            : "View Full History Page"}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-white/70 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>

                  {/* 4 Quick Highlights Pills */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4 mt-4 border-t border-[#DDE2EF]/70 text-xs">
                    <div className="p-2.5 rounded-xl bg-white/80 border border-[#DDE2EF]">
                      <span className="text-[10px] font-mono text-[#8A91A3] block uppercase">1987-yil</span>
                      <span className="font-bold text-[#1B1F2A] block text-xs mt-0.5">Prof. M.A. Azizov</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/80 border border-[#DDE2EF]">
                      <span className="text-[10px] font-mono text-[#8A91A3] block uppercase">1991–2000 MITL</span>
                      <span className="font-bold text-[#1B1F2A] block text-xs mt-0.5">25 Patent, 300+ Maqola</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/80 border border-[#DDE2EF]">
                      <span className="text-[10px] font-mono text-[#8A91A3] block uppercase">Jami Natija</span>
                      <span className="font-bold text-[#12715A] block text-xs mt-0.5">1000+ Modda, ~40 Dori</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/80 border border-[#DDE2EF]">
                      <span className="text-[10px] font-mono text-[#8A91A3] block uppercase">2025 Natija</span>
                      <span className="font-bold text-[#24356F] block text-xs mt-0.5">IF 36.3 (Q1 Jurnal)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* License & Accreditation Subsection */}
              <div className="pt-2">
                {/* Dual Certificate Showcase Cards */}
                <div className="space-y-6">
                  {/* CARD 1: O'z DSt ISO/IEC 17025:2019 Akkreditatsiya Guvohnomasi */}
                  <div className="glass-card rounded-2xl p-4 sm:p-6 border border-[#DDE2EF] shadow-sm bg-white/95">
                    <div className="flex flex-col lg:flex-row gap-6 items-center lg:items-start">
                      {/* Thumbnail */}
                      <div className="w-full sm:w-64 lg:w-72 shrink-0">
                        <CometCard rotateDepth={15}>
                          <div className="relative rounded-xl overflow-hidden border-2 border-[#DDE2EF] bg-white shadow-md hover:shadow-xl hover:border-[#12715A] transition-all duration-300">
                            <img
                              src="/certificate.jpg"
                              alt={t.licenseCertName}
                              loading="lazy"
                              decoding="async"
                              className="w-full h-auto object-cover block"
                            />
                          </div>
                        </CometCard>
                      </div>

                      {/* Details */}
                      <div className="flex-1 w-full space-y-3.5">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#E3F1EC] text-[#12715A] border border-[#A7D7C5]">
                            {t.licenseStandard}
                          </span>
                          <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#E6EAF5] text-[#24356F] border border-[#CCD6ED]">
                            № {t.licenseRegNumber}
                          </span>
                        </div>

                        <div>
                          <h4 className="text-base sm:text-lg font-bold font-display text-[#1B1F2A] leading-snug">
                            {t.licenseCertName}
                          </h4>
                          <p className="text-xs sm:text-sm text-[#24356F] font-semibold font-body mt-1">
                            {t.licenseOrgName}
                          </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-[#DDE2EF] text-xs">
                          <div className="p-2.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                            <span className="text-[#8A91A3] block text-[10px] uppercase font-mono tracking-wider font-semibold">
                              {currentLang === 'uz' ? 'Akkreditatsiya organi' : currentLang === 'ru' ? 'Орган аккредитации' : 'Accreditation Body'}
                            </span>
                            <span className="text-[#1B1F2A] font-semibold mt-0.5 block">
                              {t.licenseIssuer}
                            </span>
                          </div>

                          <div className="p-2.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                            <span className="text-[#8A91A3] block text-[10px] uppercase font-mono tracking-wider font-semibold">
                              {currentLang === 'uz' ? 'Standart talabi' : currentLang === 'ru' ? 'Требование стандарта' : 'Standard Specification'}
                            </span>
                            <span className="text-[#1B1F2A] font-semibold mt-0.5 block">
                              {t.licenseStandardDesc}
                            </span>
                          </div>

                          <div className="p-2.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                            <span className="text-[#8A91A3] block text-[10px] uppercase font-mono tracking-wider font-semibold">
                              {currentLang === 'uz' ? 'Berilgan sana' : currentLang === 'ru' ? 'Дата выдачи' : 'Issue Date'}
                            </span>
                            <span className="font-mono text-[#1B1F2A] font-semibold mt-0.5 block">
                              {t.licenseDate}
                            </span>
                          </div>

                          <div className="p-2.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                            <span className="text-[#8A91A3] block text-[10px] uppercase font-mono tracking-wider font-semibold">
                              {currentLang === 'uz' ? 'Amal qilish muddati' : currentLang === 'ru' ? 'Срок действия' : 'Validity Period'}
                            </span>
                            <span className="font-mono text-[#12715A] font-bold mt-0.5 block">
                              {t.licenseExpiry}
                            </span>
                          </div>
                        </div>

                        <div className="p-2.5 rounded-lg bg-[#F3F5FB]/70 border border-[#DDE2EF] text-[11px] text-[#5C6478] space-y-1">
                          <div className="flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5 text-[#12715A] shrink-0" />
                            <span><strong className="text-[#1B1F2A]">ILAC-MRA:</strong> {t.licenseRecognition}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-[11px]">
                            <Building2 className="w-3.5 h-3.5 text-[#24356F] shrink-0" />
                            <span>{t.licenseAddress}</span>
                          </div>
                        </div>

                        <div className="pt-1 flex flex-wrap items-center gap-3">
                          <a
                            href="https://akkred.uz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#24356F] hover:text-[#12715A] transition-colors"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>{t.licenseVerify}</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CARD 2: O'zDSt 2762:2018 GLP – Zarur Laboratoriya Amaliyoti Sertifikati */}
                  <div className="glass-card rounded-2xl p-4 sm:p-6 border border-[#DDE2EF] shadow-sm bg-white/95">
                    <div className="flex flex-col lg:flex-row gap-6 items-center lg:items-start">
                      {/* Thumbnail & Page Switcher */}
                      <div className="w-full sm:w-64 lg:w-72 shrink-0">
                        {/* Page Tabs */}
                        <div className="flex items-center gap-1.5 mb-2 p-1 bg-[#F3F5FB] rounded-lg border border-[#DDE2EF]">
                          <button
                            type="button"
                            onClick={() => setGlpPage(1)}
                            className={`flex-1 py-1 px-2 rounded-md text-[11px] font-mono font-bold transition-all cursor-pointer ${glpPage === 1
                              ? 'bg-[#12715A] text-white shadow-xs'
                              : 'text-[#5C6478] hover:text-[#1B1F2A]'
                              }`}
                          >
                            {t.glpPage1Label}
                          </button>
                          <button
                            type="button"
                            onClick={() => setGlpPage(2)}
                            className={`flex-1 py-1 px-2 rounded-md text-[11px] font-mono font-bold transition-all cursor-pointer ${glpPage === 2
                              ? 'bg-[#12715A] text-white shadow-xs'
                              : 'text-[#5C6478] hover:text-[#1B1F2A]'
                              }`}
                          >
                            {t.glpPage2Label}
                          </button>
                        </div>

                        <CometCard rotateDepth={15}>
                          <div className="relative rounded-xl overflow-hidden border-2 border-[#DDE2EF] bg-white shadow-md hover:shadow-xl hover:border-[#12715A] transition-all duration-300">
                            <img
                              src={glpPage === 1 ? '/glp-certificate-p1.jpg' : '/glp-certificate-p2.jpg'}
                              alt={t.glpCertName}
                              loading="lazy"
                              decoding="async"
                              className="w-full h-auto object-cover block"
                            />
                          </div>
                        </CometCard>
                      </div>

                      {/* Details */}
                      <div className="flex-1 w-full space-y-3.5">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#E3F1EC] text-[#12715A] border border-[#A7D7C5]">
                            {t.glpStandard}
                          </span>
                          <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#E6EAF5] text-[#24356F] border border-[#CCD6ED]">
                            {t.glpRegNumber}
                          </span>
                        </div>

                        <div>
                          <h4 className="text-base sm:text-lg font-bold font-display text-[#1B1F2A] leading-snug">
                            {t.glpCertName}
                          </h4>
                          <p className="text-xs sm:text-sm text-[#24356F] font-semibold font-body mt-1">
                            {t.glpOrgName}
                          </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-[#DDE2EF] text-xs">
                          <div className="p-2.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                            <span className="text-[#8A91A3] block text-[10px] uppercase font-mono tracking-wider font-semibold">
                              {currentLang === 'uz' ? 'Tasdiqlovchi organ' : currentLang === 'ru' ? 'Орган сертификации' : 'Certifying Body'}
                            </span>
                            <span className="text-[#1B1F2A] font-semibold mt-0.5 block">
                              {t.glpIssuer}
                            </span>
                          </div>

                          <div className="p-2.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                            <span className="text-[#8A91A3] block text-[10px] uppercase font-mono tracking-wider font-semibold">
                              {currentLang === 'uz' ? 'Standart talabi' : currentLang === 'ru' ? 'Требование стандарта' : 'Standard Specification'}
                            </span>
                            <span className="text-[#1B1F2A] font-semibold mt-0.5 block">
                              {t.glpStandardDesc}
                            </span>
                          </div>

                          <div className="p-2.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                            <span className="text-[#8A91A3] block text-[10px] uppercase font-mono tracking-wider font-semibold">
                              {currentLang === 'uz' ? 'Berilgan sana' : currentLang === 'ru' ? 'Дата выдачи' : 'Issue Date'}
                            </span>
                            <span className="font-mono text-[#1B1F2A] font-semibold mt-0.5 block">
                              {t.glpDate}
                            </span>
                          </div>

                          <div className="p-2.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                            <span className="text-[#8A91A3] block text-[10px] uppercase font-mono tracking-wider font-semibold">
                              {currentLang === 'uz' ? 'Amal qilish muddati' : currentLang === 'ru' ? 'Срок действия' : 'Validity Period'}
                            </span>
                            <span className="font-mono text-[#12715A] font-bold mt-0.5 block">
                              {t.glpExpiry}
                            </span>
                          </div>
                        </div>

                        <div className="p-2.5 rounded-lg bg-[#F3F5FB]/70 border border-[#DDE2EF] text-[11px] text-[#5C6478] space-y-1">
                          <div className="flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5 text-[#12715A] shrink-0" />
                            <span><strong className="text-[#1B1F2A]">{currentLang === 'uz' ? 'Inspeksiya' : currentLang === 'ru' ? 'Инспекция' : 'Inspection'}:</strong> {t.glpInspection}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-[11px]">
                            <Mail className="w-3.5 h-3.5 text-[#24356F] shrink-0" />
                            <span><strong className="text-[#1B1F2A]">{currentLang === 'uz' ? 'Aloqa' : currentLang === 'ru' ? 'Контакты' : 'Contact'}:</strong> {t.glpContact}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-[11px]">
                            <Send className="w-3.5 h-3.5 text-[#229ED9] shrink-0" />
                            <span><strong className="text-[#1B1F2A]">Telegram:</strong> <a href="https://t.me/atsharipov" target="_blank" rel="noopener noreferrer" className="text-[#229ED9] hover:underline font-mono">@atsharipov</a></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Staff Subsection */}
              <div className="pt-2">
                <div className="flex items-center justify-between mb-3.5 border-b border-[#DDE2EF] pb-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#E6EAF5] flex items-center justify-center">
                      <Users className="w-4 h-4 text-[#24356F]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-display font-bold text-[#1B1F2A]">
                        {sectionStaffHeader.title}
                      </h3>
                      <p className="text-xs text-[#5C6478] font-body">
                        {sectionStaffHeader.subtitle}
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#E3F1EC] text-[#12715A] uppercase hidden sm:inline-block">
                    {sectionStaffHeader.tag}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {staffMembers.map((member, idx) => (
                    <div
                      key={idx}
                      className="glass-card rounded-2xl flex flex-col sm:flex-row overflow-hidden"
                    >
                      {/* Photo: 42% of card width, clean without overlays */}
                      <div className="w-full sm:w-[42%] relative shrink-0 min-h-[155px] sm:min-h-[165px] bg-[#F3F5FB] border-b sm:border-b-0 sm:border-r border-[#DDE2EF] overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover object-top"
                        />
                      </div>

                      <div className="w-full sm:w-[58%] p-4 flex flex-col justify-between">
                        <div>
                          <h4
                            className="text-xs sm:text-sm font-bold font-display text-[#1B1F2A] leading-snug line-clamp-2"
                            title={member.name}
                          >
                            {member.name}
                          </h4>
                          <p className="text-[11px] text-[#24356F] font-body font-medium mt-1 leading-tight line-clamp-2">
                            {member.title[currentLang]}
                          </p>
                        </div>

                        <div className="pt-2.5 mt-2 border-t border-[#DDE2EF] flex items-center justify-between text-[11px] font-mono text-[#5C6478]">
                          <span className="truncate pr-1 text-[#12715A] font-medium">
                            {member.room[currentLang]}
                          </span>
                          <a
                            href={`mailto:${member.email}`}
                            className="text-[#24356F] hover:text-[#12715A] p-1 rounded-md hover:bg-[#F3F5FB]"
                            title={member.email}
                          >
                            <Mail className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4 Pillars */}
              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#24356F] mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#12715A]" />
                  <span>{t.aboutPillarsTitle}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {pillars.map((pillar, idx) => (
                    <div
                      key={idx}
                      className="glass-card rounded-xl p-4 flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-bold font-display text-[#1B1F2A]">
                          {pillar.title}
                        </h4>
                        <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#E6EAF5] text-[#24356F]">
                          {pillar.code}
                        </span>
                      </div>
                      <p className="text-xs text-[#5C6478] font-body leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-white/90 border-t border-[#DDE2EF] flex items-center justify-between">
              <span className="text-xs font-mono text-[#5C6478]">
                SLIPC &bull; Toshkent Farmatsevtika Instituti
              </span>
              <button
                onClick={onClose}
                className="btn-pharmi btn-pharmi-primary text-xs px-5 py-2"
              >
                {t.closeModal}
              </button>
            </div>
          </motion.div>

          {/* Fullscreen History Page Modal (fallback if not provided by parent) */}
          {!onOpenHistory && (
            <HistoryModal
              isOpen={isHistoryOpen}
              onClose={() => setIsHistoryOpen(false)}
              currentLang={currentLang}
            />
          )}
        </div>
      )}
    </AnimatePresence>
  );
};
