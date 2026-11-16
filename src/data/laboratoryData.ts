import { LabRoom, Equipment, Publication, SOPDocument, LabMetric } from '@/types/laboratory';

export const LAB_METRICS: LabMetric[] = [
  {
    value: "4 ta",
    label: {
      uz: "Ixtisoslashgan Ilmiy Bo'lim va Xonalar",
      ru: "Специализированных научных отделов и комнат",
      en: "Specialized Scientific Units & Rooms"
    },
    icon: "Boxes"
  },
  {
    value: "35+",
    label: {
      uz: "Tasdiqlangan SOP Eksperimental Protokollar",
      ru: "Утвержденных экспериментальных СОП-протоколов",
      en: "Validated Experimental SOP Protocols"
    },
    icon: "FileCheck2"
  },
  {
    value: "18 ta",
    label: {
      uz: "Yuqori Aniqlikdagi Analitik Uskunalar Majmuasi",
      ru: "Комплекс аналитического оборудования высокой точности",
      en: "High-Precision Analytical Equipment Suite"
    },
    icon: "Microscope"
  },
  {
    value: "Horizon / WoS",
    label: {
      uz: "Xalqaro Ilmiy Hamkorlik va Grant Reestri",
      ru: "Реестр международного научного сотрудничества и грантов",
      en: "International Scientific Partnership & Grant Registry"
    },
    icon: "Globe2"
  }
];

