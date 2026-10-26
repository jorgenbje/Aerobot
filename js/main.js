
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

// Filtrering av poster etter avdeling (/poster/?avdeling=software)
const filter = document.querySelector("[data-filter]");
const liste = document.querySelector("[data-postliste]");
if (filter && liste) {
  const tom = document.querySelector("[data-tom]");
  const velg = (avdeling) => {
    let antall = 0;
    filter.querySelectorAll("button").forEach((b) =>
      b.setAttribute("aria-pressed", b.dataset.avdeling === avdeling)
    );
    liste.querySelectorAll(".post").forEach((p) => {
      const vis = !avdeling || p.dataset.avdeling === avdeling;
      p.hidden = !vis;
      if (vis) antall++;
    });
    if (tom) tom.hidden = antall > 0;
  };
  filter.addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    velg(b.dataset.avdeling);
    const url = new URL(location);
    if (b.dataset.avdeling) url.searchParams.set("avdeling", b.dataset.avdeling);
    else url.searchParams.delete("avdeling");
    history.replaceState(null, "", url);
  });
  velg(new URLSearchParams(location.search).get("avdeling") || "");
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
