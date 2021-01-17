// come up with 5 questions and 4 answers for each question
// create timer

var timerEl = document.querySelector(".time");
var startEl = document.querySelector("#startbutton");
var q1 = document.querySelector("h4");
var timeLeft = 50;
// var button1 = document.querySelector(".button1");
// var button2 = document.querySelector(".button2");
// var button3 = document.querySelector(".button3");
// var button4 = document.querySelector(".button4");

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
    document.getElementById("Q1").hidden = false;
},
false);

// button1.addEventListener("click", function() {
//     if (button1 = true) {
//       questions.textContent = "good job";
//       document.getElementById("Q1").hidden = true;
//       document.getElementById("Q2").hidden = false;
//     }
// });

// button2.addEventListener("click", function() {
//     if (button2 = true) {
//       questions.textContent = "oops! not it.";
//       timeLeft = timeLeft - 10;
//     }
// });

// button3.addEventListener("click", function() {
//     if (button3 = true) {
//       questions.textContent = "oops! not it.";
//       timeLeft = timeLeft - 10;
//   } 
// });

// button4.addEventListener("click", function() {
//     if (button4 = true) {
//       questions.textContent = "oops! not it.";
//       timeLeft = timeLeft - 10;
//     }
// });







startEl.addEventListener("click", function (event) {
  event.preventDefault();
  timer();
  console.log(startEl)
});

// timer();
// Attach event listener to increment button element


// when start is clicked, first question and first set of 4 answers populate and timer starts
// when answered correctly, it moves on to next question, when incorrectly takes 10 seconds from timer
// when time runs out or all answers are completed, your score is shown. 
// then ask to start highscores


// Q: What is used to create a string?
// A: ""
// A: {}
// A: []
// A: ()
// Q: What is used to create an array?
// A: []
// A: {}
// A: ()
// A: ""
// Q: How do you declare a variable?
// A: Var
// A: vari
// A: whatever you would like
// A: varb
// Q: How do you comment something out in Javascript?
// A: // comment
// A: <!-- <comment> -->
// A: /* comment */
// A: !!
// Q: What method is used to randomly pick a number in Javascript?
// A: Math.random();
// A: math.Random
// A: Math.random
// A: math.Random();
