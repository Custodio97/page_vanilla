const $nav = document.querySelector(".nav-item")
const $toggle = document.querySelector(".toggle")

$toggle.addEventListener("click", () => {
    $nav.classList.toggle("active")
})