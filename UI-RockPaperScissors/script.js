const buttons = document.querySelectorAll("input");
console.log(buttons);

let compWin = 0;
let playerWin = 0;

const container = document.querySelector("body");
const scoreBoard = document.createElement("div");
scoreBoard.style.width = "500px";
scoreBoard.style.height = "135px";
scoreBoard.style.alignSelf = "center";
scoreBoard.style.borderColor = "#fff";
scoreBoard.style.borderStyle = "dotted";
scoreBoard.style.borderWidth = "10px";
scoreBoard.style.position = "relative"
scoreBoard.style.top = "200px";
scoreBoard.style.textAlign = "center";
scoreBoard.style.padding = "1px";
scoreBoard.style.display = "flex";
scoreBoard.style.flexDirection= "column";
const label = document.createElement("h2");
label.textContent = "Score";
label.style.textDecorationLine = "underline";
label.style.textAlign = "center";
label.style.position = "relative";
label.style.bottom = "30px";
const playerScore = document.createElement("span");
const playerNum = document.createElement("span");
playerNum.textContent = 0;
playerNum.style.textAlign = "left";
playerNum.style.position = "relative";
playerNum.style.bottom = "40px";
playerNum.style.left = "30px";
playerScore.textContent = "Player: ";
playerScore.style.textAlign = "left"
playerScore.style.position = "relative";
playerScore.style.bottom = "50px";
playerScore.style.textDecoration = "underline";
const computerScore = document.createElement("span");
const computerNum = document.createElement("span");
computerNum.textContent = 0;
computerNum.style.textAlign = "right";
computerNum.style.position = "relative";
computerNum.style.bottom = "99px";
computerNum.style.right = "50px";
computerScore.style.textAlign = "right";
computerScore.textContent = "Computer: ";
computerScore.style.position = "relative";
computerScore.style.bottom  = "110px";
computerScore.style.textDecoration = "underline";
scoreBoard.appendChild(label);
scoreBoard.appendChild(playerScore);
scoreBoard.appendChild(playerNum);
scoreBoard.appendChild(computerScore);
scoreBoard.appendChild(computerNum);
container.appendChild(scoreBoard);


function incrP(){
    playerWin = playerNum.textContent;
    playerWin++
    playerNum.textContent = playerWin;
}

function incrC(){
    compWin = computerNum.textContent;
    compWin++;
    computerNum.textContent = compWin;
}

function checkWin(){
    if(compWin > playerWin){
        return "You lost the game!";
    }else if(playerWin > compWin){
        return "You won the game!";
    }else if(playerWin == compWin){
        return "The game has no winner!";
    }
}

function start(){
    buttons.forEach((input) =>{
        input.addEventListener("click", playRound);
    })
}

function game(){
    
    console.log(document.getElementById("round-num").value);
    // for(let i = 0; i < 5; i++){
    //     document.getElementById("round-num").value = roundNum++;
    //     start();
    // }
}

function computerPlay(){
    let options = ["rock", "paper", "scissors"];
    let choice = parseInt(Math.random()*3);
    return options[choice];
}  

function playRound(){
    playerSelection = this;
    let computerSelection = computerPlay();
    switch(playerSelection){
        case document.querySelector("#rock"):
            if(computerSelection == "rock"){
                console.log("No Winner!")
                return "No Winner!";
            }else if(computerSelection == "paper"){
                incrC();
                console.log("You lose. Paper beats rock")
                return "You Lose! Paper beats Rock"; 
            }else if(computerSelection == "scissors"){
                incrP();
                console.log("you win rock beats paper")
                return "You Win! Rock beats Scissors";
            }
            break;
        case document.querySelector("#paper"):
            if(computerSelection == "paper"){
                console.log("No Winner!")
                return "No Winner!";
            }else if(computerSelection == "rock"){
                incrP();
                console.log("you win paper beats rock")
                return "You Win! Paper beats Rock";
            }else if(computerSelection == "scissors"){
                incrC();
                console.log("you lose scissors beats paper")
                return "You Lose! Scissors beats Paper";
            }
            break;
        case document.querySelector("#scissors"): 
            if(computerSelection == "scissors"){
                console.log("No Winner!")
                return "No Winner!";
            }else if(computerSelection == "paper"){
                incrP();
                console.log("you win scissors beats paper")
                return "You Win! Scissors beats Paper";
            }else if(computerSelection == "rock"){
                incrC();
                console.log("you lose rock beats scissors")
                return "You Lose! Rock beats Scissors";
            }
            break;
    }
}

game();
