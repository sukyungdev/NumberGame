// 1. 유저가 숫자를 입력한다.
// 2. 컴퓨터는 랜덤 숫자를 뽑는다.
// 3. 유저가 입력한 숫자와 컴퓨터 숫자를 비교한다.
// 4. if computer's number is bigger tha user, than
// output is "up" else if smaller "down" else same "ok"


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
  if(userValue < 0 || userValue > 100 || userValue === "") {
    resultArea.innerText = "Please input a number from 1 to 100.";
    return;
  }

  // history user value
  if(history.includes(userValue)) {
    resultArea.innerText = "Number already inputed. Please input a different number.";
    return;
  }

  history.push(userValue);
  console.log(history);
  
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
  chances --;
  chanceArea.innerText = `chance : ${chances}`;

  if (chances == 0) {
    resultArea.innerText = "All the chances are gone. Please reset it.";
    startBtn.disabled = true;
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








