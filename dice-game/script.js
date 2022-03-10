const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0El.innerText = 0;
score1El.innerText = 0;
diceEl.classList.add('hidden');
let currentScore = 0;

btnRoll.addEventListener('click', () => {
  diceEl.classList.remove('hidden');

  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    current0El.innerText = currentScore;
  }
})
