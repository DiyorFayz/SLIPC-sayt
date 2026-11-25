'use client';

import React, { useEffect } from 'react';
import { SOPDocument, Language } from '@/types/laboratory';
import { TRANSLATIONS } from '@/data/translations';
import { X } from 'lucide-react';

interface SOPViewerModalProps {
  sop: SOPDocument | null;
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const SOPViewerModal: React.FC<SOPViewerModalProps> = ({
  sop,
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

  if (!isOpen || !sop) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#101F52]/30 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl glass-modal rounded-2xl overflow-hidden flex flex-col h-[94vh] sm:h-[90vh] max-h-[94vh] overscroll-contain"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Brand Accent Bar */}
        <div className="h-1 w-full bg-gradient-to-r from-[#24356F] via-[#344A94] to-[#12715A] shrink-0" />

        {/* Header */}
        <div className="p-6 border-b border-[#DDE2EF] flex justify-between items-start gap-4 bg-white/80">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#E6EAF5] text-[#24356F] uppercase">
                {sop.code}
              </span>
              <span className="font-mono text-xs font-medium text-[#5C6478]">
                v{sop.version}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-display font-bold tracking-tight text-[#1B1F2A]">
              {sop.title[currentLang]}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl border border-[#DDE2EF] bg-white text-[#5C6478] hover:text-[#24356F] hover:bg-[#F3F5FB] transition-colors shrink-0 cursor-pointer"
            aria-label={t.closeModal}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain ios-momentum-scroll modal-scroll-area p-6 space-y-6 text-sm bg-[#F3F5FB]/40">
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#24356F] mb-2">
              Maqsad (Purpose)
            </h3>
            <p className="p-4 rounded-xl bg-white/95 border border-[#DDE2EF] text-[#1B1F2A]/90 leading-relaxed font-body shadow-sm">
              {sop.purpose[currentLang]}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-white/95 border border-[#DDE2EF] text-xs font-mono shadow-sm">
            <div>
              <p className="font-semibold text-[#5C6478] uppercase mb-1">{t.sopApprovedBy}:</p>
              <p className="text-[#1B1F2A] font-bold">{sop.author}</p>
            </div>
            <div>
              <p className="font-semibold text-[#5C6478] uppercase mb-1">Kategoriya:</p>
              <p className="text-[#12715A] font-bold">{sop.category}</p>
            </div>
          </div>

          {/* Steps */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#24356F] mb-3.5">
              {t.sopSteps}
            </h3>
            <div className="space-y-3">
              {sop.steps.map((step) => (
                <div
                  key={step.step}
                  className="glass-card rounded-xl p-4 flex gap-4 items-start"
                >
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg bg-[#24356F] text-white shrink-0">
                    {String(step.step).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="text-sm font-display font-bold text-[#1B1F2A]">
                      {step.title[currentLang]}
                    </p>
                    <p className="text-sm text-[#5C6478] leading-relaxed mt-1 font-body">
                      {step.desc[currentLang]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#DDE2EF] flex justify-end bg-white/90">
          <button
            onClick={onClose}
            className="btn-pharmi btn-pharmi-primary text-xs px-5 py-2"
          >
            {t.closeModal}
          </button>
        </div>
      </div>
    </div>
  );
};
