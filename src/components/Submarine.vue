<template>
  <a href="move" @click="next()">
    <img src="../assets/shipnolight.svg" alt="ship"
  /></a>
</template>

<script>
export default {
  name: "Submarine",
  data() {
    return {
      actualPage: "move",
      page: ["move", "find", "search"],
      count: 0,
    };
  },
  methods: {
    next: function() {
      this.actualPage = this.page[this.count];
      this.count++;
    },
  } /* <img :src="'/path/to/images/' + fileName"> */,
};
</script>
<style scoped lang="scss"></style>
