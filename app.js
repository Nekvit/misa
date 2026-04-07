// Floating particles
const EMOJIS = ['❤️','💛','💙','⭐','✨','🌸','💖','🌟','💕','🎀','🍭','🦋'];
const container = document.getElementById('particles');

function createParticle() {
  const el = document.createElement('span');
  el.classList.add('particle');
  el.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
  el.style.left     = Math.random() * 100 + 'vw';
  el.style.fontSize = (Math.random() * 1.2 + 0.8) + 'rem';
  const dur = Math.random() * 12 + 8;
  el.style.animationDuration = dur + 's';
  el.style.animationDelay   = Math.random() * 6 + 's';
  container.appendChild(el);
  setTimeout(() => el.remove(), (dur + 6) * 1000);
}

// Spawn particles periodically
for (let i = 0; i < 18; i++) createParticle();
setInterval(createParticle, 800);

// Intersection observer — fade-in cards & reasons
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = e.target.dataset.transform || 'translateY(0)';
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.card, .reason, .letter').forEach((el, i) => {
  el.style.opacity    = '0';
  el.style.transform  = 'translateY(40px)';
  el.style.transition = `opacity .6s ease ${i * 0.08}s, transform .6s ease ${i * 0.08}s`;
  el.dataset.transform = 'translateY(0)';
  observer.observe(el);
});
