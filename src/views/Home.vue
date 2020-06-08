<template>
  <div class="home">
    <div id="splash">
      <h1 class="loader_title">EXPLORE THE OCEAN</h1>
      <img src="../assets/shipnolight.svg" class="submarine" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
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
  font-family: Helvetica, Arial, sans-serif;
  background-color: #0685af;
}

#splash {
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
  animation: splash 3s ease-in;
  animation-fill-mode: forwards;
}

.loader_title {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 96px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: capitalize;
  color: #3594ae;
}

.submarine {
  position: fixed;
  left: 45%;
  bottom: 10%;
}

#splash .anim {
  height: 100%;
  position: absolute;
  left: 50%;
  width: 100px;
  transform: translate(-50%, 100%);
  animation-fill-mode: forwards;
}

@keyframes splash {
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
