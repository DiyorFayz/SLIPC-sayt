'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { Language, StaffCategory } from '@/types/laboratory';
import { TRANSLATIONS } from '@/data/translations';
import { STAFF_MEMBERS } from '@/data/staffData';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Users, Mail, ExternalLink, Award, Search, CheckCircle2 } from 'lucide-react';
import { TelegramIcon } from '@/components/ui/TelegramIcon';

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
  const [selectedCategory, setSelectedCategory] = useState<StaffCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

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

  const categories: { key: StaffCategory; label: Record<Language, string> }[] = [
    {
      key: 'all',
      label: { uz: 'Barchasi', ru: 'Все', en: 'All' },
    },
    {
      key: 'leadership',
      label: { uz: 'Rahbariyat & Olimlar', ru: 'Руководство & Ученые', en: 'Leadership & Scientists' },
    },
    {
      key: 'quality',
      label: { uz: 'Sifat Nazorati (QA/GLP)', ru: 'Контроль качества (QA/GLP)', en: 'Quality Control (QA/GLP)' },
    },
    {
      key: 'researchers',
      label: { uz: 'Ilmiy Xodimlar', ru: 'Научные сотрудники', en: 'Researchers' },
    },
    {
      key: 'technicians',
      label: { uz: 'Laborantlar', ru: 'Лаборанты', en: 'Technicians' },
    },
  ];

  const filteredStaff = useMemo(() => {
    return STAFF_MEMBERS.filter((member) => {
      const matchesCategory =
        selectedCategory === 'all' || member.category === selectedCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const nameMatch = member.name.toLowerCase().includes(q);
      const titleMatch = member.title[currentLang].toLowerCase().includes(q);
      const roomMatch = member.room[currentLang].toLowerCase().includes(q);
      const focusMatch = member.focus[currentLang].toLowerCase().includes(q);

      return nameMatch || titleMatch || roomMatch || focusMatch;
    });
  }, [selectedCategory, searchQuery, currentLang]);

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
            className="relative w-full sm:max-w-6xl glass-modal rounded-t-2xl sm:rounded-lg overflow-hidden flex flex-col max-h-[92dvh] z-10"
          >
            {/* Top Brand Gradient Strip */}
            <div className="h-1 w-full bg-gradient-to-r from-[#0F2942] via-[#1E3D5F] to-[#108A54] shrink-0" />

            {/* Header */}
            <div className="p-4 sm:p-6 bg-white/95 border-b border-[#E2E8F0] flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                <div className="flex items-start gap-3.5 sm:gap-4">
                  <div className="p-1 rounded-lg bg-white border border-[#E2E8F0] shadow-sm shrink-0">
                    <img
                      src="/logo.webp"
                      alt="SLIPC"
                      className="w-12 h-12 rounded-md object-contain bg-white"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="font-mono text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#108A54]/10 text-[#108A54] border border-[#108A54]/20 inline-flex items-center gap-1.5 uppercase">
                        <Users className="w-3.5 h-3.5 text-[#108A54]" />
                        Scientific Faculty &amp; Laboratory Staff
                      </span>
                    </div>
                    <h2 className="text-lg sm:text-2xl font-bold tracking-tight text-[#0F2942] font-display">
                      {t.sectionStaffTitle}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#475569] mt-0.5 font-body">
                      {t.sectionStaffSubtitle}
                    </p>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-lg border border-[#E2E8F0] bg-white text-[#475569] hover:text-[#0F2942] hover:bg-[#F8FAFC] transition-colors shrink-0 cursor-pointer self-end sm:self-auto touch-manipulation"
                  aria-label={t.closeModal}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Filter Tabs & Search Bar */}
              <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 pt-2 border-t border-[#E6EAF5]">
                {/* Category Pills */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
                  {categories.map((cat) => {
                    const isActive = selectedCategory === cat.key;
                    const count =
                      cat.key === 'all'
                        ? STAFF_MEMBERS.length
                        : STAFF_MEMBERS.filter((m) => m.category === cat.key).length;

                    return (
                      <button
                        key={cat.key}
                        onClick={() => setSelectedCategory(cat.key)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium font-body transition-all whitespace-nowrap cursor-pointer inline-flex items-center gap-1.5 ${
                          isActive
                            ? 'bg-[#24356F] text-white shadow-xs font-semibold'
                            : 'bg-white/80 text-[#5C6478] hover:bg-[#F3F5FB] hover:text-[#1B1F2A] border border-[#DDE2EF]'
                        }`}
                      >
                        <span>{cat.label[currentLang]}</span>
                        <span
                          className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                            isActive
                              ? 'bg-white/20 text-white'
                              : 'bg-[#E6EAF5] text-[#24356F]'
                          }`}
                        >
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Search Input */}
                <div className="relative w-full md:w-64 shrink-0">
                  <Search className="w-4 h-4 text-[#8A91A3] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={
                      currentLang === 'uz'
                        ? 'Xodimlarni izlash...'
                        : currentLang === 'ru'
                        ? 'Поиск сотрудников...'
                        : 'Search staff...'
                    }
                    className="w-full pl-9 pr-8 py-1.5 text-xs bg-white border border-[#DDE2EF] rounded-lg text-[#1B1F2A] placeholder-[#8A91A3] focus:outline-none focus:border-[#24356F] transition-colors"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#8A91A3] hover:text-[#1B1F2A]"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 bg-[#F3F5FB]/40">
              {filteredStaff.length === 0 ? (
                <div className="text-center py-12 text-[#5C6478]">
                  <p className="text-sm">
                    {currentLang === 'uz'
                      ? 'Hech qanday xodim topilmadi'
                      : currentLang === 'ru'
                      ? 'Сотрудники не найдены'
                      : 'No staff members found'}
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                  {filteredStaff.map((member, idx) => (
                    <div
                      key={idx}
                      className="glass-card rounded-2xl flex flex-col sm:flex-row overflow-hidden group hover:border-[#24356F]/40 transition-all duration-300"
                    >
                      {/* 1. Photo Container */}
                      <div className="w-full sm:w-[38%] relative shrink-0 min-h-[220px] sm:min-h-[260px] bg-[#F3F5FB] border-b sm:border-b-0 sm:border-r border-[#DDE2EF] overflow-hidden flex items-center justify-center">
                        <img
                          src={member.image}
                          alt={member.name}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* 2. Information Container */}
                      <div className="w-full sm:w-[62%] p-5 flex flex-col justify-between">
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="text-[11px] font-mono font-semibold text-[#12715A] bg-[#E3F1EC] px-2.5 py-0.5 rounded-full">
                              {member.room[currentLang]}
                            </span>
                            <span className="text-[10px] font-mono font-semibold text-[#5C6478] bg-[#E6EAF5]/70 px-2 py-0.5 rounded-md">
                              {member.roomCode}
                            </span>
                          </div>

                          <h3 className="text-base sm:text-lg font-display font-bold text-[#1B1F2A] leading-snug">
                            {member.name}
                          </h3>
                          <p className="text-xs text-[#24356F] font-body font-semibold mt-1">
                            {member.title[currentLang]}
                          </p>

                          <p className="text-xs text-[#5C6478] mt-2.5 leading-relaxed font-body">
                            <strong className="text-[#1B1F2A] font-semibold">
                              {t.staffResearchFocusLabel}
                            </strong>{' '}
                            {member.focus[currentLang]}
                          </p>
                        </div>

                        <div className="mt-4 pt-3 border-t border-[#DDE2EF] flex flex-col gap-1.5 text-xs font-mono">
                          {member.orcid && (
                            <a
                              href={`https://orcid.org/${member.orcid}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#24356F] hover:text-[#12715A] hover:underline inline-flex items-center gap-1.5 font-medium"
                            >
                              <Award className="w-3.5 h-3.5 text-[#12715A] shrink-0" />
                              <span className="truncate">ORCID: {member.orcid}</span>
                              <ExternalLink className="w-3 h-3 text-[#8A91A3] shrink-0" />
                            </a>
                          )}
                          <a
                            href={`mailto:${member.email}`}
                            className="text-[#5C6478] hover:text-[#24356F] inline-flex items-center gap-1.5"
                          >
                            <Mail className="w-3.5 h-3.5 text-[#8A91A3] shrink-0" />
                            <span className="truncate">{member.email}</span>
                          </a>
                          {member.telegram && (
                            <a
                              href={member.telegram}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#24A1DE] hover:underline inline-flex items-center gap-1.5 font-medium"
                            >
                              <TelegramIcon className="w-3.5 h-3.5 shrink-0" />
                              <span className="truncate">Telegram: @atsharipov</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 bg-white/90 border-t border-[#DDE2EF] flex items-center justify-between">
              <span className="text-xs font-mono text-[#5C6478]">
                {filteredStaff.length} / {STAFF_MEMBERS.length} {t.staffBadgeCount}
              </span>
              <button
                onClick={onClose}
                className="btn-pharmi btn-pharmi-primary text-xs px-5 py-2 cursor-pointer"
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
