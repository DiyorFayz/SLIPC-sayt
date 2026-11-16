'use client';

import React, { useEffect } from 'react';
import { Language } from '@/types/laboratory';
import { TRANSLATIONS } from '@/data/translations';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Globe2, Building2 } from 'lucide-react';

interface CapabilityPassportModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const CapabilityPassportModal: React.FC<CapabilityPassportModalProps> = ({
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
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="font-mono text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#E3F1EC] text-[#12715A] inline-flex items-center gap-1.5 uppercase">
                      <Globe2 className="w-3.5 h-3.5" />
                      EU HORIZON PIC: 912048192
                    </span>
                    <span className="text-xs font-mono text-[#5C6478]">
                      ISO/IEC 17025 &bull; BSL-2
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1B1F2A] font-display">
                    Horizon Europe Capability Statement
                  </h2>
                  <p className="text-xs sm:text-sm text-[#5C6478] mt-1 font-body">
                    Xalqaro tadqiqot konsortsiumlari va grant dasturlari uchun rasmiy laboratoriya pasporti
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
            <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6 bg-[#F3F5FB]/40">
              {/* Entity Overview */}
              <div className="p-5 rounded-2xl bg-white/95 border border-[#DDE2EF] shadow-sm">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#24356F] mb-3.5 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#12715A]" />
                  <span>Yuridik va Institutsional Ma&apos;lumotlar</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-3.5 rounded-xl bg-[#F3F5FB] border border-[#DDE2EF]">
                    <span className="text-[#5C6478] block text-[10px] uppercase">MUASSASA NOMI:</span>
                    <span className="font-bold text-[#1B1F2A] font-display text-xs mt-1 block">
                      SLIPC Innovatsion farmatsevtik birikmalar ilmiy laboratoriyasi
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#F3F5FB] border border-[#DDE2EF]">
                    <span className="text-[#5C6478] block text-[10px] uppercase">EUROPEAN PIC CODE:</span>
                    <span className="font-bold text-[#24356F] text-sm mt-1 block">912048192</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#F3F5FB] border border-[#DDE2EF]">
                    <span className="text-[#5C6478] block text-[10px] uppercase">STATUS:</span>
                    <span className="font-bold text-[#12715A] mt-1 block">Validated Research Entity (Active)</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#F3F5FB] border border-[#DDE2EF]">
                    <span className="text-[#5C6478] block text-[10px] uppercase">MUVOFIQLIK:</span>
                    <span className="font-bold text-[#1B1F2A] mt-1 block">ISO/IEC 17025, BSL-2, ISO 14644-1, OECD GLP</span>
                  </div>
                </div>
              </div>

              {/* Research Scope */}
              <div>
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#24356F] mb-3">
                  Konsortsium Doirasidagi Asosiy Paketlar (Work Packages)
                </h3>
                <div className="space-y-3 text-xs font-body text-[#5C6478]">
                  <div className="glass-card rounded-xl p-4 flex items-start gap-3.5">
                    <span className="font-mono font-bold px-2.5 py-1 rounded-lg bg-[#E6EAF5] text-[#24356F] shrink-0">
                      WP-1
                    </span>
                    <div>
                      <strong className="text-[#1B1F2A] block mb-1 font-display text-sm">
                        In Vitro Preclinical Screening
                      </strong>
                      Inson va sut emizuvchilar hujayra liniyalarida MTT/MTS sitotoksiklik, IC50 aniqlash, mitoxondrial funksiyalar va apoptoz monitoringi.
                    </div>
                  </div>
                  <div className="glass-card rounded-xl p-4 flex items-start gap-3.5">
                    <span className="font-mono font-bold px-2.5 py-1 rounded-lg bg-[#E3F1EC] text-[#12715A] shrink-0">
                      WP-2
                    </span>
                    <div>
                      <strong className="text-[#1B1F2A] block mb-1 font-display text-sm">
                        HPLC Bioanalytical Fingerprinting
                      </strong>
                      Agilent 1260 Infinity II DAD xromatografiyasida bioaktiv substansiyalarni ICH Q2(R1) talablariga mos sifat va miqdoriy validatsiyalash.
                    </div>
                  </div>
                  <div className="glass-card rounded-xl p-4 flex items-start gap-3.5">
                    <span className="font-mono font-bold px-2.5 py-1 rounded-lg bg-[#E6EAF5] text-[#24356F] shrink-0">
                      WP-3
                    </span>
                    <div>
                      <strong className="text-[#1B1F2A] block mb-1 font-display text-sm">
                        In Vivo Ergometry &amp; Acute Toxicity
                      </strong>
                      OECD 423 xalqaro yo&apos;riqnomasi asosida kemiruvchilarda o&apos;tkir toksiklik, yallig&apos;lanishga qarshi faollik va antioksidant fermentlar (SOD, CAT, MDA) tahlili.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-white/90 border-t border-[#DDE2EF] flex items-center justify-between">
              <span className="text-xs font-mono text-[#5C6478]">
                SLIPC Capability Dossier &bull; PIC: 912048192
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
