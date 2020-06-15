<template>
  <video class="video" :srcset="getVideo()" alt="Video"></video>
</template>

<script>
export default {
  name: "VideoModall",
  data() {
    return {
      video: "video.mp4",
    };
  },
  methods: {
    getVideo: function() {
      return "../../assets/video/" + this.video;
    },
  },
};
</script>
<style scoped lang="scss">
.video {
  border: solid 2px green;
}
</style>
