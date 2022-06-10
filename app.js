// Coded by sukyungdev
// last update 2022.06.10

// Number guess game
// 1. The user inputs a number.
// 2. The JavaScript selects random number.
// 3. Compare the number input by the user with the random number of the JavaScript.
// 4. The user has to guess the number of JavaScripts within seven times.
// 5. The user can reset the game by clicking the Reset button.

// creation value
const userInput = document.querySelector("#number-input");
const startBtn = document.querySelector(".start-btn");
const resetBtn = document.querySelector(".reset-btn");
const resultArea = document.querySelector(".result");
const chanceArea = document.querySelector(".chance");

let computerNum = randomNum();
let userValue;
let chances = 7;
let history = [];

//eventListener
startBtn.addEventListener("click", gameStart);
resetBtn.addEventListener("click", gameReset);
userInput.addEventListener("focus", function () {
  userInput.value = "";});


//function

//game-start
function gameStart(event){
  event.preventDefault();
  userValue = userInput.value;
  
  //check user-value
  if(userValue <= 0 || userValue > 100 || userValue === "") {
    resultArea.innerText = "Please input a number from 1 to 100.";
    return;
  }

  // history user value
  if(history.includes(userValue)) {
    resultArea.innerText = "This number already input. Please input a different number.";
    return;
  }

  history.push(userValue);
  console.log(history);
  
  //check chance
  chances --;
  chanceArea.innerText = `chance : ${chances}`;

 // compare user number and computer number
  if(userValue < computerNum) {
    resultArea.innerText = "Hint: The answer is a larger number.";
  } else if (userValue > computerNum) {
    resultArea.innerText = "Hint: The answer is a smaller number.";
  } else if(userValue == computerNum){
    resultArea.innerText = "That's correct!!😊";
    startBtn.disabled = true;
    startBtn.classList.add("opacity")
  }
  
  //check chance

  if (chances < 0) {
    resultArea.innerText = "All the chances are gone. Please reset it.";
    startBtn.disabled = true;
    chanceArea.innerText = `chance : 0`;
  }

}

//game-reset
function gameReset(){
  computerNum = randomNum();
  startBtn.disabled = false;
  startBtn.classList.remove("opacity")
  userInput.value = "";
  chances = 7;
  resultArea.innerText = "You can watch result here!";
  chanceArea.innerText = `chance: ${chances}`;
  history = [];
}

//pick randomNumber
function randomNum(){
  let randomNumber = Math.floor(Math.random(0,1) * 100) + 1;
  console.log(randomNumber);
  return randomNumber;
}








