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
        return <Award className="w-4 h-4 text-[#0F2942]" />;
      case 'instrumental':
        return <Layers className="w-4 h-4 text-[#1E3D5F]" />;
      case 'in-vitro':
        return <Building2 className="w-4 h-4 text-[#108A54]" />;
      case 'in-vivo':
        return <FlaskConical className="w-4 h-4 text-[#0C6B41]" />;
      case 'vivariy':
        return <ShieldCheck className="w-4 h-4 text-[#0F2942]" />;
      default:
        return <Microscope className="w-4 h-4 text-[#0F2942]" />;
    }
  };

  return (
    <button
      onClick={() => onOpenDetails(room)}
      className="group relative w-full text-left p-5 sm:p-6 rounded-lg border border-[#E2E8F0] bg-white hover:border-[#108A54] hover:shadow-md flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-200"
    >
      <div>
        {/* Top: Category Icon & Monospace LAB Code Badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="w-9 h-9 rounded-md flex items-center justify-center bg-[#F4F6F9] border border-[#E2E8F0] group-hover:bg-[#EBF7F1] group-hover:border-[#108A54]/30 transition-colors">
            {getRoomIcon(room.category)}
          </div>

          {/* 4) LAB Code Badge (e.g. LAB-01, LAB-02) */}
          <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-md bg-[#0F2942]/5 text-[#0F2942] border border-[#0F2942]/15 tracking-wider">
            {room.code}
          </span>
        </div>

        {/* Room Title */}
        <h3 className="text-base sm:text-lg font-bold font-display tracking-tight text-[#0F2942] group-hover:text-[#108A54] transition-colors leading-snug line-clamp-2">
          {room.title[currentLang]}
        </h3>

        {/* Short Subtitle */}
        <p className="text-xs sm:text-[13px] text-[#475569] font-body mt-2.5 line-clamp-2 leading-relaxed">
          {room.subTitle[currentLang]}
        </p>
      </div>

      {/* Action Row */}
      <div className="mt-5 pt-3.5 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-medium">
        <span className="text-[#475569] group-hover:text-[#108A54] transition-colors font-semibold font-body">
          {currentLang === 'uz'
            ? 'Pasportni ochish'
            : currentLang === 'ru'
            ? 'Открыть паспорт'
            : 'Open Passport'}
        </span>
        <div className="w-7 h-7 rounded-md flex items-center justify-center bg-[#F4F6F9] text-[#475569] border border-[#E2E8F0] group-hover:bg-[#108A54] group-hover:border-[#108A54] group-hover:text-white transition-all">
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </button>
  );
};
