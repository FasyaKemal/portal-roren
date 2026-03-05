"use client";

import Link from "next/link";
import {
    BarChart3,
    ClipboardCheck,
    ShieldCheck,
    Landmark,
    ArrowRight,
    Activity,
    CheckCircle2,
    AlertCircle,
    FileText,
    Users,
    TrendingUp,
    Clock,
    Zap,
} from "lucide-react";
import { useInView, useCounter } from "../hooks/useInView";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* ─── Data ─── */
const programs = [
    {
        name: "KinerjaKu",
        url: "/program/kinerjaku",
        icon: BarChart3,
        status: "online" as const,
        color: "from-ocean to-sky-400",
    },
    {
        name: "Monev KNMP",
        url: "/program/knmp",
        icon: ClipboardCheck,
        status: "online" as const,
        color: "from-emerald-500 to-teal-400",
    },
    {
        name: "Monev WBK",
        url: "/program/wbk",
        icon: ShieldCheck,
        status: "maintenance" as const,
        color: "from-amber-500 to-orange-400",
    },
    {
        name: "Monev PHLN",
        url: "/program/phln",
        icon: Landmark,
        status: "online" as const,
        color: "from-violet-500 to-purple-400",
    },
];

const activities = [
    {
        action: "Laporan Kinerja Q4 2025 dikirim",
        user: "Unit Perencanaan I",
        time: "2 jam lalu",
        icon: FileText,
        color: "bg-ocean/10 text-ocean",
    },
    {
        action: "Update progres Monev KNMP",
        user: "Tim Evaluasi",
        time: "4 jam lalu",
        icon: TrendingUp,
        color: "bg-emerald-50 text-emerald-600",
    },
    {
        action: "Pengguna baru ditambahkan",
        user: "Admin Sistem",
        time: "5 jam lalu",
        icon: Users,
        color: "bg-violet-50 text-violet-600",
    },
    {
        action: "Bukti dukung ZI diunggah",
        user: "Unit Perencanaan II",
        time: "6 jam lalu",
        icon: CheckCircle2,
        color: "bg-gold/10 text-gold",
    },
    {
        action: "Penyerapan PHLN diperbarui",
        user: "Tim PHLN",
        time: "1 hari lalu",
        icon: Activity,
        color: "bg-sky-50 text-sky-600",
    },
    {
        action: "Maintenance server selesai",
        user: "Tim IT",
        time: "1 hari lalu",
        icon: Zap,
        color: "bg-amber-50 text-amber-600",
    },
];

/* ─── Status Badge ─── */
function StatusDot({ status }: { status: "online" | "maintenance" | "coming_soon" }) {
    const colors = {
        online: "bg-emerald-500",
        maintenance: "bg-amber-500",
        coming_soon: "bg-slate-400",
    };
    const labels = {
        online: "Online",
        maintenance: "Maintenance",
        coming_soon: "Coming Soon",
    };
    return (
        <span className="flex items-center gap-1.5 text-xs font-medium text-navy/50">
            <span className={`w-2 h-2 rounded-full ${colors[status]} status-pulse`} />
            {labels[status]}
        </span>
    );
}

/* ─── Chart Bar ─── */
function ChartSection() {
    const chart = useInView();
    const months = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
    const values = [65, 72, 58, 80, 76, 90, 85, 78, 88, 82, 91, 95];

    return (
        <div
            ref={chart.ref}
            className={`bg-white rounded-2xl border border-border p-6 anim-hidden ${chart.isInView ? "anim-show" : ""
                }`}
        >
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="font-bold text-navy text-base">Progres Kinerja Bulanan</h3>
                    <p className="text-xs text-navy/40 mt-0.5">Capaian kinerja rata-rata per bulan</p>
                </div>
                <span className="text-xs font-semibold text-ocean bg-ocean/10 rounded-full px-2.5 py-1">
                    2026
                </span>
            </div>

            <div className="flex items-end gap-2 h-44">
                {values.map((v, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <span className="text-[9px] font-semibold text-navy/40">
                            {chart.isInView ? `${v}%` : ""}
                        </span>
                        <div
                            className={`w-full rounded-t-md bg-gradient-to-t from-ocean to-ocean-light ${chart.isInView ? "bar-grow" : ""
                                }`}
                            style={{
                                height: `${v * 1.5}px`,
                                animationDelay: `${i * 0.06}s`,
                            }}
                        />
                    </div>
                ))}
            </div>
            <div className="flex justify-between mt-2 text-[9px] text-navy/30 font-medium px-1">
                {months.map((m) => (
                    <span key={m}>{m}</span>
                ))}
            </div>
        </div>
    );
}

