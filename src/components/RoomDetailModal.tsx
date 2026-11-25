'use client';

import React, { useEffect, useState } from 'react';
import { LabRoom, Language } from '@/types/laboratory';
import { TRANSLATIONS } from '@/data/translations';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ShieldCheck,
  Microscope,
  Sparkles,
  FileCheck2,
  User,
  MapPin,
  ExternalLink,
  BookOpen,
  ArrowRight,
  Maximize2,
  Dna,
  CheckCircle2,
  Users,
  Layers,
  Activity,
} from 'lucide-react';

interface RoomDetailModalProps {
  room: LabRoom | null;
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onOpenSOPModal?: (sopCode: string) => void;
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({
  room,
  isOpen,
  onClose,
  currentLang,
  onOpenSOPModal,
}) => {
  const t = TRANSLATIONS[currentLang];
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    number: number;
  } | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
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
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && room && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 overflow-hidden overscroll-contain">
          {/* Soft Frosted Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#101F52]/30 backdrop-blur-sm"
          />

          {/* Glass Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ type: 'spring', duration: 0.32, bounce: 0 }}
            onClick={(e) => e.stopPropagation()}
            className={`relative w-full ${
              room.researchPillars && room.researchPillars.length > 0
                ? 'sm:max-w-5xl'
                : 'sm:max-w-4xl'
            } glass-modal rounded-t-2xl sm:rounded-lg overflow-hidden flex flex-col max-h-[92dvh] z-10 transition-all duration-300`}
          >
            {/* Top Pharmaceutical Accent Line */}
            <div className="h-1 w-full bg-gradient-to-r from-[#0F2942] via-[#1E3D5F] to-[#108A54] shrink-0" />

