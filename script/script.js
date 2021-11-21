let icon = document.querySelector(".nav__burg");
let menu = document.querySelector(".nav__list");

icon.addEventListener("click", () => {
    if (icon.classList.contains("fa-bars")) {
        menu.style.left = "0";
        icon.classList.replace("fa-bars", "fa-times");
    } else {
        menu.style.left = "-250px";
        icon.classList.replace("fa-times", "fa-bars");
    }
})