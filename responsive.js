const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector("#navbar .nav-menu");
const navLink = document.querySelectorAll(".nav-link");

function mobileMenu() {
    navMenu.classList.toggle("display");
}

function closeMenu() {
    navMenu.classList.remove("display");
}

hamburger.onclick = mobileMenu;
navLink.forEach(n => n.addEventListener("click", closeMenu))