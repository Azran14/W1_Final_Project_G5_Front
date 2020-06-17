<template>
  <div class="questionOne">
    <modal-vide>
    <QuestionTitle />
    <Question
      class="question__container"
      qst="What is the weight of the Dumbo octopus ?"
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
      qst="What is the family of the scotoplanes ?"
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
      qst="What pollutes our oceans the most?"
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
import Question from "@/components/cmq/Question.vue";
import Answer from "@/components/cmq/Answer.vue";
import QuestionTitle from "@/components/cmq/QuestionTitle.vue"
import ModalVide from "@/components/ModalVide.vue";
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
          text: "250 g",
          correct: false,
        },
        {
          id: 2,
          text: "2 kg",
          correct: false,
        },
        {
          id: 3,
          text: "500 g",
          correct: true,
        },
        {
          id: 4,
          text: "1 kg",
          correct: false,
        },
      ],

      answers2: [
        {
          id: 5,
          text: "Elpidiidae",
          correct: true,
        },
        {
          id: 6,
          text: "Amiidea",
          correct: false,
        },
        {
          id: 7,
          text: "rhincodontidaec",
          correct: false,
        },
        {
          id: 8,
          text: "pandalidae",
          correct: false,
        },
      ],

      answers3: [
        {
          id: 9,
          text: "Oil",
          correct: false,
        },
        {
          id: 10,
          text: "Plastic ",
          correct: false,
        },
        {
          id: 11,
          text: "Gas",
          correct: false,
        },
        {
          id: 12,
          text: "All",
          correct: true,
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
