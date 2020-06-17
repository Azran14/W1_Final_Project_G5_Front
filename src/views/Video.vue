<template>
  <div class="modall">
    <div class="modall__title">
      <TitleModall :msg="this.modalDataVideo.subtitle" />
    </div>
    <VideoModall class="modall__video" />
    <BubblemidModall class="modall__bubbleMid" />
    <BubbletopModall class="modall__bubbleTop" />
  </div>
</template>

<script>
import TitleModall from "@/components/desc/TitleModall.vue";
import VideoModall from "@/components/desc/VideoModall.vue";
import BubblemidModall from "@/components/desc/BubblemidModall.vue";
import BubbletopModall from "@/components/desc/BubbletopModall.vue";

export default {
  name: "Video",
  components: {
    TitleModall,
    VideoModall,
    BubblemidModall,
    BubbletopModall,
  },
  data() {
    return {
      modalDataVideo: {
        subtitle: "YVETTE THE PINK SHRIMP",
      },
    };
  },
};
</script>

<style scoped lang="scss">
.modall {
  display: inline-grid;
  grid-template-columns: 150px 1fr 150px;
  grid-template-rows: 100px 300px 150px;
  grid-column-gap: 10px;
  white-space: nowrap;
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
    grid-column: 2 / 2;
    grid-row: 1 / 1;
    text-align: center;
  }
  &__video {
    grid-column: 1 / span 3;
    grid-row: 2 / span 2;
    justify-self: center;
    width: 70%;
  }
  &__bubbleMid {
    grid-column: 1 / 1;
    grid-row: 3 / 3;
    justify-self: start;
    align-self: start;
  }
  &__bubbleTop {
    grid-column: 3 / 3;
    grid-row: 1 / 1;
    justify-self: start;
  }
}

@media screen and (min-width: 426px) and (max-width: 768px) {
  .modall {
    grid-template-columns: 500px;
    grid-template-rows: 500px;
    &__title {
      display: none;
    }
    &__video {
      grid-column: 1;
      grid-row: 1;
      width: 300px;
    }
    &__bubbleMid {
      display: none;
    }
    &__bubbleTop {
      display: none;
    }
  }
}

@media screen and (min-width: 320px) and (max-width: 425px) {
  .modall {
    grid-template-columns: 280px;
    grid-template-rows: 200px 200px;
    &__title {
      display: none;
    }
    &__video {
      grid-column: 1 / 1;
      grid-row: 1 / span 2;
    }
    &__bubbleMid {
      display: none;
    }
    &__bubbleTop {
      display: none;
    }
  }
}
</style>
