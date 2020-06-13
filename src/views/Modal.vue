<template>
  <div class="bg">
    <img v-if="showModal" class="bg__ship" src="../assets/shipnolight.svg" />
    <span class="span" @click="showModal = true">
      <img class="modal-dolphin" srcset="../assets/dolphin.svg"
    /></span>
    <transition name="fade" appear>
      <div
        class="modal-overlay"
        v-if="showModal"
        @click="showModal = false"
      ></div>
    </transition>
    <transition name="slide" appear>
      <div class="modal" v-if="showModal" v-on:click="stopScroll">
        <h2 :style="styleh2">{{ subtitle }}</h2>
        <div class="grid__longevity">
          <h3 :style="styleh3">Longevity : {{ longevityText }}</h3>
        </div>
        <div class="grid__reproduction">
          <h3 :style="styleh3">Reproduction :</h3>
          <p :style="stylep">{{ reproductionText }}</p>
        </div>
        <div class="grid__sound">
          <h4 :style="styleh4">Click {{ soundText }}</h4>
        </div>
        <div class="grid__weight">
          <h4 :style="styleh4">Weight : {{ weightValue }}</h4>
        </div>
        <div class="grid__size">
          <h4 :style="styleh4">Size : {{ sizeValue }}</h4>
        </div>
        <img class="bg__seaweed" src="../assets/seaweed.svg" />
        <img class="bg__buble" src="../assets/buble.svg" />
        <img class="bg__buble--top" src="../assets/otherbuble.svg" />
        <img class="bg__fish" v-bind:src="imageSrc" />
        <img class="bg__longevity" src="../assets/dead.svg" />
        <img class="bg__sound" src="../assets/mic.svg" />
        <img class="bg__buble--text" src="../assets/bubletext.svg" />
        <img class="bg__arrow--down" src="../assets/arrowd.svg" />
        <img class="bg__arrow--up" src="../assets/arrowu.svg" />
        <span class="span" @click="showModal = false"
          ><img
            class="closePop"
            src="../assets/closepopup.svg"
            alt="CLOSE MODAL"
        /></span>
      </div>
    </transition>
  </div>
</template>

<script>
import imageSrc from "../assets/dolphin.svg";

export default {
  data() {
    return {
      subtitle: "YVETTE THE PINK SHRIMP",
      showModal: false,
      imageSrc: imageSrc,
      longevityText: "2 years ",
      reproductionText:
        "The females lay 50,000 to 1 million eggs, which hatch after some 24 hours.",
      message:
        "Hi, my name is Yvette . I am from the pandalidae family and I am a crustacean.",
      weightValue: "10g",
      sizeValue: "Around 5 to 10cm",
      soundText: "on the mic if you want to hear me.",
      styleh2: {
        fontSize: "40px",
        fontWeight: "bold",
        fontFamily: "poppins",
        lineHeight: "60px",
        color: "#FEFCD0",
        letterSpacing: "0.1em",
      },
      styleh3: {
        fontFamily: "Poppins",
        fontWeight: "bold",
        fontSize: "24px",
        lineHeight: "36px",
        color: "#FEFCD0",
      },
      styleh4: {
        fontFamily: "Poppins",
        fontWeight: "bold",
        fontSize: "18px",
        lineHeight: "27px",
        color: "#FEFCD0",
      },
      stylep: {
        color: "#FFFFFF",
        fontSize: "18px",
        fontWeight: "normal",
        fontFamily: "poppins",
        lineHeight: "27px",
      },
    };
  },

  watch: {
    showModal: function() {
      if (this.showModal) {
        document.documentElement.style.overflow = "hidden";
        return;
      }
      document.documentElement.style.overflow = "auto";
    },
  },
};
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  display: none;
}
.bg {
  background: url("../assets/bg.png");
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 800vh;
  overflow-x: hidden;

  .span {
    appearance: none;
    outline: none;
    border: none;
    background: none;
    cursor: pointer;
  }
  .closePop {
    position: fixed;
    top: 20px;
    right: 20px;
  }
  .modal {
    position: fixed;
    display: inline-grid;
    grid-template-columns: 200px 250px 300px 2fr;
    grid-template-rows: repeat(5, 20%);
    grid-column-gap: 10px;
    top: 50%;
    left: 50%;
    max-height: 80%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
    width: 80%;
    overflow: auto;
    max-width: 80vw;
    min-height: 80vh;
    background-color: #4db2ce;
    opacity: 80%;
    border-radius: 10px;
    padding: 25px;
    border: 4px solid #fefcd0;
  }
  h2 {
    grid-column: 3 / span 2;
    grid-row: 1 / 1;
    justify-self: start;
  }
  .grid__longevity {
    grid-column: 4 / 4;
    grid-row: 2 / 2;
    justify-self: start;
  }
  .grid__reproduction {
    grid-column: 4 / 4;
    grid-row: 3 / 3;
    justify-self: start;
    align-self: start;
    h3 {
      display: flex;
      flex-direction: row;
    }
  }
  .grid__sound {
    grid-column: 4 / 4;
    grid-row: 4 / 4;
    justify-self: start;
    align-self: start;
  }
  .grid__weight {
    grid-column: 1 / 1;
    grid-row: 1 / 1;
    justify-self: end;
    align-self: end;
  }
  .grid__size {
    grid-column: 2 / 2;
    grid-row: 4 / 4;
    justify-self: start;
    align-self: end;
  }
  .bg__ship {
    position: fixed;
    z-index: 200;
    top: 24px;
    left: 100px;
  }
  .bg__seaweed {
    position: fixed;
    bottom: 0px;
    right: 10px;
  }
  .bg__buble {
    grid-column: 2 / span 2;
    grid-row: 2 / span 2;
  }
  .bg__buble--top {
    position: fixed;
    top: 20px;
    right: 60px;
  }
  .bg__buble--text {
    grid-column: 2 / span 2;
    grid-row: 2 / span 2;
    justify-self: end;
  }
  .bg__fish {
    grid-column: 2 / 2;
    grid-row: 3 / span 2;
    justify-self: start;
    align-self: start;
  }
  .bg__longevity {
    grid-column: 3 / 3;
    grid-row: 2 / 2;
    justify-self: end;
  }
  .bg__sound {
    grid-column: 3 / 3;
    grid-row: 4 / 4;
    justify-self: start;
  }
  .bg__arrow--up {
    grid-column: 2 / 2;
    grid-row: 4 / 4;
    justify-self: end;
    align-self: end;
  }
  .bg__arrow--down {
    grid-column: 1 / 1;
    grid-row: 2 / 2;
    justify-self: end;
    align-self: start;
  }
  .slide-enter-active,
  .slide-leave-active {
    transition: transform 1s;
  }
  .slide-enter,
  .slide-leave-to {
    transform: translateY(-50%) translateX(100vw);
  }
}
</style>
