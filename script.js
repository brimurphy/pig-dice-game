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

let scores, currentScore, activePlayer, playing;

// Starting condition
function init() {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  scoreEl0.textContent = 0;
  scoreEl1.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add(`hidden`);

  player0El.classList.remove(`player--winner`);
  player1El.classList.remove(`player--winner`);
  player0El.classList.add(`player--active`);
  player1El.classList.remove(`player--active`);
}

init();

function switchPlayer() {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // Generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // Display dice number
    diceEl.classList.remove(`hidden`);
    diceEl.src = `dice-${dice}.png`;
    // Check if no.1 rolled
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // Update later
      // current0El.textContent = currentScore;
    } else {
      // if true switch player
      switchPlayer();
    }
  }
});

// Holding score
btnHold.addEventListener('click', function () {
  if (playing) {
    // Add current score to players total score
    // scores[1] = scores[1] + currentScore
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // Check if players score is >=100
    if (scores[activePlayer] >= 10) {
      // Finish game
      playing = false;
      diceEl.classList.add(`hidden`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove(`player--active`);
    }
    // Switch player
  } else switchPlayer();
});

// Restart/New game
btnNew.addEventListener('click', init);
