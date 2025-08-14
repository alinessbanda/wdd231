const yearSpan = document.getElementById("currentyear");
yearSpan.textContent = new Date().getFullYear();

const lastModified = document.getElementById("lastmodified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;


document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu').querySelector('ul');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
});
