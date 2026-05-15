/* ══════════════════════════════════════════════════════════════
   ANMOL MISHRA — PORTFOLIO  |  script.js
   Scroll reveals, hero typing effect, nav toggle, glow follow
   ══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ── Scroll Reveal (Intersection Observer) ────────────────
  const revealElements = document.querySelectorAll('.reveal, .reveal-stagger');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  // ── Hero Typing Effect ───────────────────────────────────
  const typedEl = document.getElementById('typedCommand');
  const command = 'cat welcome.md';
  let charIndex = 0;

  function typeChar() {
    if (!typedEl) return;
    if (charIndex < command.length) {
      typedEl.textContent += command[charIndex];
      charIndex++;
      setTimeout(typeChar, 60 + Math.random() * 40);
    }
  }

  // Start typing after a brief delay
  setTimeout(typeChar, 800);

  // ── Hero Glow Follow (mouse) ─────────────────────────────
  const heroGlow = document.getElementById('heroGlow');
  const heroSection = document.querySelector('.hero');

  if (heroGlow && heroSection) {
    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      heroGlow.style.transform = `translate(${x - 300}px, ${y - 300}px)`;
    });
  }

  // ── Mobile Nav Toggle ────────────────────────────────────
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('open');
    });

    // Close on link click
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });
  }

  // ── Smooth Scroll for Anchor Links ───────────────────────
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const navHeight = document.getElementById('nav').offsetHeight;
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ── Nav Background on Scroll ─────────────────────────────
  const nav = document.getElementById('nav');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      nav.style.background = 'rgba(10, 10, 10, 0.95)';
    } else {
      nav.style.background = 'rgba(10, 10, 10, 0.85)';
    }
  });
})();
