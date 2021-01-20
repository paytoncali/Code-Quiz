// come up with 5 questions and 4 answers for each question
// create timer

var timerEl = document.querySelector(".time");
var startEl = document.querySelector("#startbutton");
var questionsEl = document.querySelector("#questions");
var answersEl = document.querySelector("#answers");
var q1 = document.querySelector("h4");
var timeLeft = 50;
var questionIndex = 0;

var allQuestions = [
  {
    question: "What is used to create a string?",
    answers: ["[]", "()", "{}", '""'],
    rightanswer: '""',
  },
  {
    question: "What is used to create an array?",
    answers: ["[]", "()", "{}", '""'],
    rightanswer: "[]",
  },
  {
    question: "How do you declare a variable?",
    answers: ["var", "vari", "whatever you would like", "varb"],
    rightanswer: "var",
  },
  {
    question: "How do you comment something out in Javascript?",
    answers: ["// comment", "<!-- <comment> -->", "/* comment */", "!! comment"],
    rightanswer: "// comment",
  },
  {
    question: "What method is used to randomly pick a number in Javascript?",
    answers: ["Math.random();", "math.Random", "Math.random", "math.random();"],
    rightanswer: "math.random();",
  },
]

function timer() {

  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = "Time: " + timeLeft + " seconds remaining";

    if (timeLeft <= 0) {
      clearInterval(timeInterval);
      gameOver();
    }
  }, 1000);
}

function gameOver() {
  timerEl.textContent = "Game Over";
}

document.getElementById("startbutton")
  .addEventListener("click", function () {
    document.getElementById("gameStart").hidden = true;
    document.getElementById("startbutton").hidden = true;
}, false);

function quizStart() {
  questionsEl.textContent = allQuestions[questionIndex].question;
  
  displayanswers();
};

function displayanswers() {
  for (var i = 0; i < 4; i++) {
    var answerOptions = document.createElement("button");
    answerOptions.textContent = allQuestions[questionIndex].answers[i];
    var splitAnswers = allQuestions[questionIndex].answers[i];
    splitAnswers = answerOptions;
    answersEl.append(answerOptions);

    var btnId = "button" + (i + 1).toString();
    answerOptions.setAttribute("id", btnId);
    console.log(answerOptions);
  }
  button1.addEventListener("click", checkAnswer); 
  button2.addEventListener("click", checkAnswer);
  button3.addEventListener("click", checkAnswer); 
  button4.addEventListener("click", checkAnswer); 

}

function checkAnswer(event) {
  var display = document.querySelector("#display");
    allQuestions[questionIndex].rightanswer;
    console.log("correct Answer", allQuestions[questionIndex].rightanswer);

  if (event.target.innerText === allQuestions[questionIndex].rightanswer) {
    display.textContent = "good job";
    quizStart();
    questionIndex;

  } else {
    display.textContent = "nope";
    timeLeft = timeLeft - 10;
  }
}


//  questionIndex++;





startEl.addEventListener("click", function (event) {
  event.preventDefault();
  timer();
  quizStart();
});



// Attach event listener to increment button element


// when start is clicked, first question and first set of 4 answers populate and timer starts
// when answered correctly, it moves on to next question, when incorrectly takes 10 seconds from timer
// when time runs out or all answers are completed, your score is shown. 
// then ask to start highscores


