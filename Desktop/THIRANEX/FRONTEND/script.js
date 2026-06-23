// ===============================
// Smooth Active Navigation
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

// ===============================
// Navbar Shadow on Scroll
// ===============================

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";
    } else {
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.3)";
    }
});

// ===============================
// Typing Animation
// ===============================

const roles = [
    "AIML Student",
    "Full Stack Learner",
    "Future AI Engineer"
];

let roleIndex = 0;
let charIndex = 0;
let typingElement = document.querySelector(".hero-content h3");

function typeEffect() {

    if (charIndex < roles[roleIndex].length) {

        typingElement.textContent += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 100);

    } else {

        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {

    if (charIndex > 0) {

        typingElement.textContent =
            roles[roleIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseEffect, 50);

    } else {

        roleIndex++;

        if (roleIndex >= roles.length) {
            roleIndex = 0;
        }

        setTimeout(typeEffect, 300);
    }
}

window.onload = () => {

    if (typingElement) {
        typingElement.textContent = "";
        typeEffect();
    }
};

// ===============================
// Reveal Animation on Scroll
// ===============================

const revealElements = document.querySelectorAll(
    ".skill-card, .project-card, #about p, form"
);

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }
    });
}

revealElements.forEach(element => {
    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ===============================
// Contact Form Alert
// ===============================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        alert("Thank you! Your message has been received.");

        form.reset();
    });
}

// ===============================
// Image Hover Glow Effect
// ===============================

const profileImage = document.querySelector(".hero-image img");

if (profileImage) {

    profileImage.addEventListener("mouseenter", () => {

        profileImage.style.boxShadow =
            "0 0 50px rgba(56,189,248,0.9)";
    });

    profileImage.addEventListener("mouseleave", () => {

        profileImage.style.boxShadow =
            "0 0 30px rgba(56,189,248,0.5)";
    });
}

// ===============================
// Welcome Message
// ===============================

console.log("Portfolio Website Loaded Successfully!");