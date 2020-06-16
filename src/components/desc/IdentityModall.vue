<template>
  <div class="identity">
    <p>
      Hi, my name is Yvette. <br />
      I am from the pandalidae <br />
      family and I am a <br />
      crustacean
    </p>
  </div>
</template>

<script>
export default {
  name: "IdentityModall",
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
