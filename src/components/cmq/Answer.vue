<template>
  <div class="answer">
    <div class="answer__contain" >
      <AnswerImage />
    </div>
    <slot></slot>
  </div>
</template>

<script>
import AnswerImage from "@/components/cmq/AnswerImage.vue";

export default {
  name: "answer",
  props: {
    answers: {},
  },
  methods: {
    // testAnswer: function() {
    //   const answer = Object.values(this.answers);
    //   for (let i = 0; i < answer.length; i++) {
    //     if (answer[i].correct) {
    //       answer[i].classList.add('red');
    //     }
    //     console.log( answer[i].text);
    //   }
    // },
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
