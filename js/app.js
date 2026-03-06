/* ═══════════════════════════════════════════════════════
   RORENOne Portal — JavaScript
   ═══════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function () {

    // ═══════ Loading Screen ═══════
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        setTimeout(function () {
            loadingScreen.classList.add('hidden-loading');
            setTimeout(function () {
                loadingScreen.style.display = 'none';
            }, 600);
        }, 800);
    }

    // ═══════ Navbar Scroll ═══════
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 10) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ═══════ Program Dropdown ═══════
    const dropdown = document.getElementById('programDropdown');
    if (dropdown) {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            dropdown.classList.toggle('open');
        });

        // Close on click outside
        document.addEventListener('click', function (e) {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('open');
            }
        });
    }

    // ═══════ Hamburger Menu ═══════
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    if (hamburger && mobileMenu) {
        const hamOpen = hamburger.querySelector('.ham-open');
        const hamClose = hamburger.querySelector('.ham-close');

        hamburger.addEventListener('click', function () {
            const isOpen = mobileMenu.classList.contains('open');
            if (isOpen) {
                mobileMenu.classList.remove('open');
                mobileMenu.classList.add('hidden');
                hamOpen.classList.remove('hidden');
                hamClose.classList.add('hidden');
            } else {
                mobileMenu.classList.remove('hidden');
                // Force reflow
                mobileMenu.offsetHeight;
                mobileMenu.classList.add('open');
                hamOpen.classList.add('hidden');
                hamClose.classList.remove('hidden');
            }
        });

        // Mobile accordion
        const accordionToggle = document.querySelector('.mobile-accordion-toggle');
        const accordion = document.querySelector('.mobile-accordion');
        if (accordionToggle && accordion) {
            accordionToggle.addEventListener('click', function () {
                accordion.classList.toggle('hidden');
                accordion.classList.toggle('open');
            });
        }

        // Close mobile menu on link click
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                mobileMenu.classList.remove('open');
                mobileMenu.classList.add('hidden');
                hamOpen.classList.remove('hidden');
                hamClose.classList.add('hidden');
            });
        });
    }

    // ═══════ Scroll To Top ═══════
    const scrollBtn = document.getElementById('scrollToTop');
    if (scrollBtn) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 500) {
                scrollBtn.classList.add('visible');
                scrollBtn.classList.remove('hidden');
            } else {
                scrollBtn.classList.remove('visible');
                scrollBtn.classList.add('hidden');
            }
        });

        scrollBtn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ═══════ Scroll Animations (IntersectionObserver) ═══════
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll, .animate-on-scroll-right').forEach(function (el) {
        observer.observe(el);
    });

    // ═══════ Active Nav Link on Scroll ═══════
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[data-section]');

    window.addEventListener('scroll', function () {
        let current = '';
        sections.forEach(function (section) {
            const sectionTop = section.offsetTop - 200;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === current) {
                link.classList.add('active');
            }
        });
    });

    // ═══════ Smooth Scroll for anchor links ═══════
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            if (targetId === 'top' || targetId === '') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                var targetEl = document.getElementById(targetId);
                if (targetEl) {
                    targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

});
