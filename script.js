var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var list = document.getElementById("optionlist");
var btn = document.getElementById("button");
var scoreCard = document.getElementById("scoreCard");
var quizBox = document.getElementById("questionBox");
var question = [
  {
    q: "Siapa nama pendiri Valve ?",
    options: ["Mark Zuckerberg", "Gabe Newell", "Elon Musk", "Nicholas Tesla"],
    answer: 2
  },

  {
    q: "Manakah game karya anak bangsa ?",
    options: ["Minecraft", "Amnesia", "Dreadout", "Man of Medan"],
    answer: 3
  },

  {
    q: "Tahun berapakah Playstation 2 di rilis ?",
    options: ["2000", "2002", "1998", "2005"],
    answer: 1
  },
  {
    q: "Apa nama game console pertama ?",
    options: ["Sega", "Odyssey", "Atari", "Xbox"],
    answer: 2
  },
  {
    q: "Pilihlah game dengan budget pembuatan terbesar ?",
    options: ["Tomb Raider", "GTA V", "Final Fantasy VII", "Destiny"],
    answer: 4
  }
];
var index = 0;
function dataload() {
  if (index <= question.length - 1) {
    quizBox.innerHTML = question[index].q;
    option1.innerHTML = question[index].options[0];
    option2.innerHTML = question[index].options[1];
    option3.innerHTML = question[index].options[2];
    option4.innerHTML = question[index].options[3];
    scoreCard.innerHTML = score;
  } else {
    quizBox.innerHTML = "Anda menyelesaikan quiz!";
    option1.style.display = "none";
    option2.style.display = "none";
    option3.style.display = "none";
    option4.style.display = "none";
    btn.style.display = "none";
  }
}
function nextquestion() {
  index++;
  dataload();
}
function noclick() {
  for (let i = 0; i < list.children.length; i++) {
    list.children[i].style.pointerEvents = "none";
  }
}
function clickok() {
  for (let i = 0; i < list.children.length; i++) {
    list.children[i].style.pointerEvents = "auto";
    list.children[i].className = "";
  }
}
var score = 0;
function check(element) {
  var id = element.id.split("");
  if (id[id.length - 1] == question[index].answer) {
    score++;
    element.className = "correct";
    element.innerHTML = "Benar!";
    scoreCard.innerHTML = score;
  } else {
    element.className = "wrong";
    element.innerHTML = "Salah!";
  }
}
function answerClick(element) {
  check(element);
  noclick();
}
function nextClick() {
  if (
    list.children[0].getAttribute("style") === null ||
    list.children[0].style.pointerEvents === "auto"
  ) {
    alert("Anda belum memilih");
  } else {
    nextquestion();
    clickok();
  }
}
