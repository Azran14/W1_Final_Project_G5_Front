<template>
  <div class="Find">
    <div class="Find__container container">
      <Title class="container__title" msg="FIND SPECIES" />
      <div class="container__infos">
        <Space class="container_space" />
        <Submarine class="container__submarine" />
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
import Space from "@/components/Space.vue";

export default {
  name: "Find",
  components: {
    Title,
    Submarine,
    Subinfos,
    Options,
    Space,
  },
};
</script>

<style scoped lang="scss">
.Find {
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
    flex-direction: column;
    height: 50%;
    justify-content: space-around;
    align-items: center;
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
  &__submarine {
    margin-bottom: 90px;
  }
}
</style>
