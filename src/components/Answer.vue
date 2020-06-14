<template>
  <div class="answer">{{ asr1 }} {{ asr2 }} {{ asr3 }} {{ asr4 }}</div>
</template>

<script>
export default {
  name: "answer",
  props: {
    asr1: String,
    asr2: String,
    asr3: String,
    asr4: String,
  },
};
</script>

<style scoped lang="scss"></style>
