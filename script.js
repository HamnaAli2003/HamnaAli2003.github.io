const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

/* ---------- Preloader ---------- */
const preloader = document.getElementById("preloader");
const hidePreloader = () => {
  if (preloader && !preloader.classList.contains("done")) preloader.classList.add("done");
};
window.addEventListener("load", hidePreloader);
setTimeout(hidePreloader, 2200);

/* ---------- Scroll progress ---------- */
const scrollBar = document.getElementById("scrollProgress");
const rootEl = document.documentElement;

const onScroll = () => {
  const nav = document.getElementById("nav");
  const toTop = document.getElementById("toTop");
  if (nav) nav.classList.toggle("scrolled", window.scrollY > 30);
  if (toTop) toTop.classList.toggle("show", window.scrollY > 500);

  const max = rootEl.scrollHeight - window.innerHeight;
  const ratio = max > 0 ? window.scrollY / max : 0;
  rootEl.style.setProperty("--progress", String(ratio));
};

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ---------- Mobile nav ---------- */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  hamburger.classList.toggle("open", open);
  hamburger.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("locked", open);
});

navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A" && navLinks.classList.contains("open")) {
    navLinks.classList.remove("open");
    hamburger.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
    document.body.classList.remove("locked");
  }
});

document.getElementById("toTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
});

/* ---------- Typed effect ---------- */
const typedEl = document.getElementById("typed");
const roles = [
  "digital experiences",
  "responsive interfaces",
  "pixel-perfect UIs",
  "full-stack apps",
  "mobile-first UIs",
];

let typedIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  const word = roles[typedIndex];
  typedEl.textContent = word.slice(0, charIndex);

  if (!deleting) {
    charIndex++;
    if (charIndex > word.length) {
      deleting = true;
      setTimeout(typeLoop, 1900);
      return;
    }
  } else {
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      typedIndex = (typedIndex + 1) % roles.length;
      setTimeout(typeLoop, 350);
      return;
    }
  }
  setTimeout(typeLoop, deleting ? 34 : 78);
}

if (!prefersReduced && typedEl) typeLoop();

/* ---------- Custom cursor ---------- */
const cursorDot = document.getElementById("cursorDot");
const cursorRing = document.getElementById("cursorRing");

if (finePointer && cursorDot && cursorRing && !prefersReduced) {
  rootEl.classList.add("cursor-on");

  const targets = "a, button, .spotlight, input, textarea, select, [href]";
  let ringX = window.innerWidth / 2;
  let ringY = window.innerHeight / 3;

  window.addEventListener("mousemove", (e) => {
    cursorDot.style.left = `${e.clientX}px`;
    cursorDot.style.top = `${e.clientY}px`;
    ringX = e.clientX;
    ringY = e.clientY;
  });

  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(targets)) {
      cursorDot.classList.add("grow");
      cursorRing.classList.add("grow");
    }
  });

  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(targets)) {
      cursorDot.classList.remove("grow");
      cursorRing.classList.remove("grow");
    }
  });

  let cursorX = ringX;
  let cursorY = ringY;
  function tickCursor() {
    cursorX += (ringX - cursorX) * 0.16;
    cursorY += (ringY - cursorY) * 0.16;
    cursorRing.style.left = `${cursorX}px`;
    cursorRing.style.top = `${cursorY}px`;
    requestAnimationFrame(tickCursor);
  }
  tickCursor();
}

/* ---------- Reveal on scroll ---------- */
const revealEls = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);
revealEls.forEach((el) => revealObserver.observe(el));

/* ---------- Scrollspy ---------- */
const sectionIds = ["home", "services", "about", "experience", "projects", "skills", "contact"];
const menuAnchors = document.querySelectorAll(".links a[href^='#']");

const spyObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      menuAnchors.forEach((a) =>
        a.classList.toggle("active", a.getAttribute("href") === `#${entry.target.id}`)
      );
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
sectionIds.forEach((id) => {
  const el = document.getElementById(id);
  if (el) spyObserver.observe(el);
});

/* ---------- Stat counters ---------- */
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

