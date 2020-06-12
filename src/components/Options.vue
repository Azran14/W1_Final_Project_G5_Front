<template>
  <div class="options">
    <img src="../assets/english.png" alt="ship" />
    <img src="../assets/sound.png" alt="ship" />
  </div>
</template>

<script>
export default {
  name: "Options",
};
</script>
<style scoped lang="scss">
.options {
  display: flex;
  width: 80px;
  justify-content: space-between;
  position: fixed;
  right: 80px;
  bottom: 35px;
}
</style>
