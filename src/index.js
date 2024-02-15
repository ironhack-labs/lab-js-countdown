const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", startButtonHandler);


function startButtonHandler() {
  startCountdown();
};




// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...
  let remainingTime = 10;
const intervalId = setInterval(function () {
  const divElement = document.querySelector("#time");
  startButton.disabled = true;
  if (remainingTime >= 0) {
    divElement.innerText = remainingTime;
  } else {
  
    clearInterval(intervalId);
    showToast();
  }
 
  remainingTime--;
}, 1000);
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  const element = document.querySelector("#toast");
  const list = element.classList;
  list.add("show");



  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
