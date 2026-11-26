'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { NewsItem, fetchAllNews, saveNewsItem, deleteNewsItem, INITIAL_NEWS_ITEMS } from '@/data/newsData';
import {
  Lock,
  Mail,
  Key,
  LogOut,
  Plus,
  Pencil,
  Trash2,
  ExternalLink,
  Calendar,
  CheckCircle2,
  AlertCircle,
  ArrowLeft,
  RefreshCw,
  Globe,
  Newspaper,
  ShieldCheck,
  Eye,
  Upload,
  Image as ImageIcon,
  X,
  FileImage,
} from 'lucide-react';

const ADMIN_STORAGE_KEY = 'slipc_admin_session';
const MASTER_PASSWORD = 'Diyorfayz2003';

export default function AdminNewsPage() {
  const [session, setSession] = useState<{ user: { email: string } } | null>(null);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [authError, setAuthError] = useState<string | null>(null);
  const [authSuccess, setAuthSuccess] = useState<string | null>(null);

  // Form states for login
  const [loginInput, setLoginInput] = useState('');
  const [password, setPassword] = useState('');
  const [submittingAuth, setSubmittingAuth] = useState(false);

  // News management states
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [loadingNews, setLoadingNews] = useState(true);
  const [actionSuccess, setActionSuccess] = useState<string | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);

  // Edit / Create modal state
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<NewsItem | null>(null);
  const [activeLangTab, setActiveLangTab] = useState<'uz' | 'ru' | 'en'>('uz');
  const [savingItem, setSavingItem] = useState(false);

  // Image upload handling
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageUploading, setImageUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form fields for editing
  const [formData, setFormData] = useState<NewsItem>({
    id: '',
    date: new Date().toISOString().split('T')[0],
    category: { uz: 'Ilmiy Nashr', ru: 'Научная публикация', en: 'Scientific Publication' },
    title: { uz: '', ru: '', en: '' },
    summary: { uz: '', ru: '', en: '' },
    link: '',
    image: '',
  });

  // Check auth on load
  useEffect(() => {
    async function checkAuth() {
      try {
        // 1. Check local admin session
        if (typeof window !== 'undefined') {
          const cached = localStorage.getItem(ADMIN_STORAGE_KEY);
          if (cached) {
            const parsed = JSON.parse(cached);
            if (parsed && parsed.email) {
              setSession({ user: { email: parsed.email } });
              setLoadingAuth(false);
              return;
            }
          }
        }

        // 2. Check Supabase session
        const { data: { session: supaSession } } = await supabase.auth.getSession();
        if (supaSession?.user) {
          setSession({ user: { email: supaSession.user.email || 'admin@slipc.uz' } });
        }
      } catch (err) {
        console.error('Session check failed:', err);
      } finally {
        setLoadingAuth(false);
      }
    }

    checkAuth();
  }, []);

  // Fetch news when authenticated
  useEffect(() => {
    if (session) {
      loadNews();
    }
  }, [session]);

  async function loadNews() {
    setLoadingNews(true);
    try {
      const items = await fetchAllNews();
      setNewsList(items);
    } catch (err) {
      console.error('Error fetching news:', err);
      setActionError("Yangiliklarni yuklashda xatolik yuz berdi.");
    } finally {
      setLoadingNews(false);
    }
  }

  // Handle Login with Master Password & Supabase
  async function handleAuthSubmit(e: React.FormEvent) {
    e.preventDefault();
    setAuthError(null);
    setAuthSuccess(null);
    setSubmittingAuth(true);

    const enteredLogin = loginInput.trim() || 'diyor@slipc.uz';
    const enteredPassword = password.trim();

    try {
      // Check Master Password: Diyorfayz2003
      if (enteredPassword === MASTER_PASSWORD) {
        const userObj = { email: enteredLogin };
        localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(userObj));
        setSession({ user: userObj });
        setAuthSuccess("Muvaffaqiyatli kirdingiz!");
        setSubmittingAuth(false);
        return;
      }

      // Fallback: Check Supabase Auth
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: enteredLogin,
          password: enteredPassword,
        });

        if (!error && data.session) {
          localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify({ email: data.session.user.email }));
          setSession({ user: { email: data.session.user.email || enteredLogin } });
          setAuthSuccess("Muvaffaqiyatli kirdingiz!");
          setSubmittingAuth(false);
          return;
        }
      } catch (supaErr) {
        // Ignored, will trigger bad password message
      }

      setAuthError("Parol noto'g'ri kiritildi. Iltimos, qaytadan tekshirib yozing.");
    } catch (err: any) {
      setAuthError(err.message || "Kirishda xatolik yuz berdi.");
    } finally {
      setSubmittingAuth(false);
    }
  }

  // Handle Sign Out
  async function handleSignOut() {
    try {
      await supabase.auth.signOut();
    } catch (e) {}
    localStorage.removeItem(ADMIN_STORAGE_KEY);
    setSession(null);
  }

  // Image compression utility using HTML5 Canvas (high quality, small file size)
  function compressImage(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const maxWidth = 1200;
          const maxHeight = 800;
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > maxWidth) {
              height = Math.round((height * maxWidth) / width);
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width = Math.round((width * maxHeight) / height);
              height = maxHeight;
            }
          }

          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            resolve(e.target?.result as string);
            return;
          }

          ctx.drawImage(img, 0, 0, width, height);
          const dataUrl = canvas.toDataURL('image/webp', 0.85);
          resolve(dataUrl);
        };
        img.onerror = () => reject(new Error("Rasmni o'qishda xatolik"));
        img.src = e.target?.result as string;
      };
      reader.onerror = () => reject(new Error("Faylni o'qishda xatolik"));
      reader.readAsDataURL(file);
    });
  }

  // Handle Image File Selection
  async function handleImageFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert("Iltimos, faqat rasm faylini tanlang (JPG, PNG, WebP).");
      return;
    }

    setImageUploading(true);
    try {
      const compressedDataUrl = await compressImage(file);
      setImagePreview(compressedDataUrl);
      setFormData((prev) => ({ ...prev, image: compressedDataUrl }));
    } catch (err) {
      alert("Rasmni yuklashda xatolik yuz berdi.");
    } finally {
      setImageUploading(false);
    }
  }

  // Open modal for new item
  function handleAddNew() {
    const today = new Date().toISOString().split('T')[0];
    setEditingItem(null);
    setImagePreview(null);
    setFormData({
      id: `news-${Date.now()}`,
      date: today,
      category: {
        uz: "Ilmiy Yangilik",
        ru: "Научные новости",
        en: "Scientific News",
      },
      title: { uz: '', ru: '', en: '' },
      summary: { uz: '', ru: '', en: '' },
      link: 'https://',
      image: '',
    });
    setActiveLangTab('uz');
    setIsEditModalOpen(true);
  }

  // Open modal for editing
  function handleEdit(item: NewsItem) {
    setEditingItem(item);
    setImagePreview(item.image || null);
    setFormData({
      id: item.id,
      date: item.date,
      category: { ...item.category },
      title: { ...item.title },
      summary: { ...item.summary },
      link: item.link || '',
      image: item.image || '',
    });
    setActiveLangTab('uz');
    setIsEditModalOpen(true);
  }

  // Delete item
  async function handleDelete(id: string, titleUz?: string) {
    if (!confirm(`"${titleUz || 'Ushbu'}" yangiligini o'chirishni tasdiqlaysizmi?`)) {
      return;
    }
    try {
      await deleteNewsItem(id);
      setActionSuccess("Yangilik muvaffaqiyatli o'chirildi!");
      setTimeout(() => setActionSuccess(null), 3000);
      await loadNews();
    } catch (err) {
      setActionError("O'chirishda xatolik yuz berdi.");
      setTimeout(() => setActionError(null), 3000);
    }
  }

  // Save item (Create or Update)
  async function handleSaveNews(e: React.FormEvent) {
    e.preventDefault();
    if (!formData.title.uz || !formData.summary.uz) {
      alert("Iltimos, kamida o'zbek tilidagi sarlavha va matnni to'ldiring.");
      return;
    }

    setSavingItem(true);
    try {
      const itemToSave: NewsItem = {
        ...formData,
        image: imagePreview || formData.image || '',
        category: {
          uz: formData.category.uz || "Yangilik",
          ru: formData.category.ru || formData.category.uz || "Новости",
          en: formData.category.en || formData.category.uz || "News",
        },
        title: {
          uz: formData.title.uz,
          ru: formData.title.ru || formData.title.uz,
          en: formData.title.en || formData.title.uz,
        },
        summary: {
          uz: formData.summary.uz,
          ru: formData.summary.ru || formData.summary.uz,
          en: formData.summary.en || formData.summary.uz,
        },
      };

      await saveNewsItem(itemToSave);
      setIsEditModalOpen(false);
      setActionSuccess(editingItem ? "Yangilik muvaffaqiyatli yangilandi!" : "Yangi yangilik qo'shildi!");
      setTimeout(() => setActionSuccess(null), 3500);
      await loadNews();
    } catch (err) {
      alert("Saqlashda xatolik yuz berdi.");
    } finally {
      setSavingItem(false);
    }
  }

  // Reset to default
  async function handleResetToDefault() {
    if (!confirm("Barcha yangiliklarni boshlang'ich holatga qaytarishni xohlaysizmi?")) {
      return;
    }
    for (const item of INITIAL_NEWS_ITEMS) {
      await saveNewsItem(item);
    }
    setActionSuccess("Boshlang'ich yangiliklar tiklandi!");
    setTimeout(() => setActionSuccess(null), 3000);
    await loadNews();
  }

  if (loadingAuth) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <RefreshCw className="w-8 h-8 text-[#24356F] animate-spin" />
          <p className="text-sm font-medium text-slate-600">Tekshirilmoqda...</p>
        </div>
      </div>
    );
  }

  // ==========================================
  // 1. LOGIN SCREEN (Diyorfayz2003)
  // ==========================================
  if (!session) {
    return (
      <div className="min-h-screen bg-[#F4F6FB] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex justify-center mb-4">
            <div className="p-2 rounded-2xl bg-white border border-[#DDE2EF] shadow-md flex items-center gap-3">
              <img
                src="/logo-ifbil.webp"
                alt="IFBIL"
                className="w-12 h-12 object-contain"
              />
              <div className="h-8 w-px bg-slate-200" />
              <img
                src="/logo-slipc.webp"
                alt="SLIPC"
                className="w-12 h-12 object-contain"
              />
            </div>
          </div>
          <h2 className="text-center text-2xl font-bold tracking-tight text-[#101F52] font-display">
            SLIPC Boshqaruv Paneli
          </h2>
          <p className="mt-1.5 text-center text-xs sm:text-sm text-[#5C6478]">
            Yangiliklar bo'limini tahrirlash uchun parolni kiriting
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4 sm:px-0">
          <div className="bg-white py-8 px-6 sm:px-10 shadow-xl shadow-slate-200/60 rounded-2xl border border-[#DDE2EF]">
            {authError && (
              <div className="mb-5 p-3.5 rounded-xl bg-red-50 border border-red-200 flex items-start gap-2.5 text-red-700 text-xs">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{authError}</span>
              </div>
            )}

            {authSuccess && (
              <div className="mb-5 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-2.5 text-emerald-700 text-xs">
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{authSuccess}</span>
              </div>
            )}

            <form onSubmit={handleAuthSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Login / Foydalanuvchi nomi
                </label>
                <div className="relative rounded-xl border border-slate-200 focus-within:border-[#24356F] focus-within:ring-2 focus-within:ring-[#24356F]/20 transition-all">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={loginInput}
                    onChange={(e) => setLoginInput(e.target.value)}
                    placeholder="admin yoki emailingiz"
                    className="block w-full pl-10 pr-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 bg-transparent rounded-xl focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Maxfiy Parol
                </label>
                <div className="relative rounded-xl border border-slate-200 focus-within:border-[#24356F] focus-within:ring-2 focus-within:ring-[#24356F]/20 transition-all">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Key className="w-4 h-4" />
                  </div>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Parolni kiriting..."
                    className="block w-full pl-10 pr-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 bg-transparent rounded-xl focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submittingAuth}
                  className="w-full flex justify-center items-center gap-2 py-2.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-semibold text-white bg-[#101F52] hover:bg-[#1a3285] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#101F52] transition-colors disabled:opacity-50 cursor-pointer"
                >
                  {submittingAuth ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Tekshirilmoqda...</span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      <span>Tizimga kirish</span>
                    </>
                  )}
                </button>
              </div>
            </form>

            <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col gap-3">
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Himoyalangan boshqaruv tizimi</span>
              </div>

              <div className="text-center mt-2">
                <Link
                  href="/"
                  className="text-xs text-slate-500 hover:text-slate-800 inline-flex items-center gap-1"
                >
                  <ArrowLeft className="w-3 h-3" />
                  <span>Asosiy saytga qaytish</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // 2. ADMIN DASHBOARD SCREEN
  // ==========================================
  return (
    <div className="min-h-screen bg-[#F4F6FB] flex flex-col">
      {/* Top Navbar */}
      <header className="bg-white border-b border-[#DDE2EF] sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/logo-ifbil.webp"
              alt="Logo"
              className="w-9 h-9 object-contain"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#101F52] text-sm sm:text-base tracking-tight font-display">
                  SLIPC Boshqaruv
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-mono font-bold uppercase border border-emerald-200">
                  Admin
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block">
                Yangiliklar va fotoxabarlar bo'limi
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-500 font-mono hidden md:inline-block">
              {session.user?.email}
            </span>

            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Saytni ko'rish</span>
            </Link>

            <button
              onClick={handleSignOut}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg text-red-600 bg-red-50 hover:bg-red-100 transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Chiqish</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Alerts */}
        {actionSuccess && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-3 shadow-sm animate-in fade-in">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span className="font-medium">{actionSuccess}</span>
          </div>
        )}

        {actionError && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm flex items-center gap-3 shadow-sm animate-in fade-in">
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
            <span className="font-medium">{actionError}</span>
          </div>
        )}

        {/* Action Header */}
        <div className="bg-white rounded-2xl border border-[#DDE2EF] p-5 sm:p-6 mb-6 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <div className="flex items-center gap-2.5">
              <Newspaper className="w-5 h-5 text-[#24356F]" />
              <h1 className="text-xl font-bold text-[#101F52] tracking-tight font-display">
                Yangiliklar Ro'yxati
              </h1>
              <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-bold">
                {newsList.length} ta
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Yangiliklarni rasm bilan qo'shish, matnlarini tahrirlash yoki o'chirish
            </p>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={handleAddNew}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#101F52] hover:bg-[#1a3285] text-white text-xs sm:text-sm font-semibold shadow-sm transition-all cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Yangi Yangilik Qo'shish</span>
            </button>

            <button
              onClick={loadNews}
              title="Yangilash"
              className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
            >
              <RefreshCw className={`w-4 h-4 ${loadingNews ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>

        {/* News Items List */}
        {loadingNews ? (
          <div className="bg-white rounded-2xl border border-[#DDE2EF] p-12 text-center text-slate-500">
            <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-[#24356F]" />
            <p className="text-xs">Yangiliklar yuklanmoqda...</p>
          </div>
        ) : newsList.length === 0 ? (
          <div className="bg-white rounded-2xl border border-[#DDE2EF] p-12 text-center text-slate-500">
            <p className="text-sm">Hozircha hech qanday yangilik mavjud emas.</p>
            <button
              onClick={handleResetToDefault}
              className="mt-3 text-xs text-[#24356F] font-semibold hover:underline"
            >
              Boshlang'ich yangiliklarni yuklash
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {newsList.map((item, index) => (
              <div
                key={item.id || index}
                className="bg-white rounded-xl border border-[#DDE2EF] p-4 sm:p-5 hover:border-slate-300 transition-all shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-5"
              >
                {/* News Image Preview if available */}
                {item.image && (
                  <div className="w-full md:w-36 h-28 shrink-0 rounded-lg overflow-hidden border border-slate-200 bg-slate-50">
                    <img
                      src={item.image}
                      alt={item.title?.uz || 'Rasm'}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                    <span className="inline-flex items-center gap-1 text-xs font-mono text-slate-500">
                      <Calendar className="w-3.5 h-3.5 text-[#24356F]" />
                      {item.date}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold uppercase tracking-wider border border-emerald-200">
                      {item.category?.uz || 'Yangilik'}
                    </span>
                    {item.image && (
                      <span className="inline-flex items-center gap-1 text-[11px] text-slate-400 font-mono">
                        <FileImage className="w-3 h-3 text-emerald-600" />
                        <span>Rasm mavjud</span>
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-slate-900 leading-snug font-display line-clamp-2">
                    {item.title?.uz || "Sarlavha yo'q"}
                  </h3>

                  <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {item.summary?.uz || "Matn yo'q"}
                  </p>

                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-[#24356F] hover:underline mt-2"
                    >
                      <span>{item.link}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 shrink-0 w-full md:w-auto pt-3 md:pt-0 border-t md:border-t-0 border-slate-100 justify-end">
                  <button
                    onClick={() => handleEdit(item)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-[#24356F] transition-colors cursor-pointer"
                  >
                    <Pencil className="w-3.5 h-3.5" />
                    <span>Tahrirlash</span>
                  </button>

                  <button
                    onClick={() => handleDelete(item.id, item.title?.uz)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-red-200 text-xs font-medium text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>O'chirish</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* ==========================================
          3. EDIT / CREATE MODAL WITH IMAGE UPLOAD
      ========================================== */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/50 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col my-auto max-h-[92vh]">
            {/* Header */}
            <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-[#101F52] text-white">
                  <Pencil className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#101F52]">
                    {editingItem ? "Yangilikni Tahrirlash" : "Yangi Yangilik Qo'shish"}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Rasm yuklang va matnlarni kiriting
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsEditModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSaveNews} className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-5">
              {/* Image Upload Area */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <ImageIcon className="w-4 h-4 text-[#24356F]" />
                    Yangilik Rasmi
                  </span>
                  {imagePreview && (
                    <button
                      type="button"
                      onClick={() => {
                        setImagePreview(null);
                        setFormData((prev) => ({ ...prev, image: '' }));
                        if (fileInputRef.current) fileInputRef.current.value = '';
                      }}
                      className="text-red-600 hover:text-red-700 text-xs font-medium inline-flex items-center gap-1"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>Rasmni o'chirish</span>
                    </button>
                  )}
                </label>

                {imagePreview ? (
                  <div className="relative rounded-xl border border-slate-200 overflow-hidden bg-slate-50 flex items-center justify-center max-h-60">
                    <img
                      src={imagePreview}
                      alt="Tanlangan rasm"
                      className="w-full max-h-60 object-contain"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="absolute bottom-3 right-3 bg-white/95 hover:bg-white text-slate-700 text-xs font-medium px-3 py-1.5 rounded-lg shadow-sm border border-slate-200 flex items-center gap-1.5"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span>Rasmni almashtirish</span>
                    </button>
                  </div>
                ) : (
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-slate-300 hover:border-[#24356F] rounded-xl p-6 text-center cursor-pointer transition-colors bg-slate-50/50 hover:bg-slate-50"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <div className="p-3 rounded-full bg-slate-100 text-[#24356F]">
                        {imageUploading ? (
                          <RefreshCw className="w-6 h-6 animate-spin" />
                        ) : (
                          <Upload className="w-6 h-6" />
                        )}
                      </div>
                      <p className="text-xs sm:text-sm font-semibold text-slate-700">
                        Kompyuterdan rasm yuklash uchun bosing
                      </p>
                      <p className="text-[11px] text-slate-400">
                        PNG, JPG, WebP formatlari (Avtomatik ravishda tiniq va ixcham qilib siqiladi)
                      </p>
                    </div>
                  </div>
                )}

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageFileChange}
                  className="hidden"
                />
              </div>

              {/* Date & Link */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Sana (YYYY-MM-DD)
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#101F52]/20 focus:border-[#101F52] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Havola / DOI Link (ixtiyoriy)
                  </label>
                  <input
                    type="url"
                    value={formData.link}
                    onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                    placeholder="https://..."
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#101F52]/20 focus:border-[#101F52] focus:outline-none"
                  />
                </div>
              </div>

              {/* Language Tabs */}
              <div className="pt-2">
                <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                  <span className="text-xs font-semibold text-slate-500 mr-2 flex items-center gap-1">
                    <Globe className="w-3.5 h-3.5" />
                    Til:
                  </span>
                  {(['uz', 'ru', 'en'] as const).map((lang) => (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => setActiveLangTab(lang)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        activeLangTab === lang
                          ? 'bg-[#101F52] text-white shadow-sm'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {lang === 'uz' ? "🇺🇿 O'zbekcha" : lang === 'ru' ? '🇷🇺 Русский' : '🇬🇧 English'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Multilingual Fields for Active Tab */}
              <div className="space-y-4 pt-1 bg-slate-50/70 p-4 rounded-xl border border-slate-200">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Kategoriya ({activeLangTab.toUpperCase()})
                  </label>
                  <input
                    type="text"
                    required={activeLangTab === 'uz'}
                    value={formData.category[activeLangTab] || ''}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        category: { ...formData.category, [activeLangTab]: e.target.value },
                      })
                    }
                    placeholder="Masalan: Ilmiy Nashr, Xalqaro Hamkorlik, Infratuzilma"
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#101F52]/20 focus:border-[#101F52] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Sarlavha ({activeLangTab.toUpperCase()})
                  </label>
                  <input
                    type="text"
                    required={activeLangTab === 'uz'}
                    value={formData.title[activeLangTab] || ''}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        title: { ...formData.title, [activeLangTab]: e.target.value },
                      })
                    }
                    placeholder="Yangilik sarlavhasini kiriting..."
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#101F52]/20 focus:border-[#101F52] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Qisqacha mazmun / Xulosa ({activeLangTab.toUpperCase()})
                  </label>
                  <textarea
                    rows={4}
                    required={activeLangTab === 'uz'}
                    value={formData.summary[activeLangTab] || ''}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        summary: { ...formData.summary, [activeLangTab]: e.target.value },
                      })
                    }
                    placeholder="Yangilik haqida batafsil ma'lumot..."
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#101F52]/20 focus:border-[#101F52] focus:outline-none"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-slate-200 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  Bekor qilish
                </button>

                <button
                  type="submit"
                  disabled={savingItem}
                  className="px-5 py-2 rounded-xl bg-[#101F52] hover:bg-[#1a3285] text-white text-xs font-semibold shadow-sm transition-colors flex items-center gap-2 disabled:opacity-50 cursor-pointer"
                >
                  {savingItem ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Saqlanmoqda...</span>
                    </>
                  ) : (
                    <span>Saqlash</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
