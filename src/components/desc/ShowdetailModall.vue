<template>
  <div class="modall__showdetail">
    <h3>Details</h3>
    <h4>{{ msg }}</h4>
  </div>
</template>

<script>
export default {
  name: "ShowdetailModall",

  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
.modall__showdetail {
  background-color: #052f40;
  h3 {
    font-size: 24px;
    font-family: "poppins-bold";
  }
}
</style>
