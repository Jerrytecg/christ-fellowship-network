// Scroll animation
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
  
    const revealSections = () => {
      const trigger = window.innerHeight * 0.85;
  
      sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < trigger) {
          section.classList.add("visible");
        }
      });
    };
  
    window.addEventListener("scroll", revealSections);
    revealSections();
  });
  
  // Theme toggle
  const toggle = document.getElementById("theme-toggle");
  toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark");
  });function updateCountdown() {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0); // Set to midnight tonight
  
    const diff = midnight - now;
  
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
  
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
  }
  
  // Update countdown every second
  setInterval(updateCountdown, 1000);
  updateCountdown(); // Run immediately on load// Mobile Nav Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });