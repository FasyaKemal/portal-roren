"use client";

import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-softbg flex items-center justify-center px-4">
            <div className="text-center max-w-md">
                {/* Animated 404 */}
                <div className="relative mb-8">
                    <div className="text-[8rem] font-extrabold text-navy/5 leading-none select-none">
                        404
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-3xl bg-ocean/10 flex items-center justify-center">
                            <SearchX className="w-10 h-10 text-ocean" />
                        </div>
                    </div>
                </div>

                <h1 className="text-2xl sm:text-3xl font-extrabold text-navy mb-3">
                    Halaman Tidak Ditemukan
                </h1>
                <p className="text-slate-400 text-base mb-8 leading-relaxed">
                    Maaf, halaman yang Anda cari tidak tersedia atau telah
                    dipindahkan.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                        href="/"
                        className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-navy text-white font-semibold rounded-2xl hover:bg-navy-light shadow-lg shadow-navy/15 hover:shadow-xl transition-all duration-300"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                        Kembali ke Portal
                    </Link>
                    <Link
                        href="/#program"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 text-navy font-semibold rounded-2xl border border-slate-200 hover:border-ocean/30 hover:text-ocean hover:bg-ocean/5 transition-all duration-300"
                    >
                        Lihat Program
                    </Link>
                </div>
            </div>
        </main>
    );
}
