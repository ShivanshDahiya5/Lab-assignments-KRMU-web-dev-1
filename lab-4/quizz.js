const quizQuestions = [
  {
    question: "What is the capital of India?",
    answer: "delhi"
  },
  {
    question: "What does HTML stand for?",
    answer: "hypertext markup language"
  },
  {
    question: "What is 5 + 7?",
    answer: "12"
  },
  {
    question: "Who is known as the father of computers?",
    answer: "charles babbage"
  },
  {
    question: "What year was JavaScript created?",
    answer: "1995"
  }
];

function runQuiz() {
  let score = 0; 

  for (let i = 0; i < quizQuestions.length; i++) {
    let userAnswer = prompt(quizQuestions[i].question);

    userAnswer = userAnswer.toLowerCase().trim();

    if (userAnswer === quizQuestions[i].answer) {
      alert("Correct! 🎉");
      score++;
    } else {
      alert(`Wrong ❌\nCorrect answer: ${quizQuestions[i].answer}`);
    }
  }

  alert(`Quiz Completed!\nYour Score: ${score} / ${quizQuestions.length}`);
}


runQuiz();