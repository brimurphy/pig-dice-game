'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const scoreEl0 = document.querySelector('#score--0');
const scoreEl1 = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

// Starting condition
scoreEl0.textContent = 0;
scoreEl1.textContent = 0;
diceEl.classList.add(`hidden`);

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // Generate random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // Display dice number
  diceEl.classList.remove(`hidden`);
  diceEl.src = `dice-${dice}.png`;
  console.log(dice);
  // Check if no.1 rolled
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    // Update later
    // current0El.textContent = currentScore;
  } else {
    // if true switch player
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
