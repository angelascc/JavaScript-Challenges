'use strict';

let number = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highScore = 0;
console.log(number);

document.querySelector('.check').addEventListener('click', () => {
  const newNumber = Number(document.querySelector('.guess').value);
  console.log(newNumber);

  if (!newNumber) {
    document.querySelector('.message').textContent = 'no number!';
  } else if (newNumber === number) {
    document.querySelector('.message').textContent = 'You win!';
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#EDD83D';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (newNumber !== number) {
    if (score > 1) {
      document.querySelector('.message').textContent = newNumber > number ? 'too high!' : 'too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
})



/*
  else if (newNumber > number) {
    console.log(score, "score");
    if (score > 1) {
      document.querySelector('.message').textContent = 'too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (newNumber < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game!';
      document.querySelector('.score').textContent = 0;
    }
*/

/*
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and 'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input fields
4. Also restore the original background color (#222) and number width (15rem)
*/
 document.querySelector('.again').addEventListener('click', () => {
   score = 20;
   number = Math.trunc(Math.random() * 20) + 1;
   document.querySelector('.message').textContent = 'Start guessing...';
   document.querySelector('.number').textContent = '?';
   document.querySelector('.score').textContent = score;
   document.querySelector('.guess').value = '';
   document.querySelector('body').style.backgroundColor = '#222';
   document.querySelector('.number').style.width = '15rem';
 })
