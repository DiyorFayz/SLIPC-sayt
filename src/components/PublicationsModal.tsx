'use client';

import React, { useState, useEffect } from 'react';
import { Language } from '@/types/laboratory';
import { TRANSLATIONS } from '@/data/translations';
import { LAB_PUBLICATIONS } from '@/data/laboratoryData';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ChevronDown, ChevronUp, Award } from 'lucide-react';

interface PublicationsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const PublicationsModal: React.FC<PublicationsModalProps> = ({
  isOpen,
  onClose,
  currentLang,
}) => {
  const t = TRANSLATIONS[currentLang];
  const [expandedAbstracts, setExpandedAbstracts] = useState<Record<string, boolean>>({});

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

  const toggleAbstract = (id: string) => {
    setExpandedAbstracts((prev) => ({ ...prev, [id]: !prev[id] }));
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
                    src={currentLang === 'uz' ? '/logo-ifbil.webp' : '/logo-slipc.webp'}
                    alt={currentLang === 'uz' ? 'IFBIL' : 'SLIPC'}
                    className="w-12 h-12 rounded-lg object-contain bg-white"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="font-mono text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#E6EAF5] text-[#24356F] inline-flex items-center gap-1.5 uppercase">
                      <Award className="w-3.5 h-3.5 text-[#12715A]" />
                      Scopus Q1/Q2 // Bibliometrics
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1B1F2A] font-display">
                    {t.publicationsTitle}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#5C6478] mt-1 font-body">
                    {t.publicationsSubtitle}
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
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4 bg-[#F3F5FB]/40">
              {LAB_PUBLICATIONS.map((pub) => {
                const isExpanded = !!expandedAbstracts[pub.id];
                return (
                  <div key={pub.id} className="glass-card rounded-2xl p-5">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2 text-xs font-mono text-[#5C6478]">
                          <span className="font-bold px-2.5 py-0.5 rounded-full bg-[#E3F1EC] text-[#12715A] uppercase">
                            Scopus {pub.quartile}
                          </span>
                          <span>
                            IF: <strong className="text-[#24356F]">{pub.impactFactor}</strong>
                          </span>
                          <span>&bull;</span>
                          <span>{pub.year}</span>
                          <span>&bull;</span>
                          <span className="italic text-[#5C6478]">{pub.journal}</span>
                        </div>

                        <h3 className="text-base font-bold font-display text-[#1B1F2A] leading-snug">
                          {pub.title[currentLang]}
                        </h3>

                        <p className="text-xs text-[#5C6478] mt-1.5 font-body">
                          <strong className="text-[#1B1F2A]">Mualliflar:</strong> {pub.authors}
                        </p>

                        <div className="flex flex-wrap items-center gap-1.5 mt-3">
                          {pub.topics.map((tp, idx) => (
                            <span
                              key={idx}
                              className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[#F3F5FB] text-[#5C6478] border border-[#DDE2EF]"
                            >
                              #{tp}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center sm:flex-col sm:items-end gap-2 shrink-0">
                        <a
                          href={`https://doi.org/${pub.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-pharmi btn-pharmi-primary text-xs font-mono px-3.5 py-1.5 inline-flex items-center gap-1.5"
                        >
                          <span>DOI</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>

                        <button
                          onClick={() => toggleAbstract(pub.id)}
                          className="px-2.5 py-1 text-xs font-medium text-[#24356F] hover:text-[#12715A] inline-flex items-center gap-1 cursor-pointer"
                        >
                          <span>{isExpanded ? 'Yopish' : 'Annotatsiya'}</span>
                          {isExpanded ? (
                            <ChevronUp className="w-3.5 h-3.5" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>

                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-4 pt-4 border-t border-[#DDE2EF] text-xs text-[#5C6478] font-body leading-relaxed bg-[#F3F5FB]/80 rounded-xl p-4"
                      >
                        <p className="font-bold text-[#24356F] font-mono uppercase mb-1">
                          Annotatsiya (Abstract):
                        </p>
                        <p className="leading-relaxed">{pub.abstract[currentLang]}</p>
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div className="p-4 bg-white/90 border-t border-[#DDE2EF] flex items-center justify-between">
              <span className="text-xs font-mono text-[#5C6478]">
                Jami: {LAB_PUBLICATIONS.length} ta ilmiy maqola
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
