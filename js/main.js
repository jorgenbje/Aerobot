
// Mobilmeny
const toggle = document.querySelector(".nav__toggle");
if (toggle) {
  toggle.addEventListener("click", () => {
    const open = document.body.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", open);
  });
  document.querySelectorAll(".nav__links a").forEach((a) =>
    a.addEventListener("click", () => {
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

// Elementer glir inn når de kommer til syne
const reveals = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("in"));
}

// Dronebildet i toppen zoomer rolig ut mens man scroller
const heroImg = document.querySelector(".hero__media img");
const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (heroImg && !calm) {
  let ticking = false;
  const update = () => {
    const p = Math.min(window.scrollY / window.innerHeight, 1);
    heroImg.style.transform = `scale(${1.08 - p * 0.08}) translateY(${p * 4}%)`;
    ticking = false;
  };
  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true }
  );
}

// Piler for avdelingskarusellen
const rail = document.querySelector(".rail");
const prev = document.querySelector("[data-rail='prev']");
const next = document.querySelector("[data-rail='next']");
if (rail && prev && next) {
  const step = () => rail.querySelector(".dept").offsetWidth + 18;
  const sync = () => {
    prev.disabled = rail.scrollLeft < 8;
    next.disabled = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 8;
  };
  prev.addEventListener("click", () => rail.scrollBy({ left: -step(), behavior: "smooth" }));
  next.addEventListener("click", () => rail.scrollBy({ left: step(), behavior: "smooth" }));
  rail.addEventListener("scroll", sync, { passive: true });
  window.addEventListener("resize", sync);
  sync();
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
