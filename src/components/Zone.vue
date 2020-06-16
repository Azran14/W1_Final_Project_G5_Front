<template>
  <section v-on:keyup.enter="idk()">
    <div class="container">
      <div v-for="img_link in fishData" :key="img_link" class="animal"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Zone",
  props: {
    zoneData: String,
    test: Boolean,
  },
  data() {
    return {
      fishData: [
        { id_animals: "1", img_link: "yvette", zone: "0" },
        { id_animals: "7", img_link: "surfy", zone: "0" },
        { id_animals: "9", img_link: "rorry", zone: "0" },
        { id_animals: "14", img_link: "max", zone: "0" },
        { id_animals: "15", img_link: "cookie", zone: "0" },
      ],
    };
  },
  watch: {
    test: function() {
      this.jesaispasmoi();
    },
  },
  methods: {
    jesaispasmoi: function() {
      alert("yo la mif");
    },
    idk: function() {
      this.test = true;
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
  margin-bottom: 200px;
}
.container {
  width: 90%;
  display: flex;
  flex-direction: column;
}
section {
  border: solid 2px green;
  align-items: center;
  display: flex;
  flex-direction: column;
}
</style>
