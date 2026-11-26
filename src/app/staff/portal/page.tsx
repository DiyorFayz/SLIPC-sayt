'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import {
  Lock,
  Mail,
  Key,
  LogOut,
  FileText,
  Download,
  Eye,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  ArrowLeft,
  RefreshCw,
  FileCheck,
  Building,
  Calendar,
  Users,
  Search,
  Plus,
  X,
  FileUp,
} from 'lucide-react';

interface ContractItem {
  id: string;
  number: string;
  title: string;
  type: string;
  parties: string;
  startDate: string;
  endDate: string;
  status: 'active' | 'signed' | 'pending';
  description: string;
  fileUrl?: string;
  qrVerified?: boolean;
}

const INITIAL_CONTRACTS: ContractItem[] = [
  {
    id: 'contract-1',
    number: 'SLIPC-TD/2024-01',
    title: 'Mehnat Shartnomasi (Asosiy)',
    type: "To'liq stavka, Ilmiy xodim / Laboratoriya mutaxassisi",
    parties: "SLIPC (IFBIL) Ilmiy Laboratoriyasi & Xodim",
    startDate: '2024-01-15',
    endDate: '2026-12-31',
    status: 'active',
    description: "Laboratoriyada ilmiy tadqiqotlar olib borish, ICH va GLP standartlari talablari asosida tahlillarni bajarish hamda oylik maosh to'g'risidagi asosiy mehnat shartnomasi.",
    qrVerified: true,
  },
  {
    id: 'contract-2',
    number: 'SLIPC-NDA/2024-08',
    title: 'Tijoriy Sir va Maxfiylik Kelishuvi (NDA)',
    type: 'Intellektual mulk va maxfiy tahlillar himoyasi',
    parties: "Toshkent Farmatsevtika Instituti (SLIPC) & Xodim",
    startDate: '2024-01-15',
    endDate: 'Muddatsiz',
    status: 'signed',
    description: "Laboratoriyadagi patent formulalari, xromatografiya (HPLC) xom ma'lumotlari, sitotoksiklik testlari va ilmiy loyihalar natijalarining konfidensialligini ta'minlash to'g'risida kelishuv.",
    qrVerified: true,
  },
  {
    id: 'contract-3',
    number: 'SLIPC-MJ/2023-14',
    title: "To'liq Moddiy Javobgarlik To'g'risida Shartnoma",
    type: 'Laboratoriya asbob-uskunalari va reaktivlar',
    parties: "SLIPC Laboratoriya Mudiriyati & Xodim",
    startDate: '2023-09-01',
    endDate: '2025-09-01',
    status: 'active',
    description: "Agilent 1260 Infinity II HPLC, Liofil quritgich, Spektrofotometr va qimmatbaho kimyoviy standart moddalardan foydalanish hamda asrash bo'yicha moddiy javobgarlik majburiyati.",
    qrVerified: true,
  },
  {
    id: 'contract-4',
    number: 'HORIZON-EU/2024-SLIPC',
    title: 'Horizon Europe Xalqaro Ilmiy Grant Shartnomasi',
    type: "Xalqaro ilmiy konsortsium shartnomasi (PIC 912048192)",
    parties: "Yevropa Ilmiy Konsortsiumi & SLIPC",
    startDate: '2024-09-05',
    endDate: '2027-09-05',
    status: 'active',
    description: "Yevropa Ittifoqining dori vositalarini tadqiq etish yo'nalishidagi dasturida laboratoriyamiz xodimlari ishtiroki, grant mablag'lari va ilmiy maqolalar chop etish shartnomasi.",
    qrVerified: true,
  },
];

const LOCAL_STORAGE_CONTRACTS_KEY = 'slipc_staff_contracts_data';
const LOCAL_STORAGE_STAFF_AUTH_KEY = 'slipc_staff_authenticated_user';
const MASTER_PASSWORD = 'Diyorfayz2003';

