<template>
  <div class="questionOne">
    <QuestionTitle/>
    <Question
      class="question__container"
      qst="What is the lifespan of a shrimp ?"
    />
    <div class="answer__container">
      <Answer
        class="answer__one answer__item"
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
        class="answer__one answer__item"
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
        class="answer__one answer__item"
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
import QuestionTitle from "@/components/QuestionTitle.vue"

export default {
  name: "Qcm",
  components: {
    Question,
    Answer,
    QuestionTitle,
  },
};
</script>

<style scoped lang="scss">
.question__container {
  font-size: 24px;
  font-weight: 700;
  color: #fefcd0;
  display: block;
  margin: auto;
  width: 670px;
  text-align: left;
  margin-bottom: 8px;
}
.answer__container {
  margin: auto;
  width: 670px;
  margin-bottom: 40px;
  .answer__item {
    font-size: 18px;
    color: #ffffff;
    font-weight: 400;
  }
}
</style>
