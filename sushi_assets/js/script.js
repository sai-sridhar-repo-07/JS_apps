const filterBtns = document.querySelectorAll(".popular-foods__filter-btn");
const popularFoodCards = document.querySelectorAll(".popular-foods__card");

const removeActiveFilter = () => {
  filterBtns.forEach((btn) => {
    btn.classList.remove("active");
  });
};

filterBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeActiveFilter();
    e.target.classList.add("active");
  });
});

const removeActiveCard = () => {
  popularFoodCards.forEach((item) => {
    item.classList.remove("active-card");
  });
};

popularFoodCards.forEach((item) => {
  item.addEventListener("click", (e) => {
    removeActiveCard();
    e.target.classList.add("active-card");
  });
});
