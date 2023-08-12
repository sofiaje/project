const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const close = document.querySelector(".close");
const topBar = document.querySelector(".top-bar");



hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

// addEventListener("scroll", () => {
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
    
// })

document.querySelectorAll(".nav-link").forEach(item => item.addEventListener("click", () => {
    hamburger.classlist.remove("active");
    navMenu.classlist.remove("active");
}))

close.addEventListener("click", () => {
    topBar.classList.add("hide");
    localStorage.setItem('bannerClosed', 'true');
})

document.addEventListener('DOMContentLoaded', () => {
    let isClosed = localStorage.getItem('bannerClosed');
    if (isClosed) {
        topBar.classList.add("hide");
    }
})
