'use client';

import React from 'react';
import { LabRoom, Language } from '@/types/laboratory';
import { TRANSLATIONS } from '@/data/translations';
import { RoomCard } from './RoomCard';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layers,
  Microscope,
  BookOpen,
  Globe2,
  ArrowUpRight,
} from 'lucide-react';

interface RoomsGridProps {
  rooms: LabRoom[];
  currentLang: Language;
  onOpenDetails: (room: LabRoom) => void;
  onOpenEquipment: () => void;
  onOpenPublications: () => void;
  onOpenProjects?: () => void;
  onOpenPassport: () => void;
  showGeneralSections?: boolean;
}

export const RoomsGrid: React.FC<RoomsGridProps> = ({
  rooms,
  currentLang,
  onOpenDetails,
  onOpenEquipment,
  onOpenPublications,
  onOpenProjects,
  onOpenPassport,
  showGeneralSections = true,
}) => {
  const t = TRANSLATIONS[currentLang];

  const generalSections = [
    {
      id: "sec-projects",
      code: "SEC-PRJ",
      icon: <Layers className="w-4 h-4 text-[#12715A]" />,
      title: {
        uz: "Xalqaro Ilmiy Loyihalar (2022–2026)",
        ru: "Международные научные проекты (2022–2026)",
        en: "International Research Projects (2022–2026)",
      },
      subtitle: {
        uz: "22 ta Scopus / Web of Science loyihasi & Statistika",
        ru: "22 проекта Scopus / Web of Science и статистика",
        en: "22 Scopus / Web of Science projects & Statistics",
      },
      actionLabel: {
        uz: "Loyihalarni ko'rish",
        ru: "Смотреть проекты",
        en: "Explore Projects",
      },
      onClick: onOpenProjects || onOpenPublications,
    },
    {
      id: "sec-equipment",
      code: "SEC-EQ",
      icon: <Microscope className="w-4 h-4 text-[#12715A]" />,
      title: {
        uz: "Analitik Uskunalar va Metodlar Reestri",
        ru: "Реестр аналитического оборудования и методик",
        en: "Equipment & Methodology Registry",
      },
      subtitle: {
        uz: "18+ yuqori aniqlikdagi analitik qurilmalar",
        ru: "18+ высокоточных аналитических приборов",
        en: "18+ high-precision analytical instruments",
      },
      actionLabel: {
        uz: "Reestrni ochish",
        ru: "Открыть реестр",
        en: "Open Registry",
      },
      onClick: onOpenEquipment,
    },
    {
      id: "sec-publications",
      code: "SEC-PUB",
      icon: <BookOpen className="w-4 h-4 text-[#24356F]" />,
      title: {
        uz: "Tanlangan Ilmiy Nashrlar va Bibliometrika",
        ru: "Избранные научные публикации и библиометрия",
        en: "Publications & Bibliometrics",
      },
      subtitle: {
        uz: "Scopus Q1/Q2 xalqaro maqolalar va DOI",
        ru: "Статьи Scopus Q1/Q2 и ссылки DOI",
        en: "Peer-reviewed Scopus Q1/Q2 articles & DOIs",
      },
      actionLabel: {
        uz: "Nashrlarni ko'rish",
        ru: "Смотреть статьи",
        en: "View Articles",
      },
      onClick: onOpenPublications,
    },
    {
      id: "sec-horizon",
      code: "EU-PIC",
      icon: <Globe2 className="w-4 h-4 text-[#12715A]" />,
      title: {
        uz: "Horizon Europe Hamkorlik Pasporti",
        ru: "Паспорт партнерства Horizon Europe",
        en: "Horizon Europe Capability Statement",
      },
      subtitle: {
        uz: "PIC: 912048192 &middot; BSL-2 / ISO 14644",
        ru: "PIC: 912048192 &middot; BSL-2 / ISO 14644",
        en: "PIC: 912048192 &middot; BSL-2 / ISO 14644",
      },
      actionLabel: {
        uz: "Pasportni ochish",
        ru: "Открыть паспорт",
        en: "Open Passport",
      },
      onClick: onOpenPassport,
    },
  ];

  return (
    <div className="space-y-6">
      {rooms.length === 0 ? (
        <div className="glass-panel p-10 text-center rounded-2xl text-[#5C6478]">
          <Layers className="w-8 h-8 mx-auto text-[#8A91A3] mb-2" />
          <p className="text-sm font-medium">{t.noResults}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {/* Laboratory Room Cards Only */}
            {rooms.map((room) => (
              <motion.div
                key={room.id}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="flex"
              >
                <div className="w-full flex">
                  <RoomCard
                    room={room}
                    currentLang={currentLang}
                    onOpenDetails={onOpenDetails}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};
