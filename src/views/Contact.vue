<template>
  <div>
    <h1>This is a contact page</h1>
    <Mailto :email="email" color="blue" />
  </div>
</template>

<script>
//import Mailto from "@/components/ui-kit/Mailto.vue";

export default {
  name: "Contact",
  //components: {
  //Mailto,
  //},
  data() {
    return {
      email: "test@msn.com",
    };
  },
};
</script>

<style lang="scss"></style>
