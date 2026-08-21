document.getElementById("year").textContent = new Date().getFullYear();

const navToggle = document.getElementById("nav-toggle");
const navbar = document.getElementById("navbar");

navToggle.addEventListener("click", () => {
  navbar.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => navbar.classList.remove("open"));
});

// Scroll-triggered fade-up reveal for cards and timeline items
const revealTargets = document.querySelectorAll(
  ".about-card, .skill-card, .timeline-item, .project-card, .cert-card, .contact-card",
);
revealTargets.forEach((el) => el.classList.add("reveal"));

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);
revealTargets.forEach((el) => revealObserver.observe(el));

// Animated number counters for the About stats
const counters = document.querySelectorAll("[data-count]");
const counterObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.count);
      const suffix = el.dataset.suffix || "";
      const duration = 1200;
      const start = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        el.textContent = Math.round(progress * target) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      observer.unobserve(el);
    });
  },
  { threshold: 0.5 },
);
counters.forEach((el) => counterObserver.observe(el));
