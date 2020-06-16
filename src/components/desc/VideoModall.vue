<template>
  <video
    class="video"
    :src="require(`../../assets/video/${text}.mp4`)"
    alt="Video"
  ></video>
</template>

<script>
export default {
  name: "VideoModall",
  data() {
    return {
      text: "video",
    };
  },
  methods: {
    /* 
    getVideo: function() {
      return "../../assets/video/" + this.video;
    }, */
  },
};
</script>
<style scoped lang="scss">
.video {
  border: solid 2px green;
}
</style>
