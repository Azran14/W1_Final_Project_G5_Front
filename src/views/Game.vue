<template>
  <div class="game">
    <div @mousemove="mouseMove" @scroll="mouseMove">
      <SubmarineLight class="submarine" />
      <h2 class="intro">
        Hey ! Welcome to the ocean. Now that you're in the submarine you can
        explore this new world and discover species !
      </h2>
      <Zone
        v-for="(zoneCounter, index) in zones"
        :key="zoneCounter"
        :zoneData="zoneCounter"
        :zone="zonesInfo[index]"
        @modalOn="subMove = false"
        @closeModal="subMove = true"
      />
    </div>
    <Options />
    <p class="notion">
      This site has been created for educational purposes as part of the
      Bachelor's curriculum of the HETIC school. The contents presented have not
      been the subject of a request for right of use. This site will in no case
      be used for commercial purposes and will not be published.
    </p>
  </div>
</template>

<script>
import Zone from "@/components/Zone.vue";
import SubmarineLight from "@/components/SubmarineLight.vue";
import Options from "@/components/Options.vue";

export default {
  name: "Game",
  components: {
    Zone,
    SubmarineLight,
    Options,
  },
  data() {
    return {
      zones: [0, 1, 2, 3],
      subMpos: { x: 0, y: 0 },
      mouse: { x: 0, y: 0 },
      subMove: true,
      zonesInfo: [
        {
          title: "Daylight Zone",
          description:
            "This is the only place in the ocean that the light penetrates.",
        },
        {
          title: "Twilight Zone",
          description:
            "Some light still comes through, and most of the sea creatures live there.",
        },
        {
          title: "Midnight Zone",
          description:
            "It is absolutely dark in there. Most of the creatures living there are blind.",
        },
        {
          title: "Hadale Zone",
          description:
            "This is the abyssal depths of the ocean. The scariest creatures live there. Most of them are still unknown to us.",
        },
      ],
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
.intro {
  font-family: "poppins-bold";
  color: #fefcd0;
  line-height: 70px;
  font-size: 45px;
  padding-top: 250px;
  padding-bottom: 250px;
}
.game {
  background-image: url(../assets/bg.svg);
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.submarine {
  position: fixed;
  width: 150px;
  transition: transform 0.1s;
}
.notion {
  text-align: center;
  margin-bottom: 20px;
  color: #fefcd0;
  font-size: 10px;
}
</style>
