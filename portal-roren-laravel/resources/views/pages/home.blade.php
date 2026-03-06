@extends('layouts.app')

@section('content')

{{-- ═══════ TENTANG SECTION ═══════ --}}
<section id="tentang" class="tentang-section">
    <div class="tentang-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
        <div class="shape-glow shape-glow-1"></div>
        <div class="shape-glow shape-glow-2"></div>
    </div>
    <div class="section-container">
        <div class="tentang-grid">
            {{-- Left --}}
            <div class="animate-on-scroll">
                <div class="hero-badge shimmer-badge mb-4">
                    <span class="status-dot-green pulse-dot"></span>
                    <span class="badge-text">Portal Resmi Biro Perencanaan KKP</span>
                </div>
                <p class="tentang-brand">
                    <span class="text-navy">ROREN</span><span class="text-gradient-ocean">One</span>
                </p>
                <h2 class="tentang-title">
                    Satu Portal untuk<br>
                    <span class="text-gradient-ocean">Semua Program</span> Strategis
                </h2>
                <p class="tentang-desc">
                    RORENOne menyatukan akses terintegrasi untuk monitoring, evaluasi, dan
                    pelaporan kinerja program Biro Perencanaan KKP — semua dalam satu tempat.
                </p>

                <div class="feature-list">
                    @foreach([
                        ['Akses Terpusat', 'Satu portal untuk mengakses seluruh aplikasi tanpa berpindah platform.', 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z'],
                        ['Real-time Monitoring', 'Pantau progres dan kinerja program secara real-time dari satu tempat.', 'M22 12h-4l-3 9L9 3l-3 9H2'],
                        ['Akuntabilitas', 'Mendukung transparansi pelaporan kinerja di seluruh unit kerja KKP.', 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 12c0 4.97 2.686 9.303 6.676 11.627a2 2 0 0 0 2.648 0C16.314 21.303 19 16.97 19 12c0-1.39-.236-2.735-.682-3.984z']
                    ] as $i => $f)
                    <div class="feature-card animate-on-scroll" style="transition-delay: {{ ($i + 1) * 0.12 }}s">
                        <div class="feature-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="icon-sm text-ocean"><path d="{{ $f[2] }}"/></svg>
                        </div>
                        <div>
                            <h4 class="feature-title">{{ $f[0] }}</h4>
                            <p class="feature-desc">{{ $f[1] }}</p>
                        </div>
                    </div>
                    @endforeach
                </div>
            </div>

            {{-- Right — Visual bento --}}
            <div class="animate-on-scroll-right" style="transition-delay: 0.2s">
                <div class="tentang-visual">
                    <div class="tentang-card-dark">
                        <div class="tentang-card-glow"></div>
                        <div class="relative">
                            <h3 class="tentang-card-title">Satu Pintu, Semua Program</h3>
                            <p class="tentang-card-subtitle">Terintegrasi • Akuntabel • Transparan</p>
                            <div class="tentang-tags">
                                @foreach(['Monitoring', 'Evaluasi', 'Pelaporan', 'Analisis'] as $t)
                                <span class="tentang-tag">{{ $t }}</span>
                                @endforeach
                            </div>
                        </div>
                    </div>
                    <div class="tentang-stats-row">
                        <div class="tentang-stat-card">
                            <p class="tentang-stat-value">24/7</p>
                            <p class="tentang-stat-label">Akses Portal</p>
                        </div>
                        <div class="tentang-stat-card">
                            <p class="tentang-stat-value">99.9<span class="text-ocean">%</span></p>
                            <p class="tentang-stat-label">Uptime Sistem</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

{{-- ═══════ PROGRAM SECTION ═══════ --}}
<section id="program" class="program-section">
    <div class="section-container">
        <div class="section-header animate-on-scroll">
            <p class="section-label">Program</p>
            <h2 class="section-title">
                Akses seluruh program<br>
                <span class="text-muted">monitoring & evaluasi</span>
            </h2>
        </div>

        <div class="program-grid">
            @foreach([
                ['KinerjaKu', 'Pengelolaan kinerja organisasi terintegrasi untuk seluruh unit kerja KKP.', '/program/kinerjaku', 'online', '#0284C7', 'bg-sky-50', 'text-sky-600', 'M18 20V10M12 20V4M6 20v-6'],
                ['Monev KNMP', 'Monitoring & evaluasi KNMP secara periodik dan terstruktur.', '/program/knmp', 'online', '#059669', 'bg-emerald-50', 'text-emerald-600', 'M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11'],
                ['Monev WBK', 'Pemantauan pembangunan Zona Integritas menuju WBK/WBBM.', '/program/wbk', 'online', '#D97706', 'bg-amber-50', 'text-amber-600', 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'],
                ['Monev PHLN', 'Monitoring PHLN & progres pelaksanaan proyek secara komprehensif.', '/program/phln', 'online', '#7C3AED', 'bg-violet-50', 'text-violet-600', 'M3 21h18M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3l2-4h14l2 4']
            ] as $i => $p)
            <a href="{{ $p[2] }}" class="program-card animate-on-scroll" style="transition-delay: {{ ($i + 1) * 0.08 }}s">
                <div class="program-card-header">
                    <div class="program-icon {{ $p[5] }}">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="icon-md {{ $p[6] }}"><path d="{{ $p[7] }}"/></svg>
                    </div>
                    <span class="status-badge">
                        <span class="status-dot-sm bg-emerald-400"></span>
                        Online
                    </span>
                </div>
                <h3 class="program-name">{{ $p[0] }}</h3>
                <p class="program-desc">{{ $p[1] }}</p>
                <div class="program-link">
                    Buka Program
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="icon-xs"><path d="M7 17L17 7M7 7h10v10"/></svg>
                </div>
                <div class="program-accent" style="background: linear-gradient(90deg, {{ $p[4] }}40, {{ $p[4] }}, {{ $p[4] }}40)"></div>
            </a>
            @endforeach
        </div>
    </div>
</section>



{{-- ═══════ KONTAK SECTION ═══════ --}}
<section id="kontak" class="kontak-section">
    <div class="section-container">
        <div class="kontak-header animate-on-scroll">
            <p class="section-label">Kontak</p>
            <h2 class="section-title">Butuh Bantuan?</h2>
            <p class="kontak-desc">Tim helpdesk Biro Perencanaan KKP siap membantu Anda.</p>
        </div>

        <div class="kontak-grid">
            @foreach([
                ['Email', 'biroren@kkp.go.id', 'bg-sky-50', 'text-sky-600', 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm16 2l-8 5-8-5'],
                ['Telepon', '(021) 3453-008', 'bg-amber-50', 'text-amber-600', 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'],
                ['Alamat', 'Gedung Mina Bahari I, Lt. 4, Jakarta Pusat', 'bg-emerald-50', 'text-emerald-600', 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z']
            ] as $i => $c)
            <div class="kontak-card animate-on-scroll" style="transition-delay: {{ ($i + 1) * 0.08 }}s">
                <div class="kontak-icon {{ $c[2] }}">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="icon-sm {{ $c[3] }}"><path d="{{ $c[4] }}"/></svg>
                </div>
                <p class="kontak-label">{{ $c[0] }}</p>
                <p class="kontak-value">{{ $c[1] }}</p>
            </div>
            @endforeach
        </div>
    </div>
</section>
@endsection
