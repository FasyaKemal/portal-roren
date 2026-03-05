"use client";

import { use } from "react";
import Link from "next/link";
import {
    BarChart3,
    ClipboardCheck,
    ShieldCheck,
    Landmark,
    ArrowLeft,
    ArrowRight,
    CheckCircle2,
    ExternalLink,
    ChevronRight,
    Zap,
    FileText,
    Users,
    TrendingUp,
    Target,
    Shield,
    Globe,
    BarChart,
    PieChart,
    CalendarCheck,
    FolderOpen,
    Activity,
} from "lucide-react";
import { useInView } from "../../hooks/useInView";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

/* ─── Program Data ─── */
const programsData: Record<
    string,
    {
        name: string;
        tagline: string;
        description: string;
        icon: typeof BarChart3;
        status: "online" | "maintenance" | "coming_soon";
        color: string;
        features: { title: string; desc: string; icon: typeof Zap }[];
        stats: { label: string; value: string }[];
        screenshots: { title: string; desc: string }[];
    }
> = {
    kinerjaku: {
        name: "KinerjaKu",
        tagline: "Pengelolaan Kinerja Organisasi Terintegrasi",
        description:
            "KinerjaKu adalah platform untuk mengelola, memonitor, dan melaporkan capaian kinerja organisasi di lingkungan Biro Perencanaan KKP. Dengan KinerjaKu, setiap unit kerja dapat memantau progres pencapaian sasaran strategis secara real-time, menetapkan target kinerja, serta menghasilkan laporan kinerja yang akurat dan tepat waktu.",
        icon: BarChart3,
        status: "online",
        color: "from-ocean to-sky-400",
        features: [
            {
                title: "Dashboard Real-time",
                desc: "Pantau progres kinerja organisasi secara langsung melalui dashboard interaktif dengan visualisasi data yang komprehensif.",
                icon: Activity,
            },
            {
                title: "Penetapan Sasaran",
                desc: "Tetapkan dan kelola sasaran kinerja sesuai Rencana Strategis dan Rencana Kerja Tahunan organisasi.",
                icon: Target,
            },
            {
                title: "Pelaporan Otomatis",
                desc: "Generate laporan kinerja periodik secara otomatis dalam berbagai format (PDF, Excel) sesuai kebutuhan.",
                icon: FileText,
            },
            {
                title: "Manajemen Pengguna",
                desc: "Kelola hak akses pengguna berdasarkan unit kerja dan peran masing-masing.",
                icon: Users,
            },
        ],
        stats: [
            { label: "Unit Aktif", value: "24" },
            { label: "Pengguna", value: "156" },
            { label: "Laporan / Bulan", value: "48" },
            { label: "Capaian Rata-rata", value: "92%" },
        ],
        screenshots: [
            {
                title: "Dashboard Utama",
                desc: "Tampilan ringkas capaian kinerja seluruh unit kerja dalam satu halaman.",
            },
            {
                title: "Detail Kinerja Unit",
                desc: "Breakdown pencapaian setiap indikator kinerja per unit kerja.",
            },
            {
                title: "Laporan Kinerja",
                desc: "Halaman pembuatan dan export laporan kinerja periodik.",
            },
        ],
    },
    knmp: {
        name: "Monev KNMP",
        tagline: "Monitoring & Evaluasi KNMP Secara Periodik",
        description:
            "Monev KNMP adalah sistem monitoring dan evaluasi Kebijakan Nasional Manajemen Pemerintahan yang memungkinkan pemantauan progres pelaksanaan kebijakan secara terpusat. Platform ini mendukung siklus perencanaan-pelaksanaan-pelaporan dengan data yang akurat dan terstruktur.",
        icon: ClipboardCheck,
        status: "online",
        color: "from-emerald-500 to-teal-400",
        features: [
            {
                title: "Tracking Kebijakan",
                desc: "Lacak implementasi setiap kebijakan dari tahap perencanaan hingga evaluasi dampak.",
                icon: TrendingUp,
            },
            {
                title: "Evaluasi Periodik",
                desc: "Lakukan evaluasi berkala dengan template terstruktur dan indikator yang konsisten.",
                icon: CalendarCheck,
            },
            {
                title: "Analisis Kinerja",
                desc: "Analisis pencapaian kebijakan dengan grafik dan visualisasi data yang intuitif.",
                icon: PieChart,
            },
            {
                title: "Dokumentasi Lengkap",
                desc: "Simpan dan kelola seluruh dokumen pendukung evaluasi secara terpusat.",
                icon: FolderOpen,
            },
        ],
        stats: [
            { label: "Kebijakan Aktif", value: "12" },
            { label: "Evaluasi / Tahun", value: "36" },
            { label: "Indikator", value: "84" },
            { label: "Capaian", value: "88%" },
        ],
        screenshots: [
            {
                title: "Overview KNMP",
                desc: "Ringkasan status seluruh kebijakan yang sedang dipantau.",
            },
            {
                title: "Detail Evaluasi",
                desc: "Form evaluasi dengan indikator terstruktur per kebijakan.",
            },
            {
                title: "Laporan Analisis",
                desc: "Laporan analisis tren capaian kebijakan dari waktu ke waktu.",
            },
        ],
    },
    wbk: {
        name: "Monev WBK",
        tagline: "Pemantauan Zona Integritas & WBK/WBBM",
        description:
            "Monev WBK mendukung upaya pembangunan Zona Integritas menuju Wilayah Bebas dari Korupsi (WBK) dan Wilayah Birokrasi Bersih dan Melayani (WBBM). Platform ini memfasilitasi penilaian mandiri, pemantauan progress, dan dokumentasi bukti dukung secara digital.",
        icon: ShieldCheck,
        status: "maintenance",
        color: "from-amber-500 to-orange-400",
        features: [
            {
                title: "Penilaian Mandiri",
                desc: "Lakukan self-assessment Zona Integritas dengan panduan dan template yang terstandar.",
                icon: Shield,
            },
            {
                title: "Monitoring Progress",
                desc: "Pantau progres pembangunan ZI secara berkala dengan milestone yang jelas.",
                icon: BarChart,
            },
            {
                title: "Upload Bukti Dukung",
                desc: "Unggah dan kelola dokumen bukti dukung untuk setiap komponen penilaian.",
                icon: FolderOpen,
            },
            {
                title: "Laporan ZI",
                desc: "Generate laporan Zona Integritas lengkap untuk keperluan penilaian eksternal.",
                icon: FileText,
            },
        ],
        stats: [
            { label: "Unit Dinilai", value: "18" },
            { label: "Komponen", value: "6" },
            { label: "Bukti Dukung", value: "240+" },
            { label: "Skor Rata-rata", value: "85" },
        ],
        screenshots: [
            {
                title: "Dashboard ZI",
                desc: "Status capaian Zona Integritas seluruh unit kerja.",
            },
            {
                title: "Penilaian Komponen",
                desc: "Detail penilaian per komponen ZI dengan progress bar.",
            },
            {
                title: "Bukti Dukung",
                desc: "Manajemen dokumen bukti dukung per komponen.",
            },
        ],
    },
    phln: {
        name: "Monev PHLN",
        tagline: "Monitoring PHLN & Progres Pelaksanaan",
        description:
            "Monev PHLN adalah sistem monitoring untuk Pinjaman dan Hibah Luar Negeri yang dikelola oleh Biro Perencanaan KKP. Platform ini mencatat progress pelaksanaan, penyerapan anggaran, dan pencapaian output dari setiap proyek PHLN secara komprehensif.",
        icon: Landmark,
        status: "online",
        color: "from-violet-500 to-purple-400",
        features: [
            {
                title: "Tracking Proyek",
                desc: "Lacak progress setiap proyek PHLN dari perencanaan hingga penyelesaian.",
                icon: Globe,
            },
            {
                title: "Monitoring Penyerapan",
                desc: "Pantau penyerapan anggaran secara real-time dengan perbandingan target dan realisasi.",
                icon: TrendingUp,
            },
            {
                title: "Output & Outcome",
                desc: "Catat pencapaian output dan outcome proyek sesuai logical framework.",
                icon: Target,
            },
            {
                title: "Laporan Donor",
                desc: "Buat laporan progress untuk lembaga donor sesuai format yang disepakati.",
                icon: FileText,
            },
        ],
        stats: [
            { label: "Proyek Aktif", value: "8" },
            { label: "Total Anggaran", value: "$24.5M" },
            { label: "Penyerapan", value: "76%" },
            { label: "Output Tercapai", value: "68%" },
        ],
        screenshots: [
            {
                title: "Overview Proyek",
                desc: "Ringkasan seluruh proyek PHLN yang sedang berjalan.",
            },
            {
                title: "Penyerapan Anggaran",
                desc: "Grafik penyerapan anggaran per proyek dan periode.",
            },
            {
                title: "Laporan Progress",
                desc: "Laporan progress proyek untuk stakeholder dan donor.",
            },
        ],
    },
};

