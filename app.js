const MENU_ICON = document.querySelector("#menu-icon");
const SIDENAV = document.querySelector("#sidenav");
const CART_ICON = document.querySelector("#cart-icon");
const CART = document.querySelector("#cart");
const CART_EXIT_ICON = document.querySelector("#exit-icon");
const MAIL_ICON = document.querySelector("#mail-icon");

const toggleSidenav = () => {
  MENU_ICON.classList.toggle("change");
  SIDENAV.classList.toggle("show-sidenav");
  if (CART.classList.contains("show-cart")) {
    closeCart();
  }
  setTimeout(() => {
    MENU_ICON.classList.toggle("move-menu-icon");
  }, 200);
};

// const openSidenav = () => {
//   MENU_ICON.classList.add("change");
//   SIDENAV.classList.add("show-sidenav");
//   if (CART.classList.contains("show-cart")) {
//     closeCart();
//   }
//   setTimeout(() => {
//     MENU_ICON.classList.add("move-menu-icon");
//   }, 200);
// };

// const closeSidenav = () => {
//   MENU_ICON.classList.remove("change");
//   SIDENAV.classList.remove("show-sidenav");
//   setTimeout(() => {
//     MENU_ICON.classList.remove("move-menu-icon");
//   }, 200);
// };

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

window.addEventListener("mouseup", function (event) {
  if (
    event.target != CART &&
    event.target.parentNode != CART &&
    event.target.parentNode.parentNode != CART &&
    event.target.parentNode.parentNode.parentNode != CART
  ) {
    closeCart();
  }
});

window.addEventListener("mouseup", function (event) {
  if (
    SIDENAV.classList.contains("show-sidenav") &&
    event.target != MENU_ICON &&
    event.target.parentNode != MENU_ICON
  ) {
    if (
      event.target != SIDENAV &&
      event.target.parentNode != SIDENAV &&
      event.target.parentNode.parentNode != SIDENAV
    ) {
      toggleSidenav();
    }
  }
});
