"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  BarChart3,
  ClipboardCheck,
  ShieldCheck,
  Landmark,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Zap,
  ChevronRight,
  Globe,
  Activity,
  Users,
  TrendingUp,
  Check,
} from "lucide-react";
import { useInView, useCounter } from "./hooks/useInView";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import LoadingScreen from "./components/LoadingScreen";
import CommandPalette from "./components/CommandPalette";
import { BannerToast } from "./components/Toast";

/* ─────────────────────── DATA ─────────────────────── */
const programs = [
  {
    name: "KinerjaKu",
    slug: "kinerjaku",
    desc: "Pengelolaan kinerja organisasi terintegrasi untuk seluruh unit kerja KKP.",
    url: "/program/kinerjaku",
    icon: BarChart3,
    status: "online" as const,
    color: "#0284C7",
    lightBg: "bg-sky-50",
    lightText: "text-sky-600",
  },
  {
    name: "Monev KNMP",
    slug: "knmp",
    desc: "Monitoring & evaluasi KNMP secara periodik dan terstruktur.",
    url: "/program/knmp",
    icon: ClipboardCheck,
    status: "online" as const,
    color: "#059669",
    lightBg: "bg-emerald-50",
    lightText: "text-emerald-600",
  },
  {
    name: "Monev WBK",
    slug: "wbk",
    desc: "Pemantauan pembangunan Zona Integritas menuju WBK/WBBM.",
    url: "/program/wbk",
    icon: ShieldCheck,
    status: "online" as const,
    color: "#D97706",
    lightBg: "bg-amber-50",
    lightText: "text-amber-600",
  },
  {
    name: "Monev PHLN",
    slug: "phln",
    desc: "Monitoring PHLN & progres pelaksanaan proyek secara komprehensif.",
    url: "/program/phln",
    icon: Landmark,
    status: "online" as const,
    color: "#7C3AED",
    lightBg: "bg-violet-50",
    lightText: "text-violet-600",
  },
];

const announcements = [
  {
    slug: "pembaruan-sistem-rorenone-v2-1",
    tag: "Update",
    title: "Pembaruan Sistem RORENOne v2.1",
    excerpt: "Peningkatan performa dashboard, tampilan baru, dan fitur notifikasi real-time.",
    date: "25 Feb 2026",
    tagColor: "bg-sky-100 text-sky-700",
  },
  {
    slug: "jadwal-maintenance-server",
    tag: "Maintenance",
    title: "Jadwal Maintenance Server",
    excerpt: "Maintenance rutin malam ini pukul 22.00 – 02.00 WIB. Semua layanan tidak dapat diakses.",
    date: "24 Feb 2026",
    tagColor: "bg-amber-100 text-amber-700",
  },
  {
    slug: "deadline-pelaporan-kinerja-q1-2026",
    tag: "Deadline",
    title: "Pelaporan Kinerja Q1 2026",
    excerpt: "Batas akhir pelaporan kinerja Kuartal 1 adalah 31 Maret 2026.",
    date: "20 Feb 2026",
    tagColor: "bg-rose-100 text-rose-700",
  },
];

/* ──────── Status Badge ──────── */
function StatusDot({ status }: { status: "online" | "maintenance" | "coming_soon" }) {
  const c = {
    online: { dot: "bg-emerald-400", label: "Online" },
    maintenance: { dot: "bg-amber-400", label: "Maintenance" },
    coming_soon: { dot: "bg-slate-300", label: "Coming Soon" },
  }[status];
  return (
    <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-slate-500">
      <span className={`w-1.5 h-1.5 rounded-full ${c.dot} status-pulse`} />
      {c.label}
    </span>
  );
}

/* ═══════════════════════════════════════════════════════
   HERO — Centered with orbital visual
   ═══════════════════════════════════════════════════════ */
