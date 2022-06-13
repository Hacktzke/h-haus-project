const MENU_ICON = document.querySelector("#menu-icon");
const SIDENAV = document.querySelector("#sidenav");
const CART_ICON = document.querySelector("#cart-icon");
const CART = document.querySelector("#cart");
const CART_EXIT_ICON = document.querySelector("#exit-icon");
const MAIL_ICON = document.querySelector("#mail-icon");
const CONTACT_INPUTS = document.querySelectorAll(".input-area");

const inputs = [];

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

// CONTACT FORM

CONTACT_INPUTS.forEach((input) => {
  input.childNodes[3].addEventListener("click", function (e) {
    input.classList.remove("red");
    input.childNodes[1].classList.add("decr-label-size");
    if (input.classList.contains("comment-area")) {
      input.childNodes[3].style.height = "100px";
    }
  });
});

window.addEventListener("click", function (e) {
  CONTACT_INPUTS.forEach((input) => {
    if (
      e.target != input.childNodes[3] &&
      input.childNodes[1].classList.contains("decr-label-size") &&
      input.childNodes[3].value == ""
    ) {
      input.childNodes[1].classList.remove("decr-label-size");
      input.childNodes[3].style.height = "30px";
      input.classList.add("red");
    }
  });
});

// CONSTRUCTCOR FUNCTION

// function ContactInput(labelArea, inputArea) {
//   this.labelArea = labelArea;
//   this.inputArea = inputArea;
//   let clicked = false;
// }

// for (let i = 0; i < CONTACT_INPUTS.length; i++) {
//   inputs[i] = {
//     labelArea: CONTACT_INPUTS[i].childNodes[1],
//     inputArea: CONTACT_INPUTS[i].childNodes[1],
//     clicked: false,
//   };
// }
