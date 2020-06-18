<template>
  <div class="test">
    <img :src="require(`../../assets/img/img${text}.svg`)" />
  </div>
</template>

<script>
export default {
  name: "AnimalModall",
  props: {
    text: String,
  },
  methods: {},
};
</script>
<style scoped lang="scss">
img {
  width: 100%;
}
</style>
