let btnMenu = document.getElementById("btn_open");
let menu = document.getElementById("hamburger-button");
let overlay = document.getElementById("overlay__menu");


btnMenu.addEventListener("click", () => {
  menu.classList.add("open");
});

menu.addEventListener("click", () => {
  menu.classList.remove("open");
});

overlay.addEventListener("click", () => {
  menu.classList.remove("open");
});

