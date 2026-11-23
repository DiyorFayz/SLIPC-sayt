'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LabRoom, Language } from '@/types/laboratory';
import { TRANSLATIONS } from '@/data/translations';
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  ShieldCheck,
  FlaskConical,
  Layers,
  Award,
  Building2,
  Microscope,
  ExternalLink,
} from 'lucide-react';

interface DepartmentsSliderProps {
  rooms: LabRoom[];
  currentLang: Language;
  onOpenDetails: (room: LabRoom) => void;
  onOpenPassport?: () => void;
}

interface SlideData {
  id: string;
  code: string;
  roomCategory: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  bullets: Record<Language, string[]>;
  image: string;
  badge: Record<Language, string>;
}

const SLIDES: SlideData[] = [
  {
    id: "sintez-insilico",
    code: "LAB-01",
    roomCategory: "sintez-insilico",
    title: {
      uz: "Yangi biologik faol birikmalarni sintez qilish va in silico tadqiqotlar bo‘limi",
      ru: "Отдел синтеза новых биологически активных соединений и in silico исследований",
      en: "Department of Synthesis of New Biologically Active Compounds and In Silico Studies",
    },
    description: {
      uz: "Yangi kichik molekulalarni loyihalaymiz va sintez qilamiz. Doking, molekulyar dinamika, ADMET va QSAR istiqbolli tuzilmalarni tajribadan oldin saralashga yordam beradi.",
      ru: "Проектируем и синтезируем малые молекулы. Докинг, молекулярная динамика, ADMET и QSAR позволяют отобрать перспективные соединения до экспериментов.",
      en: "We design and synthesize novel small molecules. Docking, molecular dynamics, ADMET, and QSAR accelerate preclinical lead candidate selection.",
    },
    bullets: {
      uz: [
        "Yangi kichik molekulalarni loyihalash va sintez qilish",
        "Molekulyar doking va molekulyar dinamika simulyatsiyalari",
        "ADMET tahlili: so‘rilish, tarqalish, metabolizm, chiqarilish",
        "QSAR modellashtirish",
      ],
      ru: [
        "Дизайн и синтез новых малых молекул",
        "Молекулярный докинг и симуляции молекулярной динамики",
        "ADMET анализ: абсорбция, распределение, метаболизм, выведение",
        "QSAR моделирование",
      ],
      en: [
        "Design and synthesis of new small molecules",
        "Molecular docking and molecular dynamics simulations",
        "ADMET profiling: absorption, distribution, metabolism, excretion",
        "QSAR computational modeling",
      ],
    },
    image: "/images/slides/slide-sintez-insilico.webp",
    badge: {
      uz: "In Silico & Sintez",
      ru: "In Silico и Синтез",
      en: "In Silico & Synthesis",
    },
  },
  {
    id: "instrumental-tahlil",
    code: "LAB-02",
    roomCategory: "instrumental",
    title: {
      uz: "Fizik-kimyoviy va instrumental tahlil bo‘limi",
      ru: "Отдел физико-химического и инструментального анализа",
      en: "Department of Physicochemical and Instrumental Analysis",
    },
    description: {
      uz: "Dori vositalari, substansiyalar va biologik faol qo‘shimchalarning sifat va miqdoriy tahlili, tozalik darajasi, barqarorlik hamda bioekvivalentlik testlari.",
      ru: "Качественный и количественный анализ лекарственных средств, субстанций и БАД, оценка чистоты, стабильности и исследования биоэквивалентности.",
      en: "High-precision qualitative and quantitative assay of APIs, pharmaceutical formulations, dissolution profiling, stability, and biowaiver/bioequivalence testing.",
    },
    bullets: {
      uz: [
        "Yuqori samarali suyuqlik xromatografiyasi (HPLC/UPLC)",
        "Mass-spektrometriya va bioanalitik tahlillar",
        "Eruvchanlik (Dissolution) va biowaiver tadqiqotlari",
        "ICH standartlari bo‘yicha barqarorlik (Stability) testi",
      ],
      ru: [
        "Высокоэффективная жидкостная хроматография (ВЭЖХ/UPLC)",
        "Масс-спектрометрия и биоаналитические анализы",
        "Тест растворения (Dissolution) и исследования biowaiver",
        "Испытания стабильности по стандартам ICH",
      ],
      en: [
        "High-performance liquid chromatography (HPLC/UPLC)",
        "Mass spectrometry and bioanalytical assays",
        "Dissolution testing and biowaiver investigations",
        "ICH-compliant stability testing protocols",
      ],
    },
    image: "/images/slides/slide-instrumental.webp",
    badge: {
      uz: "HPLC & Bioanalitika",
      ru: "ВЭЖХ и Биоаналитика",
      en: "HPLC & Bioanalytics",
    },
  },
  {
    id: "in-vitro",
    code: "LAB-03",
    roomCategory: "in-vitro",
    title: {
      uz: "In vitro tadqiqotlar bo‘limi",
      ru: "Отдел in vitro исследований",
      en: "Department of In Vitro Studies",
    },
    description: {
      uz: "Hujayra kulturalari ustida sitotoksiklik, proliferatsiya, apoptoz, yallig‘lanishga qarshi va saratonga qarshi samaradorlikni zamonaviy molekulyar usullarda baholash.",
      ru: "Оценка цитотоксичности, пролиферации, апоптоза, противовоспалительной и противоопухолевой активности на клеточных линиях с использованием молекулярных методов.",
      en: "Cytotoxicity, cellular proliferation, apoptosis, anti-inflammatory, and antitumor evaluation using human and mammalian primary and continuous cell lines.",
    },
    bullets: {
      uz: [
        "MTT, XTT va WST-1 sitotoksiklik tahlillari",
        "Saratonga qarshi (Anticancer) in vitro skrining",
        "ELISA va sitokin profiling immunologik testlari",
        "Apoptoz va hujayra regeneratsiyasi (Wound healing)",
      ],
      ru: [
        "Цитотоксические анализы MTT, XTT и WST-1",
        "Противоопухолевый (Anticancer) in vitro скрининг",
        "Иммуноферментный анализ ELISA и профилирование цитокинов",
        "Анализ апоптоза и регенерации (Wound healing)",
      ],
      en: [
        "MTT, XTT, and WST-1 cell viability and cytotoxicity assays",
        "Targeted anticancer in vitro pharmacological screening",
        "ELISA immunoassays and cytokine profile quantification",
        "Apoptosis and scratch wound healing migration assays",
      ],
    },
    image: "/images/slides/slide-in-vitro.webp",
    badge: {
      uz: "Hujayra Biologiyasi",
      ru: "Клеточная биология",
      en: "Cell Biology",
    },
  },
  {
    id: "in-vivo",
    code: "LAB-04",
    roomCategory: "in-vivo",
    title: {
      uz: "In vivo farmakologiya va toksikologiya bo‘limi",
      ru: "Отдел in vivo фармакологии и токсикологии",
      en: "Department of In Vivo Pharmacology and Toxicology",
    },
    description: {
      uz: "Klinik oldi farmakologik faollik, o‘tkir va surunkali toksiklik, farmakokinetika, biologik xavfsizlik hamda xalqaro 3R prinsiplari asosidagi eksperimentlar.",
      ru: "Доклиническое изучение фармакологической активности, острой и подострой токсичности, фармакокинетики и биобезопасности по принципам 3R.",
      en: "Preclinical in vivo pharmacology, acute and chronic toxicity (LD50), pharmacokinetic safety profiles, and animal bioethics adhering to international 3R guidelines.",
    },
    bullets: {
      uz: [
        "O‘tkir va surunkali toksiklikni aniqlash (LD50, 28/90 kun)",
        "Preklinik farmakologik faollik va biologik samaradorlik",
        "Tirik organizmda farmakokinetika (PK/TK) monitoringi",
        "Teriga ta’sir, allergenlik va mahalliy qitiqlash sinovlari",
      ],
      ru: [
        "Определение острой и хронической токсичности (LD50, 28/90 дней)",
        "Доклиническая фармакологическая активность и эффективность",
        "Фармакокинетический (PK/TK) мониторинг in vivo",
        "Кожно-раздражающее и аллергенное действие",
      ],
      en: [
        "Acute and chronic toxicity assessment (LD50, 28/90-day)",
        "Preclinical in vivo pharmacological efficacy studies",
        "In vivo pharmacokinetic (PK/TK) profile monitoring",
        "Dermal irritation, sensitization, and local tolerance tests",
      ],
    },
    image: "/images/slides/slide-in-vivo.webp",
    badge: {
      uz: "Preklinik Farmakologiya",
      ru: "Доклиническая фармакология",
      en: "Preclinical Pharmacology",
    },
  },
  {
    id: "vivariy",
    code: "LAB-05",
    roomCategory: "vivariy",
    title: {
      uz: "Vivariy bo‘limi",
      ru: "Отдел вивария",
      en: "Vivarium Facility Department",
    },
    description: {
      uz: "Tajriba hayvonlarini SPF va GLP xalqaro gigiyena standartlari asosida parvarishlash, individual ventilyatsiya qilinadigan (IVC) boks majmuasi va toza xonalar.",
      ru: "Содержание и разведение лабораторных животных по международным стандартам SPF и GLP в индивидуально вентилируемых боксах (IVC).",
      en: "State-of-the-art laboratory animal housing under SPF and international GLP conditions, IVC air-filtered cages, and microclimate automation.",
    },
    bullets: {
      uz: [
        "GLP talablari darajasidagi toza muhit va kvarslash",
        "Individual ventilyatsiya qilinadigan (IVC) qafaslar",
        "Genetik toza laboratoriya hayvonlari populyatsiyasi",
        "Avtomatlashtirilgan mikroiqlim va bioxavfsizlik nazorati",
      ],
      ru: [
        "Чистая среда и кварцевание по стандартам GLP",
        "Индивидуально вентилируемые клетки (IVC)",
        "Генетически чистая популяция лабораторных животных",
        "Автоматизированный контроль микроклимата и биобезопасности",
      ],
      en: [
        "GLP-compliant barrier containment and sterilisation",
        "Individually ventilated cage (IVC) systems",
        "Genetically validated experimental animal models",
        "Automated microclimate and HEPA biosafety control",
      ],
    },
    image: "/images/slides/slide-vivariy.webp",
    badge: {
      uz: "GLP & SPF Vivariy",
      ru: "GLP и SPF Виварий",
      en: "GLP & SPF Vivarium",
    },
  },
];

