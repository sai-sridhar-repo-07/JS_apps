const img = "/images/image-product-1-thumbnail.jpg";
const deleteImg = "/images/icon-delete.svg";

const largeImages = document.querySelectorAll(".large-img");
const smallImages = document.querySelectorAll(".small-img");

const fullscreen_LargeImages = document.querySelectorAll(
  ".fullscreen__large-img"
);
const fullscreen_SmallImages = document.querySelectorAll(
  ".fullscreen__small-img"
);

const fullscreen = document.querySelector(".fullscreen");

const closeBtn = document.querySelector(".close-btn");
const nextBtn = document.querySelector(".right-arrow");
const previousBtn = document.querySelector(".left-arrow");
const nextBtnMobile = document.querySelector(".right-arrow-mobile");
const previousBtnMobile = document.querySelector(".left-arrow-mobile");

const minusBtn = document.querySelector(".minus");
const plusBtn = document.querySelector(".plus");
const count = document.querySelector(".no-of-product");
const addToCartBtn = document.querySelector(".add-to-cart");
const cartBox = document.querySelector(".cart-box");
const cart = document.querySelector(".cart");
const profile = document.querySelector(".profile");
const cartItemBox = document.querySelector(".cart-item");

const cartBtn = document.querySelector(".cart-btn");
// let m_deleteBtn = document.querySelector(".delete-btn");

const menuOpen = document.querySelector(".menu");
const menuClose = document.querySelector(".close-menu");

const navList = document.querySelector(".nav-list");

menuOpen.addEventListener("click", () => {
  menuClose.classList.toggle("active");
  navList.classList.toggle("active");
  menuOpen.classList.toggle("active");
});

menuClose.addEventListener("click", () => {
  menuClose.classList.toggle("active");
  navList.classList.toggle("active");
  menuOpen.classList.toggle("active");
});

// console.log(deleteBtn);

// console.log(fullscreen_LargeImages);
// console.log(fullscreen_SmallImages);

const deleteHandler = () => {
  cartItemBox.innerHTML = "";
  const pEle = document.createElement("p");
  pEle.textContent = "Your cart is empty";
  cartItemBox.appendChild(pEle);
  cartBtn.classList.remove("active");
};

const removeActiveFromLargeImages = () => {
  largeImages.forEach((item) => {
    item.classList.remove("active");
  });
};

const removeActiveFromSmallImages = () => {
  smallImages.forEach((item) => {
    item.classList.remove("active");
  });
};

const removeActiveFromFullscreenLargeImages = () => {
  fullscreen_LargeImages.forEach((item) => {
    item.classList.remove("active");
  });
};

const removeActiveFromFullscreenSmallImages = () => {
  fullscreen_SmallImages.forEach((item) => {
    item.classList.remove("active");
  });
};

const addActiveToLargeImages = (small_index) => {
  largeImages.forEach((item, index) => {
    if (small_index === index) {
      item.classList.add("active");
    }
  });
};
const addActiveToFullscreenLargeImages = (small_index) => {
  fullscreen_LargeImages.forEach((item, index) => {
    if (small_index === index) {
      item.classList.add("active");
    }
  });
};

const addActiveToFullscreenSmallImages = (small_index) => {
  fullscreen_SmallImages.forEach((item, index) => {
    if (small_index === index) {
      item.classList.add("active");
    }
  });
};

let fullscreen_index = undefined;
const find_full_screen_Index = () => {
  fullscreen_LargeImages.forEach((item, index) => {
    if (item.classList.contains("active")) {
      fullscreen_index = index;
    }
  });
};

let normal_index = undefined;
const findIndex = () => {
  largeImages.forEach((item, index) => {
    if (item.classList.contains("active")) {
      normal_index = index;
    }
  });
};

largeImages.forEach((item, index) => {
  item.addEventListener("click", () => {
    findIndex();
    removeActiveFromFullscreenLargeImages();
    removeActiveFromFullscreenSmallImages();
    addActiveToFullscreenLargeImages(normal_index);
    addActiveToFullscreenSmallImages(normal_index);
    fullscreen.classList.add("active");
  });
});

smallImages.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    removeActiveFromLargeImages();
    removeActiveFromSmallImages();
    e.target.classList.add("active");
    addActiveToLargeImages(index);
  });
});

