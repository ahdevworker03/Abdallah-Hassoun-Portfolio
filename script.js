document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".navbar__hamburger");
  const navLinks = document.querySelector(".navbar__links");
  const navLinksItems = navLinks.querySelectorAll("a");
  const navbar = document.querySelector(".navbar");

  hamburger.setAttribute("aria-expanded", "false");

  hamburger.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("navbar__links--open");
    hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  navLinksItems.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("navbar__links--open");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (event) => {
    if (!navbar.contains(event.target)) {
      navLinks.classList.remove("navbar__links--open");
      hamburger.setAttribute("aria-expanded", "false");
    }
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.classList.add("navbar--scrolled");
    } else {
      navbar.classList.remove("navbar--scrolled");
    }
  });

  const themeToggle = document.querySelector(".navbar__theme-toggle");
  const themeIcon = themeToggle.querySelector(".theme-icon");
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    themeIcon.textContent = "🌙";
  }

  themeToggle.addEventListener("click", () => {
    const isDark =
      document.documentElement.getAttribute("data-theme") === "dark";
    if (isDark) {
      document.documentElement.removeAttribute("data-theme");
      themeIcon.textContent = "☀️";
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      themeIcon.textContent = "🌙";
      localStorage.setItem("theme", "dark");
    }
  });

  const sections = document.querySelectorAll("section[id]");
  const navItems = document.querySelectorAll(".navbar__links a");

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navItems.forEach((link) => link.classList.remove("active"));
          const activeLink = document.querySelector(
            `.navbar__links a[href="#${entry.target.id}"]`,
          );
          if (activeLink) activeLink.classList.add("active");
        }
      });
    },
    { threshold: 0.4 },
  );

  sections.forEach((section) => navObserver.observe(section));

  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  const scrollTopBtn = document.createElement("button");
  scrollTopBtn.id = "scroll-top-btn";
  scrollTopBtn.innerHTML = "↑";
  scrollTopBtn.setAttribute("aria-label", "Scroll to top");
  document.body.appendChild(scrollTopBtn);

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

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add("visible");
    } else {
      scrollTopBtn.classList.remove("visible");
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
