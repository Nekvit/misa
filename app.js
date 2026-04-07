// ── Lightning bg particles ──
const BOLTS = ['⚡','⭐','💫','✨','🌟','💥','⚡','💛','💜','💙'];
const bg = document.getElementById('lightningBg');

function createBolt() {
  const el = document.createElement('span');
  el.classList.add('bolt');
  el.textContent = BOLTS[Math.floor(Math.random() * BOLTS.length)];
  el.style.left     = Math.random() * 100 + 'vw';
  el.style.fontSize = (Math.random() * 1.4 + 0.8) + 'rem';
  const dur = Math.random() * 14 + 8;
  el.style.animationDuration = dur + 's';
  el.style.animationDelay   = Math.random() * 4 + 's';
  bg.appendChild(el);
  setTimeout(() => el.remove(), (dur + 5) * 1000);
}
for (let i = 0; i < 20; i++) createBolt();
setInterval(createBolt, 700);

// ── Scroll fade-in ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity   = '1';
      e.target.style.transform = 'translateY(0) scale(1)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.power-card, .certificate, .fig-son1, .fig-son2, .fig-dad, .fig-daughter').forEach((el, i) => {
  el.style.opacity    = '0';
  el.style.transform  = 'translateY(50px) scale(0.95)';
  el.style.transition = `opacity .55s ease ${i * 0.09}s, transform .55s ease ${i * 0.09}s`;
  observer.observe(el);
});

// ── POW rotation fix (CSS var workaround) ──
document.querySelectorAll('.pow').forEach(p => {
  const r = getComputedStyle(p).transform;
  p.style.setProperty('--r', r === 'none' ? '0deg' : r);
});
