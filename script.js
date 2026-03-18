// Variable selection
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu li a");

// Set default to dark mode
document.body.classList.add("dark-mode");

// 1. Mobile Menu Toggle
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// 2. Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});

// 3. Simple Navbar background change on scroll
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.background = "var(--navbar-bg)";
        navbar.style.padding = "10px 0";
    } else {
        navbar.style.background = "var(--navbar-bg)";
        navbar.style.padding = "0";
    }
});

// 4. Certificate Modal Functionality
const modal = document.getElementById("certificate-modal");
const modalImage = document.getElementById("modal-image");
const closeBtn = document.querySelector(".close");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const certificateImages = document.querySelectorAll(".certificates-grid img");
let currentIndex = 0;

certificateImages.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        openModal(img.src, img.alt);
    });
});

function openModal(src, alt) {
    modalImage.src = src;
    modalImage.alt = alt;
    modal.style.display = "flex";
}

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + certificateImages.length) % certificateImages.length;
    const img = certificateImages[currentIndex];
    modalImage.src = img.src;
    modalImage.alt = img.alt;
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % certificateImages.length;
    const img = certificateImages[currentIndex];
    modalImage.src = img.src;
    modalImage.alt = img.alt;
});

// Keyboard navigation
document.addEventListener("keydown", (e) => {
    if (modal.style.display === "flex") {
        if (e.key === "Escape") {
            modal.style.display = "none";
        } else if (e.key === "ArrowLeft") {
            prevBtn.click();
        } else if (e.key === "ArrowRight") {
            nextBtn.click();
        }
    }
});