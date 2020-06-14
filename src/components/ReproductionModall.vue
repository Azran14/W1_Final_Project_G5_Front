<template>
  <div class="reproduction">
    <div class="reproduction__title">
      <h3>{{ msg }}</h3>
    </div>
    <div class="reproduction__text">
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReproductionModall",
  data() {
    return {
      msg: "Reproduction",
    };
  },
  props: {
    text: String,
  },
};
</script>
<style scoped lang="scss">
.reproduction {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 50%;
  justify-content: space-between;
  h3 {
    font-family: "poppins-bold";
    font-size: 24px;
  }
}
</style>
