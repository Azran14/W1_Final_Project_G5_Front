<template>
  <div class="modall">
    <img src="../assets/seaweed.svg" class="seaweed" alt="seaweed" />
    <BubbletopModall class="bbtop" />
    <BubbletopModall class="bbmidle" />
    <slot></slot>
  </div>
</template>

<script>
import BubbletopModall from "@/components/desc/BubbletopModall.vue";
export default {
  components: {
    BubbletopModall,
  },
};
</script>

<style>
.modall {
  color: #fefcd0;
  font-family: "poppins";
}
.seaweed {
  position: fixed;
  bottom: 0;
  right: 2%;
}

.bbtop {
  position: fixed;
  right: 50px;
  top: 30px;
}
.bbmidle {
  position: fixed;
  left: 5%;
  bottom: 5%;
  transform: rotate(180deg);
}
</style>