const statNums = document.querySelectorAll(".stat-num");
const animateCount = (el) => {
  const target = parseInt(el.dataset.count, 10) || 0;
  const suffix = el.dataset.suffix || "";
  if (prefersReduced) {
    el.textContent = target + suffix;
    return;
  }
  const duration = 1300;
  const start = performance.now();
  const step = (now) => {
    const p = Math.min(1, (now - start) / duration);
    el.textContent = Math.round(easeOutCubic(p) * target) + suffix;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entries.forEach((e) => {
          e.target.classList.contains("stat-num") && animateCount(e.target);
        });
        counterObserver.disconnect();
      }
    });
  },
  { threshold: 0.5 }
);
statNums.forEach((el) => counterObserver.observe(el));

/* ---------- Expertise bars ---------- */
const expertiseSection = document.querySelector(".expertise");
const fillBars = () => {
  document.querySelectorAll(".exp-item").forEach((item) => {
    const bar = item.querySelector(".bar-fill");
    const num = item.querySelector(".exp-top b");
    const level = parseInt(bar.dataset.level, 10) || 0;
    const fill = parseInt(num.dataset.fill, 10) || 0;
    if (prefersReduced) {
      bar.style.width = `${level}%`;
      num.textContent = `${fill}%`;
      return;
    }
    setTimeout(() => {
      bar.style.width = `${level}%`;
      num.textContent = `${fill}%`;
    }, 200);
  });
};

if (expertiseSection) {
  const expObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          fillBars();
          expObserver.disconnect();
        }
      });
    },
    { threshold: 0.3 }
  );
  expObserver.observe(expertiseSection);
}

/* ---------- Spotlight + tilt cards ---------- */
const spotlightCards = document.querySelectorAll(".spotlight");

if (!prefersReduced) {
  spotlightCards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const px = e.clientX - rect.left;
      const py = e.clientY - rect.top;
      const mx = (px / rect.width) * 100;
      const my = (py / rect.height) * 100;
      card.style.setProperty("--mx", `${mx}%`);
      card.style.setProperty("--my", `${my}%`);
      card.style.setProperty("--rx", `${(0.5 - my / 100) * -6}deg`);
      card.style.setProperty("--ry", `${(0.5 - mx / 100) * 6}deg`);
      card.classList.add("tilting");
    });
    card.addEventListener("mouseleave", () => {
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
      card.classList.remove("tilting");
    });
  });
}

/* ---------- Contact form ---------- */
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  const formStatus = document.getElementById("formStatus");
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector(".form-submit");
    const key = contactForm.access_key.value;
    if (!key || key.includes("YOUR_")) {
      formStatus.textContent = "Form not configured yet — email me at malikhamnaali@gmail.com";
      formStatus.className = "form-status error";
      return;
    }
    btn.disabled = true;
    const originalHTML = btn.innerHTML;
    btn.textContent = "Sending...";
    formStatus.textContent = "";
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(contactForm))),
      });
      const data = await res.json();
      if (data.success) {
        contactForm.reset();
        formStatus.textContent = "Message sent! I'll get back to you soon.";
        formStatus.className = "form-status success";
      } else {
        throw new Error(data.message || "Something went wrong");
      }
    } catch (err) {
      formStatus.textContent = "Something went wrong — email me at malikhamnaali@gmail.com";
      formStatus.className = "form-status error";
    } finally {
      btn.disabled = false;
      btn.innerHTML = originalHTML;
    }
  });
}

/* ---------- Project filters ---------- */
const filters = document.getElementById("filters");
const projectsGrid = document.getElementById("projectsGrid");

filters.querySelectorAll(".filter").forEach((btn) => {
  btn.addEventListener("click", () => {
    filters.querySelectorAll(".filter").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const active = btn.dataset.filter;
    projectsGrid.querySelectorAll(".project-card").forEach((card) => {
      const cats = card.dataset.cat.split(" ");
      const show = active === "all" || cats.includes(active);
      card.classList.toggle("hidden", !show);
      if (show) {
        card.style.animation = "none";
        void card.offsetHeight;
        card.style.animation = "";
      }
    });
  });
});