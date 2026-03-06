<nav id="navbar" class="navbar">
    <div class="nav-container">
        <!-- Logo -->
        <a href="/" class="nav-logo">
            <div class="nav-logo-imgs">
                <img src="{{ asset('logo-kkp.png') }}" alt="Logo KKP" class="logo-img">
                <img src="{{ asset('logo-kkp-aniv.png') }}" alt="KKP 2026" class="logo-img">
            </div>
            <div class="nav-logo-text">
                <span class="logo-title">ROREN<span class="text-ocean">One</span></span>
                <p class="logo-subtitle">Biro Perencanaan • KKP RI</p>
            </div>
        </a>

        <!-- Desktop Menu -->
        <div class="nav-links">
            <a href="/#home" class="nav-link active" data-section="home">Home</a>
            <div class="nav-dropdown" id="programDropdown">
                <button class="nav-link dropdown-toggle" data-section="program">
                    Program
                    <svg class="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
                </button>
                <div class="dropdown-menu">
                    <a href="/program/kinerjaku" class="dropdown-item">
                        <div class="dropdown-icon bg-sky"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 20V10M12 20V4M6 20v-6"/></svg></div>
                        <div><p class="dropdown-title">KinerjaKu</p><p class="dropdown-desc">Pengelolaan kinerja organisasi terintegrasi.</p></div>
                    </a>
                    <a href="/program/knmp" class="dropdown-item">
                        <div class="dropdown-icon bg-emerald"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg></div>
                        <div><p class="dropdown-title">Monev KNMP</p><p class="dropdown-desc">Monitoring & evaluasi KNMP secara periodik.</p></div>
                    </a>
                    <a href="/program/wbk" class="dropdown-item">
                        <div class="dropdown-icon bg-amber"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
                        <div><p class="dropdown-title">Monev WBK</p><p class="dropdown-desc">Pemantauan pembangunan Zona Integritas/WBK.</p></div>
                    </a>
                    <a href="/program/phln" class="dropdown-item">
                        <div class="dropdown-icon bg-violet"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3l2-4h14l2 4M5 21V10.87M19 21V10.87"/></svg></div>
                        <div><p class="dropdown-title">Monev PHLN</p><p class="dropdown-desc">Monitoring PHLN & progres pelaksanaan.</p></div>
                    </a>
                </div>
            </div>
            <a href="/#kontak" class="nav-link" data-section="kontak">Kontak</a>
        </div>

        <!-- Hamburger -->
        <button class="hamburger" id="hamburger" aria-label="Toggle menu">
            <svg class="ham-open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12h16M4 6h16M4 18h16"/></svg>
            <svg class="ham-close hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
    </div>

    <!-- Mobile Menu -->
    <div class="mobile-menu hidden" id="mobileMenu">
        <div class="mobile-menu-inner">
            <a href="/#home" class="mobile-link active">Home</a>
            <button class="mobile-link mobile-accordion-toggle">
                Program
                <svg class="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            <div class="mobile-accordion hidden">
                <a href="/program/kinerjaku" class="mobile-sub-link">KinerjaKu</a>
                <a href="/program/knmp" class="mobile-sub-link">Monev KNMP</a>
                <a href="/program/wbk" class="mobile-sub-link">Monev WBK</a>
                <a href="/program/phln" class="mobile-sub-link">Monev PHLN</a>
            </div>
            <a href="/#kontak" class="mobile-link">Kontak</a>
        </div>
    </div>
</nav>
