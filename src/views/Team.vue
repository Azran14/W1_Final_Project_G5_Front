<template>
  <div class="takePlace">
    <div class="htu">
      <div class="desc">
        <h3>MOVE THE SUBMARINE</h3>
      </div>
      <div class="touch">
        <img src="../assets/crevette.png" alt="keyboard" />
        <a href="find.vue">
          <img class="shiptest" src="../assets/shipnolight.svg" alt="ship" />
        </a>
        <img src="../assets/crevette.png" alt="wasd" />
      </div>
      <div class="infos">
        <p>Move the subamarine using the arrow keys or WASD</p>
      </div>
    </div>
    <div class="more">
      <img class="langue" src="../assets/crevette.png" alt="langue" />
      <img class="sound" src="../assets/crevette.png" alt="sound" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      members: ["Clément", "Bastien"],
    };
  },
};
</script>

<style lang="scss">
.takePlace {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.htu {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.desc {
  h3 {
    margin-top: 150px;
    font-size: 80px;
    color: #fefcd0;
  }
}
.touch {
  display: flex;
  justify-content: space-around;
}
.infos {
  color: #fefcd0;
}
.more {
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 50px;
  margin-right: 50px;
  .langue {
    margin-left: 20px;
  }
}
</style>
