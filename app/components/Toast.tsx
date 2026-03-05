"use client";

import { useState, useEffect } from "react";
import { X, AlertTriangle, Info, CheckCircle2 } from "lucide-react";

type ToastType = "info" | "warning" | "success";

interface BannerToastProps {
    message: string;
    type?: ToastType;
    dismissible?: boolean;
}

const iconMap = {
    info: Info,
    warning: AlertTriangle,
    success: CheckCircle2,
};

const colorMap = {
    info: "bg-ocean/10 border-ocean/20 text-ocean",
    warning: "bg-amber-50 border-amber-200 text-amber-700",
    success: "bg-emerald-50 border-emerald-200 text-emerald-700",
};

const iconColorMap = {
    info: "text-ocean",
    warning: "text-amber-500",
    success: "text-emerald-500",
};

export function BannerToast({
    message,
    type = "info",
    dismissible = true,
}: BannerToastProps) {
    const [visible, setVisible] = useState(true);
    const Icon = iconMap[type];

    if (!visible) return null;

    return (
        <div
            className={`w-full border-b ${colorMap[type]} transition-all duration-300`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-center gap-2 text-sm font-medium">
                <Icon className={`w-4 h-4 flex-shrink-0 ${iconColorMap[type]}`} />
                <span>{message}</span>
                {dismissible && (
                    <button
                        onClick={() => setVisible(false)}
                        className="ml-2 p-0.5 rounded-md hover:bg-black/5 transition-colors"
                        aria-label="Dismiss"
                    >
                        <X className="w-3.5 h-3.5" />
                    </button>
                )}
            </div>
        </div>
    );
}

/* Floating toast for transient notifications */
interface FloatingToastProps {
    message: string;
    type?: ToastType;
    duration?: number;
    onClose?: () => void;
}

export function FloatingToast({
    message,
    type = "info",
    duration = 4000,
    onClose,
}: FloatingToastProps) {
    const [show, setShow] = useState(true);
    const Icon = iconMap[type];

    useEffect(() => {
        const t = setTimeout(() => {
            setShow(false);
            setTimeout(() => onClose?.(), 300);
        }, duration);
        return () => clearTimeout(t);
    }, [duration, onClose]);

    return (
        <div
            className={`fixed bottom-6 right-6 z-[100] max-w-sm bg-white rounded-xl shadow-lg border border-border p-4 flex items-start gap-3 transition-all duration-300 ${show
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 pointer-events-none"
                }`}
        >
            <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${type === "info"
                        ? "bg-ocean/10"
                        : type === "warning"
                            ? "bg-amber-50"
                            : "bg-emerald-50"
                    }`}
            >
                <Icon className={`w-4 h-4 ${iconColorMap[type]}`} />
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-navy">{message}</p>
            </div>
            <button
                onClick={() => {
                    setShow(false);
                    setTimeout(() => onClose?.(), 300);
                }}
                className="p-1 rounded-md hover:bg-softbg transition-colors flex-shrink-0"
            >
                <X className="w-3.5 h-3.5 text-navy/40" />
            </button>
        </div>
    );
}