function HeroSection() {
  const section = useInView({ threshold: 0.1 });

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background mesh */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(2,132,199,0.08),transparent)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Grid dots */}
      <div className="absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage: "radial-gradient(rgba(2,132,199,0.12) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left — Text */}
          <div
            ref={section.ref}
            className={`space-y-8 anim-hidden ${section.isInView ? "anim-show" : ""}`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-ocean/5 border border-ocean/10 rounded-full px-4 py-2 shimmer-badge">
              <div className="w-2 h-2 rounded-full bg-emerald-400 status-pulse" />
              <span className="text-xs font-semibold text-navy/60 tracking-wide">
                Portal Resmi Biro Perencanaan KKP
              </span>
            </div>

            <div className="space-y-5">
              <h1 className="text-[2.75rem] sm:text-5xl lg:text-[3.5rem] font-extrabold text-navy leading-[1.08] tracking-[-0.02em]">
                Satu Portal untuk{" "}
                <span className="text-gradient-ocean">Semua Program</span>{" "}
                Strategis
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed max-w-lg">
                Akses terintegrasi untuk monitoring, evaluasi, dan pelaporan
                kinerja program Biro Perencanaan KKP — semua dalam satu tempat.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href="#program"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-navy text-white font-semibold rounded-2xl hover:bg-navy-light shadow-lg shadow-navy/15 hover:shadow-xl hover:shadow-navy/20 hover:-translate-y-0.5 transition-all duration-300"
              >
                Jelajahi Program
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#tentang"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-navy font-semibold rounded-2xl border border-slate-200 hover:border-ocean/30 hover:text-ocean hover:bg-ocean/5 transition-all duration-300"
              >
                Pelajari Lebih Lanjut
              </a>
            </div>

            {/* Trust bar */}
            <div className="flex items-center gap-6 pt-6">
              <div className="flex -space-x-2.5">
                {[
                  "bg-sky-500", "bg-emerald-500", "bg-amber-500", "bg-violet-500",
                ].map((bg, i) => (
                  <div
                    key={i}
                    className={`w-9 h-9 rounded-full ${bg} border-2 border-white flex items-center justify-center`}
                  >
                    <span className="text-[10px] font-bold text-white">
                      {["KK", "KN", "WB", "PH"][i]}
                    </span>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-navy">4 Program Aktif</p>
                <p className="text-xs text-slate-400">Terintegrasi dalam 1 portal</p>
              </div>
            </div>
          </div>

          {/* Right — Bento Visual */}
          <div className={`hero-visual relative anim-hidden-right ${section.isInView ? "anim-show-right" : ""}`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="grid grid-cols-5 grid-rows-4 gap-3 h-[420px]">
              {/* Stat card 1 */}
              <div className="col-span-3 row-span-2 bg-navy rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-ocean/20 rounded-full blur-2xl" />
                <div>
                  <p className="text-xs font-medium text-white/40 mb-1">Capaian Kinerja</p>
                  <p className="text-4xl font-extrabold text-white">92<span className="text-ocean text-2xl">%</span></p>
                </div>
                <div className="flex items-end gap-1 h-16">
                  {[40, 55, 48, 65, 60, 80, 72, 88, 75, 85, 90, 92].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm bg-gradient-to-t from-ocean/60 to-ocean-light/40 transition-all"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Stat card 2 */}
              <div className="col-span-2 row-span-1 bg-emerald-50 rounded-3xl p-5 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="w-4 h-4 text-emerald-500" />
                  <span className="text-[10px] font-semibold text-emerald-500/70">↑ 12%</span>
                </div>
                <p className="text-2xl font-extrabold text-emerald-700">128</p>
                <p className="text-[11px] text-emerald-500/60 font-medium">Laporan Terkirim</p>
              </div>

              {/* Stat card 3 */}
              <div className="col-span-2 row-span-1 bg-sky-50 rounded-3xl p-5 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-4 h-4 text-sky-500" />
                </div>
                <p className="text-2xl font-extrabold text-sky-700">24</p>
                <p className="text-[11px] text-sky-500/60 font-medium">Unit Terhubung</p>
              </div>

              {/* Status card */}
              <div className="col-span-2 row-span-2 bg-white border border-slate-100 rounded-3xl p-5 flex flex-col justify-between shadow-sm">
                <div>
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-3">Status Sistem</p>
                  <div className="space-y-2.5">
                    {[
                      { name: "KinerjaKu", ok: true },
                      { name: "KNMP", ok: true },
                      { name: "WBK", ok: false },
                      { name: "PHLN", ok: true },
                    ].map((s) => (
                      <div key={s.name} className="flex items-center justify-between">
                        <span className="text-xs font-medium text-slate-600">{s.name}</span>
                        <span className={`w-2 h-2 rounded-full ${s.ok ? "bg-emerald-400" : "bg-amber-400"}`} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-3 border-t border-slate-100">
                  <p className="text-[10px] text-slate-400">Updated just now</p>
                </div>
              </div>

              {/* Activity card */}
              <div className="col-span-3 row-span-2 bg-white border border-slate-100 rounded-3xl p-5 shadow-sm">
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-3">Aktivitas Terkini</p>
                <div className="space-y-3">
                  {[
                    { text: "Laporan Q4 berhasil dikirim", time: "2 jam", dot: "bg-ocean" },
                    { text: "Update data Monev KNMP", time: "4 jam", dot: "bg-emerald-400" },
                    { text: "Maintenance WBK dijadwalkan", time: "6 jam", dot: "bg-amber-400" },
                    { text: "User baru ditambahkan", time: "1 hari", dot: "bg-violet-400" },
                  ].map((a) => (
                    <div key={a.text} className="flex items-center gap-3">
                      <span className={`w-1.5 h-1.5 rounded-full ${a.dot} flex-shrink-0`} />
                      <span className="text-xs text-slate-600 flex-1 truncate">{a.text}</span>
                      <span className="text-[10px] text-slate-300 flex-shrink-0">{a.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   PROGRAM — Clean cards
   ═══════════════════════════════════════════════════════ */
function ProgramSection() {
  const header = useInView();

  return (
    <section id="program" className="py-24 md:py-32 bg-white relative section-dots mesh-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={header.ref}
          className={`max-w-2xl mb-16 anim-hidden ${header.isInView ? "anim-show" : ""}`}
        >
          <p className="text-xs font-bold text-ocean tracking-[0.2em] uppercase mb-3">
            Program
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight">
            Akses seluruh program
            <br />
            <span className="text-slate-400">monitoring & evaluasi</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          {programs.map((p, i) => (
            <Link
              key={p.name}
              href={p.url}
              className={`group relative bg-white border border-slate-100 rounded-[28px] p-7 gradient-border-card anim-hidden ${header.isInView ? "anim-show" : ""
                }`}
              style={{ transitionDelay: `${(i + 1) * 0.08}s` }}
            >
              <div className="flex items-start justify-between mb-5">
                <div
                  className={`w-12 h-12 rounded-2xl ${p.lightBg} flex items-center justify-center`}
                >
                  <p.icon className={`w-6 h-6 ${p.lightText} icon-bounce`} />
                </div>
                <StatusDot status={p.status} />
              </div>

              <h3 className="text-lg font-bold text-navy mb-1.5 group-hover:text-ocean transition-colors duration-300">
                {p.name}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                {p.desc}
              </p>

              <div className="flex items-center gap-1.5 text-sm font-semibold text-ocean opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                Buka Program
                <ArrowUpRight className="w-4 h-4" />
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-8 right-8 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, ${p.color}40, ${p.color}, ${p.color}40)` }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   TENTANG — Feature highlight
   ═══════════════════════════════════════════════════════ */
function TentangSection() {
  const section = useInView();

  const features = [
    {
      icon: Globe,
      title: "Akses Terpusat",
      desc: "Satu portal untuk mengakses seluruh aplikasi tanpa berpindah platform.",
    },
    {
      icon: Activity,
      title: "Real-time Monitoring",
      desc: "Pantau progres dan kinerja program secara real-time dari satu tempat.",
    },
    {
      icon: ShieldCheck,
      title: "Akuntabilitas",
      desc: "Mendukung transparansi pelaporan kinerja di seluruh unit kerja KKP.",
    },
  ];

  return (
    <section id="tentang" className="pt-12 md:pt-16 pb-24 md:pb-32 bg-softbg relative overflow-hidden">
      {/* Floating decorative shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 right-[10%] w-10 h-10 bg-ocean/[0.04] rounded-2xl rotate-12 float-shape" />
        <div className="absolute bottom-24 left-[5%] w-8 h-8 bg-ocean/[0.03] rounded-full float-shape-d1" />
        <div className="absolute top-1/2 right-[5%] w-6 h-6 bg-ocean/[0.05] rounded-xl -rotate-6 float-shape-d2" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-ocean/[0.03] rounded-full blur-[80px] -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-ocean/[0.02] rounded-full blur-[60px] translate-y-1/3 -translate-x-1/4" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <div
            ref={section.ref}
            className={`anim-hidden ${section.isInView ? "anim-show" : ""}`}
          >
            <div className="inline-flex items-center gap-2 bg-ocean/5 border border-ocean/10 rounded-full px-4 py-2 mb-4 shimmer-badge">
              <div className="w-2 h-2 rounded-full bg-emerald-400 status-pulse" />
              <span className="text-xs font-semibold text-navy/60 tracking-wide">
                Portal Resmi Biro Perencanaan KKP
              </span>
            </div>
            <p className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-1">
              <span className="text-navy">ROREN</span><span className="text-gradient-ocean">One</span>
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight mb-5">
              Satu Portal untuk
              <br />
              <span className="text-gradient-ocean">Semua Program</span>{" "}
              Strategis
            </h2>
            <p className="text-base text-slate-500 leading-relaxed mb-10 max-w-md">
              RORENOne menyatukan akses terintegrasi untuk monitoring, evaluasi, dan
              pelaporan kinerja program Biro Perencanaan KKP — semua dalam satu tempat.
            </p>

            <div className="space-y-4">
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className={`flex items-start gap-4 p-5 feature-glass rounded-2xl anim-hidden ${section.isInView ? "anim-show" : ""
                    }`}
                  style={{ transitionDelay: `${(i + 1) * 0.12}s` }}
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-ocean/15 to-ocean/5 flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-5 h-5 text-ocean" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-sm mb-0.5">{f.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Visual bento */}
          <div className={`anim-hidden-right ${section.isInView ? "anim-show-right" : ""}`}
            style={{ transitionDelay: "0.2s" }}>
            <div className="space-y-4">
              {/* Top card */}
              <div className="bg-navy rounded-3xl p-7 text-white relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-ocean/20 rounded-full blur-3xl" />
                <div className="relative">
                  <h3 className="text-xl font-extrabold mb-2">Satu Pintu, Semua Program</h3>
                  <p className="text-sm text-white/40 leading-relaxed mb-5">
                    Terintegrasi • Akuntabel • Transparan
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Monitoring", "Evaluasi", "Pelaporan", "Analisis"].map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-medium bg-white/8 border border-white/8 rounded-xl px-3.5 py-1.5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom row */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-white border border-slate-100 rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-sm">
                  <p className="text-2xl sm:text-3xl font-extrabold text-navy mb-1 counter-value">24/7</p>
                  <p className="text-[10px] sm:text-xs text-slate-400">Akses Portal</p>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-sm">
                  <p className="text-2xl sm:text-3xl font-extrabold text-navy mb-1 counter-value">99.9<span className="text-ocean text-base sm:text-lg">%</span></p>
                  <p className="text-[10px] sm:text-xs text-slate-400">Uptime Sistem</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   PENGUMUMAN
   ═══════════════════════════════════════════════════════ */
function PengumumanSection() {
  const header = useInView();

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={header.ref}
          className={`flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-4 anim-hidden ${header.isInView ? "anim-show" : ""
            }`}
        >
          <div>
            <p className="text-xs font-bold text-ocean tracking-[0.2em] uppercase mb-3">
              Terbaru
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Pengumuman & Update
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {announcements.map((a, i) => (
            <Link
              key={a.slug}
              href={`/pengumuman/${a.slug}`}
              className={`group bg-white border border-slate-100 rounded-[28px] p-6 card-hover anim-hidden ${header.isInView ? "anim-show" : ""
                }`}
              style={{ transitionDelay: `${(i + 1) * 0.08}s` }}
            >
              <div className="flex items-center justify-between mb-5">
                <span className={`text-[10px] font-bold rounded-full px-2.5 py-1 ${a.tagColor}`}>
                  {a.tag}
                </span>
                <span className="text-[11px] text-slate-300 font-medium">{a.date}</span>
              </div>

              <h3 className="font-bold text-navy text-base leading-snug mb-2 group-hover:text-ocean transition-colors duration-300">
                {a.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed line-clamp-2 mb-5">
                {a.excerpt}
              </p>

              <span className="text-xs font-semibold text-ocean flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Baca selengkapnya
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   KONTAK
   ═══════════════════════════════════════════════════════ */
function KontakSection() {
  const section = useInView();

  return (
    <section id="kontak" className="py-24 md:py-32 bg-softbg relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={section.ref}
          className={`text-center max-w-2xl mx-auto mb-14 anim-hidden ${section.isInView ? "anim-show" : ""}`}
        >
          <p className="text-xs font-bold text-ocean tracking-[0.2em] uppercase mb-3">
            Kontak
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
            Butuh Bantuan?
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            Tim helpdesk Biro Perencanaan KKP siap membantu Anda.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {[
            { icon: Mail, label: "Email", value: "biroren@kkp.go.id", bg: "bg-sky-50", text: "text-sky-600" },
            { icon: Phone, label: "Telepon", value: "(021) 3453-008", bg: "bg-amber-50", text: "text-amber-600" },
            { icon: MapPin, label: "Alamat", value: "Gedung Mina Bahari I, Lt. 4, Jakarta Pusat", bg: "bg-emerald-50", text: "text-emerald-600" },
          ].map((c, i) => (
            <div
              key={c.label}
              className={`bg-white border border-slate-100 rounded-[28px] p-6 text-center card-hover anim-hidden ${section.isInView ? "anim-show" : ""
                }`}
              style={{ transitionDelay: `${(i + 1) * 0.08}s` }}
            >
              <div className={`w-12 h-12 rounded-2xl ${c.bg} flex items-center justify-center mx-auto mb-4`}>
                <c.icon className={`w-5 h-5 ${c.text}`} />
              </div>
              <p className="text-[11px] text-slate-400 font-medium mb-1">{c.label}</p>
              <p className="text-sm font-bold text-navy">{c.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ═══════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════ */
export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <LoadingScreen />
      <Navbar />
      <TentangSection />
      <ProgramSection />
      <KontakSection />
      <Footer />
      <ScrollToTop />
      <CommandPalette />
    </main>
  );
}
