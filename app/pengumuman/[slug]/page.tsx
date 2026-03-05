"use client";

import { use } from "react";
import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    Calendar,
    Clock,
    Tag,
} from "lucide-react";
import { useInView } from "../../hooks/useInView";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

/* ─── Pengumuman Data ─── */
const pengumumanData: Record<
    string,
    {
        tag: string;
        tagColor: string;
        title: string;
        date: string;
        readTime: string;
        content: string[];
    }
> = {
    "pembaruan-sistem-rorenone-v2-1": {
        tag: "Info",
        tagColor: "bg-ocean/10 text-ocean",
        title: "Pembaruan Sistem RORENOne v2.1",
        date: "25 Februari 2026",
        readTime: "3 menit",
        content: [
            "Kami dengan senang hati mengumumkan pembaruan sistem RORENOne versi 2.1 yang membawa sejumlah peningkatan signifikan untuk pengalaman pengguna yang lebih baik.",
            "Pembaruan ini mencakup peningkatan performa dashboard sebesar 40%, tampilan antarmuka yang lebih modern dan responsif, serta penambahan fitur notifikasi real-time untuk setiap perubahan status program.",
            "Beberapa perbaikan bug juga telah dilakukan, termasuk masalah loading pada halaman laporan dan error pada export data dalam format Excel. Seluruh perbaikan ini diharapkan dapat meningkatkan produktivitas pengguna dalam melakukan monitoring dan evaluasi.",
            "Pengguna diharapkan untuk melakukan refresh browser (Ctrl+F5) setelah pembaruan diterapkan untuk mendapatkan versi terbaru. Jika mengalami kendala, silakan hubungi tim helpdesk melalui email helpdesk@kkp.go.id.",
            "Terima kasih atas dukungan dan masukan dari seluruh pengguna RORENOne. Kami terus berkomitmen untuk menyediakan platform yang andal dan mudah digunakan.",
        ],
    },
    "jadwal-maintenance-server": {
        tag: "Update Sistem",
        tagColor: "bg-gold/10 text-gold",
        title: "Jadwal Maintenance Server Malam Ini",
        date: "24 Februari 2026",
        readTime: "2 menit",
        content: [
            "Diberitahukan kepada seluruh pengguna RORENOne bahwa akan dilaksanakan maintenance server rutin pada malam ini, Senin 24 Februari 2026, pukul 22.00 – 02.00 WIB.",
            "Selama proses maintenance berlangsung, seluruh layanan portal RORENOne termasuk KinerjaKu, Monev KNMP, Monev WBK, dan Monev PHLN tidak dapat diakses. Kami mohon maaf atas ketidaknyamanan ini.",
            "Maintenance ini dilakukan untuk meningkatkan kapasitas server, memperbarui patch keamanan, serta mengoptimalkan database untuk performa yang lebih baik.",
            "Pengguna disarankan untuk menyimpan semua pekerjaan sebelum pukul 21.30 WIB untuk menghindari kehilangan data. Setelah maintenance selesai, sistem akan kembali online secara otomatis.",
            "Informasi lebih lanjut dapat menghubungi tim helpdesk di helpdesk@kkp.go.id atau telepon (021) xxxx-xxxx pada jam kerja.",
        ],
    },
    "deadline-pelaporan-kinerja-q1-2026": {
        tag: "Jadwal",
        tagColor: "bg-emerald-50 text-emerald-600",
        title: "Deadline Pelaporan Kinerja Q1 2026",
        date: "20 Februari 2026",
        readTime: "2 menit",
        content: [
            "Mengingatkan kepada seluruh unit kerja di lingkungan Biro Perencanaan KKP bahwa deadline pelaporan kinerja untuk Kuartal 1 (Q1) Tahun 2026 adalah tanggal 31 Maret 2026.",
            "Setiap unit kerja wajib menginput capaian kinerja melalui platform KinerjaKu sebelum batas waktu yang ditentukan. Pastikan seluruh indikator kinerja telah diisi lengkap beserta bukti dukung yang relevan.",
            "Untuk memastikan kelancaran proses pelaporan, berikut adalah langkah-langkah yang perlu dilakukan: (1) Login ke KinerjaKu, (2) Pilih periode Q1 2026, (3) Isi capaian untuk setiap indikator, (4) Upload bukti dukung, (5) Submit laporan untuk review atasan.",
            "Unit kerja yang belum menyelesaikan pelaporan setelah batas waktu akan diberi notifikasi pengingat. Kelengkapan dan ketepatan waktu pelaporan menjadi salah satu indikator penilaian kinerja unit.",
            "Jika mengalami kendala teknis dalam proses pelaporan, silakan hubungi tim helpdesk sebelum tanggal deadline. Tim kami siap membantu pada jam kerja Senin–Jumat, 08.00–16.00 WIB.",
        ],
    },
};

