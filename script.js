// Admin Password (Replace with your desired password)
const ADMIN_PASSWORD = "admin123";

// Toggle Editing
function toggleEditing(enabled) {
    const editableElements = document.querySelectorAll("[contenteditable]");
    editableElements.forEach(element => {
        element.contentEditable = enabled ? "true" : "false";
    });
    document.getElementById("save-button").style.display = enabled ? "block" : "none";
}

// Save content to localStorage
document.getElementById("save-button").addEventListener("click", () => {
    const editableElements = document.querySelectorAll("[contenteditable='true']");
    editableElements.forEach(element => {
        localStorage.setItem(element.id, element.innerHTML);
    });
    alert("Changes saved!");
});

// Load saved content
document.addEventListener("DOMContentLoaded", () => {
    const editableElements = document.querySelectorAll("[contenteditable]");
    editableElements.forEach(element => {
        const savedContent = localStorage.getItem(element.id);
        if (savedContent) {
            element.innerHTML = savedContent;
        }
    });
});

// Login Modal Logic
const loginBtn = document.getElementById("login-btn");
const loginModal = document.getElementById("login-modal");
const closeModal = document.querySelector(".close");

// Show modal when login button is clicked
loginBtn.addEventListener("click", () => {
    loginModal.style.display = "block";
});

// Close modal when the 'x' is clicked
closeModal.addEventListener("click", () => {
    loginModal.style.display = "none";
});

// Login Button Logic
document.getElementById("login-button").addEventListener("click", () => {
    const password = document.getElementById("admin-password").value;
    if (password === Pornography) {
        alert("Welcome, Admin!");
        toggleEditing(true);
        loginModal.style.display = "none";
    } else {
        alert("Incorrect password!");
    }
});

// Close modal when clicking outside the modal content
window.addEventListener("click", (event) => {
    if (event.target === loginModal) {
        loginModal.style.display = "none";
    }
});
