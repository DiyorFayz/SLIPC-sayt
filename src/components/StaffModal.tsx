'use client';

import React, { useEffect } from 'react';
import { Language } from '@/types/laboratory';
import { TRANSLATIONS } from '@/data/translations';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Users, Mail, ExternalLink, Award } from 'lucide-react';

interface StaffModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const StaffModal: React.FC<StaffModalProps> = ({
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

  const staffMembers = [
    {
      name: "Professor Avez Sharipov, DSc",
      image: "/staff/sharipov.jpg",
      title: {
        uz: "SLIPC laboratoriya mudiri, professor",
        ru: "Заведующий лабораторией SLIPC, профессор",
        en: "Head of SLIPC Laboratory, Professor"
      },
      room: {
        uz: "In Vivo & Farmakologiya",
        ru: "In Vivo & Фармакология",
        en: "In Vivo & Pharmacology"
      },
      roomCode: "LAB-PH-102",
      orcid: "0000-0001-9231-778X",
      email: "a.sharipov@slipc-lab.uz",
      focus: {
        uz: "Preklinik farmakologiya, toksikologiya, sport farmakologiyasi va adaptogenlar",
        ru: "Доклиническая фармакология, токсикология, спортивная фармакология и адаптогены",
        en: "Preclinical pharmacology, toxicology, sports pharmacology and adaptogens"
      },
      color: "#24356F"
    },
    {
      name: "Tulyaganov Bobir Sobirovich",
      image: "/staff/tulyaganov.svg",
      title: {
        uz: "Katta ilmiy xodim, PhD",
        ru: "Старший научный сотрудник, PhD",
        en: "Senior Research Scientist, PhD"
      },
      room: {
        uz: "HPLC & Bioanaliz",
        ru: "ВЭЖХ & Биоанализ",
        en: "HPLC & Bioanalysis"
      },
      roomCode: "LAB-HP-201",
      orcid: "0000-0002-3419-8821",
      email: "b.tulyaganov@slipc-lab.uz",
      focus: {
        uz: "RP-HPLC-DAD/FLD bioanalitika, moddalar standartlashtirish, sifat nazorati va ICH validatsiyasi",
        ru: "ВЭЖХ-DAD/FLD биоаналитика, стандартизация субстанций, контроль качества и валидация ICH",
        en: "RP-HPLC-DAD/FLD bioanalysis, chemical standardization, quality control and ICH validation"
      },
      color: "#12715A"
    },
    {
      name: "Gulyamov Shohid Sharofutdin o'g'li",
      image: "/staff/gulyamov.svg",
      title: {
        uz: "Katta ilmiy xodim, PhD",
        ru: "Старший научный сотрудник, PhD",
        en: "Senior Research Scientist, PhD"
      },
      room: {
        uz: "In Vitro & Kletka",
        ru: "In Vitro & Клетки",
        en: "In Vitro & Cell Biology"
      },
      roomCode: "LAB-IV-101",
      orcid: "0000-0003-4512-7104",
      email: "sh.gulyamov@slipc-lab.uz",
      focus: {
        uz: "Hujayra kulturalari, in vitro sitotoksiklik (MTT test), apoptoz mexanizmlari va o'sma skriningi",
        ru: "Клеточные культуры, цитотоксичность in vitro (тест MTT), механизмы апоптоза и противоопуховый скрининг",
        en: "Cell culture lines, in vitro cytotoxicity assays (MTT), apoptosis pathways and antitumor screening"
      },
      color: "#24356F"
    },
    {
      name: "Fayzullayev Diyorbek To'xtasinovich",
      image: "/staff/fayzullayev.svg",
      title: {
        uz: "Kichik ilmiy xodim",
        ru: "Младший научный сотрудник",
        en: "Junior Research Scientist"
      },
      room: {
        uz: "Fitokimyo & Farm Tech",
        ru: "Фитохимия & Фармтех",
        en: "Phytochemistry & Pharm Tech"
      },
      roomCode: "LAB-PC-301",
      orcid: "0000-0001-8874-3392",
      email: "d.fayzullayev@slipc-lab.uz",
      focus: {
        uz: "Dorivor o'simliklar ekstraksiyasi, biologik faol moddalarni ajratish, vakuum bug'latish va liofilizatsiya",
        ru: "Экстракция лекарственных растений, выделение БАВ, вакуумное концентрирование и лиофилизация",
        en: "Medicinal plant extraction, isolation of bioactive metabolites, vacuum concentration and freeze-drying"
      },
      color: "#12715A"
    },
    {
      name: "Sulaymonova Nigina Jamshid qizi",
      image: "/staff/sulaymonova.svg",
      title: {
        uz: "Kichik ilmiy xodim",
        ru: "Младший научный сотрудник",
        en: "Junior Research Scientist"
      },
      room: {
        uz: "Biokimyo & Enzimologiya",
        ru: "Биохимия & Энзимология",
        en: "Biochemistry & Enzymology"
      },
      roomCode: "LAB-BC-202",
      orcid: "0000-0002-1980-6218",
      email: "n.sulaymonova@slipc-lab.uz",
      focus: {
        uz: "Enzimatik kinetika, antioksidant faollik (DPPH, FRAP, ABTS), lipidlar peroksidatsiyasi va IFA tahlillari",
        ru: "Ферментативная кинетика, антиоксидантная активность (DPPH, FRAP, ABTS), ПОЛ и иммуноферментный анализ",
        en: "Enzyme kinetics, antioxidant assays (DPPH, FRAP, ABTS), lipid peroxidation markers and ELISA"
      },
      color: "#24356F"
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
            className="relative w-full sm:max-w-6xl glass-modal sm:rounded-2xl overflow-hidden flex flex-col max-h-[92vh] z-10"
          >
            {/* Top Brand Gradient Strip */}
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
                      <Users className="w-3.5 h-3.5 text-[#12715A]" />
                      Scientific Faculty &amp; Researchers
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1B1F2A] font-display">
                    {t.sectionStaffTitle}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#5C6478] mt-1 font-body">
                    {t.sectionStaffSubtitle}
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
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 bg-[#F3F5FB]/40">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {staffMembers.map((member, idx) => (
                  <div
                    key={idx}
                    className="glass-card rounded-2xl flex flex-col sm:flex-row overflow-hidden group"
                  >
                    {/* 1. Photo Container: 42% of card width, zero overlays */}
                    <div className="w-full sm:w-[42%] relative shrink-0 min-h-[260px] sm:min-h-[290px] bg-[#F3F5FB] border-b sm:border-b-0 sm:border-r border-[#DDE2EF] overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* 2. Information Container: 58% of card width */}
                    <div className="w-full sm:w-[58%] p-5 sm:p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[11px] font-mono font-semibold text-[#12715A] bg-[#E3F1EC] px-2.5 py-0.5 rounded-full">
                            {member.room[currentLang]}
                          </span>
                        </div>

                        <h3 className="text-base sm:text-lg font-display font-bold text-[#1B1F2A] leading-snug">
                          {member.name}
                        </h3>
                        <p className="text-xs text-[#24356F] font-body font-semibold mt-1">
                          {member.title[currentLang]}
                        </p>

                        <p className="text-xs text-[#5C6478] mt-3 leading-relaxed font-body">
                          <strong className="text-[#1B1F2A] font-semibold">
                            {t.staffResearchFocusLabel}
                          </strong>{' '}
                          {member.focus[currentLang]}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-[#DDE2EF] flex flex-col gap-1.5 text-xs font-mono">
                        <a
                          href={`https://orcid.org/${member.orcid}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#24356F] hover:text-[#12715A] hover:underline inline-flex items-center gap-1.5 font-medium"
                        >
                          <Award className="w-3.5 h-3.5 text-[#12715A]" />
                          <span>ORCID: {member.orcid}</span>
                          <ExternalLink className="w-3 h-3 text-[#8A91A3]" />
                        </a>
                        <a
                          href={`mailto:${member.email}`}
                          className="text-[#5C6478] hover:text-[#24356F] inline-flex items-center gap-1.5"
                        >
                          <Mail className="w-3.5 h-3.5 text-[#8A91A3]" />
                          <span>{member.email}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-white/90 border-t border-[#DDE2EF] flex items-center justify-between">
              <span className="text-xs font-mono text-[#5C6478]">
                {t.staffBadgeCount}
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
