document.querySelector(".menu-flags, .angle-down, .angle-up").addEventListener("click", animateMenu);

const menuLan = document.querySelector(".flags");
const angleDown = document.querySelector(".angle-down");
const angleUp = document.querySelector(".angle-up");
const menuFlags = document.querySelector(".menu-flags");

function animateMenu(){
  menuLan.classList.toggle("activeflags");
  angleDown.classList.toggle("activeAngle-down");
  angleUp.classList.toggle("activeAngle-up");
};