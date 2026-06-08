const body = document.body;
const themeToggle = document.getElementById('themeToggle');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const sectionLinks = document.querySelectorAll('a[href^="#"]');
const fadeElements = document.querySelectorAll('.fade-in');
const loadedImages = document.querySelectorAll('img[data-fallback]');

const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
setTheme(savedTheme);

// Toggle dark mode dan simpan preferensi
themeToggle.addEventListener('click', () => {
  const newTheme = body.classList.contains('dark-theme') ? 'light' : 'dark';
  setTheme(newTheme);
});

function setTheme(theme) {
  body.classList.toggle('dark-theme', theme === 'dark');
  themeToggle.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
  themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Aktifkan light mode' : 'Aktifkan dark mode');
  localStorage.setItem('portfolio-theme', theme);
}

// Menu hamburger di layar kecil
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  menuToggle.classList.toggle('open');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    menuToggle.classList.remove('open');
  });
});

// Smooth scroll untuk anchor di halaman
sectionLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');

    if (targetId.startsWith('#') && targetId.length > 1) {
      event.preventDefault();
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// Active navbar berdasarkan section yang terlihat
const sections = document.querySelectorAll('section[id]');
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.id;
      const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);

      if (entry.isIntersecting && activeLink) {
        navLinks.forEach((link) => link.classList.remove('active'));
        activeLink.classList.add('active');
      }
    });
  },
  {
    rootMargin: '-35% 0px -55% 0px',
    threshold: 0,
  }
);

sections.forEach((section) => sectionObserver.observe(section));

// Efek fade-in saat elemen muncul di viewport
const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

fadeElements.forEach((element) => fadeObserver.observe(element));

// Fallback image untuk profil jika file belum tersedia
loadedImages.forEach((image) => {
  const parent = image.closest('.photo-frame, .project-image');

  const markAsLoaded = () => {
    if (parent) parent.classList.add('loaded');
  };

  if (image.complete && image.naturalWidth !== 0) {
    markAsLoaded();
  }

  image.addEventListener('load', markAsLoaded);
  image.addEventListener('error', () => {
    image.classList.add('hidden');
  });
});
