'use strict';

/*Element selector*/
//Players score
const player1Score = document.getElementById('score--0');
const player2Score = document.getElementById('score--1');

//Current score
const currentScore1 = document.getElementById('current--0');
const currentScore2 = document.getElementById('current--1');

//Current player
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

//Buttons
const newGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const holdScore = document.querySelector('.btn--hold');

//Dice
const diceElement = document.querySelector('.dice');

//Init
let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];
diceElement.classList.add('hidden');

/*Roll dice functionality*/
rollDice.addEventListener('click', function () {
	const randomRoll = Math.trunc(Math.random() * 6) + 1;
	diceElement.classList.remove('hidden');
	diceElement.src = `dice-${randomRoll}.png`;

	if (randomRoll != 1) {
		currentScore += randomRoll;
		setScore(activePlayer, currentScore);
	} else {
		currentScore = 0;
		setScore(activePlayer, currentScore);
		activePlayer = activePlayer === 0 ? 1 : 0; //Switching active player
	}
});

function setScore(active, currScore) {
	document.getElementById(`current--${active}`).textContent = currentScore;
}