/* ─── Status Badge ─── */
function StatusBadge({
    status,
}: {
    status: "online" | "maintenance" | "coming_soon";
}) {
    const config = {
        online: {
            label: "Online",
            dot: "bg-emerald-500",
            bg: "bg-emerald-50 text-emerald-700 border-emerald-200",
        },
        maintenance: {
            label: "Maintenance",
            dot: "bg-amber-500",
            bg: "bg-amber-50 text-amber-700 border-amber-200",
        },
        coming_soon: {
            label: "Coming Soon",
            dot: "bg-slate-400",
            bg: "bg-slate-50 text-slate-600 border-slate-200",
        },
    };
    const c = config[status];
    return (
        <span
            className={`inline-flex items-center gap-1.5 text-xs font-bold rounded-full px-3 py-1 border ${c.bg}`}
        >
            <span className={`w-2 h-2 rounded-full ${c.dot} status-pulse`} />
            {c.label}
        </span>
    );
}

/* ─── Page Component ─── */
export default function ProgramDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = use(params);
    const program = programsData[slug];
    const hero = useInView();
    const features = useInView();
    const preview = useInView();
    const stats = useInView();

    if (!program) {
        return (
            <main className="min-h-screen">
                <Navbar />
                <div className="max-w-6xl mx-auto px-4 py-24 text-center">
                    <h1 className="text-2xl font-bold text-navy">Program tidak ditemukan</h1>
                    <p className="mt-3 text-navy/50">Halaman yang Anda cari tidak tersedia.</p>
                    <Link
                        href="/"
                        className="mt-6 inline-flex items-center gap-2 text-ocean font-semibold hover:text-ocean-light transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Kembali ke Portal
                    </Link>
                </div>
                <Footer />
            </main>
        );
    }

    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Hero */}
            <section className={`relative overflow-hidden bg-gradient-to-br ${program.color} text-white`}>
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    {/* Breadcrumb */}
                    <nav className="mb-8 flex items-center gap-2 text-sm font-medium">
                        <Link
                            href="/"
                            className="text-white/50 hover:text-white transition-colors"
                        >
                            Portal
                        </Link>
                        <ChevronRight className="w-3.5 h-3.5 text-white/30" />
                        <Link
                            href="/#program"
                            className="text-white/50 hover:text-white transition-colors"
                        >
                            Program
                        </Link>
                        <ChevronRight className="w-3.5 h-3.5 text-white/30" />
                        <span className="text-white/90">
                            {program.name}
                        </span>
                    </nav>

                    <div
                        ref={hero.ref}
                        className={`max-w-2xl anim-hidden ${hero.isInView ? "anim-show" : ""}`}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                <program.icon className="w-7 h-7 text-white" />
                            </div>
                            <StatusBadge status={program.status} />
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                            {program.name}
                        </h1>
                        <p className="mt-2 text-lg sm:text-xl text-white/80 font-medium">
                            {program.tagline}
                        </p>
                        <p className="mt-4 text-white/60 leading-relaxed max-w-xl">
                            {program.description}
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-navy font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
                                Akses {program.name}
                                <ExternalLink className="w-4 h-4" />
                            </button>
                            <Link
                                href="/#program"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-200"
                            >
                                Lihat Program Lain
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 bg-white border-b border-border">
                <div
                    ref={stats.ref}
                    className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
                >
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                        {program.stats.map((s, i) => (
                            <div
                                key={s.label}
                                className={`text-center anim-hidden ${stats.isInView ? "anim-show" : ""}`}
                                style={{ transitionDelay: `${i * 0.1}s` }}
                            >
                                <p className="text-2xl sm:text-3xl font-extrabold text-navy">
                                    {s.value}
                                </p>
                                <p className="text-sm text-navy/50 mt-1">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-16 md:py-20 bg-softbg">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                        ref={features.ref}
                        className={`text-center max-w-2xl mx-auto mb-12 anim-hidden ${features.isInView ? "anim-show" : ""}`}
                    >
                        <span className="text-xs font-bold tracking-widest text-ocean uppercase">
                            Fitur Utama
                        </span>
                        <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
                            Yang Bisa Anda Lakukan
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {program.features.map((f, i) => (
                            <div
                                key={f.title}
                                className={`bg-white rounded-2xl border border-border p-6 hover:border-ocean hover:shadow-md transition-all duration-300 anim-hidden ${features.isInView ? "anim-show" : ""
                                    }`}
                                style={{ transitionDelay: `${(i + 1) * 0.1}s` }}
                            >
                                <div className="w-11 h-11 rounded-xl bg-ocean/10 flex items-center justify-center mb-4">
                                    <f.icon className="w-5 h-5 text-ocean" />
                                </div>
                                <h3 className="font-bold text-navy text-base">{f.title}</h3>
                                <p className="mt-2 text-sm text-navy/50 leading-relaxed">
                                    {f.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Preview / Screenshots */}
            <section className="py-16 md:py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                        ref={preview.ref}
                        className={`text-center max-w-2xl mx-auto mb-12 anim-hidden ${preview.isInView ? "anim-show" : ""}`}
                    >
                        <span className="text-xs font-bold tracking-widest text-ocean uppercase">
                            Preview
                        </span>
                        <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
                            Tampilan Aplikasi
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-6">
                        {program.screenshots.map((s, i) => (
                            <div
                                key={s.title}
                                className={`group anim-hidden ${preview.isInView ? "anim-show" : ""}`}
                                style={{ transitionDelay: `${(i + 1) * 0.1}s` }}
                            >
                                {/* Mock screenshot */}
                                <div className="aspect-video rounded-2xl bg-gradient-to-br from-softbg to-border/30 border border-border overflow-hidden mb-4 group-hover:shadow-md transition-shadow">
                                    <div className="w-full h-full flex items-center justify-center p-4">
                                        <div className="w-full space-y-2">
                                            <div className="flex items-center gap-2 mb-3">
                                                <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
                                                <div className="w-2.5 h-2.5 rounded-full bg-amber-300" />
                                                <div className="w-2.5 h-2.5 rounded-full bg-emerald-300" />
                                                <div className="flex-1 h-4 rounded bg-border/50 ml-2" />
                                            </div>
                                            <div className="h-3 rounded bg-border/40 w-3/4" />
                                            <div className="h-3 rounded bg-border/30 w-1/2" />
                                            <div className="grid grid-cols-3 gap-1.5 mt-3">
                                                <div className="h-8 rounded bg-ocean/10" />
                                                <div className="h-8 rounded bg-gold/10" />
                                                <div className="h-8 rounded bg-emerald-50" />
                                            </div>
                                            <div className="h-12 rounded bg-border/20 mt-2" />
                                        </div>
                                    </div>
                                </div>
                                <h3 className="font-bold text-navy text-sm">{s.title}</h3>
                                <p className="mt-1 text-xs text-navy/50">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={`py-16 bg-gradient-to-br ${program.color}`}>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                        Mulai Gunakan {program.name}
                    </h2>
                    <p className="mt-3 text-white/70 max-w-lg mx-auto">
                        Akses langsung ke platform {program.name} untuk mengelola dan
                        monitoring program Anda.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-navy font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
                            Akses Sekarang
                            <ArrowRight className="w-4 h-4" />
                        </button>
                        <Link
                            href="/#kontak"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-200"
                        >
                            Hubungi Helpdesk
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
