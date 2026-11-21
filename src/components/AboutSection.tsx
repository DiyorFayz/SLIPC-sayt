'use client';

import React, { useState } from 'react';
import { Language } from '@/types/laboratory';
import { TRANSLATIONS } from '@/data/translations';
import {
  Mail,
  Users,
  ShieldCheck,
  ExternalLink,
  Building2,
  X,
  Sparkles,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { HistoryModal } from '@/components/HistoryModal';
import { CometCard } from '@/components/ui/comet-card';

interface AboutSectionProps {
  currentLang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];
  const [glpPage, setGlpPage] = useState<1 | 2>(1);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  const pillars = [
    { title: t.aboutPillar1Title, desc: t.aboutPillar1Desc },
    { title: t.aboutPillar2Title, desc: t.aboutPillar2Desc },
    { title: t.aboutPillar3Title, desc: t.aboutPillar3Desc },
    { title: t.aboutPillar4Title, desc: t.aboutPillar4Desc },
  ];

  const staffMembers = [
    {
      name: "Professor Avez Sharipov, DSc",
      image: "/staff/sharipov.jpg",
      title: {
        uz: "SLIPC laboratoriya mudiri, professor",
        ru: "Заведующий лабораторией SLIPC, профессор",
        en: "Head of SLIPC Laboratory, Professor"
      },
      room: {
        uz: "In Vivo Farmakologiya",
        ru: "In Vivo Фармакология",
        en: "In Vivo Pharmacology"
      },
      roomCode: "LAB-PH-102",
      email: "a.sharipov@slipc-lab.uz",
      color: "#FF585D"
    },
    {
      name: "Tulyaganov Bobir Sobirovich",
      image: "/staff/tulyaganov.svg",
      title: {
        uz: "Katta ilmiy xodim, PhD",
        ru: "Старший научный сотрудник, PhD",
        en: "Senior Research Scientist, PhD"
      },
      room: {
        uz: "HPLC Xromatografiya",
        ru: "ВЭЖХ Хроматография",
        en: "HPLC Chromatography"
      },
      roomCode: "LAB-HP-201",
      email: "b.tulyaganov@slipc-lab.uz",
      color: "#782AEB"
    },
    {
      name: "Gulyamov Shohid Sharofutdin o'g'li",
      image: "/staff/gulyamov.svg",
      title: {
        uz: "Katta ilmiy xodim, PhD",
        ru: "Старший научный сотрудник, PhD",
        en: "Senior Research Scientist, PhD"
      },
      room: {
        uz: "In Vitro & Hujayra",
        ru: "In Vitro & Клетки",
        en: "In Vitro & Cell Biology"
      },
      roomCode: "LAB-IV-101",
      email: "sh.gulyamov@slipc-lab.uz",
      color: "#0072CE"
    },
    {
      name: "Fayzullayev D.T.",
      image: "/staff/fayzullayev.svg",
      title: {
        uz: "Kichik ilmiy xodim",
        ru: "Младший научный сотрудник",
        en: "Junior Research Scientist"
      },
      room: {
        uz: "Fitokimyo & Farm Tex",
        ru: "Фитохимия & Фармтех",
        en: "Phytochemistry & Pharm Tech"
      },
      roomCode: "LAB-PC-301",
      email: "d.fayzullayev@slipc-lab.uz",
      color: "#FFB81C"
    },
    {
      name: "Sulaymonova Nigina Jamshid qizi",
      image: "/staff/sulaymonova.svg",
      title: {
        uz: "Kichik ilmiy xodim",
        ru: "Младший научный сотрудник",
        en: "Junior Research Scientist"
      },
      room: {
        uz: "Biokimyo & Enzimologiya",
        ru: "Биохимия & Энзимология",
        en: "Biochemistry & Enzymology"
      },
      roomCode: "LAB-BC-202",
      email: "n.sulaymonova@slipc-lab.uz",
      color: "#009F4D"
    }
  ];

  const staffTitle = {
    uz: "Yetakchi Ilmiy Xodimlar",
    ru: "Ведущие Научные Сотрудники",
    en: "Leading Research Scientists"
  }[currentLang];

  return (
    <section id="about-section" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-3">{t.sectionAboutTag}</p>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            {t.sectionAboutTitle}
          </h2>
          <p className="text-slate-500 mt-3 leading-relaxed">
            {t.sectionAboutSubtitle}
          </p>
        </div>

        {/* Laboratory Description */}
        <div className="mb-8 max-w-4xl bg-slate-50 p-6 rounded-sm border border-slate-200">
          <p className="text-slate-700 leading-relaxed font-sans whitespace-pre-line">
            {t.aboutMissionText}
          </p>
        </div>

        {/* Laboratory Origin & History Subsection */}
        <div className="mb-12 max-w-4xl">
          <div className="rounded-lg p-6 border border-[#E2E8F0] bg-white shadow-xs hover:border-[#0F2942]/30 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-[#0F2942]/10 text-[#0F2942] border border-[#0F2942]/20 uppercase">
                    1987 — 2025 &bull; 38 Yil
                  </span>
                  <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#108A54]/10 text-[#108A54] border border-[#108A54]/20">
                    IF: 36.3
                  </span>
                </div>
                <h3 className="text-lg font-bold font-display text-[#0F2942]">
                  {currentLang === 'uz'
                    ? "Laboratoriyaning kelib chiqish tarixi"
                    : currentLang === 'ru'
                      ? "История происхождения лаборатории"
                      : "Origins & History of the Laboratory"}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] font-body mt-1 leading-relaxed max-w-xl">
                  {currentLang === 'uz'
                    ? "1987-yilda tashkil etilgan ilk laboratoriyadan bugungi kungacha bosib o'tilgan 38 yillik ilmiy taraqqiyot yo'li, 1000 dan ortiq yangi moddalar sintezi, 40 ta dori vositasi va nufuzli Scopus Q1 nashrlari."
                    : currentLang === 'ru'
                      ? "38-летний путь научного развития с 1987 года: синтез более 1000 новых соединений, создание около 40 лекарственных средств и передовые публикации Q1."
                      : "38 years of scientific drug discovery since 1987: over 1,000 synthesized molecules, ~40 formulated pharmaceuticals, and high-impact Q1 publications."}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsHistoryOpen(true)}
                className="self-start md:self-center px-4 py-2.5 rounded-lg bg-[#0F2942] hover:bg-[#081726] text-white text-xs font-semibold flex items-center gap-2 transition-all shadow-xs shrink-0 cursor-pointer group"
              >
                <Sparkles className="w-4 h-4 text-[#108A54]" />
                <span>
                  {currentLang === 'uz'
                    ? "Tarix sahifasini ochish"
                    : currentLang === 'ru'
                      ? "Открыть страницу истории"
                      : "View Full History Page"}
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-white/70 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* 4 Quick Highlights Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4 mt-4 border-t border-[#E2E8F0] text-xs">
              <div className="p-2.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                <span className="text-[10px] font-mono text-[#64748B] block uppercase">1987-yil</span>
                <span className="font-bold text-[#0F2942] block text-xs mt-0.5">Prof. M.A. Azizov</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                <span className="text-[10px] font-mono text-[#64748B] block uppercase">1991–2000 MITL</span>
                <span className="font-bold text-[#0F2942] block text-xs mt-0.5">25 Patent, 300+ Maqola</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                <span className="text-[10px] font-mono text-[#64748B] block uppercase">Jami Natija</span>
                <span className="font-bold text-[#108A54] block text-xs mt-0.5">1000+ Modda, ~40 Dori</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                <span className="text-[10px] font-mono text-[#64748B] block uppercase">2025 Natija</span>
                <span className="font-bold text-[#0F2942] block text-xs mt-0.5">IF 36.3 (Q1 Jurnal)</span>
              </div>
            </div>
          </div>
        </div>

        {/* License & Accreditation Subsection */}
        <div className="mb-16">
          <div className="space-y-6">
            {/* CARD 1: ISO/IEC 17025 */}
            <div className="p-6 bg-slate-50 rounded-sm border border-slate-200">
              <div className="flex flex-col lg:flex-row gap-6 items-center lg:items-start">
                {/* Certificate Preview Frame */}
                <div className="w-full sm:w-64 lg:w-72 shrink-0">
                  <CometCard rotateDepth={15}>
                    <div className="relative rounded-sm overflow-hidden border-2 border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-emerald-600 transition-all">
                      <img
                        src="/certificate.jpg"
                        alt={t.licenseCertName}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-auto object-cover block"
                      />
                    </div>
                  </CometCard>
                </div>

                {/* Certificate Details */}
                <div className="flex-1 w-full space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-sm bg-emerald-100 text-emerald-800 border border-emerald-200">
                      {t.licenseStandard}
                    </span>
                    <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-sm bg-blue-100 text-blue-800 border border-blue-200">
                      № {t.licenseRegNumber}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {t.licenseCertName}
                    </h4>
                    <p className="text-xs sm:text-sm text-blue-700 font-semibold mt-1">
                      {t.licenseOrgName}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-200 text-xs">
                    <div className="p-3 bg-white rounded-sm border border-slate-200">
                      <span className="text-slate-400 block text-[10px] uppercase font-mono tracking-wider font-semibold">
                        {currentLang === 'uz' ? 'Akkreditatsiya organi' : currentLang === 'ru' ? 'Орган аккредитации' : 'Accreditation Body'}
                      </span>
                      <span className="text-slate-800 font-semibold mt-0.5 block">
                        {t.licenseIssuer}
                      </span>
                    </div>

                    <div className="p-3 bg-white rounded-sm border border-slate-200">
                      <span className="text-slate-400 block text-[10px] uppercase font-mono tracking-wider font-semibold">
                        {currentLang === 'uz' ? 'Standart talabi' : currentLang === 'ru' ? 'Требование стандарта' : 'Standard Specification'}
                      </span>
                      <span className="text-slate-800 font-semibold mt-0.5 block">
                        {t.licenseStandardDesc}
                      </span>
                    </div>

                    <div className="p-3 bg-white rounded-sm border border-slate-200">
                      <span className="text-slate-400 block text-[10px] uppercase font-mono tracking-wider font-semibold">
                        {currentLang === 'uz' ? 'Berilgan sana' : currentLang === 'ru' ? 'Дата выдачи' : 'Issue Date'}
                      </span>
                      <span className="font-mono text-slate-800 font-semibold mt-0.5 block">
                        {t.licenseDate}
                      </span>
                    </div>

                    <div className="p-3 bg-white rounded-sm border border-slate-200">
                      <span className="text-slate-400 block text-[10px] uppercase font-mono tracking-wider font-semibold">
                        {currentLang === 'uz' ? 'Amal qilish muddati' : currentLang === 'ru' ? 'Срок действия' : 'Validity Period'}
                      </span>
                      <span className="font-mono text-emerald-700 font-bold mt-0.5 block">
                        {t.licenseExpiry}
                      </span>
                    </div>
                  </div>

                  <div className="p-3 bg-white rounded-sm border border-slate-200 text-xs text-slate-600 space-y-1">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span><strong className="text-slate-800">ILAC-MRA:</strong> {t.licenseRecognition}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{t.licenseAddress}</span>
                    </div>
                  </div>

                  <div className="pt-1">
                    <a
                      href="https://akkred.uz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{t.licenseVerify}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 2: GLP Zarur Laboratoriya Amaliyoti */}
            <div className="p-6 bg-slate-50 rounded-sm border border-slate-200">
              <div className="flex flex-col lg:flex-row gap-6 items-center lg:items-start">
                {/* Certificate Preview Frame & Page Selector */}
                <div className="w-full sm:w-64 lg:w-72 shrink-0">
                  <div className="flex items-center gap-1.5 mb-2 p-1 bg-white rounded border border-slate-200">
                    <button
                      type="button"
                      onClick={() => setGlpPage(1)}
                      className={`flex-1 py-1 px-2 rounded text-[11px] font-mono font-bold transition-all cursor-pointer ${glpPage === 1
                        ? 'bg-emerald-700 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                        }`}
                    >
                      {t.glpPage1Label}
                    </button>
                    <button
                      type="button"
                      onClick={() => setGlpPage(2)}
                      className={`flex-1 py-1 px-2 rounded text-[11px] font-mono font-bold transition-all cursor-pointer ${glpPage === 2
                        ? 'bg-emerald-700 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                        }`}
                    >
                      {t.glpPage2Label}
                    </button>
                  </div>

                  <CometCard rotateDepth={15}>
                    <div className="relative rounded-sm overflow-hidden border-2 border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-emerald-600 transition-all">
                      <img
                        src={glpPage === 1 ? '/glp-certificate-p1.jpg' : '/glp-certificate-p2.jpg'}
                        alt={t.glpCertName}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-auto object-cover block"
                      />
                    </div>
                  </CometCard>
                </div>

                {/* Certificate Details */}
                <div className="flex-1 w-full space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-sm bg-emerald-100 text-emerald-800 border border-emerald-200">
                      {t.glpStandard}
                    </span>
                    <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-sm bg-blue-100 text-blue-800 border border-blue-200">
                      {t.glpRegNumber}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {t.glpCertName}
                    </h4>
                    <p className="text-xs sm:text-sm text-blue-700 font-semibold mt-1">
                      {t.glpOrgName}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-200 text-xs">
                    <div className="p-3 bg-white rounded-sm border border-slate-200">
                      <span className="text-slate-400 block text-[10px] uppercase font-mono tracking-wider font-semibold">
                        {currentLang === 'uz' ? 'Tasdiqlovchi organ' : currentLang === 'ru' ? 'Орган сертификации' : 'Certifying Body'}
                      </span>
                      <span className="text-slate-800 font-semibold mt-0.5 block">
                        {t.glpIssuer}
                      </span>
                    </div>

                    <div className="p-3 bg-white rounded-sm border border-slate-200">
                      <span className="text-slate-400 block text-[10px] uppercase font-mono tracking-wider font-semibold">
                        {currentLang === 'uz' ? 'Standart talabi' : currentLang === 'ru' ? 'Требование стандарта' : 'Standard Specification'}
                      </span>
                      <span className="text-slate-800 font-semibold mt-0.5 block">
                        {t.glpStandardDesc}
                      </span>
                    </div>

                    <div className="p-3 bg-white rounded-sm border border-slate-200">
                      <span className="text-slate-400 block text-[10px] uppercase font-mono tracking-wider font-semibold">
                        {currentLang === 'uz' ? 'Berilgan sana' : currentLang === 'ru' ? 'Дата выдачи' : 'Issue Date'}
                      </span>
                      <span className="font-mono text-slate-800 font-semibold mt-0.5 block">
                        {t.glpDate}
                      </span>
                    </div>

                    <div className="p-3 bg-white rounded-sm border border-slate-200">
                      <span className="text-slate-400 block text-[10px] uppercase font-mono tracking-wider font-semibold">
                        {currentLang === 'uz' ? 'Amal qilish muddati' : currentLang === 'ru' ? 'Срок действия' : 'Validity Period'}
                      </span>
                      <span className="font-mono text-emerald-700 font-bold mt-0.5 block">
                        {t.glpExpiry}
                      </span>
                    </div>
                  </div>

                  <div className="p-3 bg-white rounded-sm border border-slate-200 text-xs text-slate-600 space-y-1">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span><strong className="text-slate-800">{currentLang === 'uz' ? 'Inspeksiya' : currentLang === 'ru' ? 'Инспекция' : 'Inspection'}:</strong> {t.glpInspection}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span><strong className="text-slate-800">{currentLang === 'uz' ? 'Aloqa' : currentLang === 'ru' ? 'Контакты' : 'Contact'}:</strong> {t.glpContact}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Staff Subsection */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Users className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-bold text-slate-900 tracking-tight">
              {staffTitle}
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {staffMembers.map((member, idx) => (
              <div
                key={idx}
                className="p-5 bg-slate-50 rounded-sm border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between"
                style={{ borderTopWidth: '3px', borderTopColor: member.color }}
              >
                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      decoding="async"
                      className="w-14 h-14 rounded-full border-2 bg-slate-900 object-cover object-top shadow-xs"
                      style={{ borderColor: member.color }}
                    />
                    <div>
                      <span className="font-mono-sci text-xs font-bold px-1.5 py-0.5 rounded-xs bg-white text-slate-700 border border-slate-200 inline-block mb-1">
                        {member.roomCode}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 leading-snug">
                        {member.name}
                      </h4>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {member.title[currentLang]}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs font-mono-sci text-slate-500">
                  <span>{member.room[currentLang]}</span>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-blue-600 hover:text-blue-800"
                    title={member.email}
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => (
            <div key={idx}>
              <h4 className="text-base font-semibold text-slate-900 mb-2">
                {pillar.title}
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* History Modal */}
      <HistoryModal
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        currentLang={currentLang}
      />
    </section>
  );
};
