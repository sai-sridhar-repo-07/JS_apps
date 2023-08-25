const quizData = [
  {
    question: "How old is Sachin ? ",
    a: "40",
    b: "37",
    c: "27",
    d: "50",
    correct: "d",
  },
  {
    question: "Who is the current World's Chess Champion ?",
    a: "Ramesh",
    b: "Anand",
    c: "Fabi",
    d: "Magnus",
    correct: "d",
  },

  {
    question: "What is the most used programming language in 2019 ?",
    a: "Java",
    b: "JavaScript",
    c: "C",
    d: "Python",
    correct: "a",
  },

  {
    question: "Who is the current prime miniter of India",
    a: "Rahul Gandhi",
    b: "Modi",
    c: "Amit Shah",
    d: "Biden",
    correct: "b",
  },

  {
    question: "Which is best branch in Enginnering",
    a: "Mechnical",
    b: "CSE",
    c: "IT",
    d: "AI&ML",
    correct: "a",
  },
];

const quizEl = document.querySelector("#quiz");
const questionEl = document.querySelector("#question");
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");
const submitBtn = document.querySelector("#submit");
const answerEls = document.querySelectorAll(".answer");

let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  questionEl.textContent = quizData[currentQuestion].question;
  a_text.textContent = quizData[currentQuestion].a;
  b_text.textContent = quizData[currentQuestion].b;
  c_text.textContent = quizData[currentQuestion].c;
  d_text.textContent = quizData[currentQuestion].d;
}

function getSelected() {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  //   console.log(answer);

  if (answer) {
    // console.log("yes");
    if (answer === quizData[currentQuestion].correct) {
      score++;
    }
    if (currentQuestion === quizData.length - 1) {
      quizEl.innerHTML = `<h2>You answered correctly ${score} out of ${quizData.length} questions. </h2>
      <button onClick = "location.reload()">Reload</button>`;
    } else {
      currentQuestion++;
    }
  }

  loadQuiz();
});
