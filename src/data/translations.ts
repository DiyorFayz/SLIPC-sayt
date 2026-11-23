import { Language } from '@/types/laboratory';

export interface Translations {
  // Navigation Bar Links (Translated in 3 languages)
  navAbout: string;
  navProjects: string;
  navResearch: string;
  navCenters: string;
  navEducation: string;
  navNews: string;
  navStaff: string;
  searchButtonText: string;

  // Hero Section
  heroHeadline: string;
  heroMission: string;
  heroQuickLinksTitle: string;
  heroRoomsPassportSub: string;
  heroEquipmentSub: string;
  heroPublicationsSub: string;
  heroPassportSub: string;
  btnExploreRooms: string;
  btnEquipmentRegistry: string;
  btnPublications: string;
  btnHorizonPassport: string;

  // 1. About Us Section
  sectionAboutTag: string;
  sectionAboutTitle: string;
  sectionAboutSubtitle: string;
  aboutMissionTitle: string;
  aboutMissionText: string;
  aboutPillarsTitle: string;
  aboutPillar1Title: string;
  aboutPillar1Desc: string;
  aboutPillar2Title: string;
  aboutPillar2Desc: string;
  aboutPillar3Title: string;
  aboutPillar3Desc: string;
  aboutPillar4Title: string;
  aboutPillar4Desc: string;

  // License & Accreditation Subsection
  aboutLicenseTag: string;
  aboutLicenseTitle: string;
  aboutLicenseSubtitle: string;
  licenseCertName: string;
  licenseOrgName: string;
  licenseIssuer: string;
  licenseStandard: string;
  licenseStandardDesc: string;
  licenseRegNumber: string;
  licenseDate: string;
  licenseExpiry: string;
  licenseStatus: string;
  licenseStatusActive: string;
  licenseRecognition: string;
  licenseAddress: string;
  licenseViewFull: string;
  licenseDownload: string;
  licenseVerify: string;

  // GLP Certificate Subsection
  glpCertName: string;
  glpOrgName: string;
  glpIssuer: string;
  glpStandard: string;
  glpStandardDesc: string;
  glpRegNumber: string;
  glpDate: string;
  glpExpiry: string;
  glpInspection: string;
  glpDownloadPdf: string;
  glpDownloadJpg: string;
  glpPage1Label: string;
  glpPage2Label: string;
  glpContact: string;

  // Projects Section (2022-2026)
  projectsTag: string;
  projectsTitle: string;
  projectsSubtitle: string;
  projectsFilterAll: string;
  projectsSearchPlaceholder: string;
  projectsAuthorsLabel: string;
  projectsJournalLabel: string;
  projectsDatabaseLabel: string;
  projectsDoiButton: string;
  projectsNoResults: string;
  projectsStatsHeading: string;
  projectsStatsSubheading: string;
  projectsTotalBadge: string;
  projectsPeakBadge: string;
  projectsGrowthBadge: string;
  projectsIndexBadge: string;
  projectsConclusionHeading: string;
  projectsConclusionText: string;
  projectsListHeading: string;
  projectsOriginalTitleLabel: string;
  projectsYearSuffix: string;
  projectsTotalLabel: string;
  projectsPeakYearLabel: string;
  projectsGrowthLabel: string;
  projectsIndexLabel: string;
  projectsPeriodLabel: string;
  projectsShareHeading: string;
  projectsPeakTag: string;
  projectsArticlesLabel: string;

  // 2. Research Section
  sectionResearchTag: string;
  sectionResearchTitle: string;
  sectionResearchSubtitle: string;
  researchRoomsCountLabel: string;
  roomsShowcaseTitle: string;
  roomsShowcaseSubtitle: string;
  roomPassportBtn: string;
  viewDetails: string;

  // 3. Centers Section
  sectionCentersTag: string;
  sectionCentersTitle: string;
  sectionCentersSubtitle: string;
  centersTotalEquipment: string;
  equipmentRegistryTitle: string;
  equipmentRegistrySubtitle: string;
  searchEquipmentPlaceholder: string;
  allEquipmentCategories: string;
  tableHeaderDevice: string;
  tableHeaderRoom: string;
  tableHeaderSpecs: string;
  tableHeaderApplication: string;
  tableHeaderStatus: string;

  // 4. Education and Outreach Section
  sectionEducationTag: string;
  sectionEducationTitle: string;
  sectionEducationSubtitle: string;
  educationIntro: string;
  educationAudienceLabel: string;
  educationDurationLabel: string;

  // 5. News Section
  sectionNewsTag: string;
  sectionNewsTitle: string;
  sectionNewsSubtitle: string;
  newsReadMore: string;

  // 6. Staff Section
  sectionStaffTag: string;
  sectionStaffTitle: string;
  sectionStaffSubtitle: string;
  staffBadgeCount: string;
  staffResearchFocusLabel: string;
  staffOrcidLabel: string;

  // Publications & Link Hub
  publicationsTitle: string;
  publicationsSubtitle: string;
  viewDoi: string;
  abstractToggle: string;
  sopDirectoryTitle: string;
  sopDirectorySubtitle: string;
  viewSop: string;
  linksHubTitle: string;
  linksHubSubtitle: string;

  // Institutional Status / Badges / Footer
  institutionalTitle: string;
  affiliationBadge: string;
  laboratoryStatus: string;
  portalTagline: string;
  searchPlaceholder: string;
  searchShortcut: string;
  allCategories: string;
  roomsCount: string;
  protocolsCount: string;
  equipmentCount: string;
  internationalPartners: string;
  footerMissionStatement: string;
  footerAccreditation: string;
  footerRights: string;
  closeModal: string;

  // Modal Headings
  roomDetailsHeading: string;
  roomSpecifications: string;
  keyEquipmentHeading: string;
  methodologiesHeading: string;
  cellLinesHeading: string;
  directLinksHeading: string;
  headOfRoomLabel: string;
  locationLabel: string;
  areaLabel: string;
  cleanlinessLabel: string;
  temperatureLabel: string;
  humidityLabel: string;
  sopModalHeading: string;
  sopVersion: string;
  sopApprovedBy: string;
  sopEquipmentRequired: string;
  sopReagentsRequired: string;
  sopSteps: string;
  downloadPdf: string;
  searchFoundCount: string;
  noResults: string;
}

