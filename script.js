
// Initialize AOS
AOS.init({ duration: 1000, once: true, offset: 100, easing: 'ease-out-cubic' });

// Navbar mobile menu logic
const menuBtn = document.getElementById("menu-btn");
const closeMobile = document.getElementById("close-mobile");
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelectorAll(".nav-link");

// Open mobile menu
if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("opacity-0", "pointer-events-none", "scale-105");
    mobileMenu.classList.add("opacity-100", "scale-100");
    document.body.style.overflow = "hidden";
  });
}

// Close mobile menu function
const closeMenu = () => {
  mobileMenu.classList.remove("opacity-100", "scale-100");
  mobileMenu.classList.add("opacity-0", "pointer-events-none", "scale-105");
  document.body.style.overflow = "auto";
};

// Close mobile menu events
if (closeMobile) {
  closeMobile.addEventListener("click", closeMenu);
}

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// Navbar Scroll Effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  const currentScroll = window.scrollY;

  if (currentScroll > 50) {
    header.classList.add('bg-black/80', 'h-16');
    header.classList.remove('h-20');
  } else {
    header.classList.remove('bg-black/80', 'h-16');
    header.classList.add('h-20');
  }
  lastScroll = currentScroll;
});

// Scroll Progress Bar Logic
window.addEventListener('scroll', () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  const progressBar = document.getElementById('scroll-progress');
  if (progressBar) {
    progressBar.style.width = scrolled + '%';
  }
});

// Frontend-only contact form handler
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const successMsg = document.getElementById('form-success');
    if (successMsg) successMsg.classList.remove('hidden');
    this.reset();
  });
}
