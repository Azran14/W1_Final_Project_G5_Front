<template>
  <img src="../../assets/mic.svg" alt="animal" @click.prevent="playSound()" />
</template>
<script>
export default {
  name: "MicModall",
  data() {
    return {
      sound: "dolphin",
    };
  },
  methods: {
    playSound() {
      var audio = new Audio(require(`../../assets/sound/${this.sound}.mp3`));
      audio.play();
    },
  },
};
</script>
<style scoped lang="scss"></style>
