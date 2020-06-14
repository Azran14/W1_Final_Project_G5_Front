<template>
  <img :src="path" alt="animal" />
</template>

<script>
export default {
  name: "AnimalModall",
  props: {
    str: String,
  },
};
</script>
<style scoped lang="scss"></style>