export const LAB_ROOMS: LabRoom[] = [
  {
    id: "sintez-insilico",
    code: "LAB-01",
    number: 1,
    slug: "yangi-biologik-faol-birikmalarni-sintez-qilish-va-in-silico",
    category: "sintez-insilico",
    accentColor: "#24356F",
    lightTint: "#E6EAF5",
    darkColor: "#1B2854",
    title: {
      uz: "Yangi biologik faol birikmalarni sintez qilish va in silico tadqiqotlar bo’limi",
      ru: "Отдел синтеза новых биологически активных соединений и in silico исследований",
      en: "Department of Synthesis of New Biologically Active Compounds and In Silico Studies"
    },
    subTitle: {
      uz: "Organik sintez, modellashtirish, molekulyar doking va in silico screening",
      ru: "Органический синтез, моделирование, молекулярный докинг и in silico скрининг",
      en: "Organic synthesis, computational modeling, molecular docking, and in silico screening"
    },
    shortDescription: {
      uz: "Yangi biologik faol birikmalarni sintez qilish va in silico tadqiqotlar bo’limi.",
      ru: "Отдел синтеза новых биологически активных соединений и in silico исследований.",
      en: "Department of Synthesis of New Biologically Active Compounds and In Silico Studies."
    },
    fullFocus: {
      uz: "",
      ru: "",
      en: ""
    },
    headOfRoom: {
      name: "",
      degree: "",
      orcid: "",
      email: ""
    },
    location: {
      floor: "1-qavat",
      roomNumber: "101",
      area: "—",
      biosafetyLevel: "Standard Lab"
    },
    operationalSpecs: {
      temperature: "20.0 - 22.0 °C",
      humidity: "45 - 60% RH",
      airCleanliness: "Standart laboratoriya muhiti",
      certification: "ISO/IEC 17025"
    },
    methodologyTags: [
      "Organik Sintez",
      "In Silico Screening",
      "Molekulyar Doking",
      "QSPR / QSAR Tahlili"
    ],
    cellLinesOrModels: [],
    keyEquipment: [],
    methodologies: [],
    academicLinks: [],
    researchPillars: [
      {
        id: "pillar-1",
        number: 1,
        title: {
          uz: "Yangi kichik molekulalarni loyihalash va sintez qilish",
          ru: "Дизайн и синтез новых малых молекул",
          en: "Design and Synthesis of New Small Molecules"
        },
        description: {
          uz: "Biologik faol nishonlarga yo'naltirilgan yangi dori molekulalarining kompyuter dizayni, retrosintetik tahlil, organik sintez reaksiyalari optimallashtirilishi va yuqori unumli farmakofor birikmalarni sintez qilish.",
          ru: "Компьютерный дизайн новых лекарственных молекул для биологических мишеней, ретросинтетический анализ, оптимизация органических реакций и получение высокоэффективных фармакофорных структур.",
          en: "Rational in silico design and organic chemical synthesis of novel target-directed small-molecule therapeutics, retrosynthetic route planning, and pharmacophore scaffold generation."
        },
        image: "/images/in-silico/small-molecules-synthesis.jpg",
        tags: ["Retrosintez", "Organik Sintez", "Farmakofor", "Molekulyar Arxitektura"]
      },
      {
        id: "pillar-2",
        number: 2,
        title: {
          uz: "Molekulyar doking va molekulyar dinamika simulyatsiyalari",
          ru: "Молекулярный докинг и симуляции молекулярной динамики",
          en: "Molecular Docking and Molecular Dynamics Simulations"
        },
        description: {
          uz: "Ligand-oqsil komplekslarining fazoviy bog'lanish energiyasi, faol katalitik markazlar bilan o'zaro ta'siri (AutoDock Vina, Glide) hamda oqsil-ligand dinamik barqarorligini nanosekundlar masshtabida simulyatsiya qilish (GROMACS, NAMD).",
          ru: "Оценка энергии связывания комплексов лиганд-мишень (AutoDock Vina, Glide), взаимодействий в каталитических центрах и симуляция наносекундной молекулярной динамики конформационной стабильности (GROMACS, NAMD).",
          en: "High-precision computational binding affinity modeling (AutoDock Vina, Glide), active site interaction analysis, and nanosecond-scale molecular dynamics conformational stability simulations (GROMACS, NAMD)."
        },
        image: "/images/in-silico/molecular-docking.jpg",
        tags: ["AutoDock Vina", "GROMACS", "Bog'lanish Energiyasi", "RMSD / RMSF"]
      },
      {
        id: "pillar-3",
        number: 3,
        title: {
          uz: "ADMET (absorption, distribution, metabolism, excretion) tahlil",
          ru: "ADMET анализ (абсорбция, распределение, метаболизм, выведение, токсичность)",
          en: "ADMET (Absorption, Distribution, Metabolism, Excretion & Toxicity) Profiling"
        },
        description: {
          uz: "Yangi birikmalarning organizmda so'rilishi (Caco-2, HIA), to'qimalarga taqsimlanishi (BBB, PPB), sitoxrom P450 izofermentlari orqali metabolizmi, organizmdan chiqarilishi va hERG, Ames kardiotoksiklik hamda gepatotoksikligini in silico bashorat qilish.",
          ru: "In silico прогнозирование параметров фармакокинетики: всасывание (Caco-2), распределение (BBB), метаболизм ферментами цитохрома P450, выведение и риски токсичности (кардиотоксичность hERG, тест Эймса, гепатотоксичность).",
          en: "Comprehensive in silico pharmacokinetic characterization including intestinal absorption (Caco-2, HIA), tissue distribution (BBB, PPB), CYP450 metabolism, clearance, and safety toxicity screening (hERG cardiotoxicity, Ames mutagenicity, hepatotoxicity)."
        },
        image: "/images/in-silico/admet-analysis.jpg",
        tags: ["SwissADME", "pkCSM", "CYP450", "hERG Toksiklik", "Bioavailability"]
      },
      {
        id: "pillar-4",
        number: 4,
        title: {
          uz: "QSAR modellashtirish (Quantitative Structure-Activity Relationship)",
          ru: "QSAR моделирование (количественная связь «структура-активность»)",
          en: "QSAR Modeling (Quantitative Structure-Activity Relationship)"
        },
        description: {
          uz: "Kimyoviy birikmalarning fazoviy va elektron deskriptorlari bilan biologik faolligi (IC50, EC50, Ki) o'rtasidagi miqdoriy bog'liqlikni 2D/3D-QSAR modellar, chiziqli regressiya va sun'iy intellekt (Machine Learning) algoritmlari yordamida modellashtirish hamda optimallashtirish.",
          ru: "Математическое моделирование взаимосвязи между молекулярными дескрипторами соединений и их биологической активностью (IC50, Ki) с использованием методов 2D/3D-QSAR, регрессионного анализа и алгоритмов машинного обучения (Machine Learning).",
          en: "Mathematical modeling of quantitative correlations between molecular/electronic descriptors and biological activity (IC50, EC50, Ki) utilizing 2D/3D-QSAR alignments, regression analytics, and predictive machine learning (ML) algorithms."
        },
        image: "/images/in-silico/qsar-modeling.jpg",
        tags: ["2D/3D-QSAR", "IC50 Bashorat", "Molekulyar Deskriptorlar", "Machine Learning"]
      }
    ]
  },
  {
    id: "instrumental-tahlil",
    code: "LAB-02",
    number: 2,
    slug: "instrumental-tahlil-bolimi",
    category: "instrumental",
    accentColor: "#782AEB",
    lightTint: "#F3E8FF",
    darkColor: "#5B21B6",
    title: {
      uz: "Instrumental tahlil bo’limi",
      ru: "Отдел инструментального анализа",
      en: "Department of Instrumental Analysis"
    },
    subTitle: {
      uz: "HPLC-DAD, GC-MS, spektroskopiya va yuqori aniqlikdagi fiziko-kimyoviy bioanaliz",
      ru: "ВЭЖХ-DAD, ГХ-МС, спектроскопия и высокоточный физико-химический биоанализ",
      en: "HPLC-DAD, GC-MS, spectroscopy, and high-precision physicochemical bioanalysis"
    },
    shortDescription: {
      uz: "Instrumental tahlil bo’limi.",
      ru: "Отдел инструментального анализа.",
      en: "Department of Instrumental Analysis."
    },
    fullFocus: {
      uz: "Laboratoriya zamonaviy asbob-uskunalar bilan jihozlangan bo’lib, dori vositalarining (DV) samaradorligi va bezararligi in vitro va in vivo usullarida tadqiq etiladi. Shuningdek, AQSh ning ATCC kompaniyasidan standart hujayralar liniyasi olib keltirilgan va unda dori vositalarining ta’sir etish mexanizmlarini in vitro usulida amalga oshirish imkoniyati mavjud.",
      ru: "Лаборатория оснащена современным аналитическим оборудованием, где эффективность и безопасность лекарственных средств (ЛС) исследуются методами in vitro и in vivo. Кроме того, из американской коллекции ATCC доставлены стандартные клеточные линии, что позволяет изучать механизмы действия лекарственных средств методом in vitro.",
      en: "The laboratory is equipped with state-of-the-art analytical instrumentation, where the efficacy and safety of pharmaceutical drug products are evaluated using in vitro and in vivo methodologies. Furthermore, standard cell lines have been imported from the American Type Culture Collection (ATCC, USA), enabling the investigation of drug mechanisms of action in vitro."
    },
    headOfRoom: {
      name: "",
      degree: "",
      orcid: "",
      email: ""
    },
    location: {
      floor: "2-qavat",
      roomNumber: "201",
      area: "—",
      biosafetyLevel: "Instrumental Analytics"
    },
    operationalSpecs: {
      temperature: "20.0 - 22.0 °C",
      humidity: "45 - 55% RH",
      airCleanliness: "Toza xona ISO Class 7",
      certification: "ISO/IEC 17025"
    },
    methodologyTags: [
      "HPLC-DAD",
      "Spektroskopiya",
      "Sifat va Miqdoriy Tahlil",
      "Metodlar Validatsiyasi",
      "API Assay",
      "Biowaiver"
    ],
    cellLinesOrModels: ["ATCC Standart Hujayralar Liniyasi"],
    keyEquipment: [],
    methodologies: [],
    academicLinks: [],
    researchPillars: [
      {
        id: "instrumental-pillar-1",
        number: 1,
        title: {
          uz: "Faol farmatsevtik ingredientlarni (API) aniqlash va miqdoriy baholash",
          ru: "Идентификация и количественное определение активных фармацевтических субстанций (АФС / API)",
          en: "Identification and Quantitative Assay of Active Pharmaceutical Ingredients (APIs)"
        },
        description: {
          uz: "Dori vositalari tarkibidagi faol moddalarni (API) yuqori samarali suyuqlik xromatografiyasi (HPLC/YUSSX) va spektroskopik usullarda yuqori aniqlikda identifikatsiya qilish, tozaligini tekshirish hamda miqdoriy tahlil qilish (ICH Q2R1 talablari asosida).",
          ru: "Высокоточное определение подлинности, чистоты и количественного содержания активных фармацевтических субстанций (АФС) методами ВЭЖХ и спектроскопии в соответствии с требованиями ICH Q2(R1).",
          en: "High-precision identification, purity testing, and quantitative assay of active pharmaceutical ingredients (APIs) utilizing HPLC-DAD and spectrophotometric techniques adhering to ICH Q2(R1) validation guidelines."
        },
        image: "/images/instrumental/api-quantification.jpg",
        tags: ["HPLC-DAD", "ICH Q2(R1)", "API Assay", "Tozalik Tahlili"]
      },
      {
        id: "instrumental-pillar-2",
        number: 2,
        title: {
          uz: "Zaharlilik profilini aniqlash va miqdoriy baholash",
          ru: "Определение и количественная оценка профиля токсичности",
          en: "Toxicity Profile Identification and Quantitative Evaluation"
        },
        description: {
          uz: "Dori vositalari va biologik faol moddalarning sitotoksikligini mikrotitr plashka o'quvchi tizimlarda (MTT, LDH tahlillari), hujayra hayotchanligini va doza-ta'sir (IC50 / LD50) ko'rsatkichlarini miqdoriy baholash.",
          ru: "Количественная оценка цитотоксичности лекарственных веществ на микропланшетных спектрофотометрах (тесты МТТ, ЛДГ), изучение жизнеспособности клеток и расчёт параметров доза-эффект (IC50 / LD50).",
          en: "Quantitative evaluation of cytotoxicity and toxicological thresholds via microplate spectrophotometric assays (MTT, LDH release), cellular viability mapping, and dose-response sigmoidal curve fitting (IC50/LD50)."
        },
        image: "/images/instrumental/toxicity-evaluation.jpg",
        tags: ["IC50 / LD50", "MTT Assay", "Sitotoksiklik", "Doza-Ta'sir"]
      },
      {
        id: "instrumental-pillar-3",
        number: 3,
        title: {
          uz: "Erish testlari",
          ru: "Тесты растворения (Dissolution Testing)",
          en: "Dissolution Testing"
        },
        description: {
          uz: "Qattiq dori shakllarining (tabletkalar, kapsulalar) fiziologik sharoitlarda faol moddani ajratib chiqarish kinetikasini USP / Ph.Eur. apparatlarida (kurakcha va savatcha usulida) real vaqt rejimida aniqlash.",
          ru: "Исследование кинетики высвобождения активного вещества из твердых лекарственных форм (таблетки, капсулы) в физиологических средах на аппаратах USP / Ph.Eur. (мешалка-лопасть, корзинка).",
          en: "In vitro release kinetics profiling of solid oral dosage forms (tablets, capsules) in simulated physiological media utilizing automated USP / Ph.Eur. dissolution apparatuses (paddles and baskets)."
        },
        image: "/images/instrumental/dissolution-testing.jpg",
        tags: ["USP Dissolution", "In Vitro Release", "Kinetik Profil", "ICH Q6A"]
      },
      {
        id: "instrumental-pillar-4",
        number: 4,
        title: {
          uz: "Barqarorlik testlari",
          ru: "Испытания на стабильность (Stability Testing)",
          en: "Stability Testing"
        },
        description: {
          uz: "Dori vositalarining yaroqlilik muddatini belgilash uchun ICH Q1A(R2) standartlariga mos iqlim kameralarida tezlashtirilgan (+40°C / 75% RH) va uzoq muddatli (+25°C / 60% RH) barqarorlik sinovlari.",
          ru: "Испытания стабильности готовых лекарственных форм в климатических камерах по стандартам ICH Q1A(R2): ускоренное (+40°C / 75% RH) и долгосрочное (+25°C / 60% RH) хранение для определения срока годности.",
          en: "Accelerated (40°C / 75% RH) and long-term (25°C / 60% RH) drug stability evaluations in precision climatic test chambers compliant with ICH Q1A(R2) protocols for shelf-life determination."
        },
        image: "/images/instrumental/stability-testing.jpg",
        tags: ["ICH Q1A(R2)", "Iqlim Kamerasi", "Tezlashtirilgan Sinov", "Yaroqlilik Muddati"]
      },
      {
        id: "instrumental-pillar-5",
        number: 5,
        title: {
          uz: "Xomashyo va yordamchi moddalarni aniqlash",
          ru: "Идентификация сырья и вспомогательных веществ",
          en: "Raw Materials and Excipients Identification"
        },
        description: {
          uz: "Farmatsevtik ishlab chiqarishda ishlatiladigan substansiyalar, yordamchi moddalar va reagentlarning haqiqiyligini FTIR, Raman spektroskopiyasi hamda kimyoviy-fizikaviy testlar orqali kirish nazoratida tasdiqlash.",
          ru: "Входной контроль подлинности и качества фармацевтических субстанций, вспомогательных веществ и реагентов методами ИК-Фурье, Раман-спектроскопии и фармакопейных тестов.",
          en: "Incoming raw material and excipient quality assurance, chemical fingerprint confirmation, and polymorphic identification utilizing FTIR and Raman spectroscopy matched against pharmacopeial libraries."
        },
        image: "/images/instrumental/raw-materials-id.jpg",
        tags: ["FTIR Spektroskopiya", "Raman Tahlili", "Kirish Nazorati", "Farmakopeya"]
      },
      {
        id: "instrumental-pillar-6",
        number: 6,
        title: {
          uz: "Qon plazmasi/zardobida bioanalitik testlar",
          ru: "Биоаналитические исследования в плазме и сыворотке крови",
          en: "Bioanalytical Testing in Blood Plasma and Serum"
        },
        description: {
          uz: "Biologik suyuqliklardan (qon plazmasi, zardob) dori moddalari va ularning metabolitlarini ajratib olish (qattiq fazali ekstraksiya - SPE, oqsillarni cho'ktirish) va LC-MS/MS orqali ultra-sezgir bioanalitik aniqlash.",
          ru: "Количественное определение лекарственных веществ и их метаболитов в биологических матрицах (плазма, сыворотка крови) с пробоподготовкой (ТФЭ/SPE, осаждение белков) на системах ВЭЖХ-МС/МС.",
          en: "Sensitive quantitative bioanalysis of active compounds and metabolites in biological matrices (blood plasma, serum) featuring SPE/protein precipitation sample cleanup followed by LC-MS/MS quantitation."
        },
        image: "/images/instrumental/bioanalytical-tests.jpg",
        tags: ["LC-MS/MS", "SPE Ekstraksiya", "Bioanalitika", "Plazma Tahlili"]
      },
      {
        id: "instrumental-pillar-7",
        number: 7,
        title: {
          uz: "Farmakokinetik va toksikokinetik tadqiqotlar",
          ru: "Фармакокинетические и токсикокинетические исследования",
          en: "Pharmacokinetic and Toxicokinetic Studies"
        },
        description: {
          uz: "In vivo preklinik sinovlarda dori moddalarining konsentratsiya-vaqt egri chizig'ini modellashtirish, Cmax, Tmax, AUC, yarim parchalanish davri (t1/2) va xavfsizlik chegarasi ko'rsatkichlarini hisoblash.",
          ru: "Моделирование кривых «концентрация-время» в доклинических исследованиях in vivo, расчет ключевых фармакокинетических параметров (Cmax, Tmax, AUC, t1/2) и токсикокинетических коридоров безопасности.",
          en: "Preclinical in vivo pharmacokinetic and toxicokinetic profiling, non-compartmental and compartmental modeling of plasma concentration-time curves (Cmax, Tmax, AUC0-t, t1/2), and systemic exposure indexing."
        },
        image: "/images/instrumental/pharmacokinetics-pk-tk.jpg",
        tags: ["PK/TK Modellashtirish", "Cmax / Tmax / AUC", "Preklinik Sinov", "Toksikokinetika"]
      },
      {
        id: "instrumental-pillar-8",
        number: 8,
        title: {
          uz: "Biowaiver testi",
          ru: "Биовейвер тестирование (Biowaiver Testing)",
          en: "Biowaiver Testing (In Vitro Bioequivalence)"
        },
        description: {
          uz: "BCS (Biopharmaceutics Classification System) I va III sinf dori vositalari uchun in vivo bioekvivalentlik sinovlarini in vitro solishtirma erish profillari (pH 1.2, 4.5, 6.8 muhitlarida f1 va f2 koeffitsiyentlari) orqali asoslash.",
          ru: "Обоснование биоэквивалентности in vitro по процедуре Биовейвер (BCS) для твердых лекарственных форм в средах растворения с pH 1.2, 4.5 и 6.8 с расчетом факторов подобия f2 и различия f1.",
          en: "Comparative in vitro dissolution profiling for BCS (Biopharmaceutics Classification System) based biowaiver justification across physiological media (pH 1.2, pH 4.5, pH 6.8) with f1/f2 similarity analytics."
        },
        image: "/images/instrumental/biowaiver-studies.jpg",
        tags: ["BCS Biowaiver", "f2 O'xshashlik Omili", "In Vitro Bioekvivalentlik", "pH 1.2 / 4.5 / 6.8"]
      }
    ]
  },
  {
    id: "in-vitro",
    code: "LAB-03",
    number: 3,
    slug: "in-vitro-bolimi",
    category: "in-vitro",
    accentColor: "#0072CE",
    lightTint: "#EBF5FF",
    darkColor: "#0058A3",
    title: {
      uz: "In vitro bo’limi",
      ru: "Отдел In vitro",
      en: "In Vitro Department"
    },
    subTitle: {
      uz: "Hujayra kulturalari, sitotoksiklik (MTT/MTS), molekulyar biologiya va apoptoz tahlili",
      ru: "Клеточные культуры, цитотоксичность (MTT/MTS), молекулярная биология и анализ апоптоза",
      en: "Cell cultures, cytotoxicity (MTT/MTS), molecular biology, and apoptosis analysis"
    },
    shortDescription: {
      uz: "In vitro bo’limi.",
      ru: "Отдел In vitro.",
      en: "In Vitro Department."
    },
    fullFocus: {
      uz: "In vitro bo'limida AQSh ning ATCC xalqaro kolleksiyasidan olib keltirilgan standart inson va model hujayralari liniyalarida yangi dori vositalarining o'smaga qarshi faolligi, migratsiya, sitotoksiklik va nozik molekulyar ta'sir mexanizmlari kompleks tadqiq etiladi.",
      ru: "В отделе In vitro на стандартных клеточных линиях человека и модельных организмов из американской коллекции ATCC проводятся комплексные исследования противоопухолевой активности, миграции, цитотоксичности и тонких молекулярных механизмов действия лекарственных средств.",
      en: "The In Vitro Department conducts comprehensive cellular evaluations of novel pharmaceutical agents, investigating anticancer efficacy, cell motility, cytotoxicity thresholds, and molecular mechanisms of action across authenticated ATCC (USA) human cell lines."
    },
    headOfRoom: {
      name: "",
      degree: "",
      orcid: "",
      email: ""
    },
    location: {
      floor: "1-qavat",
      roomNumber: "103",
      area: "—",
      biosafetyLevel: "BSL-2"
    },
    operationalSpecs: {
      temperature: "37.0 °C (Inkubator) / 22.0 °C",
      humidity: "95% (Inkubator)",
      airCleanliness: "ISO Class 5 / Class 100",
      certification: "ISO/IEC 17025 / BSL-2"
    },
    methodologyTags: [
      "Hujayra Kultivatsiyasi",
      "Sitotoksiklik (MTT/MTS)",
      "Apoptoz Monitoringi",
      "In Vitro Screening",
      "Western Blot",
      "ELISA"
    ],
    cellLinesOrModels: [
      "MCF-7",
      "MCF-10A",
      "HepG2",
      "K562",
      "J774A.1",
      "HeLa",
      "HaCaT",
      "HEK-293",
      "A549",
      "PC-3"
    ],
    cellLinesList: [
      {
        name: "MCF-7",
        category: {
          uz: "Ko'krak bezi saratoni",
          ru: "Рак молочной железы",
          en: "Breast Adenocarcinoma"
        },
        origin: {
          uz: "Inson ko'krak bezi adenokarsinomasi (ER+/PR+)",
          ru: "Аденокарцинома молочной железы человека",
          en: "Human breast adenocarcinoma"
        },
        badgeColor: "#E11D48"
      },
      {
        name: "MCF-10A",
        category: {
          uz: "Normal ko'krak epiteliyasi",
          ru: "Нормальный эпителий молочной железы",
          en: "Normal Mammary Epithelial"
        },
        origin: {
          uz: "Inson sog'lom ko'krak bezi epiteliyasi (Non-tumorigenic)",
          ru: "Доброкачественный эпителий человека",
          en: "Non-tumorigenic human mammary epithelial"
        },
        badgeColor: "#10B981"
      },
      {
        name: "HepG2",
        category: {
          uz: "Jigar saratoni",
          ru: "Рак печени (гепатома)",
          en: "Hepatocellular Carcinoma"
        },
        origin: {
          uz: "Inson jigar gepatotsellyulyar karsinomasi",
          ru: "Гепатоцеллюлярная карцинома человека",
          en: "Human hepatocellular carcinoma"
        },
        badgeColor: "#F59E0B"
      },
      {
        name: "K562",
        category: {
          uz: "Leykoz (oq qon kasalligi)",
          ru: "Лейкоз (миелолейкоз)",
          en: "Chronic Myelogenous Leukemia"
        },
        origin: {
          uz: "Inson surunkali miyelogen leykozi (oq qon kasalligi)",
          ru: "Хронический миелоидный лейкоз человека",
          en: "Human chronic myelogenous leukemia"
        },
        badgeColor: "#8B5CF6"
      },
      {
        name: "J774A.1",
        category: {
          uz: "Monotsit makrofag",
          ru: "Моноцит-макрофаг",
          en: "Monocyte-Macrophage"
        },
        origin: {
          uz: "Kemiruvchi monotsit-makrofag immun hujayralari",
          ru: "Иммунные клетки макрофагов мыши",
          en: "Murine reticulum cell sarcoma macrophage"
        },
        badgeColor: "#06B6D4"
      },
      {
        name: "HeLa",
        category: {
          uz: "Bachadon bo'yni saratoni",
          ru: "Рак шейки матки",
          en: "Cervical Adenocarcinoma"
        },
        origin: {
          uz: "Inson bachadon bo'yni epitelial karsinomasi",
          ru: "Эпителиальная карцинома шейки матки человека",
          en: "Human cervical epithelial adenocarcinoma"
        },
        badgeColor: "#EC4899"
      },
      {
        name: "HaCaT",
        category: {
          uz: "Teri keratinotsitlari",
          ru: "Кератиноциты кожи",
          en: "Skin Keratinocytes"
        },
        origin: {
          uz: "Inson terisi keratinotsitlarining immortalizatsiyalangan liniyasi",
          ru: "Спонтанно бессмертные кератиноциты кожи человека",
          en: "Immortalized human skin keratinocytes"
        },
        badgeColor: "#3B82F6"
      },
      {
        name: "HEK-293",
        category: {
          uz: "Embrional buyrak",
          ru: "Эмбриональная почка",
          en: "Embryonic Kidney"
        },
        origin: {
          uz: "Inson embrional buyrak hujayralari",
          ru: "Клетки эмбриональной почки человека",
          en: "Human embryonic kidney cells"
        },
        badgeColor: "#14B8A6"
      },
      {
        name: "A549",
        category: {
          uz: "O'pka karsinomasi",
          ru: "Рак легких",
          en: "Lung Carcinoma"
        },
        origin: {
          uz: "Inson o'pka alveolyar bazal epitelial karsinomasi",
          ru: "Альвеолярная аденокарцинома легких человека",
          en: "Human lung alveolar basal epithelial carcinoma"
        },
        badgeColor: "#6366F1"
      },
      {
        name: "PC-3",
        category: {
          uz: "Prostata bezi saratoni",
          ru: "Рак предстательной железы",
          en: "Prostate Adenocarcinoma"
        },
        origin: {
          uz: "Inson prostata bezi karsinomasi (androgenga bog'liq bo'lmagan)",
          ru: "Карцинома предстательной железы человека",
          en: "Human prostate adenocarcinoma (androgen-independent)"
        },
        badgeColor: "#D97706"
      }
    ],
    keyEquipment: [],
    methodologies: [],
    academicLinks: [],
    researchPillars: [
      {
        id: "invitro-pillar-1",
        number: 1,
        title: {
          uz: "Saraton qarshi aktivlik tadqiqotlari",
          ru: "Исследования противоопухолевой (противораковой) активности",
          en: "Anticancer Activity and Oncology Screening Studies"
        },
        description: {
          uz: "Yangi farmatsevtik birikmalar va o'simlik ekstraktlarining saraton hujayralari (HeLa, MCF-7, HepG2, PC-3, A549) proliferatsiyasini tormozlash faolligi, 3D o'sma sferoidlari modeli hamda apoptoz induksiyasi mexanizmlarini o'rganish.",
          ru: "Оценка ингибирующей активности новых соединений в отношении пролиферации раковых клеток (HeLa, MCF-7, HepG2, PC-3, A549), моделирование на 3D опухолевых сфероидах и индукция клеточного апоптоза.",
          en: "Screening of novel compounds and active extracts for proliferation inhibition across human cancer lines (HeLa, MCF-7, HepG2, PC-3, A549), 3D tumor spheroid modeling, and apoptotic signaling pathway triggers."
        },
        image: "/images/in-vitro/anticancer-activity.jpg",
        tags: ["Onkologiya", "3D Sferoidlar", "Apoptoz", "O'sma Ingibitsiyasi"]
      },
      {
        id: "invitro-pillar-2",
        number: 2,
        title: {
          uz: "Migratsiya testi (Wound healing, Transwell testi)",
          ru: "Тесты клеточной миграции (Wound Healing / Scratch, Transwell)",
          en: "Cell Migration and Invasion Assays (Wound Healing & Transwell)"
        },
        description: {
          uz: "Hujayralarning fazoviy ko'chishi va invaziyasini real vaqt mikroskopiyasi yordamida baholash: chandiq bitishi (Scratch/Wound healing tahlili) hamda polikarbonat membranali Transwell kamerasida metastatik invaziya tezligini o'lchash.",
          ru: "Оценка подвижности и метастатической инвазии клеток: тест зарастания царапины (Wound healing/Scratch assay) и миграция через микропористую мембрану в камерах Transwell.",
          en: "Quantitative real-time monitoring of cell motility and metastatic invasion using scratch wound closure assays and Transwell porous membrane invasion chambers with extracellular matrix barriers."
        },
        image: "/images/in-vitro/wound-healing-transwell.jpg",
        tags: ["Wound Healing", "Transwell", "Hujayra Migratsiyasi", "Metastaz Modeli"]
      },
      {
        id: "invitro-pillar-3",
        number: 3,
        title: {
          uz: "LD₅₀ qiymatini aniqlash",
          ru: "Определение величины полулетальной дозы LD₅₀ / IC₅₀",
          en: "Determination of Median Lethal Dose (LD₅₀ / IC₅₀) Thresholds"
        },
        description: {
          uz: "Dori nomzodlarining hujayra hayotchanligini 50% ga pasaytiruvchi o'rtacha o'lim dozasini (LD50) va yarim maksimal ingibirlash konsentratsiyasini (IC50) mikrotitr tahlilida Hill tenglamasi va sigmoidal regressiya orqali aniqlash.",
          ru: "Расчет концентраций половинного угнетения (IC50) и летальной дозы (LD50) для исследуемых молекул на планшетных фотометрах с построением сигмоидальных кривых доза-эффект.",
          en: "Precise mathematical determination of median lethal dose (LD50) and half-maximal inhibitory concentration (IC50) curves utilizing sigmoidal non-linear regression modeling in multi-well microplates."
        },
        image: "/images/in-vitro/ld50-determination.jpg",
        tags: ["LD50 Qiymati", "IC50 Hisobi", "Doza-Samara Egri Chizig'i", "Toksikologiya"]
      },
      {
        id: "invitro-pillar-4",
        number: 4,
        title: {
          uz: "Western blot tahlillari",
          ru: "Вестерн-блоттинг (Western Blotting) анализ белков",
          en: "Western Blot Protein Expression and Signaling Analysis"
        },
        description: {
          uz: "Hujayra lizatlaridagi nishon oqsillar, fermentlar, fosforillangan signal molekulalari va apoptoz markerlari (kaspaza-3, PARP, p53, Bax/Bcl-2) ekspressiyasini elektroforez, elektro-transfer va xemilyuminessensiya orqali miqdoriy tekshirish.",
          ru: "Определение экспрессии специфических белков, ферментов и маркеров апоптоза (каспаза-3, PARP, p53, Bcl-2) методом электрофореза в ПААГ с хемилюминесцентной детекцией на мембране.",
          en: "Semi-quantitative detection of target protein expression, phosphorylation cascades, and apoptotic cleavage markers (Caspase-3, PARP, p53, Bax/Bcl-2) via SDS-PAGE and chemiluminescent membrane imaging."
        },
        image: "/images/in-vitro/western-blot.jpg",
        tags: ["SDS-PAGE", "Xemilyuminessensiya", "Oqsil Ekspressiyasi", "Kaspaza-3 / p53"]
      },
      {
        id: "invitro-pillar-5",
        number: 5,
        title: {
          uz: "ELISA testlari",
          ru: "Иммуноферментный анализ (ИФА / ELISA)",
          en: "Enzyme-Linked Immunosorbent Assay (ELISA) Diagnostics"
        },
        description: {
          uz: "Sendvich va raqobatli immunoferment tahlili (ELISA) orqali hujayra supernatantlari va biologik namunalardagi o'ziga xos antigenlar, biomarkerlar va fermentlar konsentratsiyasini pikogramm aniqlikda o'lchash (450 nm).",
          ru: "Высокоточное количественное определение антигенов, ростовых факторов и белков-биомаркеров в клеточных супернатантах методом сэндвич-ИФА (ELISA) с колориметрической детекцией при 450 нм.",
          en: "High-sensitivity sandwich and competitive ELISA quantification of cellular biomarkers, growth factors, and specific proteins in cell culture supernatants with optical density measurement at 450 nm."
        },
        image: "/images/in-vitro/elisa-assays.jpg",
        tags: ["Sendvich ELISA", "450 nm Spektrofotometriya", "Biomarker Tahlili", "Antigen-Antitelo"]
      },
      {
        id: "invitro-pillar-6",
        number: 6,
        title: {
          uz: "Hujayra faolligini baholash testlari (MTT, XTT, WST-1)",
          ru: "Оценка метаболической активности клеток (MTT, XTT, WST-1)",
          en: "Cell Proliferation & Viability Assays (MTT, XTT, WST-1)"
        },
        description: {
          uz: "Mitoxondrial dehidrogenaza fermentlari faolligini tetrazoliy tuzlari (MTT, XTT va suvda eruvchan WST-1) orqali kolorimetrik tekshirish, hujayralar metabolik unumdorligi va proliferatsiyasini aniqlash.",
          ru: "Определение жизнеспособности и пролиферации клеток на основе активности митохондриальных дегидрогеназ с помощью солей тетразолия (MTT, XTT и водорастворимого WST-1).",
          en: "Colorimetric assessment of mitochondrial dehydrogenase activity and metabolic viability in living cells using tetrazolium salts (MTT formazan, XTT, and next-generation water-soluble WST-1)."
        },
        image: "/images/in-vitro/viability-mtt-xtt-wst1.jpg",
        tags: ["MTT Testi", "WST-1", "XTT Kolorimetriya", "Mitoxondrial Faollik"]
      },
      {
        id: "invitro-pillar-7",
        number: 7,
        title: {
          uz: "Reaktiv kislorod turlari (ROS) o‘lchovi",
          ru: "Измерение активных форм кислорода (АФК / ROS)",
          en: "Intracellular Reactive Oxygen Species (ROS) Measurement"
        },
        description: {
          uz: "Hujayra ichidagi erkin radikallar va vodorod peroksid hosil bo'lish darajasini DCFH-DA flüoressent bo'yog'i yordamida o'lchash, oksidativ stress kaskadlari va antioksidant himoya mexanizmlarini monitoring qilish.",
          ru: "Количественное измерение генерации свободных радикалов и перекиси водорода с использованием флуорогенного зонда DCFH-DA, мониторинг оксидативного стресса и антиоксидантной активности.",
          en: "Fluorescence-based quantification of intracellular free radicals and peroxides using cell-permeable DCFH-DA probe, monitoring oxidative stress induction and antioxidant scavenging kinetics."
        },
        image: "/images/in-vitro/reactive-oxygen-species-ros.jpg",
        tags: ["ROS O'lchovi", "DCFH-DA Flüoressensiya", "Oksidativ Stress", "Antioksidant"]
      },
      {
        id: "invitro-pillar-8",
        number: 8,
        title: {
          uz: "Sitokin profili",
          ru: "Профилирование цитокинов (Cytokine Profiling)",
          en: "Multiplex Cytokine Secretion Profiling"
        },
        description: {
          uz: "Yallig'lanish va immun javob mediatorlari bo'lgan interleykinlar (IL-1β, IL-6, IL-8, IL-10), o'sma nekroz omili (TNF-α) va interferonlar sekretsiyasini multipleks tahlil va oqimli sitometriya orqali baholash.",
          ru: "Анализ секреции медиаторов воспаления и иммунного ответа (ИЛ-1β, ИЛ-6, ИЛ-10, ФНО-α, ИФН-γ) методом мультиплексного иммуноанализа и проточной цитометрии.",
          en: "Multiplex quantification of pro-inflammatory and anti-inflammatory cytokine secretion profiles (TNF-α, IL-1β, IL-6, IL-10, IFN-γ) evaluating cellular immune modulatory responses."
        },
        image: "/images/in-vitro/cytokine-profiling.jpg",
        tags: ["Sitokinlar (TNF-α / IL-6)", "Multipleks Tahlil", "Immun Javob", "Yallig'lanish Modeli"]
      }
    ]
  },
  {
    id: "in-vivo",
    code: "LAB-04",
    number: 4,
    slug: "in-vivo-bolimi",
    category: "in-vivo",
    accentColor: "#12715A",
    lightTint: "#E3F1EC",
    darkColor: "#0E5A47",
    title: {
      uz: "In vivo bo’limi",
      ru: "Отдел In vivo",
      en: "In Vivo Department"
    },
    subTitle: {
      uz: "Preklinik farmakologiya, toksikologiya, bioetika (3R) va eksperimental modellar",
      ru: "Доклиническая фармакология, токсикология, биоэтика (3R) и экспериментальные модели",
      en: "Preclinical pharmacology, toxicology, bioethics (3R), and experimental models"
    },
    shortDescription: {
      uz: "In vivo bo’limi.",
      ru: "Отдел In vivo.",
      en: "In Vivo Department."
    },
    fullFocus: {
      uz: "In vivo bo’limi zamonaviy asbob-uskunalar bilan jihozlangan bo’lib tajriba hayvonlarida amalga oshiriladigan quyidagi tadqiqotlarni amalga oshiradi:",
      ru: "Отдел In vivo оснащен современным оборудованием и проводит следующие исследования на экспериментальных животных:",
      en: "The In Vivo Department is equipped with modern analytical instrumentation and conducts the following preclinical studies in laboratory animals:"
    },
    headOfRoom: {
      name: "",
      degree: "",
      orcid: "",
      email: ""
    },
    location: {
      floor: "1-qavat",
      roomNumber: "104",
      area: "—",
      biosafetyLevel: "GLP / SPF"
    },
    operationalSpecs: {
      temperature: "20.0 - 24.0 °C",
      humidity: "45 - 65% RH",
      airCleanliness: "15-20 almashinuv/soat, HEPA",
      certification: "O'zDSt 2762:2018 (GLP) / 3R"
    },
    methodologyTags: [
      "Preklinik Toksikologiya",
      "Farmakologik Faollik",
      "3R Bioetika Tamoyillari",
      "GLP Standarti",
      "LD50",
      "LAL-test"
    ],
    cellLinesOrModels: [
      "Oq laboratoriya sichqonlari (BALB/c, C57BL/6)",
      "Kalamushlar (Wistar)",
      "Quyonlar (Chinchilla / New Zealand White)",
      "Dengiz cho'chqalari (Guinea Pigs)"
    ],
    keyEquipment: [],
    methodologies: [],
    academicLinks: [],
    researchPillars: [
      {
        id: "invivo-pillar-1",
        number: 1,
        title: {
          uz: "Anomal zaharlilik",
          ru: "Аномальная токсичность",
          en: "Abnormal Toxicity Testing"
        },
        description: {
          uz: "Farmatsevtik preparatlar, vaksinalar va biologik vositalarning kutilmagan noxush zaharlilik ta'sirini oq sichqon va dengiz cho'chqalarida farmakopeya talablari (USP / Ph.Eur.) bo'yicha baholash.",
          ru: "Оценка неспецифической токсичности лекарственных препаратов, вакцин и биопрепаратов на мышах и морских свинках в соответствии с фармакопейными статьями.",
          en: "Safety testing for unexpected non-specific toxic responses of pharmaceuticals, vaccines, and biologics in mice and guinea pigs adhering to pharmacopeial monographs (USP/Ph.Eur.)."
        },
        image: "/images/in-vivo/anomalous-toxicity.jpg",
        tags: ["USP / Ph.Eur.", "Xavfsizlik Sinovi", "Sichqonlar / Kemiruvchilar", "Biologik Nazorat"]
      },
      {
        id: "invivo-pillar-2",
        number: 2,
        title: {
          uz: "O‘tkir zaharlilik (LD₅₀)",
          ru: "Острая токсичность (LD₅₀)",
          en: "Acute Toxicity (LD₅₀ Determination)"
        },
        description: {
          uz: "Moddaning bir martalik yuborilishida 50% tajriba hayvonlarining o'limiga sabab bo'luvchi o'rtacha o'lim dozasini (LD50) va toksiklik sinfini OECD 420/423/425 uslubiyotlarida aniqlash.",
          ru: "Определение среднесмертельной дозы (LD50) и класса опасности вещества при однократном введении в соответствии с международными руководствами OECD 420/423/425.",
          en: "Determination of the median lethal dose (LD50) and toxic hazard classification following single administration in rodents according to OECD 420/423/425 protocols."
        },
        image: "/images/in-vivo/acute-toxicity-ld50.jpg",
        tags: ["LD50 Hisobi", "OECD 423 / 425", "Toksiklik Sinf", "O'tkir Doza"]
      },
      {
        id: "invivo-pillar-3",
        number: 3,
        title: {
          uz: "Bakterial endotoksinlar (LAL-test)",
          ru: "Бактериальные эндотоксины (LAL-тест)",
          en: "Bacterial Endotoxins (LAL-Test)"
        },
        description: {
          uz: "Inyeksion dori shakllari va substansiyalardagi gram-manfiy bakteriyalar endotoksinlarini Limulus Amebocyte Lysate (LAL) gel-clot va xromogen usullarida aniqlash.",
          ru: "Количественное определение бактериальных эндотоксинов (ЛПС) грамотрицательных бактерий в инъекционных препаратах гель-клот и хромогенным LAL-методами.",
          en: "Quantitative assay of Gram-negative bacterial endotoxins (LPS) in parenteral drugs and active substances utilizing Limulus Amebocyte Lysate (LAL) gel-clot and chromogenic assays."
        },
        image: "/images/in-vivo/bacterial-endotoxin-lal.jpg",
        tags: ["LAL-Test", "Bakterial Endotoksin", "Pirogenlik Nazorati", "Inyeksion Standart"]
      },
      {
        id: "invivo-pillar-4",
        number: 4,
        title: {
          uz: "Pirogenlik (Tana harorati sinovi)",
          ru: "Пирогенность (тест на кроликах по ГФ)",
          en: "Pyrogenicity Testing (Rabbit Pyrogen Test)"
        },
        description: {
          uz: "Dori vositalarining tana haroratini oshirish (isitma) ta'sirini quyonlarda rektal datchiklar orqali uzluksiz monitoring qilish bilan tekshirish.",
          ru: "Испытание инъекционных лекарственных средств на пирогенность на кроликах с непрерывной термометрией ректальными датчиками по стандартам ГФ.",
          en: "Evaluation of hyperthermic fever responses induced by parenteral drug candidates in rabbits utilizing automated continuous rectal temperature sensors per pharmacopeia."
        },
        image: "/images/in-vivo/pyrogenicity-test.jpg",
        tags: ["Quyon Pirogen Testi", "Tana Harorati", "Farmakopeya", "Parenteral Xavfsizlik"]
      },
      {
        id: "invivo-pillar-5",
        number: 5,
        title: {
          uz: "O‘tkir peroral zaharlilik",
          ru: "Острая пероральная токсичность",
          en: "Acute Oral Toxicity (Gavage)"
        },
        description: {
          uz: "Dori vositasining me'da-ichak yo'li orqali zond yordamida bir martalik yuqori dozada yuborilishidagi zaharlilik ko'rsatkichlari, klinik belgilari va organ patologiyasini o'rganish (OECD 423).",
          ru: "Изучение токсических эффектов, поведенческих реакций и макропатологии органов при однократном внутрижелудочном введении вещества грызунам (OECD 423).",
          en: "Evaluation of systemic toxicity, behavioral alterations, and target organ gross pathology after single intragastric gavage administration in rodents (OECD 423)."
        },
        image: "/images/in-vivo/acute-oral-toxicity.jpg",
        tags: ["OECD 423", "Peroral Zondlash", "Me'da-Ichak", "Klinik Patologiya"]
      },
      {
        id: "invivo-pillar-6",
        number: 6,
        title: {
          uz: "Ko‘z shilliq qavatiga qitiqlovchi ta’sir",
          ru: "Раздражающее действие на слизистые оболочки глаз",
          en: "Eye Irritation and Corrosion Testing (Draize Eye Test)"
        },
        description: {
          uz: "Moddaning quyon ko'zi konyunktiva, shox parda (kornea) va kamalak pardasiga tushgandagi shikastlanish darajasini yoriqli mikroskop (slit-lamp) va flyuorestsein bo'yog'ida tekshirish (OECD 405).",
          ru: "Исследование обратимости и тяжести повреждения роговицы, радужки и конъюнктивы глаза кролика с щелевой биомикроскопией и флуоресцеиновым тестом (OECD 405).",
          en: "Ocular safety evaluation quantifying corneal opacity, iritis, and conjunctival chemosis in rabbits via slit-lamp biomicroscopy and fluorescein staining (OECD 405)."
        },
        image: "/images/in-vivo/eye-mucosa-irritation.jpg",
        tags: ["OECD 405", "Draize Eye Test", "Shox Parda", "Flyuorestsein"]
      },
      {
        id: "invivo-pillar-7",
        number: 7,
        title: {
          uz: "Teri orqali rezorbsiyalanuvchi ta’sir",
          ru: "Кожно-резорбтивное действие",
          en: "Percutaneous Absorption and Dermal Resorption"
        },
        description: {
          uz: "Moddaning butun teri qoplamasi to'sig'idan qon aylanish tizimiga so'rilishi, ichki organlarda to'planishi va tizimli intoksikatsiyaga sabab bo'lish xususiyatini Franz diffuziya kamerasi va in vivo modellarida o'rganish.",
          ru: "Изучение степени трансдермального проникновения вещества через кожный барьер в системный кровоток и рисков развития системной интоксикации.",
          en: "Measurement of transdermal flux, skin barrier penetration kinetics into systemic circulation, and internal organ biodistribution utilizing in vivo resorption models."
        },
        image: "/images/in-vivo/dermal-resorption.jpg",
        tags: ["Franz Diffuziya", "Transdermal Rezorbsiya", "Teri To'sig'i", "Tizimli So'rilish"]
      },
      {
        id: "invivo-pillar-8",
        number: 8,
        title: {
          uz: "Kemiruvchilarda moddaning takroriy peroral qabul qilinishidagi zaharlilik. 28 kunlik test (kumulyatsiya)",
          ru: "Подострая токсичность при повторном пероральном введении (28-дневный тест на кумуляцию)",
          en: "Repeated Dose 28-Day Oral Toxicity in Rodents (Cumulation Study)"
        },
        description: {
          uz: "Sichqon va kalamushlarda 28 kun davomida har kungi doza yuborilishida moddaning kumulyativ to'planish effekti, nishon organlardagi gistopatologik o'zgarishlar, gematologik va biokimyoviy siljishlarni aniqlash (OECD 407).",
          ru: "Оценка кумулятивного токсического действия, изменений гематологии, биохимии сыворотки и гистопатологии внутренних органов при 28-дневном пероральном введении (OECD 407).",
          en: "Evaluation of cumulative toxicity, hematological/biochemical biomarkers, and histopathology across vital organs following 28 consecutive days of oral dosing in rodents (OECD 407)."
        },
        image: "/images/in-vivo/repeated-oral-28day.jpg",
        tags: ["OECD 407", "28 Kunlik Test", "Kumulyatsiya", "Gistopatologiya"]
      },
      {
        id: "invivo-pillar-9",
        number: 9,
        title: {
          uz: "Moddaning takroriy teri orqali qo’llanilgandagi zaharlilik. 28/21 kunlik test",
          ru: "Подострая кожная токсичность при повторном нанесении (28/21-дневный тест)",
          en: "Repeated Dose Dermal Toxicity: 28/21-Day Study"
        },
        description: {
          uz: "Teriga 21 yoki 28 kun davomida takroriy applikatsiya qilinganda yuzaga keladigan mahalliy va tizimli patologik o'zgarishlar, xavfsiz ta'sir qilmaydigan doza darajasini (NOAEL) belgilash (OECD 410).",
          ru: "Исследование подострой кожной токсичности при ежедневном нанесении в течение 21/28 дней с определением дозы отсутствия наблюдаемого вредного эффекта (NOAEL, OECD 410).",
          en: "Assessment of cumulative subacute dermal and systemic pathological effects over 21/28 daily skin exposures, determining the No Observed Adverse Effect Level (NOAEL) per OECD 410."
        },
        image: "/images/in-vivo/repeated-dermal-28day.jpg",
        tags: ["OECD 410", "28/21 Kunlik Dermal", "NOAEL Ko'rsatkichi", "Surunkali Xavfsizlik"]
      },
      {
        id: "invivo-pillar-10",
        number: 10,
        title: {
          uz: "Teriga o‘tkir qitiqlovchi/yemiruvchi (korrozion) ta’sir",
          ru: "Острое раздражающее и разъедающее (коррозионное) действие на кожу",
          en: "Acute Dermal Irritation and Corrosion Testing"
        },
        description: {
          uz: "Moddaning teri to'qimasini qaytmas yemirilishi (nekroz, epiteliy qobig'i parchalanishi) yoki qaytuvchi yallig'lanish reaksiyasini keltirib chiqarishini gistologik tahlillar bilan tasdiqlash (OECD 404).",
          ru: "Дифференциация обратимого воспалительного раздражения и необратимой коррозии (некроза) эпидермиса и дермы с микроскопическим подтверждением (OECD 404).",
          en: "Differentiation between reversible cutaneous irritation and irreversible tissue corrosion (full-thickness necrosis of the epidermis into dermis) confirmed by histology (OECD 404)."
        },
        image: "/images/in-vivo/skin-corrosion-irritation.jpg",
        tags: ["OECD 404", "Korrozion Ta'sir", "Nekroz Tahlili", "Teri Gistologiyasi"]
      },
      {
        id: "invivo-pillar-11",
        number: 11,
        title: {
          uz: "Biologik faollik",
          ru: "Биологическая активность (In vivo)",
          en: "In Vivo Biological Activity Profiling"
        },
        description: {
          uz: "Yangi farmatsevtik birikmalarning butun organizm sathida tirik to'qimalar, fiziologik parametrlar, ferment tizimlari va metabolizm jarayonlariga ko'rsatadigan ta'sir mexanizmlarini monitoring qilish.",
          ru: "Мониторинг специфического биологического действия новых соединений на целостный организм, ферментные системы, физиологический статус и метаболизм.",
          en: "In vivo characterization of biological activity kinetics, metabolic modulations, enzyme activation/inhibition, and physiological homeostasis in living animal models."
        },
        image: "/images/in-vivo/biological-activity.jpg",
        tags: ["Biologik Faollik", "Fiziologik Monitoring", "To'qima Javobi", "Metabolik Dinamika"]
      },
      {
        id: "invivo-pillar-12",
        number: 12,
        title: {
          uz: "Farmakologik aktivlik",
          ru: "Фармакологическая активность",
          en: "In Vivo Pharmacological Efficacy and Screening"
        },
        description: {
          uz: "Dori vositalarining maxsus eksperimental patologiya modellarida (yallig'lanish, og'riq qoldiruvchi, gipoglikemik, gipotenziv, sedativ va gepatoprotektor) terapevtik samaradorligini isbotlash.",
          ru: "Доказательство терапевтической эффективности кандидатов в лекарства на экспериментальных моделях заболеваний (противовоспалительная, анальгетическая, кардиоваскулярная).",
          en: "Validation of targeted therapeutic efficacy and pharmacological response across validated animal disease models (anti-inflammatory, analgesic, hypoglycemic, hepatoprotective)."
        },
        image: "/images/in-vivo/pharmacological-activity.jpg",
        tags: ["Terapevtik Samara", "Eksperimental Modellar", "Farmakoterapiya", "Preklinik Efficacy"]
      }
    ]
  },
  {
    id: "vivariy",
    code: "LAB-05",
    number: 5,
    slug: "vivariy",
    category: "vivariy",
    accentColor: "#0D9488",
    lightTint: "#E6F4F1",
    darkColor: "#0A5C54",
    title: {
      uz: "Vivariy",
      ru: "Виварий",
      en: "Vivarium"
    },
    subTitle: {
      uz: "Tajriba-eksperimental hayvonlar majmuasi, parvarishlash va GLP standartidagi infratuzilma",
      ru: "Комплекс экспериментальных лабораторных животных, содержание и инфраструктура по стандартам GLP",
      en: "Experimental Laboratory Animal Facility, Husbandry & GLP Research Infrastructure"
    },
    shortDescription: {
      uz: "Tajriba-eksperimental ishlarda foydalaniladigan hayvonlar saqlanadigan, parvarish qilinadigan va tadqiqotlar uchun tayyorlanadigan maxsus bino va laboratoriya majmuasi.",
      ru: "Специализированный комплекс для содержания, ухода, разведения и подготовки лабораторных животных к доклиническим исследованиям.",
      en: "Specialized facility for housing, caring, breeding, and preparing experimental laboratory animals for preclinical studies."
    },
    fullFocus: {
      uz: "Vivariy — tajriba-eksperimental ishlarda foydalaniladigan hayvonlar saqlanadigan, parvarish qilinadigan va tadqiqotlar uchun tayyorlanadigan maxsus bino. Unda hayvonlarni ko‘paytirish (pitomnik) funksiyasi ham mavjud. Klinika-oldi xavfsizlik (toksikologiya) va samaradorlik tadqiqotlari O'zDSt 2762:2018 (GLP) talablari hamda 3R xalqaro bioetika prinsiplari asosida tashkil etilgan.",
      ru: "Виварий — комплекс содержания, ухода и подготовки животных для экспериментальных и доклинических исследований. Включает функции питомника и карантина. Исследования безопасности и эффективности проводятся строго по стандартам GLP (GxP) и биоэтическим нормам 3R.",
      en: "The Vivarium is a dedicated facility for housing, caring for, and preparing experimental animals for preclinical trials, including breeding and quarantine capabilities. Safety and efficacy studies are conducted strictly per GLP guidelines and international 3R bioethics."
    },
    headOfRoom: {
      name: "",
      degree: "",
      orcid: "",
      email: ""
    },
    location: {
      floor: "1-qavat",
      roomNumber: "LAB-VR-101 / 107",
      area: "240 m²",
      biosafetyLevel: "BSL-2 / GLP"
    },
    operationalSpecs: {
      temperature: "20.0 - 24.0 °C",
      humidity: "45 - 65% RH",
      airCleanliness: "15-20 havo almashinuv/soat, HEPA H14 filtratsiya",
      certification: "O'zDSt 2762:2018 (GLP) / 3R Bioetika"
    },
    methodologyTags: [
      "GLP Standarti",
      "3R Bioetika Tamoyillari",
      "IVC Mikroklimat Tizimi",
      "Karantin va Skrining",
      "7 ta Funktsional Zona",
      "SOP & Sifat Nazorati (QA)"
    ],
    cellLinesOrModels: [
      "Oq laboratoriya sichqonlari (BALB/c, C57BL/6)",
      "Laboratoriya kalamushlari (Wistar)",
      "Quyonlar (Chinchilla, New Zealand White)",
      "Dengiz cho'chqalari (Guinea Pigs)"
    ],
    keyEquipment: [],
    methodologies: [],
    academicLinks: [],
    researchPillars: [],
    vivariumDetails: {
      zones: [
        {
          number: 1,
          name: {
            uz: "Qabul va karantin zonasi",
            ru: "Зона приема и карантина",
            en: "Receipt and Quarantine Zone"
          },
          description: {
            uz: "Yangi keltirilgan hayvonlarni ajratish, iqlimga moslashtirish (akklimatizatsiya) va dastlabki veterinariya sog'liq skriningini o'tkazish.",
            ru: "Изоляция вновь поступивших животных, акклиматизация и первичный ветеринарный скрининг здоровья.",
            en: "Isolation of incoming animals, environmental acclimatization, and initial veterinary health screening."
          }
        },
        {
          number: 2,
          name: {
            uz: "Saqlash xonalari (Animal rooms)",
            ru: "Комнаты содержания животных",
            en: "Animal Housing Rooms"
          },
          description: {
            uz: "Hayvon turlari (sichqon, kalamush, quyon, dengiz cho'chqasi) yoki alohida ilmiy loyihalar bo'yicha mustaqil mikroklimatli xonalarga ajratish.",
            ru: "Раздельное содержание по видам животных (мыши, крысы, кролики, морские свинки) и научным проектам.",
            en: "Dedicated rooms segmented by animal species (mice, rats, rabbits, guinea pigs) and research projects."
          }
        },
        {
          number: 3,
          name: {
            uz: "Izolyatsiya va bioxavfli ishlar zonasi",
            ru: "Зона изоляции и биоопасных работ",
            en: "Isolation and Biohazard Work Zone"
          },
          description: {
            uz: "Uchuvchi moddalar, aerozol, radioaktiv yoki infeksion agentlar bilan olib boriladigan tadqiqotlar uchun alohida manfiy bosimli blok.",
            ru: "Специальный изолированный блок с отрицательным давлением для работы с летучими, аэрозольными или токсичными агентами.",
            en: "Negative-pressure containment suite for research involving volatile compounds, aerosols, or biohazardous agents."
          }
        },
        {
          number: 4,
          name: {
            uz: "Protsedura xonalari",
            ru: "Процедурные комнаты",
            en: "Procedure and Manipulation Rooms"
          },
          description: {
            uz: "Tajriba hayvonlariga test moddalarni dozalash, biologik suyuqliklar (qon, plazma) olish, fiziologik monitoring va klinik kuzatuv olib borish.",
            ru: "Введение тестируемых доз, отбор биологических проб (кровь), физиологический мониторинг и клинические наблюдения.",
            en: "Dosing of test compounds, biofluid sampling (blood, serum), physiological telemetry, and clinical observation."
          }
        },
        {
          number: 5,
          name: {
            uz: "Yuvish va sterilizatsiya bloki",
            ru: "Блок мойки и стерилизации",
            en: "Washing and Sterilization Unit"
          },
          description: {
            uz: "Qafaslarni avtomatlashtirilgan yuvish, maxsus dezinfeksiyalovchi eritmalar bilan ishlov berish va avtoklavda bug'li sterilizatsiya qilish.",
            ru: "Автоматизированная мойка клеток, химическая дезинфекция и паровая стерилизация в автоклавах.",
            en: "Automated cage sanitization, specialized disinfectant treatments, and high-temperature steam autoclaving."
          }
        },
        {
          number: 6,
          name: {
            uz: "Ombor va tayyorlash zonasi",
            ru: "Склад и зона подготовки",
            en: "Storage and Feed Preparation Zone"
          },
          description: {
            uz: "Sertifikatlangan ozuqa (granula yem), to'shama materiallar, steril sarf vositalari va test moddalarni qat'iy nazorat ostida saqlash.",
            ru: "Хранение сертифицированных кормов, подстилочного материала, стерильных расходников и исследуемых субстанций.",
            en: "Climate-controlled storage of certified feeds, bedding substrates, sterile consumables, and test compounds."
          }
        },
        {
          number: 7,
          name: {
            uz: "Chiqindilarni xavfsiz boshqarish",
            ru: "Безопасная утилизация отходов",
            en: "Waste Management and Disposal"
          },
          description: {
            uz: "Biologik xavfli chiqindilar, o'tkir asboblar va kimyoviy qoldiqlarni alohida toifalarga ajratish, zararsizlantirish va xavfsiz utilizatsiya.",
            ru: "Сортировка, биоинактивация, автоклавирование и безопасная утилизация биологических и острых отходов.",
            en: "Segregation, bio-decontamination, autoclaving, and certified disposal of biological and sharp clinical wastes."
          }
        }
      ],
      checklist: [
        {
          criteria: {
            uz: "Hayvonlar kelishi va qabuli",
            ru: "Поступление и прием животных",
            en: "Animal Intake & Quarantine"
          },
          detail: {
            uz: "Majburiy karantin muddati, xalqaro veterinariya pasportlari mavjudligi va har bir partiya uchun sog'liq monitoringi jurnali yuritiladi.",
            ru: "Обязательный карантин, наличие ветеринарных сертификатов и журнал скрининга здоровья для каждой партии.",
            en: "Mandatory quarantine acclimatization, verified veterinary health certificates, and documented batch intake logs."
          }
        },
        {
          criteria: {
            uz: "Mikroiqlim va muhit nazorati",
            ru: "Контроль микроклимата и среды",
            en: "Microclimate & Environment"
          },
          detail: {
            uz: "Harorat (20-24°C), namlik (45-65%), 12/12 soatlik avtomat yoritish va shovqinsiz ventilyatsiya qaydlari elektron bazada qayd etiladi.",
            ru: "Непрерывная электронная регистрация температуры (20-24°C), влажности (45-65%), фотопериода и кратности воздухообмена.",
            en: "Continuous automated telemetry of temperature (20-24°C), relative humidity (45-65%), photoperiod, and air exchanges."
          }
        },
        {
          criteria: {
            uz: "Zonalash va oqimlarni ajratish",
            ru: "Зонирование и разделение потоков",
            en: "Architectural Zoning & Separation"
          },
          detail: {
            uz: "Hayvon turlari, alohida ilmiy loyihalar, toza va iflos oqimlar hamda bioxavfli tadqiqotlar bo'yicha to'liq ajratilgan.",
            ru: "Четкое разделение 'чистых' и 'грязных' потоков, изоляция различных видов животных и биоопасных исследований.",
            en: "Rigorous segregation of clean/dirty corridors, species-specific isolation, and dedicated biohazard barriers."
          }
        },
        {
          criteria: {
            uz: "SOP va xodimlar malakasi",
            ru: "СОП и квалификация персонала",
            en: "SOP Compliance & Training"
          },
          detail: {
            uz: "Barcha xodimlar muntazam GLP va bioetika bo'yicha o'qitilgan, barcha protseduralar tasdiqlangan SOP bilan hujjatlashtirilgan.",
            ru: "Персонал сертифицирован по стандартам GLP и 3R; все манипуляции проводятся по валидированным СОП.",
            en: "Staff certified in GLP and laboratory animal science; all handling strictly governed by validated standard SOPs."
          }
        },
        {
          criteria: {
            uz: "3R Bioetika va insonparvarlik",
            ru: "Биоэтика 3R и гуманное обращение",
            en: "3R Bioethics & Humane Endpoints"
          },
          detail: {
            uz: "3R tamoyillari, majburiy analgeziya (og'riqsizlantirish), humane endpoint va insonparvar evtanaziya protokollari amalda ishlaydi.",
            ru: "Применение протоколов обезболивания, гуманных конечных точек, этическая экспертиза комитетом по биоэтике.",
            en: "Institutional bioethics oversight, preemptive analgesia, defined humane endpoints, and painless euthanasia protocols."
          }
        },
        {
          criteria: {
            uz: "GLP Sifat kafolati va audit",
            ru: "Обеспечение качества GLP и аудит",
            en: "GLP Quality Assurance & Audits"
          },
          detail: {
            uz: "Mustaqil QA xizmati tomonidan doimiy ichki audit, jarayonlarni tekshirish va xom ma'lumotlarning to'liq haqqoniyligi ta'minlanadi.",
            ru: "Регулярный внутренний аудит службой QA, контроль целостности сырых данных и протоколирование результатов.",
            en: "Independent QA inspection of study phases, raw data verification, audit trail archives, and regulatory readiness."
          }
        }
      ],
      animalModels: [
        {
          name: {
            uz: "Oq laboratoriya sichqonlari",
            ru: "Белые лабораторные мыши",
            en: "White Laboratory Mice"
          },
          scientificName: "Mus musculus",
          strain: "BALB/c, C57BL/6, Albino",
          description: {
            uz: "O'tkir toksiklik (LD50), birlamchi farmakologik skrining va bioetika me'yorlaridagi preklinik xavfsizlik sinovlari.",
            ru: "Острая токсичность (LD50), первичный фармакологический скрининг и доклиническая оценка безопасности по стандартам GLP.",
            en: "Acute toxicity (LD50), primary pharmacological screening, and GLP-compliant preclinical safety profiling."
          },
          image: "/images/vivariy/animals/white-mouse.jpg",
          tags: ["BALB/c", "LD50 Toksiklik", "In Vivo Skrining"]
        },
        {
          name: {
            uz: "Oq laboratoriya kalamushlari",
            ru: "Белые лабораторные крысы",
            en: "White Laboratory Rats"
          },
          scientificName: "Rattus norvegicus",
          strain: "Wistar, Sprague Dawley",
          description: {
            uz: "Subxronik va surunkali toksiklik, farmakokinetika (PK/TK), moddalar kumulyatsiyasi va metabolizm tadqiqotlari.",
            ru: "Субхроническая и хроническая токсичность, фармакокинетика (PK/TK), кумуляция и метаболическое профилирование.",
            en: "Subchronic and chronic toxicity, pharmacokinetics (PK/TK), substance accumulation, and metabolic profiling."
          },
          image: "/images/vivariy/animals/white-rat.jpg",
          tags: ["Wistar", "PK / TK Tahlil", "Xronik Toksiklik"]
        },
        {
          name: {
            uz: "Laboratoriya quyonlari",
            ru: "Лабораторные кролики",
            en: "Laboratory Rabbits"
          },
          scientificName: "Oryctolagus cuniculus",
          strain: "Chinchilla, New Zealand White",
          description: {
            uz: "Pirogenlik (isitma chaqiruvchi endotoksinlar) testi, rektal datchikli uzluksiz monitoring va mahalliy to'qima tolerantligi.",
            ru: "Тест на пирогенность (температурная реакция), непрерывный ректальный мониторинг и местная переносимость.",
            en: "Pyrogenicity testing, automated rectal telemetry, and local tissue tolerance evaluation."
          },
          image: "/images/vivariy/animals/white-rabbit.jpg",
          tags: ["New Zealand White", "Pirogenlik Sinovi", "In Vivo Monitoring"]
        },
        {
          name: {
            uz: "Oq dengiz cho'chqalari",
            ru: "Белые морские свинки",
            en: "White Guinea Pigs"
          },
          scientificName: "Cavia porcellus",
          strain: "Dunkin Hartley (Albino)",
          description: {
            uz: "Sensibilizatsiyalovchi (allergen) ta'sir, immunotoksiklik, teri orqali o'tuvchanlik va dermatologik xavfsizlik baholash.",
            ru: "Сенсибилизирующее (аллергенное) действие, иммунотоксичность, кожная проницаемость и дерматологическая безопасность.",
            en: "Sensitization (allergenicity), immunotoxicity, dermal penetration, and dermatological safety profiling."
          },
          image: "/images/vivariy/animals/white-guinea-pig.jpg",
          tags: ["Dunkin Hartley", "Sensibilizatsiya", "Allergenlik"]
        }
      ]
    }
  }
];

