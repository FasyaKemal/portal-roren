"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import {
    Search,
    X,
    BarChart3,
    ClipboardCheck,
    ShieldCheck,
    Landmark,
    Home,
    Phone,
    Command,
} from "lucide-react";

const items = [
    {
        category: "Halaman",
        results: [
            { label: "Home", href: "/", icon: Home },
            { label: "Kontak Helpdesk", href: "/#kontak", icon: Phone },
        ],
    },
    {
        category: "Program",
        results: [
            { label: "KinerjaKu", href: "/program/kinerjaku", icon: BarChart3 },
            { label: "Monev KNMP", href: "/program/knmp", icon: ClipboardCheck },
            { label: "Monev WBK", href: "/program/wbk", icon: ShieldCheck },
            { label: "Monev PHLN", href: "/program/phln", icon: Landmark },
        ],
    },
];

export default function CommandPalette() {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const [selectedIndex, setSelectedIndex] = useState(0);

    // Flatten results for keyboard navigation
    const flatResults = items.flatMap((g) => g.results);
    const filtered = query.trim()
        ? flatResults.filter((r) =>
            r.label.toLowerCase().includes(query.toLowerCase())
        )
        : flatResults;

    const toggle = useCallback(() => {
        setOpen((p) => {
            if (!p) {
                setQuery("");
                setSelectedIndex(0);
            }
            return !p;
        });
    }, []);

    useEffect(() => {
        function handleKey(e: KeyboardEvent) {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                toggle();
            }
            if (e.key === "Escape") {
                setOpen(false);
            }
        }
        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [toggle]);

    useEffect(() => {
        if (open) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [open]);

    useEffect(() => {
        setSelectedIndex(0);
    }, [query]);

    function handleKeyNav(e: React.KeyboardEvent) {
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setSelectedIndex((i) => Math.min(i + 1, filtered.length - 1));
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setSelectedIndex((i) => Math.max(i - 1, 0));
        } else if (e.key === "Enter" && filtered[selectedIndex]) {
            setOpen(false);
            window.location.href = filtered[selectedIndex].href;
        }
    }

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[200] flex items-start justify-center pt-[15vh]">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-navy/40 backdrop-blur-sm animate-fadeIn"
                onClick={() => setOpen(false)}
            />

            {/* Panel */}
            <div className="relative w-full max-w-lg mx-4 bg-white rounded-2xl shadow-2xl border border-border overflow-hidden animate-scaleIn">
                {/* Search input */}
                <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
                    <Search className="w-5 h-5 text-slate-300 flex-shrink-0" />
                    <input
                        ref={inputRef}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={handleKeyNav}
                        placeholder="Cari halaman atau program..."
                        className="flex-1 text-sm text-navy placeholder:text-slate-300 outline-none bg-transparent"
                    />
                    <button
                        onClick={() => setOpen(false)}
                        className="p-1 rounded-lg hover:bg-softbg transition-colors"
                    >
                        <X className="w-4 h-4 text-slate-400" />
                    </button>
                </div>

                {/* Results */}
                <div className="max-h-72 overflow-y-auto py-2">
                    {filtered.length === 0 ? (
                        <p className="text-sm text-slate-400 text-center py-8">
                            Tidak ditemukan hasil untuk &ldquo;{query}&rdquo;
                        </p>
                    ) : (
                        <>
                            {query.trim() === "" ? (
                                items.map((group) => (
                                    <div key={group.category}>
                                        <p className="px-4 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                            {group.category}
                                        </p>
                                        {group.results.map((r) => {
                                            const idx = flatResults.indexOf(r);
                                            return (
                                                <Link
                                                    key={r.href}
                                                    href={r.href}
                                                    onClick={() => setOpen(false)}
                                                    className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${idx === selectedIndex
                                                            ? "bg-ocean/5 text-ocean"
                                                            : "text-navy/70 hover:bg-softbg"
                                                        }`}
                                                >
                                                    <r.icon className="w-4 h-4" />
                                                    {r.label}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                ))
                            ) : (
                                filtered.map((r, idx) => (
                                    <Link
                                        key={r.href}
                                        href={r.href}
                                        onClick={() => setOpen(false)}
                                        className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${idx === selectedIndex
                                                ? "bg-ocean/5 text-ocean"
                                                : "text-navy/70 hover:bg-softbg"
                                            }`}
                                    >
                                        <r.icon className="w-4 h-4" />
                                        {r.label}
                                    </Link>
                                ))
                            )}
                        </>
                    )}
                </div>

                {/* Footer */}
                <div className="px-4 py-2.5 border-t border-border bg-softbg/50 flex items-center justify-between text-[10px] text-slate-400">
                    <span className="flex items-center gap-1">
                        <Command className="w-3 h-3" /> + K untuk membuka
                    </span>
                    <span>↑↓ navigasi · ↵ pilih · esc tutup</span>
                </div>
            </div>
        </div>
    );
}
