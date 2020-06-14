<template>
  <div class="modall">
    <div class="modall__title">
      <TitleModall :msg="this.modalData.subtitle" />
    </div>
    <div class="modall__weight">
      <WeightModall class="modall__weight" :msg="this.modalData.weightValue" />
    </div>

    <div class="modall__longevity">
      <LongevityModall
        class="modall__longevity"
        :msg="this.modalData.longevityText"
      />
    </div>
    <div class="modall__animal">
      <AnimalModall :str="'../assets/' + this.modalData.src" />
    </div>
  </div>
</template>

<script>
import TitleModall from "@/components/TitleModall.vue";
import WeightModall from "@/components/WeightModall.vue";
import LongevityModall from "@/components/LongevityModall.vue";
import AnimalModall from "@/components/AnimalModall.vue";

export default {
  name: "Modall",
  components: {
    TitleModall,
    WeightModall,
    LongevityModall,
    AnimalModall,
  },
  data() {
    return {
      modalData: {
        subtitle: "YVETTE THE PINK SHRIMP",
        showModal: false,
        src: "dolphin.svg",
        longevityText: "2 years ",

        reproductionText:
          "The females lay 50,000 to 1 million eggs, which hatch after some 24 hours.",

        message:
          "Hi, my name is Yvette . I am from the pandalidae family and I am a crustacean.",

        weightValue: " 10g",
        sizeValue: "Around 5 to 10cm",
        soundText: "on the mic if you want to hear me.",
      },
    };
  },
};
</script>
<style scoped lang="scss">
.modall {
  position: fixed;
  display: inline-grid;
  grid-template-columns: 200px 250px 300px 2fr;
  grid-template-rows: repeat(5, 20%);
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

  &__title {
    font-size: 40px;
    font-weight: bold;
    font-family: "poppins";
    line-height: 60px;
    color: #fefcd0;
    letter-spacing: 0.1em;
    grid-column: 3 / span 2;
    grid-row: 1 / 1;
    justify-self: start;
  }

  &__weight {
    font-family: "poppins";
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
    color: #fefcd0;

    grid-column: 1 / 1;
    grid-row: 1 / 1;
    justify-self: end;
    align-self: end;
  }
  &__longevity {
    font-family: "poppins";
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
    color: #fefcd0;

    grid-column: 4 / 4;
    grid-row: 2 / 2;
    justify-self: start;
  }
}
</style>
