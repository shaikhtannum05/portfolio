
// Typing Effect
const text = "Aspiring Web Developer passionate about building modern websites.";
let index = 0;

function typingEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typingEffect, 60);
    }
}
typingEffect();


// Scroll Reveal Animation
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if(cardTop < screenHeight - 100){
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
    btn.addEventListener("click", function(){
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

        if(pageYOffset >= sectionTop - 200){
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if(link.getAttribute("href") == "#" + current){
            link.classList.add("active");
        }
    });

});
