'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Language } from '@/types/laboratory';
import { TRANSLATIONS } from '@/data/translations';
import { LAB_EQUIPMENT_DIRECTORY } from '@/data/laboratoryData';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search } from 'lucide-react';

interface EquipmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onOpenSOP?: (sopCode: string) => void;
}

export const EquipmentModal: React.FC<EquipmentModalProps> = ({
  isOpen,
  onClose,
  currentLang,
}) => {
  const t = TRANSLATIONS[currentLang];
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

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

  const categories = useMemo(() => {
    const set = new Set<string>();
    LAB_EQUIPMENT_DIRECTORY.forEach((item) => set.add(item.category));
    return ['all', ...Array.from(set)];
  }, []);

  const filteredEquipment = useMemo(() => {
    return LAB_EQUIPMENT_DIRECTORY.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.model.toLowerCase().includes(q) ||
        item.manufacturer.toLowerCase().includes(q) ||
        item.roomCode.toLowerCase().includes(q) ||
        item.scientificApplication[currentLang].toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory, currentLang]);

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
            className="relative w-full sm:max-w-5xl glass-modal sm:rounded-2xl overflow-hidden flex flex-col max-h-[92vh] z-10"
          >
            {/* Top Brand Accent Bar */}
            <div className="h-1 w-full bg-gradient-to-r from-[#24356F] via-[#344A94] to-[#12715A] shrink-0" />

            {/* Header */}
            <div className="p-5 sm:p-6 bg-white/80 border-b border-[#DDE2EF] flex flex-col sm:flex-row justify-between items-start gap-4">
              <div className="flex items-start gap-4">
                <div className="p-1 rounded-xl bg-white border border-[#DDE2EF] shadow-sm shrink-0">
                  <img
                    src="/logo.webp"
                    alt="SLIPC"
                    className="w-12 h-12 rounded-lg object-contain bg-white"
                  />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="font-mono text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#E3F1EC] text-[#12715A] uppercase tracking-wider">
                      SEC-EQ // REGISTRY
                    </span>
                    <span className="text-xs font-mono text-[#5C6478]">
                      {LAB_EQUIPMENT_DIRECTORY.length}{' '}
                      {currentLang === 'uz'
                        ? 'ta analitik asbob'
                        : currentLang === 'ru'
                        ? 'приборов'
                        : 'instruments'}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1B1F2A] font-display">
                    {t.equipmentRegistryTitle}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#5C6478] mt-1 font-body">
                    {t.equipmentRegistrySubtitle}
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

            {/* Controls: Search & Category Filter */}
            <div className="p-4 bg-[#F3F5FB]/80 border-b border-[#DDE2EF] flex flex-col sm:flex-row items-center gap-3">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-[#8A91A3] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t.searchEquipmentPlaceholder}
                  className="w-full pl-9 pr-3 py-2 text-xs font-mono bg-white border border-[#DDE2EF] rounded-xl text-[#1B1F2A] placeholder:text-[#8A91A3] focus:outline-none focus:border-[#24356F]"
                />
              </div>

              <div className="flex items-center gap-1.5 overflow-x-auto w-full pb-1 sm:pb-0">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 text-xs font-mono uppercase rounded-lg transition-all shrink-0 border cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-[#24356F] text-white border-[#24356F] font-semibold shadow-sm'
                        : 'bg-white text-[#5C6478] border-[#DDE2EF] hover:text-[#24356F] hover:bg-[#E6EAF5]/60'
                    }`}
                  >
                    {cat === 'all'
                      ? currentLang === 'uz'
                        ? 'Barchasi'
                        : currentLang === 'ru'
                        ? 'Все'
                        : 'All'
                      : cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Table Body */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#F3F5FB]/40">
              <div className="overflow-x-auto rounded-2xl border border-[#DDE2EF] bg-white shadow-sm">
                <table className="pharmi-table w-full text-left text-xs">
                  <thead>
                    <tr>
                      <th className="px-4 py-3.5">Uskuna / Model</th>
                      <th className="px-4 py-3.5">Xona</th>
                      <th className="px-4 py-3.5 hidden md:table-cell">Spetsifikatsiya</th>
                      <th className="px-4 py-3.5 hidden lg:table-cell">Ilmiy Qo&apos;llanilishi</th>
                      <th className="px-4 py-3.5">Holati</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredEquipment.map((item) => (
                      <tr key={item.id}>
                        <td className="px-4 py-3.5">
                          <div className="font-bold text-[#1B1F2A] font-display text-sm">
                            {item.name}
                          </div>
                          <div className="text-[#5C6478] text-[11px] mt-0.5 font-mono">
                            {item.manufacturer} &bull; {item.model}
                          </div>
                        </td>
                        <td className="px-4 py-3.5 whitespace-nowrap">
                          <span className="px-2.5 py-1 rounded-lg bg-[#E6EAF5] text-[#24356F] font-mono font-bold text-[11px]">
                            {item.roomCode}
                          </span>
                        </td>
                        <td className="px-4 py-3.5 text-[#5C6478] hidden md:table-cell max-w-xs font-mono">
                          {Object.entries(item.technicalSpecs)
                            .filter(([, val]) => !!val)
                            .slice(0, 2)
                            .map(([key, val]) => `${key}: ${val}`)
                            .join(' | ')}
                        </td>
                        <td className="px-4 py-3.5 text-[#5C6478] font-body text-xs hidden lg:table-cell max-w-sm">
                          {item.scientificApplication[currentLang]}
                        </td>
                        <td className="px-4 py-3.5 whitespace-nowrap">
                          <span className="px-2.5 py-1 rounded-full bg-[#E3F1EC] text-[#12715A] font-mono font-bold text-[10px]">
                            {item.maintenanceStatus.toUpperCase()}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-white/90 border-t border-[#DDE2EF] flex items-center justify-between">
              <span className="text-xs font-mono text-[#5C6478]">
                Reestr ro&apos;yxati: {filteredEquipment.length} ta
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
