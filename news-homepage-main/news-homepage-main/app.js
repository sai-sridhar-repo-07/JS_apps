const menuOpenBtn = document.querySelector(".menu-open");
const menuCloseBtn = document.querySelector(".menu-close");
const NavLinks = document.querySelector(".nav-links");

const toggleBtn = () => {
  menuCloseBtn.classList.toggle("active");
  NavLinks.classList.toggle("active");
  menuOpenBtn.classList.toggle("active");
};

menuOpenBtn.addEventListener("click", toggleBtn);

menuCloseBtn.addEventListener("click", toggleBtn);
