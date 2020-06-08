<template>
  <div class="background">
    <div class="ship"></div>
    <img srcset="../assets/crevette.png" class="yvette" />
  </div>
</template>

<script>
//import Mailto from "@/components/ui-kit/Mailto.vue";

export default {
  name: "Contact",
  //components: {
  //Mailto,
  //},
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.background {
  height: 400vh;
  width: 100%;
  background: linear-gradient(
    180deg,
    #00bbe1 7.06%,
    #0068aa 15.21%,
    #000585 25.29%,
    #000000 100%
  );
}

.yvette {
  max-width: 50px;
  max-height: 50px;
  position: absolute;
  top: 70%;
}

.ship {
  height: 255px;
  width: 255px;
  position: fixed;
  top: 60%;
  background: url(../assets/ship.svg);
  //animation: float 6s ease-in-out infinite;
}

/*@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-20px);
  }
  100% {
    transform: translatey(0px);
  }
}*/
</style>
