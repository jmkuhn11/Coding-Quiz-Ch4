var timerEl = document.getElementById('countdown');
var highscoreEl = document.getElementById('highscores');
var startButton = document.querySelector(".start");
var main = document.querySelector(".main");
var loadEl = document.querySelector(".load");
var rulesEl = document.querySelector(".rules");
var qna = document.querySelector(".qna");
var questions = document.querySelector(".question-class");
var answers = document.querySelector(".answer-class");
var rightOrWrong = document.querySelector(".answer-status");
var buttona1 = document.getElementById('a1');
var buttona2 = document.getElementById('a2');
var buttona3 = document.getElementById('a3');
var buttona4 = document.getElementById('a4');
var submitButton = document.getElementById('submit');

var timeInterval;
var timeLeft = 60;
var questionsArray = ["q1", "q2", "q3", "q4","q5", "q6", "q7", "q8", "q9", "q10", "q11"];
var answersArray = [["q1a1", "q1a2", "q1a3", "q1a4"], ["q2a1", "q2a2", "q2a3", "q2a4"], ["q3a1", "q3a2", "q3a3", "q3a4"], ["q4a1", "q4a2", "q4a3", "q4a4"], ["q5a1", "q5a2", "q5a3", "q5a4"], ["q6a1", "q6a2", "q6a3", "q6a4"], ["q7a1", "q7a2", "q7a3", "q7a4"], ["q8a1", "q8a2", "q8a3", "q8a4"], ["q9a1", "q9a2", "q9a3", "q9a4"], ["q10a1", "q10a2", "q10a3", "q10a4"], ["q11a1", "q11a2", "q11a3", "q11a4"]];
var correctAnswersArray = [1, 3, 4, 3, 2, 4, 4, 2, 3, 2];
var questionCount = 0;

var endContainer = document.querySelector(".end-container");
var scorePage = document.querySelector(".container");
var congrats = document.querySelector(".congrats-message");
var pointsEarned = document.querySelector(".points");
var input = document.getElementById('input-box');
var resetButton = document.getElementById('reset');
var leaderboard = document.querySelector('.leaderboard');
var points = 0;
var logResults = 0;

var pastAttempts = document.querySelector(".past-attempts");

function openPage() {

    loadEl.style.visibility = "visible";
    qna.style.visibility = "hidden";
    endContainer.style.visibility = "hidden";
    resetButton.style.visibility = "hidden";

    questionCount = 0;

    rulesEl.textContent = "Welcome to the Coding Quiz! This is a method to test your knowledge and help evaulate how much you have leared over the course of your Bootcamp. It is very similar to some of the challenges you might face in a future job interview, so remember the format for when you enter the workforce. For this assessment, you will have 1 minute to answer 10 questions. Each right answer will score a point, while each wrong answer will take some time off the clock. Hit 'start' to begin.";
}

function endPage() {
    submitButton.style.visibility = "visible";
    qna.style.visibility = "hidden";
    endContainer.style.visibility = "visible";

    congrats.textContent = "Congratulations! Please input your initials below to find out your score.";
    main.style.visibility = "hidden";
    clearInterval (timeInterval);
}

function logInput() {
    submitButton.style.visibility = "hidden";
    var initials = input.value;
    localStorage.setItem(logResults++, "<tr><td>" + initials + "</td><td>" + points + "/10</td></tr>");
    points = 0;
    resetButton.style.visibility = "visible";
    createLeaderboard();
}

function createLeaderboard() {
    var board = "</br></br><table border='2'><tr><td colspan='2'><b>RESULTS</b></td></tr>";
    for (let i = 0; i < logResults; i++) {
        board += localStorage.getItem(i) + "\n";
    }
    board += "</table>";
    leaderboard.innerHTML = board;
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
    if (questionCount == 0) {
        rightOrWrong.textContent = "Good luck!";
    } else if (answerIndex == correctAns) {
        rightOrWrong.textContent = "Correct!";
        points++;
    } else {
        rightOrWrong.textContent = "Wrong :(";
        timeLeft = timeLeft - 5;
    } 
    
    if (questionCount < questionsArray.length -1) {
        questionCount++;
    } else {
      endPage();
  }
}

function startGame() {
    loadEl.style.visibility = "hidden";

    nextQuestion();

    timeLeft = 60;
    timerEl.textContent = timeLeft + ' seconds remaining';

    qna.style.visibility = "visible";
  
    timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        main.style.visibility = "hidden";
        timerEl.textContent = 'Time is up!';
        endPage();
      }
    }, 1000);
  }

  startButton.addEventListener("click", startGame);
  buttona1.addEventListener("click", buttona1Clicked);
  buttona2.addEventListener("click", buttona2Clicked);
  buttona3.addEventListener("click", buttona3Clicked);
  buttona4.addEventListener("click", buttona4Clicked);
  submitButton.addEventListener("click", logInput);
  resetButton.addEventListener("click", openPage);


  openPage();