<template>
  <div>
    <Zone
      v-for="zoneCounter in zones"
      :key="zoneCounter"
      :zoneData="zoneCounter"
      test="false"
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
      zones: ["0", "1", "2", "3"],
    };
  },
};
</script>
