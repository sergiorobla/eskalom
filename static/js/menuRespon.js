document.querySelector(".menu-flags").addEventListener("click", animateMenu);

const menuLan = document.querySelector(".flags");

function animateMenu(){
  menuLan.classList.toggle("activeflags");
}