<template>
    <div class="questionOne">
            
<modal-vide>
      <QuestionTitle />
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
      </modal-vide>
      </div>
</template>

<script>
 import ModalVide from "@/components/ModalVide.vue";
import Question from "@/components/cmq/Question.vue";
import Answer from "@/components/cmq/Answer.vue";
import QuestionTitle from "@/components/cmq/QuestionTitle.vue";

export default {
  name: "Qcm",
  components: {
    Question,
    Answer,
    QuestionTitle,
    ModalVide,
  },
};
</script>

<style scoped lang="scss">
.question__container {
  font-size: 24px;
  font-weight: 700;
  color: #fefcd0;
  margin-left: 10%;
  width: 670px;
  text-align: left;
  margin-bottom: 24px;
}
.answer__container {
  margin-left: 10%;
  width: 670px;
  margin-bottom: 64px;
  .answer__item {
    font-size: 18px;
    color: #ffffff;
    font-weight: 400;
  }
}
</style>
