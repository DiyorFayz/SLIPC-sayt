'use client';

import React from 'react';
import { Language } from '@/types/laboratory';
import { TRANSLATIONS } from '@/data/translations';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

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

  const addressText = {
    uz: "Manzil: Oybek ko'chasi 45-uy",
    ru: "Адрес: ул. Ойбека, 45",
    en: "Address: 45 Oybek Street",
  }[currentLang];

  const openMapsText = {
    uz: "Google Maps'da ochish",
    ru: "Открыть в Google Maps",
    en: "Open in Google Maps",
  }[currentLang];

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
    <footer className="relative z-10 bg-[#0F2942] border-t border-[#1E3D5F] text-slate-200 py-14 sm:py-16 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 pb-10 border-b border-white/15">
          {/* Logo & Institute Identity */}
          <div className="flex items-start gap-5 lg:w-96 shrink-0">
            <div className="p-2 rounded-xl bg-white border border-white/20 shadow-md shrink-0">
              <img
                src="/logo.webp"
                alt="SLIPC"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-contain bg-white"
              />
            </div>
            <div>
              <h2 className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-white leading-tight">
                SLIPC LABORATORIYASI
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-body mt-1">
                Toshkent Farmatsevtika Instituti
              </p>
              <p className="text-xs sm:text-sm text-slate-300 font-body mt-2.5 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#108A54] shrink-0" />
                <span className="font-medium">{addressText}</span>
              </p>
            </div>
          </div>

          {/* Research & Production Services Description */}
          <div className="flex-1 max-w-3xl space-y-4">
            <p className="text-sm sm:text-[15px] text-slate-100 leading-relaxed font-body">
              {footerOffer.text}
            </p>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-2 text-xs sm:text-sm">
              <span className="font-bold text-[#108A54] font-mono text-xs sm:text-[13px] uppercase tracking-wider">
                {footerOffer.contactLabel}:
              </span>
              <a
                href="mailto:sharipov.avez@gmail.com"
                className="inline-flex items-center gap-1.5 text-white hover:text-[#108A54] font-medium transition-colors"
              >
                <Mail className="w-4 h-4 text-[#108A54]" />
                <span>sharipov.avez@gmail.com</span>
              </a>
              <span className="text-slate-500 hidden sm:inline">&bull;</span>
              <a
                href="mailto:sharipov_a@pharmi.uz"
                className="inline-flex items-center gap-1.5 text-white hover:text-[#108A54] font-medium transition-colors"
              >
                <Mail className="w-4 h-4 text-[#108A54]" />
                <span>sharipov_a@pharmi.uz</span>
              </a>
              <span className="text-slate-500 hidden sm:inline">&bull;</span>
              <a
                href="tel:+998933494951"
                className="inline-flex items-center gap-1.5 text-white hover:text-[#108A54] font-mono transition-colors font-medium"
              >
                <Phone className="w-4 h-4 text-[#108A54]" />
                <span>+998933494951</span>
              </a>
              <span className="text-slate-500 hidden sm:inline">&bull;</span>
              <a
                href="tel:+998712563738"
                className="inline-flex items-center gap-1.5 text-white hover:text-[#108A54] font-mono transition-colors font-medium"
              >
                <Phone className="w-4 h-4 text-[#108A54]" />
                <span>+998712563738</span>
              </a>
            </div>

            {/* Manzil */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-200 font-body font-medium">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#108A54] shrink-0" />
                <span>{addressText}</span>
              </div>
              <a
                href="https://maps.google.com/?q=Tashkent+Pharmaceutical+Institute,+Oybek+Street+45,+Tashkent"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#108A54]/15 hover:bg-[#108A54]/25 text-[#108A54] hover:text-[#38D399] border border-[#108A54]/30 text-xs font-semibold transition-all group cursor-pointer"
              >
                <span>{openMapsText}</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Navigation Triggers */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-sm">
          <p className="text-slate-300">
            &copy; {new Date().getFullYear()} SLIPC Innovatsion farmatsevtik birikmalar ilmiy laboratoriyasi
          </p>

          <div className="flex flex-wrap items-center gap-6 font-semibold text-slate-200">
            <button
              onClick={onOpenAbout}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {t.navAbout}
            </button>
            {onOpenProjects && (
              <button
                onClick={onOpenProjects}
                className="hover:text-[#108A54] transition-colors cursor-pointer"
              >
                {t.navProjects}
              </button>
            )}
            <button
              onClick={onOpenStaff}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {t.navStaff}
            </button>
            <button
              onClick={onOpenPassport}
              className="hover:text-[#108A54] transition-colors cursor-pointer"
            >
              Horizon Europe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
