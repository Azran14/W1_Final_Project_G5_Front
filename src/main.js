
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Mailto from "@/components/ui-kit/Mailto.vue";

Vue.component("Mailto", Mailto);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

// Variables
const $ship = document.querySelector(".ship"); // get the ship
let shipX = $ship.offsetLeft; // X position of ship
let shipY = $ship.offsetTop; // Y position of ship
const shipSize = $ship.offsetHeight; // ship size
const margin = 10; // border margin
const moveDistance = 20; // distance when you move the ship 1 time
const documentHeight = document.documentElement.scrollHeight; // document height in px

// move the ship horizontaly and update shipX
function moveShipX(value) {
  shipX += value;
  $ship.style.transform = `translateX(${shipX}px)`;
}

// Scroll and update shipY
function moveY(value) {
  shipY += value;
  window.scrollBy(0, value);
}

// Listen to keys wasd
function onKeyDown(event) {
  switch (event.key) {
    case ("w", "ArrowUp"):
      if (shipY >= shipSize + margin) moveY(-100);
      break;
    case ("s", "ArrowDown"):
      if (shipY <= documentHeight - margin - shipSize) moveY(100);
      break;
    case ("a", "ArrowLeft"):
      if (shipX >= margin) moveShipX(-moveDistance);
      break;
    case ("d", "ArrowRight"):
      if (shipX <= window.innerWidth - margin - 2 * shipSize)
        moveShipX(moveDistance);
      break;
    default:
      break;
  }
}

window.addEventListener("keydown", onKeyDown);

// !!!!!!   POP-UP AU CLICK POUR LE MOMENT     !!!!!

// PS : YVETTE LA GRENOUILLE CREVETTE HORRIBLE !!!!

let modalShrimp = document.querySelector(".modal-shrimp");
let modalBg = document.querySelector(".modal-bg");
let modalClose = document.querySelector(".modal-close"); // close pop-up

modalShrimp.addEventListener("click", function() {
  modalBg.classList.add("bg-active");
});

modalClose.addEventListener("click", function() {
  modalBg.classList.remove("bg-active");
});