/* ─── Page ─── */
export default function DashboardPage() {
    const header = useInView();
    const cards = useInView();
    const quickLinks = useInView();
    const activitySection = useInView();

    const totalProgram = useCounter(4, 1500, 0, cards.isInView);
    const totalLaporan = useCounter(128, 2000, 0, cards.isInView);
    const kinerja = useCounter(92, 2000, 0, cards.isInView);

    return (
        <main className="min-h-screen bg-softbg">
            <Navbar />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
                {/* Header */}
                <div
                    ref={header.ref}
                    className={`mb-10 anim-hidden ${header.isInView ? "anim-show" : ""}`}
                >
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
                        Dashboard Overview
                    </h1>
                    <p className="mt-2 text-navy/50 text-base">
                        Ringkasan status dan aktivitas terkini portal RORENOne.
                    </p>
                </div>

                {/* Summary Cards */}
                <div
                    ref={cards.ref}
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8"
                >
                    {[
                        {
                            label: "Total Program",
                            value: totalProgram.toString(),
                            sub: "Program aktif",
                            icon: Activity,
                            color: "bg-ocean/10 text-ocean",
                            iconBg: "bg-ocean/10",
                        },
                        {
                            label: "Laporan Masuk",
                            value: totalLaporan.toString(),
                            sub: "+12 bulan ini",
                            icon: FileText,
                            color: "bg-gold/10 text-gold",
                            iconBg: "bg-gold/10",
                        },
                        {
                            label: "Kinerja",
                            value: `${kinerja}%`,
                            sub: "Capaian rata-rata",
                            icon: TrendingUp,
                            color: "bg-emerald-50 text-emerald-600",
                            iconBg: "bg-emerald-50",
                        },
                        {
                            label: "Status Sistem",
                            value: "Aktif",
                            sub: "Semua normal",
                            icon: CheckCircle2,
                            color: "bg-sky-50 text-sky-600",
                            iconBg: "bg-sky-50",
                        },
                    ].map((card, i) => (
                        <div
                            key={card.label}
                            className={`bg-white rounded-2xl border border-border p-5 hover:border-ocean hover:shadow-md transition-all duration-300 anim-hidden ${cards.isInView ? "anim-show" : ""
                                }`}
                            style={{ transitionDelay: `${i * 0.1}s` }}
                        >
                            <div className="flex items-center justify-between mb-3">
                                <p className="text-xs font-medium text-navy/40">
                                    {card.label}
                                </p>
                                <div
                                    className={`w-9 h-9 rounded-xl ${card.iconBg} flex items-center justify-center`}
                                >
                                    <card.icon
                                        className={`w-4.5 h-4.5 ${card.color.split(" ")[1]}`}
                                    />
                                </div>
                            </div>
                            <p className="text-2xl font-extrabold text-navy">{card.value}</p>
                            <p className="text-xs text-navy/40 mt-0.5">{card.sub}</p>
                        </div>
                    ))}
                </div>

                {/* Chart + Quick Links row */}
                <div className="grid lg:grid-cols-3 gap-6 mb-8">
                    <div className="lg:col-span-2">
                        <ChartSection />
                    </div>

                    {/* Quick Links */}
                    <div
                        ref={quickLinks.ref}
                        className={`bg-white rounded-2xl border border-border p-6 anim-hidden-right ${quickLinks.isInView ? "anim-show-right" : ""
                            }`}
                    >
                        <h3 className="font-bold text-navy text-base mb-4">Akses Cepat</h3>
                        <div className="space-y-3">
                            {programs.map((p, i) => (
                                <Link
                                    key={p.name}
                                    href={p.url}
                                    className={`flex items-center gap-3 p-3 rounded-xl hover:bg-softbg transition-all duration-200 group anim-hidden ${quickLinks.isInView ? "anim-show" : ""
                                        }`}
                                    style={{ transitionDelay: `${(i + 1) * 0.1}s` }}
                                >
                                    <div
                                        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center shadow-sm`}
                                    >
                                        <p.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-semibold text-navy">
                                            {p.name}
                                        </p>
                                        <StatusDot status={p.status} />
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-navy/30 group-hover:text-ocean group-hover:translate-x-0.5 transition-all" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Activity Log */}
                <div
                    ref={activitySection.ref}
                    className={`bg-white rounded-2xl border border-border p-6 anim-hidden ${activitySection.isInView ? "anim-show" : ""
                        }`}
                >
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h3 className="font-bold text-navy text-base">Aktivitas Terkini</h3>
                            <p className="text-xs text-navy/40 mt-0.5">Log aktivitas seluruh program</p>
                        </div>
                        <span className="flex items-center gap-1 text-[10px] font-semibold text-ocean bg-ocean/10 rounded-full px-2.5 py-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 status-pulse" />
                            Live
                        </span>
                    </div>

                    <div className="space-y-1">
                        {activities.map((a, i) => (
                            <div
                                key={i}
                                className={`flex items-center gap-4 p-3 rounded-xl hover:bg-softbg transition-colors anim-hidden ${activitySection.isInView ? "anim-show" : ""
                                    }`}
                                style={{ transitionDelay: `${(i + 1) * 0.08}s` }}
                            >
                                <div
                                    className={`w-9 h-9 rounded-lg ${a.color.split(" ")[0]} flex items-center justify-center flex-shrink-0`}
                                >
                                    <a.icon
                                        className={`w-4 h-4 ${a.color.split(" ")[1]}`}
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-navy truncate">
                                        {a.action}
                                    </p>
                                    <p className="text-xs text-navy/40">{a.user}</p>
                                </div>
                                <div className="flex items-center gap-1 text-xs text-navy/30 flex-shrink-0">
                                    <Clock className="w-3 h-3" />
                                    {a.time}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
