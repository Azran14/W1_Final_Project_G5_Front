<template>
  <img src="../../assets/mic.svg" alt="animal" @click.prevent="playSound()" />
</template>
<script>
export default {
  name: "MicModall",
  props: {
    link: String,
  },
  methods: {
    playSound() {
      var audio = new Audio(
        require(`../../assets/sound/sound${this.link}.mp3`)
      );
      audio.play();
    },
  },
};
</script>
<style scoped lang="scss"></style>