fullscreen_SmallImages.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    removeActiveFromFullscreenLargeImages();
    removeActiveFromFullscreenSmallImages();
    e.target.classList.add("active");
    addActiveToFullscreenLargeImages(index);
  });
});

closeBtn.addEventListener("click", () => {
  fullscreen.classList.remove("active");
});

previousBtn.addEventListener("click", () => {
  find_full_screen_Index();
  // console.log(index);

  if (fullscreen_index > 0) {
    removeActiveFromFullscreenLargeImages();
    removeActiveFromFullscreenSmallImages();
    fullscreen_index = fullscreen_index - 1;
    addActiveToFullscreenLargeImages(fullscreen_index);
    addActiveToFullscreenSmallImages(fullscreen_index);
  }
});

nextBtn.addEventListener("click", () => {
  find_full_screen_Index();

  if (fullscreen_index < 3) {
    removeActiveFromFullscreenLargeImages();
    removeActiveFromFullscreenSmallImages();
    fullscreen_index = fullscreen_index + 1;
    addActiveToFullscreenLargeImages(fullscreen_index);
    addActiveToFullscreenSmallImages(fullscreen_index);
  }
});

const showCart = () => {
  cartBox.classList.add("active");
};

const hideCart = () => {
  cartBox.classList.remove("active");
};

cart.addEventListener("click", () => {
  if (cartBox.classList.contains("active")) {
    hideCart();
    return;
  }
  showCart();
});

profile.addEventListener("click", () => {
  if (cartBox.classList.contains("active")) {
    hideCart();
    return;
  }
  showCart();
});

minusBtn.addEventListener("click", () => {
  let value = Number(count.textContent);
  if (value > 0) {
    value = value - 1;
    count.textContent = value;
  }
});

plusBtn.addEventListener("click", () => {
  let value = Number(count.textContent);
  if (value < 10) {
    value = value + 1;
    count.textContent = value;
  }
});

addToCartBtn.addEventListener("click", () => {
  let value = Number(count.textContent);

  if (value === 0) {
    // const pEle = document.createElement("p");
    // p.textContent = "Your cart is empty";
    // cartItemBox.appendChild(pEle);
  } else {
    cartItemBox.innerHTML = "";
    const imageEle = document.createElement("img");
    imageEle.src = img;
    imageEle.alt = "product-1";
    imageEle.classList.add("image-item");
    const divEle = document.createElement("div");
    divEle.classList.add("item-details");
    const titlePEle = document.createElement("p");
    titlePEle.classList.add("item-title");
    titlePEle.textContent = "Fall Limited Edition Sneakers";
    const pricePEle = document.createElement("p");
    pricePEle.textContent = `$125.00 x ${value}`;
    pricePEle.classList.add("item-price");
    const spanELe = document.createElement("span");
    let total = 125 * value;
    spanELe.textContent = `$${total}`;
    pricePEle.appendChild(spanELe);

    divEle.appendChild(titlePEle);
    divEle.appendChild(pricePEle);

    const deleteBtn = document.createElement("img");
    deleteBtn.src = deleteImg;
    deleteBtn.alt = "delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.classList.add("active");
    cartItemBox.appendChild(imageEle);
    cartItemBox.appendChild(divEle);
    cartItemBox.appendChild(deleteBtn);
    cartBtn.classList.add("active");
    count.textContent = "0";
    deleteBtn.addEventListener("click", () => {
      deleteHandler();
      deleteBtn.classList.remove("active");
    });
  }
});

let mobile_index = null;

let findMobileIndex = () => {
  largeImages.forEach((item, index) => {
    if (item.classList.contains("active")) {
      mobile_index = index;
    }
  });
};

previousBtnMobile.addEventListener("click", () => {
  findMobileIndex();
  if (mobile_index > 0) {
    removeActiveFromLargeImages();
    mobile_index = mobile_index - 1;
    addActiveToLargeImages(mobile_index);
  }
});

nextBtnMobile.addEventListener("click", () => {
  findMobileIndex();
  if (mobile_index < 3) {
    removeActiveFromLargeImages();
    mobile_index = mobile_index + 1;
    addActiveToLargeImages(mobile_index);
  }
});
