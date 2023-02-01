var timerEl = document.getElementById('countdown');
var highscoreEl = document.getElementById('highscores');
var startButton = document.querySelector(".start");
var loadEl = document.querySelector(".load");
var rulesEl = document.querySelector(".rules");
var questions = document.querySelector(".question-class");
var answers = document.querySelector(".answer-class");
var buttona1 = document.getElementById('a1');
var buttona2 = document.getElementById('a2');
var buttona3 = document.getElementById('a3');
var buttona4 = document.getElementById('a4');

var questionsArray = ["q1", "q2", "q3", "q4","q5", "q6", "q7", "q8", "q9", "q10"];
var answersArray = [["q1a1", "q1a2", "q1a3", "q1a4"], ["q2a1", "q2a2", "q2a3", "q2a4"], ["q3a1", "q3a2", "q3a3", "q3a4"], ["q4a1", "q4a2", "q4a3", "q4a4"]];
var correctAnswersArray = [1, 3, 4, 3, 2, 4, 1, 2, 3, 1];
var questionCount = 0;

function openPage() {
    buttona1.style.visibility = "hidden";
    buttona2.style.visibility = "hidden";
    buttona3.style.visibility = "hidden";
    buttona4.style.visibility = "hidden";
    rulesEl.textContent = "Welcome to the Coding Quiz! This is a method to test your knowledge and help evaulate how much you have leared over the course of your Bootcamp. It is very similar to some of the challenges you might face in a future job interview, so remember the format for when you enter the workforce. Hit 'start' to begin.";
}

function buttona1Clicked() {
    nextQuestion(1);
}

function buttona2Clicked() {
    nextQuestion(2);
}

function buttona3Clicked() {
    nextQuestion(3);
}

function buttona4Clicked() {
    nextQuestion(4);
}

function nextQuestion(answerIndex) {



    questions.textContent = questionsArray[questionCount];
    buttona1.innerText = answersArray[questionCount][0];
    buttona2.innerText = answersArray[questionCount][1];
    buttona3.innerText = answersArray[questionCount][2];
    buttona4.innerText = answersArray[questionCount][3];
    
    var correctAns = correctAnswersArray[questionCount - 1];
    if (answerIndex == correctAns) {
        window.alert("Correct");
    } else {
        window.alert("Wrong :(");
        window.alert("answerIndex:" + answerIndex);
        window.alert("correctAnswer:" + correctAns);
    }
    questionCount++;
}

function startGame() {
    loadEl.style.visibility = "hidden";

    nextQuestion();

    buttona1.style.visibility = "visible";
    buttona2.style.visibility = "visible";
    buttona3.style.visibility = "visible";
    buttona4.style.visibility = "visible";

    var timeLeft = 60;
  
    var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
        displayMessage();
      }
    }, 1000);
  }

  startButton.addEventListener("click", startGame);
  buttona1.addEventListener("click", buttona1Clicked);
  buttona2.addEventListener("click", buttona2Clicked);
  buttona3.addEventListener("click", buttona3Clicked);
  buttona4.addEventListener("click", buttona4Clicked);

  openPage();