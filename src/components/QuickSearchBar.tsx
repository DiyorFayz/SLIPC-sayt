'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Language, LabRoom, Equipment, SOPDocument } from '@/types/laboratory';
import { TRANSLATIONS } from '@/data/translations';
import { LAB_ROOMS, LAB_EQUIPMENT_DIRECTORY, LAB_SOPS, LAB_PUBLICATIONS } from '@/data/laboratoryData';
import { RESEARCH_PROJECTS } from '@/data/projectsData';
import { Search, X, ChevronRight, Layers, ExternalLink } from 'lucide-react';

interface QuickSearchBarProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onSelectRoom: (room: LabRoom) => void;
  onSelectSOP: (sop: SOPDocument) => void;
  onSelectEquipment: (eq: Equipment) => void;
  onOpenProjects?: () => void;
}

export const QuickSearchBar: React.FC<QuickSearchBarProps> = ({
  isOpen,
  onClose,
  currentLang,
  onSelectRoom,
  onSelectSOP,
  onSelectEquipment,
  onOpenProjects,
}) => {
  const t = TRANSLATIONS[currentLang];
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const normalizedQuery = query.trim().toLowerCase();

  const matchedRooms = normalizedQuery
    ? LAB_ROOMS.filter(
        (r) =>
          r.code.toLowerCase().includes(normalizedQuery) ||
          r.title[currentLang].toLowerCase().includes(normalizedQuery) ||
          r.shortDescription[currentLang].toLowerCase().includes(normalizedQuery)
      )
    : [];

  const matchedEquipment = normalizedQuery
    ? LAB_EQUIPMENT_DIRECTORY.filter(
        (eq) =>
          eq.name.toLowerCase().includes(normalizedQuery) ||
          eq.model.toLowerCase().includes(normalizedQuery) ||
          eq.manufacturer.toLowerCase().includes(normalizedQuery) ||
          eq.scientificApplication[currentLang].toLowerCase().includes(normalizedQuery)
      )
    : [];

  const matchedSOPs = normalizedQuery
    ? LAB_SOPS.filter(
        (sop) =>
          sop.code.toLowerCase().includes(normalizedQuery) ||
          sop.title[currentLang].toLowerCase().includes(normalizedQuery)
      )
    : [];

  const matchedPubs = normalizedQuery
    ? LAB_PUBLICATIONS.filter(
        (pub) =>
          pub.title[currentLang].toLowerCase().includes(normalizedQuery) ||
          pub.authors.toLowerCase().includes(normalizedQuery)
      )
    : [];

  const matchedProjects = normalizedQuery
    ? RESEARCH_PROJECTS.filter(
        (proj) =>
          proj.title[currentLang]?.toLowerCase().includes(normalizedQuery) ||
          proj.originalTitle.toLowerCase().includes(normalizedQuery) ||
          proj.authors.toLowerCase().includes(normalizedQuery) ||
          proj.journal.toLowerCase().includes(normalizedQuery) ||
          proj.year.toString().includes(normalizedQuery)
      ).sort((a, b) => (b.year !== a.year ? b.year - a.year : b.id - a.id))
    : [];

  const totalResults =
    matchedRooms.length +
    matchedEquipment.length +
    matchedSOPs.length +
    matchedPubs.length +
    matchedProjects.length;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-[#101F52]/30 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl glass-modal rounded-2xl overflow-hidden flex flex-col max-h-[75vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Strip */}
        <div className="h-1 w-full bg-gradient-to-r from-[#24356F] via-[#344A94] to-[#12715A] shrink-0" />

        {/* Search Input Bar */}
        <div className="flex items-center px-5 py-4 border-b border-[#DDE2EF] gap-3 bg-white/90">
          <Search className="w-5 h-5 text-[#24356F] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full bg-transparent text-sm font-body text-[#1B1F2A] placeholder:text-[#8A91A3] focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#8A91A3] hover:text-[#24356F] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl border border-[#DDE2EF] text-[#5C6478] hover:text-[#24356F] hover:bg-[#F3F5FB] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search Results Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F3F5FB]/50">
          {!normalizedQuery && (
            <div className="text-center py-10">
              <p className="text-xs font-mono text-[#8A91A3]">{t.searchPlaceholder}</p>
            </div>
          )}

          {normalizedQuery && totalResults === 0 && (
            <div className="text-center py-10">
              <p className="text-xs font-mono text-[#5C6478]">{t.noResults}</p>
            </div>
          )}

          {/* Rooms */}
          {matchedRooms.length > 0 && (
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#24356F] mb-2 px-1">
                {t.navResearch}
              </p>
              <div className="space-y-2">
                {matchedRooms.map((room) => (
                  <button
                    key={room.id}
                    onClick={() => {
                      onSelectRoom(room);
                      onClose();
                    }}
                    className="w-full text-left p-3.5 glass-card rounded-xl flex items-center justify-between text-sm cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="font-display font-bold text-[#1B1F2A]">
                        {room.title[currentLang]}
                      </span>
                      <span className="font-mono text-[11px] font-bold text-[#24356F] bg-[#E6EAF5] px-2 py-0.5 rounded-md">
                        {room.code}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#8A91A3] shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Equipment */}
          {matchedEquipment.length > 0 && (
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#12715A] mb-2 px-1">
                {t.navCenters}
              </p>
              <div className="space-y-2">
                {matchedEquipment.map((eq) => (
                  <button
                    key={eq.id}
                    onClick={() => {
                      onSelectEquipment(eq);
                      onClose();
                    }}
                    className="w-full text-left p-3.5 glass-card rounded-xl flex items-center justify-between text-sm cursor-pointer"
                  >
                    <div>
                      <span className="font-display font-bold text-[#1B1F2A]">{eq.name}</span>
                      <span className="font-mono text-xs text-[#5C6478] ml-2.5">
                        {eq.model} &bull; {eq.manufacturer}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#8A91A3] shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* SOPs */}
          {matchedSOPs.length > 0 && (
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#24356F] mb-2 px-1">
                SOPs
              </p>
              <div className="space-y-2">
                {matchedSOPs.map((sop) => (
                  <button
                    key={sop.id}
                    onClick={() => {
                      onSelectSOP(sop);
                      onClose();
                    }}
                    className="w-full text-left p-3.5 glass-card rounded-xl flex items-center justify-between text-sm cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="font-display font-bold text-[#1B1F2A]">
                        {sop.title[currentLang]}
                      </span>
                      <span className="font-mono text-[11px] font-bold text-[#12715A] bg-[#E3F1EC] px-2 py-0.5 rounded-md">
                        {sop.code}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#8A91A3] shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Publications */}
          {matchedPubs.length > 0 && (
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#24356F] mb-2 px-1">
                Publications
              </p>
              <div className="space-y-2">
                {matchedPubs.map((pub) => (
                  <a
                    key={pub.id}
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3.5 glass-card rounded-xl text-sm"
                  >
                    <span className="font-display font-bold text-[#1B1F2A]">
                      {pub.title[currentLang]}
                    </span>
                    <p className="font-mono text-xs text-[#5C6478] mt-1">
                      {pub.authors} &bull;{' '}
                      <span className="font-semibold text-[#24356F]">{pub.journal}</span> &bull; DOI:{' '}
                      {pub.doi}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Research Projects (2022-2026) */}
          {matchedProjects.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-2 px-1">
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#12715A] flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  <span>{t.navProjects} (2022–2026)</span>
                </p>
                {onOpenProjects && (
                  <button
                    onClick={() => {
                      onClose();
                      onOpenProjects();
                    }}
                    className="text-[11px] font-mono text-[#24356F] hover:underline cursor-pointer"
                  >
                    {t.projectsFilterAll} ({matchedProjects.length})
                  </button>
                )}
              </div>
              <div className="space-y-2">
                {matchedProjects.map((proj) => (
                  <div
                    key={proj.id}
                    className="p-3.5 glass-card rounded-xl text-sm bg-white/90 border border-[#DDE2EF]"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-[#E3F1EC] text-[#12715A]">
                        #{proj.id} &bull; {proj.year}
                      </span>
                      {proj.doiUrl && (
                        <a
                          href={proj.doiUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#24356F] hover:text-[#12715A] inline-flex items-center gap-1 text-[11px] font-mono font-medium"
                        >
                          <span>DOI</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                    <h5 className="font-display font-bold text-xs text-[#1B1F2A] leading-snug">
                      {proj.title[currentLang] || proj.originalTitle}
                    </h5>
                    <p className="text-[11px] text-[#5C6478] font-body mt-1 line-clamp-1">
                      {proj.authors}
                    </p>
                    <p className="text-[11px] text-[#24356F] font-mono mt-0.5 font-medium line-clamp-1">
                      {proj.journal}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
