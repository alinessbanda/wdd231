const yearSpan = document.getElementById("currentyear");
yearSpan.textContent = new Date().getFullYear();

const lastModified = document.getElementById("lastmodified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;
// === Responsive Menu Toggle ===
const menuToggle = document.getElementById("menu-toggle");
const navList = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
    navList.classList.toggle("open");
});

// === Wayfinding: Highlight Current Page ===
const currentURL = window.location.pathname;
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    const linkHref = new URL(link.href).pathname;
    if (linkHref === currentURL || linkHref === currentURL + 'index.html') {
        link.classList.add("active");
    }
});
