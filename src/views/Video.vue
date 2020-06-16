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
  position: fixed;
  display: inline-grid;
  grid-template-columns: 150px 3fr 150px;
  grid-template-rows: 150px 2fr 150px;
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
  opacity: 80%;
  border-radius: 10px;
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
    grid-row: 1 / span 3;
    justify-self: center;
    align-self: center;
    width: 70%;
  }
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
  }
}
</style>
