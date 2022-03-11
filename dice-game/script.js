const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1')
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
let activePlayer = 0;
let scores = [0, 0];
let playing = true;

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).innerText = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  console.log(activePlayer,'switch player');
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

btnRoll.addEventListener('click', () => {
  if (playing) {
    diceEl.classList.remove('hidden');

    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).innerText = currentScore;
    } else {
      switchPlayer();
    }
  }
})

btnHold.addEventListener('click', () => {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).innerText = scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      playing = false;
    } else {
      switchPlayer();
    }
  }
})

btnNewGame.addEventListener('click', () => {
  currentScore = 0;
  scores = [0, 0];
  playing = true;
  diceEl.classList.add('hidden');
  score0El.innerText = 0;
  score1El.innerText = 0;
  current0El.innerText = 0;
  current1El.innerText = 0;
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
  player0El.classList.add('player--active');
  activePlayer = 0;
})
