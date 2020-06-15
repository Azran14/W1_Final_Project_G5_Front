<template>
  <div class="questionOne">
    <QuestionTitle/>
    <Question
      class="question__container"
      qst="What is the lifespan of a plastic bag in the ocean ?"
    />
    <div class="answer__container">
      <Answer
        class="answer__one answer__item"
        asr1="350 years"
        asr2="250 years"
        asr3="150 years"
        asr4="450 years "
      />
    </div>
    <Question
      class="question__container"
      qst="Where does the regalec lives ?"
    />
    <div class="answer__container">
      <Answer
        class="answer__one answer__item"
        asr1="Pacific and Atlantic"
        asr2="Artic and pacific"
        asr3="Artic and Antarctic"
        asr4="Atlantic and Indian"
      />
    </div>
    <Question
      class="question__container"
      qst="What is the size of the giant squid ?"
    />
    <div class="answer__container">
      <Answer
        class="answer__one answer__item"
        asr1="10 to 13 m"
        asr2="7 to 10 m"
        asr3="13 to 16 m"
        asr4="4 to 7 m"
      />
    </div>
  </div>
</template>

<script>
import Question from "@/components/cmq/Question.vue";
import Answer from "@/components/cmq/Answer.vue";
import QuestionTitle from "@/components/cmq/QuestionTitle.vue";

export default {
  name: "Qcm2",
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
  width: 500px;
  margin-bottom: 40px;
  .answer__item {
    font-size: 18px;
    color: #ffffff;
    font-weight: 400;
  }
}
</style>
