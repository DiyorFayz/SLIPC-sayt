'use client';

import React from 'react';
import { Language } from '@/types/laboratory';
import { TRANSLATIONS } from '@/data/translations';
import { Mail, Phone } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
  onOpenPassport: () => void;
  onOpenAbout: () => void;
  onOpenProjects?: () => void;
  onOpenStaff: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onOpenPassport,
  onOpenAbout,
  onOpenProjects,
  onOpenStaff,
}) => {
  const t = TRANSLATIONS[currentLang];

  const footerOffer = {
    uz: {
      text: "Toshkent farmatsevtika instituti “Innovatsion farmatsevtik birikmalar” ilmiy laboratoriyasi farmatsevtika ishlab chiqarish kompaniyalari uchun original va generik dori vositalarini ishlab chiqish, standartlash, klinik oldi, bioekvivalentlik va biowever hamda biologik faol qo’shimchalar (BFQ) uchun bir qator tadqiqotlarni amalga oshirish bo‘yicha zamonaviy va innovatsion xizmatlarni taklif etadi",
      contactLabel: "Bog'lanish uchun",
    },
    ru: {
      text: "Научная лаборатория «Инновационные фармацевтические соединения» Ташкентского фармацевтического института предлагает современные и инновационные услуги для фармацевтических производственных компаний по разработке, стандартизации, доклиническим исследованиям, биоэквивалентности и biowaiver оригинальных и генерических лекарственных средств, а также биологически активных добавок (БАД)",
      contactLabel: "Для связи",
    },
    en: {
      text: "The “Innovative Pharmaceutical Compounds” Scientific Laboratory of the Tashkent Pharmaceutical Institute offers cutting-edge services for pharmaceutical manufacturers: development, standardization, preclinical testing, bioequivalence, biowaiver studies, and nutraceutical (dietary supplement) testing",
      contactLabel: "Contact",
    },
  }[currentLang];

  return (
    <footer className="relative z-10 bg-white/80 backdrop-blur-md border-t border-[#DDE2EF] text-[#5C6478] py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 pb-6 border-b border-[#DDE2EF]/80">
          <div className="flex items-start gap-4 lg:w-72 shrink-0">
            <div className="p-1 rounded-xl bg-white border border-[#DDE2EF] shadow-sm shrink-0">
              <img
                src="/logo.jpg"
                alt="SLIPC"
                className="w-12 h-12 rounded-lg object-contain bg-[#0A1128]"
              />
            </div>
            <div>
              <h2 className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-[#24356F]">
                SLIPC LABORATORIYASI
              </h2>
              <p className="text-xs sm:text-sm text-[#5C6478] font-body mt-0.5">
                Toshkent Farmatsevtika Instituti
              </p>
            </div>
          </div>

          <div className="flex-1 max-w-3xl space-y-2.5">
            <p className="text-xs sm:text-[13px] text-[#1B1F2A]/90 leading-relaxed font-body">
              {footerOffer.text}
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-1 text-xs">
              <span className="font-semibold text-[#24356F] font-mono text-[11px] uppercase tracking-wider">
                {footerOffer.contactLabel}:
              </span>
              <a
                href="mailto:sharipov.avez@gmail.com"
                className="inline-flex items-center gap-1.5 text-[#24356F] hover:text-[#12715A] font-medium transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#12715A]" />
                <span>sharipov.avez@gmail.com</span>
              </a>
              <span className="text-[#CCD6ED] hidden sm:inline">&bull;</span>
              <a
                href="mailto:sharipov_a@pharmi.uz"
                className="inline-flex items-center gap-1.5 text-[#24356F] hover:text-[#12715A] font-medium transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#12715A]" />
                <span>sharipov_a@pharmi.uz</span>
              </a>
              <span className="text-[#CCD6ED] hidden sm:inline">&bull;</span>
              <a
                href="tel:+998933494951"
                className="inline-flex items-center gap-1.5 text-[#1B1F2A] hover:text-[#12715A] font-mono transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#12715A]" />
                <span>+998933494951</span>
              </a>
              <span className="text-[#CCD6ED] hidden sm:inline">&bull;</span>
              <a
                href="tel:+998712563738"
                className="inline-flex items-center gap-1.5 text-[#1B1F2A] hover:text-[#12715A] font-mono transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#12715A]" />
                <span>+998712563738</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <p className="text-[#8A91A3]">
            &copy; {new Date().getFullYear()} SLIPC Innovatsion farmatsevtik birikmalar ilmiy laboratoriyasi
          </p>

          <div className="flex flex-wrap items-center gap-5 font-semibold text-[#5C6478]">
            <button
              onClick={onOpenAbout}
              className="hover:text-[#24356F] transition-colors cursor-pointer"
            >
              {t.navAbout}
            </button>
            {onOpenProjects && (
              <button
                onClick={onOpenProjects}
                className="hover:text-[#12715A] transition-colors cursor-pointer"
              >
                {t.navProjects}
              </button>
            )}
            <button
              onClick={onOpenStaff}
              className="hover:text-[#24356F] transition-colors cursor-pointer"
            >
              {t.navStaff}
            </button>
            <button
              onClick={onOpenPassport}
              className="hover:text-[#12715A] transition-colors cursor-pointer"
            >
              Horizon Europe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
