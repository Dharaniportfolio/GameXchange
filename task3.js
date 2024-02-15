const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const resultdisplay = document.querySelector("#check");
const choices = ["rock", "paper", "scissor"];
const win = document.querySelector(".win");
const lose = document.querySelector(".loose");
const tie = document.querySelector(".tries");

let winvalue = 0;
let losevalue = 0;
let tievalue = 0;

function playgame(playerchoice) {
  let result = "";
  const comchoice = choices[Math.floor(Math.random() * 3)];
  console.log(comchoice);

  if (playerchoice === comchoice) {
    result = "It is Tie";
    tievalue += 1
  } else {
    switch (playerchoice) {
      case "rock":
        result = comchoice === "scissor" ? "You win" : "You Lose";
        break;
      case "paper":
        result = comchoice === "rock" ? "You win" : "You Lose";
        break;
      case "scissor":
        result = comchoice === "paper" ? "You win" : "You Lose";

        break;
    }
    if (result === "You win")
     winvalue += 1;
   else if(result === "You Lose")
    losevalue += 1;
  
  }
  player.textContent = `player:${playerchoice}`;
  computer.textContent = `computer:${comchoice}`;
  resultdisplay.textContent = result;
  win.textContent = `Wins: ${winvalue}`;
  lose.textContent = `loses: ${losevalue}`;
  tie.textContent = `Tie: ${tievalue}`;
}

function again() {
  win.textContent = "Win: 0";
  lose.textContent = "Loses: 0";
  tie.textContent = "Tie: 0";
  winvalue = 0;
  losevalue = 0;
  tievalue = 0;
}
