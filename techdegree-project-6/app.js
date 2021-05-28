//Variables

let missed = 0;
const qwertyKeys = document.getElementById("qwerty");
const qwertyLetters = document.getElementsByTagName("button");
const startGameButton = document.querySelector("#overlay a");
const startScreen = document.getElementById("overlay");
let phrase = document.getElementById("phrase");
let letterFound = "null";
const hearts = document.querySelectorAll(".tries");
const title = document.querySelector("h2");
const letters = document.getElementsByClassName("letter");
let guesses = document.getElementsByClassName("show");
const ul = phrase.querySelector("ul");

// Phrases Array

const phrases = [
  "Titanic",
  "Braveheart",
  "Lord of the Rings",
  "Saving Private Ryan",
  "Gone with the Wind",
  "A Walk to Remember",
  "Jurrasic Park",
  "The Grudge",
  "Gladiator",
  "Sound of Music"
];

// Start Button

startGameButton.addEventListener("click", () => {
  startScreen.style.display = "none";
});

//Random Phrase

function randomPhrase() {
  const highest = phrases.length;
  const draw = Math.floor(Math.random() * highest);
  return phrases[draw];
}

//Create Array of Letters

function getRandomPhraseAsArray() {
  const arrayOfLetters = randomPhrase().split("");
  return arrayOfLetters;
}

//Display Phrases

function addPhraseToDisplay() {
  const phraseToProcess = getRandomPhraseAsArray();
  for (let i = 0; i < phraseToProcess.length; i++) {
    const li = document.createElement("li");
    li.textContent = phraseToProcess[i];
    if (phraseToProcess[i] !== " ") {
      li.className = "letter";
    } else {
      li.className = "space";
    }
    ul.appendChild(li);
  }
}
addPhraseToDisplay();

// Check Letter Function

const checkLetter = input => {
  letterFound = false;
  let key = input.textContent;
  const phraseLi = document.querySelectorAll("ul li");
  for (let i = 0; i < phraseLi.length; i += 1) {
    let letter = phraseLi[i].textContent.toLowerCase();
    if (key === letter) {
      let match = phraseLi[i];
      match.className = "letter show";
      letterFound = input.textContent;
    }
    input.setAttribute("class", "chosen");
    input.setAttribute("disabled", "");
  }
};

//Check Win Function

function checkWin() {
  if (missed === 5) {
    startScreen.setAttribute("class", "lose");
    title.textContent = "Ooops! Try again!";
    startGameButton.textContent = "Play Again!";
    startScreen.style.display = "";
    startGameButton.addEventListener("click", () => {
      gameReset();
    });
  }
  if (letters.length === guesses.length) {
    startScreen.setAttribute("class", "win");
    title.textContent = "You Win!";
    startGameButton.textContent = "Play Again!";
    startScreen.style.display = "";
    startGameButton.addEventListener("click", () => {
      gameReset();
    });
  }
}

//Game Reset Function

function gameReset() {
  //
  let oldPhrase = document.querySelectorAll("ul li");
  for (let i = 0; i < oldPhrase.length; i += 1) {
    ul.removeChild(oldPhrase[i]);
  }
  addPhraseToDisplay();
  for (let i = 0; missed > 0; i++) {
    missed -= 1;
    hearts[missed].innerHTML = '<img src="images/liveHeart.png">';
  }
  for (let i = 0; qwertyLetters.length > i; i++) {
    qwertyLetters[i].removeAttribute("class");
    qwertyLetters[i].removeAttribute("disabled");
  }
  startScreen.setAttribute("class", "start");
  startScreen.style.display = "none";
}

// Event Listener for Key sLetters

qwertyKeys.addEventListener("click", () => {
  let click = event.target;
  if (click.tagName === "BUTTON") {
    checkLetter(click);
    if (!letterFound) {
      missed += 1;
      hearts[missed - 1].innerHTML = '<img src="images/lostHeart.png">';
    }
  }
  setTimeout("checkWin()", 2000);
});
