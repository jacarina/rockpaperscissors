let items = ["rock", "Paper", "Scissors"];

let rock = "rock";
let paper = "paper";
let scissors = "scissors";

let win = 0;
let lose = 0;

let currentScore;

let computerPlay = () => items[Math.floor(Math.random() * items.length)];

let playRound = (playerSelection, computerSelection) => {
  //takes player input and uses computerPlay as computerSelection
  let p = playerSelection.toLowerCase();
  let c = computerSelection.toLowerCase();

  let roundDocument = document.getElementById("round-status"); // change the round winner text
  let scoreDocument = document.getElementById("current-score"); // change the score text

  // compare, rock > scissors
  if (win < 5 && lose < 5) {
    if (p === rock && c === scissors) {
      ++win;
      currentScore = win + "-" + lose; // note, for some reason defining current score like this outside the function returns 0 - 0 instead of 1 - 0 in the first round. not sure why.
      roundDocument.innerHTML = "user wins. rock beats scissors";
      scoreDocument.innerHTML = currentScore;
      scoreCheck(win, lose);
    } else if (p === rock && c === paper) {
      ++lose;
      currentScore = win + "-" + lose;
      roundDocument.innerHTML = "computer wins. paper beats rock";
      scoreDocument.innerHTML = currentScore;
      scoreCheck(win, lose);
    }

    //compare, paper > rock

    if (p == paper && c == rock) {
      ++win;
      currentScore = win + "-" + lose;
      roundDocument.innerHTML = "user wins. paper beats rock";
      scoreDocument.innerHTML = currentScore;
      scoreCheck(win, lose);
    } else if (p == paper && c == scissors) {
      ++lose;
      currentScore = win + "-" + lose;
      roundDocument.innerHTML = "computer wins. scissors beats paper";
      scoreDocument.innerHTML = currentScore;
      scoreCheck(win, lose);
    }

    //compare, scissors > paper

    if (p === scissors && c === paper) {
      ++win;
      currentScore = win + "-" + lose;
      roundDocument.innerHTML = "user wins. scissors beats paper";
      scoreDocument.innerHTML = currentScore;
      scoreCheck(win, lose);
    } else if (p === scissors && c === rock) {
      ++lose;
      currentScore = win + "-" + lose;
      roundDocument.innerHTML = "computer wins. rock beats scissors";
      scoreDocument.innerHTML = currentScore;
      scoreCheck(win, lose);
    }
  } else return none;

  if (p === c) {
    //draw
    roundDocument.innerHTML = "tie game.";
  }
};

// takes winner points and lose points, if either has reached 5 show conclusion information

let scoreCheck = (win, lose) => {
  let loopElement = document.getElementById("looper");
  let roundDocument = document.getElementById("round-status");
  if (win === 5) {
    roundDocument.innerHTML = "user emerges bright. play again?";
    loopElement.style.display = "inline";
  } else if (lose === 5) {
    roundDocument.innerHTML = "computer emerges bright. play again?";
    loopElement.style.display = "inline";
  }
};

// resets the score and round information

let reset = () => {
  let scoreDocument = document.getElementById("current-score");
  let roundDocument = document.getElementById("round-status");
  let loopElement = document.getElementById("looper");
  lose = lose * 0;
  win = win * 0;
  scoreDocument.innerHTML = win + "-" + lose;
  roundDocument.innerHTML = "choose again.";
  loopElement.style.display = "none";
};

// idk some useless garbage ----------

// window.onload = function () {
//   if (win === 5 || lose === 5) {
//     document.getElementById("looper").style.display = "block";
//   } else {
//     document.getElementById("looper").style.display = "none";
//   }
// };

// if playerinput is absolutely equal to something and c is as well
//   if (p == 'rock' && c == 'scissors') {
//     win = win + 1;
//     document.getElementById("score").innerHTML =
//       'You Win! Rock beats Scissors!';
//   } else if (p == 'paper' && c == 'rock') {
//     win = win + 1;
//     document.getElementById("score").innerHTML = "You Win! Paper beats Rock!";
//   } else if (p == "scissors" && c == "paper") {
//     win = win + 1;
//     document.getElementById("score").innerHTML =
//       "You Win! Scissors beats Paper!";
//   } else if (p == c) {
//     document.getElementById("score").innerHTML = "It's a draw ._.";
//   } else lose = lose + 1;
//   document.getElementById("score").innerHTML =
//     "You lose! " + computerSelection + " beats " + playerSelection + ".";
// };

// functions that have nothing to do with game logic

// // grab info from pictures
// const el = document.getElementById("rock");
// el.addEventListener("click", modifyText, false);

//let result = window.prompt("Rock, paper, scissors says shoot!"); // this takes the input from the player

/*let game = (userinput) => {
  // a full game of 5 rounds, takes result as the input
  for (let i = 0; i < 5; i++) {
    // loops 5 times, 5 rounds
    let x = playRound(result, computerPlay()); // x stores the string result from playRound
    console.log(x); // print X in the console to let player know they w/l
  }

  if (win > lose) {
    return "You won!";
  } else if (win < lose) {
    return "You lost!";
  } else return "It's a draw!";
};*/

//console.log(game(result));

// const playerSelection = "rock";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));
