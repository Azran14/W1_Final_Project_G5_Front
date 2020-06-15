<template>
  <div class="test">
    <img :src="getAnimal()" />
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
  methods: {
    getAnimal: function() {
      const fileName = this.text;
      return `../../assets/${fileName}.svg`;
    },
  },
};
</script>
<style scoped lang="scss"></style>
