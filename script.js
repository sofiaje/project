const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const close = document.querySelector(".close");
const topBar = document.querySelector(".top-bar");



hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(item => item.addEventListener("click", () => {
    hamburger.classlist.remove("active");
    navMenu.classlist.remove("active");
}))

close.addEventListener("click", () => {
    topBar.classList.add("hide");
})