export const TRANSLATIONS: Record<Language, Translations> = {
  uz: {
    // Navigation
    navAbout: "Biz haqimizda",
    navProjects: "Loyihalar",
    navResearch: "Tadqiqotlar",
    navCenters: "Markazlar",
    navEducation: "Ta'lim va amaliyot",
    navNews: "Yangiliklar",
    navStaff: "Xodimlar",
    searchButtonText: "Qidiruv...",

    // Hero Section
    heroHeadline: "IFBIL Innovatsion farmatsevtik birikmalar ilmiy laboratoriyasi",
    heroMission: "Toshkent farmatsevtika instituti qoshidagi akademik ilmiy markaz",
    heroQuickLinksTitle: "Markaziy Ilmiy Havolalar va Tezkor Yo'nalishlar:",
    heroRoomsPassportSub: "5 ta ilmiy bo'lim pasporti",
    heroEquipmentSub: "Agilent, Shimadzu, Buchi",
    heroPublicationsSub: "Scopus Q1/Q2 & DOI",
    heroPassportSub: "Horizon Europe PIC",
    btnExploreRooms: "Laboratoriya Xonalari va Bo'limlari",
    btnEquipmentRegistry: "Ilmiy Uskunalar va Metodologiyalar Reestri",
    btnPublications: "Ilmiy Nashrlar (Scopus / WoS)",
    btnHorizonPassport: "Horizon Europe Hamkorlik Pasporti (PDF)",

    // 1. About Us Section
    sectionAboutTag: "LABORATORIYA HAQIDA",
    sectionAboutTitle: "Biz haqimizda",
    sectionAboutSubtitle: "Innovatsion farmatsevtik birikmalar yaratish va chuqur bioanalitik tahlillar ilmiy markazi",
    aboutMissionTitle: "Biz haqimizda",
    aboutMissionText: "Markazimiz zamonaviy eksperimental farmakologiya, hujayra biologiyasi, biokimyo va instrumental bioanalitika yo'nalishlarini yagona ilmiy ekotizimga birlashtirgan ko'p tarmoqli tadqiqot laboratoriyasidir.\n\nLaboratoriyaning asosiy ilmiy yo'nalishi — tabiiy va sintetik biologik faol moddalarning ta'sir mexanizmlarini, antioksidant hamda yallig'lanishga qarshi xususiyatlarini molekulyar va hujayraviy (in vitro) darajadan tortib, butun organizm (in vivo) darajasigacha tizimli o'rganishdan iborat. Fitokimyoviy ekstraksiya, YUSSX (HPLC) bioanalizi, biokimyoviy skrining va preklinik farmakologik bo'limlarning o'zaro integratsiyasi ilmiy tadqiqotlarni xalqaro GLP va bioetika standartlari asosida yuqori aniqlikda bajarish imkonini beradi.",
    aboutPillarsTitle: "Asosiy Ilmiy Yo'nalishlarimiz",
    aboutPillar1Title: "Preklinik Farmakologiya",
    aboutPillar1Desc: "Kemiruvchilarda o'tkir toksiklik (OECD 423), yallig'lanishga qarshi faollik va jismoniy chidamlilik modellarini o'rganish.",
    aboutPillar2Title: "In Vitro Hujayra Biologiyasi",
    aboutPillar2Desc: "BSL-2 toza xona muhitida MTT sitotoksiklik, apoptoz kaskadlari va saraton hujayralarida molekulyar tahlillar.",
    aboutPillar3Title: "HPLC Instrumental Bioanalitika",
    aboutPillar3Desc: "Agilent 1260 Infinity II DAD tizimida bioaktiv molekulalarni sifat va miqdoriy standartlashtirish (ICH Q2).",
    aboutPillar4Title: "Fitokimyoviy Texnologiyalar",
    aboutPillar4Desc: "Ultratovush ekstraksiyasi, past haroratli vakuum bug'latish va chuqur liofilizatsiya (-55°C) orqali ekstraktlar olish.",

    // License & Accreditation Subsection
    aboutLicenseTag: "DAVLAT AKKREDITATSIYASI VA LITSENZIYA",
    aboutLicenseTitle: "Akkreditatsiya to'g'risida guvohnoma va Litsenziya",
    aboutLicenseSubtitle: "Laboratoriya O'z DSt ISO/IEC 17025:2019 hamda O'zDSt 2762:2018 (GLP) standartlari bo'yicha rasmiy davlat akkreditatsiyasi va muvofiqlik sertifikatlariga ega",
    licenseCertName: "Akkreditatsiya to'g'risida guvohnoma",
    licenseOrgName: "Toshkent Farmatsevtika Instituti «Innovatsion farmatsevtik birikmalar ilmiy sinov laboratoriyasi»",
    licenseIssuer: "«O'zbekiston akkreditatsiya markazi» DM (O'ZAK)",
    licenseStandard: "O'z DSt ISO/IEC 17025:2019",
    licenseStandardDesc: "Sinov va kalibrlash laboratoriyalarining kompetentligiga qo'yiladigan umumiy talablar",
    licenseRegNumber: "O'ZAK.SL.0425",
    licenseDate: "29.12.2025 yil",
    licenseExpiry: "28.12.2030 yil (Amal qilish muddati 5 yil)",
    licenseStatus: "Holati",
    licenseStatusActive: "Faol va Tasdiqlangan",
    licenseRecognition: "ILAC-MRA xalqaro o'zaro tan olish bitimi doirasida",
    licenseAddress: "100015, Toshkent shahri, Mirobod tumani, Oybek ko'chasi, 45",
    licenseViewFull: "Kattalashtirib ko'rish",
    licenseDownload: "Guvohnomani yuklab olish (JPG)",
    licenseVerify: "akkred.uz orqali tekshirish",

    // GLP Certificate Subsection
    glpCertName: "GLP – Zarur Laboratoriya Amaliyoti Davlat Sertifikati",
    glpOrgName: "«Toshkent Farmatsevtika Instituti» davlat muassasasi",
    glpIssuer: "O'zbekiston Respublikasi SSV huzuridagi Farmatsevtika tarmog'ini rivojlantirish agentligi «Zarur amaliyotlar markazi» DM (GxP)",
    glpStandard: "O'zDSt 2762:2018 (GLP)",
    glpStandardDesc: "Zarur laboratoriya amaliyoti (Good Laboratory Practice - GLP) talablariga rioya etilishi bo'yicha farmatsevtik inspeksiya natijalariga asosan berilgan",
    glpRegNumber: "№ GLP – 02:2024 (Blank № 001147)",
    glpDate: "09.08.2024 yil",
    glpExpiry: "08.09.2027 yilgacha (3 yil)",
    glpInspection: "25-26.07.2024 va 05.09.2024 sanalarda o'tkazilgan",
    glpDownloadPdf: "GLP Sertifikatini yuklab olish (PDF)",
    glpDownloadJpg: "1-sahifani yuklab olish (JPG)",
    glpPage1Label: "1-sahifa (Asosiy)",
    glpPage2Label: "2-sahifa (Muddati va Imzo)",
    glpContact: "gxp.duk@ssv.uz | +99871 203-30-32",

    // Projects Section (2022-2026)
    projectsTag: "XALQARO ILMIY LOYIHALAR (2022–2026)",
    projectsTitle: "Ilmiy Loyihalar va Xalqaro Nashrlar",
    projectsSubtitle: "Innovatsion farmatsevtik birikmalar ilmiy laboratoriyasining Scopus va Web of Science xalqaro bazalarida indeksatsiya qilingan 22 ta ilmiy maqola va tadqiqot loyihalari",
    projectsFilterAll: "Barcha loyihalar",
    projectsSearchPlaceholder: "Loyiha nomi, muallif yoki jurnal bo'yicha qidiruv...",
    projectsAuthorsLabel: "Mualliflar jamoasi",
    projectsJournalLabel: "Chop etilgan nashr",
    projectsDatabaseLabel: "Ma'lumotlar bazasi",
    projectsDoiButton: "DOI orqali maqolani ochish",
    projectsNoResults: "Mos keluvchi ilmiy loyihalar topilmadi",
    projectsStatsHeading: "Yillar bo'yicha Dinamika va Statistika Xulosasi",
    projectsStatsSubheading: "2022–2026 yillarda xalqaro yuqori impakt-faktorli jurnallardagi ilmiy unumdorlik o'sishi tahlili",
    projectsTotalBadge: "22 ta Loyiha",
    projectsPeakBadge: "2025-yil (11 ta / 50%)",
    projectsGrowthBadge: "11 barobar o'sish",
    projectsIndexBadge: "100% Scopus / WoS",
    projectsConclusionHeading: "Ilmiy unumdorlik va xalqaro hamkorlik bo'yicha tahliliy xulosa",
    projectsConclusionText: "2022–2026-yillar oralig'ida Innovatsion farmatsevtik birikmalar ilmiy laboratoriyasi (IFBIL) tomonidan amalga oshirilgan 22 ta tadqiqot loyihasi xalqaro Scopus va Web of Science nufuzli ilmiy bazalarida to'liq indeksatsiyadan o'tdi.\n\nStatistika shuni ko'rsatadiki, 2022–2023-yillarda (mos ravishda 1 tadan nashr) shakllanish bosqichidan so'ng, laboratoriya 2024-yilda keskin sakrash qilib 5 ta, 2025-yilda esa rekord darajada 11 ta (jami loyihalarning 50% qismi) yuqori darajadagi maqolalarni chop etdi. 2026-yilning boshidayoq 4 ta yangi xalqaro tadqiqot nashr etildi.\n\nUshbu loyihalar onkologik kasalliklar terapiyasi, fitokimyoviy birikmalar (escin, glycyrrhetinic acid), nanofermentlar, pyezotibbiyot hamda instrumental YUSSX bioanalizi kabi strategik yo'nalishlarni qamrab olib, Xitoy, Italiya, Janubiy Koreya va boshqa yetakchi xalqaro ilmiy markazlar bilan chuqur kollaboratsiya natijasida yaratilgan.",
    projectsListHeading: "Barcha 22 ta Ilmiy Loyiha va Maqolalar Ro'yxati",
    projectsOriginalTitleLabel: "Asl xalqaro nomi",
    projectsYearSuffix: "-yil",
    projectsTotalLabel: "Jami loyihalar",
    projectsPeakYearLabel: "Cho'qqi yil",
    projectsGrowthLabel: "O'sish sur'ati",
    projectsIndexLabel: "Indeksatsiya",
    projectsPeriodLabel: "2022–2026 davrida",
    projectsShareHeading: "Yillar bo'yicha ilmiy nashrlar ulushi va taqsimoti",
    projectsPeakTag: "Eng yuqori unumdorlik",
    projectsArticlesLabel: "ta maqola",

    // 2. Research Section
    sectionResearchTag: "TADQIQOTLAR VA XONALAR",
    sectionResearchTitle: "Ilmiy Tadqiqotlar va Xonalar",
    sectionResearchSubtitle: "Har bir ilmiy xona o'zining xalqaro identifikatsiya kodi, toza xona klassifikatsiyasi va ixtisoslashgan metodologik apparaturasiga ega.",
    researchRoomsCountLabel: "Xonalar",
    roomsShowcaseTitle: "Laboratoriya Xonalari va Ilmiy Bo'limlari",
    roomsShowcaseSubtitle: "Har bir xona o'zining xalqaro identifikatsiya kodi, toza xona klassifikatsiyasi va ixtisoslashgan metodologik apparaturasiga ega.",
    roomPassportBtn: "Batafsil ma'lumot (Xona pasporti)",
    viewDetails: "Pasportni ko'rish",

    // 3. Centers Section
    sectionCentersTag: "ILMIY MARKAZLAR VA USKUNALAR",
    sectionCentersTitle: "Analitik Markazlar va Ilmiy Uskunalar Reestri",
    sectionCentersSubtitle: "Laboratoriyada mavjud bo'lgan yuqori aniqlikdagi analitik, spektrofotometrik va kultural qurilmalarning texnik pasportlari.",
    centersTotalEquipment: "Jami",
    equipmentRegistryTitle: "Ilmiy Uskunalar va Metodologiyalar Reestri",
    equipmentRegistrySubtitle: "Laboratoriyada mavjud bo'lgan yuqori aniqlikdagi analitik, spektrofotometrik va kultural qurilmalarning texnik pasportlari.",
    searchEquipmentPlaceholder: "Model, ishlab chiqaruvchi yoki metod bo'yicha filter...",
    allEquipmentCategories: "Barcha Uskunalar",
    tableHeaderDevice: "Uskuna va Model",
    tableHeaderRoom: "Joylashgan Xona",
    tableHeaderSpecs: "Asosiy Texnik Parametrlar",
    tableHeaderApplication: "Ilmiy Qo'llanilishi",
    tableHeaderStatus: "Holati",

    // 4. Education and Outreach Section
    sectionEducationTag: "TA'LIM VA AMALIYOT",
    sectionEducationTitle: "Ta'lim va Amaliyot",
    sectionEducationSubtitle: "Yosh olimlar, magistrantlar va doktorantlar uchun amaliy ilmiy dasturlar, seminarlar va treninglar",
    educationIntro: "SLIPC laboratoriyasi ilmiy kadrlar tayyorlash va zamonaviy bioanalitik metodologiyalarni yosh tadqiqotchilarga o'rgatish maqsadida muntazam amaliy kurslar va xalqaro seminarlarni tashkil etadi.",
    educationAudienceLabel: "Auditoriya:",
    educationDurationLabel: "Davomiyligi:",

    // 5. News Section
    sectionNewsTag: "LABORATORIYA YANGILIKLARI",
    sectionNewsTitle: "Yangiliklar",
    sectionNewsSubtitle: "Laboratoriyaning so'nggi ilmiy yutuqlari, xalqaro e'tiroflar va muhim voqealar xabarlari",
    newsReadMore: "Batafsil o'qish",

    // 6. Staff Section
    sectionStaffTag: "ILMIY KADRLAR VA OLIMLAR",
    sectionStaffTitle: "Ilmiy Xodimlar",
    sectionStaffSubtitle: "Laboratoriyaning yetakchi ilmiy xodimlari, tadqiqot guruhlari rahbarlari va mutaxassislar tarkibi",
    staffBadgeCount: "18 ta Mutaxassis va Xodimlar tarkibi",
    staffResearchFocusLabel: "Tadqiqot sohasi:",
    staffOrcidLabel: "ORCID:",

    // Publications & Link Hub
    publicationsTitle: "Tanlangan Ilmiy Nashrlar va Bibliometrika",
    publicationsSubtitle: "Laboratoriya xodimlarining yetakchi xalqaro jurnallarda (Scopus Q1/Q2, Web of Science) chop etilgan ilmiy maqolalari.",
    viewDoi: "DOI Havolasi",
    abstractToggle: "Annotatsiyani ko'rsatish",
    sopDirectoryTitle: "Standart Operatsion Protokollar (SOP)",
    sopDirectorySubtitle: "Laboratoriyada qat'iy amal qilinadigan va xalqaro GLP/ISO talablariga moslashtirilgan eksperimental protokollar.",
    viewSop: "SOP Protokolini O'qish",
    linksHubTitle: "Akademik Resurslar va Xalqaro Havolalar Hubi",
    linksHubSubtitle: "Ochiq fan tamoyillari (Open Science), xalqaro ilmiy repozitoriylar va rasmiy aloqa kanallari.",

    // Badges / Footer
    institutionalTitle: "Xalqaro Ilmiy Standartlar va GLP Qoidalari Asosida",
    affiliationBadge: "O'zbekiston Respublikasi Fanlar Akademiyasi Ilmiy Bo'linmasi",
    laboratoryStatus: "Faol Ilmiy Tadqiqot Rejimi (BSL-2 / ISO 14644)",
    portalTagline: "Ilmiy Axborot va Akademik Havolalar Markazi",
    searchPlaceholder: "Xona, uskunalar, SOP protokollar yoki bioanaliz metodlarini qidiring (masalan, YUSSX, MTT, IC50, Ziziphora)...",
    searchShortcut: "Qidirish: Ctrl + K",
    allCategories: "Barcha Bo'limlar",
    roomsCount: "5 ta Ilmiy Bo'lim",
    protocolsCount: "35+ Tasdiqlangan SOP",
    equipmentCount: "Yuqori Aniqlikdagi Uskunalar",
    internationalPartners: "Xalqaro Hamkorlik (Horizon/WoS)",
    footerMissionStatement: "Ushbu portal faqat akademik, ilmiy-tadqiqot va ma'rifiy maqsadlar uchun mo'ljallangan bo'lib, hech qanday tijorat xizmatlarini ko'rsatmaydi.",
    footerAccreditation: "Zamonaviy xalqaro ilmiy standartlar va ochiq fan tamoyillari asosida ishlab chiqilgan.",
    footerRights: "Barcha ilmiy ma'lumotlar va metodologiyalar mualliflik huquqi bilan himoyalangan.",
    closeModal: "Yopish",

    // Modals
    roomDetailsHeading: "Ilmiy Xona Pasporti va Spetsifikatsiyalari",
    roomSpecifications: "Operatsion Shartlar va Toza Xona Parametrlari",
    keyEquipmentHeading: "Asosiy Ilmiy Uskunalar",
    methodologiesHeading: "Ixtisoslashgan Eksperimental Metodologiyalar",
    cellLinesHeading: "O'rganiladigan Hujayra Liniyalari va Modellar",
    directLinksHeading: "Xonaga Tegishli Ilmiy Hujjatlar va Havolalar",
    headOfRoomLabel: "Xona Ilmiy Rahbari",
    locationLabel: "Joylashuv",
    areaLabel: "Xona Maydoni",
    cleanlinessLabel: "Tozalik Standarti",
    temperatureLabel: "Harorat Rejimi",
    humidityLabel: "Namlik Rejimi",
    sopModalHeading: "Standart Operatsion Protokol (SOP Pasporti)",
    sopVersion: "Versiya",
    sopApprovedBy: "Tasdiqlagan mutaxassis",
    sopEquipmentRequired: "Zarur bo'ladigan asbob-uskunalar",
    sopReagentsRequired: "Reaktivlar va sarf materiallari",
    sopSteps: "Eksperiment Ketma-ketligi (Protokol bosqichlari)",
    downloadPdf: "Protokol Pasportini Yuklab Olish (PDF Format)",
    searchFoundCount: "ta ilmiy natija topildi",
    noResults: "Qidiruv so'rovi bo'yicha ilmiy ma'lumot topilmadi."
  },
  ru: {
    // Navigation
    navAbout: "О нас",
    navProjects: "Проекты",
    navResearch: "Исследования",
    navCenters: "Центры",
    navEducation: "Образование и просвещение",
    navNews: "Новости",
    navStaff: "Сотрудники",
    searchButtonText: "Поиск...",

    // Hero Section
    heroHeadline: "SLIPC - Научная лаборатория инновационных фармацевтических соединений",
    heroMission: "Академический научный центр при Ташкентском фармацевтическом институте",
    heroQuickLinksTitle: "Центральные научные направления и быстрые ссылки:",
    heroRoomsPassportSub: "5 паспортов научных отделов",
    heroEquipmentSub: "Agilent, Shimadzu, Buchi",
    heroPublicationsSub: "Scopus Q1/Q2 & DOI",
    heroPassportSub: "Horizon Europe PIC",
    btnExploreRooms: "Лабораторные комнаты и отделы",
    btnEquipmentRegistry: "Реестр оборудования и методологий",
    btnPublications: "Научные публикации (Scopus / WoS)",
    btnHorizonPassport: "Паспорт партнерства Horizon Europe (PDF)",

    // 1. About Us Section
    sectionAboutTag: "О ЛАБОРАТОРИИ",
    sectionAboutTitle: "О нас",
    sectionAboutSubtitle: "Центр разработки инновационных фармацевтических соединений и глубокого биоанализа",
    aboutMissionTitle: "О лаборатории",
    aboutMissionText: "Наш центр представляет собой многопрофильную исследовательскую лабораторию, объединяющую современную экспериментальную фармакологию, клеточную биологию, биохимию и инструментальный биоанализ в единую научную экосистему.\n\nОсновное научное направление лаборатории — системное изучение механизмов действия, антиоксидантных и противовоспалительных свойств природных и синтетических биологически активных веществ от молекулярного и клеточного (in vitro) уровней до уровня целостного организма (in vivo). Взаимная интеграция фитохимической экстракции, биоанализа ВЭЖХ (HPLC), биохимического скрининга и доклинических фармакологических подразделений позволяет проводить научные исследования с высокой точностью на основе международных стандартов GLP и биоэтики.",
    aboutPillarsTitle: "Ключевые научные направления",
    aboutPillar1Title: "Доклиническая фармакология",
    aboutPillar1Desc: "Изучение острой токсичности (OECD 423), противовоспалительной кинетики и физической выносливости на лабораторных моделях.",
    aboutPillar2Title: "In Vitro клеточная биология",
    aboutPillar2Desc: "Культивирование клеток в условиях чистых зон BSL-2, анализ цитотоксичности MTT, апоптоз и молекулярные маркеры.",
    aboutPillar3Title: "Инструментальный биоанализ ВЭЖХ",
    aboutPillar3Desc: "Качественная и количественная стандартизация биоактивных молекул на Agilent 1260 Infinity II DAD по стандартам ICH Q2.",
    aboutPillar4Title: "Фитохимическая инженерия",
    aboutPillar4Desc: "Ультразвуковая экстракция, низкотемпературное вакуумное упаривание и глубокая сублимационная лиофилизация (-55°C).",

    // License & Accreditation Subsection
    aboutLicenseTag: "ГОСУДАРСТВЕННАЯ АККРЕДИТАЦИЯ И ЛИЦЕНЗИЯ",
    aboutLicenseTitle: "Свидетельство об аккредитации и Лицензия",
    aboutLicenseSubtitle: "Лаборатория имеет официальную государственную аккредитацию и сертификаты соответствия стандартам O'z DSt ISO/IEC 17025:2019 и O'zDSt 2762:2018 (GLP)",
    licenseCertName: "Свидетельство об аккредитации",
    licenseOrgName: "Ташкентский фармацевтический институт, Научно-испытательная лаборатория инновационных фармацевтических соединений",
    licenseIssuer: "ГУ «Центр аккредитации Узбекистана» (O'ZAK)",
    licenseStandard: "O'z DSt ISO/IEC 17025:2019",
    licenseStandardDesc: "Общие требования к компетентности испытательных и калибровочных лабораторий",
    licenseRegNumber: "O'ZAK.SL.0425",
    licenseDate: "29.12.2025 г.",
    licenseExpiry: "28.12.2030 г. (Срок действия: 5 лет)",
    licenseStatus: "Статус",
    licenseStatusActive: "Действующий / Подтвержден",
    licenseRecognition: "В рамках международного соглашения о взаимном признании ILAC-MRA",
    licenseAddress: "100015, г. Ташкент, Мирабадский район, ул. Ойбека, 45",
    licenseViewFull: "Увеличить просмотр",
    licenseDownload: "Скачать свидетельство (JPG)",
    licenseVerify: "Проверить на сайте akkred.uz",

    // GLP Certificate Subsection
    glpCertName: "Государственный сертификат GLP — Надлежащая лабораторная практика",
    glpOrgName: "ГУ «Ташкентский фармацевтический институт»",
    glpIssuer: "ГУ «Центр надлежащих практик» (GxP) при Агентстве по развитию фармацевтической отрасли Минздрава РУз",
    glpStandard: "O'zDSt 2762:2018 (GLP)",
    glpStandardDesc: "Выдан на основании результатов фармацевтической инспекции о соблюдении требований надлежащей лабораторной практики (Good Laboratory Practice - GLP)",
    glpRegNumber: "№ GLP – 02:2024 (Бланк № 001147)",
    glpDate: "09.08.2024 г.",
    glpExpiry: "до 08.09.2027 г. (Срок: 3 года)",
    glpInspection: "Проведена инспекция: 25-26.07.2024 и 05.09.2024",
    glpDownloadPdf: "Скачать сертификат GLP (PDF)",
    glpDownloadJpg: "Скачать стр. 1 (JPG)",
    glpPage1Label: "Страница 1 (Основная)",
    glpPage2Label: "Страница 2 (Срок и Подпись)",
    glpContact: "gxp.duk@ssv.uz | +99871 203-30-32",

    // Projects Section (2022-2026)
    projectsTag: "МЕЖДУНАРОДНЫЕ НАУЧНЫЕ ПРОЕКТЫ (2022–2026)",
    projectsTitle: "Научные проекты и международные публикации",
    projectsSubtitle: "22 научно-исследовательских проекта и статьи Научно-испытательной лаборатории инновационных фармацевтических соединений, индексированных в Scopus и Web of Science",
    projectsFilterAll: "Все проекты",
    projectsSearchPlaceholder: "Поиск по названию, авторам или журналу...",
    projectsAuthorsLabel: "Авторский коллектив",
    projectsJournalLabel: "Опубликованное издание",
    projectsDatabaseLabel: "База данных",
    projectsDoiButton: "Открыть статью по DOI",
    projectsNoResults: "Соответствующих научных проектов не найдено",
    projectsStatsHeading: "Динамика по годам и статистическое заключение",
    projectsStatsSubheading: "Анализ роста научной продуктивности в высокорейтинговых международных журналах за 2022–2026 годы",
    projectsTotalBadge: "22 проекта",
    projectsPeakBadge: "2025 год (11 / 50%)",
    projectsGrowthBadge: "11-кратный рост",
    projectsIndexBadge: "100% Scopus / WoS",
    projectsConclusionHeading: "Аналитическое заключение по научной продуктивности и международному сотрудничеству",
    projectsConclusionText: "За период 2022–2026 гг. научно-исследовательская лаборатория инновационных фармацевтических соединений реализовала 22 крупных проекта, опубликованных в ведущих мировых журналах баз Scopus и Web of Science.\n\nАнализ публикационной динамики демонстрирует экспоненциальный рост: от этапа запуска в 2022–2023 гг. (по 1 статье) до 5 публикаций в 2024 г. и рекордных 11 публикаций в 2025 г. (50% всего портфеля). На 2026 год уже зафиксировано 4 передовых исследования.\n\nПроекты охватывают терапию онкологических заболеваний, фитохимию биоактивных молекул, нанобиомедицину и ВЭЖХ-биоанализ в партнерстве с ведущими зарубежными центрами Китая, Италии, Южной Кореи и Бельгии.",
    projectsListHeading: "Реестр всех 22 научных проектов и публикаций",
    projectsOriginalTitleLabel: "Оригинальное название",
    projectsYearSuffix: " год",
    projectsTotalLabel: "Всего проектов",
    projectsPeakYearLabel: "Пиковый год",
    projectsGrowthLabel: "Темп роста",
    projectsIndexLabel: "Индексация",
    projectsPeriodLabel: "За период 2022–2026 гг.",
    projectsShareHeading: "Распределение и доля публикаций по годам",
    projectsPeakTag: "Рекордная продуктивность",
    projectsArticlesLabel: "статей",

    // 2. Research Section
    sectionResearchTag: "ИССЛЕДОВАНИЯ И КОМНАТЫ",
    sectionResearchTitle: "Научные исследования и лаборатории",
    sectionResearchSubtitle: "Каждая комната имеет собственный международный идентификационный код, статус чистой зоны и специализированное оборудование.",
    researchRoomsCountLabel: "Комнаты",
    roomsShowcaseTitle: "Научные комнаты и лаборатории",
    roomsShowcaseSubtitle: "Каждая комната имеет собственный международный идентификационный код, статус чистой зоны и специализированное оборудование.",
    roomPassportBtn: "Подробная информация (Паспорт комнаты)",
    viewDetails: "Смотреть паспорт",

    // 3. Centers Section
    sectionCentersTag: "НАУЧНЫЕ ЦЕНТРЫ И ОБОРУДОВАНИЕ",
    sectionCentersTitle: "Реестр исследовательских центров и приборов",
    sectionCentersSubtitle: "Технические паспорта высокоточных аналитических, спектрофотометрических и культуральных приборов лаборатории.",
    centersTotalEquipment: "Всего",
    equipmentRegistryTitle: "Реестр научного оборудования и методик",
    equipmentRegistrySubtitle: "Технические паспорта высокоточных аналитических, спектрофотометрических и культуральных приборов лаборатории.",
    searchEquipmentPlaceholder: "Фильтр по модели, производителю или методу...",
    allEquipmentCategories: "Все приборы",
    tableHeaderDevice: "Прибор и модель",
    tableHeaderRoom: "Комната",
    tableHeaderSpecs: "Технические параметры",
    tableHeaderApplication: "Научное применение",
    tableHeaderStatus: "Статус",

    // 4. Education and Outreach Section
    sectionEducationTag: "ОБРАЗОВАНИЕ И ПРОСВЕЩЕНИЕ",
    sectionEducationTitle: "Образование и просвещение",
    sectionEducationSubtitle: "Практические программы, СОП-тренинги и академические стажировки для молодых ученых и аспирантов",
    educationIntro: "Лаборатория SLIPC проводит регулярные практические курсы и международные семинары по современным биоаналитическим методам для подготовки квалифицированных научных кадров.",
    educationAudienceLabel: "Аудитория:",
    educationDurationLabel: "Длительность:",

    // 5. News Section
    sectionNewsTag: "НОВОСТИ ЛАБОРАТОРИИ",
    sectionNewsTitle: "Новости",
    sectionNewsSubtitle: "Последние научные публикации, международные соглашения и новости приборной базы лаборатории",
    newsReadMore: "Подробнее",

    // 6. Staff Section
    sectionStaffTag: "НАУЧНЫЕ КАДРЫ И УЧЕНЫЕ",
    sectionStaffTitle: "Научные сотрудники",
    sectionStaffSubtitle: "Ведущие научные сотрудники лаборатории, руководители исследовательских групп и ученые",
    staffBadgeCount: "18 Специалистов и научных сотрудников",
    staffResearchFocusLabel: "Область исследований:",
    staffOrcidLabel: "ORCID:",

    // Publications & Link Hub
    publicationsTitle: "Избранные научные публикации и библиометрия",
    publicationsSubtitle: "Статьи сотрудников лаборатории, опубликованные в ведущих международных научных журналах (Scopus Q1/Q2, Web of Science).",
    viewDoi: "Ссылка DOI",
    abstractToggle: "Показать аннотацию",
    sopDirectoryTitle: "Стандартные операционные процедуры (СОП)",
    sopDirectorySubtitle: "Экспериментальные протоколы лаборатории, адаптированные под международные стандарты GLP и ISO.",
    viewSop: "Читать протокол СОП",
    linksHubTitle: "Хаб академических ресурсов и международных связей",
    linksHubSubtitle: "Принципы открытой науки (Open Science), репозитории данных и официальные научные профили.",

    // Badges / Footer
    institutionalTitle: "В соответствии с международными стандартами GLP и ISO",
    affiliationBadge: "Научное подразделение Академии Наук Республики Узбекистан",
    laboratoryStatus: "Режим активных научных исследований (BSL-2 / ISO 14644)",
    portalTagline: "Центр научной информации и академических связей",
    searchPlaceholder: "Поиск комнат, приборов, протоколов СОП или биоаналитических методов...",
    searchShortcut: "Поиск: Ctrl + K",
    allCategories: "Все отделы",
    roomsCount: "5 Научных отделов",
    protocolsCount: "35+ Валидированных СОП",
    equipmentCount: "Высокоточное оборудование",
    internationalPartners: "Международные гранты (Horizon/WoS)",
    footerMissionStatement: "Данный портал создан исключительно в академических, исследовательских и просветительских целях и не содержит коммерческих предложений.",
    footerAccreditation: "Разработано в соответствии с международными стандартами и принципами открытой науки.",
    footerRights: "Все научные материалы защищены авторским правом.",
    closeModal: "Закрыть",

    // Modals
    roomDetailsHeading: "Паспорт научной комнаты и спецификации",
    roomSpecifications: "Параметры чистой зоны и условия эксплуатации",
    keyEquipmentHeading: "Основное научное оборудование",
    methodologiesHeading: "Специализированные экспериментальные методики",
    cellLinesHeading: "Исследуемые клеточные линии и модели",
    directLinksHeading: "Научные документы и связанные ссылки",
    headOfRoomLabel: "Научный руководитель комнаты",
    locationLabel: "Расположение",
    areaLabel: "Площадь",
    cleanlinessLabel: "Класс чистоты",
    temperatureLabel: "Температурный режим",
    humidityLabel: "Влажность",
    sopModalHeading: "Стандартная операционная процедура (СОП)",
    sopVersion: "Версия",
    sopApprovedBy: "Утвердил",
    sopEquipmentRequired: "Необходимое оборудование",
    sopReagentsRequired: "Реактивы и расходные материалы",
    sopSteps: "Последовательность эксперимента (Шаги протокола)",
    downloadPdf: "Скачать паспорт протокола (PDF)",
    searchFoundCount: "найдено научных результатов",
    noResults: "По вашему запросу научных данных не найдено."
  },
  en: {
    // Navigation
    navAbout: "About Us",
    navProjects: "Projects",
    navResearch: "Research",
    navCenters: "Centers",
    navEducation: "Education and Outreach",
    navNews: "News",
    navStaff: "Staff",
    searchButtonText: "Search...",

    // Hero Section
    heroHeadline: "SLIPC - Scientific Laboratory of Innovative Pharmaceutical Compounds",
    heroMission: "Academic research center under the Tashkent Pharmaceutical Institute",
    heroQuickLinksTitle: "Central Scientific Portals & Quick Navigation:",
    heroRoomsPassportSub: "5 Department Passports",
    heroEquipmentSub: "Agilent, Shimadzu, Buchi",
    heroPublicationsSub: "Scopus Q1/Q2 & DOI",
    heroPassportSub: "Horizon Europe PIC",
    btnExploreRooms: "Laboratory Rooms & Units",
    btnEquipmentRegistry: "Equipment & Methodology Registry",
    btnPublications: "Scientific Publications (Scopus / WoS)",
    btnHorizonPassport: "Horizon Europe Capability Statement (PDF)",

    // 1. About Us Section
    sectionAboutTag: "ABOUT THE LABORATORY",
    sectionAboutTitle: "About Us",
    sectionAboutSubtitle: "Dedicated to innovative pharmaceutical compound discovery and precision bioanalytical science",
    aboutMissionTitle: "About the Laboratory",
    aboutMissionText: "Our center is a multidisciplinary research laboratory integrating modern experimental pharmacology, cellular biology, biochemistry, and instrumental bioanalysis into a unified scientific ecosystem.\n\nThe core scientific direction of the laboratory is the systematic investigation of action mechanisms, antioxidant, and anti-inflammatory properties of natural and synthetic bioactive compounds from the molecular and cellular (in vitro) level up to the whole-organism (in vivo) level. The seamless integration of phytochemical extraction, HPLC bioanalysis, biochemical screening, and preclinical pharmacology divisions enables high-precision research in strict accordance with international GLP and bioethics standards.",
    aboutPillarsTitle: "Core Scientific Pillars",
    aboutPillar1Title: "Preclinical Pharmacology",
    aboutPillar1Desc: "In vivo acute toxicity (OECD 423), anti-inflammatory kinetics, and endurance ergometry in rodent models.",
    aboutPillar2Title: "In Vitro Cell Biology",
    aboutPillar2Desc: "Certified BSL-2 cell culture, MTT cytotoxicity assays, apoptosis pathways, and tumor spheroid models.",
    aboutPillar3Title: "HPLC Bioanalysis",
    aboutPillar3Desc: "RP-HPLC-DAD qualitative fingerprinting and quantitative bioanalytical method validation per ICH Q2(R1).",
    aboutPillar4Title: "Phytochemical Engineering",
    aboutPillar4Desc: "Ultrasound-assisted extraction, low-temperature vacuum evaporation, and deep sublimation lyophilization (-55°C).",

    // License & Accreditation Subsection
    aboutLicenseTag: "STATE ACCREDITATION & LICENSE",
    aboutLicenseTitle: "Accreditation Certificate & License",
    aboutLicenseSubtitle: "The laboratory holds official state accreditation and compliance certificates under O'z DSt ISO/IEC 17025:2019 and O'zDSt 2762:2018 (GLP) standards",
    licenseCertName: "Certificate of Accreditation",
    licenseOrgName: "Tashkent Pharmaceutical Institute, Scientific Testing Laboratory for Innovative Pharmaceutical Compounds",
    licenseIssuer: "State Enterprise 'Accreditation Center of Uzbekistan' (O'ZAK)",
    licenseStandard: "O'z DSt ISO/IEC 17025:2019",
    licenseStandardDesc: "General requirements for the competence of testing and calibration laboratories",
    licenseRegNumber: "O'ZAK.SL.0425",
    licenseDate: "December 29, 2025",
    licenseExpiry: "December 28, 2030 (Valid for 5 years)",
    licenseStatus: "Status",
    licenseStatusActive: "Active & Verified",
    licenseRecognition: "Recognized under ILAC-MRA mutual recognition arrangement",
    licenseAddress: "45, Oybek street, Mirobod district, Tashkent, 100015",
    licenseViewFull: "View Full Size",
    licenseDownload: "Download Certificate (JPG)",
    licenseVerify: "Verify at akkred.uz",

    // GLP Certificate Subsection
    glpCertName: "State Certificate of GLP — Good Laboratory Practice",
    glpOrgName: "Tashkent Pharmaceutical Institute State Enterprise",
    glpIssuer: "State Enterprise 'Center for Good Practices' (GxP) under the Pharmaceutical Industry Development Agency of the Ministry of Health of Uzbekistan",
    glpStandard: "O'zDSt 2762:2018 (GLP)",
    glpStandardDesc: "Issued based on pharmaceutical inspection results confirming compliance with Good Laboratory Practice (GLP) requirements",
    glpRegNumber: "№ GLP – 02:2024 (Form № 001147)",
    glpDate: "August 09, 2024",
    glpExpiry: "Until September 08, 2027 (3 years)",
    glpInspection: "Inspections conducted: 25-26.07.2024 and 05.09.2024",
    glpDownloadPdf: "Download GLP Certificate (PDF)",
    glpDownloadJpg: "Download Page 1 (JPG)",
    glpPage1Label: "Page 1 (Main)",
    glpPage2Label: "Page 2 (Validity & Signature)",
    glpContact: "gxp.duk@ssv.uz | +99871 203-30-32",

    // Projects Section (2022-2026)
    projectsTag: "INTERNATIONAL RESEARCH PROJECTS (2022–2026)",
    projectsTitle: "Research Projects & International Publications",
    projectsSubtitle: "22 peer-reviewed research projects and publications by the Scientific Laboratory of Innovative Pharmaceutical Compounds indexed in Scopus and Web of Science",
    projectsFilterAll: "All Projects",
    projectsSearchPlaceholder: "Search by title, author, or journal...",
    projectsAuthorsLabel: "Authors",
    projectsJournalLabel: "Journal / Publication",
    projectsDatabaseLabel: "Database",
    projectsDoiButton: "Open Article via DOI",
    projectsNoResults: "No matching research projects found",
    projectsStatsHeading: "Annual Dynamics & Statistical Summary",
    projectsStatsSubheading: "Analysis of scientific productivity and high-impact international journal output over 2022–2026",
    projectsTotalBadge: "22 Projects",
    projectsPeakBadge: "Peak: 2025 (11 / 50%)",
    projectsGrowthBadge: "11x Growth Surge",
    projectsIndexBadge: "100% Scopus / WoS",
    projectsConclusionHeading: "Analytical Conclusion on Scientific Output & Global Collaboration",
    projectsConclusionText: "Between 2022 and 2026, the Scientific Laboratory of Innovative Pharmaceutical Compounds (SLIPC) conducted 22 landmark research projects indexed in prestigious Scopus and Web of Science international databases.\n\nAnnual trend analysis reveals rapid exponential scaling: after foundational outputs in 2022–2023 (1 paper each), productivity accelerated to 5 papers in 2024, surging to an all-time high of 11 papers in 2025 (representing 50% of total output), with 4 major contributions already appearing in 2026.\n\nResearch covers cancer targeted therapies, escin and glycyrrhetinic acid phytopharmacology, piezoelectric nanocatalytic systems, and high-precision HPLC-MS bioanalysis in strategic collaboration with premier research institutions across China, Italy, South Korea, and Europe.",
    projectsListHeading: "Registry of All 22 Research Projects & Publications",
    projectsOriginalTitleLabel: "Original Indexed Title",
    projectsYearSuffix: "",
    projectsTotalLabel: "Total Projects",
    projectsPeakYearLabel: "Peak Year",
    projectsGrowthLabel: "Growth Surge",
    projectsIndexLabel: "Index Coverage",
    projectsPeriodLabel: "Over 2022–2026 Period",
    projectsShareHeading: "Annual Distribution & Percentage Share",
    projectsPeakTag: "Peak Record Output",
    projectsArticlesLabel: "papers",

    // 2. Research Section
    sectionResearchTag: "RESEARCH & LABORATORIES",
    sectionResearchTitle: "Research & Scientific Units",
    sectionResearchSubtitle: "Each facility features its own international code, certified cleanroom parameters, and dedicated analytical instrumentation.",
    researchRoomsCountLabel: "Rooms",
    roomsShowcaseTitle: "Specialized Laboratory Rooms & Units",
    roomsShowcaseSubtitle: "Each facility features its own international code, certified cleanroom parameters, and dedicated analytical instrumentation.",
    roomPassportBtn: "Detailed Specifications (Room Passport)",
    viewDetails: "View Passport",

    // 3. Centers Section
    sectionCentersTag: "CENTERS & ANALYTICAL INSTRUMENTS",
    sectionCentersTitle: "Analytical Centers & Equipment Registry",
    sectionCentersSubtitle: "Comprehensive technical dossiers for the laboratory's chromatographic, spectrophotometric, and cell culture instrumentation.",
    centersTotalEquipment: "Total",
    equipmentRegistryTitle: "Analytical Equipment & Methodology Registry",
    equipmentRegistrySubtitle: "Comprehensive technical dossiers for the laboratory's chromatographic, spectrophotometric, and cell culture instrumentation.",
    searchEquipmentPlaceholder: "Filter by model, manufacturer, or application...",
    allEquipmentCategories: "All Instruments",
    tableHeaderDevice: "Instrument & Model",
    tableHeaderRoom: "Host Room",
    tableHeaderSpecs: "Key Technical Specs",
    tableHeaderApplication: "Scientific Application",
    tableHeaderStatus: "Status",

    // 4. Education and Outreach Section
    sectionEducationTag: "EDUCATION & OUTREACH",
    sectionEducationTitle: "Education and Outreach",
    sectionEducationSubtitle: "Academic fellowships, hands-on SOP workshops, and open science training for graduate scholars",
    educationIntro: "SLIPC actively bridges academic research and education by offering structured laboratory internships, bioanalytical masterclasses, and open-access SOP methodology courses.",
    educationAudienceLabel: "Target Audience:",
    educationDurationLabel: "Duration:",

    // 5. News Section
    sectionNewsTag: "LABORATORY NEWS",
    sectionNewsTitle: "News",
    sectionNewsSubtitle: "Latest peer-reviewed breakthroughs, consortium milestones, and institutional equipment updates",
    newsReadMore: "Read full bulletin",

    // 6. Staff Section
    sectionStaffTag: "SCIENTIFIC STAFF & FACULTY",
    sectionStaffTitle: "Staff & Faculty",
    sectionStaffSubtitle: "Principal investigators, lead research scientists, and specialized laboratory personnel",
    staffBadgeCount: "18 Scientific Faculty & Lab Personnel",
    staffResearchFocusLabel: "Research focus:",
    staffOrcidLabel: "ORCID:",

    // Publications & Link Hub
    publicationsTitle: "Selected Publications & Bibliometrics",
    publicationsSubtitle: "Peer-reviewed research articles authored by laboratory scientists in leading journals (Scopus Q1/Q2, Web of Science).",
    viewDoi: "Direct DOI Link",
    abstractToggle: "Toggle Abstract",
    sopDirectoryTitle: "Standard Operating Procedures (SOP)",
    sopDirectorySubtitle: "Rigorous laboratory protocols adhering to international GLP and ISO 14644 quality standards.",
    viewSop: "Read SOP Protocol",
    linksHubTitle: "Academic Resources & International Link Hub",
    linksHubSubtitle: "Open science frameworks, public research repositories, and institutional points of contact.",

    // Badges / Footer
    institutionalTitle: "Aligned with International GLP & ISO Scientific Standards",
    affiliationBadge: "Academy of Sciences of the Republic of Uzbekistan Research Division",
    laboratoryStatus: "Active Research Operation (BSL-2 / ISO 14644)",
    portalTagline: "Scientific Information & Academic Link Hub",
    searchPlaceholder: "Search laboratory rooms, analytical equipment, SOP protocols, or methodologies...",
    searchShortcut: "Search: Ctrl + K",
    allCategories: "All Units",
    roomsCount: "5 Scientific Departments",
    protocolsCount: "35+ Validated SOPs",
    equipmentCount: "High-Precision Instruments",
    internationalPartners: "International Consortia (Horizon/WoS)",
    footerMissionStatement: "This portal is strictly dedicated to non-commercial academic research, open scientific exchange, and educational purposes.",
    footerAccreditation: "Architected in accordance with international scientific standards and open science frameworks.",
    footerRights: "All scientific data and methodologies are protected by institutional copyright.",
    closeModal: "Close",

    // Modals
    roomDetailsHeading: "Scientific Room Passport & Technical Dossier",
    roomSpecifications: "Operational & Cleanroom Environmental Parameters",
    keyEquipmentHeading: "Core Scientific Instrumentation",
    methodologiesHeading: "Specialized Experimental Methodologies",
    cellLinesHeading: "Validated Cell Lines & Animal Models",
    directLinksHeading: "Associated Protocols & Publications",
    headOfRoomLabel: "Lead Investigator",
    locationLabel: "Location",
    areaLabel: "Floor Area",
    cleanlinessLabel: "Cleanliness Rating",
    temperatureLabel: "Temperature Range",
    humidityLabel: "Relative Humidity",
    sopModalHeading: "Standard Operating Procedure (SOP Dossier)",
    sopVersion: "Version",
    sopApprovedBy: "Approved by",
    sopEquipmentRequired: "Required Instrumentation",
    sopReagentsRequired: "Reagents & Materials",
    sopSteps: "Experimental Protocol Execution Sequence",
    downloadPdf: "Download Protocol Dossier (PDF)",
    searchFoundCount: "scientific records found",
    noResults: "No scientific records matching your query were found."
  }
};
