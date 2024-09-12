const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navlinks li");

menu.addEventListener("click", function () {
	menu.classList.toggle("is-active");
	menuLinks.classList.toggle("active");
});