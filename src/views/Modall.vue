<template>
  <div class="modall">
    <div class="modall__title">
      <TitleModall :msg="fishData.name" />
    </div>
    <div class="modall__weight">
      <WeightModall class="modall__weight" :msg="fishData.weight" />
    </div>

    <div class="modall__longevity">
      <LongevityModall class="modall__longevity" :msg="fishData.longevity" />
    </div>
    <div class="modall__animal">
      <AnimalModall class="modall__animal" :text="fishData.link" />
    </div>
    <div class="modall__reproduction">
      <ReproductionModall :text="fishData.reproduction" />
    </div>
    <div
      class="modall__details"
      v-bind:class="[isVisible ? 'yes' : 'yes']"
      @click="showDetail()"
    >
      <DetailsModall />
    </div>
    <div
      class="modall__showdetail"
      v-bind:class="[isVisible ? 'no' : 'yes']"
      @click="isVisible = yes"
    >
      <ShowdetailModall :msg="fishData.details" />
    </div>
    <div class="modall__sound">
      <SoundModall :msg="this.modalData.soundText" />
    </div>
    <div class="modall__size">
      <SizeModall :msg="fishData.size" />
    </div>
    <div class="modall__mic">
      <MicModall />
    </div>
    <div class="modall__bubble">
      <BubbleModall />
    </div>

    <div class="modall__identity">
      <IdentityModall :fishData="fishData" />
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
  props: {
    fishData: Array,
  },
  data() {
    return {
      isVisible: true,

      modalData: {
        subtitle: "YVETTE THE PINK SHRIMP",

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
  methods: {
    showDetail: function() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>
<style scoped lang="scss">
.modall {
  display: inline-grid;
  grid-template-columns: 100px 200px 250px 300px 100px;
  grid-template-rows: repeat(4, 15%) 15%;
  grid-column-gap: 10px;
  white-space: nowrap;
  width: 80%;
  max-width: 80vw;
  min-height: 80vh;
  padding: 25px;
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
  .yes {
    display: inline-grid;
  }
  .no {
    display: none;
  }

  &__showdetail {
    grid-column: 4 / 4;
    grid-row: 3 / 3;
    justify-self: start;
    align-self: start;
    width: 32vw;
    height: 15vh;
    z-index: 99;
  }
  &__sound {
    grid-column: 4 / 4;
    grid-row: 4 / 4;
    justify-self: start;
    align-self: start;
  }
  &__size {
    grid-column: 2 / 2;
    grid-row: 5 / 5;
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
    justify-self: center;
    align-self: center;
  }
  &__arrowup {
    grid-column: 2 / 2;
    grid-row: 5 / 5;
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
