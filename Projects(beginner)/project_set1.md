# Projects related to DOM

## Project link
https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html

Solution code:-

PROJECT 1(Colour changing)
```javascript

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});


```


PROJECT 2(BMI Calculator)
```javascript
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height${height}`;
  }
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight${weight}`;
  }
  else{
    const bmi = (weight/(height*height)/10000).toFixed(2)
    results.innerHTML=`<span>${bmi}</span>`
  }
});
```

PROJECT 3(Clock)
```javascript
const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  //console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

PROJECT 4 (Guess the right number)

```javascript
let randomNum = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const Slots = document.querySelector('.guesses');
const LastSlots = document.querySelector('.lastResult');
const LowerHigh = document.querySelector('.lowOrHi');
const StartOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playGame = true;
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // check whether the guess is between 1-100 neither - not >100
  if (isNaN(guess)) {
    alert('please enter a valid number');
  } else if (guess < 1) {
    alert('please enter a valid number more than 1');
  } else if (guess > 100) {
    alert('please enter a valid number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMsg(`game Over. The number was ${randomNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  // guess == randomNum then stop
  if (guess === randomNum) {
    displayMsg(`You are rightttt hell yeahh!!!`);
  } else if (guess < randomNum) {
    displayMsg(`Ddaengg!! Number is a bit low! you got it girll! `);
  } else if (guess > randomNum) {
    displayMsg(`Ddaengg!!Number is a too high ! Try again girll girll! `);
  }
}
function displayGuess(guess) {
  userInput.value = '';
  Slots.innerHTML += `${guess}  `;
  numGuess++;
  LastSlots.innerHTML = `${11 - numGuess}`;
}
function displayMsg(message) {
  LowerHigh.innerHTML = `<h2>${message}</h2>`;
}
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNum = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    Slots.innerHTML = '';
    LastSlots.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    StartOver.removeChild(p);
    playGame = true;
  });
}
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`;
  StartOver.appendChild(p);
  playGame = false;
  newGame();
}

```