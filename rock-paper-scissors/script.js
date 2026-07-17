let choice = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;

for(let round=1; round<=5; round++){
  let userChoice = prompt("rock, paper, or scissors?").toLowerCase().trim();
  // normalize input so "Rock " and "rock" are treated the same
 
  if (choice.includes(userChoice)) {
    console.log("user choice: " + userChoice);
 
    let randomIndex = Math.floor(Math.random() * choice.length);
    let computerChoice = choice[randomIndex]; 
    // pick a random move for the computer
    console.log("computer choice: " + computerChoice);

    let result;
    if(userChoice==computerChoice){
      result="It's a tie!";
    }else if(userChoice==choice[0] && computerChoice==choice[2]){
      result="You win this round!"; // rock beats scissors
    }else if(userChoice==choice[1] && computerChoice==choice[0]){
      result="You win this round!"; // paper beats rock
    }else if(userChoice==choice[2] && computerChoice==choice[1]){
      result="You win this round!"; // scissors beats paper
    }else{
      result="You lose this round!";
    }
    console.log(result);

    if(result=="It's a tie!"){
      // no score change on a tie
    }else if(result=="You win this round!"){
      userScore++;
    }else{
      computerScore++;
    }
    console.log("User score: " + userScore);
    console.log("Computer score: " + computerScore);
  }else{
    round--;
    console.log(`${userChoice} is an invalid choice! Please type rock, paper, or scissors.`); 
    // invalid input — skip scoring & counting this round
  }

}

if(userScore == computerScore){
  console.log("The match is tie.")
}
else if(userScore > computerScore){
  console.log("You win the match.")
}else{
  console.log("You lost the match.")
}

