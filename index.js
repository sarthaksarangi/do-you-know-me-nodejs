var readlineSync = require("readline-sync");
var score = 0;
//maximum score
var maxscore = [
  {
    name: "Sarthak",
    score: 5,
  },
  {
    name: "Rohan",
    score: 3,
  },
];
//array of questions
var questions = [
  {
    question: "Where do I live ? ",
    answer: "bhubaneswar",
  },
  {
    question: "What is my favourite color ?",
    answer: "black",
  },
  {
    question: "What is my favourite game ?",
    answer: "call of duty",
  },
  {
    question: "What is my zodiac sign? ",
    answer: "tarus",
  },
  {
    question: "What is my pets name? ",
    answer: "jimmy",
  },
];
function userwelcome() {
  var username = readlineSync.question("Hello! What is your name ? ");
  console.log("Welcome! " + username + " to do you know Sarthak");
}
function play(question, answer) {
  var enteredAnswer = readlineSync.question(question);
  if (enteredAnswer.toLowerCase() == answer) {
    console.log("Correct Answer!");
    score = score + 1;
  } else {
    console.log("Wrong Answer!");
  }
  console.log("Currect score: ", score);
  console.log("-------------");
}
function game() {
  for (var i = 0; i < questions.length; i++) {
    var currQuestion = questions[i];
    play(currQuestion.question, currQuestion.answer);
  }
}
function showScores() {
  console.log("Yay your score is", score);
  console.log("Check out the highscores : ");
  maxscore.map((score) => console.log(score.name, " : ", score.score));
}
//userwelcome()
game();
showScores();