export const LAB_EQUIPMENT_DIRECTORY: Equipment[] = [
  {
    id: "eq-viv-1",
    name: "Individual Shamollatiladigan Qafaslar Tizimi (IVC Racks)",
    model: "Tecniplast Sealsafe Plus IVC System",
    manufacturer: "Tecniplast",
    originCountry: "Italiya",
    roomId: "vivariy",
    roomCode: "LAB-VR-103",
    roomName: {
      uz: "Eksperimental Vivariy va Preklinik Tadqiqotlar Majmuasi (GLP)",
      ru: "Экспериментальный виварий и комплекс доклинических исследований (GLP)",
      en: "Experimental Vivarium & Preclinical Research Facility (GLP)"
    },
    accentColor: "#0D9488",
    category: "Vivariy va Bioinfratuzilma",
    technicalSpecs: {
      capacity: "72 ta qafas (sichqon/kalamush)",
      speed: "0.3 m/s mikroklimat havo oqimi",
      range: "Musbat va manfiy bosim rejimlari",
      detector: "HEPA H14 filtratsiya (99.995%)"
    },
    scientificApplication: {
      uz: "Laboratoriya kemiruvchilarini xalqaro GLP standartlarida o'zaro kontaminatsiyasiz saqlash.",
      ru: "Содержание лабораторных грызунов по стандартам GLP без риска перекрестной контаминации.",
      en: "Cross-contamination-free housing of laboratory rodents strictly under international GLP standards."
    },
    sopCode: "SOP-VR-001",
    maintenanceStatus: "optimal"
  },
  {
    id: "eq-viv-2",
    name: "Biologik Xavfsizlik Protsedura Shkafi (Vivariy uchun)",
    model: "Esco Animal Handling Biosafety Cabinet VIVA",
    manufacturer: "Esco Lifesciences",
    originCountry: "Singapur",
    roomId: "vivariy",
    roomCode: "LAB-VR-103",
    roomName: {
      uz: "Eksperimental Vivariy va Preklinik Tadqiqotlar Majmuasi (GLP)",
      ru: "Экспериментальный виварий и комплекс доклинических исследований (GLP)",
      en: "Experimental Vivarium & Preclinical Research Facility (GLP)"
    },
    accentColor: "#0D9488",
    category: "Bioxavfsizlik va Karantin",
    technicalSpecs: {
      range: "Class II Type A2 Laminar oqim",
      detector: "ULPA/HEPA dual filtratsiya",
      capacity: "2 nafar operator uchun keng ish zonasi",
      speed: "Past shovqin darajasi (<53 dBA)"
    },
    scientificApplication: {
      uz: "Hayvonlarni dozalash, qon olish, o'lchov va klinik ko'rik paytida allergen va aerozollardan himoya qilish.",
      ru: "Защита персонала и животных при дозировании, взятии проб крови и клиническом осмотре.",
      en: "Operator and specimen protection during dosing, blood sampling, and clinical observation."
    },
    sopCode: "SOP-VR-003",
    maintenanceStatus: "optimal"
  },
  {
    id: "eq-1",
    name: "Yuqori Samarali Suyuqlik Xromatografi (HPLC-DAD)",
    model: "Agilent 1260 Infinity II LC",
    manufacturer: "Agilent Technologies",
    originCountry: "AQSh / Germaniya",
    roomId: "yussx",
    roomCode: "LAB-HP-201",
    roomName: {
      uz: "YUSSX va Instrumental Bioanaliz Xonasi",
      ru: "Лаборатория ВЭЖХ и биоанализа",
      en: "HPLC & Bioanalysis Laboratory"
    },
    accentColor: "#782AEB",
    category: "Xromatografiya",
    technicalSpecs: {
      range: "190 - 950 nm (DAD Detektor)",
      detector: "1024-element DAD diyod matritsa",
      capacity: "Avtosampler 132 viala (2 ml)",
      speed: "Bosim 600 bar gacha, oqim 0.05 - 5.0 ml/min"
    },
    scientificApplication: {
      uz: "O'simlik ekstraktlari, plazma namunalari va dori molekulalarini sifat/miqdoriy profilini o'rganish.",
      ru: "Качественное и количественное профилирование экстрактов растений, плазмы и лекарственных молекул.",
      en: "Qualitative and quantitative profiling of botanical extracts, blood plasma, and drug candidates."
    },
    sopCode: "SOP-HP-001",
    maintenanceStatus: "optimal"
  },
  {
    id: "eq-2",
    name: "Ikkita Nurlu UV-Vis Spektrofotometri",
    model: "Shimadzu UV-1900i",
    manufacturer: "Shimadzu Corporation",
    originCountry: "Yaponiya",
    roomId: "biokimyo",
    roomCode: "LAB-BC-202",
    roomName: {
      uz: "Biokimyoviy va Antioksidant Tahlillar Xonasi",
      ru: "Лаборатория биохимических анализов",
      en: "Biochemical & Antioxidant Laboratory"
    },
    accentColor: "#009F4D",
    category: "Spektrofotometriya",
    technicalSpecs: {
      range: "190 - 1100 nm to'lqin uzunligi",
      resolution: "Spektral kenglik: 1.0 nm",
      detector: "Silikon fotodiod detektori"
    },
    scientificApplication: {
      uz: "DPPH, ABTS antioksidant faolligi, MDA lipid peroksidatsiyasi va fermentlar kinetikasini aniqlash.",
      ru: "Определение антиоксидантной активности DPPH, ABTS, ПОЛ (МДА) и кинетики ферментов.",
      en: "Determination of DPPH, ABTS antioxidant capacities, MDA lipid peroxidation, and enzyme kinetics."
    },
    sopCode: "SOP-BC-001",
    maintenanceStatus: "calibrated"
  },
  {
    id: "eq-3",
    name: "II-sinf A2 Turi Laminar Biosavdlik Boksi",
    model: "Thermo Scientific Herasafe 2030i",
    manufacturer: "Thermo Fisher Scientific",
    originCountry: "Germaniya",
    roomId: "in-vitro",
    roomCode: "LAB-IV-101",
    roomName: {
      uz: "In Vitro va Hujayra Biologiyasi Xonasi",
      ru: "Лаборатория In Vitro и клеточной биологии",
      en: "In Vitro & Cell Biology Laboratory"
    },
    accentColor: "#0072CE",
    category: "Steril Kulturalar",
    technicalSpecs: {
      capacity: "1.5 metr ishchi zona kengligi",
      airCleanliness: "HEPA H14 filtratsiya (99.995% samaradorlik)",
      speed: "Laminar havo tezligi 0.45 m/s"
    },
    scientificApplication: {
      uz: "Inson va sut emizuvchilar hujayra liniyalarini BSL-2 steril sharoitda ekish va parvarishlash.",
      ru: "Культивирование клеточных линий в стерильных условиях BSL-2.",
      en: "Seeding and subculturing mammalian cell lines under certified sterile BSL-2 conditions."
    },
    sopCode: "SOP-IV-002",
    maintenanceStatus: "optimal"
  },
  {
    id: "eq-4",
    name: "Invertlangan Tadqiqot Mikroskopi",
    model: "Olympus IX73 Inverted Phase System",
    manufacturer: "Evident / Olympus",
    originCountry: "Yaponiya",
    roomId: "in-vitro",
    roomCode: "LAB-IV-101",
    roomName: {
      uz: "In Vitro va Hujayra Biologiyasi Xonasi",
      ru: "Лаборатория In Vitro и клеточной биологии",
      en: "In Vitro & Cell Biology Laboratory"
    },
    accentColor: "#0072CE",
    category: "Optik Mikroskopiya",
    technicalSpecs: {
      resolution: "DP74 20.7 Megapixel yuqori sezgirlikdagi kamera",
      capacity: "4x, 10x, 20x, 40x faza-kontrast linzalar",
      detector: "Floressensiya (FITC, TRITC, DAPI kanallari)"
    },
    scientificApplication: {
      uz: "Hujayra sitomorfologiyasi, konfluentlik foizi va apoptoz morfologiyasini real vaqtda qayd etish.",
      ru: "Цитоморфологический анализ, оценка конфлюэнтности и визуализация апоптоза.",
      en: "Real-time recording of cytomorphology, confluence percentage, and apoptosis progression."
    },
    sopCode: "SOP-IV-005",
    maintenanceStatus: "calibrated"
  },
  {
    id: "eq-5",
    name: "Kemiruvchilar uchun Motorlashtirilgan Treadmill",
    model: "Panlab LE8710 Research Treadmill",
    manufacturer: "Panlab Harvard Apparatus",
    originCountry: "Ispaniya",
    roomId: "in-vivo",
    roomCode: "LAB-PH-102",
    roomName: {
      uz: "In Vivo va Eksperimental Farmakologiya Xonasi",
      ru: "Лаборатория In Vivo фармакологии",
      en: "In Vivo Pharmacology Laboratory"
    },
    accentColor: "#FF585D",
    category: "Fiziologik Skrining",
    technicalSpecs: {
      speed: "1 - 80 metr/daqiqa sozlanuvchan tezlik",
      capacity: "5 ta parallel kalamush yo'lagi",
      range: "0 - 25 gradus qiyalik burchagi"
    },
    scientificApplication: {
      uz: "Yangi dori vositalarining adaptogen faolligi va jismoniy chidamlilikka ta'sirini baholash.",
      ru: "Оценка адаптогенной активности и физической выносливости при фармакологических нагрузках.",
      en: "Assessment of adaptogenic efficacy and endurance under standardized physical workloads."
    },
    sopCode: "SOP-PH-008",
    maintenanceStatus: "optimal"
  },
  {
    id: "eq-6",
    name: "Raqamli Pletizmometr",
    model: "Ugo Basile 37140 Digital Plethysmometer",
    manufacturer: "Ugo Basile",
    originCountry: "Italiya",
    roomId: "in-vivo",
    roomCode: "LAB-PH-102",
    roomName: {
      uz: "In Vivo va Eksperimental Farmakologiya Xonasi",
      ru: "Лаборатория In Vivo фармакологии",
      en: "In Vivo Pharmacology Laboratory"
    },
    accentColor: "#FF585D",
    category: "In Vivo Skrining",
    technicalSpecs: {
      resolution: "0.01 ml o'lchov aniqligi",
      capacity: "Kalamush va sichqon panjalari uchun mos kameralar",
      detector: "O'tkazuvchanlik sensori"
    },
    scientificApplication: {
      uz: "Karraginin ta'sirida chaqirilgan o'tkir yallig'lanish shishi dinamikasini qayd etish.",
      ru: "Количественное измерение динамики каррагинанового отека лапы.",
      en: "Quantitative measurement of carrageenan-induced paw edema kinetics."
    },
    sopCode: "SOP-PH-005",
    maintenanceStatus: "optimal"
  },
  {
    id: "eq-7",
    name: "Laboratoriya Liofil Quritgichi (Freeze Dryer)",
    model: "Labconco FreeZone 4.5 L",
    manufacturer: "Labconco Corporation",
    originCountry: "AQSh",
    roomId: "fitokimyo",
    roomCode: "LAB-PC-301",
    roomName: {
      uz: "Fitokimyo va Farm Texnologiya Xonasi",
      ru: "Лаборатория фитохимии и фармтехнологии",
      en: "Phytochemistry & Tech Laboratory"
    },
    accentColor: "#FFB81C",
    category: "Liofilizatsiya",
    technicalSpecs: {
      temperatureRange: "-55°C kondensator harorati",
      capacity: "4.5 Litr muz to'plami",
      range: "0.002 mbar chuqur vakuum darajasi"
    },
    scientificApplication: {
      uz: "Issiqlikka chidamsiz o'simlik ekstraktlari va oqsilli birikmalarni nozik sublimatsion quritish.",
      ru: "Сублимационная сушка термолабильных экстрактов и белковых фракций.",
      en: "Sublimation lyophilization of thermolabile botanical extracts and protein fractions."
    },
    sopCode: "SOP-PC-008",
    maintenanceStatus: "optimal"
  },
  {
    id: "eq-8",
    name: "Vakuumli Rotor Bug'latgich Tizimi",
    model: "Buchi Rotavapor R-300",
    manufacturer: "BÜCHI Labortechnik AG",
    originCountry: "Shveysariya",
    roomId: "fitokimyo",
    roomCode: "LAB-PC-301",
    roomName: {
      uz: "Fitokimyo va Farm Texnologiya Xonasi",
      ru: "Лаборатория фитохимии и фармтехнологии",
      en: "Phytochemistry & Tech Laboratory"
    },
    accentColor: "#FFB81C",
    category: "Bug'latish va Ekstraksiya",
    technicalSpecs: {
      range: "20 - 220°C hammom harorati",
      capacity: "50 ml dan 5000 ml gacha kolbalar",
      speed: "10 - 280 rpm aylanish tezligi"
    },
    scientificApplication: {
      uz: "Ekstraktsiya erituvchilarini past haroratda xavfsiz haydash va ekstraktni quyultirish.",
      ru: "Низкотемпературное упаривание растворителей без деградации действующих веществ.",
      en: "Low-temperature solvent evaporation without thermal degradation of active ingredients."
    },
    sopCode: "SOP-PC-002",
    maintenanceStatus: "optimal"
  },
  {
    id: "eq-9",
    name: "Avtomatlashtirilgan IFA (ELISA) Mikroplanshet Tahlilatori",
    model: "Bio-Rad iMark Reader",
    manufacturer: "Bio-Rad Laboratories",
    originCountry: "AQSh",
    roomId: "biokimyo",
    roomCode: "LAB-BC-202",
    roomName: {
      uz: "Biokimyoviy va Antioksidant Tahlillar Xonasi",
      ru: "Лаборатория биохимических анализов",
      en: "Biochemical & Antioxidant Laboratory"
    },
    accentColor: "#009F4D",
    category: "Immunoferment Tahlil",
    technicalSpecs: {
      range: "400 - 750 nm (Optik filtrlar)",
      resolution: "0.001 OD fotometrik sezgirlik",
      capacity: "96-o'lchamli mikroplanshetlar"
    },
    scientificApplication: {
      uz: "Qon zardobidagi yallig'lanish sitokinlari (TNF-α, IL-6) va oqsil belgilarini aniqlash.",
      ru: "Определение провоспалительных цитокинов (TNF-α, IL-6) и белковых маркеров.",
      en: "Quantification of pro-inflammatory cytokines (TNF-α, IL-6) and diagnostic protein markers."
    },
    sopCode: "SOP-BC-004",
    maintenanceStatus: "optimal"
  },
  {
    id: "eq-10",
    name: "Bioinformatik Hisoblash Server Stansiyasi",
    model: "Dell Precision 7920 Workstation",
    manufacturer: "Dell Technologies",
    originCountry: "AQSh",
    roomId: "nashrlar",
    roomCode: "LAB-GL-302",
    roomName: {
      uz: "Ilmiy Nashrlar va Ma'lumotlar Tahlili Xonasi",
      ru: "Лаборатория анализа данных и публикаций",
      en: "Data Analytics & Publications Hub"
    },
    accentColor: "#00B5E2",
    category: "Bioinformatika va Tahlil",
    technicalSpecs: {
      speed: "Dual Intel Xeon Gold (36 Cores, 72 Threads)",
      capacity: "128 GB ECC RAM + 16 TB High-Speed Storage",
      detector: "NVIDIA RTX A6000 48GB GPU"
    },
    scientificApplication: {
      uz: "Biostatistik modellashtirish, doza-ta'sir egri chiziqlarini regressiya tahlili va multivariat modellar.",
      ru: "Биостатистическое моделирование, кривые доза-эффект, многомерный анализ.",
      en: "Biostatistical modeling, dose-response non-linear regressions, and multivariate analytics."
    },
    sopCode: "SOP-GL-002",
    maintenanceStatus: "optimal"
  }
];

