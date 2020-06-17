<template>
  <div class="Move">
    <div class="Move__container container">
      <Title class="container__title" msg="MOVE THE SUBMARINE" />
      <div class="container__infos">
        <router-link to="find">
          <Submarine class="container__submarine" />
        </router-link>
        <Mouse />
      </div>
      <Subinfos
        class="container__subinfos"
        text="The submarine follows your mouse, so go explore the seabed"
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
import Mouse from "@/components/Mouse.vue";

export default {
  name: "Move",
  components: {
    Title,
    Submarine,
    Subinfos,
    Options,
    Mouse,
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
  justify-content: space-around;
  align-items: center;
  font-family: "poppins";
  color: #fefcd0;
  &__infos {
    display: flex;
    justify-content: space-around;
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
