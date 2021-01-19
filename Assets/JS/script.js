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

    if (timeLeft === 0) {
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
  },
    false);

function quizStart() {
  questionsEl.textContent = allQuestions[questionIndex].question;

  displayanswers();
};

function displayanswers() {
  for (var i = 0; i < allQuestions.length; i++) {
    var answerOptions = document.createElement("button");
    answerOptions.textContent = allQuestions[questionIndex].answers[i];
    var splitAnswers = allQuestions[questionIndex].answers[i];
    splitAnswers = answerOptions;
    answersEl.append(answerOptions);
  

  var button1 = answerOptions.setAttribute("id", "button1");
  // var button2 = answerOptions.setAttribute("id", "button2");
  // var button3 = answerOptions.setAttribute("id", "button3");
  // var button4 = answerOptions.setAttribute("id", "button4");
  console.log(splitAnswers);
  }


  button1.addEventListener("click", function () {
  });
  button2.addEventListener("click", function () {
  });
  button3.addEventListener("click", function () {
  });
  button4.addEventListener("click", function () {
  });

  checkAnswer();
}

function checkAnswer() {
  var display = document.querySelector("#display");

  // answersEl.addEventListener("click", function(event) {
  //   console.log("User Answer", this.textContent);
  //   console.log("correct Answer", allQuestions[questionIndex].rightanswer);

  if (event.target.value === allQuestions[questionIndex].rightanswer) {
    display.textContent = "good job";

  } else {
    display.textContent = "nope";
  }
  console.log(this.textContent)
  // });
}


//  questionIndex++;





startEl.addEventListener("click", function (event) {
  event.preventDefault();
  timer();
  quizStart();
  console.log(startEl)
});

// Attach event listener to increment button element


// when start is clicked, first question and first set of 4 answers populate and timer starts
// when answered correctly, it moves on to next question, when incorrectly takes 10 seconds from timer
// when time runs out or all answers are completed, your score is shown. 
// then ask to start highscores


