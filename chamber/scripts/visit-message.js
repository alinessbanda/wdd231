// visit-message.js

// Get today's date in milliseconds
const today = Date.now();

// Get last visit from localStorage
const lastVisit = localStorage.getItem("lastVisit");

// Reference to the sidebar message container
const messageContainer = document.getElementById("visit-message");

// Function to calculate difference in days
function getDaysBetweenVisits(current, previous) {
    const msPerDay = 1000 * 60 * 60 * 24;
    return Math.floor((current - previous) / msPerDay);
}

let message = "";

if (!lastVisit) {
    message = "Welcome! Let us know if you have any questions.";
} else {
    const daysSinceLastVisit = getDaysBetweenVisits(today, Number(lastVisit));

    if (daysSinceLastVisit < 1) {
        message = "Back so soon! Awesome!";
    } else if (daysSinceLastVisit === 1) {
        message = "You last visited 1 day ago.";
    } else {
        message = `You last visited ${daysSinceLastVisit} days ago.`;
    }
}

// Display message
if (messageContainer) {
    messageContainer.textContent = message;
}

// Save current visit time
localStorage.setItem("lastVisit", today);
