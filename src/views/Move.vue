<template>
  <div class="Move">
    <div class="Move__container container">
      <Title class="container__title" msg="MOVE THE SUBMARINE" />
      <div class="container__infos">
        <Keyboard class="container__keyboard" />
        <Submarine class="container__submarine" />
        <Wasd class="container__wasd" />
      </div>
      <Subinfos
        class="container__subinfos"
        text="Move the submarine using the arrow keys or WASD"
      />
    </div>
    <Options />
  </div>
</template>
<script>
import Title from "@/components/Title.vue";
import Submarine from "@/components/Submarine.vue";
import Subinfos from "@/components/Subinfos.vue";
import Options from "@/components/Options.vue";
import Wasd from "@/components/Wasd.vue";
import Keyboard from "@/components/Keyboard.vue";

export default {
  name: "Move",
  components: {
    Title,
    Submarine,
    Subinfos,
    Options,
    Wasd,
    Keyboard,
  },
};
</script>

<style scoped lang="scss">
.Move {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
}
.container {
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: "poppins";
  color: #fefcd0;
  &__infos {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  &__title {
    font-size: 64px;
    font-weight: 900;
    -webkit-text-stroke: 2px #fefcd0;
    letter-spacing: 10px;
  }
  &__subinfos {
    margin-top: 100px;
  }
}
</style>
