<template>
  <div class="answer">
    <p>{{ asr1 }}</p>
    <p>{{ asr2 }}</p>
    <p>{{ asr3 }}</p>
    <p>{{ asr4 }}</p>
  </div>
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

<style scoped lang="scss">
.answer{
    display: flex;
    justify-content: space-between;
}
</style>
