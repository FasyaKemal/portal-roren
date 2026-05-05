import re
import math

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Nav dropdown
nav_item = """
            <a href="program.html?slug=pendanaan" class="dropdown-item">
              <div class="dropdown-icon bg-blue"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg></div>
              <div>
                <p class="dropdown-title">Pendanaan Inovatif Kolaboratif</p>
                <p class="dropdown-desc">Skema Pembiayaan Non-APBN/APBD.</p>
              </div>
            </a>
"""
html = html.replace('            <div class="dropdown-divider"></div>', nav_item + '            <div class="dropdown-divider"></div>')

# 2. Mobile accordion
html = html.replace(
    '<a href="program.html?slug=sarpras" class="mobile-sub-link">Modernisasi Sarpras Pendidikan</a>',
    '<a href="program.html?slug=sarpras" class="mobile-sub-link">Modernisasi Sarpras Pendidikan</a>\n          <a href="program.html?slug=pendanaan" class="mobile-sub-link">Pendanaan Inovatif</a>'
)

# 3. Tentang tags
html = html.replace(
    '<span class="tentang-tag">Sarpras</span>',
    '<span class="tentang-tag">Sarpras</span>\n                    <span class="tentang-tag">Pendanaan Inovatif</span>'
)

# 4. Program Grid
program_card = """
          <!-- 9. Pendanaan Inovatif -->
          <a href="program.html?slug=pendanaan" class="program-card animate-on-scroll" style="transition-delay: 0.4s">
            <div class="program-card-header">
              <div class="program-icon bg-blue-50">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="icon-md text-blue-600">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <span class="status-badge"><span class="status-dot-sm bg-emerald-400"></span>Online</span>
            </div>
            <h3 class="program-name">Pendanaan Inovatif Kolaboratif</h3>
            <p class="program-desc">Skema pembiayaan non-APBN/APBD untuk pembangunan berkelanjutan.</p>
            <div class="program-link">
              Buka Program
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="icon-xs">
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </div>
            <div class="program-accent" style="background: linear-gradient(90deg, #2563eb40, #2563eb, #2563eb40)"></div>
          </a>
"""
html = html.replace('        </div>\n      </div>\n    </section>\n\n    <!-- Wave Divider: Program → Monev -->', program_card + '        </div>\n      </div>\n    </section>\n\n    <!-- Wave Divider: Program → Monev -->')

# 5. Footer
html = html.replace(
    '<li><a href="program.html?slug=sarpras">Modernisasi Sarpras Pendidikan</a></li>',
    '<li><a href="program.html?slug=sarpras">Modernisasi Sarpras Pendidikan</a></li>\n            <li><a href="program.html?slug=pendanaan">Pendanaan Inovatif</a></li>'
)

# 6. Orbit HTML
html = html.replace('<span class="orbit-center-num">13</span>', '<span class="orbit-center-num">14</span>')

programs = [
    ("KNMP", "#059669"),
    ("Budidaya", "#0284c7"),
    ("Mina Padi", "#d97706"),
    ("BINS", "#7c3aed"),
    ("Garam", "#e11d48"),
    ("Kapal", "#0d9488"),
    ("Pantura", "#4f46e5"),
    ("Waingapu", "#ea580c"),
    ("Sarpras", "#0891b2"),
    ("Pendanaan", "#2563eb"),
    ("KinerjaKu", "#65a30d"),
    ("WBK", "#db2777"),
    ("PHLN", "#2563eb"),
    ("Pascabencana", "#ca8a04")
]

num_nodes = len(programs)

orbit_nodes_html = ""
for i, (name, color) in enumerate(programs):
    orbit_nodes_html += f'''                  <div class="orbit-node orbit-node-{i+1}" style="--node-color: {color}">
                    <div class="orbit-node-dot"></div>
                    <span class="orbit-node-name">{name}</span>
                  </div>\n'''

html = re.sub(r'<div class="orbit-node orbit-node-1".*?</div>\s*</div>\s*</div>\s*</div>\s*</div>\s*</div>\s*</section>', 
              orbit_nodes_html + '                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>', 
              html, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)


# Update CSS for 14 nodes
with open('css/app.css', 'r', encoding='utf-8') as f:
    css = f.read()

css_nodes = ""
for i in range(num_nodes):
    angle = (i * 360 / num_nodes) - 90
    rad = math.radians(angle)
    
    # Radii calculation
    if i % 2 == 0:
        r = 38
    else:
        r = 52
        
    if i == 0:
        r = 32  # KNMP
    elif i == 13:
        r = 55  # Pascabencana
    elif i == 1:
        r = 55
        
    left = 50 + r * math.cos(rad)
    top = 50 + r * math.sin(rad)
    
    css_nodes += f'''
.orbit-node-{i+1} {{
    top: {top:.2f}%;
    left: {left:.2f}%;
    transform: translate(-50%, -50%);
    animation-delay: {-i * 0.5:.2f}s;
}}
'''

css = re.sub(r'\.orbit-node-1 \{.*?\.orbit-node-\d+ \{.*?\}', css_nodes.strip(), css, flags=re.DOTALL)

with open('css/app.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Added Pendanaan Inovatif to index.html and app.css")
