<template>
  <div class="Research">
    <div class="Research__container container">
      <Title class="container__title" msg="GO RESEARCH THAT SHRIMP" />
      <div class="container__infos">
        <SubmarineLight class="container__submarine" />
        <Subinfos class="container__subinfos" text="Press Space to know more" />
      </div>
    </div>
    <Options />
  </div>
</template>
<script>
import Title from "@/components/Title.vue";
import SubmarineLight from "@/components/SubmarineLight.vue";
import Subinfos from "@/components/Subinfos.vue";
import Options from "@/components/Options.vue";

export default {
  name: "Research",
  components: {
    Title,
    SubmarineLight,
    Subinfos,
    Options,
  },
};
</script>

<style scoped lang="scss">
.Research {
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
