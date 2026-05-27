const menuBtn = document.getElementById("menu-toggle");
const mobileNav = document.getElementById("mobile-nav");
const themeToggle = document.getElementById("theme-toggle");

const setTheme = (theme) => {
  const nextTheme = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = nextTheme;
  if (themeToggle) {
    themeToggle.setAttribute("aria-pressed", String(nextTheme === "dark"));
    themeToggle.setAttribute("aria-label", nextTheme === "dark" ? "Включить светлую тему" : "Включить тёмную тему");
  }
};

try {
  setTheme(localStorage.getItem("site-theme") || "light");
} catch {
  setTheme(document.documentElement.dataset.theme || "light");
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    try {
      localStorage.setItem("site-theme", nextTheme);
    } catch {}
  });
}

if (menuBtn && mobileNav) {
  menuBtn.addEventListener("click", () => {
    const open = mobileNav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  mobileNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  }));
}

const header = document.getElementById("site-header");
if (header) {
  const updateShadow = () => {
    header.style.boxShadow = window.scrollY > 20 ? "0 8px 40px rgba(0,0,0,.35)" : "none";
  };
  updateShadow();
  window.addEventListener("scroll", updateShadow, { passive: true });
}

const observer = "IntersectionObserver" in window
  ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -32px 0px" })
  : null;
document.querySelectorAll("[data-reveal]").forEach((el, index) => {
  el.style.transitionDelay = `${(index % 4) * 0.05}s`;
  if (observer) observer.observe(el);
  else el.classList.add("revealed");
});

const topicMap = {
  project: "project",
  education: "education",
  rd: "rd",
  partnership: "partnership",
  development: "development",
  consulting: "consulting",
};

const requestForm = document.getElementById("request-form");
if (requestForm) {
  const topic = new URLSearchParams(window.location.search).get("topic");
  const select = requestForm.querySelector('[name="topic"]');
  if (select && topicMap[topic]) select.value = topicMap[topic];

  requestForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!requestForm.reportValidity()) return;
    const submit = requestForm.querySelector('[type="submit"]');
    const note = document.getElementById("form-success");
    submit.disabled = true;
    submit.textContent = "Отправляем...";
    window.setTimeout(() => {
      submit.disabled = false;
      submit.textContent = "Отправить запрос";
      requestForm.reset();
      if (note) {
        note.style.display = "block";
        note.focus?.();
      }
    }, 650);
  });
}
