const menuBtn = document.getElementById("menu-btn");
const menuIcon = menuBtn.querySelector("i");
const navLinks = document.getElementById("nav-links")

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("was");

    const wasAst = navLinks.classList.contains("was");
    menuIcon.setAttribute("class", wasAst ? "ri-close-fill" : "ri-menu-3-line")
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("was");
})






