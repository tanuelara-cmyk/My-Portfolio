// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menuBtn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("mobile-open");

    if (navbar.classList.contains("mobile-open")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});


// =========================
// CLOSE MENU AFTER CLICK
// =========================

const navLinks = document.querySelectorAll("#nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("mobile-open");

        menuBtn.textContent = "☰";

    });

});


// =========================
// YEAR
// =========================

document.getElementById("year").textContent =
    new Date().getFullYear();


// =========================
// SIMPLE SCROLL REVEAL
// =========================

const elements = document.querySelectorAll(
    ".project, .why-content, .about-content, .education"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


elements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

    observer.observe(element);

});