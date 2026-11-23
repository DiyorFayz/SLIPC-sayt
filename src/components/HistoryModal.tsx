'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Language } from '@/types/laboratory';
import { TRANSLATIONS } from '@/data/translations';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Calendar,
  Sparkles,
  Award,
  BookOpen,
  Users,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Building2,
  FileCheck2,
  ExternalLink,
} from 'lucide-react';

interface HistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const HistoryModal: React.FC<HistoryModalProps> = ({
  isOpen,
  onClose,
  currentLang,
}) => {
  const t = TRANSLATIONS[currentLang];
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Multilingual Texts
  const texts = {
    uz: {
      badge: "1987 — 2025 &bull; 38 YILLIK AN'ANA",
      mainTitle: "“Innovatsion farmatsevtik birikmalar” ilmiy laboratoriyasining shakllanish va rivojlanish tarixi",
      subtitle: "Toshkent farmatsevtika institutining 38 yillik ilmiy an'analari, dori yaratish maktabi, asoschilari va jahon miqyosidagi yutuqlari",
      timelineTitle: "Tarixiy Rivojlanish Bosqichlari va Xronologiya",
      timelineSubtitle: "Laboratoriya tashkil etilgan ilk kundan to bugungi zamonaviy in silico va ATCC darajasigacha",
      statsTitle: "1987–2025 Yillar Davomidagi Salmoqli Natijalar",
      foundersTitle: "Laboratoriya Bunyod Bo'lishi va Rivojiga Beqiyos Hissa Qo'shgan Olimlar",
      foundersSubtitle: "Institut rektorlari, akademiklar va laboratoriya asoschilari",
      teamTitle: "2024–2025 Yillardagi Ilmiy Jamoa Tarkibi",
      recentTitle: "Eng So'nggi Ilmiy Yutuqlar (2024–2025)",
      closeBtn: "Yopish",
    },
    ru: {
      badge: "1987 — 2025 &bull; 38 ЛЕТ НАУЧНЫХ ТРАДИЦИЙ",
      mainTitle: "История становления и развития научной лаборатории «Инновационные фармацевтические соединения»",
      subtitle: "38-летние научные традиции Ташкентского фармацевтического института, школа создания лекарств, основатели и мировые достижения",
      timelineTitle: "Исторические этапы развития и хронология",
      timelineSubtitle: "С момента основания лаборатории до современного уровня in silico и сертифицированных клеточных линий ATCC",
      statsTitle: "Весомые результаты за период 1987–2025 годов",
      foundersTitle: "Ученые, внесшие неоценимый вклад в создание и развитие лаборатории",
      foundersSubtitle: "Ректоры института, академики и выдающиеся исследователи",
      teamTitle: "Состав научного коллектива в 2024–2025 годах",
      recentTitle: "Новейшие научные достижения (2024–2025)",
      closeBtn: "Закрыть",
    },
    en: {
      badge: "1987 — 2025 &bull; 38 YEARS OF EXCELLENCE",
      mainTitle: "History and Evolution of the \"Innovative Pharmaceutical Compounds\" Scientific Laboratory",
      subtitle: "38 years of scientific traditions at the Tashkent Pharmaceutical Institute: drug discovery heritage, esteemed founders, and global milestones",
      timelineTitle: "Historical Milestones & Chronological Evolution",
      timelineSubtitle: "From its humble beginnings in 1987 to cutting-edge in silico supercomputing and ATCC cell line integration",
      statsTitle: "Major Achievements and Cumulative Output (1987–2025)",
      foundersTitle: "Esteemed Founders and Key Scientists Shaping Laboratory History",
      foundersSubtitle: "University rectors, academicians, and visionary investigators",
      teamTitle: "Scientific Research Team (2024–2025)",
      recentTitle: "Latest High-Impact Achievements (2024–2025)",
      closeBtn: "Close",
    },
  }[currentLang];

  const timelineSteps = [
    {
      year: "1987",
      title: {
        uz: "Ilk Asos Solinishi: Mikroelementlar va Biofaol Birikmalar",
        ru: "Основание лаборатории комплексных соединений микроэлементов",
        en: "Inception: Microelement Coordination Compounds Lab",
      },
      desc: {
        uz: "Laboratoriya faoliyatining shakllanishi 1987-yilda marhum rektor k.f.d., professor Mannon Azizovich Azizov tashabbusi bilan tashkil etilgan “Mikroelementlarning biologik faol birikmalar bilan kompleks birikmalarini yaratish muammolari” laboratoriyasidan boshlanadi.",
        ru: "Становление деятельности лаборатории началось в 1987 году по инициативе покойного ректора, д.х.н., профессора Маннона Азизовича Азизова с лаборатории «Проблемы создания комплексных соединений микроэлементов с биологически активными веществами».",
        en: "The laboratory was founded in 1987 on the initiative of the late rector, Doctor of Chemical Sciences, Professor Mannon Azizovich Azizov, initially established as the laboratory for \"Problems of Creating Coordination Compounds of Microelements with Biologically Active Compounds.\"",
      },
      tag: "Asos Solinishi",
      color: "#24356F",
    },
    {
      year: "1991 — 2000",
      title: {
        uz: "Markaziy Ilmiy-Tadqiqot Laboratoriyasi (MITL) Davri",
        ru: "Центральная научно-исследовательская лаборатория (ЦНИЛ)",
        en: "Central Research Laboratory (MITL) Transformation",
      },
      desc: {
        uz: "Toshkent farmatsevtika instituti rektori akademik Sadulla Iskandarov rahbarligida Markaziy ilmiy-tadqiqot laboratoriyasi (MITL) sifatida qayta tashkil etilib, ushbu davrda 25 ta mualliflik guvohnomasi va patentlar olinib, 300 dan ortiq ilmiy maqolalar chop etildi.",
        ru: "Под руководством ректора института, академика Садуллы Искандарова лаборатория была реорганизована в Центральную научно-исследовательскую лабораторию (ЦНИЛ / MITL). Получено 25 авторских свидетельств и патентов, опубликовано свыше 300 статей.",
        en: "Under the leadership of Institute Rector Academician Sadulla Iskandarov, the laboratory was reorganized into the Central Research Laboratory (MITL). This productive era produced 25 patents and inventor certificates along with over 300 published articles.",
      },
      tag: "25 Patent & 300+ Maqola",
      color: "#0072CE",
    },
    {
      year: "2017",
      title: {
        uz: "Koordinatsion Birikmalar va Farmako-Toksikologiya Laboratoriyasi",
        ru: "Фармако-токсикологическая лаборатория биоактивных веществ",
        en: "Pharmaco-Toxicological Modernization",
      },
      desc: {
        uz: "“Koordinatsion birikmalar va biofaol moddalar farmako-toksikologik laboratoriyasi”ga aylantirildi. Qisqa vaqt ichida zamonaviy asbob-uskunalar bilan jihozlanib, fiziologik, eksperimental modellashtirish, farmakologik tahlil, mikroskopik-gistologik, birinchi tibbiy yordam hamda virtual laboratoriyalar faoliyati yo'lga qo'yildi.",
        ru: "Преобразована в «Фармако-токсикологическую лабораторию координационных соединений и биоактивных веществ». Оснащена передовым оборудованием: открыты физиологический, аналитический, гистологический и виртуальный секторы.",
        en: "Reconstituted as the \"Pharmaco-Toxicological Laboratory of Coordination Compounds and Bioactive Substances.\" Upgraded with state-of-the-art instruments covering physiology, experimental modeling, histology, and virtual laboratory modules.",
      },
      tag: "Zamonaviy Jihozlanish",
      color: "#782AEB",
    },
    {
      year: "2024 — 2025",
      title: {
        uz: "Yangi Bino, ATCC Hujayralar Liniyasi va Mini Superkompyuter",
        ru: "Новый корпус, клеточный банк ATCC и мини-суперкомпьютер",
        en: "New High-Tech Facility, ATCC Cell Bank & Supercomputer",
      },
      desc: {
        uz: "Laboratoriya yangi ta’mirlangan va jihozlangan binoga ko‘chirilib, “Innovatsion farmatsevtik birikmalar” ilmiy laboratoriyasi deb nomlandi. Unda birinchi marta AQSh ATCC kompaniyasidan standart hujayralar liniyalari olib kelinib, tadqiqotlar yo‘lga qo‘yildi. Mini superkompyuter o'rnatilib, in silico hisoblashlar imkoni yaratildi.",
        ru: "Лаборатория переехала в новое современное здание под названием «Инновационные фармацевтические соединения». Впервые доставлены сертифицированные клеточные линии ATCC (США) и развернут мини-суперкомпьютер для in silico исследований.",
        en: "Relocated into a newly refurbished modern facility as the \"Innovative Pharmaceutical Compounds\" Scientific Laboratory. Standard human cell lines were imported from ATCC (USA) and a high-performance mini supercomputer was installed for in silico modeling.",
      },
      tag: "ATCC & In Silico",
      color: "#12715A",
    },
  ];

  const historicalStats = [
    {
      value: "1000+",
      label: {
        uz: "Sintez qilingan yangi moddalar",
        ru: "Синтезировано новых соединений",
        en: "Synthesized novel compounds",
      },
      sub: "1987–2025 yillar davomida",
    },
    {
      value: "~40",
      label: {
        uz: "Ishlab chiqilgan dori preparatlari",
        ru: "Разработано лекарственных препаратов",
        en: "Formulated drug products",
      },
      sub: "Amaliyotga joriy etishga tayyor",
    },
    {
      value: "700+",
      label: {
        uz: "Chop etilgan ilmiy ishlar",
        ru: "Опубликовано научных трудов",
        en: "Published scientific works",
      },
      sub: "Maqolalar, monografiyalar, tezislar",
    },
    {
      value: "50+",
      label: {
        uz: "Patent va mualliflik guvohnomalari",
        ru: "Патентов и авторских свидетельств",
        en: "Patents and inventor certificates",
      },
      sub: "Intellektual mulk himoyasi",
    },
    {
      value: "100+",
      label: {
        uz: "Xalqaro jurnallardagi maqolalar",
        ru: "Статей в международных журналах",
        en: "International journal publications",
      },
      sub: "Scopus va Web of Science bazalarida",
    },
    {
      value: "36.3",
      label: {
        uz: "Eng yuqori Impact Factor (2025)",
        ru: "Наивысший импакт-фактор (2025)",
        en: "Highest Impact Factor (2025)",
      },
      sub: "Nano-Micro Letters (Q1)",
    },
  ];

  const founders = [
    { name: "M.A. Azizov", role: "k.f.d., professor, ToshFarmI sobiq rektori, laboratoriya asoschisi" },
    { name: "S. Iskandarov", role: "Akademik, ToshFarmI sobiq rektori, MITL rahbari" },
    { name: "X.U. Aliyev", role: "Professor, atoqli olim" },
    { name: "A.A. Shabilalov", role: "Yetakchi olim, farmatsevtik kimyo" },
    { name: "A.N. Yunusxodjayev", role: "Professor, ToshFarmI sobiq rektori" },
    { name: "X.K. Djalilov", role: "Professor, ilmiy maktab vakili" },
    { name: "I.I. Alimdjanov", role: "Olim, farmatsevtika rivojiga hissa qo'shgan" },
    { name: "K.S. Rizayev", role: "Professor, institut rektori" },
    { name: "S.A. Saidov", role: "Yetakchi tadqiqotchi olim" },
    { name: "B.S. Tulyaganov", role: "Katta ilmiy xodim, PhD" },
    { name: "M. Isajonov", role: "Ilmiy xodim va ustoz" },
    { name: "A.T. Sharipov", role: "Laboratoriya mudiri, professor, DSc" },
    { name: "R.R. Saidov", role: "Ilmiy tadqiqotchi" },
    { name: "Sh.Sh. Gulyamov", role: "Katta ilmiy xodim, PhD" },
  ];

  const currentTeam = [
    "A.T. Sharipov",
    "R.T. Tulyaganov",
    "Sh.Sh. Gulyamov",
    "B.S. Tulyaganov",
    "R.R. Saidov",
    "A.A. Abdug’aforov",
    "L. Elmurodov",
    "D.X. Xayrullayev",
    "F. Xo’jayeva",
    "K.A. Almirzayeva",
    "A.R. Shokodirov",
    "U. Ganiyev",
    "R.Yu. Zakirova",
  ];

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0A1128]/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ type: 'spring', duration: 0.35, bounce: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full sm:max-w-4xl glass-modal sm:rounded-2xl overflow-hidden flex flex-col max-h-[92vh] z-[101] bg-white shadow-2xl"
          >
            {/* Header Gradient Top Bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#24356F] via-[#0072CE] to-[#12715A] shrink-0" />

            {/* Modal Header */}
            <div className="p-4 sm:p-5 bg-white/95 border-b border-[#DDE2EF] flex items-center justify-between gap-4 shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-1 rounded-lg bg-white border border-[#E2E8F0] shadow-sm shrink-0">
                  <img
                    src={currentLang === 'uz' ? '/logo-ifbil.webp' : '/logo-slipc.webp'}
                    alt={currentLang === 'uz' ? 'IFBIL' : 'SLIPC'}
                    className="w-10 h-10 rounded-md object-contain bg-white"
                  />
                </div>
                <h2 className="text-lg sm:text-xl font-bold font-display text-[#1B1F2A]">
                  {currentLang === 'uz'
                    ? 'Laboratoriya tarixi'
                    : currentLang === 'ru'
                    ? 'История лаборатории'
                    : 'Laboratory History'}
                </h2>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-xl border border-[#DDE2EF] bg-white text-[#5C6478] hover:text-[#24356F] hover:bg-[#F3F5FB] transition-colors shrink-0 cursor-pointer"
                aria-label={texts.closeBtn}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-8 bg-[#F8FAFC]">
              
              {/* Highlight Hero Callout */}
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#24356F] to-[#1B2854] text-white shadow-md relative overflow-hidden">
                <div className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full bg-white/5 pointer-events-none" />
                <div className="relative z-10 space-y-2">
                  <span className="text-[11px] font-mono font-semibold tracking-wider text-[#38D399] uppercase">
                    Toshkent Farmatsevtika Instituti &bull; SLIPC Tarixi
                  </span>
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-body">
                    Laboratoriya 1987-yildan buyon farmatsevtika fanining yetakchi ilmiy markazi sifatida faoliyat ko'rsatib kelmoqda.
                    Bugungi kunda jahon andozalariga javob beruvchi uskunalar, ATCC standart hujayra liniyalari hamda in silico hisoblash bazasi bilan O'zbekistonda innovatsion dori vositalarini yaratishga munosib hissa qo'shib kelmoqda.
                  </p>
                </div>
              </div>

              {/* 1. Visual Chronological Timeline */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="w-5 h-5 text-[#24356F]" />
                  <h3 className="text-base sm:text-lg font-bold font-display text-[#1B1F2A]">
                    {texts.timelineTitle}
                  </h3>
                </div>
                <p className="text-xs text-[#5C6478] font-body mb-5">
                  {texts.timelineSubtitle}
                </p>

                <div className="space-y-4">
                  {timelineSteps.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-4 sm:p-5 rounded-2xl bg-white border border-[#DDE2EF] shadow-2xs hover:shadow-xs transition-shadow flex flex-col sm:flex-row sm:items-start gap-4"
                    >
                      <div className="shrink-0 flex items-center sm:flex-col sm:items-start gap-2 sm:gap-1 sm:w-36">
                        <span
                          className="font-mono text-sm sm:text-base font-bold px-2.5 py-1 rounded-lg text-white shadow-2xs"
                          style={{ backgroundColor: step.color }}
                        >
                          {step.year}
                        </span>
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-[#F3F5FB] text-[#24356F] border border-[#DDE2EF]">
                          {step.tag}
                        </span>
                      </div>

                      <div className="flex-1 space-y-1">
                        <h4 className="text-sm sm:text-base font-bold font-display text-[#1B1F2A]">
                          {step.title[currentLang]}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#5C6478] font-body leading-relaxed">
                          {step.desc[currentLang]}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Cumulative Historical Stats (1987-2025) */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="w-5 h-5 text-[#12715A]" />
                  <h3 className="text-base sm:text-lg font-bold font-display text-[#1B1F2A]">
                    {texts.statsTitle}
                  </h3>
                </div>
                <p className="text-xs text-[#5C6478] font-body mb-5">
                  Laboratoriya ilmiy jamoasining ko'p yillik fidokorona mehnati samarasida erishilgan ko'rsatkichlar
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  {historicalStats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white border border-[#DDE2EF] shadow-2xs flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-xl sm:text-2xl font-bold font-mono text-[#24356F] block tracking-tight">
                          {stat.value}
                        </span>
                        <span className="text-xs font-bold font-display text-[#1B1F2A] mt-1 block leading-snug">
                          {stat.label[currentLang]}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-[#8A91A3] mt-2 block border-t border-slate-100 pt-1.5">
                        {stat.sub}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. 2024-2025 High Impact Highlights (Nano-Micro Letters Q1 IF 36.3) */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-[#E3F1EC] via-white to-[#E6EAF5] border border-[#A7D7C5] shadow-xs">
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-xl bg-[#12715A] text-white shrink-0 shadow-2xs">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5 text-xs sm:text-sm text-[#1B1F2A]">
                    <h4 className="font-bold font-display text-[#12715A] text-sm sm:text-base">
                      {texts.recentTitle}: Nano-Micro Letters (IF: 36.3)
                    </h4>
                    <p className="text-[#2D3748] leading-relaxed font-body">
                      2024–2025-yillarda ilmiy jamoa tomonidan Scopus bazasida indeksatsiyalangan nufuzli nashrlarda <strong>20 dan ortiq</strong> ilmiy maqola va kitob bo‘limlari chop etildi (ularning <strong>60% 1- va 2-kvartildagi (Q1/Q2)</strong> nashrlar hissasiga to‘g‘ri keladi).
                    </p>
                    <p className="text-[#24356F] font-medium font-body">
                      Ilmiy jamoa 2025-yilda nihoyatda yuqori impact faktorga (<strong>IF: 36.3</strong>) ega xalqaro <strong>«Nano-Micro Letters»</strong> jurnalida maqola nashr etishga muvaffaq bo‘ldi hamda hozirda <strong>1 ta fundamental loyiha</strong> doirasida ilmiy tadqiqotlar davom ettirilmoqda.
                    </p>
                  </div>
                </div>
              </div>

              {/* 4. 2024-2025 Research Team */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-5 h-5 text-[#24356F]" />
                  <h3 className="text-base sm:text-lg font-bold font-display text-[#1B1F2A]">
                    {texts.teamTitle}
                  </h3>
                </div>
                <p className="text-xs text-[#5C6478] font-body mb-4">
                  Hozirgi kunda laboratoriyada ilmiy izlanishlar olib borayotgan olimlar va tadqiqotchilar
                </p>

                <div className="flex flex-wrap gap-2">
                  {currentTeam.map((name, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-white border border-[#DDE2EF] text-[#24356F] font-mono text-xs font-semibold shadow-2xs flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#12715A]" />
                      <span>{name}</span>
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-white/95 border-t border-[#DDE2EF] flex items-center justify-between shrink-0">
              <span className="text-xs font-mono text-[#5C6478]">
                SLIPC &bull; 1987-yildan buyon fan xizmatida
              </span>
              <button
                onClick={onClose}
                className="btn-pharmi btn-pharmi-primary text-xs px-5 py-2 cursor-pointer"
              >
                {texts.closeBtn}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};
