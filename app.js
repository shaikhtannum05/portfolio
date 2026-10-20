/* Animated Typing Effect */
const typingElement = document.getElementById("typing");

if (typingElement) {
    const words = [
        "Aspiring Front-End Developer",
        "Creative Web Designer",
        "Responsive Website Developer",
        "Creative Problem Solver"
    ];

    let wordIndex = 0;
    let characterIndex = 0;
    let deleting = false;

    function typingEffect() {
        const currentWord = words[wordIndex];

        if (deleting) {
            characterIndex--;
        } else {
            characterIndex++;
        }

        typingElement.textContent =
            currentWord.substring(0, characterIndex);

        let delay = deleting ? 40 : 80;

        if (!deleting && characterIndex === currentWord.length) {
            deleting = true;
            delay = 1200;
        } else if (deleting && characterIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            delay = 400;
        }

        setTimeout(typingEffect, delay);
    }

    typingEffect();
}


// Scroll Reveal Animation
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (cardTop < screenHeight - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.6s ease";
});


// Contact Button Popup
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", function () {
        console.log("Button clicked");
    });
});


// Navbar Active Link on Scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {
            link.classList.add("active");
        }
    });

});
