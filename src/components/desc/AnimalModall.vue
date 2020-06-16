<template>
  <div class="test">
    <img :src="require(`../../assets/${text}.svg`)" />
  </div>
</template>

<script>
export default {
  name: "AnimalModall",
  data() {
    return {
      text: "dolphin",
    };
  },
  methods: {},
};
</script>
<style scoped lang="scss"></style>
