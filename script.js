let rock = document.querySelector('.selections button');
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let computerScoreSpan = document.getElementById("computerscore");
let yourScoreSpan = document.getElementById("yourscore");
let computerwin =0;
let youwin =0;
let result = document.getElementById("result");
let computersChoice = document.getElementById("computersChoice");
let computers = document.getElementById("comput");
let users = document.getElementById("user");


var myStringArray = ["Rock","paper","scissors"];
var arrayLength = myStringArray.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(myStringArray[i]);

     SELECTIONS = [
      {
        name: 'rock',
        emoji: '✊',
        beats: 'scissors'
      },
      {
        name: 'paper',
        emoji: '✋',
        beats: 'rock'
      },
      {
        name: 'scissors',
        emoji: '✌',
        beats: 'paper'
      }
    ]
    


  
}
scissors.addEventListener("click", () => {
  let computerChoice = Math.floor((Math.random())*10 +1);
  
  if (computerChoice > 3 && computerChoice <= 6) {
   computerChoice = "rock";
   computers = "✊";
  } else if (computerChoice >= 7) {
    computerChoice = "paper";
    computers = "✋";
  } else {
    computerChoice = "scissors";
    computers = "✌"; 
  }
  userChoice = "scissors";
  users = "✌";
  computer.innerHTML = "Computer chose: " + computerChoice.toUpperCase();
  comput.innerHTML = computers.toUpperCase();
  user.innerHTML = users.toUpperCase();
  compare(computerChoice, userChoice);
})
  paper.addEventListener("click", () => {
    let computerChoice = Math.floor(Math.random() *10 + 1 )
    
    
    
    if (computerChoice > 3 && computerChoice <= 6) {  
     computerChoice = "scissors";
     computers = "✌"; 
    } else if (computerChoice >= 7) {
      computerChoice = "rock";
      computers = "✊";
     
    } else {
      computerChoice = "paper";
      computers = "✋";
    }
    userChoice = "paper";
    users = "✋";
    computer.innerHTML = "Computer chose: " + computerChoice.toUpperCase();
    comput.innerHTML = computers.toUpperCase();
    user.innerHTML = users.toUpperCase();

    compare(computerChoice, userChoice);
    
  })
rock.addEventListener("click", () => {
    let computerChoice = Math.floor((Math.random())*10 +1);
 
    if (computerChoice > 3 && computerChoice <= 6) {
    computerChoice = "scissors";
    computers = "✌"; 

    } else if (computerChoice >= 7) {
      computerChoice = "paper";
      computers = "✋";
    } else {
      computerChoice = "rock";
      computers = "✊";
    }
    userChoice = "rock";
    users = "✊";
    computer.innerHTML = "Computer chose: " + computerChoice.toUpperCase();
    comput.innerHTML = computers.toUpperCase();
    user.innerHTML = users.toUpperCase();

    compare(computerChoice, userChoice);
    
  })


  let compare = function (choice1, choice2) {
    if (choice1 === choice2) {
      resulting.innerHTML = "It's a tie! Try again."
    } else if (choice1 === "rock") {
       if (choice2 === "scissors") {
        resulting.innerHTML = "Computer Wins!";
          computerwin++;
          computerScoreSpan.innerHTML = computerwin;
       } else {
        resulting.innerHTML = "Congratulations You Win!";
          youwin++;
          yourScoreSpan.innerHTML = youwin;
         
       }
    } else if (choice1 === "paper") {
       if (choice2 === "rock") {
        resulting.innerHTML = "Computer Wins!";
          computerwin++;
          computerScoreSpan.innerHTML = computerwin;
       } else {
        resulting.innerHTML = "Congratulations You Win!";
          youwin++;
          yourScoreSpan.innerHTML = youwin;
          
       }
    } else if (choice1 === "scissors"){
      if(choice2 === "rock") {
        resulting.innerHTML = "Congratulations You Win!";
          youwin++;
          yourScoreSpan.innerHTML = youwin;
       } else {
        resulting.innerHTML = "Computer Wins!";
          computerwin++;
          computerScoreSpan.innerHTML = computerwin;
       }
    }
  }
 

  document.getElementById("playagain").addEventListener('click', function () {
    window.location.reload();
  });
  

  