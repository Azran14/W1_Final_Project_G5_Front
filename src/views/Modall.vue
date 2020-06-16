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
      <AnimalModall class="modall__animal" />
    </div>
    <div class="modall__reproduction">
      <ReproductionModall :text="this.modalData.reproductionText" />
    </div>
    <div class="modall__details">
      <DetailsModall />
    </div>
    <div class="modall__showdetail">
      <ShowdetailModall :msg="this.modalData.showdetail" />
    </div>
    <div class="modall__sound">
      <SoundModall :msg="this.modalData.soundText" />
    </div>
    <div class="modall__size">
      <SizeModall :msg="this.modalData.sizeValue" />
    </div>
    <div class="modall__mic">
      <MicModall />
    </div>
    <div class="modall__bubble">
      <BubbleModall />
    </div>

    <div class="modall__identity">
      <IdentityModall />
    </div>

    <div class="modall__arrowup">
      <ArrowupModall />
    </div>
    <div class="modall__arrowdown">
      <ArrowdownModall />
    </div>
    <div class="modall__bubbletop">
      <BubbletopModall />
    </div>
  </div>
</template>

<script>
import TitleModall from "@/components/desc/TitleModall.vue";
import WeightModall from "@/components/desc/WeightModall.vue";
import LongevityModall from "@/components/desc/LongevityModall.vue";
import AnimalModall from "@/components/desc/AnimalModall.vue";
import ReproductionModall from "@/components/desc/ReproductionModall.vue";
import SoundModall from "@/components/desc/SoundModall.vue";
import SizeModall from "@/components/desc/SizeModall.vue";
import MicModall from "@/components/desc/MicModall.vue";
import BubbleModall from "@/components/desc/BubbleModall.vue";
import IdentityModall from "@/components/desc/IdentityModall.vue";
import ArrowupModall from "@/components/desc/ArrowupModall.vue";
import ArrowdownModall from "@/components/desc/ArrowdownModall.vue";
import BubbletopModall from "@/components/desc/BubbletopModall.vue";
import DetailsModall from "@/components/desc/DetailsModall.vue";
import ShowdetailModall from "@/components/desc/ShowdetailModall.vue";

export default {
  name: "Modall",
  components: {
    TitleModall,
    WeightModall,
    LongevityModall,
    AnimalModall,
    ReproductionModall,
    SoundModall,
    SizeModall,
    MicModall,
    BubbleModall,
    IdentityModall,
    ArrowupModall,
    ArrowdownModall,
    BubbletopModall,
    DetailsModall,
    ShowdetailModall,
  },
  data() {
    return {
      modalData: {
        subtitle: "YVETTE THE PINK SHRIMP",
        showModal: false,
        text: "dolphin.svg",
        longevityText: "2 years ",

        reproductionText:
          "The females lay 50,000 to 1 million eggs, which hatch after some 24 hours.",

        message:
          "Hi, my name is Yvette . I am from the pandalidae family and I am a crustacean.",

        weightValue: " 10g",
        sizeValue: "Around 5 to 10cm",
        soundText: "on the mic if you want to hear me.",
        showdetail:
          "Some shrimps, known as cleaner shrimp, live of grooming bigger fish and eating their parasites and dead skin. Others are fierce predators, like the snapping shrimp, that snaps its claws to create a shock wave that stuns preys. ",
      },
    };
  },
};
</script>
<style scoped lang="scss">
.modall {
  position: fixed;
  display: inline-grid;
  grid-template-columns: 200px 250px 300px 400px 200px;
  grid-template-rows: repeat(4, 20%) 24%;
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
    grid-column: 3 / span 2;
    grid-row: 1 / 1;
    justify-self: start;
  }

  &__weight {
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;

    grid-column: 1 / 1;
    grid-row: 1 / 1;
    justify-self: end;
    align-self: end;
  }
  &__longevity {
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;

    grid-column: 4 / 4;
    grid-row: 2 / 2;
    justify-self: start;
  }
  &__animal {
    grid-column: 2 / 2;
    grid-row: 3 / span 2;
    justify-self: start;
    align-self: start;
    z-index: 999;
  }
  &__reproduction {
    grid-column: 4 / 4;
    grid-row: 3 / 3;
  }
  &__details {
    grid-column: 4 / 4;
    grid-row: 2 / 2;

    justify-self: start;
    align-self: center;
  }

  &__showdetail {
    grid-column: 4 / 4;
    grid-row: 2 / 2;
    justify-self: start;
    align-self: end;
    border: solid 2px green;
  }
  &__sound {
    grid-column: 4 / 4;
    grid-row: 4 / 4;
    justify-self: start;
    align-self: start;
  }
  &__size {
    grid-column: 2 / 2;
    grid-row: 4 / 4;
    justify-self: start;
    align-self: end;
  }
  &__mic {
    grid-column: 3 / 3;
    grid-row: 4 / 4;
    justify-self: start;
  }
  &__bubble {
    grid-column: 2 / span 2;
    grid-row: 2 / span 2;
    justify-self: start;
  }
  &__identity {
    grid-column: 2 / span 2;
    grid-row: 2 / span 2;
    justify-self: end;
  }
  &__arrowup {
    grid-column: 2 / 2;
    grid-row: 4 / 4;
    justify-self: end;
    align-self: end;
  }
  &__arrowdown {
    grid-column: 1 / 1;
    grid-row: 2 / 2;
    justify-self: end;
    align-self: start;
  }
  &__bubbletop {
    grid-column: 5 / 5;
    grid-row: 1 / 1;
  }
}
</style>
