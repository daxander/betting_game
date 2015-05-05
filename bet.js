var bank = 100;
$(document).ready(function() {
  document.getElementById("bank").innerHTML = "Current Bank: $" + bank; 
});

function run(){

  var wager = prompt("What is your wager between $5-$10?");
  bank -= wager
  $(document).ready(function() {
  document.getElementById("bank").innerHTML = "Current Bank: $" + bank;
  });
  var guess = prompt("Guess a number between 1 and 10");
  var random = Math.floor(Math.random()*11)
  var result = Math.abs(guess - random)

  $(document).ready(function() {
  document.getElementById("guess").innerHTML = "Your Guess: " + guess;
  });
  $(document).ready(function() {
  document.getElementById("computer_guess").innerHTML = "Computer Guess: " + random; 
  });

  switch(result) {
    case 0:
    bank = bank + (wager * 2);
    alert("You won $" + (wager * 2));
    break;
    case 1:
    alert("You were off by 1 and broke even");
    break;
    default:
    alert("You lose $" + wager);
    if (bank <= 0) {
      bank = "You Lose";
    }
    break;
  };

  $(document).ready(function() {
    document.getElementById("bank").innerHTML = "Current Bank: $" + bank;
  });

};