export const LAB_PUBLICATIONS: Publication[] = [
  {
    id: "pub-1",
    title: {
      uz: "Markaziy Osiyo Ziziphora pedicellata ekstraktlarining in vitro sitotoksikligi va apoptoz mexanizmlari",
      ru: "In vitro цитотоксичность и механизмы апоптоза экстрактов Ziziphora pedicellata Центральной Азии",
      en: "In vitro cytotoxicity and apoptosis-inducing mechanisms of Central Asian Ziziphora pedicellata extracts"
    },
    authors: "Gulyamov Sh., Sharipov A., Tulyaganov B., Fayzullayev D.",
    journal: "Journal of Ethnopharmacology (Elsevier)",
    year: 2024,
    quartile: "Q1",
    impactFactor: 5.4,
    doi: "10.1016/j.jep.2024.117890",
    scopusId: "2-s2.0-85189201928",
    roomCodes: ["LAB-IV-101", "LAB-HP-201", "LAB-PC-301"],
    topics: ["Phytochemistry", "In Vitro Screening", "Apoptosis", "HepG2"],
    pdfAvailable: true,
    abstract: {
      uz: "Ushbu ilmiy maqolada Ziziphora pedicellata o'simligidan olingan flavonoidlarga boy fraksiyalarning HepG2 va MCF-7 o'sma hujayralariga selektiv sitotoksik ta'siri (IC50 = 18.4 µg/ml) va mitoxondriya membran potensialining pasayishi orqali kaspaza-3/9 faollashuv mexanizmi isbotlangan.",
      ru: "В исследовании доказана селективная цитотоксичность (IC50 = 18.4 мкг/мл) обогащенных флавоноидами фракций Ziziphora pedicellata против клеток HepG2 и MCF-7 с активацией каспаз 3/9.",
      en: "This paper demonstrates selective cytotoxicity (IC50 = 18.4 µg/ml) of flavonoid-rich fractions from Ziziphora pedicellata on HepG2 and MCF-7 cells via mitochondrial depolarization and caspase-3/9 activation."
    }
  },
  {
    id: "pub-2",
    title: {
      uz: "Kemiruvchilarda karraginin chaqirgan o'tkir yallig'lanishda yangi fitokompleksning antieksudativ samarasi",
      ru: "Противовоспалительная эффективность нового фитокомплекса при каррагинановом отеке у грызунов",
      en: "Anti-exudative efficacy of a novel standardized phytocomplex in carrageenan-induced acute inflammation"
    },
    authors: "Sharipov A., Sulaymonova N., Fayzullayev D.",
    journal: "Phytomedicine Plus (Elsevier)",
    year: 2023,
    quartile: "Q2",
    impactFactor: 3.8,
    doi: "10.1016/j.phyplu.2023.100452",
    scopusId: "2-s2.0-85165432190",
    roomCodes: ["LAB-PH-102", "LAB-BC-202"],
    topics: ["In Vivo", "Anti-inflammatory", "Biomarkers", "MDA"],
    pdfAvailable: true,
    abstract: {
      uz: "Kalamushlarda karraginin modeli orqali o'rganilgan standartlashtirilgan polifenol ekstrakti panja shishini 54.2% ga qisqartirdi va qon zardobidagi malondialdegid (MDA) darajasini me'yorlashtirdi.",
      ru: "Стандартизированный полифенольный экстракт снизил отек лапы на 54.2% и нормализовал уровень малонового диальдегида (МДА) в сыворотке крови крыс.",
      en: "The standardized polyphenol extract attenuated paw edema by 54.2% and significantly restored normal serum malondialdehyde (MDA) levels in Wistar rats."
    }
  },
  {
    id: "pub-3",
    title: {
      uz: "Biologik suyuqliklarda polifenol markerlarini RP-HPLC usulida aniqlash: ICH Q2(R1) validatsiyasi",
      ru: "Количественное определение полифенольных маркеров в биожидкостях методом ОФ-ВЭЖХ: валидация ICH Q2(R1)",
      en: "RP-HPLC quantitative determination of polyphenol markers in biological fluids: ICH Q2(R1) validation"
    },
    authors: "Tulyaganov B., Gulyamov Sh., Sulaymonova N.",
    journal: "Journal of Chromatography B (Elsevier)",
    year: 2023,
    quartile: "Q2",
    impactFactor: 3.3,
    doi: "10.1016/j.jchromb.2023.123891",
    scopusId: "2-s2.0-85151239841",
    roomCodes: ["LAB-HP-201", "LAB-GL-302"],
    topics: ["HPLC", "Method Validation", "Bioanalysis", "Pharmacokinetics"],
    pdfAvailable: true,
    abstract: {
      uz: "Plazma namunalarida kvertsetin va luteolin miqdorini aniqlash bo'yicha RP-HPLC-DAD metodikasi ishlab chiqildi va validatsiya qilindi (R2 > 0.9995; aniqlash chegarasi LOD = 12 ng/ml).",
      ru: "Разработана и валидирована методика ОФ-ВЭЖХ-DAD для количественного анализа кверцетина и лютеолина в плазме крови (R2 > 0.9995; LOD = 12 нг/мл).",
      en: "A sensitive RP-HPLC-DAD method was developed and validated per ICH Q2(R1) for quantifying quercetin and luteolin in rat plasma matrices (R2 > 0.9995; LOD = 12 ng/ml)."
    }
  }
];

