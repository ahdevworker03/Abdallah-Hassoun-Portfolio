document.addEventListener("DOMContentLoaded", () => {
  // ── Task 9: Mobile Menu Toggle ──────────────────────────

  // Select elements
  const hamburger = document.querySelector(".navbar__hamburger");
  const navLinks = document.querySelector(".navbar__links");
  const navLinksItems = navLinks.querySelectorAll("a");
  const navbar = document.querySelector(".navbar");

  // Set initial aria-expanded state
  hamburger.setAttribute("aria-expanded", "false");

  // Hamburger click handler - toggle menu open/closed
  hamburger.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("navbar__links--open");
    hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close menu on nav link click
  navLinksItems.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("navbar__links--open");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });

  // Close menu on outside click
  document.addEventListener("click", (event) => {
    if (!navbar.contains(event.target)) {
      navLinks.classList.remove("navbar__links--open");
      hamburger.setAttribute("aria-expanded", "false");
    }
  });

  // ── Task 10: Scroll-to-Top Button ───────────────────────

  // Create and inject button
  const scrollTopBtn = document.createElement("button");
  scrollTopBtn.id = "scroll-top-btn";
  scrollTopBtn.innerHTML = "↑";
  scrollTopBtn.setAttribute("aria-label", "Scroll to top");
  document.body.appendChild(scrollTopBtn);

  // Inject button styles
  const buttonStyles = document.createElement("style");
  buttonStyles.textContent = `
    #scroll-top-btn {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background-color: #1a56db;
      color: #ffffff;
      border: none;
      font-size: 1.1rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      visibility: hidden;
      transition: opacity 200ms ease, visibility 200ms ease,
                  background-color 200ms ease;
      z-index: 200;
    }

    #scroll-top-btn.visible {
      opacity: 1;
      visibility: visible;
    }

    #scroll-top-btn:hover {
      background-color: #1648c0;
    }
  `;
  document.head.appendChild(buttonStyles);

  // Show/hide button on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add("visible");
    } else {
      scrollTopBtn.classList.remove("visible");
    }
  });

  // Scroll to top on click
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
