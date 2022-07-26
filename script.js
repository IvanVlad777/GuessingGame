'use strict';

/* displayMessage(Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 15;

document.querySelector('.guess').value; */

//Secret number and score

let secretNumber = Math.trunc(Math.random() * 1000) + 1;
let score = 25;
let highscore = 0;
//functions

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Click event

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No Number!');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess != secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too High!' : 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost, try again!');
      document.querySelector('.score').textContent = 0;
    }
  }
  /*   } else if (guess > secretNumber) {
    if (score > 1) {
      displayMessage(Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage(You lost, try again!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      displayMessage(Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage(You lost, try again!';
      document.querySelector('.score').textContent = 0;
    }
  } */
});
// Reset game
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 1000) + 1;
  score = 25;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