export const LAB_SOPS: SOPDocument[] = [
  {
    id: "sop-vr-001",
    code: "SOP-VR-001",
    title: {
      uz: "GLP Standartida Laboratoriya Hayvonlarini Karantinlash, Saqlash va 7 Zonalik Vivariy Boshqaruvi",
      ru: "Стандартная операционная процедура карантина, содержания животных и управления 7-зонным виварием по GLP",
      en: "Standard Operating Procedure for Animal Quarantine, Housing, and 7-Zone Vivarium Management under GLP"
    },
    category: "Vivariy va Bioetika (GLP)",
    version: "v3.1 (2024)",
    author: "Dr. S. Fazliev, PhD / QA Department",
    approvalDate: "09.08.2024",
    targetRoomCode: "LAB-VR-103",
    accentColor: "#0D9488",
    purpose: {
      uz: "O'zDSt 2762:2018 (GLP) va 3R bioetika talablariga muvofiq laboratoriya hayvonlarini qabul qilish, 14 kunlik karantin, mikroklimat monitoringi va xavfsiz tadqiqotlarni tashkil etish.",
      ru: "Организация приема, 14-дневного карантина, микроклиматического контроля и безопасного проведения исследований в соответствии с O'zDSt 2762:2018 (GLP) и принципами 3R.",
      en: "Establishment of animal intake, 14-day quarantine, microclimate surveillance, and safe study conduct compliant with O'zDSt 2762:2018 (GLP) and 3R bioethics."
    },
    equipmentNeeded: [
      "Tecniplast Sealsafe Plus IVC Racks",
      "Esco VIVA Animal Handling Biosafety Cabinet",
      "Raqamli termo-gigrometr va avtomat log tizimi",
      "Steelco qafas yuvish va dezinfeksiya majmuasi"
    ],
    reagentsNeeded: [
      "Virkon-S 1% li dezinfeksiya eritmasi",
      "Sterillangan yog'och qirindisi (podstilka)",
      "Standartlashtirilgan granulalangan yem",
      "0.9% li steril natriy xlorid eritmasi"
    ],
    steps: [
      {
        step: 1,
        title: {
          uz: "Qabul va 14 kunlik Karantin Skriningi",
          ru: "Прием и 14-дневный карантинный скрининг",
          en: "Intake & 14-Day Quarantine Screening"
        },
        desc: {
          uz: "Keltirilgan hayvonlar hujjatlari tekshiriladi, qabul zonasida tashqi ko'rikdan o'tkazilib, 14 kunga karantin blokiga joylashtiriladi.",
          ru: "Проверка сопроводительных документов, первичный осмотр в зоне приема и размещение в карантинном блоке на 14 суток.",
          en: "Verification of documentation, external clinical check at intake, and placement in the quarantine block for 14 days."
        }
      },
      {
        step: 2,
        title: {
          uz: "Mikroklimat va Muhit Nazorati (24/7)",
          ru: "Контроль микроклимата и среды (24/7)",
          en: "24/7 Environmental & Microclimate Control"
        },
        desc: {
          uz: "Harorat 20-24°C, namlik 45-65%, 12:12 yorug'lik davri va soatiga 15-20 havo almashinuvi qayd etib boriladi.",
          ru: "Поддержание температуры 20-24°C, влажности 45-65%, светового цикла 12:12 и 15-20 воздухообменов в час.",
          en: "Maintenance of 20-24°C temperature, 45-65% humidity, 12:12 light cycle, and 15-20 air changes per hour."
        }
      },
      {
        step: 3,
        title: {
          uz: "3R Bioetika va Insonparvarlik Mezonlari (Humane Endpoints)",
          ru: "Биоэтика 3R и критерии гуманных конечных точек",
          en: "3R Bioethics & Humane Endpoint Criteria"
        },
        desc: {
          uz: "Eksperimentlarda og'riq va stressni minimallashtirish, adekvat analgeziya qo'llash va hayvonlar holatini balli shkala bo'yicha baholash.",
          ru: "Минимизация стресса и боли, адекватное обезболивание и оценка состояния животных по балльной шкале.",
          en: "Minimizing pain and stress, providing adequate analgesia, and score-based monitoring of animal wellbeing."
        }
      }
    ]
  },
  {
    id: "sop-iv-001",
    code: "SOP-IV-001",
    title: {
      uz: "MTT Hujayra Hayotchanligi va Sitotoksiklik Tahlili Standart Operatsion Protokoli",
      ru: "Стандартная операционная процедура (СОП) анализа цитотоксичности MTT",
      en: "Standard Operating Procedure: MTT In Vitro Cytotoxicity Assay"
    },
    category: "In Vitro / Cell Biology",
    version: "v3.2",
    author: "Gulyamov Shohid Sharofutdin o'g'li, PhD",
    approvalDate: "2024-02-15",
    targetRoomCode: "LAB-IV-101",
    accentColor: "#0072CE",
    purpose: {
      uz: "Eksperimental dori vositalari va bioaktiv ekstraktlarning o'sma hujayralariga sitotoksik ta'sirini baholash va IC50 qiymatini spektrofotometrik hisoblash.",
      ru: "Оценка цитотоксического действия кандидатов в лекарственные средства на опухолевые клетки и расчет IC50.",
      en: "Quantitative assessment of candidate pharmaceutical cytotoxicity on mammalian cells and IC50 determination."
    },
    equipmentNeeded: [
      "Thermo Herasafe II Laminar Boks",
      "Binder CB-160 CO2 Inkubator",
      "BioTek Epoch 2 Mikroplanshet Rider",
      "Eppendorf Avtomatik Pipetkalar (10, 100, 1000 µl)"
    ],
    reagentsNeeded: [
      "MTT reagenti (3-(4,5-dimethylthiazol-2-yl)-2,5-diphenyltetrazolium bromide, Sigma #M2128)",
      "DMSO (Dimetilsulfoksid, steril, analitik tozalikda)",
      "DMEM / RPMI-1640 ozuqa muhiti (10% FBS va antibiotiklar bilan)",
      "Steril PBS buferi (pH 7.4)"
    ],
    steps: [
      {
        step: 1,
        title: {
          uz: "Hujayralarni 96-o'lchamli planshetga ekish (Seeding)",
          ru: "Посев клеток в 96-луночный планшет",
          en: "Cell seeding into 96-well microplate"
        },
        desc: {
          uz: "Eksponensial o'sish fazasidagi hujayralar suspenziyasi tayyorlanadi. Har bir chuqurchaga 100 µl hajmda 5x10^3 - 1x10^4 hujayra ekiladi va CO2 inkubatorda (37°C, 5% CO2) 24 soat davomida yopishishi uchun qoldiriladi.",
          ru: "Суспензия клеток высевается по 5x10^3 - 1x10^4 клеток на лунку в 100 мкл среды и инкубируется 24 ч (37°C, 5% CO2).",
          en: "Harvest exponential phase cells and seed 5x10^3 - 1x10^4 cells per well in 100 µl media. Incubate 24h at 37°C in 5% CO2 for adherent monolayer formation."
        }
      },
      {
        step: 2,
        title: {
          uz: "Sinov moddalari bilan ishlov berish (Treatment)",
          ru: "Инкубация с исследуемыми веществами",
          en: "Drug compound exposure series"
        },
        desc: {
          uz: "Ozuqa muhiti ehtiyotkorlik bilan olib tashlanadi. O'rganilayotgan moddaning seriyali konsentratsiyalari (masalan, 1, 5, 10, 25, 50, 100 µg/ml) har biridan 3 tadan parallel chuqurchaga qo'shiladi va 48 soat inkubatsiya qilinadi.",
          ru: "Среда заменяется на растворы исследуемого вещества в диапазоне концентраций в 3 повторностях, инкубируется 48 часов.",
          en: "Aspirate old medium and add serial dilutions of test substance in triplicate wells. Incubate for 48 hours under standard culture conditions."
        }
      },
      {
        step: 3,
        title: {
          uz: "MTT reagenti qo'shish va formazan hosil qilish",
          ru: "Внесение реагента MTT и образование формазана",
          en: "MTT reagent addition and formazan crystallization"
        },
        desc: {
          uz: "Har bir chuqurchaga 10 µl MTT eritmasi (5 mg/ml PBS da) qo'shiladi. 4 soat davomida 37°C da inkubatsiya qilinadi. Faol mitoxondriyalar MTT ni binafsharang erimaydigan formazan kristallariga aylantiradi.",
          ru: "Добавляют 10 мкл раствора MTT (5 мг/мл) в лунку, инкубируют 4 ч до образования кристаллов формазана.",
          en: "Add 10 µl MTT solution (5 mg/ml in PBS) to each well. Incubate 4h at 37°C. Living mitochondria metabolize yellow MTT into insoluble purple formazan crystals."
        }
      },
      {
        step: 4,
        title: {
          uz: "Formazanni eritish va 570 nm da o'qish",
          ru: "Растворение формазана и спектрофотометрия при 570 нм",
          en: "Solubilization and optical density readout at 570 nm"
        },
        desc: {
          uz: "Muhit olinadi, 100 µl toza DMSO qo'shiladi va 10 daqiqa chayqatiladi. BioTek Epoch 2 planshet riderida 570 nm to'lqin uzunligida (referens 630 nm) optik zichlik o'lchanadi va IC50 hisoblanadi.",
          ru: "Кристаллы растворяют в 100 мкл ДМСО, измеряют поглощение на спектрофотометре при 570 нм.",
          en: "Carefully aspirate supernatant, add 100 µl DMSO per well, shake for 10 min. Read absorbance at 570 nm (reference 630 nm) on Epoch 2 and compute IC50."
        }
      }
    ]
  },
  {
    id: "sop-hp-001",
    code: "SOP-HP-001",
    title: {
      uz: "HPLC-DAD Tizimida Bioaktiv Flavonoidlarni Standartlashtirish SOP Protokoli",
      ru: "СОП количественной стандартизации биоактивных флавоноидов на ВЭЖХ-DAD",
      en: "Standard Operating Procedure: HPLC-DAD Phytochemical Standardization"
    },
    category: "HPLC / Bioanalysis",
    version: "v2.4",
    author: "Tulyaganov Bobir Sobirovich, PhD",
    approvalDate: "2024-01-20",
    targetRoomCode: "LAB-HP-201",
    accentColor: "#782AEB",
    purpose: {
      uz: "O'simlik ekstraktlaridagi biomarkerlar (rutin, kvertsetin, luteolin) miqdorini ICH Q2(R1) talablariga binoan aniqlash.",
      ru: "Количественное определение рутина, кверцетина и лютеолина в растительных экстрактах.",
      en: "Quantitative assay of rutin, quercetin, and luteolin biomarkers according to ICH Q2(R1) standards."
    },
    equipmentNeeded: [
      "Agilent 1260 Infinity II HPLC-DAD",
      "Agilent ZORBAX Eclipse Plus C18 (4.6 x 250 mm, 5 µm)",
      "Mettler Toledo XSR205DU Analitik Tarozilar",
      "Elmasonic Ultratovush Degazatori"
    ],
    reagentsNeeded: [
      "HPLC-toza Asetonitril (MeCN, Sigma Chromasolv)",
      "Ultra-toza deionizatsiyalangan suv (Milli-Q, 18.2 MΩ·cm)",
      "Ortofosfat kislotasi (H3PO4, 85%, HPLC tozalikda)",
      "Sertifikatlangan standart namunalar (CRM Rutin, Quercetin > 98%)"
    ],
    steps: [
      {
        step: 1,
        title: {
          uz: "Ko'chma faza (Mobile Phase) tayyorlash va gazsizlantirish",
          ru: "Приготовление и дегазация подвижной фазы",
          en: "Mobile phase preparation and degassing"
        },
        desc: {
          uz: "Faza A: 0.1% li H3PO4 suvdagi eritmasi; Faza B: 100% MeCN. Ikkala erituvchi 0.22 µm neylon filtr orqali filtrlanadi va 20 daqiqa ultratovushli degazatorda gazsizlantiriladi.",
          ru: "Фаза А: 0.1% раствор H3PO4 в воде; Фаза Б: 100% ацетонитрил. Фильтрация через 0.22 мкм и дегазация 20 мин.",
          en: "Phase A: 0.1% aqueous phosphoric acid; Phase B: 100% HPLC-grade acetonitrile. Filter through 0.22 µm nylon membrane and sonicate 20 min."
        }
      },
      {
        step: 2,
        title: {
          uz: "Xromatografik gradient dasturi va parametrlarini o'rnatish",
          ru: "Настройка градиента и хроматографических параметров",
          en: "Chromatographic gradient parameters configuration"
        },
        desc: {
          uz: "Oqim tezligi: 1.0 ml/min; Kolonna harorati: 30°C; Inyeksiya hajmi: 10 µl; DAD to'lqin uzunligi: 280 nm va 360 nm. Gradient: 0-5 min: 15% B; 5-25 min: 15% dan 60% B gacha chiziqli gradient.",
          ru: "Скорость потока 1.0 мл/мин, t колонки 30°C, ввод 10 мкл, DAD детектор 280 и 360 нм. Градиент от 15% до 60% B за 25 мин.",
          en: "Flow rate: 1.0 ml/min; Column temp: 30°C; Injection volume: 10 µl; DAD detection at 280 nm & 360 nm. Gradient: 0-5 min 15% B; 5-25 min 15% -> 60% B linear."
        }
      },
      {
        step: 3,
        title: {
          uz: "Standart kalibratsiyalash va namuna kiritish",
          ru: "Калибровка стандартами и ввод образцов",
          en: "Calibration curves and sample injection sequence"
        },
        desc: {
          uz: "Standartlarning 5 ta konsentratsiyasi (5, 10, 25, 50, 100 µg/ml) kiritiladi. R2 > 0.999 bo'lishi ta'minlanadi. So'ngra tayyorlangan ekstrakt namunalari avtosampler orqali tahlil qilinadi.",
          ru: "Ввод 5 калибровочных стандартов (R2 > 0.999), затем образцы экстрактов через охлаждаемый автосамплер.",
          en: "Inject 5 calibration standards (5-100 µg/ml), confirming R2 > 0.999. Proceed with automated autosampler sequence of triplicate extract samples."
        }
      }
    ]
  }
];

