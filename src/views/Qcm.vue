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
          :answers="answers1"
          v-for="answer in answers1"
          :key="answer.id"
          v-bind:class="answer.correct ? 'green' : 'red'"
          class="s"
        >
          <p>{{ answer.text }}</p>
        </Answer>
      </div>
      <Question
        class="question__container"
        qst="What is the average speed of the dolphin ?"
      />
      <div class="answer__container">
        <Answer
          answers="answers"
          v-for="answer in answers2"
          :key="answer.id"
          v-bind:class="answer.correct ? 'green' : 'red'"
          class="s"
        >
          <p>{{ answer.text }}</p>
        </Answer>
      </div>
      <Question
        class="question__container"
        qst="What is the animal that most scares the humpback whale ?"
      />
      <div class="answer__container">
        <Answer
          answers="answers"
          v-for="answer in answers3"
          :key="answer.id"
          v-bind:class="answer.correct ? 'green' : 'red'"
          class="s"
        >
          <p>{{ answer.text }}</p>
        </Answer>
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
  data() {
    return {
      answers1: [
        {
          id: 1,
          text: "1 year",
          correct: false,
        },
        {
          id: 2,
          text: "3 years",
          correct: false,
        },
        {
          id: 3,
          text: "2 years",
          correct: true,
        },
        {
          id: 4,
          text: "5 years",
          correct: false,
        },
      ],

      answers2: [
        {
          id: 5,
          text: "35 km/h ",
          correct: true,
        },
        {
          id: 6,
          text: "60 km/h",
          correct: false,
        },
        {
          id: 7,
          text: "45 km/h",
          correct: false,
        },
        {
          id: 8,
          text: "15 km/h",
          correct: false,
        },
      ],

      answers3: [
        {
          id: 9,
          text: "White Shark ",
          correct: false,
        },
        {
          id: 10,
          text: "Schrimp",
          correct: false,
        },
        {
          id: 11,
          text: "Orca",
          correct: true,
        },
        {
          id: 12,
          text: "Dolphin",
          correct: false,
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.question__container {
  font-size: 24px;
  font-weight: 700;
  color: #fefcd0;
  margin-left: 10%;
  width: 60%;
  text-align: left;
  margin-bottom: 24px;
}
.answer__container {
  margin-left: 10%;
  width: 60%;
  margin-bottom: 64px;
  justify-content: space-between;
  display: flex;

  .s {
    font-size: 18px;
    color: #ffffff;
    font-weight: 400;
    align-items: center;
  }
  .green {
    background-color: #3CFD38;
    color: white;
  }
  .red {
    // background-color: red;
      color: white;
  }
}
</style>
