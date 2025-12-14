// script.js

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const themeToggle = document.getElementById("themeToggle");
  const profileImg = document.querySelector(".profile-img");
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");
  const yearEl = document.getElementById("year");

  // ===== DEFAULT: LIGHT MODE =====
  body.classList.remove("dark");
  if (profileImg) {
    profileImg.src = "white.jpg";
  }

  // show only dark (moon) icon initially
  const sun = themeToggle.querySelector(".sun");
  const moon = themeToggle.querySelector(".moon");
  if (sun && moon) {
    sun.style.display = "none";
    moon.style.display = "inline";
  }

  // ===== THEME TOGGLE =====
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");

    const isDark = body.classList.contains("dark");

    // switch profile image
    if (profileImg) {
      profileImg.src = isDark ? "black.jpg" : "white.jpg";
    }

    // toggle icons
    if (sun && moon) {
      sun.style.display = isDark ? "inline" : "none";
      moon.style.display = isDark ? "none" : "inline";
    }
  });

  // ===== HAMBURGER MENU =====
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // close menu when clicking a link (mobile UX)
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });

  // ===== FOOTER YEAR =====
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ===== NAVBAR SCROLL EFFECT =====
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (!navbar) return;

    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});
