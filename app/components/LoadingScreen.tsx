"use client";

import { useState, useEffect } from "react";

export default function LoadingScreen() {
    const [loaded, setLoaded] = useState(false);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        // Allow content to paint first, then start exit
        const showTimer = setTimeout(() => setLoaded(true), 600);
        const hideTimer = setTimeout(() => setHidden(true), 1200);
        return () => {
            clearTimeout(showTimer);
            clearTimeout(hideTimer);
        };
    }, []);

    if (hidden) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-500 ${loaded ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
        >
            <div className="flex flex-col items-center gap-4">
                {/* Animated logo */}
                <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-navy flex items-center justify-center animate-pulse">
                        <span className="text-lg font-extrabold text-white tracking-tight">
                            R<span className="text-ocean-light">O</span>
                        </span>
                    </div>
                    {/* Orbit ring */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-ocean/20 animate-ping" />
                </div>
                <p className="text-sm font-bold text-navy tracking-tight">
                    ROREN<span className="text-gradient-ocean">One</span>
                </p>
                {/* Progress bar */}
                <div className="w-32 h-1 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-ocean to-ocean-light rounded-full loading-bar" />
                </div>
            </div>
        </div>
    );
}
