import { StaffMember } from '@/types/laboratory';

export const STAFF_MEMBERS: StaffMember[] = [
  // 1. Mudir & Ilmiy rahbarlar
  {
    name: "Professor Avez Sharipov, DSc",
    image: "/staff/sharipov.jpg",
    category: "leadership",
    title: {
      uz: "SLIPC laboratoriya mudiri, professor",
      ru: "Заведующий лабораторией SLIPC, профессор",
      en: "Head of SLIPC Laboratory, Professor"
    },
    room: {
      uz: "In Vivo & Farmakologiya",
      ru: "In Vivo & Фармакология",
      en: "In Vivo & Pharmacology"
    },
    roomCode: "LAB-PH-102",
    orcid: "0000-0001-9231-778X",
    email: "a.sharipov@slipc-lab.uz",
    focus: {
      uz: "Preklinik farmakologiya, toksikologiya, sport farmakologiyasi va adaptogenlar",
      ru: "Доклиническая фармакология, токсикология, спортивная фармакология и адаптогены",
      en: "Preclinical pharmacology, toxicology, sports pharmacology and adaptogens"
    },
    color: "#24356F"
  },
  {
    name: "Tulyaganov Bobir Sobirovich, PhD",
    image: "/staff/tulyaganov.svg",
    category: "leadership",
    title: {
      uz: "Katta ilmiy xodim, PhD",
      ru: "Старший научный сотрудник, PhD",
      en: "Senior Research Scientist, PhD"
    },
    room: {
      uz: "HPLC & Bioanaliz",
      ru: "ВЭЖХ & Биоанализ",
      en: "HPLC & Bioanalysis"
    },
    roomCode: "LAB-HP-201",
    orcid: "0000-0002-3419-8821",
    email: "b.tulyaganov@slipc-lab.uz",
    focus: {
      uz: "RP-HPLC-DAD/FLD bioanalitika, moddalar standartlashtirish, sifat nazorati va ICH validatsiyasi",
      ru: "ВЭЖХ-DAD/FLD биоаналитика, стандартизация субстанций, контроль качества и валидация ICH",
      en: "RP-HPLC-DAD/FLD bioanalysis, chemical standardization, quality control and ICH validation"
    },
    color: "#12715A"
  },
  {
    name: "Gulyamov Shohid Sharofutdin o'g'li, PhD",
    image: "/staff/gulyamov.svg",
    category: "leadership",
    title: {
      uz: "Katta ilmiy xodim, PhD",
      ru: "Старший научный сотрудник, PhD",
      en: "Senior Research Scientist, PhD"
    },
    room: {
      uz: "In Vitro & Kletka",
      ru: "In Vitro & Клетки",
      en: "In Vitro & Cell Biology"
    },
    roomCode: "LAB-IV-101",
    orcid: "0000-0003-4512-7104",
    email: "sh.gulyamov@slipc-lab.uz",
    focus: {
      uz: "Hujayra kulturalari, in vitro sitotoksiklik (MTT test), apoptoz mexanizmlari va o'sma skriningi",
      ru: "Клеточные культуры, цитотоксичность in vitro (тест MTT), механизмы апоптоза и противоопуховый скрининг",
      en: "Cell culture lines, in vitro cytotoxicity assays (MTT), apoptosis pathways and antitumor screening"
    },
    color: "#24356F"
  },
  {
    name: "Zakirova Ruxsona Yunusovna, PhD",
    image: "/staff/zakirova.svg",
    category: "leadership",
    title: {
      uz: "Katta ilmiy xodim, PhD",
      ru: "Старший научный сотрудник, PhD",
      en: "Senior Research Scientist, PhD"
    },
    room: {
      uz: "In Vitro & Hujayra Biologiyasi",
      ru: "In Vitro & Клеточная биология",
      en: "In Vitro & Cell Biology"
    },
    roomCode: "LAB-IV-101",
    email: "r.zakirova@slipc-lab.uz",
    focus: {
      uz: "Mikroblarga qarshi chidamlilik (AMR), sitotoksiklik tahlillari va biologik faol moddalarning in vitro mexanizmlari",
      ru: "Антимикробная резистентность (AMR), цитотоксический скрининг и механизмы действия БАВ in vitro",
      en: "Antimicrobial resistance (AMR), in vitro cytotoxicity profiling and mechanisms of bioactive compounds"
    },
    color: "#24356F"
  },

  // 2. Sifat Tizimi Nazoratchisi
  {
    name: "Mamajonova M.N.",
    image: "/staff/mamajonova.svg",
    category: "quality",
    title: {
      uz: "Sifat tizimi nazoratchisi",
      ru: "Контролер системы качества",
      en: "Quality System Controller"
    },
    room: {
      uz: "Sifat Menejmenti & GLP",
      ru: "Менеджмент качества & GLP",
      en: "Quality Management & GLP"
    },
    roomCode: "LAB-QA-01",
    email: "m.mamajonova@slipc-lab.uz",
    focus: {
      uz: "GLP/ISO 17025 sifat tizimi nazorati, audit, hujjatlar aylanishi va standart talablarga muvofiqlik monitoringi",
      ru: "Контроль СМК по стандартам GLP/ISO 17025, аудит процедур СОП, документооборот и соответствие регламентам",
      en: "Quality management system compliance (GLP/ISO 17025), SOP auditing, document control and quality verification"
    },
    color: "#12715A"
  },

  // 3. Kichik Ilmiy Xodimlar
  {
    name: "Fayzullayev D.T.",
    image: "/staff/fayzullayev.svg",
    category: "researchers",
    title: {
      uz: "Kichik ilmiy xodim",
      ru: "Младший научный сотрудник",
      en: "Junior Research Scientist"
    },
    room: {
      uz: "Fitokimyo & Farm Tech",
      ru: "Фитохимия & Фармтех",
      en: "Phytochemistry & Pharm Tech"
    },
    roomCode: "LAB-PC-301",
    orcid: "0000-0001-8874-3392",
    email: "d.fayzullayev@slipc-lab.uz",
    focus: {
      uz: "Dorivor o'simliklar ekstraksiyasi, biologik faol moddalarni ajratish, vakuum bug'latish va liofilizatsiya",
      ru: "Экстракция лекарственных растений, выделение БАВ, вакуумное концентрирование и лиофилизация",
      en: "Medicinal plant extraction, isolation of bioactive metabolites, vacuum concentration and freeze-drying"
    },
    color: "#12715A"
  },
  {
    name: "Sulaymonova N.J.",
    image: "/staff/sulaymonova.svg",
    category: "researchers",
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
    orcid: "0000-0002-1980-6218",
    email: "n.sulaymonova@slipc-lab.uz",
    focus: {
      uz: "Enzimatik kinetika, antioksidant faollik (DPPH, FRAP, ABTS), lipidlar peroksidatsiyasi va IFA tahlillari",
      ru: "Ферментативная кинетика, антиоксидантная активность (DPPH, FRAP, ABTS), ПОЛ и иммуноферментный анализ",
      en: "Enzyme kinetics, antioxidant assays (DPPH, FRAP, ABTS), lipid peroxidation markers and ELISA"
    },
    color: "#24356F"
  },
  {
    name: "Xayitboyeva Sh.X.",
    image: "/staff/xayitboyeva.svg",
    category: "researchers",
    title: {
      uz: "Kichik ilmiy xodim",
      ru: "Младший научный сотрудник",
      en: "Junior Research Scientist"
    },
    room: {
      uz: "Fitokimyo & Farm Tech",
      ru: "Фитохимия & Фармтех",
      en: "Phytochemistry & Pharm Tech"
    },
    roomCode: "LAB-PC-301",
    email: "sh.xayitboyeva@slipc-lab.uz",
    focus: {
      uz: "Tabiiy biologik faol birikmalarni fraksiyalash, ekstraksiya jarayonlari optimizatsiyasi va fitokimyoviy tahlillar",
      ru: "Фракционирование природных БАВ, оптимизация процессов экстракции и фитохимический анализ",
      en: "Fractionation of natural bioactive substances, extraction optimization, and phytochemical screening"
    },
    color: "#12715A"
  },
  {
    name: "Xolboyeva M.O’.",
    image: "/staff/xolboyeva.svg",
    category: "researchers",
    title: {
      uz: "Kichik ilmiy xodim",
      ru: "Младший научный сотрудник",
      en: "Junior Research Scientist"
    },
    room: {
      uz: "In Silico & Doking",
      ru: "In Silico & Докинг",
      en: "In Silico & Molecular Docking"
    },
    roomCode: "LAB-IS-101",
    email: "m.xolboyeva@slipc-lab.uz",
    focus: {
      uz: "Molekulyar doking, ligand-oqsillar o'zaro ta'siri (AutoDock Vina), QSAR modellashtirish va in silico screening",
      ru: "Молекулярный докинг, взаимодействие лиганд-мишень (AutoDock Vina), QSAR моделирование и in silico скрининг",
      en: "Molecular docking, ligand-target interaction analysis (AutoDock Vina), QSAR modeling, and in silico screening"
    },
    color: "#24356F"
  },
  {
    name: "Yusupova N.M.",
    image: "/staff/yusupova.svg",
    category: "researchers",
    title: {
      uz: "Kichik ilmiy xodim",
      ru: "Младший научный сотрудник",
      en: "Junior Research Scientist"
    },
    room: {
      uz: "In Vitro & Kletka",
      ru: "In Vitro & Клетки",
      en: "In Vitro & Cell Biology"
    },
    roomCode: "LAB-IV-101",
    email: "n.yusupova@slipc-lab.uz",
    focus: {
      uz: "Hujayra kulturalari bilan ishlash, MTT sitotoksiklik testlari, hujayra proliferatsiyasi va hayotchanligi monitoringi",
      ru: "Работа с клеточными культурами, цитотоксичность MTT, мониторинг клеточной пролиферации и жизнеспособности",
      en: "Cell culture maintenance, in vitro MTT cytotoxicity screening, proliferation and cell viability assessments"
    },
    color: "#24356F"
  },
  {
    name: "Abdumajidova D.A.",
    image: "/staff/abdumajidova.svg",
    category: "researchers",
    title: {
      uz: "Kichik ilmiy xodim",
      ru: "Младший научный сотрудник",
      en: "Junior Research Scientist"
    },
    room: {
      uz: "HPLC & Bioanaliz",
      ru: "ВЭЖХ & Биоанализ",
      en: "HPLC & Bioanalysis"
    },
    roomCode: "LAB-HP-201",
    email: "d.abdumajidova@slipc-lab.uz",
    focus: {
      uz: "Yuqori samarali suyuqlik xromatografiyasi (HPLC-DAD/FLD), xromatografik ajratish usullari validatsiyasi",
      ru: "Высокоэффективная жидкостная хроматография (ВЭЖХ-DAD/FLD), валидация хроматографических методик",
      en: "High-performance liquid chromatography (HPLC-DAD/FLD), chromatographic method development and validation"
    },
    color: "#12715A"
  },
  {
    name: "Abdushukurova D.A.",
    image: "/staff/abdushukurova.svg",
    category: "researchers",
    title: {
      uz: "Kichik ilmiy xodim",
      ru: "Младший научный сотрудник",
      en: "Junior Research Scientist"
    },
    room: {
      uz: "In Vivo & Farmakologiya",
      ru: "In Vivo & Фармакология",
      en: "In Vivo & Pharmacology"
    },
    roomCode: "LAB-PH-102",
    email: "d.abdushukurova@slipc-lab.uz",
    focus: {
      uz: "Eksperimental hayvonlarda o'tkir va surunkali toksiklik tadqiqotlari, farmakologik faollik skriningi",
      ru: "Острая и подострая токсичность на лабораторных животных, фармакологический скрининг биологической активности",
      en: "Acute and subchronic toxicology studies on laboratory rodents, pharmacological activity screening"
    },
    color: "#24356F"
  },

  // 4. Laborantlar
  {
    name: "Almuratova S.O.",
    image: "/staff/almuratova.svg",
    category: "technicians",
    title: {
      uz: "Laborant",
      ru: "Лаборант",
      en: "Laboratory Technician"
    },
    room: {
      uz: "HPLC & Bioanaliz",
      ru: "ВЭЖХ & Биоанализ",
      en: "HPLC & Bioanalysis"
    },
    roomCode: "LAB-HP-201",
    email: "s.almuratova@slipc-lab.uz",
    focus: {
      uz: "Xromatografik tahlillar uchun probo-podgotovka, eluentlar va bufer eritmalar tayyorlash",
      ru: "Пробоподготовка для хроматографии, приготовление подвижных фаз и рабочих стандартных растворов",
      en: "Chromatographic sample pre-treatment, preparation of mobile phases and calibrated analytical standards"
    },
    color: "#12715A"
  },
  {
    name: "Mamadaliyeva K.R.",
    image: "/staff/mamadaliyeva.svg",
    category: "technicians",
    title: {
      uz: "Laborant",
      ru: "Лаборант",
      en: "Laboratory Technician"
    },
    room: {
      uz: "Fitokimyo & Farm Tech",
      ru: "Фитохимия & Фармтех",
      en: "Phytochemistry & Pharm Tech"
    },
    roomCode: "LAB-PC-301",
    email: "k.mamadaliyeva@slipc-lab.uz",
    focus: {
      uz: "Dorivor o'simlik namunalarini maydalash, ekstraksiya va rotorli bug'latgichlarda namunalarni konsentratsiyalash",
      ru: "Измельчение растительного сырья, экстракция и концентрирование проб на роторных испарителях",
      en: "Herbal sample milling, solvent extraction, and vacuum rotary evaporator concentration"
    },
    color: "#12715A"
  },
  {
    name: "Bozorboyeva D.B.",
    image: "/staff/bozorboyeva.svg",
    category: "technicians",
    title: {
      uz: "Laborant",
      ru: "Лаборант",
      en: "Laboratory Technician"
    },
    room: {
      uz: "Biokimyo & Enzimologiya",
      ru: "Биохимия & Энзимология",
      en: "Biochemistry & Enzymology"
    },
    roomCode: "LAB-BC-202",
    email: "d.bozorboyeva@slipc-lab.uz",
    focus: {
      uz: "Biokimyoviy reagentlar, ferment reaksiyalari eritmalari tayyorlash va fotometriya jarayonlariga ko'maklashish",
      ru: "Приготовление биохимических реагентов, растворов для ферментативных реакций и спектрофотометрия",
      en: "Biochemical reagent formulation, enzymatic assay mixtures preparation, and spectrophotometric testing"
    },
    color: "#24356F"
  },
  {
    name: "Murodillayev A.",
    image: "/staff/murodillayev.svg",
    category: "technicians",
    title: {
      uz: "Laborant",
      ru: "Лаборант",
      en: "Laboratory Technician"
    },
    room: {
      uz: "In Vivo & Vivariy",
      ru: "In Vivo & Виварий",
      en: "In Vivo & Vivarium"
    },
    roomCode: "LAB-PH-102",
    email: "a.murodillayev@slipc-lab.uz",
    focus: {
      uz: "Vivariy tajriba hayvonlarini GLP talablari asosida parvarish qilish, karantin va biomateriallar tayyorlash",
      ru: "Уход за лабораторными животными вивария по стандартам GLP, карантинный контроль и подготовка биоматериалов",
      en: "Laboratory animal care under GLP guidelines, environmental monitoring, quarantine, and biospecimen handling"
    },
    color: "#24356F"
  },
  {
    name: "An A.D.",
    image: "/staff/an.svg",
    category: "technicians",
    title: {
      uz: "Laborant",
      ru: "Лаборант",
      en: "Laboratory Technician"
    },
    room: {
      uz: "In Vitro & Kletka",
      ru: "In Vitro & Клетки",
      en: "In Vitro & Cell Biology"
    },
    roomCode: "LAB-IV-101",
    email: "a.an@slipc-lab.uz",
    focus: {
      uz: "Ozuqa muhitlarini tayyorlash, avtoklavlash va filtrlash, laminarbokslar sterilizatsiyasi va tozalik nazorati",
      ru: "Приготовление и фильтрация питательных сред, автоклавирование, стерилизация чистых зон и ламинаров",
      en: "Cell culture nutrient media preparation, sterile filtration, autoclaving, and cleanroom sanitization"
    },
    color: "#24356F"
  },
  {
    name: "Razzakova R.G.",
    image: "/staff/razzakova.svg",
    category: "technicians",
    title: {
      uz: "Laborant",
      ru: "Лаборант",
      en: "Laboratory Technician"
    },
    room: {
      uz: "Sifat Menejmenti & Reaktivlar",
      ru: "Менеджмент качества & Реактивы",
      en: "Quality Management & Reagents"
    },
    roomCode: "LAB-QA-01",
    email: "r.razzakova@slipc-lab.uz",
    focus: {
      uz: "Sinov namunalari registratsiyasi, laboratoriya reaktivlari kirim-chiqim hisobi va yaroqlilik monitoringi",
      ru: "Регистрация образцов, складской учет химических реактивов, контроль сроков годности и условий хранения",
      en: "Laboratory sample receipt and tracking, chemical reagent inventory, and expiry date compliance"
    },
    color: "#12715A"
  }
];
