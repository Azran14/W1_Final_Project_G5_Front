<template>
  <div>
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <Modall /><!-- 
        <Video />
        <Map /> -->
      </div>
    </transition-group>

    <a class="prev" @click="prev" href="#">&#10094; Previous</a>
    <a class="next" @click="next" href="#">&#10095; Next</a>
  </div>
</template>

<script>
import Modall from "../views/Modall.vue"; /* 
import Video from "../views/Video.vue";
import Map from "../views/Map.vue"; */

export default {
  name: "Slider",
  components: {
    Modall /* 
    Video,
    Map, */,
  },
  data() {
    return {
      currentIndex: 0,
      modals: ["modall", "video", "map"],
    };
  },
  methods: {
    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    },
  },

  computed: {
    currentImg: function() {
      return this.modals[Math.abs(this.currentIndex) % this.modals.length];
    },
  },
};
</script>

<style>
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}
/* 
.modall {
  position: fixed;
  display: inline-grid;
  grid-template-columns: 200px 250px 300px 400px 200px;
  grid-template-rows: repeat(4, 20%) 24%;
  grid-column-gap: 10px;
  top: 50%;
  left: 50%;
  max-height: 80%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  width: 80%;
  overflow: auto;
  max-width: 80vw;
  min-height: 80vh;
  background-color: #4db2ce;
  opacity: 80%;
  border-radius: 10px;
  padding: 25px;
  border: 4px solid #fefcd0;
  color: #fefcd0;
  font-family: "poppins";
} */
</style>
