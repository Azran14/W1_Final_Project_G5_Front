<template>
  <div class="takePlace">
    <div class="htu">
      <div class="desc">
        <h3>MOVE THE SUBMARINE</h3>
      </div>
      <div class="touch">
        <img src="../assets/keyboard.png" alt="keyboard" />
        <img class="shiptest" src="../assets/shipnolight.svg" alt="ship" />
        <img src="../assets/wasd.png" alt="wasd" />
      </div>
      <div class="infos">
        <p>Move the subamarine using the arrow keys or WASD</p>
      </div>
      <div class="more">
        <img class="langue" src="../assets/english.png" alt="langue" />
        <img class="sound" src="../assets/sound.png" alt="sound" />
      </div>
    </div>
    <div class="find">
      <div class="find__touch">
        <div class="find__desc">
          <h3>FIND SPECIES</h3>
        </div>
        <div class="find__infos">
          <img src="../assets/space.png" alt="space touch" />
          <img class="shiptest" src="../assets/shipnolight.svg" alt="ship" />
          <p>Press SPACE when you want to know more about a specie</p>
        </div>
        <div class="find__more">
          <img class="langue" src="../assets/english.png" alt="langue" />
          <img class="sound" src="../assets/sound.png" alt="sound" />
        </div>
      </div>
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
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "Poppins-bold";
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
  margin-right: 50px;
  .langue {
    margin-left: 20px;
  }
}
</style>
