<template>
  <div class="bg">
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
        <img class="bg__ship" src="../assets/shipnolight.svg" />
        <img class="bg__longevity" src="../assets/dead.svg" />
        <img class="bg__sound" src="../assets/mic.svg" />
        <img class="bg__buble--text" src="../assets/bubletext.svg" />
        <img class="bg__arrow--down" src="../assets/arrowd.svg" />
        <img class="bg__arrow--up" src="../assets/arrowu.svg" />
        <h2 :style="styleh2" class="cc">{{ subtitle }}</h2>
        <h3 :style="styleh3">longevity :</h3>
        <p :style="stylep">{{ longevityText }}</p>
        <h3 :style="styleh3">reproduction :</h3>
        <p :style="stylep">{{ reproductionText }}</p>
        <p :style="stylep">{{ message }}</p>
        <h4 :style="styleh4">Weight :</h4>
        <p :style="stylep">{{ weightValue }}</p>
        <h4 :style="styleh4">Size :</h4>
        <p :style="stylep">{{ sizeValue }}</p>
        <img class="bg__seaweed" src="../assets/seaweed.svg" />
        <img class="bg__buble" src="../assets/buble.svg" />
        <img class="bg__buble--top" src="../assets/otherbuble.svg" />
        <img class="bg__fish" v-bind:src="imageSrc" />
        <span class="span" @click="showModal = false"
          ><img v-bind:src="closeImg" class="closePop"/></span>
           <div class="progress">
           <img v-bind:src="progressImg" class="progress__item"/>
           <div class="circle_container">
           <div class="circle__one"></div>
           <div class="circle__two"></div>
           <div class="circle__three"></div>
           <div class="circle__four"></div>
           </div>
           </div>
      </div>
    </transition>
  </div>
</template>

<script>
import imageSrc from "../assets/dolphin.svg";
import closeImg from '../assets/closepopup.svg'
import progressImg from '../assets/progressbar.svg'

export default {
  data() {
    return {
      subtitle: "YVETTE THE PINK SHRIMP",
      showModal: false,
      imageSrc: imageSrc,
      loseImg : closeImg,
     progressImg : progressImg,
      longevityText: "2 years ",
      reproductionText:
        "The females lay 50,000 to 1 million eggs, which hatch after some 24 hours.",
      message:
        "Hi, my name is Yvette . I am from the pandalidae family and I am a crustacean",
      weightValue: "10g",
      sizeValue: "Around 5 to 10cm",
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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
    width: 80%;
    overflow: auto;
    max-width: 80vw;
    min-height: 80vh;
    background-color: #3594ae;
    border-radius: 10px;
    padding: 25px;
    border: 4px solid #fefcd0;
  }
  h2 {
    margin-bottom: 65px;
  }
  p {
    margin-bottom: 15px;
  }
  .bg__ship {
    position: absolute;
    top: -20px;
    left: -10px;
  }
  .bg__seaweed {
    position: fixed;
    bottom: 0px;
    right: 10px;
  }
  .bg__buble {
    position: fixed;
    top: 210px;
    left: 110px;
  }
  .bg__buble--top {
    position: fixed;
    top: 20px;
    right: 60px;
  }
  .bg__fish {
    position: fixed;
    top: 300px;
    left: 50px;
    width: 400px;
    height: 400px;
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
.progress__item{
    position: fixed;
    bottom: 2%;
      left: 50%;
    transform: translate(-50%, -50%);
}
.circle_container{
    width: 685px;
    display: flex;
    justify-content: space-between;
    margin: auto;
margin-top: 220px;
    .circle__one, .circle__two, .circle__three, .circle__four{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color:#fefcd0 ;
        bottom: 25px;
z-index: 300;
    }
}
</style>