<template>
  <section>
    <div class="container" @mouseenter="loadFish(zoneData)">
      <div
        @click="(showModal = true), $emit('modalOn')"
        v-for="img_link in fishData"
        :key="img_link"
        class="animal"
      ></div>
      <SliderModal
        v-if="showModal"
        @close="(showModal = false), $emit('closeModal')"
        class="modal"
      />
    </div>
  </section>
</template>

<script>
import SliderModal from "@/components/SliderModal.vue";
export default {
  name: "Zone",
  components: {
    SliderModal,
  },
  props: {
    zoneData: Number,
  },
  data() {
    return {
      fishData: [
        // { id_animals: "1", img_link: "yvette", zone: "0" },
        // { id_animals: "7", img_link: "surfy", zone: "0" },
        // { id_animals: "9", img_link: "rorry", zone: "0" },
        // { id_animals: "14", img_link: "max", zone: "0" },
        // { id_animals: "15", img_link: "cookie", zone: "0" },
      ],
      showModal: false,
    };
  },
  methods: {
    // researchFish: function() {
    //   console.log("slt");
    // },
    loadFish: function(zoneData) {
      zoneData++;
      fetch(
        "https://ocean-api.vdpn.io/API/index.php?filter=zone&value=" + zoneData
      )
        .then((response) => response.json())
        .then((data) => (fishData = data));
      // .catch((error) => alert("Erreur : " + error));
    },
  },
};
</script>
<style scoped lang="scss">
@for $i from 1 through 5 {
  .animal:nth-child(#{$i}) {
    margin-left: random(18) * $i + vw;
  }
}
.animal {
  height: 30px;
  width: 30px;
  border: dotted 2px red;
  background-color: red;
  margin-bottom: 300px;
  z-index: 98;
}
.container {
  width: 90%;
  display: flex;
  flex-direction: column;
  min-height: 200px;
}
section {
  border: solid 2px green;
  align-items: center;
  display: flex;
  flex-direction: column;
}
.modal {
  z-index: 99;
}
</style>
