var playing = false;
var timeremain;
var correctAns;
var score;
let start = document.querySelector("#start");
let six = document.querySelector(".six");
let timer = document.querySelector(".timer");
let gameOver = document.querySelector(".game-over");
let five = document.querySelector(".five");
let second = document.querySelector(".second");
five.onclick = function () {
  if (playing == true) {
    location.reload();
  } else {
    playing = true;
    score = 0;
    document.querySelector("#score-val").innerHTML = score;
    start.innerHTML = "Reset Game";
    six.style.display = "block";
    timeremain = 60;
    ShowCountdown();
    ShowQA();
  }
};
for (i = 1; i < 5; i++) {
  document.getElementById("box" + i).onclick = function () {
    if (playing == true) {
      if (this.innerHTML == correctAns) {
        score++;
        document.getElementById("score-val").innerHTML = score;
        document.getElementById("correct-try").innerHTML = "Correct";
        document.getElementById("correct-try").style.backgroundColor =
          "#32CD32";
        document.getElementById("correct-try").style.display = "block";

        setTimeout(() => {
          document.getElementById("correct-try").style.display = "none";
        }, 1000);
        ShowQA();
      } else {
        document.getElementById("correct-try").innerHTML = "Try-Again";
        document.getElementById("correct-try").style.display = "block";
        document.getElementById("correct-try").style.backgroundColor = "red";
        setTimeout(() => {
          document.getElementById("correct-try").style.display = "none";
        }, 1000);
      }
    }
  };
}
function ShowCountdown() {
  time = setInterval(function () {
    timeremain -= 1;
    timer.innerHTML = timeremain;
    if (timeremain == 0) {
      stopcountdown();
      gameOver.style.visibility = "visible";
      gameOver.innerHTML =
        "<p>GAME OVER!</p><p>YOUR SCORE IS " + score + "</p>";
    }
  }, 1000);
}

function stopcountdown() {
  clearInterval(time);
}
function ShowQA() {
  let x = Math.floor(Math.random() * 10) + 1;
  let y = Math.floor(Math.random() * 10) + 1;
  second.innerHTML = x + "x" + y;
  correctAns = x * y;
  let correctposition = Math.floor(Math.random() * 4) + 1;
  let box = document.querySelectorAll(".box");
  console.log(correctposition);
  document.getElementById("box" + correctposition).innerHTML = correctAns;
  var answer = [correctAns];
  // for wrong answer
  for (i = 1; i < 5; i++) {
    if (i != correctposition) {
      let wrongAns;
      do {
        wrongAns =
          (Math.floor(Math.random() * 10) + 1) *
          (Math.floor(Math.random() * 10) + 1);
      } while (answer.indexOf(wrongAns) > -1);
      document.getElementById("box" + i).innerHTML = wrongAns;
      answer.push(wrongAns);
    }
  }
}
