<template>
  <div class="options">
    <img
      src="../assets/sound.png"
      alt="ship"
      @click.prevent="audio.isPlaying ? pause(audio) : play(audio)"
    />
  </div>
</template>

<script>
export default {
  name: "Options",
  data() {
    return {
      audio: {
        file: new Audio(require("../assets/sound/sound_all.mp3")),
        isPlaying: true,
      },
    };
  },
  methods: {
    play: function(audio) {
      audio.isPlaying = true;
      audio.file.play();
      audio.loop();
    },
    pause: function(audio) {
      audio.isPlaying = false;
      audio.file.pause();
    },
  },
};
</script>
<style scoped lang="scss">
.options {
  width: 80px;
  position: fixed;
  right: 80px;
  bottom: 35px;
  cursor: pointer;
  padding: 10px;
}
</style>
