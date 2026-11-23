'use client';

import React, { useState } from 'react';
import { Language, LabRoom, SOPDocument, Equipment } from '@/types/laboratory';
import { TRANSLATIONS } from '@/data/translations';
import { LAB_ROOMS, LAB_SOPS } from '@/data/laboratoryData';

import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { HandoverBanner } from '@/components/HandoverBanner';
import { DepartmentsSlider } from '@/components/DepartmentsSlider';
import { PatentsSection } from '@/components/PatentsSection';
import { ArticlesSection } from '@/components/ArticlesSection';
import { PartnersSection } from '@/components/PartnersSection';
import { RoomsGrid } from '@/components/RoomsGrid';
import { Footer } from '@/components/Footer';

// Modals & Slide-over Drawers
import { RoomDetailModal } from '@/components/RoomDetailModal';
import { EquipmentModal } from '@/components/EquipmentModal';
import { PublicationsModal } from '@/components/PublicationsModal';
import { CapabilityPassportModal } from '@/components/CapabilityPassportModal';
import { AboutModal } from '@/components/AboutModal';
import { HistoryModal } from '@/components/HistoryModal';
import { ProjectsModal } from '@/components/ProjectsModal';
import { EducationModal } from '@/components/EducationModal';
import { NewsModal } from '@/components/NewsModal';
import { StaffModal } from '@/components/StaffModal';
import { SOPViewerModal } from '@/components/SOPViewerModal';
import { QuickSearchBar } from '@/components/QuickSearchBar';

