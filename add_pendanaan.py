import re

# Add to program.html
with open('program.html', 'r', encoding='utf-8') as f:
    html = f.read()

pendanaan_code = """
            pendanaan: {
                name: 'Pendanaan Inovatif Kolaboratif',
                tagline: 'Skema Pembiayaan Non-APBN/APBD',
                summary: 'Pendanaan inovatif adalah skema pembiayaan non-APBN/APBD yang menghimpun sumber dana baru dan kolaboratif untuk pembangunan berkelanjutan, seperti infrastruktur dan ekonomi biru.',
                screenshot: 'img/ss-pendanaan.png',
                url: '#',
                color: '#2563eb',
                colorBg: 'rgba(37, 99, 235, 0.1)',
                features: [
                    { icon: 'dashboard', title: 'Dashboard Pembiayaan', desc: 'Pemantauan sumber dana dan alokasi pembiayaan secara transparan.' },
                    { icon: 'collab', title: 'Kolaborasi Investasi', desc: 'Menghubungkan investor dengan proyek-proyek berkelanjutan.' },
                    { icon: 'progress', title: 'Tracking Proyek', desc: 'Pemantauan progres infrastruktur dan ekonomi biru.' }
                ],
                overview: {
                    title: 'Tentang Pendanaan Inovatif Kolaboratif',
                    desc1: 'Program ini menghimpun sumber dana baru di luar APBN/APBD untuk mempercepat pembangunan berkelanjutan di sektor Kelautan dan Perikanan.',
                    desc2: 'Fokus utama mencakup pembiayaan infrastruktur, pemberdayaan ekonomi biru, dan inisiatif ramah lingkungan.',
                    highlights: [
                        'Skema pembiayaan non-APBN/APBD',
                        'Mendukung pembangunan ekonomi biru',
                        'Kolaborasi dengan pihak swasta dan investor',
                        'Transparansi alokasi dana'
                    ]
                },
                stats: [
                    { value: '10+', label: 'Mitra Investor' },
                    { value: 'Rp 1T+', label: 'Target Dana' },
                    { value: '100%', label: 'Transparan' }
                ],
                tahun: [
                    { year: '2025', desc: 'Inisiasi pendanaan tahun 2025', url: '#' },
                    { year: '2026', desc: 'Realisasi proyek tahun 2026', url: '#' }
                ],
                ctaTitle: 'Pantau proyek pendanaan inovatif?',
                ctaDesc: 'Akses informasi detail mengenai peluang dan realisasi investasi.'
            },
"""

# Find where to insert in program.html
if 'pendanaan:' not in html:
    html = re.sub(r'(budidaya: {.*?\n            },)', r'\1' + pendanaan_code, html, flags=re.DOTALL)
    with open('program.html', 'w', encoding='utf-8') as f:
        f.write(html)
