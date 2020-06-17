<template>
  <iframe
    width="560"
    height="415"
    :src="`https://youtube.com/embed/${text}`"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  >
  </iframe>
</template>

<script>
export default {
  name: "VideoModall",
  props: {
    text: String,
  },
};
</script>
<style scoped lang="scss">
.video {
  border: solid 2px green;
}
</style>
