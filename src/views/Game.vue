<template>
  <div class="game">
    <div @mousemove="mouseMove" @scroll="mouseMove">
      <SubmarineLight class="submarine" />

      <Zone
        v-for="(zoneCounter, index) in zones"
        :key="zoneCounter"
        :zoneData="zoneCounter"
        :title="titles[index]"
        @modalOn="subMove = false"
        @closeModal="subMove = true"
      />
    </div>
    <Audio />

    <Options />
  </div>
</template>

<script>
import Zone from "@/components/Zone.vue";
import SubmarineLight from "@/components/SubmarineLight.vue";
import Options from "@/components/Options.vue";
import Audio from "@/components/Audio.vue";

export default {
  name: "Game",
  components: {
    Zone,
    SubmarineLight,
    Options,
    Audio,
  },
  data() {
    return {
      zones: [0, 1, 2, 3],
      subMpos: { x: 0, y: 0 },
      mouse: { x: 0, y: 0 },
      subMove: true,
      titles: ["First Zone", "Second Zone", " Third Zone", "Fourth Zone"],
    };
  },
  methods: {
    mouseMove: function(e) {
      if (this.subMove) {
        this.mouse.x = e.pageX;
        this.mouse.y = e.pageY;

        var distX = this.mouse.x - this.subMpos.x;
        var distY = this.mouse.y - this.subMpos.y - window.scrollY;

        this.subMpos.x += distX / 10 - 10;
        this.subMpos.y += distY / 20 - 5;

        this.$children[0].$el.style.left = this.subMpos.x + "px";
        this.$children[0].$el.style.top = this.subMpos.y + "px";
      }
    },
  },
  watch: {
    subMove: function() {
      if (!this.subMove) {
        document.documentElement.style.overflow = "hidden";
        return;
      }

      document.documentElement.style.overflow = "auto";
    },
  },
};
</script>
<style scoped lang="scss">
.game {
  background-image: url(../assets/bg.svg);
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
}
.submarine {
  position: fixed;
  width: 150px;
  transition: transform 0.1s;
}
</style>
