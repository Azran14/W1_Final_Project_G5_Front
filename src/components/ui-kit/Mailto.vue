<template>
  <a :class="color" :href="'mailto:' + email">{{ email }}</a>
  <!--<div :class="color" @click="$emit('changeEmail')">{{ email }}</div>-->
</template>

<script>
export default {
  props: {
    email: String,
    color: String,
  },
};
</script>

<style scoped>
a {
  font-weight: bold;
}

.red,
.red:visited {
  color: yellow;
}

.blue,
.blue:visited {
  color: green;
}
</style>
