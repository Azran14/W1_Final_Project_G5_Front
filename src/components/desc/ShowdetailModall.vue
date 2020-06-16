<template>
  <div class="modall__showdetail showdetail ">
    <div class="showdetail__title">
      <h3>Details</h3>
    </div>
    <div class="showdetail__text">
      <h4>
        Some shrimps, known as cleaner shrimp, live of grooming <br />
        bigger fish and eating their parasites and dead skin.
        <br />
        Others are fierce predators, like the snapping shrimp, that <br />
        snaps its claws to create a shock wave that stuns preys.
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowdetailModall",
  /* 
  props: {
    msg: String,
  }, */
};
</script>

<style scoped lang="scss">
.modall__showdetail {
  background-color: #052f40;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: left;
  padding: 20px;

  font-size: 24px;
  font-family: "poppins";
  h4 {
    font-size: 18px;
    color: white;
    line-height: 27px;
  }
}
</style>
