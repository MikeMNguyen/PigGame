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

//Init variables
let playing, currentScore, activePlayer, scores;

/**
 * Initialize game
 */
const init = function () {
	playing = true;
	currentScore = 0;
	activePlayer = 0;
	scores = [0, 0];

	player1Score.textContent = 0;
	player2Score.textContent = 0;
	player1.classList.remove('player--winner');
	player1.classList.add('player--active');
	player2.classList.remove('player--winner');
	player2.classList.remove('player--active');
	diceElement.classList.add('hidden');
};

/**
 * Set current score
 * @param {*} active
 * @param {*} currScore
 */
const setScore = function (active, currScore) {
	document.getElementById(`current--${active}`).textContent = currScore;
};

/**
 * Switch active player
 */
const swithPlayer = function () {
	currentScore = 0;
	setScore(activePlayer, currentScore);
	activePlayer = activePlayer === 0 ? 1 : 0;
	player1.classList.toggle('player--active');
	player2.classList.toggle('player--active');
};

//Load game first time
init();

/*Roll dice functionality*/
rollDice.addEventListener('click', function () {
	if (playing) {
		const randomRoll = Math.trunc(Math.random() * 6) + 1;
		diceElement.classList.remove('hidden');
		diceElement.src = `dice-${randomRoll}.png`;

		if (randomRoll != 1) {
			currentScore += randomRoll;
			setScore(activePlayer, currentScore);
		} else {
			swithPlayer();
		}
	}
});

/*Hold score functionality*/
holdScore.addEventListener('click', function () {
	if (playing) {
		scores[activePlayer] += currentScore;
		document.getElementById(`score--${activePlayer}`).textContent =
			scores[activePlayer];

		if (scores[activePlayer] >= 100) {
			document
				.querySelector(`.player--${activePlayer}`)
				.classList.add('player--winner');
			document
				.querySelector(`.player--${activePlayer}`)
				.classList.remove('player--active');
			playing = false;
		} else {
			swithPlayer();
		}
	}
});

/*Handle new game functionality */
newGame.addEventListener('click', init);
