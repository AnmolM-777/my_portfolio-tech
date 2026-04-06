// ============================================
// Root Access — Portfolio Interactive Scripts
// ============================================

// === BOOT SEQUENCE ===
const bootLines = [
  'BIOS: AnmolOS v2.0.26',
  'Checking memory... 16384 MB OK',
  'Initializing kernel modules...',
  'Loading display driver... [OK]',
  'Starting network services... [OK]',
  'Mounting /home/anmol/portfolio...',
  'Loading projects from GitHub...',
  '[  OK  ] Started portfolio.service',
  '',
  'anmol@iitj login: anmol',
  'Password: ********',
  '',
  'Welcome to AnmolOS (GNU/Linux 6.1.0-iitj)',
  '',
  'Last login: ' + new Date().toDateString(),
  '',
  'Launching portfolio...'
];

function runBootSequence() {
  const overlay = document.getElementById('boot-overlay');
  const bootText = document.getElementById('boot-text');
  
  if (!overlay || !bootText) return;

  let lineIndex = 0;
  let displayed = '';

  function showNextLine() {
    if (lineIndex < bootLines.length) {
      displayed += bootLines[lineIndex] + '\n';
      bootText.textContent = displayed;
      lineIndex++;

      const delay = bootLines[lineIndex - 1] === '' ? 100 : 
                    bootLines[lineIndex - 1].includes('Welcome') ? 300 :
                    Math.random() * 80 + 40;
      
      setTimeout(showNextLine, delay);
    } else {
      setTimeout(() => {
        overlay.classList.add('hidden');
        initAfterBoot();
      }, 500);
    }
  }

  showNextLine();
}

// === TYPING ANIMATION ===
const typingPhrases = [
  'Computer Science @ IIT Jodhpur',
  'Backend & Systems Engineer',
  'Quantitative Finance Enthusiast',
  'Blockchain Explorer',
  'Open Source Contributor',
  'echo "build openly • learn continuously"'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;

function typeText() {
  const el = document.getElementById('typed-text');
  if (!el) return;

  const currentPhrase = typingPhrases[phraseIndex];

  if (isDeleting) {
    el.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
    typingDelay = 40;
  } else {
    el.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
    typingDelay = 80 + Math.random() * 40;
  }

  if (!isDeleting && charIndex === currentPhrase.length) {
    typingDelay = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % typingPhrases.length;
    typingDelay = 500;
  }

  setTimeout(typeText, typingDelay);
}

// === NAVIGATION ===
function initNavigation() {
  const navbar = document.getElementById('navbar');
  const links = document.querySelectorAll('.nav-link');
  const toggle = document.getElementById('mobile-toggle');
  const navLinksContainer = document.getElementById('nav-links');

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile toggle
  if (toggle && navLinksContainer) {
    toggle.addEventListener('click', () => {
      navLinksContainer.classList.toggle('open');
      toggle.classList.toggle('active');
    });
  }

  // Active link on scroll
  const sections = document.querySelectorAll('.section');
  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        links.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));

  // Close mobile menu on link click
  links.forEach(link => {
    link.addEventListener('click', () => {
      if (navLinksContainer) navLinksContainer.classList.remove('open');
      if (toggle) toggle.classList.remove('active');
    });
  });
}

// === SECTION REVEAL ON SCROLL ===
function initScrollReveal() {
  const revealSections = document.querySelectorAll('.section:not(.hero-section)');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  });

  revealSections.forEach(section => revealObserver.observe(section));
}

// === SKILL BAR ANIMATION ===
function initSkillBars() {
  const fills = document.querySelectorAll('.skill-bar .fill');
  
  fills.forEach(fill => {
    const targetWidth = fill.style.width;
    fill.style.width = '0';
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            fill.style.width = targetWidth;
          }, 300);
          observer.unobserve(fill);
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(fill);
  });
}

// === SMOOTH SCROLL FOR NAV LINKS ===
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// === INIT EVERYTHING AFTER BOOT ===
function initAfterBoot() {
  typeText();
  initNavigation();
  initScrollReveal();
  initSkillBars();
  initSmoothScroll();
}

// === START ===
document.addEventListener('DOMContentLoaded', () => {
  runBootSequence();
});
