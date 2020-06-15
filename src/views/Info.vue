<template>
  <div class="modall">
    <div class="modall__title">
      <TitleModall :msg="this.modalData.subtitle" />
    </div>
    <AnimalModall class="modall__animal" />
    <BubblemidModall class="modall__bubbleMid" />
    <BubbletopModall class="modall__bubbleTop" />
    <BubbleModall class="modall__bubble" />
    <SubmarineLight class="modall__submarine" />
  </div>
</template>

<script>
import BubblemidModall from "@/components/desc/BubblemidModall.vue";
import BubbletopModall from "@/components/desc/BubbletopModall.vue";
import TitleModall from "@/components/desc/TitleModall.vue";
import AnimalModall from "@/components/desc/AnimalModall.vue";
import BubbleModall from "@/components/desc/BubbleModall.vue";
import SubmarineLight from "@/components/desc/BubbleModall.vue";

export default {
  name: "Info",
  components: {
    TitleModall,
    BubblemidModall,
    BubbletopModall,
    AnimalModall,
    BubbleModall,
    SubmarineLight,
  },
  data() {
    return {
      modalData: {
        subtitle: "YVETTE THE PINK SHRIMP",
      },
    };
  },
};
</script>
<style scoped lang="scss">
.modall {
  position: fixed;
  display: inline-grid;
  grid-template-columns: 1fr 1fr 150px;
  grid-template-rows: repeat(4, 25%);
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
  color: #fefcd0;
  font-family: "poppins";

  &__title {
    font-size: 40px;
    font-weight: bold;
    line-height: 60px;
    letter-spacing: 0.1em;
    grid-column: 2 / 2;
    grid-row: 1 / 1;
    text-align: center;
  }
  &__animal {
    grid-column: 1 / 1;
    grid-row: 2 / span 2;
    justify-self: center;
    align-self: center;
  }
  &__bubbleMid {
    grid-column: 1 / 1;
    grid-row: 4 / 4;
    justify-self: start;
    align-self: end;
  }
  &__bubbleTop {
    grid-column: 3 / 3;
    grid-row: 1 / 1;
    justify-self: end;
  }
  &__bubble {
    grid-column: 1 / 1;
    grid-row: 2 / span 2;
    justify-self: center;
    align-self: center;
  }
}
</style>
