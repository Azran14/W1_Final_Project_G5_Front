<template>
  <div id="htp">
    <div class="htp__title">
      <h3>{{ title }}</h3>
    </div>
    <div class="htp__space">
      <img src="../assets/space.png" alt="space touch" v-if="counter === 2" />
    </div>
    <div class="htp__infos">
      <img src="../assets/keyboard.svg" alt="keyboard" v-if="counter === 1" />
      <img
        class="htp__submarineLight"
        v-if="counter === 3"
        src="../assets/ship.svg"
        alt="submarine"
      />
      <img
        class="htp__submarine"
        @click="changer()"
        src="../assets/shipnolight.svg"
        alt="submarine"
      />
      <img src="../assets/wasd.svg" alt="wasd" v-if="counter === 1" />
    </div>
    <div class="htp__subtitle">
      <p>{{ subtitle }}</p>
    </div>
    <div class="htp__more">
      <img class="langue" src="../assets/english.png" alt="langue" />
      <img class="sound" src="../assets/sound.png" alt="sound" />
    </div>
  </div>
</template>

<script>
export default {
  el: "#htp",
  data() {
    return {
      title: "EXPLORE THE OCEAN",
      titles: ["MOVE THE SUBMARINE", "FIND SPECIES", "GO SEARCH THE SHRIMP"],
      subtitle: "Take place in the submarine.",
      subtitles: [
        "Move the subamarine using the arrow keys or WASD",
        "Press SPACE when you want to know more about a species",
        "Move the subamarine using the arrow keys or WASD",
      ],
      counter: 0,
    };
  },
  methods: {
    changer: function() {
      this.title = this.titles[0];
      this.titles[0] = this.titles[1];
      this.titles[1] = this.titles[2];

      this.subtitle = this.subtitles[0];
      this.subtitles[0] = this.subtitles[1];
      this.subtitles[1] = this.subtitles[2];

      this.counter += 1;
    },
  },
  move: function() {},
};
</script>

<style lang="scss">
#htp {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.htp__title {
  margin-top: 150px;
  font-size: 80px;
  color: #fefcd0;
}
.htp__space {
  margin-top: 100px;
}
.htp__infos {
  width: 100vw;
  margin-top: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.htp__subtitle {
  color: #fefcd0;
  margin-top: 6%;
}
.htp__more {
  display: flex;
  flex-direction: row-reverse;
  margin-right: 50px;
  .langue {
    margin-left: 20px;
  }
}
</style>
