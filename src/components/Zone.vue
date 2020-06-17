<template>
  <section>
    <div class="zone">
      <h2 class="zone__title">{{ title }}</h2>
    </div>

    <div class="container">
      <img
        @click="(showModal = true), $emit('modalOn'), (fishIndex = index)"
        v-for="(info, index) in fishData"
        :key="index"
        class="animal"
        :src="require(`../assets/img/img${fishData[index].link}.svg`)"
      />
      <SliderModal
        v-if="showModal"
        @close="(showModal = false), $emit('closeModal')"
        class="modal"
        :fishData="fishData[fishIndex]"
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
    title: String,
  },
  data() {
    return {
      fishData: fetch(
        "https://ocean-api.vdpn.io/API/index.php?filter=zone&value=" +
          this.zoneData
      )
        .then((response) => response.json())
        .then((data) => {
          this.fishData = data;
          this.request = true;
        }),
      // .catch((error) => alert("Erreur : " + error));,
      showModal: false,
      request: false,
      fishIndex: Number,
    };
  },
  // watch: {
  //   request: function() {
  //     if (this.request) this.loadFish(this.zoneData);
  //   },
  // },
  methods: {},
};
</script>
<style scoped lang="scss">
.zone {
  width: 100%;
  height: 100px;
  background-color: rgba(0, 0, 139, 0.219);
  display: flex;
  justify-content: center;
  align-items: center;
  &__title {
    font-size: 45px;
    text-transform: uppercase;
    font-family: "poppins-bold";
    color: #fefcd0;
  }
}

@for $i from 1 through 5 {
  .animal:nth-child(#{$i}) {
    margin-left: random(18) * $i + vw;
  }
}
.animal {
  height: 200px;
  width: 200px;
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
  align-items: center;
  display: flex;
  flex-direction: column;
}
.modal {
  z-index: 99;
}
</style>
