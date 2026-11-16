'use client';

import React from 'react';
import { Language } from '@/types/laboratory';
import { ShieldCheck, Sparkles } from 'lucide-react';

interface HandoverBannerProps {
  currentLang: Language;
}

export const HandoverBanner: React.FC<HandoverBannerProps> = ({ currentLang }) => {
  const content = {
    uz: {
      tag: "RASMIY TOPSHIRISH MAROSIMI",
      badge: "O'z DSt ISO/IEC 17025 &bull; GLP",
      caption: "Toshkent Farmatsevtika instituti rektori prof. K.S.Rizayev (o’ngda) ilmiy laboratoriya mudiri prof. A.T.Sharipovga (chapda) akkreditasiya sertifikatini topshirmoqda.",
      rightLabel: "O'ngda (topshiruvchi)",
      rightName: "Prof. K.S. Rizayev",
      rightTitle: "Toshkent Farmatsevtika instituti rektori",
      leftLabel: "Chapda (qabul qiluvchi)",
      leftName: "Prof. A.T. Sharipov",
      leftTitle: "“Innovatsion farmatsevtik birikmalar” ilmiy laboratoriyasi mudiri",
      subNote: "O'zbekiston akkreditatsiya markazi DM (O'ZAK) hamda Farmatsevtika tarmog'ini rivojlantirish agentligi tomonidan berilgan rasmiy davlat muvofiqlik sertifikati",
    },
    ru: {
      tag: "ОФИЦИАЛЬНАЯ ЦЕРЕМОНИЯ ВРУЧЕНИЯ",
      badge: "O'z DSt ISO/IEC 17025 &bull; GLP",
      caption: "Ректор Ташкентского фармацевтического института проф. К.С.Ризаев (справа) вручает свидетельство об аккредитации заведующему научной лабораторией проф. А.Т.Шарипову (слева).",
      rightLabel: "Справа (вручающий)",
      rightName: "Проф. К.С. Ризаев",
      rightTitle: "Ректор Ташкентского фармацевтического института",
      leftLabel: "Слева (принимающий)",
      leftName: "Проф. А.Т. Шарипов",
      leftTitle: "Заведующий научной лабораторией «Инновационные фармацевтические соединения»",
      subNote: "Официальный государственный сертификат соответствия ГУ «Центр аккредитации Узбекистана» (O'ZAK) и Агентства по развитию фармацевтической отрасли",
    },
    en: {
      tag: "OFFICIAL HANDOVER CEREMONY",
      badge: "O'z DSt ISO/IEC 17025 &bull; GLP",
      caption: "Rector of the Tashkent Pharmaceutical Institute Prof. K.S.Rizayev (right) presents the accreditation certificate to the Head of the Scientific Laboratory Prof. A.T.Sharipov (left).",
      rightLabel: "Right (Presenter)",
      rightName: "Prof. K.S. Rizayev",
      rightTitle: "Rector of Tashkent Pharmaceutical Institute",
      leftLabel: "Left (Recipient)",
      leftName: "Prof. A.T. Sharipov",
      leftTitle: "Head of the “Innovative Pharmaceutical Compounds” Scientific Laboratory",
      subNote: "Official state certificate of accreditation and compliance granted by the Uzbekistan Accreditation Center (O'ZAK) and the Pharmaceutical Agency",
    },
  }[currentLang];

  return (
    <div className="mb-8 rounded-2xl border border-[#DDE2EF] bg-white/95 shadow-pharmi-card overflow-hidden hover:border-[#24356F]/30 transition-all duration-300">
      {/* Top Gradient Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-[#24356F] via-[#0072CE] to-[#12715A]" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center p-5 sm:p-7 lg:p-8">
        {/* Left Column: Handover Ceremony Photo */}
        <div className="md:col-span-5 lg:col-span-5">
          <div className="relative rounded-xl overflow-hidden border border-[#DDE2EF] shadow-sm bg-slate-900 group">
            <img
              src="/images/certificate-handover.png"
              alt={content.caption}
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300"
            />
            <div className="absolute top-2.5 left-2.5">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#0A1128]/85 backdrop-blur-md text-white text-[10px] font-mono font-semibold border border-white/20 shadow-sm">
                <Sparkles className="w-3 h-3 text-[#38D399]" />
                <span>SLIPC &bull; ToshFarmI</span>
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Caption & Institutional Information */}
        <div className="md:col-span-7 lg:col-span-7 flex flex-col justify-center space-y-4">
          {/* User Requested Main Caption */}
          <h2 className="text-base sm:text-lg lg:text-xl font-bold font-display text-[#1B1F2A] leading-relaxed">
            {content.caption}
          </h2>

          {/* Two Key Profiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <span className="text-[10px] font-mono text-[#8A91A3] uppercase block font-semibold">
                {content.rightLabel}
              </span>
              <span className="font-bold text-[#1B1F2A] text-xs sm:text-sm block mt-0.5 font-display">
                {content.rightName}
              </span>
              <span className="text-[11px] text-[#5C6478] block mt-0.5 leading-snug">
                {content.rightTitle}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <span className="text-[10px] font-mono text-[#8A91A3] uppercase block font-semibold">
                {content.leftLabel}
              </span>
              <span className="font-bold text-[#1B1F2A] text-xs sm:text-sm block mt-0.5 font-display">
                {content.leftName}
              </span>
              <span className="text-[11px] text-[#5C6478] block mt-0.5 leading-snug">
                {content.leftTitle}
              </span>
            </div>
          </div>

          {/* Subnote */}
          <p className="text-[11px] text-[#8A91A3] font-body pt-1 flex items-center gap-1.5 border-t border-[#DDE2EF]/70">
            <ShieldCheck className="w-3.5 h-3.5 text-[#12715A] shrink-0" />
            <span>{content.subNote}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
