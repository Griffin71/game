// script.js

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("header nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetUrl = e.target.href;

            document.body.classList.add("neon-transition");

            setTimeout(() => {
                window.location.href = targetUrl;
            }, 1000); // Adjust the timeout to match the animation duration
        });
    });
});
