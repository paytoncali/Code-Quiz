// come up with 5 questions and 4 answers for each question
// create timer

var timerEl = document.querySelector(".time");
var startEl = document.querySelector("#startbutton");
var timeLeft = 50;
var rightResults = "";
var wrongResults = "";
// isHidden = HTMLElement.hidden;
// HTMLElement.hidden = true | false;

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

document.getElementById("button1") && document.getElementById("button2") && document.getElementById("button3") && document.getElementById("button4")
  .addEventListener("click", function() {
    if (button1 === true) {
      rightResults.textContent = "good job";
    }
    else {
      wrongResults.textContent = "wrong";
    }

});








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
