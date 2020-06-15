<template>
  <img :srcset="getAnimal()" alt="animal" />
</template>

<script>
export default {
  name: "AnimalModall",
  data() {
    return {
      animal: "dolphin.svg",
    };
  },
  methods: {
    getAnimal: function() {
      return "../../assets/" + this.animal;
    },
  },
};
</script>
<style scoped lang="scss"></style>
