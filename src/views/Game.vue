<template>
  <div>
    <Zone
      v-for="zoneCounter in zones"
      :key="zoneCounter"
      :zoneData="zoneCounter"
    />
  </div>
</template>

<script>
import Zone from "@/components/Zone.vue";

export default {
  name: "Game",
  components: {
    Zone,
  },
  data() {
    return {
      zones: ["000", "111", "222", "333"],
    };
  },
};
</script>

<style lang="scss"></style>
