"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        function onScroll() {
            setVisible(window.scrollY > 400);
        }
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={`fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-navy text-white shadow-lg shadow-navy/20 flex items-center justify-center hover:bg-ocean hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 ${visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 pointer-events-none"
                }`}
        >
            <ArrowUp className="w-5 h-5" />
        </button>
    );
}
