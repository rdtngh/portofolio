// Mengatur smooth scrolling untuk semua tautan navigasi pada halaman
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Tambahkan kelas active pada tautan yang diklik
    navLinks.forEach((item) => item.classList.remove('active'));
    link.classList.add('active');
  });
});

// Pilih menu aktif ketika halaman digulir
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY + 120;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    const matchingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

    if (sectionTop <= scrollPosition && sectionTop + sectionHeight > scrollPosition) {
      navLinks.forEach((link) => link.classList.remove('active'));
      if (matchingLink) {
        matchingLink.classList.add('active');
      }
    }
  });
});
