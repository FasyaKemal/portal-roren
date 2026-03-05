"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    BarChart3,
    ClipboardCheck,
    ShieldCheck,
    Landmark,
    ChevronDown,
    Menu,
    X,
} from "lucide-react";

const programs = [
    {
        name: "KinerjaKu",
        desc: "Pengelolaan kinerja organisasi terintegrasi.",
        url: "/program/kinerjaku",
        icon: BarChart3,
    },
    {
        name: "Monev KNMP",
        desc: "Monitoring & evaluasi KNMP secara periodik.",
        url: "/program/knmp",
        icon: ClipboardCheck,
    },
    {
        name: "Monev WBK",
        desc: "Pemantauan pembangunan Zona Integritas/WBK.",
        url: "/program/wbk",
        icon: ShieldCheck,
    },
    {
        name: "Monev PHLN",
        desc: "Monitoring PHLN & progres pelaksanaan.",
        url: "/program/phln",
        icon: Landmark,
    },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileProgram, setMobileProgram] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target as Node)
            ) {
                setDropdownOpen(false);
            }
        }
        function handleEsc(e: KeyboardEvent) {
            if (e.key === "Escape") {
                setDropdownOpen(false);
                setMobileOpen(false);
            }
        }
        function handleScroll() {
            setScrolled(window.scrollY > 10);

            // Detect active section — order must be top→bottom so last match wins
            const sections = ["tentang", "program", "kontak"];
            let current = "home";
            for (const id of sections) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 150) {
                        current = id;
                    }
                }
            }
            setActiveSection(current);
        }
        document.addEventListener("mousedown", handleClick);
        document.addEventListener("keydown", handleEsc);
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => {
            document.removeEventListener("mousedown", handleClick);
            document.removeEventListener("keydown", handleEsc);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navLink = (active: boolean) =>
        `text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 rounded-lg px-3 py-2 ${active
            ? "text-ocean"
            : "text-navy/70 hover:text-ocean"
        }`;

    return (
        <nav
            className={`sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b transition-all duration-300 ${scrolled ? "border-border shadow-sm" : "border-transparent"
                }`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="flex items-center gap-1.5">
                        <Image
                            src="/logo-kkp.png"
                            alt="Logo KKP"
                            width={40}
                            height={40}
                            className="h-10 w-auto object-contain"
                        />
                        <Image
                            src="/logo-kkp-aniv.png"
                            alt="KKP 2026"
                            width={44}
                            height={40}
                            className="h-10 w-auto object-contain"
                        />
                    </div>
                    <div className="leading-tight">
                        <span className="font-extrabold text-navy text-base tracking-tight">
                            ROREN<span className="text-ocean">One</span>
                        </span>
                        <p className="text-[10px] text-navy/50 font-medium">
                            Biro Perencanaan • KKP RI
                        </p>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-1">

                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={navLink(activeSection === "home" || activeSection === "tentang")}>
                        Home
                    </button>

                    {/* Dropdown Program */}
                    <div ref={dropdownRef} className="relative">
                        <button
                            onClick={() => setDropdownOpen((p) => !p)}
                            className={`${navLink(activeSection === "program")} inline-flex items-center gap-1`}
                            aria-expanded={dropdownOpen}
                            aria-controls="program-dropdown"
                        >
                            Program
                            <ChevronDown
                                className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        <div
                            id="program-dropdown"
                            role="menu"
                            className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-2xl shadow-lg border border-border p-2 transition-all duration-200 origin-top ${dropdownOpen
                                ? "opacity-100 scale-100 translate-y-0"
                                : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                                }`}
                        >
                            {programs.map((p) => (
                                <Link
                                    key={p.name}
                                    href={p.url}
                                    role="menuitem"
                                    onClick={() => setDropdownOpen(false)}
                                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-softbg transition-colors group"
                                >
                                    <div className="w-9 h-9 rounded-lg bg-ocean/10 flex items-center justify-center group-hover:bg-ocean/20 transition-colors">
                                        <p.icon className="w-4.5 h-4.5 text-ocean" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-navy">{p.name}</p>
                                        <p className="text-xs text-navy/50">{p.desc}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <a href="/#kontak" className={navLink(activeSection === "kontak")}>
                        Kontak
                    </a>
                </div>

                {/* Hamburger */}
                <button
                    className="md:hidden p-2 rounded-xl hover:bg-softbg transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400"
                    onClick={() => setMobileOpen((p) => !p)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? (
                        <X className="w-5 h-5 text-navy" />
                    ) : (
                        <Menu className="w-5 h-5 text-navy" />
                    )}
                </button>
            </div>

            {/* Mobile Panel */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="px-4 pb-4 pt-1 space-y-1 border-t border-border bg-white">

                    <button
                        onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMobileOpen(false); }}
                        className={`block w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${activeSection === "home" || activeSection === "tentang" ? "text-ocean bg-ocean/5" : "text-navy/70 hover:bg-softbg hover:text-ocean"
                            }`}
                    >
                        Home
                    </button>

                    {/* Mobile Program accordion */}
                    <div>
                        <button
                            onClick={() => setMobileProgram((p) => !p)}
                            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${activeSection === "program" ? "text-ocean bg-ocean/5" : "text-navy/70 hover:bg-softbg hover:text-ocean"
                                }`}
                        >
                            Program
                            <ChevronDown
                                className={`w-4 h-4 transition-transform duration-200 ${mobileProgram ? "rotate-180" : ""
                                    }`}
                            />
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-200 ${mobileProgram ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >
                            {programs.map((p) => (
                                <Link
                                    key={p.name}
                                    href={p.url}
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center gap-3 pl-6 pr-3 py-2 text-sm text-navy/60 hover:text-ocean transition-colors"
                                >
                                    <p.icon className="w-4 h-4" />
                                    {p.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <a
                        href="/#kontak"
                        onClick={() => setMobileOpen(false)}
                        className={`block px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${activeSection === "kontak" ? "text-ocean bg-ocean/5" : "text-navy/70 hover:bg-softbg hover:text-ocean"
                            }`}
                    >
                        Kontak
                    </a>

                </div>
            </div>
        </nav>
    );
}