const allAnnouncements = [
    {
        slug: "pembaruan-sistem-rorenone-v2-1",
        tag: "Info",
        title: "Pembaruan Sistem RORENOne v2.1",
        date: "25 Februari 2026",
        color: "bg-ocean/10 text-ocean",
    },
    {
        slug: "jadwal-maintenance-server",
        tag: "Update Sistem",
        title: "Jadwal Maintenance Server Malam Ini",
        date: "24 Februari 2026",
        color: "bg-gold/10 text-gold",
    },
    {
        slug: "deadline-pelaporan-kinerja-q1-2026",
        tag: "Jadwal",
        title: "Deadline Pelaporan Kinerja Q1 2026",
        date: "20 Februari 2026",
        color: "bg-emerald-50 text-emerald-600",
    },
];

/* ─── Page Component ─── */
export default function PengumumanDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = use(params);
    const data = pengumumanData[slug];
    const article = useInView();
    const related = useInView();

    if (!data) {
        return (
            <main className="min-h-screen">
                <Navbar />
                <div className="max-w-6xl mx-auto px-4 py-24 text-center">
                    <h1 className="text-2xl font-bold text-navy">
                        Pengumuman tidak ditemukan
                    </h1>
                    <p className="mt-3 text-navy/50">
                        Halaman yang Anda cari tidak tersedia.
                    </p>
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

    const otherAnnouncements = allAnnouncements.filter((a) => a.slug !== slug);

    return (
        <main className="min-h-screen bg-softbg">
            <Navbar />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
                {/* Breadcrumb */}
                <nav className="mb-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-navy/50 hover:text-ocean transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Kembali ke Portal
                    </Link>
                </nav>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Article */}
                    <article
                        ref={article.ref}
                        className={`lg:col-span-2 bg-white rounded-2xl border border-border p-6 sm:p-8 anim-hidden ${article.isInView ? "anim-show" : ""
                            }`}
                    >
                        {/* Meta */}
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <span
                                className={`inline-flex items-center gap-1 text-xs font-bold rounded-full px-2.5 py-0.5 ${data.tagColor}`}
                            >
                                <Tag className="w-3 h-3" />
                                {data.tag}
                            </span>
                            <span className="flex items-center gap-1 text-xs text-navy/40">
                                <Calendar className="w-3 h-3" />
                                {data.date}
                            </span>
                            <span className="flex items-center gap-1 text-xs text-navy/40">
                                <Clock className="w-3 h-3" />
                                {data.readTime} baca
                            </span>
                        </div>

                        <h1 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight leading-tight">
                            {data.title}
                        </h1>

                        <div className="mt-6 space-y-4">
                            {data.content.map((paragraph, i) => (
                                <p
                                    key={i}
                                    className="text-sm sm:text-base text-navy/65 leading-relaxed"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="mt-8 pt-6 border-t border-border flex flex-wrap gap-3">
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-ocean text-white text-sm font-semibold rounded-xl hover:bg-ocean-light shadow-sm hover:shadow-md transition-all duration-200"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Kembali ke Portal
                            </Link>
                        </div>
                    </article>

                    {/* Sidebar - Related */}
                    <aside
                        ref={related.ref}
                        className={`space-y-4 anim-hidden-right ${related.isInView ? "anim-show-right" : ""
                            }`}
                    >
                        <h3 className="font-bold text-navy text-sm">
                            Pengumuman Lainnya
                        </h3>
                        {otherAnnouncements.map((a, i) => (
                            <Link
                                key={a.slug}
                                href={`/pengumuman/${a.slug}`}
                                className={`block bg-white rounded-xl border border-border p-4 hover:border-ocean hover:shadow-sm transition-all duration-300 anim-hidden ${related.isInView ? "anim-show" : ""
                                    }`}
                                style={{ transitionDelay: `${(i + 1) * 0.1}s` }}
                            >
                                <span
                                    className={`inline-block text-[10px] font-bold rounded-full px-2 py-0.5 ${a.color}`}
                                >
                                    {a.tag}
                                </span>
                                <h4 className="mt-2 text-sm font-bold text-navy leading-snug">
                                    {a.title}
                                </h4>
                                <p className="mt-1 text-xs text-navy/40">{a.date}</p>
                                <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-ocean">
                                    Baca <ArrowRight className="w-3 h-3" />
                                </span>
                            </Link>
                        ))}
                    </aside>
                </div>
            </div>

            <Footer />
        </main>
    );
}
