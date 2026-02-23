// ─── ALPHAPUNCH — main.js ───

document.addEventListener('DOMContentLoaded', () => {

  // ── Fire Particles ──
  const container = document.getElementById('particles');
  if (container) {
    const colors = ['#ff4500', '#ff7300', '#ffd700', '#ff2200'];
    for (let i = 0; i < 35; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.cssText = `
        left: ${Math.random() * 100}%;
        width: ${3 + Math.random() * 6}px;
        height: ${3 + Math.random() * 6}px;
        animation-duration: ${2 + Math.random() * 4}s;
        animation-delay: ${Math.random() * 4}s;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        box-shadow: 0 0 8px ${colors[Math.floor(Math.random() * colors.length)]};
      `;
      container.appendChild(p);
    }
  }

  // ── Scroll Reveal ──
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // ── Navbar shrink on scroll ──
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      nav.style.background = 'rgba(0,0,0,0.97)';
      nav.style.padding = '10px 40px';
      nav.style.transition = 'all 0.3s ease';
    } else {
      nav.style.background = '';
      nav.style.padding = '';
    }
  });

});

// ── Copy Contract Address ──
function copyCA() {
  const caEl = document.getElementById('ca');
  if (!caEl) return;
  const text = caEl.textContent;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.querySelector('.copy-btn');
    const original = btn.textContent;
    btn.textContent = 'Copied! ✓';
    btn.style.background = '#ffd700';
    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = '';
    }, 2000);
  }).catch(() => {
    // fallback for older browsers
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  });
}
