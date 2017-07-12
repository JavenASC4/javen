var playerChoice = "Rock";

var compChoices = ["Rock", "Paper", "Scissors"];
var compChoice = compChoices[Math.floor(Math.random)*3];
//Tie
if (compChoice == playerChoice){
    console.log("It's a tie");
}
//Computer chose Paper and Player chose Rock
else if (compChoice == "Paper" && playerChoice == "Rock"){
    console.log("You Lose");
}
//Computer chose Scissors and Player chose Rock
else if (compChoice == "Scissors" && playerChoice == "Paper"){
    console.log("You Lose");
}
//Computer chose Rock and Player chose Siccors 
else if (compChoice == "Rock" && playerChoice == "Scissors"){
    console.log("You Lose");
}

//Computer chose Rock and Player chose Paper 
else if (compChoice == "Rock" && playerChoice == "Paper"){
    console.log("You Win");
}

//Computer chose Paper and Player chose Siccors 
else if (compChoice == "Paper" && playerChoice == "Scissors"){
    console.log("You Win");
}

//Computer chose Scissors and Player chose Rocl 
else if (compChoice == "Scissors" && playerChoice == "Rock"){
    console.log("You Lose");
}
