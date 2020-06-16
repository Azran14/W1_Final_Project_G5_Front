<template>
  <div class="identity">
    <p>
      Hi, my name is {{ this.infos[0].name }}. <br />
      I am from the {{ this.infos[1].family }} <br />
      family and I am a <br />
      {{ this.infos[2].species }}
    </p>
  </div>
</template>

<script>
export default {
  name: "IdentityModall",
  data() {
    return {
      infos: [
        { name: "Yvette" },
        { family: "pandalidae" },
        { species: "crustacean" },
      ],
    };
  },
};
</script>
<style scoped lang="scss">
.identity {
  background-image: url("../../assets/bubletext.svg");
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  p {
    text-align: center;
    transform: rotate(-12deg) translateX(70px) translateY(20px);
    color: #3594ae;
    font-size: 15px;
    font-family: "poppins-bold";
    line-height: 22px;
  }
}
</style>
