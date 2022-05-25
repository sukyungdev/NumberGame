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
    resultArea.innerText = "1부터 100까지의 숫자를 입력해 주세요.";
    return;
  }

  // history user value
  if(history.includes(userValue)) {
    resultArea.innerText = "이미 입력한 값입니다. 다른값을 입력해 주세요.";
    return;
  }

  history.push(userValue);
  console.log(history);
  
  // compare user number and computer number
  if(userValue < computerNum) {
    resultArea.innerText = "UP";
  } else if (userValue > computerNum) {
    resultArea.innerText = "DOWN";
  } else if(userValue == computerNum){
    resultArea.innerText = "맞추셨습니다!";
    startBtn.disabled = true;
    startBtn.classList.add("opacity")
  }
  
  chances --;
  chanceArea.innerText = `남은 찬스 : ${chances}`;

  if (chances < 0) {
    resultArea.innerText = "찬스가 모두 소진되었습니다. 리셋해주세요.";
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
  resultArea.innerText = "결과가 이곳에 나타납니다!";
  chanceArea.innerText = `남은 찬스 : ${chances}`;
  history = [];
}

//pick randomNumber
function randomNum(){
  let randomNumber = Math.floor(Math.random(0,1) * 100) + 1;
  console.log(randomNumber);
  return randomNumber;
}








