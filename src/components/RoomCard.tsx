'use client';

import React from 'react';
import { LabRoom, Language } from '@/types/laboratory';
import {
  ArrowUpRight,
  FlaskConical,
  Building2,
  Layers,
  Microscope,
  Award,
  Globe2,
  ShieldCheck,
} from 'lucide-react';

interface RoomCardProps {
  room: LabRoom;
  currentLang: Language;
  onOpenDetails: (room: LabRoom) => void;
}

export const RoomCard: React.FC<RoomCardProps> = ({
  room,
  currentLang,
  onOpenDetails,
}) => {
  const getRoomIcon = (category: string) => {
    switch (category) {
      case 'sintez-insilico':
        return <Award className="w-4 h-4 text-[#24356F]" />;
      case 'instrumental':
        return <Layers className="w-4 h-4 text-[#782AEB]" />;
      case 'in-vitro':
        return <Building2 className="w-4 h-4 text-[#0072CE]" />;
      case 'in-vivo':
        return <FlaskConical className="w-4 h-4 text-[#12715A]" />;
      case 'vivariy':
        return <ShieldCheck className="w-4 h-4 text-[#0D9488]" />;
      default:
        return <Microscope className="w-4 h-4 text-[#24356F]" />;
    }
  };

  return (
    <button
      onClick={() => onOpenDetails(room)}
      className="glass-card group relative w-full text-left p-5 sm:p-6 rounded-2xl flex flex-col justify-between overflow-hidden cursor-pointer"
    >
      <div>
        {/* Top Category Icon */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#F3F5FB] border border-[#DDE2EF] group-hover:border-[#24356F]/30 group-hover:bg-[#E6EAF5]/60 transition-colors">
            {getRoomIcon(room.category)}
          </div>
        </div>

        {/* Room Title */}
        <h3 className="text-base sm:text-lg font-bold font-display tracking-tight text-[#1B1F2A] group-hover:text-[#24356F] transition-colors leading-snug line-clamp-2">
          {room.title[currentLang]}
        </h3>

        {/* Short Subtitle */}
        <p className="text-xs sm:text-[13px] text-[#5C6478] font-body mt-2 line-clamp-2 leading-relaxed">
          {room.subTitle[currentLang]}
        </p>
      </div>

      {/* Minimalist Action Row */}
      <div className="mt-5 pt-3.5 border-t border-[#DDE2EF]/75 flex items-center justify-between text-xs font-medium">
        <span className="text-[#5C6478] group-hover:text-[#24356F] transition-colors font-semibold">
          {currentLang === 'uz'
            ? 'Pasportni ochish'
            : currentLang === 'ru'
            ? 'Открыть паспорт'
            : 'Open Passport'}
        </span>
        <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-[#F3F5FB] text-[#24356F] group-hover:bg-[#24356F] group-hover:text-white transition-all">
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </button>
  );
};
