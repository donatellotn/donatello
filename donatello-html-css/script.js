// ============================================
// DONATELLO SALON DE THÉ — Interactions
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  // --- Navbar scroll ---
  const navbar = document.getElementById('navbar');
  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // --- Hero entrance ---
  const hero = document.querySelector('.hero');
  if (hero) setTimeout(() => hero.classList.add('visible'), 100);

  // --- Mobile menu ---
  const toggle = document.getElementById('menuToggle');
  const mobile = document.getElementById('mobileMenu');
  const closeBtn = document.getElementById('mobileClose');
  const mobileLinks = mobile ? mobile.querySelectorAll('a') : [];

  if (toggle && mobile) {
    toggle.addEventListener('click', () => mobile.classList.add('active'));
    closeBtn.addEventListener('click', () => mobile.classList.remove('active'));
    mobileLinks.forEach(link => link.addEventListener('click', () => mobile.classList.remove('active')));
  }

  // --- Scroll reveal (IntersectionObserver) ---
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => observer.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }

  // --- Testimonial slider ---
  const cards = document.querySelectorAll('.testimonial-card');
  const dots = document.querySelectorAll('.testimonial-dot');
  let current = 0;
  let autoTimer;

  function showSlide(index) {
    cards.forEach(c => { c.classList.remove('active'); c.style.transform = 'translateX(60px)'; });
    dots.forEach(d => d.classList.remove('active'));
    cards[index].classList.add('active');
    cards[index].style.transform = 'translateX(0)';
    dots[index].classList.add('active');
    current = index;
  }

  function nextSlide() { showSlide((current + 1) % cards.length); }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      showSlide(parseInt(dot.dataset.index));
      clearInterval(autoTimer);
      autoTimer = setInterval(nextSlide, 5000);
    });
  });

  if (cards.length > 0) autoTimer = setInterval(nextSlide, 5000);

  // --- Gallery lightbox ---
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');

  document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
