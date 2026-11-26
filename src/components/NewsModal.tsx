'use client';

import React, { useEffect, useState } from 'react';
import { Language } from '@/types/laboratory';
import { TRANSLATIONS } from '@/data/translations';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Newspaper, ExternalLink, Edit3 } from 'lucide-react';
import { NewsItem, INITIAL_NEWS_ITEMS, fetchAllNews } from '@/data/newsData';

interface NewsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const NewsModal: React.FC<NewsModalProps> = ({
  isOpen,
  onClose,
  currentLang,
}) => {
  const t = TRANSLATIONS[currentLang];
  const [newsItems, setNewsItems] = useState<NewsItem[]>(INITIAL_NEWS_ITEMS);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };

    const loadData = () => {
      fetchAllNews().then((items) => {
        if (items && items.length > 0) {
          setNewsItems(items);
        }
      });
    };

    if (isOpen) {
      loadData();
      document.body.classList.add('modal-open');
      document.documentElement.classList.add('modal-open');
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('focus', loadData);
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
      window.removeEventListener('focus', loadData);
    };
  }, [isOpen, onClose]);

  const editLabel =
    currentLang === 'uz'
      ? 'Tahrirlash'
      : currentLang === 'ru'
      ? 'Редактировать'
      : 'Edit';

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 overflow-hidden overscroll-contain">
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
            className="relative w-full sm:max-w-4xl glass-modal sm:rounded-2xl overflow-hidden flex flex-col h-[94vh] sm:h-[90vh] max-h-[94vh] overscroll-contain z-10"
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
                      <Newspaper className="w-3.5 h-3.5 text-[#12715A]" />
                      Academic Dispatches
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1B1F2A] font-display">
                    {t.sectionNewsTitle}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#5C6478] mt-1 font-body">
                    {t.sectionNewsSubtitle}
                  </p>
                </div>
              </div>

              {/* Action Buttons: Tahrirlash (Edit) + Close */}
              <div className="flex items-center gap-2.5 self-end sm:self-auto shrink-0">
                <a
                  href="/admin/news"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-[#DDE2EF] bg-white text-xs font-semibold text-[#24356F] hover:bg-[#F3F5FB] hover:border-[#24356F]/40 shadow-xs transition-all cursor-pointer"
                  title="Yangiliklarni tahrirlash (Admin panel)"
                >
                  <Edit3 className="w-3.5 h-3.5 text-[#12715A]" />
                  <span>{editLabel}</span>
                </a>

                <button
                  onClick={onClose}
                  className="p-2 rounded-xl border border-[#DDE2EF] bg-white text-[#5C6478] hover:text-[#24356F] hover:bg-[#F3F5FB] transition-colors shrink-0 cursor-pointer"
                  aria-label={t.closeModal}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain ios-momentum-scroll modal-scroll-area p-5 sm:p-7 space-y-4 bg-[#F3F5FB]/40">
              {newsItems.map((item) => (
                <div
                  key={item.id}
                  className="glass-card rounded-2xl p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-[#5C6478] mb-2.5">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#24356F]" />
                        <span>{item.date}</span>
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#E3F1EC] text-[#12715A] font-bold uppercase text-[11px]">
                        {item.category?.[currentLang] || item.category?.uz || ''}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold font-display text-[#1B1F2A] leading-snug">
                      {item.title?.[currentLang] || item.title?.uz || ''}
                    </h3>

                    {item.image && (
                      <div className="my-3 rounded-xl overflow-hidden border border-[#DDE2EF] bg-slate-100 max-h-72">
                        <img
                          src={item.image}
                          alt={item.title?.[currentLang] || item.title?.uz || 'Yangilik rasmi'}
                          className="w-full h-48 sm:h-60 object-cover hover:scale-[1.01] transition-transform duration-300"
                        />
                      </div>
                    )}

                    <p className="text-xs sm:text-sm text-[#5C6478] mt-2 leading-relaxed font-body">
                      {item.summary?.[currentLang] || item.summary?.uz || ''}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#DDE2EF] flex items-center justify-between">
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono font-bold text-[#24356F] hover:text-[#12715A] hover:underline inline-flex items-center gap-1.5"
                      >
                        <span>{t.newsReadMore}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-xs text-slate-400">SLIPC Dispatches</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-4 bg-white/90 border-t border-[#DDE2EF] flex items-center justify-between">
              <span className="text-xs font-mono text-[#5C6478]">
                SLIPC Media Hub
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
