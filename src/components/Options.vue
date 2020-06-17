<template>
  <div class="options">
    <img src="../assets/english.png" alt="ship" />
    <img src="../assets/sound.png" alt="ship" @click.prevent="muteAudio()" />
  </div>
</template>

<script>
export default {
  name: "Options",
  data() {
    return {};
  },
  methods: {
    muteAudio() {
      var audio = new Audio(require(`../assets/sound/sea.mp3`));
      audio.muted = true;
    },
  },
};
</script>
<style scoped lang="scss">
.options {
  display: flex;
  width: 80px;
  justify-content: space-between;
  position: fixed;
  right: 80px;
  bottom: 35px;
}
</style>
