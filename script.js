function toggleMenu() {
    const nav = document.getElementById("navLinks");
    const btn = document.querySelector('.menu-btn');
    if (!nav) return;
    nav.classList.toggle('open');
    const expanded = nav.classList.contains('open');
    if (btn) btn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
}

function openWhatsApp() {
    window.open("https://wa.me/0695347589", "_blank");
}

function openEmail() {
    window.location.href = "mailto:wiseywallets@gmail.com";
}

function openCall() {
    window.location.href = "tel:+27812379075";
}

/* THEME LOGIC */
function loadTheme() {
    const saved = localStorage.getItem("theme");
    const system = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const theme = saved || system;
    document.documentElement.setAttribute("data-theme", theme);
}

function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
}

loadTheme();
