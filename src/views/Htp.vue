<template>
  <div class="htpOne">
    <div class="htpOne__container container">
      <Title class="container__title" msg="EXPLORE THE OCEAN" />
      <div class="container__infos">
        <Submarine class="container__submarine" />
        <Subinfos
          class="container__subinfos"
          text="Take place in the submarine"
        />
      </div>
    </div>
    <Options />
  </div>
</template>
<script>
import Title from "@/components/Title.vue";
import Submarine from "@/components/Submarine.vue";
import Subinfos from "@/components/Subinfos.vue";
import Options from "@/components/Options.vue";

export default {
  name: "Htp",
  components: {
    Title,
    Submarine,
    Subinfos,
    Options,
  },
};
</script>

<style scoped lang="scss">
.htpOne {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
}
.container {
  border: 3px solid green;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: "poppins";
  color: #fefcd0;
  &__title {
    font-size: 64px;
    font-weight: 900;
    -webkit-text-stroke: 2px #fefcd0;
    letter-spacing: 10px;
  }
}
</style>
