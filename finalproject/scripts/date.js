// date.js

// Update current year
const yearSpan = document.getElementById("currentyear");
yearSpan.textContent = new Date().getFullYear();

// Update last modified date
const lastModified = document.getElementById("lastmodified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;

// DOMContentLoaded to ensure elements are ready
document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu').querySelector('ul');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';

    // Apply saved theme
    document.body.classList.toggle('dark-theme', currentTheme === 'dark');

    // Listen for toggle button
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    });
});
