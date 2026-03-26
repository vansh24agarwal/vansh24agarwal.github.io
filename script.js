// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
const menuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  
  // Toggle icon between list and x
  const icon = menuBtn.querySelector('i');
  if (navLinks.classList.contains('active')) {
    icon.classList.replace('ph-list', 'ph-x');
  } else {
    icon.classList.replace('ph-x', 'ph-list');
  }
});

// Close mobile menu when a link is clicked
const mobileLinks = document.querySelectorAll('.nav-links a');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      const icon = menuBtn.querySelector('i');
      icon.classList.replace('ph-x', 'ph-list');
    }
  });
});

// Scroll Reveal Animations
function reveal() {
  const reveals = document.querySelectorAll('.reveal');
  
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100;
    
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    }
  }
}

// Check on scroll
window.addEventListener('scroll', reveal);

// Check on load
document.addEventListener('DOMContentLoaded', () => {
  // Add a slight delay for aesthetic initial load
  setTimeout(reveal, 100);
});

// Active Link highlighting on scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    // adding a buffer (threshold)
    if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href').substring(1) === current) {
      item.classList.add('active');
    }
  });
});

// Initialize Vanta.js Background
if (typeof VANTA !== 'undefined') {
  VANTA.NET({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x38bdf8,
    backgroundColor: 0x0f172a,
    points: 12.00,
    maxDistance: 22.00,
    spacing: 16.00,
    showDots: true
  });
}
