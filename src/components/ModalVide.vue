<template>
  <div class="vide">
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
.vide {
  position: fixed;
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
  border: 4px solid #fefcd0;
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
