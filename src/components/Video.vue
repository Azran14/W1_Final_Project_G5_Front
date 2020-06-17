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
@media (max-width: 1300px) {
  .modall {
    grid-template-columns: 150px 1fr 150px;
    grid-template-rows: 100px 300px 150px;
    &__title {
      font-size: 30px;
      line-height: 50px;
      grid-column: 2 / 2;
      grid-row: 1 / 1;
    }
    &__video {
      width: 70%;
      grid-column: 1 / span 3;
      grid-row: 2 / span 2;
    }
    &__bubbleMid {
      grid-column: 1 / 1;
      grid-row: 3 / 3;
    }
    &__bubbleTop {
      grid-column: 3 / 3;
      grid-row: 1 / 1;
    }
  }
}

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
</style>
