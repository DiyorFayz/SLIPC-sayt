'use client';

import React, { useState } from 'react';
import { Language } from '@/types/laboratory';
import { TRANSLATIONS } from '@/data/translations';
import { Search, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenSearch: () => void;
  onOpenAbout: () => void;
  onOpenProjects: () => void;
  onOpenEducation: () => void;
  onOpenNews: () => void;
  onOpenStaff: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  onOpenSearch,
  onOpenAbout,
  onOpenProjects,
  onOpenEducation,
  onOpenNews,
  onOpenStaff,
}) => {
  const t = TRANSLATIONS[currentLang];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navActions = [
    { name: t.navAbout, onClick: onOpenAbout },
    { name: t.navProjects, onClick: onOpenProjects },
    { name: t.navEducation, onClick: onOpenEducation },
    { name: t.navNews, onClick: onOpenNews },
    { name: t.navStaff, onClick: onOpenStaff },
  ];

  return (
    <header className="sticky top-0 z-40">
      {/* 1. Official Institutional Top Bar (pharmi.uz #24356F Navy) */}
      <div className="bg-[#24356F] text-white/95 py-1.5 px-4 sm:px-8 text-[11px] font-medium tracking-wide">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-[#38D399] shrink-0" />
            <span className="truncate font-body">
              Toshkent Farmatsevtika Instituti &bull; SLIPC Ilmiy Laboratoriyasi
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 shrink-0 text-white/80 font-mono text-[11px]">
            <span>pharmi.uz // research portal</span>
            <button
              onClick={onOpenSearch}
              className="hover:text-white flex items-center gap-1.5 cursor-pointer transition-colors"
            >
              <Search className="w-3 h-3" />
              <span>Ctrl + K</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Frosted White Glass Navigation Bar */}
      <div className="glass-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between gap-4">
          {/* Brand / Logo Mark */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <div className="p-0.5 rounded-xl bg-white border border-[#DDE2EF] shadow-sm group-hover:border-[#24356F]/40 transition-colors overflow-hidden">
              <img
                src="/logo.jpg"
                alt="SLIPC"
                className="w-10 h-10 rounded-lg object-contain bg-[#0A1128]"
              />
            </div>
            <div>
              <span className="text-lg sm:text-xl font-display font-extrabold tracking-tight text-[#24356F] leading-none block">
                SLIPC
              </span>
              <span className="text-[10px] font-mono font-semibold text-[#12715A] tracking-widest uppercase block mt-1">
                LABORATORIYASI
              </span>
            </div>
          </a>

          {/* Desktop Navigation Triggers */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold font-body">
            {navActions.map((action, idx) => (
              <button
                key={idx}
                onClick={action.onClick}
                className="text-[#1B1F2A]/80 hover:text-[#24356F] relative py-1 transition-colors cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#24356F] hover:after:w-full after:transition-all after:duration-200"
              >
                {action.name}
              </button>
            ))}
          </nav>

          {/* Right Controls: Quick Search & Language Switcher */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={onOpenSearch}
              className="btn-pharmi btn-pharmi-ghost px-3 py-1.5 text-xs hidden sm:inline-flex gap-2"
              title={t.searchButtonText}
            >
              <Search className="w-3.5 h-3.5 text-[#24356F]" />
              <span className="text-[#1B1F2A] font-medium">{t.searchButtonText}</span>
              <kbd className="text-[10px] font-mono text-[#5C6478] bg-[#F3F5FB] border border-[#DDE2EF] px-1.5 py-0.5 rounded">
                K
              </kbd>
            </button>

            {/* Multilingual Switcher */}
            <div className="flex items-center p-0.5 rounded-xl bg-[#F3F5FB] border border-[#DDE2EF]">
              {(['uz', 'ru', 'en'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => onLanguageChange(lang)}
                  className={`px-2.5 py-1 text-xs font-mono uppercase rounded-lg transition-all cursor-pointer ${
                    currentLang === lang
                      ? 'bg-[#24356F] text-white font-bold shadow-sm'
                      : 'text-[#5C6478] hover:text-[#24356F]'
                  }`}
                  aria-label={`Switch to ${lang.toUpperCase()}`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl border border-[#DDE2EF] bg-white/80 text-[#24356F] hover:bg-[#E6EAF5] transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#DDE2EF] bg-white/95 backdrop-blur-xl px-4 py-3 space-y-2 shadow-lg">
          {navActions.map((action, idx) => (
            <button
              key={idx}
              onClick={() => {
                setMobileMenuOpen(false);
                action.onClick();
              }}
              className="block w-full text-left px-3.5 py-2.5 text-sm font-semibold text-[#1B1F2A] hover:text-[#24356F] hover:bg-[#F3F5FB] rounded-xl transition-colors"
            >
              {action.name}
            </button>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenSearch();
            }}
            className="flex items-center gap-2 w-full text-left px-3.5 py-2.5 text-sm font-semibold text-[#24356F] bg-[#E6EAF5]/60 rounded-xl"
          >
            <Search className="w-4 h-4" />
            <span>{t.searchButtonText}</span>
          </button>
        </div>
      )}
    </header>
  );
};
