'use strict';

const number = Math.trunc(Math.random()*20) + 1;
console.log(document.querySelector('.number').textContent = number);
let score = 20;

document.querySelector('.check').addEventListener('click', () => {
  const newNumber = Number(document.querySelector('.guess').value);
  console.log(newNumber);

  if (!newNumber) {
    document.querySelector('.message').textContent = 'no number!';
  } else if (newNumber === number) {
    document.querySelector('.message').textContent = 'You win!';
    document.querySelector('body').style.backgroundColor = '#EDD83D';
    document.querySelector('.number').style.width = '30rem';
  } else if (newNumber > number) {
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
    }
  }
})
