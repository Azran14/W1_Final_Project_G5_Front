<template>
  <div class="answer">
    <div class="answer__contain">
      <AnswerImage />
      <p class="answer__text">{{ asr1 }}</p>
    </div>
    <div class="answer__contain">
      <AnswerImage />
      <p class="answer__text">{{ asr2 }}</p>
    </div>
    <div class="answer__contain">
      <AnswerImage />
      <p class="answer__text">{{ asr3 }}</p>
    </div>
    <div class="answer__contain">
      <AnswerImage />
      <p class="answer__text">{{ asr4 }}</p>
    </div>
  </div>
</template>

<script>
import AnswerImage from "@/components/cmq/AnswerImage.vue";

export default {
  name: "answer",
  props: {
    asr1: String,
    asr2: String,
    asr3: String,
    asr4: String,
  },
  components: {
    AnswerImage,
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