export default function Home() {
  // Multilingual State
  const [currentLang, setCurrentLang] = useState<Language>('uz');
  const t = TRANSLATIONS[currentLang];

  // Modal Open/Close States
  const [selectedRoom, setSelectedRoom] = useState<LabRoom | null>(null);
  const [selectedSOP, setSelectedSOP] = useState<SOPDocument | null>(null);
  const [isEquipmentOpen, setIsEquipmentOpen] = useState(false);
  const [isPublicationsOpen, setIsPublicationsOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isPassportOpen, setIsPassportOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isEducationOpen, setIsEducationOpen] = useState(false);
  const [isNewsOpen, setIsNewsOpen] = useState(false);
  const [isStaffOpen, setIsStaffOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Handlers
  const handleSelectRoom = (room: LabRoom) => {
    setSelectedRoom(room);
  };

  const handleSelectSOPByCode = (sopCode: string) => {
    const found = LAB_SOPS.find((s) => s.code.toLowerCase() === sopCode.toLowerCase());
    if (found) {
      setSelectedSOP(found);
    }
  };

  const handleSelectEquipment = (eq: Equipment) => {
    const room = LAB_ROOMS.find((r) => r.id === eq.roomId);
    if (room) {
      setSelectedRoom(room);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col pharmi-canvas text-[#0F172A] selection:bg-[#0F2942] selection:text-white overflow-x-hidden">
      {/* Subtle Ambient Academic Mesh for Depth */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0" aria-hidden="true">
        <div className="absolute -top-32 -left-24 w-[480px] h-[480px] rounded-full bg-[#0F2942]/[0.04] blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-[420px] h-[420px] rounded-full bg-[#108A54]/[0.04] blur-3xl" />
      </div>

      {/* 1. Academic Header with Language Switcher, Quick Search & Navigation Modal Triggers */}
      <Header
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenProjects={() => setIsProjectsOpen(true)}
        onOpenEducation={() => setIsEducationOpen(true)}
        onOpenNews={() => setIsNewsOpen(true)}
        onOpenStaff={() => setIsStaffOpen(true)}
      />

      {/* Main Single-Screen / Compact Hub Area */}
      <main className="relative z-10 flex-1 flex flex-col">
        {/* 2. Compact Hero Banner with Lab Title, 2-line Mission, and Monospace Metrics */}
        <HeroSection
          currentLang={currentLang}
          onOpenPassport={() => setIsPassportOpen(true)}
        />

        {/* 3. Interactive Large Slide Showcase */}
        <section id="departments-section" className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-8 py-6 sm:py-8">
          {/* Accreditation Handover Showcase Banner */}
          <HandoverBanner currentLang={currentLang} />

          {/* Large Department Slider Showcase matching user screenshot */}
          <DepartmentsSlider
            rooms={LAB_ROOMS}
            currentLang={currentLang}
            onOpenDetails={handleSelectRoom}
            onOpenPassport={() => setIsPassportOpen(true)}
          />

          {/* 3.1. Official State Patents Showcase (Foydali model in middle, 2 Ixtiro on sides) */}
          <PatentsSection currentLang={currentLang} />

          {/* 3.2. Published Articles ("Chop etilgan maqolalar") Section */}
          <ArticlesSection
            currentLang={currentLang}
            onOpenProjects={() => setIsProjectsOpen(true)}
          />

          {/* 3.3. Strategic Partners Showcase (Hamkorlarimiz) */}
          <PartnersSection currentLang={currentLang} />
        </section>
      </main>

      {/* 4. Compact Academic Footer */}
      <Footer
        currentLang={currentLang}
        onOpenPassport={() => setIsPassportOpen(true)}
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenProjects={() => setIsProjectsOpen(true)}
        onOpenStaff={() => setIsStaffOpen(true)}
      />

      {/* ============================================================== */}
      {/* ALL CONTENT OPENS EXCLUSIVELY VIA MODALS / SLIDE-OVER DRAWERS  */}
      {/* ============================================================== */}

      {/* 1. Room Detail Modal (Structured Academic Passport) */}
      <RoomDetailModal
        room={selectedRoom}
        isOpen={!!selectedRoom}
        onClose={() => setSelectedRoom(null)}
        currentLang={currentLang}
        onOpenSOPModal={handleSelectSOPByCode}
      />

      {/* 2. Equipment & Methodology Registry Modal */}
      <EquipmentModal
        isOpen={isEquipmentOpen}
        onClose={() => setIsEquipmentOpen(false)}
        currentLang={currentLang}
        onOpenSOP={handleSelectSOPByCode}
      />

      {/* 3. Peer-Reviewed Publications Modal */}
      <PublicationsModal
        isOpen={isPublicationsOpen}
        onClose={() => setIsPublicationsOpen(false)}
        currentLang={currentLang}
      />

      {/* 3.1. International Research Projects Modal (2022-2026) */}
      <ProjectsModal
        isOpen={isProjectsOpen}
        onClose={() => setIsProjectsOpen(false)}
        currentLang={currentLang}
      />

      {/* 4. Horizon Europe Capability Passport Modal */}
      <CapabilityPassportModal
        isOpen={isPassportOpen}
        onClose={() => setIsPassportOpen(false)}
        currentLang={currentLang}
      />

      {/* 5. About Us Modal */}
      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
        currentLang={currentLang}
        onOpenHistory={() => setIsHistoryOpen(true)}
      />

      {/* 5.1. History Page Modal */}
      <HistoryModal
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        currentLang={currentLang}
      />

      {/* 6. Education and Outreach Modal */}
      <EducationModal
        isOpen={isEducationOpen}
        onClose={() => setIsEducationOpen(false)}
        currentLang={currentLang}
      />

      {/* 7. News & Dispatches Modal */}
      <NewsModal
        isOpen={isNewsOpen}
        onClose={() => setIsNewsOpen(false)}
        currentLang={currentLang}
      />

      {/* 8. Staff & Principal Investigators Modal */}
      <StaffModal
        isOpen={isStaffOpen}
        onClose={() => setIsStaffOpen(false)}
        currentLang={currentLang}
      />

      {/* 9. SOP Protocol Viewer Modal */}
      <SOPViewerModal
        sop={selectedSOP}
        isOpen={!!selectedSOP}
        onClose={() => setSelectedSOP(null)}
        currentLang={currentLang}
      />

      {/* 10. Real-time Quick Search Modal */}
      <QuickSearchBar
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        currentLang={currentLang}
        onSelectRoom={handleSelectRoom}
        onSelectSOP={(sop) => setSelectedSOP(sop)}
        onSelectEquipment={handleSelectEquipment}
        onOpenProjects={() => setIsProjectsOpen(true)}
      />
    </div>
  );
}
