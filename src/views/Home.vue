<template>
  <div class="home">
    <div id="loader__page">
      <h1 class="loader__title">EXPLORE THE OCEAN</h1>
      <img src="../assets/shipnolight.svg" class="loader__submarine" />
    </div>
    <ul>
      <li><a href="/">home</a></li>
      <li><a href="/team">team</a></li>
      <li><a href="/contact">contact</a></li>
    </ul>
    <div class="loader">
      <div class="loader__title--yellow">
        <h1>EXPLORE THE OCEAN</h1>
      </div>
      <div class="loader__submarine">
        <img src="../assets/shipnolight.svg" />
        <div src="../assets/hand.svg" class="loader__submarine--hand" />
      </div>
      <div class="loader__params">
        <img
          class="loader__params--langue"
          src="../assets/english.png"
          alt="langue"
        />
        <img
          class="loader__params--sound"
          src="../assets/sound.png"
          alt="sound"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {},
};
</script>

<style lang="scss">
@font-face {
  font-family: "poppins";
  src: url("../assets/fonts/Poppins-Regular.ttf");
}

@font-face {
  font-family: "poppins-light";
  src: url("../assets/fonts/Poppins-Light.ttf");
}

@font-face {
  font-family: "poppins-bold";
  src: url("../assets/fonts/Poppins-Bold.ttf");
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #0685af;
}

#loader__page {
  background: rgb(6, 133, 175);
  background: linear-gradient(
    0deg,
    rgba(6, 133, 175, 1) 0%,
    rgba(6, 133, 175, 1) 30%,
    rgba(254, 252, 208, 1) 30%
  );
  background-repeat: repeat-y;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  animation: loader__page 3s ease-in;
  animation-fill-mode: forwards;
}

.loader {
  display: flex;
  flex-direction: column;
}

.loader__title {
  font-family: "poppins-bold";
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 96px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: capitalize;
  color: #3594ae;
  margin-top: 12%;
}

.loader__title--yellow {
  margin-top: 15%;
  font-family: "poppins-bold";
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 96px;
  letter-spacing: 0.1em;
  text-transform: capitalize;
  color: rgba(254, 252, 208, 1);
}

.loader__submarine {
  position: fixed;
  left: 45%;
  bottom: 22%;
}

.loader__submarine--hand {
  position: fixed;
  left: 51%;
  bottom: 21%;
  display: none;
}

#loader__pa .anim {
  height: 100%;
  position: absolute;
  left: 50%;
  width: 100px;
  transform: translate(-50%, 100%);
  animation-fill-mode: forwards;
}

@keyframes loader__page {
  0% {
    transform: translate(0%, 0%);
  }
  50% {
    transform: translate(0%, 0%);
  }
  100% {
    transform: translate(0%, -100%);
  }
}
</style>
