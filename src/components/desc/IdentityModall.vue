<template>
  <div class="identity">
    <p>
      Hi, my name is {{ fishData.name }}. I am from the {{ fishData.family }}
      family and I am a
      {{ fishData.species }}
    </p>
  </div>
</template>

<script>
export default {
  name: "IdentityModall",
  props: {
    fishData: Object,
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
    width: 200px;
  }
}
</style>
