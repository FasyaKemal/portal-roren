"use client";

export default function ProgramDetailSkeleton() {
    return (
        <main className="min-h-screen bg-white animate-pulse">
            {/* Hero skeleton */}
            <div className="bg-gradient-to-br from-slate-200 to-slate-100 pt-24 pb-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 mb-8">
                        <div className="h-4 w-12 bg-white/40 rounded" />
                        <div className="h-4 w-4 bg-white/20 rounded" />
                        <div className="h-4 w-16 bg-white/40 rounded" />
                        <div className="h-4 w-4 bg-white/20 rounded" />
                        <div className="h-4 w-20 bg-white/40 rounded" />
                    </div>
                    {/* Icon & status */}
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl" />
                        <div className="h-6 w-20 bg-white/20 rounded-full" />
                    </div>
                    {/* Title */}
                    <div className="h-10 w-64 bg-white/20 rounded-xl mb-3" />
                    <div className="h-6 w-96 max-w-full bg-white/20 rounded-lg mb-6" />
                    {/* Description lines */}
                    <div className="space-y-2 mb-8 max-w-xl">
                        <div className="h-4 w-full bg-white/15 rounded" />
                        <div className="h-4 w-5/6 bg-white/15 rounded" />
                        <div className="h-4 w-4/6 bg-white/15 rounded" />
                    </div>
                    {/* Buttons */}
                    <div className="flex gap-3">
                        <div className="h-12 w-40 bg-white/20 rounded-2xl" />
                        <div className="h-12 w-36 bg-white/10 rounded-2xl" />
                    </div>
                </div>
            </div>

            {/* Stats bar skeleton */}
            <div className="bg-white border-y border-slate-100 py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="text-center">
                                <div className="h-8 w-16 bg-slate-100 rounded-lg mx-auto mb-2" />
                                <div className="h-4 w-24 bg-slate-100 rounded mx-auto" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Features skeleton */}
            <div className="py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="h-8 w-48 bg-slate-100 rounded-lg mb-10" />
                    <div className="grid md:grid-cols-3 gap-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-slate-50 rounded-3xl p-6">
                                <div className="w-12 h-12 bg-slate-100 rounded-2xl mb-4" />
                                <div className="h-5 w-32 bg-slate-100 rounded mb-2" />
                                <div className="h-4 w-full bg-slate-100 rounded mb-1" />
                                <div className="h-4 w-3/4 bg-slate-100 rounded" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
