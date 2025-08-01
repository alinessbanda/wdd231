// Fill the hidden timestamp field with current datetime
document.addEventListener("DOMContentLoaded", () => {
    const timestampInput = document.getElementById("timestamp");
    const now = new Date();
    timestampInput.value = now.toISOString(); // e.g., "2025-07-30T13:45:00.000Z"
});

// Modal functions
function openModal(id) {
    document.getElementById(id).style.display = "block";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

// Close modal when clicking outside of modal content
window.addEventListener("click", (event) => {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
