document.addEventListener("DOMContentLoaded", () => {
  // Año en el footer
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Menú hamburguesa
  const menuToggle = document.querySelector(".mc-menu-toggle");
  const navOverlay = document.querySelector(".mc-nav-overlay");

  if (menuToggle && navOverlay) {
    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.classList.toggle("is-open");
      navOverlay.classList.toggle("is-open", isOpen);
    });

    // Cerrar al hacer clic en enlace o en el fondo del overlay
    navOverlay.addEventListener("click", (e) => {
      if (e.target.tagName === "A" || e.target === navOverlay) {
        menuToggle.classList.remove("is-open");
        navOverlay.classList.remove("is-open");
      }
    });
  }

  // AOS (animaciones al hacer scroll)
  if (window.AOS) {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-out-quart"
    });
  }

  // GSAP (animaciones de entrada)
  if (window.gsap) {
    gsap.from(".mc-hero-content h1", {
      y: 30,
      opacity: 0,
      duration: 0.8
    });

    gsap.from(".mc-hero-sub", {
      y: 20,
      opacity: 0,
      delay: 0.15,
      duration: 0.7
    });

    gsap.from(".mc-hero-actions", {
      y: 20,
      opacity: 0,
      delay: 0.3,
      duration: 0.7
    });

    gsap.from(".mc-hero-visual", {
      y: 40,
      opacity: 0,
      delay: 0.25,
      duration: 0.9
    });

    gsap.from(".mc-card", {
      scrollTrigger: ".mc-card",
      y: 30,
      opacity: 0,
      stagger: 0.12,
      duration: 0.6
    });
  }
});
