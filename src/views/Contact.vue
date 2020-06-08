<template>
  <div class="background">
    <div class="ship"></div>
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
    360deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(253, 29, 29, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
}

.ship {
  height: 40px;
  width: 40px;
  position: fixed;
  top: 60%;
  background: black;
}
</style>
