<template>
  <div class="questionOne">
    <modal-vide>
      <QuestionTitle />
      <Question
        class="question__container"
        qst="What is the lifespan of a plastic bag in the ocean ?"
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
        qst="Where does the regalec lives ?"
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
        qst="What is the size of the giant squid ?"
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
import QuestionTitle from "@/components/cmq/QuestionTitle.vue";
import ModalVide from "@/components/ModalVide.vue";
export default {
  name: "Qcm2",
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
          text: "350 years",
          correct: false,
        },
        {
          id: 2,
          text: "250 years",
          correct: false,
        },
        {
          id: 3,
          text: "150 years",
          correct: false,
        },
        {
          id: 4,
          text: "450 years",
          correct: true,
        },
      ],

      answers2: [
        {
          id: 5,
          text: "Pacific and Atlantic",
          correct: false,
        },
        {
          id: 6,
          text: "Artic and pacific",
          correct: false,
        },
        {
          id: 7,
          text: "Artic and Antarctic",
          correct: true,
        },
        {
          id: 8,
          text: "Atlantic and Indian",
          correct: false,
        },
      ],

      answers3: [
        {
          id: 9,
          text: "10 to 13 m",
          correct: true,
        },
        {
          id: 10,
          text: "7 to 10 m",
          correct: false,
        },
        {
          id: 11,
          text: "13 to 16 m",
          correct: false,
        },
        {
          id: 12,
          text: "4 to 7 m",
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
