'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Language } from '@/types/laboratory';
import { TRANSLATIONS } from '@/data/translations';
import {
  RESEARCH_PROJECTS,
  PROJECTS_YEAR_STATS,
  PROJECTS_SUMMARY,
} from '@/data/projectsData';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Search,
  ExternalLink,
  Users,
  BookOpen,
  BarChart3,
  TrendingUp,
  Sparkles,
  Layers,
  Award,
} from 'lucide-react';

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const ProjectsModal: React.FC<ProjectsModalProps> = ({
  isOpen,
  onClose,
  currentLang,
}) => {
  const t = TRANSLATIONS[currentLang];
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

  // Filter projects by search query, SORTED from NEWEST to OLDEST (2026 -> 2022)
  const filteredProjects = useMemo(() => {
    return RESEARCH_PROJECTS.filter((item) => {
      const query = searchQuery.trim().toLowerCase();
      if (!query) return true;

      const titleMatch =
        item.title[currentLang]?.toLowerCase().includes(query) ||
        item.originalTitle.toLowerCase().includes(query) ||
        item.title.uz.toLowerCase().includes(query) ||
        item.title.ru.toLowerCase().includes(query) ||
        item.title.en.toLowerCase().includes(query);

      const matchesQuery =
        titleMatch ||
        item.authors.toLowerCase().includes(query) ||
        item.journal.toLowerCase().includes(query) ||
        item.year.toString().includes(query) ||
        item.database[currentLang]?.toLowerCase().includes(query);

      return matchesQuery;
    }).sort((a, b) => a.id - b.id);
  }, [searchQuery, currentLang]);

  // Year badges styled for clean white background
  const yearColors: Record<number, { bg: string; text: string; border: string }> = {
    2022: { bg: 'bg-slate-100', text: 'text-slate-700', border: 'border-slate-300' },
    2023: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
    2024: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
    2025: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-300' },
    2026: { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200' },
  };

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
            className="fixed inset-0 bg-[#101F52]/40 backdrop-blur-sm"
          />

          {/* Modal Container: OQ ORQA FON (CLEAN WHITE THEME) */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ type: 'spring', duration: 0.32, bounce: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full sm:max-w-5xl glass-modal sm:rounded-2xl overflow-hidden flex flex-col max-h-[92vh] z-10 shadow-2xl bg-white"
          >
            {/* Top Brand Accent Bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#24356F] via-[#344A94] to-[#12715A] shrink-0" />

            {/* Header: Clean White */}
            <div className="p-5 sm:p-6 bg-white/95 border-b border-[#DDE2EF] flex flex-col sm:flex-row justify-between items-start gap-4 shrink-0">
              <div className="flex items-start gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#24356F] to-[#12715A] text-white flex items-center justify-center shadow-md shrink-0">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1B1F2A] font-display">
                    {t.projectsTitle}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#5C6478] mt-0.5 font-body line-clamp-1 sm:line-clamp-none">
                    {t.projectsSubtitle}
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

            {/* Search Bar: Clean White */}
            <div className="px-5 sm:px-7 py-3 bg-white/90 border-b border-[#DDE2EF] shrink-0">
              <div className="relative w-full">
                <Search className="w-4 h-4 text-[#8A91A3] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t.projectsSearchPlaceholder}
                  className="w-full pl-10 pr-9 py-2 text-xs sm:text-sm bg-[#F3F5FB] border border-[#DDE2EF] rounded-xl text-[#1B1F2A] placeholder:text-[#8A91A3] focus:outline-none focus:ring-2 focus:ring-[#24356F]/20 focus:border-[#24356F] transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
                    aria-label="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Scrollable Body: Oq / Yengil fon (#F3F5FB/40) */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-7 bg-[#F3F5FB]/40">
              {/* ========================================================= */}
              {/* 1. STATISTICAL SUMMARY & CONCLUSION AT THE VERY TOP       */}
              {/* ========================================================= */}
              <div className="space-y-5">
                {/* Section Header */}
                <div className="flex items-center justify-between pb-2 border-b border-[#DDE2EF]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#E3F1EC] text-[#12715A] flex items-center justify-center shrink-0">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold font-display text-[#1B1F2A]">
                        {t.projectsStatsHeading}
                      </h3>
                      <p className="text-xs text-[#5C6478]">
                        {t.projectsStatsSubheading}
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#E6EAF5] text-[#24356F] uppercase hidden sm:inline-block">
                    2026 &larr; 2022
                  </span>
                </div>

                {/* 4 Metric Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="glass-card rounded-xl p-3.5 bg-white border border-[#DDE2EF] shadow-xs">
                    <span className="text-[10px] uppercase font-mono text-[#8A91A3] block font-semibold">
                      {t.projectsTotalLabel}
                    </span>
                    <span className="font-mono text-2xl font-bold text-[#24356F] block mt-0.5">
                      {PROJECTS_SUMMARY.total} ta
                    </span>
                    <span className="text-[11px] text-[#5C6478] font-body mt-0.5 block">
                      {t.projectsPeriodLabel}
                    </span>
                  </div>

                  <div className="glass-card rounded-xl p-3.5 bg-[#E3F1EC]/40 border border-[#A7D7C5] shadow-xs">
                    <span className="text-[10px] uppercase font-mono text-[#12715A] block font-semibold">
                      {t.projectsPeakYearLabel}
                    </span>
                    <span className="font-mono text-2xl font-bold text-[#12715A] block mt-0.5">
                      2025{t.projectsYearSuffix}
                    </span>
                    <span className="text-[11px] text-[#12715A] font-semibold mt-0.5 block">
                      11 {t.projectsArticlesLabel} (50%)
                    </span>
                  </div>

                  <div className="glass-card rounded-xl p-3.5 bg-white border border-[#DDE2EF] shadow-xs">
                    <span className="text-[10px] uppercase font-mono text-[#8A91A3] block font-semibold">
                      {t.projectsGrowthLabel}
                    </span>
                    <span className="font-mono text-2xl font-bold text-purple-700 block mt-0.5">
                      {PROJECTS_SUMMARY.growthRate}
                    </span>
                    <span className="text-[11px] text-[#5C6478] font-body mt-0.5 block">
                      {currentLang === 'uz' ? "Eksponensial o'sish" : currentLang === 'ru' ? 'Экспоненциальный рост' : 'Exponential surge'}
                    </span>
                  </div>

                  <div className="glass-card rounded-xl p-3.5 bg-white border border-[#DDE2EF] shadow-xs">
                    <span className="text-[10px] uppercase font-mono text-[#8A91A3] block font-semibold">
                      {t.projectsIndexLabel}
                    </span>
                    <span className="font-mono text-2xl font-bold text-[#12715A] block mt-0.5">
                      100%
                    </span>
                    <span className="text-[11px] text-[#5C6478] font-body mt-0.5 block">
                      Scopus &bull; Web of Science
                    </span>
                  </div>
                </div>

                {/* Annual Dynamics Progress Bars */}
                <div className="glass-card rounded-2xl p-4 sm:p-5 bg-white border border-[#DDE2EF] shadow-xs">
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#DDE2EF]">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-[#12715A]" />
                      <h4 className="text-xs sm:text-sm font-bold font-display text-[#1B1F2A]">
                        {t.projectsShareHeading}
                      </h4>
                    </div>
                    <span className="font-mono text-xs text-[#5C6478]">
                      2026 &larr; 2022
                    </span>
                  </div>

                  <div className="space-y-3">
                    {PROJECTS_YEAR_STATS.slice().reverse().map((stat) => (
                      <div key={stat.year} className="space-y-1">
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="font-bold text-[#1B1F2A] flex items-center gap-2">
                            <span>{stat.year}{t.projectsYearSuffix}</span>
                            {stat.year === 2025 && (
                              <span className="text-[10px] font-sans px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 font-semibold">
                                {t.projectsPeakTag}
                              </span>
                            )}
                          </span>
                          <span className="text-[#5C6478]">
                            <strong>{stat.count}</strong> {t.projectsArticlesLabel} ({stat.percentage}%)
                          </span>
                        </div>
                        <div className="w-full h-2.5 bg-[#F3F5FB] rounded-full overflow-hidden border border-[#DDE2EF]">
                          <div
                            className="h-full rounded-full transition-all duration-500"
                            style={{
                              width: `${(stat.count / 11) * 100}%`,
                              backgroundColor: stat.color,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Analytical Conclusion Box */}
                <div className="glass-card rounded-2xl p-4 sm:p-5 bg-gradient-to-br from-white via-white to-[#E3F1EC]/30 border-2 border-[#A7D7C5] shadow-xs">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#12715A] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-xs sm:text-sm font-bold font-display text-[#1B1F2A]">
                        {t.projectsConclusionHeading}
                      </h4>
                      <p className="text-xs text-[#5C6478] font-body leading-relaxed whitespace-pre-line">
                        {t.projectsConclusionText}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ========================================================= */}
              {/* 2. REGISTRY HEADER & 22 PROJECT SUBSECTIONS               */}
              {/* ========================================================= */}
              <div className="pt-2 space-y-4">
                {/* Header without the requested removed text */}
                <div className="flex items-center justify-between pb-2 border-b border-[#DDE2EF]">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#24356F]" />
                    <h3 className="text-sm font-bold font-display text-[#1B1F2A]">
                      {t.projectsListHeading}
                    </h3>
                  </div>
                </div>

                {/* 22 Projects Cards: Sorted Newest to Oldest on White */}
                {filteredProjects.length === 0 ? (
                  <div className="glass-card rounded-2xl p-10 text-center text-[#5C6478]">
                    <p className="text-sm font-medium">{t.projectsNoResults}</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredProjects.map((project) => {
                      const yearStyle = yearColors[project.year] || yearColors[2024];
                      const localizedTitle = project.title[currentLang] || project.originalTitle;
                      const localizedDatabase = project.database[currentLang] || 'Scopus';

                      return (
                        <div
                          key={project.id}
                          id={`project-${project.id}`}
                          className="glass-card rounded-2xl p-4 sm:p-5 border border-[#DDE2EF] hover:border-[#24356F]/40 transition-all shadow-xs bg-white/95"
                        >
                          {/* Card Header: Number, Year, Database Badges */}
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded-md bg-[#24356F] text-white">
                                #{project.id}
                              </span>
                              <span
                                className={`font-mono text-xs font-bold px-2.5 py-0.5 rounded-full border ${yearStyle.bg} ${yearStyle.text} ${yearStyle.border}`}
                              >
                                {project.year}{t.projectsYearSuffix}
                              </span>
                              <span className="font-mono text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#E3F1EC] text-[#12715A] border border-[#A7D7C5]">
                                {localizedDatabase}
                              </span>
                            </div>

                            {project.doiUrl && (
                              <a
                                href={project.doiUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#24356F] hover:text-[#12715A] p-1 rounded hover:bg-[#F3F5FB] transition-colors"
                                title={project.doi}
                              >
                                <span>DOI</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            )}
                          </div>

                          {/* Localized Article Title */}
                          <h4 className="text-sm sm:text-base font-bold font-display text-[#1B1F2A] leading-snug">
                            {localizedTitle}
                          </h4>

                          {/* Original English Title (shown when language is uz or ru) */}
                          {currentLang !== 'en' && (
                            <p className="text-[11px] text-[#5C6478] italic font-body mt-1 leading-tight">
                              <span className="not-italic font-semibold text-[#8A91A3] mr-1">
                                [{t.projectsOriginalTitleLabel}]:
                              </span>
                              {project.originalTitle}
                            </p>
                          )}

                          {/* Authors */}
                          <div className="flex items-start gap-2 text-xs text-[#5C6478] mt-2.5 font-body">
                            <Users className="w-3.5 h-3.5 text-[#24356F] shrink-0 mt-0.5" />
                            <div>
                              <span className="font-semibold text-[#1B1F2A]/90 mr-1.5">
                                {t.projectsAuthorsLabel}:
                              </span>
                              <span>{project.authors}</span>
                            </div>
                          </div>

                          {/* Journal info */}
                          <div className="flex items-start gap-2 text-xs text-[#5C6478] font-body pt-2 mt-2 border-t border-[#DDE2EF]/70">
                            <BookOpen className="w-3.5 h-3.5 text-[#12715A] shrink-0 mt-0.5" />
                            <div>
                              <span className="font-semibold text-[#1B1F2A]/90 mr-1.5">
                                {t.projectsJournalLabel}:
                              </span>
                              <span className="font-medium text-[#24356F]">
                                {project.journal}
                              </span>
                            </div>
                          </div>

                          {/* Direct DOI Button if present */}
                          {project.doiUrl && (
                            <div className="mt-3 pt-2.5 border-t border-[#DDE2EF]/60 flex items-center justify-between text-[11px]">
                              <span className="font-mono text-[#8A91A3] truncate max-w-xs sm:max-w-md">
                                {project.doi}
                              </span>
                              <a
                                href={project.doiUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-pharmi btn-pharmi-ghost text-xs px-3 py-1 inline-flex items-center gap-1.5"
                              >
                                <span>{t.projectsDoiButton}</span>
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Footer: Clean White */}
            <div className="p-4 bg-white/95 border-t border-[#DDE2EF] flex items-center justify-between shrink-0">
              <span className="text-xs font-mono text-[#5C6478] truncate max-w-sm sm:max-w-none">
                SLIPC &bull; Toshkent Farmatsevtika Instituti &bull; 2026 &larr; 2022
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
