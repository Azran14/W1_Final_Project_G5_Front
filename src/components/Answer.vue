<template>
  <div class="answer">
    <div class="answer__contain">
      <img src="../assets/shell.svg" alt="shell" />
      <p class="answer__text">{{ asr1 }}</p>
    </div>
    <div class="answer__contain">
      <img src="../assets/shell.svg" alt="shell" />
      <p class="answer__text">{{ asr2 }}</p>
    </div>
    <div class="answer__contain">
      <img src="../assets/shell.svg" alt="shell" />
      <p class="answer__text">{{ asr3 }}</p>
    </div>
    <div class="answer__contain">
      <img src="../assets/shell.svg" alt="shell" />
      <p class="answer__text">{{ asr4 }}</p>
    </div>
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
.answer {
  display: flex;
  justify-content: space-between;
}
.answer__contain {
  display: flex;
}

.answer__text {
  margin-top: 12px;
}
</style>
