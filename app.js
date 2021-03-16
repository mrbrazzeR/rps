let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_h1 = document.querySelector(".result > h1");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function convertToRPS(choice){
    if(choice=='r') return "Rock";
    if(choice=='p') return "Paper";
    if(choice=='s') return "Scissors";
}
function getComputerChoice(){
    const choices=['r','p','s'];
    const randomChoice=Math.floor(Math.random()*3);
    return choices[randomChoice];
}

function draw(user,computer){
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_h1.innerHTML=convertToRPS(user) + " equal "+convertToRPS(computer)+". Draw!";
}

function win(user,computer){
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_h1.innerHTML=convertToRPS(user)+"(user)" + " beat "+convertToRPS(computer)+" (comp). You win!";
}

function lose(user,computer){
    computerScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_h1.innerHTML=convertToRPS(computer) + " beat "+convertToRPS(user)+". Computer win!";
}
function game(userChoice){
    const computerChoice=getComputerChoice();
    switch(userChoice+computerChoice){
    case "rr":
    case "pp":
    case "ss":
       { draw(userChoice,computerChoice);
        console.log("draw");}
    break;
    case "rs":
    case "pr":
    case "sp":
        win(userChoice,computerChoice);
    break;
    default: lose(userChoice,computerChoice);
    }
}

function player(){
    rock_div.addEventListener("click",function(){
        game("r");
    });
    paper_div.addEventListener("click",function(){
        game("p");
    });
    scissors_div.addEventListener("click",function(){
        game("s");
    });
};

player();
