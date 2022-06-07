const MENU_ICON = document.querySelector("#menu-icon");
const SIDENAV = document.querySelector(".sidenav");
const CART_ICON = document.querySelector("#cart-icon");
const CART = document.querySelector(".cart");
const CART_EXIT_ICON = document.querySelector("#exit-icon");

const toggleSidenav = () => {
  MENU_ICON.classList.toggle("change");
  SIDENAV.classList.toggle("show-sidenav");
  if (CART.classList.contains("show-cart")) {
    closeCart();
  }
};

const openCart = () => {
  CART_ICON.classList.toggle("exit-change");
  CART.classList.add("show-cart");
  CART_EXIT_ICON.classList.add("open");
  if (SIDENAV.classList.contains("show-sidenav")) {
    MENU_ICON.classList.toggle("change");
  }
  SIDENAV.classList.remove("show-sidenav");
};

const closeCart = () => {
  CART_EXIT_ICON.classList.remove("open");
  CART.classList.remove("show-cart");
};

MENU_ICON.addEventListener("click", function () {
  toggleSidenav();
});

CART_ICON.addEventListener("click", function () {
  openCart();
});

CART_EXIT_ICON.addEventListener("click", function () {
  closeCart();
});
