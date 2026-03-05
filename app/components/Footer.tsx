import Link from "next/link";
import { Layers } from "lucide-react";

const programs = [
    { name: "KinerjaKu", url: "/program/kinerjaku" },
    { name: "Monev KNMP", url: "/program/knmp" },
    { name: "Monev WBK", url: "/program/wbk" },
    { name: "Monev PHLN", url: "/program/phln" },
];

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-navy text-white relative">
            {/* Gradient accent line */}
            <div className="footer-gradient-line" />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* Brand */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-ocean flex items-center justify-center">
                                <Layers className="w-4 h-4 text-white" />
                            </div>
                            <span className="font-extrabold text-base">
                                ROREN<span className="text-ocean-light">One</span>
                            </span>
                        </div>
                        <p className="text-sm text-white/50 leading-relaxed">
                            Satu Pintu Program Biro Perencanaan KKP — Terintegrasi •
                            Akuntabel • Transparan
                        </p>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h4 className="font-bold text-sm mb-4">Link Cepat</h4>
                        <ul className="space-y-2">
                            {[
                                { label: "Home", href: "/" },
                                { label: "Program", href: "/#program" },
                                { label: "Kontak", href: "/#kontak" },
                            ].map((l) => (
                                <li key={l.label}>
                                    <a
                                        href={l.href}
                                        className="text-sm text-white/50 hover:text-ocean-light transition-colors"
                                    >
                                        {l.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Program links */}
                    <div>
                        <h4 className="font-bold text-sm mb-4">Program</h4>
                        <ul className="space-y-2">
                            {programs.map((p) => (
                                <li key={p.name}>
                                    <Link
                                        href={p.url}
                                        className="text-sm text-white/50 hover:text-ocean-light transition-colors"
                                    >
                                        {p.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-10 pt-6 border-t border-white/10 text-center">
                    <p className="text-xs text-white/40">
                        © {year} Biro Perencanaan – Kementerian Kelautan dan Perikanan RI
                    </p>
                </div>
            </div>
        </footer>
    );
}
