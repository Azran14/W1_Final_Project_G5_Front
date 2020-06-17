<template>
  <img :src="require(`../../assets/img/map${link}.svg`)" alt="Bubble" />
</template>

<script>
export default {
  name: "MapModall",
  props: {
    link: String,
  },
};
</script>
<style scoped lang="scss"></style>
