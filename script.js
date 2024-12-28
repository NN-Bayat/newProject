const menuBtn = document.getElementById("menu-btn");
const menuIcon = menuBtn.querySelector("i");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("was");

    const wasAst = navLinks.classList.contains("was");
    menuIcon.setAttribute("class", wasAst ? "ri-close-fill" : "ri-menu-3-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("was");
});

ScrollReveal().reveal(".header__images img", {
    distance: "50px",
    duration: 1000,
    origin: "right",
    interval: 500,
});

ScrollReveal().reveal(".header__content h1", {
    distance: "50px",
    duration: 1000,
    origin: "bottom",
    delay: 800,
});

ScrollReveal().reveal(".header__content .section__description", {
    distance: "50px",
    duration: 1000,
    origin: "bottom",
    delay: 1000,
});

ScrollReveal().reveal(".header__content form", {
    distance: "50px",
    duration: 1000,
    origin: "bottom",
    delay: 1500,
});

ScrollReveal().reveal(".choose__image img", {
    distance: "50px",
    duration: 1000,
    origin: "left",
});

ScrollReveal().reveal(".choose__content .section__sub_header", {
    distance: "50px",
    duration: 1000,
    origin: "bottom",
    delay: 500,
});

ScrollReveal().reveal(".choose__content .section__header", {
    distance: "50px",
    duration: 1000,
    origin: "bottom",
    delay: 800,
});

ScrollReveal().reveal(".choose__list li", {
    distance: "50px",
    duration: 1000,
    origin: "bottom",
    delay: 1300,
    interval: 800,
});

const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 3,
    loop: true,
})

ScrollReveal().reveal(".explore__image img", {
    distance: "50px",
    origin: "right",
    delay: 500,
});

ScrollReveal().reveal(".explore__content .section__sub_header", {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
    delay: 1000,
});

ScrollReveal().reveal(".explore__content .section__header", {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
    delay: 1500,
});

ScrollReveal().reveal(".explore__content .section__description", {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
    delay: 2000,
});

ScrollReveal().reveal(".explore__content .explore__btn", {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
    delay: 2250,
});

ScrollReveal().reveal(".explore__grid div", {
    duration: 1000,
    delay: 2600,
    interval: 500,
});


