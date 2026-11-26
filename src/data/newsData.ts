import { Language } from '@/types/laboratory';
import { supabase } from '@/lib/supabase';

export interface NewsItem {
  id: string;
  date: string;
  category: Record<Language, string>;
  title: Record<Language, string>;
  summary: Record<Language, string>;
  link: string;
  image?: string;
}

export const INITIAL_NEWS_ITEMS: NewsItem[] = [
  {
    id: "news-1",
    date: "2024-10-18",
    category: {
      uz: "Ilmiy Nashr",
      ru: "Научная публикация",
      en: "Scientific Publication",
    },
    title: {
      uz: "Ziziphora pedicellata ekstraktlari bo'yicha tadqiqot nufuzli Q1 jurnalida chop etildi",
      ru: "Исследование экстрактов Ziziphora pedicellata опубликовано в журнале квартиля Q1",
      en: "Ziziphora pedicellata cytotoxicity study published in premier Q1 Elsevier journal",
    },
    summary: {
      uz: "Laboratoriyamiz xodimlari tomonidan olib borilgan in vitro sitotoksiklik va apoptoz kaskadlari tahlili Journal of Ethnopharmacology jurnalida e'lon qilindi.",
      ru: "Результаты анализа цитотоксичности и апоптоза опубликованы в Journal of Ethnopharmacology.",
      en: "Collaborative research on apoptotic cascades in HepG2 cells published in Journal of Ethnopharmacology.",
    },
    link: "https://doi.org/10.1016/j.jep.2023.116890",
  },
  {
    id: "news-2",
    date: "2024-09-05",
    category: {
      uz: "Xalqaro Hamkorlik",
      ru: "Международное сотрудничество",
      en: "International Consortium",
    },
    title: {
      uz: "Horizon Europe konsortsiumiga rasmiy hamkor sifatida qabul qilindi",
      ru: "SLIPC вошла в консорциум исследовательской программы Horizon Europe",
      en: "SLIPC onboarded to European Horizon Europe Research Consortium",
    },
    summary: {
      uz: "Yevropa Ittifoqining dori vositalarini tadqiq etish yo'nalishidagi loyihasida laboratoriyamiz PIC 912048192 raqami bilan tasdiqlandi.",
      ru: "Лаборатория утверждена партнером европейского консорциума под идентификатором PIC 912048192.",
      en: "Validated as partner entity under PIC 912048192 for preclinical pharmacology work packages.",
    },
    link: "https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/how-to-participate/participant-register",
  },
  {
    id: "news-3",
    date: "2024-06-22",
    category: {
      uz: "Infratuzilma",
      ru: "Инфраструктура",
      en: "Infrastructure",
    },
    title: {
      uz: "Yangi Agilent 1260 Infinity II xromatografik tizimi muvaffaqiyatli metrologik kalibratsiyadan o'tdi",
      ru: "Система ВЭЖХ Agilent 1260 Infinity II прошла государственную метрологическую калибровку",
      en: "Agilent 1260 Infinity II HPLC System calibrated and standardized for bioequivalence",
    },
    summary: {
      uz: "DAD-detektorli xromatograf farmakokinetik va bioanalitik tadqiqotlar uchun ICH Q2(R1) talablariga to'liq mos holatga keltirildi.",
      ru: "Хроматограф с ДФ-детектором введен в эксплуатацию по протоколам валидации ICH Q2(R1).",
      en: "High-precision quaternary HPLC module with DAD calibrated per ICH Q2(R1) validation protocols.",
    },
    link: "https://www.agilent.com/en/products/liquid-chromatography/hplc-systems/1260-infinity-ii-lc-system",
  },
];

export const LOCAL_STORAGE_NEWS_KEY = 'slipc_laboratory_news_data';

export async function fetchAllNews(): Promise<NewsItem[]> {
  try {
    // 1. Try Supabase 'news' table
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .order('date', { ascending: false });

    if (!error && data && data.length > 0) {
      if (typeof window !== 'undefined') {
        localStorage.setItem(LOCAL_STORAGE_NEWS_KEY, JSON.stringify(data));
      }
      return data as NewsItem[];
    }
  } catch (err) {
    console.warn('Supabase fetch failed:', err);
  }

  // 2. Fallback to localStorage if modified locally
  if (typeof window !== 'undefined') {
    const cached = localStorage.getItem(LOCAL_STORAGE_NEWS_KEY);
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      } catch (e) {}
    }
  }

  return INITIAL_NEWS_ITEMS;
}

export async function saveNewsItem(item: NewsItem): Promise<boolean> {
  let supabaseSuccess = false;

  try {
    const { error } = await supabase.from('news').upsert(item);
    if (!error) supabaseSuccess = true;
  } catch (err) {
    console.warn('Supabase save failed:', err);
  }

  // Always update localStorage cache
  if (typeof window !== 'undefined') {
    const current = await fetchAllNews();
    const idx = current.findIndex((n) => n.id === item.id);
    let updated: NewsItem[];
    if (idx >= 0) {
      updated = [...current];
      updated[idx] = item;
    } else {
      updated = [item, ...current];
    }
    localStorage.setItem(LOCAL_STORAGE_NEWS_KEY, JSON.stringify(updated));
    return true;
  }

  return supabaseSuccess;
}

export async function deleteNewsItem(id: string): Promise<boolean> {
  try {
    await supabase.from('news').delete().eq('id', id);
  } catch (err) {
    console.warn('Supabase delete failed:', err);
  }

  if (typeof window !== 'undefined') {
    const current = await fetchAllNews();
    const updated = current.filter((n) => n.id !== id);
    localStorage.setItem(LOCAL_STORAGE_NEWS_KEY, JSON.stringify(updated));
    return true;
  }

  return false;
}
