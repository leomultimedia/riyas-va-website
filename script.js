/* Riyas V. A. | site behaviour
   Progressive enhancement only: the page is fully usable without this file. */
(function () {
  "use strict";

  const doc = document;
  const root = doc.documentElement;
  root.classList.remove("no-js");

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const header = doc.querySelector(".masthead");

  /* ---------- Mobile navigation ---------- */
  const toggle = doc.querySelector(".menu-toggle");
  const nav = doc.querySelector("#primary-nav");
  if (header) header.classList.add("has-js");

  function setMenu(open) {
    if (!toggle || !nav) return;
    nav.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  if (toggle && nav) {
    toggle.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
    nav.addEventListener("click", (e) => {
      if (e.target.closest("a")) setMenu(false);
    });
    doc.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && nav.classList.contains("open")) {
        setMenu(false);
        toggle.focus();
      }
    });
    doc.addEventListener("click", (e) => {
      if (nav.classList.contains("open") && !nav.contains(e.target) && !toggle.contains(e.target)) setMenu(false);
    });
  }

  /* ---------- Current-section highlight in nav ---------- */
  const navLinks = Array.from(doc.querySelectorAll("#primary-nav a[href^='#']"));
  const sections = navLinks.map((a) => doc.querySelector(a.getAttribute("href"))).filter(Boolean);
  if ("IntersectionObserver" in window && sections.length) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((a) => {
            const active = a.getAttribute("href") === "#" + entry.target.id;
            if (active) a.setAttribute("aria-current", "true");
            else a.removeAttribute("aria-current");
          });
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => spy.observe(s));
  }

  /* ---------- Footer year ---------- */
  doc.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });

  /* ---------- Carousels (scroll-snap + buttons + status) ---------- */
  doc.querySelectorAll("[data-carousel]").forEach((carousel) => {
    const track = carousel.querySelector("[data-carousel-track]");
    const prev = carousel.querySelector("[data-carousel-prev]");
    const next = carousel.querySelector("[data-carousel-next]");
    const status = carousel.querySelector("[data-carousel-status]");
    if (!track || !prev || !next) return;

    const items = Array.from(track.children);
    const pad = (n) => String(n).padStart(2, "0");

    function stepWidth() {
      const first = items[0];
      if (!first) return 0;
      const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 0;
      return first.getBoundingClientRect().width + gap;
    }

    function currentIndex() {
      const w = stepWidth();
      return w ? Math.round(track.scrollLeft / w) : 0;
    }

    function update() {
      const max = track.scrollWidth - track.clientWidth - 2;
      prev.disabled = track.scrollLeft <= 2;
      next.disabled = track.scrollLeft >= max;
      if (status) status.textContent = pad(currentIndex() + 1) + " / " + pad(items.length);
    }

    function scrollBy(dir) {
      track.scrollBy({ left: dir * stepWidth(), behavior: reduceMotion ? "auto" : "smooth" });
    }

    prev.addEventListener("click", () => scrollBy(-1));
    next.addEventListener("click", () => scrollBy(1));

    // Arrow keys when the track (or something inside it) has focus
    track.setAttribute("tabindex", "0");
    track.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") { e.preventDefault(); scrollBy(1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); scrollBy(-1); }
      if (e.key === "Home") { e.preventDefault(); track.scrollTo({ left: 0 }); }
      if (e.key === "End") { e.preventDefault(); track.scrollTo({ left: track.scrollWidth }); }
    });

    let raf = 0;
    track.addEventListener("scroll", () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    }, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    update();
  });

  /* ---------- Consent-gated media embeds ---------- */
  doc.querySelectorAll("[data-embed]").forEach((frame) => {
    const btn = frame.querySelector(".media-play");
    if (!btn) return;
    btn.addEventListener("click", () => {
      if (frame.classList.contains("is-loaded")) return;
      const iframe = doc.createElement("iframe");
      iframe.src = frame.dataset.src;
      iframe.title = frame.dataset.title || "Embedded video";
      iframe.loading = "lazy";
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
      iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
      iframe.setAttribute("allowfullscreen", "");
      frame.appendChild(iframe);
      frame.classList.add("is-loaded");
      iframe.focus();
    });
  });
})();
