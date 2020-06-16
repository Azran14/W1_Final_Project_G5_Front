<template>
  <div class="modall">
    <MapModall class="modall__map" />
    <BubblemidModall class="modall__bubbleMid" />
    <BubbletopModall class="modall__bubbleTop" />
  </div>
</template>

<script>
import BubblemidModall from "@/components/desc/BubblemidModall.vue";
import BubbletopModall from "@/components/desc/BubbletopModall.vue";
import MapModall from "@/components/map/MapModall.vue";

export default {
  name: "map",
  components: {
    BubblemidModall,
    BubbletopModall,
    MapModall,
  },
  data() {
    return {
      modalMap: {},
    };
  },
};
</script>

<style scoped lang="scss">
.modall {
  display: inline-grid;
  grid-template-columns: 100px 900px 100px;
  grid-template-rows: 100px 400px 100px;
  grid-column-gap: 10px;
  white-space: nowrap;
  max-width: 80vw;
  min-height: 80vh;
  padding: 25px;
  color: #fefcd0;
  font-family: "poppins";
  &__bubbleMid {
    grid-column: 1 / 1;
    grid-row: 2 / span 2;
    justify-self: start;
    align-self: end;
  }
  &__bubbleTop {
    grid-column: 3 / 3;
    grid-row: 1 / 1;
    justify-self: end;
    align-self: end;
  }
  &__map {
    grid-column: 1 / span 3;
    grid-row: 1 / span 3;
    justify-self: center;
    align-self: center;
    width: 95%;
    height: 100%;
  }
  /*&__seaweed {
    grid-column: 3 / 3;
    grid-row: 3 / 3;
    justify-self: start;
    align-self: end;
  }*/
}
</style>
