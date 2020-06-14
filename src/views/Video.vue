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
import TitleModall from "@/components/TitleModall.vue";
import VideoModall from "@/components/VideoModall.vue";
import BubblemidModall from "@/components/BubblemidModall.vue";
import BubbletopModall from "@/components/BubbletopModall.vue";

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
  &__video {
    grid-column: 2 / span 2;
    grid-row: 2 / 3;
    width: 60vw;
    height: 50vh;
  }
  &__bubbleMid {
    grid-area: 4 / 1 / 5 / 1;
  }
  &__bubbleTop {
    grid-column: 5 / 2;
    grid-row: 1 / 1;
    justify-self: end;
  }
}
</style>
