"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface UseInViewOptions {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
}

export function useInView(options: UseInViewOptions = {}) {
    const { threshold = 0.15, rootMargin = "0px", triggerOnce = true } = options;
    const ref = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    if (triggerOnce) observer.unobserve(el);
                } else if (!triggerOnce) {
                    setIsInView(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(el);
        return () => observer.unobserve(el);
    }, [threshold, rootMargin, triggerOnce]);

    return { ref, isInView };
}

/* Animated counter hook */
export function useCounter(end: number, duration = 2000, start = 0, active = true) {
    const [count, setCount] = useState(start);

    useEffect(() => {
        if (!active) return;
        let raf: number;
        const startTime = performance.now();

        function tick(now: number) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // easeOutCubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(start + (end - start) * eased));
            if (progress < 1) raf = requestAnimationFrame(tick);
        }

        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [end, duration, start, active]);

    return count;
}
