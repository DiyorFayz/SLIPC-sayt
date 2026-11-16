'use client';

import React from 'react';
import { RoomCategory, Language } from '@/types/laboratory';

interface RoomFilterTabsProps {
  activeCategory: RoomCategory;
  onSelectCategory: (category: RoomCategory) => void;
  currentLang: Language;
  counts: Record<RoomCategory, number>;
}

export const RoomFilterTabs: React.FC<RoomFilterTabsProps> = ({
  activeCategory,
  onSelectCategory,
  currentLang,
  counts,
}) => {
  const tabs: {
    category: RoomCategory;
    labels: Record<Language, string>;
    color: string;
  }[] = [
    { category: 'all', labels: { uz: 'Barcha Bo\'limlar', ru: 'Все Отделы', en: 'All Departments' }, color: '#0F172A' },
    { category: 'sintez-insilico', labels: { uz: 'Sintez & In Silico', ru: 'Синтез & In Silico', en: 'Synthesis & In Silico' }, color: '#24356F' },
    { category: 'instrumental', labels: { uz: 'Instrumental tahlil', ru: 'Инструментальный анализ', en: 'Instrumental Analysis' }, color: '#782AEB' },
    { category: 'in-vitro', labels: { uz: 'In vitro', ru: 'In vitro', en: 'In Vitro' }, color: '#0072CE' },
    { category: 'in-vivo', labels: { uz: 'In vivo', ru: 'In vivo', en: 'In Vivo' }, color: '#12715A' },
    { category: 'vivariy', labels: { uz: 'Vivariy', ru: 'Виварий', en: 'Vivarium' }, color: '#0D9488' },
  ];

  return (
    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
      {tabs.map((tab) => {
        const isActive = activeCategory === tab.category;
        const count = counts[tab.category] || 0;

        return (
          <button
            key={tab.category}
            onClick={() => onSelectCategory(tab.category)}
            className={`px-3 py-1.5 text-xs font-mono-sci rounded-xs transition-all flex items-center gap-1.5 border ${
              isActive
                ? 'font-bold text-white shadow-2xs'
                : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200 hover:border-slate-300'
            }`}
            style={{
              backgroundColor: isActive ? tab.color : undefined,
              borderColor: isActive ? tab.color : undefined,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full shrink-0"
              style={{
                backgroundColor: isActive ? '#FFFFFF' : tab.color,
              }}
            />
            <span>{tab.labels[currentLang]}</span>
            {tab.category !== 'all' && (
              <span
                className={`text-[10px] px-1 py-0.2 rounded-2xs font-mono-sci ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                }`}
              >
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
