// Roastery & Co — vanilla JS

// Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  const iconOpen = document.querySelector(".menu-toggle .icon-open");
  const iconClose = document.querySelector(".menu-toggle .icon-close");

  if (toggle && mobileNav) {
    toggle.addEventListener("click", () => {
      const open = mobileNav.classList.toggle("open");
      if (iconOpen && iconClose) {
        iconOpen.style.display = open ? "none" : "block";
        iconClose.style.display = open ? "block" : "none";
      }
    });
  }

  // Footer year
  const yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();

  // Reservation form -> mailto
  const form = document.getElementById("reservation-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const get = (k) => (data.get(k) || "").toString().trim();

      const to = "omguptaogwhitehathacker@gmail.com";
      const subject = `New reservation — ${get("name")} (${get("occasion")})`;
      const body = [
        "New reservation request from Roastery & Co website",
        "",
        `Name:     ${get("name")}`,
        `Email:    ${get("email")}`,
        `Phone:    ${get("phone")}`,
        `Date:     ${get("date")}`,
        `Time:     ${get("time")}`,
        `Guests:   ${get("guests")}`,
        `Occasion: ${get("occasion")}`,
        "",
        "Special requests:",
        get("notes") || "(none)",
      ].join("\n");

      window.location.href =
        `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      form.style.display = "none";
      const success = document.getElementById("reservation-success");
      if (success) success.style.display = "block";
    });
  }

  // Contact form
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      contactForm.style.display = "none";
      const ok = document.getElementById("contact-success");
      if (ok) ok.style.display = "block";
    });
  }
});
