var timerEl = document.querySelector(".time");
var startEl = document.querySelector("#startbutton");
var questionsEl = document.querySelector("#questions");
var answersEl = document.querySelector("#answers");
var q1 = document.querySelector("h4");
var timeLeft = 50;
var questionIndex = 0;
var scores = document.querySelector(".highscore");
var homeBtn = document.querySelector("#home");
homeBtn.setAttribute("class", "btn btn-outline-warning");

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
    } else if (questionIndex === 5) {
      clearInterval(timeInterval);
      gameOver();
    }
  }, 1000);
}

document.getElementById("startbutton")
  .addEventListener("click", function () {
    document.getElementById("gameStart").hidden = true;
    document.getElementById("startbutton").hidden = true;
  }, false);


function displayanswers() {
  for (var i = 0; i < 4; i++) {
    var answerOptions = document.createElement("button");
        answerOptions.textContent = allQuestions[questionIndex].answers[i];

    answersEl.append(answerOptions);

    var btnId = "button" + (i + 1).toString();
    answerOptions.setAttribute("id", btnId);
    console.log(answerOptions);
  }

  button1.addEventListener("click", checkAnswer);
  button1.setAttribute("class", "btn btn-outline-warning");
  button1.style.width = "auto";
  button2.addEventListener("click", checkAnswer);
  button2.setAttribute("class", "btn btn-outline-warning");
  button2.style.width = "auto";
  button3.addEventListener("click", checkAnswer);
  button3.setAttribute("class", "btn btn-outline-warning");
  button3.style.width = "auto";
  button4.addEventListener("click", checkAnswer);
  button4.setAttribute("class", "btn btn-outline-warning");
  button4.style.width = "auto";
  quizStart();
}

// if / else to move to end game 
function quizStart() {
  if (questionIndex < 5) {
  questionsEl.textContent = allQuestions[questionIndex].question;
  questionsEl.style.margin = "50px";
  changeAnswerOptions();
  } else {
    gameOver();
  }
};

function changeAnswerOptions() {
  for (i = 0; i < allQuestions[questionIndex].answers.length; i++) {
    var selector = "button" + (i + 1);
    document.getElementById(selector).textContent = allQuestions[questionIndex].answers[i]
}
}

function checkAnswer(event) {
  allQuestions[questionIndex].rightanswer;
  console.log("correct Answer", allQuestions[questionIndex].rightanswer);

  if (event.target.innerText === allQuestions[questionIndex].rightanswer) {
    questionIndex++;
    quizStart();

  } else {
    timeLeft = timeLeft - 10;
  }
}

startEl.addEventListener("click", function (event) {
  event.preventDefault();
  timer();
  displayanswers();
});

// on last question, once answered correcrtly or time runs out, display "your score is(which will be equal to the time left"
// alert to record initials

function gameOver() {
  console.log("game has ended")
  console.log(questionIndex);
  if (timeLeft <= 0) {
  // timerEl.textContent = 
  console.log("ran out of time");
  alert("Game Over");
  } else if (questionIndex == 5) {
    alert("Game Over");
    console.log("answered all questions");
    
  }
};
// highscores 
// display users initals and users score
// keep and record 

scores.addEventListener("click", function() {
    document.getElementById("gameStart").hidden = true;
    document.getElementById("startbutton").hidden = true;
    document.getElementById("questions").hidden = true;
    document.getElementById("answers").hidden = true;
    homeBtn.innerHTML = "Home";
});

function goHome() {
  window.location.reload();
}




// when time runs out or all answers are completed, your score is shown. 
// then ask to start highscores
