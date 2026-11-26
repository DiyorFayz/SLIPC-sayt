'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import {
  LabContract,
  ContractStatus,
  INITIAL_LAB_CONTRACTS,
} from '@/data/contractsData';
import {
  Lock,
  Mail,
  Key,
  LogOut,
  FileText,
  Eye,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  ArrowLeft,
  RefreshCw,
  Search,
  Pencil,
  Plus,
  X,
  Phone,
  User,
  Clock,
  Coins,
  Check,
  Filter,
} from 'lucide-react';

const LOCAL_STORAGE_CONTRACTS_KEY = 'slipc_staff_lab_contracts_v1';
const LOCAL_STORAGE_STAFF_AUTH_KEY = 'slipc_staff_authenticated_user';
const MASTER_PASSWORD = 'Diyorfayz2003';

export default function StaffPortalPage() {
  const [session, setSession] = useState<{ email: string } | null>(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

  // Auth form
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState<string | null>(null);
  const [authSuccess, setAuthSuccess] = useState<string | null>(null);
  const [submittingAuth, setSubmittingAuth] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  // Contracts data
  const [contracts, setContracts] = useState<LabContract[]>(INITIAL_LAB_CONTRACTS);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | ContractStatus>('all');
  const [actionNotice, setActionNotice] = useState<string | null>(null);

  // Edit / Details Modal State
  const [editingContract, setEditingContract] = useState<LabContract | null>(null);
  const [editFormData, setEditFormData] = useState<LabContract | null>(null);

  // Check auth on mount
  useEffect(() => {
    async function checkAuth() {
      try {
        if (typeof window !== 'undefined') {
          const cached = localStorage.getItem(LOCAL_STORAGE_STAFF_AUTH_KEY);
          if (cached) {
            const parsed = JSON.parse(cached);
            if (parsed && parsed.email) {
              setSession({ email: parsed.email });
              loadStoredContracts();
              setLoadingAuth(false);
              return;
            }
          }
        }

        const { data: { session: supaSession } } = await supabase.auth.getSession();
        if (supaSession?.user?.email) {
          setSession({ email: supaSession.user.email });
          loadStoredContracts();
        }
      } catch (err) {
        console.error('Session error:', err);
      } finally {
        setLoadingAuth(false);
      }
    }

    checkAuth();
  }, []);

  function loadStoredContracts() {
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
    setContracts(INITIAL_LAB_CONTRACTS);
  }

  function saveContractsToStorage(updated: LabContract[]) {
    setContracts(updated);
    if (typeof window !== 'undefined') {
      localStorage.setItem(LOCAL_STORAGE_CONTRACTS_KEY, JSON.stringify(updated));
    }
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
        loadStoredContracts();
        setAuthSuccess("Muvaffaqiyatli kirdingiz!");
        setSubmittingAuth(false);
        return;
      }

      // 2. Supabase Auth Sign Up
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
          loadStoredContracts();
        } else {
          setAuthSuccess("Hisob yaratildi! Endi login va parol bilan tizimga kiring.");
          setIsSignUp(false);
        }
        setSubmittingAuth(false);
        return;
      }

      // 3. Supabase Auth Sign In
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: enteredEmail,
          password: enteredPassword,
        });

        if (!error && data.session) {
          const userObj = { email: data.session.user.email || enteredEmail };
          localStorage.setItem(LOCAL_STORAGE_STAFF_AUTH_KEY, JSON.stringify(userObj));
          setSession(userObj);
          loadStoredContracts();
          setAuthSuccess("Muvaffaqiyatli kirdingiz!");
          setSubmittingAuth(false);
          return;
        }
      } catch (supaErr) {}

      // 4. Supabase Database tables check
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
        } catch (e) {}
      }

      if (isAllowedInTable) {
        const userObj = { email: enteredEmail };
        localStorage.setItem(LOCAL_STORAGE_STAFF_AUTH_KEY, JSON.stringify(userObj));
        setSession(userObj);
        loadStoredContracts();
        setAuthSuccess("Ruxsat berildi! Tizimga muvaffaqiyatli kirdingiz.");
        setSubmittingAuth(false);
        return;
      }

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

  // Change status of a specific contract
  function handleStatusChange(id: string, newStatus: ContractStatus) {
    const updated = contracts.map((c) =>
      c.id === id ? { ...c, status: newStatus } : c
    );
    saveContractsToStorage(updated);

    const statusNames: Record<ContractStatus, string> = {
      hali_boshlanmagan: "Hali boshlanmagan",
      jarayonda: "Jarayonda",
      tugallangan: "Tugallangan",
    };

    setActionNotice(`Holat o'zgartirildi: "${statusNames[newStatus]}"`);
    setTimeout(() => setActionNotice(null), 2500);
  }

  // Open Edit Modal
  function handleOpenEdit(contract: LabContract) {
    setEditingContract(contract);
    setEditFormData({ ...contract });
  }

  // Save edited contract
  function handleSaveEdit(e: React.FormEvent) {
    e.preventDefault();
    if (!editFormData) return;

    const updated = contracts.map((c) =>
      c.id === editFormData.id ? editFormData : c
    );
    saveContractsToStorage(updated);
    setEditingContract(null);
    setEditFormData(null);
    setActionNotice("Shartnoma ma'lumotlari muvaffaqiyatli saqlandi!");
    setTimeout(() => setActionNotice(null), 3000);
  }

  // Filtered & Searched Contracts
  const filteredContracts = useMemo(() => {
    return contracts.filter((c) => {
      const matchesStatus = statusFilter === 'all' || c.status === statusFilter;
      if (!matchesStatus) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();

      return (
        c.number.toLowerCase().includes(q) ||
        c.subject.toLowerCase().includes(q) ||
        c.client.toLowerCase().includes(q) ||
        c.performers.toLowerCase().includes(q) ||
        c.phone.toLowerCase().includes(q) ||
        c.period.toLowerCase().includes(q)
      );
    });
  }, [contracts, statusFilter, searchQuery]);

  // Statistics counts
  const stats = useMemo(() => {
    const total = contracts.length;
    const inProgress = contracts.filter((c) => c.status === 'jarayonda').length;
    const completed = contracts.filter((c) => c.status === 'tugallangan').length;
    const pending = contracts.filter((c) => c.status === 'hali_boshlanmagan').length;
    return { total, inProgress, completed, pending };
  }, [contracts]);

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
            Shartnomalar bo'limiga kirish uchun login va parolni kiriting
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
  // 2. SHARTNOMALAR PORTAL SCREEN
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
                  Faol
                </span>
              </div>
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
        {/* Floating feedback alert */}
        {actionNotice && (
          <div className="fixed bottom-6 right-6 z-50 bg-[#0F2942] text-white px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2 text-xs font-medium border border-slate-700 animate-in fade-in">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>{actionNotice}</span>
          </div>
        )}

        {/* Clean Header: Shartnomalar & Subtitle */}
        <div className="mb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F2942] tracking-tight font-display">
            Shartnomalar
          </h1>
          <p className="text-xs sm:text-sm text-[#475569] mt-1 font-body">
            SLIPC laboratoriyasida tuzilgan shartnomalar holati
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="bg-white rounded-2xl border border-[#DDE2EF] p-4 sm:p-5 mb-6 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Status Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            <button
              onClick={() => setStatusFilter('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                statusFilter === 'all'
                  ? 'bg-[#0F2942] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Barchasi ({stats.total})
            </button>

            <button
              onClick={() => setStatusFilter('jarayonda')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                statusFilter === 'jarayonda'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'bg-sky-50 text-sky-700 border border-sky-200 hover:bg-sky-100'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span>Jarayonda ({stats.inProgress})</span>
            </button>

            <button
              onClick={() => setStatusFilter('hali_boshlanmagan')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                statusFilter === 'hali_boshlanmagan'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Hali boshlanmagan ({stats.pending})</span>
            </button>

            <button
              onClick={() => setStatusFilter('tugallangan')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                statusFilter === 'tugallangan'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Tugallangan ({stats.completed})</span>
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Raqami, mavzusi yoki buyurtmachi..."
              className="w-full pl-9 pr-3.5 py-2 text-xs sm:text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#108A54]/20 focus:border-[#108A54]"
            />
          </div>
        </div>

        {/* Shartnomalar Ro'yxati (Har biri alohida bo'lim ko'rinishida) */}
        {filteredContracts.length === 0 ? (
          <div className="bg-white rounded-2xl border border-[#DDE2EF] p-12 text-center text-slate-500">
            <p className="text-sm">Qidiruv bo'yicha hech qanday shartnoma topilmadi.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredContracts.map((contract) => (
              <div
                key={contract.id}
                className="bg-white rounded-2xl border border-[#DDE2EF] p-5 sm:p-6 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between gap-4"
              >
                {/* Header row: Number, Period, Amount, and the dedicated Status Selector */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#0F2942]/10 text-[#0F2942] text-xs font-mono font-bold border border-[#0F2942]/20">
                      № {contract.tr}
                    </span>
                    <span className="font-mono text-sm font-bold text-[#0F2942]">
                      {contract.number}
                    </span>
                    <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {contract.period}
                    </span>
                  </div>

                  {/* BO'SH JOY: Shartnoma holatini tanlash joyi (Dropdown Selector) */}
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Holati:
                    </span>
                    <select
                      value={contract.status}
                      onChange={(e) =>
                        handleStatusChange(contract.id, e.target.value as ContractStatus)
                      }
                      className={`text-xs font-bold px-3 py-1.5 rounded-xl border transition-all cursor-pointer focus:outline-none focus:ring-2 ${
                        contract.status === 'jarayonda'
                          ? 'bg-sky-50 text-sky-700 border-sky-300 focus:ring-sky-200'
                          : contract.status === 'tugallangan'
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-300 focus:ring-emerald-200'
                          : 'bg-amber-50 text-amber-700 border-amber-300 focus:ring-amber-200'
                      }`}
                    >
                      <option value="hali_boshlanmagan">⏳ Hali boshlanmagan</option>
                      <option value="jarayonda">🔄 Jarayonda</option>
                      <option value="tugallangan">✅ Tugallangan</option>
                    </select>

                    {/* Tahrirlash tugmasi */}
                    <button
                      onClick={() => handleOpenEdit(contract)}
                      className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:text-[#0F2942] hover:bg-slate-50 transition-colors ml-1 cursor-pointer"
                      title="Shartnomani tahrirlash"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Contract Subject / Title */}
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0F2942] leading-snug font-display">
                    {contract.subject}
                  </h3>
                </div>

                {/* Contract Details Grid: Amount, Client, Performers, Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 bg-slate-50/70 p-3.5 rounded-xl border border-slate-100 text-xs font-body">
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block mb-0.5">
                      Shartnoma mablag'i:
                    </span>
                    <span className="font-bold text-[#108A54] font-mono text-sm">
                      {contract.amount}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block mb-0.5">
                      Buyurtmachi:
                    </span>
                    <span className="font-semibold text-slate-800 flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="line-clamp-1">{contract.client || "—"}</span>
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block mb-0.5">
                      Telefon raqami:
                    </span>
                    <span className="font-semibold text-slate-700 font-mono flex items-center gap-1">
                      {contract.phone ? (
                        <>
                          <Phone className="w-3 h-3 text-slate-400 shrink-0" />
                          <span>{contract.phone}</span>
                        </>
                      ) : (
                        <span className="text-slate-400">—</span>
                      )}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block mb-0.5">
                      Ijrochilari:
                    </span>
                    <span className="text-slate-600 line-clamp-1" title={contract.performers}>
                      {contract.performers || "—"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* ==========================================
          3. TAHRIRLASH (EDIT) MODALI
      ========================================== */}
      {editingContract && editFormData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col my-auto max-h-[92vh]">
            <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-[#0F2942] text-white">
                  <Pencil className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0F2942]">
                    Shartnomani Tahrirlash
                  </h3>
                  <p className="text-xs font-mono text-slate-500">
                    {editFormData.number}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setEditingContract(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveEdit} className="p-5 sm:p-6 space-y-4 overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Shartnoma Raqami
                  </label>
                  <input
                    type="text"
                    required
                    value={editFormData.number}
                    onChange={(e) =>
                      setEditFormData({ ...editFormData, number: e.target.value })
                    }
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#108A54]/20 focus:border-[#108A54] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Shartnoma Muddati
                  </label>
                  <input
                    type="text"
                    required
                    value={editFormData.period}
                    onChange={(e) =>
                      setEditFormData({ ...editFormData, period: e.target.value })
                    }
                    placeholder="Masalan: 12.01.2026-30.12.2026"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#108A54]/20 focus:border-[#108A54] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Mavzusi
                </label>
                <textarea
                  rows={3}
                  required
                  value={editFormData.subject}
                  onChange={(e) =>
                    setEditFormData({ ...editFormData, subject: e.target.value })
                  }
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#108A54]/20 focus:border-[#108A54] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Shartnoma Mablag'i
                  </label>
                  <input
                    type="text"
                    value={editFormData.amount}
                    onChange={(e) =>
                      setEditFormData({ ...editFormData, amount: e.target.value })
                    }
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#108A54]/20 focus:border-[#108A54] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Holati (Status)
                  </label>
                  <select
                    value={editFormData.status}
                    onChange={(e) =>
                      setEditFormData({
                        ...editFormData,
                        status: e.target.value as ContractStatus,
                      })
                    }
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#108A54]/20 focus:border-[#108A54] focus:outline-none"
                  >
                    <option value="hali_boshlanmagan">Hali boshlanmagan</option>
                    <option value="jarayonda">Jarayonda</option>
                    <option value="tugallangan">Tugallangan</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Buyurtmachi
                  </label>
                  <input
                    type="text"
                    value={editFormData.client}
                    onChange={(e) =>
                      setEditFormData({ ...editFormData, client: e.target.value })
                    }
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#108A54]/20 focus:border-[#108A54] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Telefon Raqami
                  </label>
                  <input
                    type="text"
                    value={editFormData.phone}
                    onChange={(e) =>
                      setEditFormData({ ...editFormData, phone: e.target.value })
                    }
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#108A54]/20 focus:border-[#108A54] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Ijrochilari
                </label>
                <textarea
                  rows={2}
                  value={editFormData.performers}
                  onChange={(e) =>
                    setEditFormData({ ...editFormData, performers: e.target.value })
                  }
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#108A54]/20 focus:border-[#108A54] focus:outline-none"
                />
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setEditingContract(null)}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100 cursor-pointer"
                >
                  Bekor qilish
                </button>

                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#0F2942] hover:bg-[#163B5F] text-white text-xs font-semibold shadow-xs cursor-pointer"
                >
                  O'zgarishlarni Saqlash
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
