<template>
  <div class="home">
    <div id="loader__page">
      <div class="ocean">
        <div class="wave"></div>
        <div class="wave"></div>
      </div>
      <div class="loader__title">
        <h1>{{ title }}</h1>
      </div>
    </div>
    <div class="loader">
      <div class="loader__title--yellow" id="test">
        <a :href="link">{{ title }}</a>
      </div>
      <div class="loader__submarine">
        <img src="../assets/shipnolight.svg" />
        <div src="../assets/hand.svg" class="loader__submarine--hand" />
      </div>
      <div class="loader__info">
        <p>Take place in the submarine</p>
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
  data() {
    return {
      title: "EXPLORE THE OCEAN",
      link: "/contact",
    };
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
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: #0685af;
}

#loader__page {
  background: rgba(254, 252, 208, 1);
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
  left: 51%;
  bottom: 21%;
  display: none;
}
.loader__params {
  margin-top: 50px;
  display: flex;
  flex-direction: row-reverse;
  margin-right: 100px;
}

.loader__info {
  color: #fefcd0;
  font-family: "poppins";
}
#loader__pa .anim {
  height: 100%;
  position: absolute;
  left: 50%;
  width: 100px;
  transform: translate(-50%, 100%);
  animation: 1s ease-in-out;
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

.ocean {
  height: 15%;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #0685af;
}

.wave {
  background: url(../assets/waves.svg) repeat-x;
  position: absolute;
  top: -198px;
  width: 6400px;
  height: 198px;
  animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
}

.wave:nth-of-type(2) {
  top: -175px;
  animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite,
    swell 7s ease -1.25s infinite;
  opacity: 1;
}

@keyframes wave {
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: -1600px;
  }
}

@keyframes swell {
  0%,
  100% {
    transform: translate3d(0, -25px, 0);
  }
  50% {
    transform: translate3d(0, 5px, 0);
  }
}
</style>
