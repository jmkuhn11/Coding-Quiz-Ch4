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
var timeLeft = 120;
var questionsArray = ["Q1: What does HTML stand for?", "Q2: What does CSS stand for?", "Q3: If you needed to use a 'for' loop, which type of file would you put the code in?", "Q4: Which of these is similar to 'getElementbyID'?","Q5: If you needed to incorporate the use of clicking a button, you would use ____.", "Q6: If you needed to include CSS elements for all of these sections, which section should be listed first on your CSS Sheet?", "Q7: What is the order of events for committing work on your personal laptop to your GitHub repository?", "Q8: On Gitbash (or the Mac equivalent), what command helps you move up to the parent file?", "Q9: What Javascript method clears an interval?", "Q10: Who is the best coder in Boot Camp?", ""];
var answersArray = [["Hypertext Markup Language", "How the Mighty Live", "Hate that Ms. Lemon", "Handle the Milliliters"], ["Crazy Stupid Script", "Cool Stocking Stuffers", "Cascading Style Sheet", "Christmas Story: South Carolina"], ["HTML", "CSS", "READMe", "Javascript"], ["IdSelector", "getElementBySelector", "querySelector", "selectorSelector"], ["addClickButton", "addEventListener", "addKeyDownDetector", "addKeyUpDetector"], ["Body", "Header", "Nav", "Root"], ["git commit -> git push -> git add", "git push -> git add -> git commit", "git push -> git commit -> git add", "git add -> git commit -> git push"], ["//", "..", "///", "..."], ["stopInterval", "resetInterval", "clearInterval", "stopDropAndRoll"], ["Not this One", "Josh Kuhn", "Look Above for Reference", "Can you Read?"], ["", "", "", ""]];
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

function openPage() {

    loadEl.style.visibility = "visible";
    qna.style.visibility = "hidden";
    endContainer.style.visibility = "hidden";
    resetButton.style.visibility = "hidden";

    questionCount = 0;

    rulesEl.textContent = "Welcome to the Coding Quiz! This is a method to test your knowledge and help evaulate how much you have leared over the course of your Boot Camp. It is very similar to some of the challenges you might face in a future job interview, so remember the format for when you enter the workforce. For this assessment, you will have 2 minutes to answer 10 questions. Each right answer will score a point, while each wrong answer will take some time off the clock. Hit 'start' to begin.";
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
    var board = "</br></br><center><table border='2'><tr><td colspan='2'><center><b>RESULTS</b></center></td></tr>";
    for (let i = 0; i < logResults; i++) {
        board += localStorage.getItem(i) + "\n";
    }
    board += "</center></table>";
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
        timeLeft = timeLeft - 10;
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

    timeLeft = 120;
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