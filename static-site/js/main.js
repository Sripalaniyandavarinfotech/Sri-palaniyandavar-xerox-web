(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  // Icons
  if (window.lucide) lucide.createIcons();

  // Loader
  // Hide shortly after the DOM is ready; don't wait on the map iframe or fonts.
  setTimeout(() => $("#loader").classList.add("hide"), 900);

  $("#year").textContent = new Date().getFullYear();

  // Nav, progress bar, back-to-top, active link
  const nav = $("#nav");
  const progress = $("#scrollProgress");
  const backTop = $("#backTop");
  const sections = $$("main section[id]");
  const navAnchors = $$(".nav-links a:not(.btn)");

  const onScroll = () => {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    nav.classList.toggle("scrolled", y > 40);
    backTop.classList.toggle("show", y > 600);

    let current = "home";
    sections.forEach((s) => { if (y >= s.offsetTop - 140) current = s.id; });
    navAnchors.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${current}`));
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  backTop.addEventListener("click", () => window.scrollTo({ top: 0 }));

  // Mobile menu
  const toggle = $("#navToggle");
  const links = $("#navLinks");
  const setMenu = (open) => {
    toggle.classList.toggle("open", open);
    links.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open);
    document.body.classList.toggle("no-scroll", open);
  };
  toggle.addEventListener("click", () => setMenu(!links.classList.contains("open")));
  $$("a", links).forEach((a) => a.addEventListener("click", () => setMenu(false)));

  // Typing effect
  const words = [
    "Xerox & Printing",
    "Aadhaar Services",
    "e-Sevai Services",
    "FASTag & Recharge",
    "Ticket Booking",
    "Digital Banking",
    "Online Applications",
  ];
  const typed = $("#typed");
  if (!reduceMotion) {
    let wi = 0, ci = words[0].length, deleting = true;
    const tick = () => {
      const word = words[wi];
      ci += deleting ? -1 : 1;
      typed.textContent = word.slice(0, ci);
      let delay = deleting ? 45 : 90;
      if (!deleting && ci === word.length) { deleting = true; delay = 1800; }
      else if (deleting && ci === 0) { deleting = false; wi = (wi + 1) % words.length; delay = 300; }
      setTimeout(tick, delay);
    };
    setTimeout(tick, 2400);
  }

  // Counters
  const animateCounter = (el) => {
    const target = +el.dataset.target;
    const suffix = el.dataset.suffix || "";
    const dur = 1600;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toLocaleString("en-IN") + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  // Reveal on scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("visible");
      $$(".counter", e.target).forEach(animateCounter);
      io.unobserve(e.target);
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
  $$(".reveal").forEach((el) => io.observe(el));

  // Looping animations that should only run once visible
  const viewIo = new IntersectionObserver((entries) => {
    entries.forEach((e) => e.target.classList.toggle("in-view", e.isIntersecting));
  }, { threshold: 0.3 });
  $$(".steps").forEach((el) => viewIo.observe(el));

  // Service filters
  const filters = $$(".filter");
  const indicator = $(".filter-indicator");
  const cards = $$(".service-card");
  const moveIndicator = (btn) => {
    indicator.style.left = btn.offsetLeft + "px";
    indicator.style.top = btn.offsetTop + "px";
    indicator.style.width = btn.offsetWidth + "px";
    indicator.style.height = btn.offsetHeight + "px";
  };
  filters.forEach((btn) => btn.addEventListener("click", () => {
    filters.forEach((b) => b.classList.toggle("active", b === btn));
    moveIndicator(btn);
    const f = btn.dataset.filter;
    let i = 0;
    cards.forEach((card) => {
      const show = f === "all" || card.dataset.cat.split(" ").includes(f);
      card.classList.remove("pop");
      card.classList.toggle("hidden", !show);
      if (show) {
        card.classList.add("visible");
        card.style.setProperty("--pd", `${i++ * 0.05}s`);
        void card.offsetWidth;
        card.classList.add("pop");
      }
    });
  }));
  const initIndicator = () => moveIndicator($(".filter.active"));
  window.addEventListener("resize", initIndicator);
  document.fonts?.ready.then(initIndicator);
  initIndicator();

  // Card tilt + glow
  if (finePointer && !reduceMotion) {
    cards.forEach((card) => {
      card.addEventListener("pointermove", (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width;
        const y = (e.clientY - r.top) / r.height;
        card.style.transform = `perspective(800px) rotateX(${(0.5 - y) * 10}deg) rotateY(${(x - 0.5) * 12}deg) translateY(-6px)`;
        card.style.setProperty("--mx", `${x * 100}%`);
        card.style.setProperty("--my", `${y * 100}%`);
      });
      card.addEventListener("pointerleave", () => { card.style.transform = ""; });
    });

    // Magnetic buttons
    $$(".magnetic").forEach((btn) => {
      btn.addEventListener("pointermove", (e) => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        btn.style.transform = `translate(${x * 0.2}px, ${y * 0.3}px)`;
      });
      btn.addEventListener("pointerleave", () => { btn.style.transform = ""; });
    });
  }

  // Service modal
  const modal = $("#modal");
  const modalTitle = $("#modalTitle");
  const modalBody = $("#modalBody");
  const modalIcon = $("#modalIcon");
  let lastFocus = null;

  const openModal = (card) => {
    lastFocus = card;
    modalTitle.textContent = $("h3", card).textContent;
    modalIcon.innerHTML = $(".sc-icon", card).innerHTML;
    modalBody.innerHTML = $(".sc-details", card).innerHTML;
    $$("li", modalBody).forEach((li, i) => li.style.setProperty("--i", i));
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
    $(".modal-close", modal).focus();
  };
  const closeModal = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
    lastFocus?.focus();
  };
  cards.forEach((card) => {
    card.addEventListener("click", () => openModal(card));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openModal(card); }
    });
  });
  $$("[data-close]", modal).forEach((el) => el.addEventListener("click", closeModal));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (modal.classList.contains("open")) closeModal();
      else if (links.classList.contains("open")) setMenu(false);
    }
  });

  // Hero particles
  const canvas = $("#particles");
  const ctx = canvas.getContext("2d");
  let particles = [];
  let w, h;
  const mouse = { x: -9999, y: -9999 };

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.offsetWidth; h = canvas.offsetHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.min(Math.floor((w * h) / 16000), 90);
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.8 + 0.6,
    }));
  };

  const draw = () => {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;

      const dxm = p.x - mouse.x, dym = p.y - mouse.y;
      const dm = Math.hypot(dxm, dym);
      if (dm < 120) { p.x += dxm / dm * 1.5; p.y += dym / dm * 1.5; }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 179, 71, .8)";
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const d = Math.hypot(p.x - q.x, p.y - q.y);
        if (d < 120) {
          ctx.strokeStyle = `rgba(255, 138, 0, ${0.18 * (1 - d / 120)})`;
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
        }
      }
    }
    if (heroVisible) requestAnimationFrame(draw);
  };

  let heroVisible = true;
  const hero = $(".hero");
  hero.addEventListener("pointermove", (e) => {
    const r = canvas.getBoundingClientRect();
    mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
  });
  hero.addEventListener("pointerleave", () => { mouse.x = mouse.y = -9999; });

  if (!reduceMotion) {
    resize();
    window.addEventListener("resize", resize);
    new IntersectionObserver(([e]) => {
      const was = heroVisible;
      heroVisible = e.isIntersecting;
      if (heroVisible && !was) requestAnimationFrame(draw);
    }).observe(hero);
    requestAnimationFrame(draw);
  }

  // Hero parallax on blobs
  if (finePointer && !reduceMotion) {
    const blobs = $$(".blob");
    const visual = $(".hero-visual");
    hero.addEventListener("pointermove", (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      blobs.forEach((b, i) => { b.style.translate = `${x * (i + 1) * 30}px ${y * (i + 1) * 30}px`; });
      visual.style.translate = `${x * -20}px ${y * -20}px`;
    });
  }

  // Enquiry form (FormSubmit AJAX; plain POST still works without JS)
  const enquiryForm = $("#enquiryForm");
  if (enquiryForm) {
    const card = enquiryForm.closest(".enquiry-card");
    const done = $(".enquiry-done", card);
    const error = $(".enquiry-error", enquiryForm);
    const submitBtn = $("button[type=submit]", enquiryForm);
    const label = $("span", submitBtn);
    enquiryForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      error.hidden = true;
      submitBtn.disabled = true;
      label.textContent = "Sending…";
      try {
        const res = await fetch("https://formsubmit.co/ajax/vijayxerox02@gmail.com", {
          method: "POST",
          headers: { Accept: "application/json" },
          body: new FormData(enquiryForm),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok || String(data.success) === "false") throw new Error(data.message);
        enquiryForm.reset();
        enquiryForm.hidden = true;
        done.hidden = false;
      } catch {
        error.hidden = false;
      } finally {
        submitBtn.disabled = false;
        label.textContent = "Send Enquiry";
      }
    });
    $("#enquiryAgain").addEventListener("click", () => { done.hidden = true; enquiryForm.hidden = false; });
  }
})();
