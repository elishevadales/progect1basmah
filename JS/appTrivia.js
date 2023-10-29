let score = 0;

let counter = 0;

function init() {
  updateUi();
  createQuestion();
}


function createQuestion() {
  if (counter > trivia_ar.length - 1) {
    document.querySelector("#id_parent").innerHTML = "Game end, your score is:";
    document.querySelector("#id_parent").style.color = "rgb(221, 108, 127)";
    document.querySelector("#id_parent").classList = "text-center h1 bold";
    document.querySelector("#id_parent").style.color = "rgb(221, 108, 127)";
    document.querySelector(".score").classList.add = "h1"
    document.querySelector(".score").innerHTML = score > 0 ? `<p>${score}</p><p><i class="fa fa-smile-o" aria-hidden="true"></i><p/>` : `<p>${score}</p><p><i class="fa fa-frown-o" aria-hidden="true"></i></p>`;
    document.querySelector(".score").classList = score > 0 ? "text-center h2 bg-success" : "text-center h2 bg-danger";
    document.querySelector(".score").style.color = "white";


    return;
  }
  document.querySelector("#id_parent").innerHTML = "";
  let qItem = trivia_ar[counter]
  addSingleQuestion(qItem.name, qItem.img, qItem.question, qItem.answers, qItem.correctAnswer);
  counter++;
}

function successAnswer() {
  alert("you right");
  score += 10;
  createQuestion();
  updateUi();
}

function failAnswer() {
  score -= 5;
  createQuestion();
  alert("you worng");
  updateUi();
}

function updateUi() {
  document.querySelector("#id_score").innerHTML = score;
}

init();