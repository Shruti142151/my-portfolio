// =========================================
// SHRUTI KUMARI — PORTFOLIO JAVASCRIPT
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    // Reveal elements when they enter the screen
    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1
        }
    );

    revealElements.forEach(function (element) {
        revealObserver.observe(element);
    });


    // Mobile navigation
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("mobile-open");
        });
    }

});

// Contact form
const contactForm = document.getElementById("contactForm");

if (contactForm) {
contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const subject = encodeURIComponent(
        "Portfolio Contact from " + name
    );

    const body = encodeURIComponent(
        "Name: " + name + "\n" +
        "Email: " + email + "\n\n" +
        "Message:\n" + message
    );

    window.location.href =
        "mailto:shrutisinghrajput142@gmail.com" +
        "?subject=" + subject +
        "&body=" + body;
});

}
