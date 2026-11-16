'use client';

import React, { useState, useMemo } from 'react';
import { Equipment, Language } from '@/types/laboratory';
import { TRANSLATIONS } from '@/data/translations';
import { LAB_EQUIPMENT_DIRECTORY } from '@/data/laboratoryData';
import { Search } from 'lucide-react';

interface EquipmentDirectoryProps {
  currentLang: Language;
  onOpenSOP?: (sopCode: string) => void;
}

export const EquipmentDirectory: React.FC<EquipmentDirectoryProps> = ({
  currentLang,
  onOpenSOP,
}) => {
  const t = TRANSLATIONS[currentLang];
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEquipment = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return LAB_EQUIPMENT_DIRECTORY;
    return LAB_EQUIPMENT_DIRECTORY.filter((item) =>
      item.name.toLowerCase().includes(q) ||
      item.model.toLowerCase().includes(q) ||
      item.manufacturer.toLowerCase().includes(q) ||
      item.scientificApplication[currentLang].toLowerCase().includes(q)
    );
  }, [searchQuery, currentLang]);

  return (
    <section id="equipment-section" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-400 mb-3">{t.sectionCentersTag}</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {t.sectionCentersTitle}
            </h2>
            <p className="text-slate-500 mt-2 max-w-2xl">
              {t.sectionCentersSubtitle}
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="mb-8 max-w-md">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchEquipmentPlaceholder}
              className="w-full pl-10 pr-4 py-2.5 text-sm border border-slate-200 rounded bg-white focus:outline-none focus:border-slate-400 text-slate-700 placeholder:text-slate-400 transition-colors"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-left">
                <th className="pb-3 font-medium text-slate-400 text-xs uppercase tracking-wider">{t.tableHeaderDevice}</th>
                <th className="pb-3 font-medium text-slate-400 text-xs uppercase tracking-wider hidden md:table-cell">{t.tableHeaderRoom}</th>
                <th className="pb-3 font-medium text-slate-400 text-xs uppercase tracking-wider hidden lg:table-cell">{t.tableHeaderApplication}</th>
                <th className="pb-3 font-medium text-slate-400 text-xs uppercase tracking-wider">{t.tableHeaderStatus}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredEquipment.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 pr-4">
                    <div className="font-medium text-slate-900">{item.name}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{item.manufacturer} · {item.model}</div>
                  </td>
                  <td className="py-3.5 pr-4 text-slate-500 hidden md:table-cell">
                    {item.roomCode}
                  </td>
                  <td className="py-3.5 pr-4 text-slate-500 hidden lg:table-cell">
                    {item.scientificApplication[currentLang]}
                  </td>
                  <td className="py-3.5">
                    <span className="text-xs px-2 py-1 rounded bg-slate-100 text-slate-700">
                      {item.maintenanceStatus === 'optimal'
                        ? (currentLang === 'uz' ? 'Optimal' : currentLang === 'ru' ? 'Оптимальный' : 'Optimal')
                        : item.maintenanceStatus === 'calibrated'
                        ? (currentLang === 'uz' ? 'Kalibrlangan' : currentLang === 'ru' ? 'Калиброван' : 'Calibrated')
                        : (currentLang === 'uz' ? 'Faol' : currentLang === 'ru' ? 'В работе' : 'In use')
                      }
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredEquipment.length === 0 && (
            <p className="text-center text-slate-400 py-12 text-sm">{t.noResults}</p>
          )}
        </div>
      </div>
    </section>
  );
};