            {/* Modal Header */}
            <div className="p-4 sm:p-6 bg-white/95 border-b border-[#E2E8F0] flex flex-col sm:flex-row justify-between items-start gap-4">
              <div className="flex items-start gap-3.5 sm:gap-4 flex-1">
                <div className="p-1 rounded-lg bg-white border border-[#E2E8F0] shadow-sm shrink-0 hidden sm:block">
                  <img
                    src={currentLang === 'uz' ? '/logo-ifbil.webp' : '/logo-slipc.webp'}
                    alt={currentLang === 'uz' ? 'IFBIL' : 'SLIPC'}
                    className="w-12 h-12 rounded-md object-contain bg-white"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg sm:text-2xl font-bold tracking-tight text-[#0F2942] font-display">
                    {room.title[currentLang]}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#475569] mt-0.5 font-body">
                    {room.subTitle[currentLang]}
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

            {/* Modal Body */}
            {(room.researchPillars && room.researchPillars.length > 0) || room.vivariumDetails ? (
              <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain ios-momentum-scroll modal-scroll-area p-4 sm:p-7 bg-[#F4F6F9] ios-momentum-scroll overscroll-contain">
                {/* Department Intro / Highlight Banner */}
                {room.fullFocus && room.fullFocus[currentLang] && (
                  <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#24356F]/6 via-[#12715A]/6 to-[#E6EAF5]/40 border border-[#DDE2EF] flex items-start gap-3.5 shadow-2xs">
                    <div className="p-2 rounded-xl bg-white border border-[#DDE2EF] text-[#12715A] shrink-0 mt-0.5 shadow-xs">
                      <ShieldCheck className="w-5 h-5 text-[#12715A]" />
                    </div>
                    <div className="text-xs sm:text-sm text-[#24356F] leading-relaxed font-body font-medium">
                      <p>{room.fullFocus[currentLang]}</p>
                    </div>
                  </div>
                )}

                {/* ATCC Standard Cell Lines Repository Showcase */}
                {room.cellLinesList && room.cellLinesList.length > 0 && (
                  <div className="mb-6 bg-white rounded-2xl border border-[#DDE2EF] p-5 sm:p-6 shadow-xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-[#DDE2EF]">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-[#EBF5FF] text-[#0072CE] border border-[#BFDBFE]">
                          <Dna className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm sm:text-base font-bold font-display text-[#1B1F2A] flex items-center gap-2">
                            <span>
                              {currentLang === 'uz'
                                ? "ATCC Standart Hujayra Liniyalari Banki"
                                : currentLang === 'ru'
                                ? "Банк стандартных клеточных линий ATCC"
                                : "ATCC Standard Cell Line Repository"}
                            </span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#12715A]/10 text-[#12715A] border border-[#12715A]/20 font-bold">
                              Verified ATCC, USA
                            </span>
                          </h4>
                          <p className="text-xs text-[#5C6478] font-body mt-0.5">
                            {currentLang === 'uz'
                              ? "Laboratoriyada in vitro tadqiqotlar va skrining sinovlari uchun qo'llaniladigan autentifikatsiyalangan hujayra kulturalari"
                              : currentLang === 'ru'
                              ? "Аутентифицированные клеточные культуры для скрининговых и фармакологических исследований in vitro"
                              : "Authenticated cell cultures utilized for pharmacological screening and toxicity profiling in vitro"}
                          </p>
                        </div>
                      </div>
                      <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-full bg-[#F3F5FB] text-[#24356F] border border-[#DDE2EF] self-start sm:self-center">
                        {room.cellLinesList.length}{" "}
                        {currentLang === 'uz' ? "ta liniya" : currentLang === 'ru' ? "линий" : "cell lines"}
                      </span>
                    </div>

                    {/* Cell Lines Badges / Cards Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 sm:gap-3">
                      {room.cellLinesList.map((cell, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-xl bg-[#F8FAFC] border border-[#DDE2EF] hover:border-[#0072CE] hover:bg-white hover:shadow-sm transition-all duration-200 flex flex-col justify-between group"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs font-bold font-mono text-[#0072CE] group-hover:text-[#24356F] transition-colors">
                                {cell.name}
                              </span>
                              <span
                                className="w-2 h-2 rounded-full shrink-0"
                                style={{ backgroundColor: cell.badgeColor || '#0072CE' }}
                              />
                            </div>
                            <p className="text-[11px] font-bold text-[#1B1F2A] leading-tight mb-1">
                              {cell.category[currentLang]}
                            </p>
                          </div>
                          <p className="text-[10px] text-[#8A91A3] font-body leading-tight pt-1.5 border-t border-slate-200/60 truncate" title={cell.origin[currentLang]}>
                            {cell.origin[currentLang]}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Research Pillars: Only when room.researchPillars exists and has items */}
                {room.researchPillars && room.researchPillars.length > 0 && (
                  <>
                    {/* Section Header */}
                    <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#DDE2EF]">
                      <div>
                        <h3 className="text-base sm:text-lg font-bold font-display text-[#1B1F2A] flex items-center gap-2">
                          <Sparkles className="w-5 h-5 text-[#24356F]" />
                          <span>
                            {currentLang === 'uz'
                              ? "Asosiy Ilmiy Yo'nalishlar va Tadqiqot Platformalari"
                              : currentLang === 'ru'
                              ? "Ключевые научные направления и исследовательские платформы"
                              : "Key Research Directions & Computational Platforms"}
                          </span>
                        </h3>
                        <p className="text-xs text-[#5C6478] mt-0.5 font-body">
                          {currentLang === 'uz'
                            ? "Bo'lim doirasida olib borilayotgan fundamental va amaliy tadqiqot modullari"
                            : currentLang === 'ru'
                            ? "Фундаментальные и прикладные исследовательские модули отдела"
                            : "Fundamental and applied research modules within the department"}
                        </p>
                      </div>
                      <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-white border border-[#DDE2EF] text-[#24356F] shadow-2xs self-start sm:self-center">
                        {room.researchPillars.length}{' '}
                        {currentLang === 'uz'
                          ? "ta yo'nalish"
                          : currentLang === 'ru'
                          ? 'направления'
                          : 'directions'}
                      </span>
                    </div>

                    {/* 2x2 Pillars Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                      {room.researchPillars.map((pillar) => (
                        <div
                          key={pillar.id}
                          className="bg-white rounded-2xl border border-[#DDE2EF] overflow-hidden shadow-xs hover:shadow-md hover:border-[#24356F]/40 transition-all duration-300 flex flex-col group"
                        >
                          {/* Image Frame */}
                          <div
                            onClick={() =>
                              setSelectedImage({
                                src: pillar.image,
                                title: pillar.title[currentLang],
                                number: pillar.number,
                              })
                            }
                            style={{ aspectRatio: '16 / 10' }}
                            className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900 cursor-pointer group/img"
                            title={
                              currentLang === 'uz'
                                ? "Rasmni to'liq ekranda ko'rish"
                                : 'Посмотреть изображение / View image'
                            }
                          >
                            {pillar.image.includes('bacterial-endotoxin') && (
                              <img
                                src={pillar.image}
                                alt=""
                                loading="lazy"
                                decoding="async"
                                className="absolute inset-0 w-full h-full object-cover blur-lg opacity-35 scale-125"
                              />
                            )}
                            <img
                              src={pillar.image}
                              alt={pillar.title[currentLang]}
                              loading="lazy"
                              decoding="async"
                              className={`relative z-10 w-full h-full ${
                                pillar.image.includes('bacterial-endotoxin')
                                  ? 'object-contain py-1'
                                  : pillar.image.includes('pyrogenicity')
                                  ? 'object-cover object-[50%_35%] scale-105'
                                  : 'object-cover object-center'
                              } group-hover/img:scale-105 transition-transform duration-500 ease-out`}
                            />
                            {/* Gradient Vignette */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

                            {/* Number Badge */}
                            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white font-mono text-xs font-bold shadow-xs">
                              {String(pillar.number).padStart(2, '0')}
                            </div>

                            {/* Zoom Hint */}
                            <div className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-white/90 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center gap-1 text-[11px] font-medium shadow-xs">
                              <Maximize2 className="w-3.5 h-3.5" />
                              <span className="pr-1 hidden sm:inline">
                                {currentLang === 'uz'
                                  ? 'Kattalashtirish'
                                  : currentLang === 'ru'
                                  ? 'Увеличить'
                                  : 'Zoom'}
                              </span>
                            </div>
                          </div>

                          {/* Content Card Body */}
                          <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                            <div>
                              <h4 className="text-base font-bold font-display text-[#1B1F2A] group-hover:text-[#24356F] transition-colors leading-snug mb-1.5">
                                {pillar.title[currentLang]}
                              </h4>
                              <p className="text-xs sm:text-sm text-[#5C6478] font-body leading-relaxed mb-3">
                                {pillar.description[currentLang]}
                              </p>
                            </div>

                            {/* Technical Tags */}
                            <div className="flex flex-wrap gap-1.5 pt-2.5 border-t border-slate-100">
                              {pillar.tags.map((tag, tagIdx) => (
                                <span
                                  key={tagIdx}
                                  className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-md bg-[#F3F5FB] text-[#24356F] border border-[#DDE2EF]"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* Vivarium Real Facility Showcase Image */}
                {room.category === 'vivariy' && (
                  <div className="mb-6 rounded-2xl overflow-hidden border border-[#DDE2EF] bg-slate-900 shadow-xs relative">
                    <div
                      style={{ aspectRatio: '16 / 9' }}
                      className="relative w-full aspect-[16/9] max-h-[380px] overflow-hidden"
                    >
                      <img
                        src="/images/vivariy/vivarium-rabbits-facility.jpg"
                        alt="Eksperimental Vivariy Majmuasi"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                      {/* Photo Badge Label */}
                      <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between text-white pointer-events-none">
                        <div>
                          <span className="font-mono text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[#0D9488] inline-block mb-1">
                            GLP Standartidagi Vivariy Infratuzilmasi
                          </span>
                          <h4 className="text-xs sm:text-sm font-bold font-display text-white drop-shadow-sm">
                            {currentLang === 'uz'
                              ? "Eksperimental quyonlar majmuasi va mobil saqlash batareyalari"
                              : currentLang === 'ru'
                              ? "Экспериментальный модуль содержания кроликов"
                              : "Experimental Rabbit Facility & Mobile Battery Housing"}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Vivarium Animal Models Showcase */}
                {room.category === 'vivariy' && (room.vivariumDetails?.animalModels || (room.cellLinesOrModels && room.cellLinesOrModels.length > 0)) && (
                  <div className="mt-8 bg-white rounded-2xl border border-[#DDE2EF] p-5 sm:p-6 shadow-xs">
                    <div className="flex items-center gap-3 pb-4 mb-5 border-b border-[#DDE2EF]">
                      <div className="p-2 rounded-xl bg-[#E6F4F1] text-[#0D9488] border border-[#0D9488]/20">
                        <Activity className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-bold font-display text-[#1B1F2A]">
                          {currentLang === 'uz'
                            ? "Vivariyda Parvarishlanadigan Laboratoriya Hayvonlari"
                            : currentLang === 'ru'
                            ? "Виды лабораторных животных вивария"
                            : "Laboratory Animal Species Housed in Vivarium"}
                        </h4>
                        <p className="text-xs text-[#5C6478] font-body mt-0.5">
                          {currentLang === 'uz'
                            ? "GLP standartlariga muvofiq akkreditatsiyalangan eksperimental modellar"
                            : currentLang === 'ru'
                            ? "Аккредитованные модели для доклинических испытаний по стандартам GLP"
                            : "Validated models utilized for GLP-compliant preclinical testing"}
                        </p>
                      </div>
                    </div>

                    {room.vivariumDetails?.animalModels && room.vivariumDetails.animalModels.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {room.vivariumDetails.animalModels.map((animal, idx) => (
                          <div
                            key={idx}
                            className="group rounded-xl border border-[#DDE2EF] bg-[#F8FAFC] overflow-hidden hover:border-[#0D9488]/50 hover:shadow-md transition-all duration-300 flex flex-col"
                          >
                            {/* Animal Image */}
                            <div
                              style={{ aspectRatio: '4 / 3' }}
                              className="relative w-full aspect-[4/3] overflow-hidden bg-slate-100 border-b border-[#DDE2EF]"
                            >
                              <img
                                src={animal.image}
                                alt={animal.name[currentLang]}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                              
                              {/* Top Strain Badge */}
                              <div className="absolute top-2.5 right-2.5 pointer-events-none">
                                <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[#2DD4BF]">
                                  {animal.strain.split(',')[0]}
                                </span>
                              </div>

                              {/* Bottom Scientific Name */}
                              <div className="absolute bottom-2 left-3 right-3 pointer-events-none">
                                <span className="text-[10px] italic font-mono text-white/90 drop-shadow-xs">
                                  {animal.scientificName}
                                </span>
                              </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-4 flex-1 flex flex-col justify-between bg-white">
                              <div>
                                <h5 className="font-bold text-xs sm:text-sm text-[#1B1F2A] font-display group-hover:text-[#0D9488] transition-colors leading-snug">
                                  {animal.name[currentLang]}
                                </h5>
                                <p className="text-[11px] font-mono text-[#0D9488] font-medium mt-1 leading-tight">
                                  {animal.strain}
                                </p>
                                <p className="text-xs text-[#5C6478] font-body mt-2 leading-relaxed">
                                  {animal.description[currentLang]}
                                </p>
                              </div>

                              {/* Tags */}
                              <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-[#F1F3F9]">
                                {animal.tags.map((tag, tIdx) => (
                                  <span
                                    key={tIdx}
                                    className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-md bg-[#E6F4F1] text-[#0A5C54] border border-[#0D9488]/20"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                        {room.cellLinesOrModels?.map((model, idx) => (
                          <div
                            key={idx}
                            className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#DDE2EF] flex items-center gap-2.5"
                          >
                            <span className="w-2 h-2 rounded-full bg-[#0D9488] shrink-0" />
                            <span className="text-xs font-semibold text-[#1B1F2A] font-body">
                              {model}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Vivarium Specialized Architecture & Standards Section */}
                {room.vivariumDetails && (
                  <div className="mt-8 space-y-8">
                    {/* 1. Functional Zones */}
                    <div className="bg-white rounded-2xl border border-[#DDE2EF] p-5 sm:p-6 shadow-xs">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-5 border-b border-[#DDE2EF]">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-xl bg-[#E6F4F1] text-[#0D9488] border border-[#0D9488]/20">
                            <Layers className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-sm sm:text-base font-bold font-display text-[#1B1F2A]">
                              {currentLang === 'uz'
                                ? "Vivariy Funktsional Zonalari (GLP Arxitekturasi)"
                                : currentLang === 'ru'
                                ? "Функциональные зоны вивария (Архитектура GLP)"
                                : "Vivarium Functional Zones (GLP Architecture)"}
                            </h4>
                            <p className="text-xs text-[#5C6478] font-body mt-0.5">
                              {currentLang === 'uz'
                                ? "GLP talablari asosida toza va iflos oqimlarni ajratish hamda xavfsizlik zonalari"
                                : currentLang === 'ru'
                                ? "Разделение чистых и грязных потоков и зонирование по стандартам GLP"
                                : "Strict separation of clean/dirty corridors and safety zones per GLP"}
                            </p>
                          </div>
                        </div>
                        <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-[#E6F4F1] text-[#0D9488] border border-[#0D9488]/30 self-start sm:self-center">
                          7 {currentLang === 'uz' ? 'ta zona' : currentLang === 'ru' ? 'зон' : 'zones'}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                        {room.vivariumDetails.zones.map((zone) => (
                          <div
                            key={zone.number}
                            className="p-4 rounded-xl bg-[#F8FAFC] border border-[#DDE2EF] hover:border-[#0D9488]/40 hover:bg-white hover:shadow-xs transition-all duration-200 flex flex-col justify-between"
                          >
                            <div>
                              <div className="flex items-center justify-between gap-2 mb-2">
                                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#E6F4F1] text-[#0D9488] border border-[#0D9488]/20">
                                  0{zone.number}
                                </span>
                              </div>
                              <h5 className="text-xs sm:text-sm font-bold font-display text-[#1B1F2A] mb-1.5 leading-snug">
                                {zone.name[currentLang]}
                              </h5>
                              <p className="text-xs text-[#5C6478] font-body leading-relaxed">
                                {zone.description[currentLang]}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 2. Quality & Compliance Checklist */}
                    <div className="bg-white rounded-2xl border border-[#DDE2EF] p-5 sm:p-6 shadow-xs">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-5 border-b border-[#DDE2EF]">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-xl bg-[#E3F1EC] text-[#12715A] border border-[#12715A]/20">
                            <CheckCircle2 className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-sm sm:text-base font-bold font-display text-[#1B1F2A]">
                              {currentLang === 'uz'
                                ? "Vivariy Sifat Mezonlari va Doimiy Monitoring (Checklist)"
                                : currentLang === 'ru'
                                ? "Критерии качества и чеклист соответствия"
                                : "Quality Criteria & Compliance Checklist"}
                            </h4>
                            <p className="text-xs text-[#5C6478] font-body mt-0.5">
                              {currentLang === 'uz'
                                ? "Vivariy faoliyati xalqaro darajada sifatli va GLP standartlariga mosligini ko'rsatuvchi indikatorlar"
                                : currentLang === 'ru'
                                ? "Индикаторы безупречной работы вивария и соответствия стандартам GLP и 3R"
                                : "Key operational indicators demonstrating international GLP & 3R compliance"}
                            </p>
                          </div>
                        </div>
                        <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-[#E3F1EC] text-[#12715A] border border-[#12715A]/30 self-start sm:self-center">
                          100% GLP / 3R
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                        {room.vivariumDetails.checklist.map((item, idx) => (
                          <div
                            key={idx}
                            className="p-4 rounded-xl bg-[#F8FAFC] border border-[#DDE2EF] flex items-start gap-3"
                          >
                            <div className="p-1 rounded-md bg-[#E3F1EC] text-[#12715A] shrink-0 mt-0.5">
                              <CheckCircle2 className="w-4 h-4" />
                            </div>
                            <div>
                              <h5 className="text-xs sm:text-sm font-bold font-display text-[#1B1F2A] mb-1">
                                {item.criteria[currentLang]}
                              </h5>
                              <p className="text-xs text-[#5C6478] font-body leading-relaxed">
                                {item.detail[currentLang]}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Modal Body: Bo'sh qoldirilgan / Keyingi buyruq bilan to'ldiriladi */
              <div className="flex-1 overflow-y-auto p-8 sm:p-16 min-h-[420px] bg-white flex flex-col items-center justify-center text-center">
                <div className="max-w-md mx-auto space-y-3">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-[#F3F5FB] border border-[#DDE2EF] flex items-center justify-center text-[#24356F]/40 shadow-xs">
                    <BookOpen className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold font-display text-[#1B1F2A]">
                    {room.title[currentLang]}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8A91A3] font-mono leading-relaxed">
                    {currentLang === 'uz'
                      ? "Bo'lim ma'lumotlari sahifasi (Keyingi buyruq bilan to'ldiriladi)"
                      : currentLang === 'ru'
                      ? "Страница данных отдела (Ожидается наполнение)"
                      : "Department data page (Awaiting content update)"}
                  </p>
                </div>
              </div>
            )}

            {/* Modal Footer Bar */}
            <div className="p-4 bg-white/90 border-t border-[#DDE2EF] flex items-center justify-end gap-3 shrink-0">
              <button
                onClick={onClose}
                className="btn-pharmi btn-pharmi-primary text-xs px-5 py-2 cursor-pointer"
              >
                {t.closeModal}
              </button>
            </div>
          </motion.div>

          {/* High-Resolution Image Lightbox Modal */}
          <AnimatePresence>
            {selectedImage && (
              <div
                className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
                onClick={() => setSelectedImage(null)}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.2 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative max-w-4xl w-full max-h-[90vh] bg-[#0A1128] rounded-2xl overflow-hidden border border-white/20 shadow-2xl flex flex-col"
                >
                  <div className="p-4 bg-black/50 border-b border-white/10 flex items-center justify-between text-white">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-white/10 border border-white/20">
                        {String(selectedImage.number).padStart(2, '0')}
                      </span>
                      <h4 className="text-sm font-semibold truncate font-display">
                        {selectedImage.title}
                      </h4>
                    </div>
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                      aria-label="Close"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="p-2 sm:p-4 overflow-auto flex items-center justify-center bg-black/30">
                    <img
                      src={selectedImage.src}
                      alt={selectedImage.title}
                      decoding="async"
                      className="max-h-[75vh] w-auto max-w-full rounded-lg object-contain shadow-lg"
                    />
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      )}
    </AnimatePresence>
  );
};