export const DepartmentsSlider: React.FC<DepartmentsSliderProps> = ({
  rooms,
  currentLang,
  onOpenDetails,
  onOpenPassport,
}) => {
  const [[currentIndex, direction], setSlide] = useState<[number, number]>([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const t = TRANSLATIONS[currentLang];
  const totalSlides = SLIDES.length;
  const currentSlide = SLIDES[currentIndex];

  const handleNext = useCallback(() => {
    setSlide(([prev]) => [(prev + 1) % totalSlides, 1]);
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setSlide(([prev]) => [(prev - 1 + totalSlides) % totalSlides, -1]);
  }, [totalSlides]);

  const handleDotClick = (idx: number) => {
    setSlide(([prev]) => [idx, idx > prev ? 1 : -1]);
  };

  // Touch Swipe Handlers for iOS and Android
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    setTouchStartX(null);
  };

  // Find matching LabRoom from rooms prop
  const currentRoom = rooms.find((r) => r.id === currentSlide.id) || rooms[0];

  // Auto-play timer
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(handleNext, 7000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, handleNext]);

  const sectionHeading = {
    uz: "Bo‘limlar va yo‘nalishlar",
    ru: "Отделы и направления",
    en: "Departments & Divisions",
  }[currentLang];

  const openPassportText = {
    uz: "Bo‘lim pasporti",
    ru: "Паспорт отдела",
    en: "Department Passport",
  }[currentLang];

  // Elastic Direction-Aware Motion Variants (Borib-kelib harakatlanadigan spring physics)
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 140 : dir < 0 ? -140 : 0,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 280, damping: 25, mass: 0.9 },
        opacity: { duration: 0.28 },
        scale: { duration: 0.3 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -140 : dir < 0 ? 140 : 0,
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: 'spring', stiffness: 280, damping: 25, mass: 0.9 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 },
      },
    }),
  };

  return (
    <div
      className="space-y-4 touch-pan-y"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Header Row with Section Title */}
      <div className="pb-1 sm:pb-2">
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold font-display text-[#0F2942] tracking-tight">
          {sectionHeading}
        </h2>
        <p className="text-xs sm:text-sm text-[#475569] font-body mt-1">
          {t.roomsShowcaseSubtitle}
        </p>
      </div>

      {/* Main Large Slide Container (Cross-platform responsive) */}
      <div className="relative rounded-xl sm:rounded-2xl border border-[#E2E8F0] overflow-hidden bg-[#0F2942] shadow-sm select-none">
        {/* Floating Side Navigation Arrows for Instant Click */}
        <motion.button
          type="button"
          whileHover={{ scale: 1.15, x: -3 }}
          whileTap={{ scale: 0.9, x: -6 }}
          onClick={handlePrev}
          aria-label="Previous slide"
          className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-[#081726]/85 hover:bg-[#081726] border border-white/20 text-white items-center justify-center shadow-xl backdrop-blur-sm cursor-pointer transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
        <motion.button
          type="button"
          whileHover={{ scale: 1.15, x: 3 }}
          whileTap={{ scale: 0.9, x: 6 }}
          onClick={handleNext}
          aria-label="Next slide"
          className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-[#081726]/85 hover:bg-[#081726] border border-white/20 text-white items-center justify-center shadow-xl backdrop-blur-sm cursor-pointer transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>

        {/* Animated Directional Slide Container */}
        <div className="relative overflow-hidden min-h-[460px] sm:min-h-[500px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex flex-col lg:grid lg:grid-cols-12 min-h-[460px] sm:min-h-[500px] w-full"
            >
              {/* Left Column: Dark Navy Research Content (Col-span 7) */}
              <div className="lg:col-span-7 p-5 sm:p-8 lg:p-10 flex flex-col justify-between relative z-20 order-2 lg:order-1">
                {/* Top Row: Slide Counter */}
                <div>
                  <div className="flex items-center gap-2.5 mb-3 sm:mb-5">
                    <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-[#38D399]">
                      {String(currentIndex + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-white/30" />
                    <span className="font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-300">
                      {currentSlide.badge[currentLang]}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-2xl lg:text-[1.85rem] font-bold font-display text-white tracking-tight leading-snug">
                    {currentSlide.title[currentLang]}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-slate-300 font-body leading-relaxed max-w-xl">
                    {currentSlide.description[currentLang]}
                  </p>

                  {/* 4 Research Pillars / Bullets in 2 Columns */}
                  <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                    {currentSlide.bullets[currentLang].map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#108A54] mt-1 shrink-0 shadow-xs" />
                        <span className="text-xs sm:text-[13px] text-slate-200 font-body leading-snug font-medium">
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Controls Row: Action Button + Carousel Arrows & Indicators */}
                <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => currentRoom && onOpenDetails(currentRoom)}
                      className="px-4 sm:px-5 py-2.5 min-h-[42px] sm:min-h-[44px] rounded-lg bg-[#108A54] hover:bg-[#0C6B41] active:scale-95 text-white text-xs sm:text-sm font-semibold inline-flex items-center gap-2 transition-all shadow-xs cursor-pointer group touch-manipulation"
                    >
                      <span>{openPassportText}</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>

                  {/* Carousel Arrows and Indicator Dots */}
                  <div className="flex items-center gap-3">
                    {/* Dots */}
                    <div className="flex items-center gap-1.5">
                      {SLIDES.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleDotClick(idx)}
                          className={`h-1.5 rounded-full transition-all cursor-pointer ${
                            idx === currentIndex ? 'w-6 bg-[#38D399]' : 'w-1.5 bg-white/30 hover:bg-white/50'
                          }`}
                          aria-label={`Slide ${idx + 1}`}
                        />
                      ))}
                    </div>

                    {/* Arrow Controls with Directional Push Animation */}
                    <div className="flex items-center gap-1.5 ml-2">
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.12, backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
                        whileTap={{ scale: 0.88, x: -5 }}
                        onClick={handlePrev}
                        aria-label="Previous slide"
                        className="w-9 h-9 min-h-[36px] min-w-[36px] sm:w-10 sm:h-10 rounded-lg bg-white/10 text-white flex items-center justify-center transition-colors cursor-pointer touch-manipulation"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </motion.button>
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.12, backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
                        whileTap={{ scale: 0.88, x: 5 }}
                        onClick={handleNext}
                        aria-label="Next slide"
                        className="w-9 h-9 min-h-[36px] min-w-[36px] sm:w-10 sm:h-10 rounded-lg bg-white/10 text-white flex items-center justify-center transition-colors cursor-pointer touch-manipulation"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: AI Generated WebP Research Image (Col-span 5) */}
              <div className="lg:col-span-5 relative w-full h-56 sm:h-72 lg:h-auto min-h-[220px] overflow-hidden bg-slate-900 order-1 lg:order-2">
                <img
                  src={currentSlide.image}
                  alt={currentSlide.title[currentLang]}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
                />

                {/* Gradient Overlay for seamless blend */}
                <div className="hidden lg:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0F2942] to-transparent pointer-events-none" />
                <div className="lg:hidden absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0F2942] to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
