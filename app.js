const burger = document.querySelector(".burger");

const iconBurger = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-times");
const column = document.querySelector("aside");

burger.addEventListener("click", function() {
  iconX.classList.toggle("show");
  column.classList.toggle("show");
  iconBurger.classList.toggle("show");
});
