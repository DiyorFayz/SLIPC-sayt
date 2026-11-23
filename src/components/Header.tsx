'use client';

import React, { useState } from 'react';
import { Language } from '@/types/laboratory';
import { TRANSLATIONS } from '@/data/translations';
import { Search, Menu, X } from 'lucide-react';
import { GooeyInput } from '@/components/ui/gooey-input';

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
      {/* 1. Official Institutional Top Bar (pharmi.uz Deep Navy) */}
      <div className="bg-[#0F2942] text-white/95 py-1.5 px-4 sm:px-8 text-[11px] font-medium tracking-wide border-b border-[#1E3D5F]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-[#108A54] shrink-0" />
            <span className="truncate font-body">
              {currentLang === 'uz'
                ? 'Toshkent Farmatsevtika Instituti • IFBIL Ilmiy Laboratoriyasi'
                : currentLang === 'ru'
                ? 'Ташкентский фармацевтический институт • Научная лаборатория SLIPC'
                : 'Tashkent Pharmaceutical Institute • SLIPC Scientific Laboratory'}
            </span>
          </div>
        </div>
      </div>

      {/* 2. Frosted White Navigation Bar */}
      <div className="glass-header border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between gap-4">
          {/* Brand / Logo Mark */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <div className="p-1 rounded-lg bg-white border border-[#E2E8F0] shadow-2xs group-hover:border-[#0F2942]/40 transition-colors overflow-hidden">
              <img
                src={currentLang === 'uz' ? '/logo-ifbil.webp' : '/logo-slipc.webp'}
                alt={currentLang === 'uz' ? 'IFBIL' : 'SLIPC'}
                className="w-10 h-10 rounded-md object-contain bg-white"
              />
            </div>
            <div>
              <span className="text-lg sm:text-xl font-display font-extrabold tracking-tight text-[#0F2942] leading-none block">
                {currentLang === 'uz' ? 'IFBIL' : 'SLIPC'}
              </span>
              <span className="text-[10px] font-mono font-semibold text-[#108A54] tracking-widest uppercase block mt-1">
                {currentLang === 'uz' ? 'LABORATORIYASI' : currentLang === 'ru' ? 'ЛАБОРАТОРИЯ' : 'LABORATORY'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Triggers */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold font-body">
            {navActions.map((action, idx) => (
              <button
                key={idx}
                onClick={action.onClick}
                className="text-[#1B1F2A]/80 hover:text-[#0F2942] relative py-1 transition-colors cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#108A54] hover:after:w-full after:transition-all after:duration-200"
              >
                {action.name}
              </button>
            ))}
          </nav>

          {/* Right Controls: Quick Search & Language Switcher */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Gooey Animated Search Input */}
            <div className="hidden sm:block">
              <GooeyInput
                placeholder={t.searchButtonText || "Qidirish..."}
                onSubmit={() => onOpenSearch()}
              />
            </div>

            {/* Multilingual Switcher */}
            <div className="flex items-center p-0.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
              {(['uz', 'ru', 'en'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => onLanguageChange(lang)}
                  className={`px-2.5 py-1 text-xs font-mono uppercase rounded-md transition-all cursor-pointer ${
                    currentLang === lang
                      ? 'bg-[#0F2942] text-white font-bold shadow-2xs'
                      : 'text-[#64748B] hover:text-[#0F2942]'
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
              className="md:hidden p-2 rounded-lg border border-[#E2E8F0] bg-white text-[#0F2942] hover:bg-[#F8FAFC] transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer with iOS & Android Touch Optimization */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E2E8F0] bg-white/98 backdrop-blur-xl px-4 py-3 space-y-1.5 shadow-md ios-momentum-scroll">
          {navActions.map((action, idx) => (
            <button
              key={idx}
              onClick={() => {
                setMobileMenuOpen(false);
                action.onClick();
              }}
              className="block w-full text-left px-3.5 py-3 min-h-[44px] text-sm font-semibold text-[#1B1F2A] hover:text-[#0F2942] hover:bg-[#F8FAFC] active:bg-[#E2E8F0] rounded-lg transition-colors touch-manipulation cursor-pointer"
            >
              {action.name}
            </button>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenSearch();
            }}
            className="flex items-center gap-2.5 w-full text-left px-3.5 py-3 min-h-[44px] text-sm font-semibold text-[#0F2942] bg-[#F1F5F9] active:bg-[#E2E8F0] rounded-lg touch-manipulation cursor-pointer"
          >
            <Search className="w-4 h-4 text-[#108A54]" />
            <span>{t.searchButtonText}</span>
          </button>
        </div>
      )}
    </header>
  );
};
