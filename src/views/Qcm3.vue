<template>
  <div class="questionOne">
    <QuestionTitle />
    <Question
      class="question__container"
      qst="What is the weight of the Dumbo octopus ?"
    />
    <div class="answer__container">
      <Answer
        class="answer__one answer__item"
        asr1="250 g"
        asr2="2 kg"
        asr3="500 g"
        asr4="1 kg"
      />
    </div>
    <Question
      class="question__container"
      qst="What is the family of the scotoplanes ?"
    />
    <div class="answer__container">
      <Answer
        class="answer__one answer__item"
        asr1="Elpidiidae"
        asr2="Amiidea"
        asr3="rhincodontidaec"
        asr4="pandalidae "
      />
    </div>
    <Question
      class="question__container"
      qst="What pollutes our oceans the most?"
    />
    <div class="answer__container">
      <Answer
        class="answer__one answer__item"
        asr1="Oil"
        asr2="Plastic"
        asr3="Radioactive waste"
        asr4="All"
      />
    </div>
  </div>
</template>

<script>
import Question from "@/components/cmq/Question.vue";
import Answer from "@/components/cmq/Answer.vue";
import QuestionTitle from "@/components/cmq/QuestionTitle.vue"
export default {
  name: "Qcm3",
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
  width: 600px;
  text-align: left;
  margin-bottom: 8px;
}
.answer__container {
  margin: auto;
  width: 600px;
  margin-bottom: 40px;
  .answer__item {
    font-size: 18px;
    color: #ffffff;
    font-weight: 400;
  }
}
</style>
