const yearSpan = document.getElementById("currentyear");
yearSpan.textContent = new Date().getFullYear();

const lastModified = document.getElementById("lastmodified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;
