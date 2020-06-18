<template>
  <section>
    <div class="zone">
      <h2 class="zone__title">{{ zone.title }}</h2>
      <p class="zone__descript">{{ zone.description }}</p>
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
    zone: Object,
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
      showModal: false,
      request: false,
      fishIndex: Number,
    };
  },
  methods: {},
};
</script>
<style scoped lang="scss">
.zone {
  width: 100vw;
  height: 125px;
  background-color: rgba(0, 0, 139, 0.219);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fefcd0;
  font-family: "poppins-bold";
  &__title {
    font-size: 45px;
    text-transform: uppercase;
  }
  &__descript {
    font-family: "poppins";
    margin-top: 10px;
    font-size: 24px;
  }
}

@for $i from 1 through 5 {
  .animal:nth-child(#{$i}) {
    margin-left: random(18) * $i + vw;
  }
}
.animal {
  margin-top: 150px;
  margin-bottom: 150px;
  max-width: 80vw;
  z-index: 98;
  max-width: 40%;
  animation: moveFish 8s infinite ease-in-out;
  &:nth-child(odd) {
    animation: moveFish 6s infinite reverse ease-in;
  }
}
.container {
  width: 100vw;
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

@keyframes moveFish {
  0% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(40px, 20px);
  }

  100% {
    transform: translate(0, 0);
  }
}
@media (max-width: 750px) {
}
</style>