export default function StaffPortalPage() {
  const [session, setSession] = useState<{ email: string } | null>(null);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState<string | null>(null);
  const [authSuccess, setAuthSuccess] = useState<string | null>(null);
  const [submittingAuth, setSubmittingAuth] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  // Contracts state
  const [contracts, setContracts] = useState<ContractItem[]>(INITIAL_CONTRACTS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContract, setSelectedContract] = useState<ContractItem | null>(null);

  // Add contract modal state
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newNumber, setNewNumber] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newType, setNewType] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newStartDate, setNewStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [newEndDate, setNewEndDate] = useState('2026-12-31');

  // Check auth on load
  useEffect(() => {
    async function checkAuth() {
      try {
        if (typeof window !== 'undefined') {
          const cached = localStorage.getItem(LOCAL_STORAGE_STAFF_AUTH_KEY);
          if (cached) {
            const parsed = JSON.parse(cached);
            if (parsed && parsed.email) {
              setSession({ email: parsed.email });
              loadContracts();
              setLoadingAuth(false);
              return;
            }
          }
        }

        const { data: { session: supaSession } } = await supabase.auth.getSession();
        if (supaSession?.user?.email) {
          setSession({ email: supaSession.user.email });
          loadContracts();
        }
      } catch (err) {
        console.error('Session error:', err);
      } finally {
        setLoadingAuth(false);
      }
    }

    checkAuth();
  }, []);

  function loadContracts() {
    if (typeof window !== 'undefined') {
      const cached = localStorage.getItem(LOCAL_STORAGE_CONTRACTS_KEY);
      if (cached) {
        try {
          const parsed = JSON.parse(cached);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setContracts(parsed);
            return;
          }
        } catch (e) {}
      }
    }
    setContracts(INITIAL_CONTRACTS);
  }

  // Handle Login
  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setAuthError(null);
    setAuthSuccess(null);
    setSubmittingAuth(true);

    const enteredEmail = email.trim();
    const enteredPassword = password.trim();

    try {
      // 1. Check Master Password: Diyorfayz2003
      if (enteredPassword === MASTER_PASSWORD) {
        const userObj = { email: enteredEmail || 'xodim@slipc.uz' };
        localStorage.setItem(LOCAL_STORAGE_STAFF_AUTH_KEY, JSON.stringify(userObj));
        setSession(userObj);
        loadContracts();
        setAuthSuccess("Muvaffaqiyatli kirdingiz!");
        setSubmittingAuth(false);
        return;
      }

      // 2. Check Supabase Auth
      if (isSignUp) {
        const { data, error } = await supabase.auth.signUp({
          email: enteredEmail,
          password: enteredPassword,
        });
        if (error) throw error;
        if (data.session) {
          const userObj = { email: data.session.user.email || enteredEmail };
          localStorage.setItem(LOCAL_STORAGE_STAFF_AUTH_KEY, JSON.stringify(userObj));
          setSession(userObj);
          loadContracts();
        } else {
          setAuthSuccess("Hisob yaratildi! Endi ushbu login va parol bilan tizimga kiring.");
          setIsSignUp(false);
        }
        setSubmittingAuth(false);
        return;
      }

      // Supabase sign-in
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: enteredEmail,
          password: enteredPassword,
        });

        if (!error && data.session) {
          const userObj = { email: data.session.user.email || enteredEmail };
          localStorage.setItem(LOCAL_STORAGE_STAFF_AUTH_KEY, JSON.stringify(userObj));
          setSession(userObj);
          loadContracts();
          setAuthSuccess("Muvaffaqiyatli kirdingiz!");
          setSubmittingAuth(false);
          return;
        }
      } catch (supaErr) {
        // Continue to check table
      }

      // 3. Check Supabase database tables for allowed emails
      let isAllowedInTable = false;
      const tablesToCheck = ['staff', 'employees', 'allowed_emails', 'users', 'contracts', 'posts'];

      for (const tableName of tablesToCheck) {
        try {
          const { data } = await supabase
            .from(tableName)
            .select('*')
            .ilike('email', enteredEmail)
            .limit(1);

          if (data && data.length > 0) {
            isAllowedInTable = true;
            break;
          }
        } catch (e) {
          // Table may not exist or not allowed
        }
      }

      if (isAllowedInTable) {
        const userObj = { email: enteredEmail };
        localStorage.setItem(LOCAL_STORAGE_STAFF_AUTH_KEY, JSON.stringify(userObj));
        setSession(userObj);
        loadContracts();
        setAuthSuccess("Ruxsat berildi! Tizimga muvaffaqiyatli kirdingiz.");
        setSubmittingAuth(false);
        return;
      }

      // If credentials do not match
      setAuthError("Email yoki parol noto'g'ri. Iltimos, qaytadan tekshirib yozing.");
    } catch (err: any) {
      setAuthError(err.message || "Kirishda xatolik yuz berdi.");
    } finally {
      setSubmittingAuth(false);
    }
  }

  // Handle Logout
  async function handleLogout() {
    try {
      await supabase.auth.signOut();
    } catch (e) {}
    localStorage.removeItem(LOCAL_STORAGE_STAFF_AUTH_KEY);
    setSession(null);
  }

  // Handle Add Contract
  function handleAddContract(e: React.FormEvent) {
    e.preventDefault();
    if (!newTitle.trim()) {
      alert("Iltimos, shartnoma nomini kiriting.");
      return;
    }

    const newContract: ContractItem = {
      id: `contract-${Date.now()}`,
      number: newNumber || `SLIPC-SH/${Date.now().toString().slice(-4)}`,
      title: newTitle,
      type: newType || "Mehnat munosabatlari va ilmiy faoliyat",
      parties: `SLIPC (IFBIL) & ${session?.email || 'Xodim'}`,
      startDate: newStartDate,
      endDate: newEndDate,
      status: 'active',
      description: newDescription || "Xodimning laboratoriyadagi rasmiy faoliyati bo'yicha tuzilgan shartnoma.",
      qrVerified: true,
    };

    const updated = [newContract, ...contracts];
    setContracts(updated);
    if (typeof window !== 'undefined') {
      localStorage.setItem(LOCAL_STORAGE_CONTRACTS_KEY, JSON.stringify(updated));
    }

    setIsAddModalOpen(false);
    setNewNumber('');
    setNewTitle('');
    setNewType('');
    setNewDescription('');
    alert("Yangi shartnoma muvaffaqiyatli qo'shildi!");
  }

  // Filtered contracts
  const filteredContracts = contracts.filter((c) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      c.title.toLowerCase().includes(q) ||
      c.number.toLowerCase().includes(q) ||
      c.type.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q)
    );
  });

  if (loadingAuth) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <RefreshCw className="w-8 h-8 text-[#108A54] animate-spin" />
          <p className="text-sm font-medium text-slate-600">Tekshirilmoqda...</p>
        </div>
      </div>
    );
  }

  // ==========================================
  // 1. LOGIN SCREEN
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
          <h2 className="text-center text-2xl font-bold tracking-tight text-[#0F2942] font-display">
            SLIPC Xodimlar Portali
          </h2>
          <p className="mt-1.5 text-center text-xs sm:text-sm text-[#5C6478]">
            Shartnomalar va shaxsiy hujjatlarni ko'rish uchun profilingizga kiring
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

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Ruxsat etilgan Email
                </label>
                <div className="relative rounded-xl border border-slate-200 focus-within:border-[#108A54] focus-within:ring-2 focus-within:ring-[#108A54]/20 transition-all">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="xodim@slipc-lab.uz"
                    className="block w-full pl-10 pr-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 bg-transparent rounded-xl focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Maxfiy Parol
                </label>
                <div className="relative rounded-xl border border-slate-200 focus-within:border-[#108A54] focus-within:ring-2 focus-within:ring-[#108A54]/20 transition-all">
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
                  className="w-full flex justify-center items-center gap-2 py-2.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-semibold text-white bg-[#108A54] hover:bg-[#0d6e43] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#108A54] transition-colors disabled:opacity-50 cursor-pointer"
                >
                  {submittingAuth ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Tekshirilmoqda...</span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      <span>{isSignUp ? "Ro'yxatdan o'tish" : "Tizimga kirish"}</span>
                    </>
                  )}
                </button>
              </div>
            </form>

            <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setAuthError(null);
                  setAuthSuccess(null);
                }}
                className="text-xs text-[#108A54] hover:underline font-medium text-center cursor-pointer"
              >
                {isSignUp
                  ? "Oldin ro'yxatdan o'tganmisiz? Kirish sahifasiga qaytish"
                  : "Yangi xodim hisobi yaratish (Supabase orqali)"}
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Supabase xavfsiz avtorizatsiya bazasi</span>
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
  // 2. AUTHENTICATED STAFF PORTAL SCREEN
  // ==========================================
  return (
    <div className="min-h-screen bg-[#F4F6FB] flex flex-col">
      {/* Top Navbar */}
      <header className="bg-white border-b border-[#DDE2EF] sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/logo-ifbil.webp"
              alt="Logo"
              className="w-9 h-9 object-contain"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#0F2942] text-sm sm:text-base tracking-tight font-display">
                  SLIPC Xodimlar Portali
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-mono font-bold uppercase border border-emerald-200">
                  Xodim
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block">
                Hujjatlar va shartnomalar axborot tizimi
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-500 font-mono hidden md:inline-block bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200">
              {session.email}
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
              onClick={handleLogout}
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
        {/* SHARTNOMALAR HERO HEADER */}
        <div className="bg-gradient-to-r from-[#0F2942] via-[#163B5F] to-[#108A54] rounded-2xl p-6 sm:p-8 text-white shadow-lg mb-8 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-emerald-300 text-xs font-mono font-semibold uppercase mb-3 border border-white/15">
              <FileCheck className="w-4 h-4 text-emerald-400" />
              <span>Rasmiy Huquqiy Hujjatlar</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-display text-white">
              Shartnomalar
            </h1>

            <p className="mt-2 text-sm sm:text-base text-slate-200 leading-relaxed font-body">
              Xodim bilan institut laboratoriyasi o'rtasida tuzilgan rasmiy mehnat, moddiy javobgarlik, tijoriy sirni saqlash (NDA) va xalqaro grant shartnomalari arxivi.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono">
              <div className="px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Maqomi: Faol Xodim</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 flex items-center gap-2">
                <Building className="w-4 h-4 text-sky-300" />
                <span>SLIPC IFBIL Lab</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-300" />
                <span>QR-kodli Raqamli Tasdiq</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Bar: Search & Add */}
        <div className="bg-white rounded-2xl border border-[#DDE2EF] p-4 sm:p-5 mb-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Shartnomalarni qidirish..."
              className="w-full pl-9 pr-3.5 py-2 text-xs sm:text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#108A54]/20 focus:border-[#108A54]"
            />
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            <span className="text-xs font-mono text-slate-500 font-semibold px-3 py-2 rounded-xl bg-slate-50 border border-slate-200">
              Jami: {filteredContracts.length} ta shartnoma
            </span>

            <button
              onClick={() => setIsAddModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#108A54] hover:bg-[#0d6e43] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Yangi Shartnoma Qo'shish</span>
            </button>
          </div>
        </div>

        {/* Contracts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredContracts.map((contract) => (
            <div
              key={contract.id}
              className="bg-white rounded-2xl border border-[#DDE2EF] p-5 sm:p-6 shadow-xs hover:border-[#108A54]/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-mono font-bold border border-emerald-200 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-emerald-600" />
                    {contract.number}
                  </span>

                  <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[11px] font-mono font-semibold">
                    {contract.status === 'active' ? '✓ Amalda' : '✓ Imzolangan'}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0F2942] tracking-tight font-display mb-1.5">
                  {contract.title}
                </h3>

                <p className="text-xs text-[#108A54] font-medium mb-3">
                  {contract.type}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-body mb-4">
                  {contract.description}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-slate-100 text-xs font-mono text-slate-500">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Tomonlar:</span>
                    <span className="text-slate-700 font-semibold">{contract.parties}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Amal qilish muddati:</span>
                    <span className="text-slate-700 font-semibold">
                      {contract.startDate} — {contract.endDate}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedContract(contract)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#0F2942] transition-colors cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Ko'rish</span>
                </button>

                <button
                  onClick={() => {
                    alert(`"${contract.title}" (№ ${contract.number}) shartnomasi rasmiy PDF hujjati yuklab olinmoqda.`);
                  }}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-[#108A54] transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>PDF Yuklab Olish</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* ==========================================
          3. CONTRACT VIEW MODAL
      ========================================== */}
      {selectedContract && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col my-auto max-h-[90vh]">
            <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-[#0F2942] text-white">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0F2942]">
                    {selectedContract.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-500">
                    № {selectedContract.number}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedContract(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-5 text-sm text-slate-700">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Hujjat turi:</span>
                  <span className="font-semibold text-slate-800">{selectedContract.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Imzolangan sana:</span>
                  <span className="font-semibold text-slate-800">{selectedContract.startDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Tugash muddati:</span>
                  <span className="font-semibold text-slate-800">{selectedContract.endDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Holati:</span>
                  <span className="font-bold text-emerald-700 uppercase">Tasdiqlangan va Amalda</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Shartnoma Mazmuni:
                </h4>
                <p className="text-slate-700 leading-relaxed bg-white p-4 rounded-xl border border-slate-100">
                  {selectedContract.description}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-emerald-900">
                      Raqamli E-IMZO bilan tasdiqlangan
                    </p>
                    <p className="text-[11px] text-emerald-700">
                      SLIPC Muassasasi va Tashkiliy Kengash tomonidan ro'yxatga olingan
                    </p>
                  </div>
                </div>

                <div className="w-12 h-12 bg-white border border-emerald-300 rounded-lg flex items-center justify-center p-1 text-[10px] font-mono text-center font-bold text-slate-600">
                  QR OK
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-slate-200 flex items-center justify-end gap-3 bg-slate-50">
              <button
                onClick={() => setSelectedContract(null)}
                className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100"
              >
                Yopish
              </button>

              <button
                onClick={() => {
                  alert("Shartnoma PDF hujjati muvaffaqiyatli yuklab olindi.");
                }}
                className="px-5 py-2 rounded-xl bg-[#0F2942] hover:bg-[#163B5F] text-white text-xs font-semibold shadow-xs flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>PDF Yuklab Olish</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          4. ADD CONTRACT MODAL
      ========================================== */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col my-auto max-h-[90vh]">
            <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-[#108A54] text-white">
                  <Plus className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0F2942]">
                    Yangi Shartnoma Qo'shish
                  </h3>
                  <p className="text-xs text-slate-500">
                    Shartnoma ma'lumotlarini kiriting
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsAddModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddContract} className="p-6 space-y-4 overflow-y-auto">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Shartnoma Raqami
                </label>
                <input
                  type="text"
                  required
                  value={newNumber}
                  onChange={(e) => setNewNumber(e.target.value)}
                  placeholder="Masalan: SLIPC-TD/2025-05"
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#108A54]/20 focus:border-[#108A54] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Shartnoma Nomi
                </label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="Masalan: Ilmiy-amaliy loyiha shartnomasi"
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#108A54]/20 focus:border-[#108A54] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Shartnoma Yo'nalishi / Turi
                </label>
                <input
                  type="text"
                  value={newType}
                  onChange={(e) => setNewType(e.target.value)}
                  placeholder="Masalan: Mehnat, Grant, Maxfiylik"
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#108A54]/20 focus:border-[#108A54] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Boshlanish sanasi
                  </label>
                  <input
                    type="date"
                    value={newStartDate}
                    onChange={(e) => setNewStartDate(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#108A54]/20 focus:border-[#108A54] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Tugash sanasi
                  </label>
                  <input
                    type="date"
                    value={newEndDate}
                    onChange={(e) => setNewEndDate(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#108A54]/20 focus:border-[#108A54] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Qisqacha Tavsif
                </label>
                <textarea
                  rows={3}
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  placeholder="Shartnoma shartlari va vazifalari..."
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#108A54]/20 focus:border-[#108A54] focus:outline-none"
                />
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Bekor qilish
                </button>

                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#108A54] hover:bg-[#0d6e43] text-white text-xs font-semibold shadow-xs"
                >
                  Saqlash
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
