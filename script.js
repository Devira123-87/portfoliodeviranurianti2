const menuToggle = document.querySelector('.mobile-menu-toggle');
const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
const revealElements = document.querySelectorAll('.animate-up');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('nav-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

mobileNavLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
    if (menuToggle) {
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < triggerBottom) {
      element.classList.add('active');
    }
  });
}

window.addEventListener('load', revealOnScroll);
window.addEventListener('scroll', revealOnScroll);
