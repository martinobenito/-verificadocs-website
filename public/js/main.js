// VerificaDocs — Interacciones del sitio

document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initActiveNav();
  initSmoothScroll();
  initFormFeedback();
  initYearStamp();
});

function initMobileNav() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const menu = document.querySelector("[data-nav-menu]");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    menu.classList.toggle("hidden");
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 768) {
        menu.classList.add("hidden");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  });
}

function initActiveNav() {
  const path = window.location.pathname.replace(/\/$/, "") || "/index.html";
  const file = path.split("/").pop() || "index.html";
  document.querySelectorAll("[data-nav-menu] a, [data-nav-desktop] a").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) return;
    if (href === file || (file === "index.html" && href === "/") || (file === "" && href === "index.html")) {
      link.classList.add("nav-link-active");
    }
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

function initFormFeedback() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const status = form.querySelector("[data-form-status]");
    const submit = form.querySelector('button[type="submit"]');
    const data = new FormData(form);

    submit.disabled = true;
    submit.textContent = "Enviando...";
    if (status) status.textContent = "";

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      });
      if (res.ok) {
        form.reset();
        if (status) {
          status.textContent = "¡Gracias! Recibimos tu mensaje y te contactamos en menos de 24 horas hábiles.";
          status.className = "text-sm font-medium text-accent-700 mt-4";
        }
      } else {
        throw new Error("Network error");
      }
    } catch (err) {
      if (status) {
        status.textContent = "Hubo un problema al enviar el formulario. Por favor escribinos a martin.verificadocs@gmail.com";
        status.className = "text-sm font-medium text-red-600 mt-4";
      }
    } finally {
      submit.disabled = false;
      submit.textContent = "Enviar consulta";
    }
  });
}

function initYearStamp() {
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
}
