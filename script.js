const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(item => item.addEventListener("click", () => {
    hamburger.classlist.remove("active");
    navMenu.classlist.remove("active");
}))