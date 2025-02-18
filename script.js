document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Skills Hover Effect
    document.querySelectorAll(".skills-container img").forEach(skill => {
        skill.addEventListener("mouseenter", () => {
            skill.style.transform = "scale(1.2)";
        });
        skill.addEventListener("mouseleave", () => {
            skill.style.transform = "scale(1)"; // Fixed syntax error
        });
    });

    // Project Hover Effect
    document.querySelectorAll(".project-card").forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.05)";
            card.style.transition = "transform 0.3s ease-in-out"; // Smooth transition added
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
        });
    });
});
