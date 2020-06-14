<template>
  <div class="questionOne">
    <h1 class="question0ne__title">QUESTIONS</h1>
    <Question
      class="question__container"
      qst="What is the lifespan of a shrimp ?"
    />
    <div class="answer__container">
      <Answer
        class="answer__one answer"
        asr1="1 years"
        asr2="3 years"
        asr3="2 years"
        asr4="5 years"
      />
    </div>
    <Question
      class="question__container"
      qst="What is the average speed of the dolphin ?"
    />
    <div class="answer__container">
      <Answer
        class="answer__one answer"
        asr1="35 km/h"
        asr2="60 km/h"
        asr3="45 km/h"
        asr4="15 km/h"
      />
    </div>
    <Question
      class="question__container"
      qst="What is the animal that most scares the humpback whale ?"
    />
    <div class="answer__container">
      <Answer
        class="answer__one answer"
        asr1="White Shark"
        asr2="Schrimp"
        asr3="Orca"
        asr4="Dolphin"
      />
    </div>
  </div>
</template>

<script>
import Question from "@/components/Question.vue";
import Answer from "@/components/Answer.vue";

export default {
  name: "Qcm",
  components: {
    Question,
    Answer,
  },
};
</script>

<style scoped lang="scss">
.question0ne__title {
  color: #fefcd0;
  font-weight: 900;
  font-size: 40px;
  margin-bottom: 24px;
}
.question__container {
  font-size: 24px;
  font-weight: 700;
  color: #fefcd0;
  display: block;
  margin: auto;
  width: 800px;
  text-align: left;
  margin-bottom: 24px;
}
.answer__container {
  margin: auto;
  width: 400px;
  margin-bottom: 40px;
  .answer {
    font-size: 16px;
    color: #fefcd0;
    font-weight: 600;

  }
}
</style>
