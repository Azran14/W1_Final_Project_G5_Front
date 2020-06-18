<template>
  <div class="Find">
    <div class="Find__container container">
      <Title class="container__title" msg="FIND SPECIES" />
      <div class="container__infos">
        <router-link to="game">
          <Submarine class="container__submarine" />
        </router-link>
        <Click />
      </div>
      <Subinfos
        class="container__subinfos"
        text="
Use your mouse to search for fish by clicking on them to find out more about them."
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
import Click from "@/components/Click.vue";

export default {
  name: "Find",
  components: {
    Title,
    Submarine,
    Subinfos,
    Options,
    Click,
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

@media screen and (min-width: 320px) and (max-width: 425px) {
  .container {
    &__title {
      font-size: 32px;
    }
    &__subinfos {
      font-size: 12px;
    }
  }
}
</style>
