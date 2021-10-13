let prompt = require("prompt-sync")();

const numberGuesser = function() {
  let num = Math.floor(Math.random() * 101);

  let answer;
  let i = 1;
  let inputs = [];

  let found = false;

  while (!found) {
    answer = Number(prompt("Guess a number: "));
    if (!Number.isInteger(answer)) {
      console.log("Not a number! Try again!");
    } else if (inputs.includes(answer)) {
      console.log("Already Guessed!");
    } else if (answer < num) {
      console.log("Too Low!");
      inputs.push(answer);
      i++;
    } else if (answer > num) {
      console.log("Too High!");
      inputs.push(answer);
      i++;
    } else {
      console.log("You got it! You took " + i + " attempts!");
      found = true;
    }
  }
};

numberGuesser();