<template>
  <img src="../assets/shipnolight.svg" alt="ship" />
</template>

<script>
export default {
  name: "Submarine",
  data() {
    return {
      count: 0,

      pages: ["move", "find", "research"],
      // page: page == pages[0] ? pages[1] : page == pages[1] ? page[2] : page,
      //
    };
  } /* <img :src="'/path/to/images/' + fileName"> */,
};
</script>
<style scoped lang="scss"></style>
